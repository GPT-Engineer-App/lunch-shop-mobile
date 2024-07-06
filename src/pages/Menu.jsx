import { Button } from "@/components/ui/button";

const categories = [
  { name: "Pizzas", image: "/images/pizzas.jpg" },
  { name: "Pollo", image: "/images/pollo.jpg" },
  { name: "Adicionales", image: "/images/adicionales.jpg" },
  { name: "Bebidas", image: "/images/bebidas.jpg" },
  { name: "Postres", image: "/images/postres.jpg" },
];

const MenuPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-4">Empieza tu pedido</h1>
        <div className="flex justify-center space-x-4">
          <Button className="bg-red-600 text-white">Entrega a domicilio</Button>
          <Button className="bg-red-600 text-white">Recoger en tienda</Button>
        </div>
      </div>
      <p className="text-center mb-6">
        Este es nuestro menú nacional. Para consultar los precios, ofertas y los productos disponibles para ti,{" "}
        <a href="#" className="text-blue-600 underline">escoge tu tienda más cercana</a>.
      </p>
      <div className="grid grid-cols-1 gap-4">
        {categories.map((category) => (
          <div key={category.name} className="flex items-center border p-4">
            <img src={category.image} alt={category.name} className="w-24 h-24 object-cover mr-4" />
            <h2 className="text-2xl font-semibold">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;