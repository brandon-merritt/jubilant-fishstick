import React, { useEffect, useState } from 'react';
import { getMenu } from '../services/api';

const Menu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
            const data = await getMenu();
            setMenu(data);
        };
        fetchMenu();
    }, []);

    return (
        <div>
            <h1>Menu</h1>
            <ul>
                {menu.map(item => (
                    <li key={item.id}>{item.drink} - ${item.cost}</li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;