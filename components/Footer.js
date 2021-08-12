import React from "react";

function Footer() {
  return (
    <footer>
      <div className="flex flex-wrap items-center justify-center w-full lg:p-16 sm:p-0 sm:w-full">
        <div className="bg-yellow-200 p-6 min-h-full text-left lg:flex-1 sm:w-full">
          <h4 class="font-bold text-lg">Get 15% off - Join our mailing list</h4>
          <h4 class="font-bold mt-2">
            Be the first to get updates on special offers, products launches,
            and insider exclusives
          </h4>
          <form class="w-full mt-8 sm:w-full">
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
        <div class="flex w-full px-16 lg:pl-24 lg:pt-0 sm:pt-8 sm:px-6 min-h-full text-left lg:flex-1 sm:w-full">
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
            <p class="mb-2">
              7471 Avenue Leonard-De Vinci, Montreal, QC H2A 2P3
            </p>
            <p>1 800-715-1658</p>
            <p class="text-sm">hello@sheetex.com</p>
          </div>
          <div class="flex-1 sm:hidden lg:block">
            <img src="/logo.png" class="mx-auto h-16" />
            <h4 class="font-bold text-center text-sm mt-2">
              SUBSTANTIALLY MADE IN MONTREAL, CANADA
            </h4>
          </div>
          <div class="flex-1 mt-auto ml-24 sm:block lg:hidden">
            <p class="font-medium">FOLLOW US</p>
            <div class="flex">
              <a href="#">
                <img src="/instagram-brands.svg" class="h-6 ml-3" />
              </a>
              <a href="#">
                <img src="/facebook-f-brands.svg" class="h-6 ml-3" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex min-h-full text-left border-t border-gray-300 mx-8 h-48 pt-8 pb-8 lg:flex-1 sm:w-full p-6 sm:block lg:hidden">
          <div class="flex-1">
            <img src="/logo.png" class="mx-auto h-16" />
            <h4 class="font-bold text-center text-sm mt-2">
              SUBSTANTIALLY MADE IN MONTREAL, CANADA
            </h4>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full lg:px-16 sm:p-0 sm:w-full">
        <div class="flex mr-auto ml-8 sm:hidden lg:block">
          <p class="text-gray-500 mr-4">Select your currency</p>
          <img src="/cad.png" class="h-4 m-auto" />
          <p class="font-bold ml-2">CAD</p>
        </div>
        <div>
          <p>© 2021 Sheertex All Rights Reserved.</p>
        </div>
        <div class="flex font-bold ml-4 justify-between w-28 underline">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
        <div class="flex ml-16 pr-4 sm:hidden lg:block">
          <p class="font-medium">FOLLOW US</p>
          <div class="flex">
            <a href="#">
              <img src="/instagram-brands.svg" class="h-6 ml-3" />
            </a>
            <a href="#">
              <img src="/facebook-f-brands.svg" class="h-6 ml-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
