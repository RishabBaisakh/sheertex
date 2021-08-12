import React from "react";

function Navbar() {
  return (
    <div class="h-16 border-b-2 border-gray-400 w-full justify-between px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
      <div class="lg:flex justify-space-around lg:block sm:hidden">
        <a href="#" class="ml-16 mr-4 font-bold hover:text-gray-500 delay-200">
          TIGHTS
        </a>
        <a href="#" class="mr-4 font-bold hover:text-gray-500 delay-200">
          STOCKINGS
        </a>
        <a href="#" class="font-bold hover:text-gray-500 delay-200">
          SOCKS & ACCESSORIES
        </a>
      </div>
      <div class="flex lg:hidden">
        <img mg src="/bars-solid.svg" class="h-8 mr-4" />
        <img mg src="/search-solid.svg" class="h-8" />
      </div>
      <h3 class="font-bold text-3xl sm:mx-auto">sheertex</h3>
      <div class="flex sm:hidden lg:block mr-20">
        <a href="#" class="mx-4">
          Our Knit
        </a>
        <a href="#" class="mx-4">
          Our Story
        </a>
      </div>
      <div class="flex">
        <img mg src="/search-solid.svg" class="h-8 mr-4 lg:block sm:hidden" />
        <img mg src="/shopping-cart-solid.svg" class="h-8 mr-4" />
        <img mg src="/user-regular.svg" class="h-8" />
      </div>
    </div>
  );
}

export default Navbar;
