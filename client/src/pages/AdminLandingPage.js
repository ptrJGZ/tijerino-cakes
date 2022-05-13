import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from "@mui/icons-material/";
import ProductModal from "../components/ProductModal";

function AdminLandingPage() {
  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState("");
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleProductClick = (product) => {
    setProductId(product._id);
    handleOpen();
  };

  const products = data?.products || [];

  return (
    <>
      <Button onClick={handleOpen} variant="contained" endIcon={<AddIcon />}>
        Add Product
      </Button>
      <ProductModal
        open={open}
        handleClose={handleClose}
        productId={productId}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 512 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell>{product._id}</TableCell>
                <TableCell>{product.productName}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleProductClick(product)}>
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
            <TableRow></TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AdminLandingPage;
