// src/pages/OrderForm.js
import React, { useState } from 'react';
import { placeOrder } from '../services/api';

const OrderForm = () => {
    const [name, setName] = useState('');
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const order = { name, item, quantity };
        try {
            const response = await placeOrder(order);
            if (response.message) {
                setMessage(`Success: ${response.message}`);
            } else {
                setMessage('Failed to place order.');
            }
        } catch (error) {
            setMessage('Failed to place order.');
        }
    };

    return (
        <div>
            <h1>Place an Order</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                </div>
                <div>
                    <label>
                        Item:
                        <input type="text" value={item} onChange={(e) => setItem(e.target.value)} required />
                    </label>
                </div>
                <div>
                    <label>
                        Quantity:
                        <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required min="1" />
                    </label>
                </div>
                <button type="submit">Place Order</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default OrderForm;
