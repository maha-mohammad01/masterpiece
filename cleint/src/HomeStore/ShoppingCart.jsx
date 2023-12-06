// استيراد useNavigate
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const Table = styled.table`
  width: 100%;
`;

const Button = styled.button`
  background-color: rgb(16 185 129);
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const CheckboxLabel = styled.label`
  margin-left: 8px;
  color: rgb(16 185 129); 
  font-weight: bold;
`;

const ShoppingCart = ({ onAddToCart }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [delivery, setDelivery] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.products) {
      onAddToCart(location.state.products);
    }

    fetch('http://localhost:3010/product')
      .then((response) => response.json())
      .then((data) => {
        setCart(data.map((product) => ({ ...product, quantity: 1 })));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [location.state, onAddToCart]);

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const removeProduct = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const calculateTotal = () => {
    let total = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    if (delivery) {
      total += 10;
    }
    return total.toFixed(2);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="bg-white h-screen py-8 mt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <Table>
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Quantity</th>
                      <th className="text-left font-semibold">Total</th>
                      <th className="text-left font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product) => (
                      <tr key={product.id}>
                        <td className="py-4">
                          <div className="flex items-center">
                            <img
                              className="h-16 w-16 mr-4"
                              src={product.image}
                              alt="Product image"
                            />
                            <span className="font-semibold">{product.title}</span>
                          </div>
                        </td>
                        <td className="py-4">${product.price.toFixed(2)}</td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <Button
                              className="border rounded-md py-2 px-4 mr-2"
                              onClick={() => updateQuantity(product.id, product.quantity - 1)}
                            >
                              -
                            </Button>
                            <span className="text-center w-8">{product.quantity}</span>
                            <Button
                              className="border rounded-md py-2 px-4 ml-2"
                              onClick={() => updateQuantity(product.id, product.quantity + 1)}
                            >
                              +
                            </Button>
                          </div>
                        </td>
                        <td className="py-4">${(product.price * product.quantity).toFixed(2)}</td>
                        <td className="py-4">
                          <Button
                            className="bg-emerald-500 text-white py-2 px-4 rounded-md mr-2"
                            onClick={() => removeProduct(product.id)}
                          >
                            Remove
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${calculateTotal()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>$1.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>${delivery ? '10.00' : '0.00'}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${(parseFloat(calculateTotal()) + 1.99).toFixed(2)}</span>
                </div>
                <CheckboxContainer>
                  <input
                    type="checkbox"
                    id="deliveryCheckbox"
                    checked={delivery}
                    onChange={() => setDelivery(!delivery)}
                  />
                  <CheckboxLabel htmlFor="deliveryCheckbox">Delivery</CheckboxLabel>
                </CheckboxContainer>
                <Button className="bg-emerald-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;


