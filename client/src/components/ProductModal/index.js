import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "../../utils/mutations";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  bgcolor: "background.paper",
  transform: "translate(-50%, -50%)",
  p: 4,
  boxShadow: 24,
  borderRadius: "3%",
};

function ProductModal({ open, handleClose, currentProduct, action }) {
  const [formState, setFormState] = useState({
    productName: currentProduct?.productName || "",
    price: currentProduct?.price || "",
    description: currentProduct?.description || "",
  });

  const [addProduct, { error }] = useMutation(ADD_PRODUCT, {
    update(cache, { data: { addProduct } }) {
      try {
        const { products } = cache.readQuery({ query: QUERY_PRODUCTS });
        cache.writeQuery({
          query: QUERY_PRODUCTS,
          data: { products: [...products, addProduct] },
        });
      } catch (e) {
        console.log(e);
      }
    },
  });

  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  const [deleteProduct] = useMutation(DELETE_PRODUCT, {
    update(cache, { data: { deleteProduct } }) {
      try {
        const identity = cache.identify(deleteProduct);

        cache.evict({ id: identity });
        cache.gc();
      } catch (e) {
        console.log(e);
      }
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (action === "add") {
        await addProduct({
          variables: { ...formState },
        });
      } else {
        await updateProduct({
          variables: { productId: currentProduct._id, ...formState },
        });
      }
    } catch (e) {
      console.log(e);
    }

    handleClose();
  };

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      const { productId } = currentProduct._id;
      await deleteProduct({
        variables: { productId },
      });
    } catch (e) {
      console.log(e);
    }

    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <form onSubmit={handleSubmit}>
          <Typography>{action === "edit" ? "Edit" : "Add"} Product</Typography>
          <Typography>Name</Typography>
          <TextField
            name="productName"
            defaultValue={currentProduct?.productName}
            onChange={handleChange}
          />
          <Typography>Price</Typography>
          <TextField
            name="price"
            defaultValue={currentProduct?.price}
            onChange={handleChange}
          />
          <Typography>Description</Typography>
          <TextField
            name="description"
            defaultValue={currentProduct?.description}
            onChange={handleChange}
          />
          <Button type="submit">Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </form>

        <div>
          <Typography>Delete Product</Typography>
          <Typography>Are you sure you want to delete this item?</Typography>
          <Button onClick={handleDelete}>Delete</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </div>
      </Box>
    </Modal>
  );
}

export default ProductModal;
