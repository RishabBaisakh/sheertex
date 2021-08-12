import React from "react";

function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-center w-full lg:p-16 sm:p-0 sm:w-full">
      <div className="bg-yellow-200 p-6 min-h-full text-left lg:flex-1 sm:w-full">
        <h4 class="font-bold text-lg">Get 15% off - Join our mailing list</h4>
        <h4 class="font-bold mt-2">
          Be the first to get updates on special offers, products launches, and
          insider exclusives
        </h4>
        <form class="w-full mt-4 sm:w-full">
          <div class="flex items-center border-b border-black py-2 sm:w-full">
            <input
              class="text-black appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="YOUR EMAIL"
              aria-label="Full name"
            />
            <button
              class="text-black flex-shrink-0 hover:bg-teal-700 text-2xl py-1 px-2"
              type="button"
            >
              &rarr;
            </button>
          </div>
        </form>
      </div>
      {/* <div className="flex p-6 min-h-full text-left lg:flex-1 sm:w-full"> */}
      <div class="flex w-full p-6 min-h-full text-left lg:flex-1 sm:w-full">
        <div class="flex-1">
          <h4 class="text-xl font-medium mb-2">About</h4>
          <ul>
            <li>Our Story</li>
            <li>Our Knit</li>
            <li>Reviews</li>
            <li>FAQ</li>
            <li>Careers</li>
          </ul>
        </div>
        <div class="flex-1">
          <h4 class="text-xl font-medium mb-2">Shop</h4>
          <ul>
            <li>Home</li>
            <li>Shop All</li>
            <li>Gift Card</li>
            <li>Refer a Friend</li>
          </ul>
        </div>
      </div>
      <div className="flex min-h-full text-left w-96 lg:flex-1 sm:w-full p-6">
        <div class="flex-1">
          <h4 class="text-xl font-medium mb-2">Contact</h4>
          <p class="mb-2">7471 Avenue Leonard-De Vinci, Montreal, QC H2A 2P3</p>
          <p>1 800-715-1658</p>
          <p class="text-sm">hello@sheetex.com</p>
        </div>
        <div class="flex-1">
          <img src="/logo.png" class="mx-auto h-16" />
          <h4 class="font-bold text-center text-sm mt-2">
            SUBSTANTIALLY MADE IN MONTREAL, CANADA
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
