import axios from 'axios';
import { financeApi } from './config';

// const createCategory = async (category: { name: string; description?: string }) => {
//   await axios.post()
// }

const getCategories = async () => {
  const response = await financeApi.get('/categories');
  console.log('🚀 ~ response:', response);
  // return response.data;
}
// getCategories()

export {
  getCategories,
}