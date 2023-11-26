import axios from "axios";

const BASE_RESET_API_URL = 'http://localhost:8080/api/todos';

// export function getAllTodos(){
//     return axios.get(BASE_RESET_API_URL);
// }

export const getAllTodos = () => axios.get(BASE_RESET_API_URL)