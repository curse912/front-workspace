import axios from "axios";
import type { Menu } from "../type/menu";
const api = axios.create({
    baseURL : "http://localhost:8081/api",
    withCredentials: false
})
export const loadMenus = async function() {
   //const response = await api.get<Menu[]>("/menus");
   //return response.data;
   return api.get<Menu[]>("/menus");
};