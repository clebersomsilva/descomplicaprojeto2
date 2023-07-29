import React, { useState } from 'react';

const products = [
  {
    name: 'CAMISETA',
    description: 'camiseta para vencedores',
    color: 'verde,roxa,com logo branco',
    size: 'P,M,G,GG',
    price: 50,
  },
  {
    name: 'CAMISETA',
    description: 'camiseta verde estadio',
    color: 'verde e branca',
    size: 'P,M,G,GG',
    price: 30,
  },
];

const Product = ({ product, onAddToCart }) => (
  <div>
    <h6>{product.name}</h6>
    <div>Descrição:<span class="pl-2">{product.description}</span></div>
    <div>Cor:<span class="pl-3">{product.color}</span></div>
    <div>tamanho:<span class="pl-4">{product.size}</span></div>
    <button onClick={() => onAddToCart(product)}>Adicionar ao carrinho</button>
  </div>
);

const CartItem = ({ item, onRemoveFromCart }) => (
  <div>
    <h6>{item.product.name}</h6>
    <div>Quantidade: {item.quantity}</div>
    <div>Total: R${item.quantity * item.product.price}</div>
    <button onClick={() => onRemoveFromCart(item.product)}>Remover do carrinho</button>
  </div>
);

const Cart = ({ items, onRemoveFromCart }) => {
  const total = items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);

  return (
    <div>
      <h5>Carrinho</h5>
      {items.map(item => (
        <CartItem key={item.product.name} item={item} onRemoveFromCart={onRemoveFromCart} />
      ))}
      <div>Total: R${total}</div>
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const itemIndex = cartItems.findIndex(item => item.product.name === product.name);
    if (itemIndex === -1) {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].quantity += 1;
      setCartItems(newCartItems);
    }
  };

  const handleRemoveFromCart = (product) => {
    const itemIndex = cartItems.findIndex(item => item.product.name === product.name);
    if (itemIndex !== -1) {
      const newCartItems = [...cartItems];
      if (newCartItems[itemIndex].quantity === 1) {
        newCartItems.splice(itemIndex, 1);
      } else {
        newCartItems[itemIndex].quantity -= 1;
      }
      setCartItems(newCartItems);
    }
  };

  return (
    <div>
      <h1>Loja de camisetas</h1>
      {products.map(product => (
        <Product key={product.name} product={product} onAddToCart={handleAddToCart} />
      ))}
      <hr />
      <Cart items={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default App;
