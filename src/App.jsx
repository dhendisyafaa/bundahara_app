import { useCart } from "react-use-cart";
import ProductCard from "./components/ProductCard";
import clsx from "clsx";
import { useState } from "react";

const App = () => {
  const { items, cartTotal } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const PRODUCTS = [
    {
      id: 1,
      name: "Mochi",
      price: 3000,
      image: "/images/mochi.jpg",
    },
    {
      id: 2,
      name: "Pentol",
      price: 8000,
      image: "/images/pentol.jpg",
    },
    {
      id: 3,
      name: "Tulang",
      price: 1000,
      image: "/images/tulang.jpg",
    },
    {
      id: 4,
      name: "Small: Es Teh Original",
      price: 3000,
      image: "/images/teh_poci.jpg",
      description: "Ukuran Kecil",
    },
    {
      id: 5,
      name: "Large: Es Teh Original",
      price: 5000,
      image: "/images/teh_poci.jpg",
      description: "Ukuran Besar",
    },
    {
      id: 6,
      name: "Flavour: Es Teh",
      price: 6000,
      image: "/images/teh_poci.jpg",
      description: "Dengan Perisa",
    },
    {
      id: 7,
      name: "Kopi",
      price: 5000,
      image: "/images/coffee.jpg",
    },
  ];

  const handleOpenSidebar = (condition) => {
    setIsOpen(condition);
  };

  return (
    <div>
      <div className="w-full sm:w-[50%] md:w-[70%] flex items-center justify-between fixed top-0 bg-white z-50 shadow-md p-5 text-red-600 font-bold text-lg">
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-store"
          >
            <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
            <path d="M2 7h20" />
            <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
          </svg>
          Bundahara App
        </div>
        <button
          className="bg-red-600 rounded-md text-white text-xs py-2 px-3 sm:hidden block"
          type="button"
          onClick={() => {
            handleOpenSidebar(!isOpen);
          }}
        >
          Detail
        </button>
      </div>
      <div className="flex w-full justify-between">
        <div className="sm:w-[50%] md:w-[70%] mt-20 flex flex-wrap gap-4 p-5">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div
          className={clsx(
            `sm:flex sm:w-[50%] md:w-[30%] fixed top-0 right-0 h-full p-5 rounded-tl-2xl rounded-bl-2xl bg-red-600 text-white  flex-col justify-between z-[9999]`,
            !isOpen && "hidden"
          )}
        >
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold">Rincian Pembelian</p>
              <button
                className="bg-white rounded-md text-red-600 text-xs py-2 px-3 sm:hidden block"
                type="button"
                onClick={() => {
                  handleOpenSidebar(false);
                }}
              >
                Close
              </button>
            </div>
            <hr />
            <div>
              <div className="grid grid-cols-3 font-semibold">
                <p>Nama Produk</p>
                <p className="text-end">Jumlah Terjual</p>
                <p className="text-end">Total</p>
              </div>
              {items.length > 0 ? (
                items.map((item) => {
                  const totalPricePerProduct = item.price * item.quantity;
                  return (
                    <div
                      key={item.id}
                      className="grid grid-cols-3 text-sm font-semibold border-b-red-200 border-b py-2"
                    >
                      <p>{item.name}</p>
                      <p className="text-end">{item.quantity}</p>
                      <p className="text-end">
                        Rp{totalPricePerProduct.toLocaleString()}
                      </p>
                    </div>
                  );
                })
              ) : (
                <p className="text-center py-5 text-sm">
                  Belum ada data di sini!
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-between pt-3 border-t">
            <p className="text-lg font-bold">Uang terkumpul:</p>
            <p className="text-lg font-bold">Rp{cartTotal.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
