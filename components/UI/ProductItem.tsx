'use client'
import Image from "next/image";
import React from "react";
import { urlFor } from "../../sanity";
import {
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
interface Props {
  product: Product;
}
 import {AiOutlineShoppingCart} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/CartSlice";
import { toast } from "react-hot-toast";
function ProductItem({ product }: Props) {
  const dispatch = useDispatch()
  const addItemToBasket = ()=> {
    dispatch(addToCart(product))
    toast.success(`${product.title} added to cart`, {
      position : "bottom-right",
    })
  }
  return (
    <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383c] p-8 md:h-[400px] md:w-[400px]">
      <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          alt={product.title}
          layout="fill"
          objectFit="contain"
        >
          {/* THE URL FOR METHOD ALLOWS YOU TO GET THE URL FROM SANITY WITHOUT DIGGING INTO THE ASSET OBJECT AND THEN BUILDS THE URL TO A STRING */}
        </Image>
      </div>

      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-2xl">
          <p>{product.title}</p>
          <p>${product.price}</p>
        </div>

        <div
          className="flex h-14 w-14 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 md:h-[70px] md:w-[70px]"
          onClick={addItemToBasket}
        >
          <AiOutlineShoppingCart className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
