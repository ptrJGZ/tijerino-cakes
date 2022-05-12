import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { ADD_PRODUCT } from "../../utils/mutations";
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

function ProductFormModal({ open, onClose }) {
  const [formState, setFormState] = useState({
    productName: "",
    price: "",
    description: "",
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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addProduct({
        variables: { ...formState },
      });
    } catch (e) {
      console.log(e);
    }

    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style} component="form" onSubmit={handleSubmit}>
        <Typography>Add Product</Typography>
        <Typography>Name</Typography>
        <TextField name="productName" onChange={handleChange} />
        <Typography>Price</Typography>
        <TextField name="price" onChange={handleChange} />
        <Typography>Description</Typography>
        <TextField name="description" onChange={handleChange} />
        <Button type="submit">Submit</Button>
        <Button>Close</Button>
      </Box>
    </Modal>
  );
}

export default ProductFormModal;
