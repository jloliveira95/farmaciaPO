import { useEffect, useState } from "react";
import { Categoria } from "../../models/Categoria";
import { CategoriaService } from "../../services/CategoriaService";
import { Link } from "react-router-dom";

const ListarCategorias = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    CategoriaService.listar().then(setCategorias);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Categorias</h2>
      <Link to="/categorias/novo" className="bg-green-500 text-white px-4 py-2 rounded">
        Nova Categoria
      </Link>
      <ul className="mt-4 space-y-2">
        {categorias.map((categoria) => (
          <li key={categoria.id} className="p-2 border-b flex justify-between items-center">
            <span>{categoria.nome} - {categoria.descricao}</span>
            <div>
              <Link to={`/categorias/editar/${categoria.id}`} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
                Editar
              </Link>
              <button
                onClick={() => CategoriaService.deletar(categoria.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListarCategorias;
