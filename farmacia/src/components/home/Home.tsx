import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-green-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Seja Bem-Vinde!</h1>
      <p className="text-lg mb-6">Sua Saúde em Primeiro Lugar!</p>

      {/* Botão estilizado para cadastrar nova categoria */}
      <Link 
        to="/categorias/novo" 
        className="bg-white text-green-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition"
      >
        Nova Categoria
      </Link>

      {/* Imagem carregada via link */}
      <img 
        src="https://i.imgur.com/L4ICX81.png" // link correto
        alt="Logo da Farmácia" 
        className="mt-6 w-60 rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Home;
