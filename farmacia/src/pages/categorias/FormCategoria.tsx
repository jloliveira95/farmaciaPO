import { useState } from "react";
import { Categoria } from "../../models/Categoria";
import { CategoriaService } from "../../services/CategoriaService";
import { useNavigate } from "react-router-dom";

const FormCategoria = () => {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: "", descricao: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoria({ ...categoria, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (categoria.id === 0) {
      await CategoriaService.cadastrar(categoria);
    } else {
      await CategoriaService.atualizar(categoria);
    }
    navigate("/categorias");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Nova Categoria</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={categoria.nome}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="descricao"
          placeholder="Descrição"
          value={categoria.descricao}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default FormCategoria;
