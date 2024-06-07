const API_URL = 'http://localhost:5000/api';

export const getMenu = async () => {
    const response = await fetch(`${API_URL}/menu`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
};

export const placeOrder = async (order) => {
    const response = await fetch(`${API_URL}/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
    });
    if (!response.ok) {
        throw new Error('Failed to place order');
    }
    return response.json();
};
