import { useCart } from "react-use-cart";
import propTypes from "prop-types";

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  return (
    <div className="relative">
      {product.description && (
        <div className="absolute bg-red-600 text-white p-1 px-3 font-semibold text-sm max-w-fit rounded-tl-lg rounded-br-lg">
          {product.description}
        </div>
      )}
      <div className="flex flex-col gap-10 p-3 w-[250px] h-fit shadow-md rounded-2xl">
        <div className="space-y-3">
          <img
            src={product.image}
            alt="product_photo"
            className="w-full h-[180px] object-cover object-center rounded-lg"
          />
          <div>
            <p className="text-lg font-bold text-red-600">{product.name}</p>
            <p className="font-semibold text-gray-700">Rp{product.price}</p>
          </div>
        </div>
        <div className="flex gap-1">
          <button
            className="bg-red-600 text-white rounded-lg py-1 font-semibold border-b-4 border-red-800 active:translate-y-1 hover:bg-red-500 duration-150 w-full"
            onClick={() => addItem(product)}
          >
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: propTypes.string,
};

export default ProductCard;
