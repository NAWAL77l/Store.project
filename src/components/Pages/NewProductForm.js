import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const NewProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    currency: '',
    image_url: '',
    stock: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, price, currency, image_url, stock } = formData;
    
    const newProduct = {
      name,
      description,
      price,
      currency,
      image_url,
      stock
    };
    fetch('./config.json')
      .then(response => response.json())
      .then(data => {
        const updatedProducts = [...data, newProduct];
        const jsonData = JSON.stringify(updatedProducts);
        return fetch('./config.json', {
          method: 'POST',
          body: jsonData,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      })
      .then(() => {
        setFormData({
          name: '',
          description: '',
          price: '',
          currency: '',
          image_url: '',
          stock: ''
        });
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="productName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name" 
        />
      </Form.Group>

      <Form.Group controlId="productDescription">
        <Form.Label>Product Description</Form.Label>
        <Form.Control 
          type="text" 
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter product description" 
        />
      </Form.Group>

      <Form.Group controlId="productPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control 
          type="number" 
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter product price" 
        />
      </Form.Group>

      <Form.Group controlId="productCurrency">
        <Form.Label>Currency</Form.Label>
        <Form.Control 
          type="text" 
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          placeholder="Enter product currency" 
        />
      </Form.Group>

      <Form.Group controlId="productImageUrl">
        <Form.Label>Image URL</Form.Label>
        <Form.Control 
          type="text" 
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
          placeholder="Enter product image URL" 
        />
      </Form.Group>

      <Form.Group controlId="productStock">
        <Form.Label>Stock</Form.Label>
        <Form.Control 
          type="number" 
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          placeholder="Enter product stock" 
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Product
      </Button>
    </Form>
  );
};

export default NewProductForm;
