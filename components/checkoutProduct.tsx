'use client'
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/CartSlice";
import { urlFor } from "../sanity";


interface Props {
  items: Product[];
  id: string;
}

let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function CheckoutProduct({ items, id }: Props) {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    dispatch(removeFromCart({ id }));
    toast.error(`${items[0].title} removed from cart`, {
      position: "bottom-right",
    });
  };
  const addItemToCart = () => {
    dispatch(addToCart(items[0]));
    toast.success(`${items[0].title} added to cart`, {
      position: "bottom-right",
    });
  };
  return (
    <div className="flex flex-col gap-x-4 border-b border-black pb-5 lg:flex-row lg:items-center">
      <div className="relative h-44 w-44">
        <Image
          src={urlFor(items[0].image[0]).url()}
          alt={items[0].title}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="flex flex-1 items-end lg:items-center">
        <div className="flex-1 space-y-4">
          <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
            <h4 className="font-semibold lg:w-96">{items[0].title}</h4>
            <p className="flex items-end gap-x-1 font-semibold">
              {items.length}
              <button
                onClick={addItemToCart}
                className="group relative inline-flex items-center justify-center overflow-hidden h-4 w-6 rounded-full bg-blue-600 text-sm transition-all hover:bg-white"
              >
                <span className="absolute inset-0 rounded-full border-0 border-white transition-all duration-100 ease-linear group-hover:border-[25px]"></span>
                <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                  +
                </span>
              </button>
            </p>
          </div>
          <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
            Show product details
            <ChevronDownIcon className="h-6 w-6" />
          </p>
        </div>
        <div className="flex flex-col items-end space-y-4">
          <h4 className="text-xl font-semibold lg:text-2xl">
            {USDollar.format(
              items.reduce((total, item) => total + item.price, 0)
            )}
          </h4>
          <button
            onClick={removeItemFromBasket}
            className="text-blue-500 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
