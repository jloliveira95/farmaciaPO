import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Farmácia</h1>
      <div>
        <Link to="/" className="text-lg bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md">
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
