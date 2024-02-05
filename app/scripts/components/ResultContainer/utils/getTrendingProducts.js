import axios from 'axios';

export const getTrendingProducts = async () => {
    try {
        const response = await axios.get(`${process.env.BACKEND_URL}/product/trendingProducts`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching trending products: ${error}`);
    }
};