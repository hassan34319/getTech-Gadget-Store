import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/slices/CartSlice";
import React from "react";

function CheckoutIconHeader() {
  const items = useSelector(selectCartItems);
  return (
    <Link href="/checkout">
      <div className="relative cursor-pointer">
        {items.length > 0 && (
          <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r  from-[#C33764] to-[#1D2671] text-xs text-[white]">
            {items.length}
            {/* FONT FOR THIS IS IMPORTED IN APP.JS AND ADDED TO TAILWIND.CONFIG.JS  AND THEN TP GLOBAL.CSS*/}
          </span>
        )}
        {/* -top-1 -right-1 means it will negative margin to right and top so moves towards that side. z-index-50 means top priority so on top of evrything */}
        <ShoppingBagIcon className="headerIcon" />
      </div>
    </Link>
  );
}

export default CheckoutIconHeader;
