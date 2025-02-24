import { useEffect, useState } from "react";
import { Categoria } from "../../models/Categoria";
import { CategoriaService } from "../../services/CategoriaService";
import CardCategoria from "../../components/CardCategoria";
import { Link } from "react-router-dom";

const ListarCategorias = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    carregarCategorias();
  }, []);

  const carregarCategorias = async () => {
    try {
      const response = await CategoriaService.listar();
      setCategorias(response);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  };

  const deletarCategoria = async (id: number) => {
    if (window.confirm("Tem certeza que deseja excluir esta categoria?")) {
      try {
        await CategoriaService.deletar(id);
        carregarCategorias();
      } catch (error) {
        console.error("Erro ao excluir categoria:", error);
      }
    }
  };

  return (
    <div className="p-6 bg-green-900 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-white">Categorias</h2>

      {/* Botão para criar nova categoria */}
      <Link to="/categorias/novo" className="bg-green-600 text-white px-6 py-3 rounded-lg mb-6 inline-block hover:bg-green-700 transition">
        Nova Categoria
      </Link>

      {/* Container dos Cards em Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categorias.length === 0 ? (
          <p className="text-white">Nenhuma categoria cadastrada.</p>
        ) : (
          categorias.map((categoria) => (
            <CardCategoria key={categoria.id} categoria={categoria} onDelete={deletarCategoria} />
          ))
        )}
      </div>
    </div>
  );
};

export default ListarCategorias;
