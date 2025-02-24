import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center py-4 bg-green-800 text-white shadow-lg">
      <div className="container flex justify-between items-center px-6">
        <Link to="/" className="text-2xl font-bold hover:text-gray-300 transition">Farmácia</Link>

        <div className="flex gap-6">
          <Link to="/categorias" className="hover:underline">Categorias</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
