import axios from 'axios';

export const getProductsByCriteria = async (productsToFind) => {
    try {
        const response = await axios.get(`${process.env.BACKEND_URL}/product/${productsToFind}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching products by criteria: ${error}`);
    }
};