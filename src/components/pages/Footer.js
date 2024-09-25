import React from 'react';
import { FaHome, FaTags, FaUser } from 'react-icons/fa';

const Footer = () => {
  return (

    <div className=''>


      {/* Desktop View  */}
      <footer class="bg-gray-800 md:block hidden">
        <div class="mx-auto grid max-w-screen-xl gap-x-12 gap-y-8 px-4 py-8 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
          <div class="max-w-sm">
            <div class="mb-6 flex h-12 items-center space-x-2">
              <span class="text-2xl font-bold text-white">Incre<span class="text-blue-600">dibles</span>.</span>
            </div>
            <div class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a officia ea expedita!</div>
          </div>
          <div class="">
            <div class="mb-2 mt-4 font-medium text-blue-600 xl:mb-4">Address</div>

            <div class="text-white pb-2">
              Near Sagar Enclave,<br />
              Mangyawas-302020 <br />
              (Jaipur Office)
              <hr />

            </div>

            <div class="text-white pb-2">
              729 Transport Nagar, <br />
              Transport Nagar-211011 <br />
              (Allahabad Office)

            </div>
            <hr />

            <div class="text-white">
              10/42-Nehru Nagar, <br />
              Sethi House-110065 <br />
              (Delhi Office)
            </div>

          </div>
          <div class="">
            <div class="mb-2 mt-4 font-medium text-blue-600 xl:mb-4">Links</div>
            <nav aria-label="Footer Navigation" class="text-gray-500">

              <ul class="space-y-3">
                <li><a class="text-white hover:text-blue-600 hover:underline" href="/about-us">About Us</a></li>
                <li><a class="text-white hover:text-blue-600 hover:underline" href="/contact">Contact</a></li>
                <li><a class="text-white hover:text-blue-600 hover:underline" href="/faq">FAQ's</a></li>
                <li><a class="text-white hover:text-blue-600 hover:underline" href="/terms-of-service">Terms of Service</a></li>
                <li><a class="text-white hover:text-blue-600 hover:underline" href="/privacy-policy">Privacy Policy</a></li>
              </ul>
            </nav>
          </div>
          <div class="">
            <div class="mb-2 mt-4 font-medium text-white xl:mb-4">Subscribe to our Newsletter</div>
            <div class="flex flex-col">
              <div class="mb-4">
                <input type="email" class="mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 text-gray-800 focus:outline-none focus:outline focus:ring-1 focus:ring-blue-600 sm:w-80" placeholder="Enter your email" />
                <button class="block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div class="bg-gray-800">
          <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-white sm:flex-row sm:justify-between sm:text-left">
            <div class="">© 2024 Incredibles | All Rights Reserved</div>
            <div class="">
              <a class="" href="#">Privacy Policy</a>
              <span>|</span>
              <a class="" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>




      {/* Mobile View  */}
      <div className="fixed bottom-0 left-0 w-full flex md:hidden justify-around items-center border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-4">
        <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <FaHome size={36} />
          <span className="sr-only">Home</span>
        </a>
        <a href="/deals" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <FaTags size={36} />
          <span className="sr-only">My Order</span>
        </a>
        <a href="/profile" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <FaUser size={36} />
          <span className="sr-only">Wallet</span>
        </a>
      </div>


    </div>


  );
};

export default Footer;

