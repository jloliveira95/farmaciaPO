import axios from "axios";
import { Categoria } from "../models/Categoria";

const API_URL = "https://farmacia-jjxo.onrender.com/categorias"; // URL base 

export const CategoriaService = {
  listar: async (): Promise<Categoria[]> => {
    const response = await axios.get(API_URL); // GET /categorias
    return response.data;
  },
  cadastrar: async (categoria: Categoria) => {
    const response = await axios.post(API_URL, categoria); // POST /categorias
    return response.data;
  },
  atualizar: async (categoria: Categoria) => {
    const response = await axios.put(API_URL, categoria); // PUT /categorias
    return response.data;
  },
  deletar: async (id: number) => {
    await axios.delete(`${API_URL}/${id}`); // DELETE /categorias/{id}
  },
};
