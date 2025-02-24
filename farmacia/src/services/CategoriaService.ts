import axios from "axios";
import { Categoria } from "../models/Categoria";

const API_URL = "https://farmacia-jjxo.onrender.com/"; //  URL do backend

export const CategoriaService = {
  listar: async (): Promise<Categoria[]> => {
    const response = await axios.get(API_URL);
    return response.data;
  },
  cadastrar: async (categoria: Categoria) => {
    return await axios.post(API_URL, categoria);
  },
  atualizar: async (categoria: Categoria) => {
    return await axios.put(`${API_URL}/${categoria.id}`, categoria);
  },
  deletar: async (id: number) => {
    return await axios.delete(`${API_URL}/${id}`);
  },
};
