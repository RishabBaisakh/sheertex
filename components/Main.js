import React from "react";

function Main() {
  return (
    <main className="bg-gray-200 p-4 min-h-full flex flex-wrap items-center justify-around sm:w-full px-0 lg:px-40">
      <a
        href="#"
        className="min-h-full text-center border w-96 hover:text-blue-600 focus:text-blue-600 lg:flex-1 lg:p-20 sm:w-full sm:pt-5"
      >
        <img src="/shipping-fast-solid.svg" class="h-14 mb-2 mx-auto" />
        <h3 className="font-bold">FREE SHIPPING</h3>
        <p className="h-20 text-sm mt-4">
          Same day shipping is included in all orders
        </p>
      </a>

      <a
        href="#"
        className="min-h-full text-center border w-96 hover:text-blue-600 focus:text-blue-600 lg:flex-1 lg:p-20 sm:w-full sm:pt-5"
      >
        <img src="/dumbbell-solid.svg" class="h-14 mb-2 mx-auto" />
        <h3 className="font-bold">30-DAY GUARANTEE</h3>
        <p className="h-20 text-sm mt-4">
          Covers any damage that covers your tights unwearable
        </p>
      </a>

      <a
        href="#"
        className="min-h-full text-center border w-96 hover:text-blue-600 focus:text-blue-600 lg:flex-1 lg:p-20 sm:w-full sm:pt-5"
      >
        <img src="/circle-notch-solid.svg" class="h-14 mb-2 mx-auto" />
        <h3 className="font-bold">STRENGTH TESTED</h3>
        <p className="h-20 text-sm mt-4">
          Rated 5 stars by thousands of happy customers
        </p>
      </a>
    </main>
  );
}

export default Main;
