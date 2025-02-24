import { Categoria } from "../models/Categoria";
import { Link } from "react-router-dom";

interface CardCategoriaProps {
  categoria: Categoria;
  onDelete: (id: number) => void;
}

const CardCategoria = ({ categoria, onDelete }: CardCategoriaProps) => {
  return (
    <div className="bg-gray-300 border border-green-600 rounded-lg shadow-lg p-4 flex flex-col w-full max-w-[300px]">
      <div className="bg-green-600 text-white text-center font-bold rounded-t-lg py-2">
        {categoria.nome}
      </div>
      <div className="flex-grow p-4 text-center text-green-900 bg-gray-100">
        <p className="text-sm text-green-700">{categoria.descricao}</p>
      </div>
      <div className="flex">
        <Link to={`/categorias/editar/${categoria.id}`} className="w-1/2 bg-blue-500 text-white text-center py-2 rounded-bl-lg hover:bg-blue-600 transition">
          Editar
        </Link>
        <button
          onClick={() => onDelete(categoria.id)}
          className="w-1/2 bg-red-500 text-white text-center py-2 rounded-br-lg hover:bg-red-600 transition"
        >
          Deletar
        </button>
      </div>
    </div>
  );
};

export default CardCategoria;
