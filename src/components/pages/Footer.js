import React from 'react';
import { FaHome, FaTags, FaUser } from 'react-icons/fa';

const Footer = () => {
  return (

    <div className="overflow-hidden">
      {/* Main Content */}

      <main className="">
        {/* Your main content goes here */}
      </main>


      <footer className="bg-slate-700 dark:bg-gray-900 mt-auto">
        <div className="mx-auto w-auto flex-grow  p-4 py-6 lg:py-8">
          {/* Desktop View */}


          <div className="hidden  md:flex md:justify-between">


            <footer class="bg-slate-700">
              <div class="mx-auto grid text-gray-50 lg:grid-cols-12">
                <div class="flex flex-col items-start border-r border-b border-slate-500 py-8 px-5 sm:flex-row sm:px-8 md:pt-12 lg:col-span-7 xl:pl-32 2xl:pl-40">
                  
                  <p class="pt-4 text-sm leading-6 tracking-wide sm:pl-3 sm:pt-0">Address-(Jaipur Office)</p>
                  <p class="pt-4 text-sm leading-6 tracking-wide sm:pl-3 sm:pt-0">Near Sagar Enclave, Mangyawas Jaipur</p>
                  <p class="pt-4 text-sm leading-6 tracking-wide sm:pl-3 sm:pt-0">(Delhi Office)</p>
                  <p class="pt-4 text-sm leading-6 tracking-wide sm:pl-3 sm:pt-0">10/42-Nehru Nagar,Sethi House Delhi</p>
                  <p class="pt-4 text-sm leading-6 tracking-wide sm:pl-3 sm:pt-0">(Allahabad Office)</p>
                  <p class="pt-4 text-sm leading-6 tracking-wide sm:pl-3 sm:pt-0">729 Transport Nagar Allahabad</p>

                </div>
                <div class="px-5 py-8 sm:px-8 md:pt-14 lg:col-span-5 xl:pr-32 2xl:pr-40">
                  <p class="font-medium text-orange-500">Demo</p>
                  <p class="mb-4 mt-4 text-2xl sm:mb-8 sm:text-5xl">Request a Demo</p>
                  <div class="flex max-w-lg rounded-full bg-white ring-orange-300 focus-within:ring">
                    <input class="w-full rounded-full px-6 text-gray-600 outline-none md:px-10" type="email" placeholder="Enter your email" />
                    <button class="rounded-full bg-orange-600 p-2 ring-orange-300 focus:ring active:scale-105 md:p-5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav aria-label="Footer Navigation" class="flex flex-wrap border-t border-r border-slate-500 px-5 pb-10 sm:py-8 sm:px-8 lg:col-span-7 lg:border-t-0 xl:flex-nowrap xl:space-x-16 xl:pl-32 2xl:pl-40">
                  <ul class="mt-8 mr-4 flex-grow space-y-3 whitespace-nowrap md:mt-0">
                    <li><strong>Follow Us</strong></li>
                    <li><a href="/about-us" className="hover:underline">About Us</a></li>
                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                    <li><a href="/faq" className="hover:underline">FAQ's</a></li>
                  </ul>

                  <ul class="mt-8 mr-4 flex-grow space-y-3 whitespace-nowrap md:mt-0">
                    <li><strong>Company</strong></li>
                    <li><a href="/about-us" className="hover:underline">About Us</a></li>
                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                    <li><a href="/faq" className="hover:underline">FAQ's</a></li>
                  </ul>

                  <ul class="mt-8 mr-4 flex-grow space-y-3 whitespace-nowrap md:mt-0">
                    <li><strong>Legal</strong></li>
                    <li><a href="terms-of-service"> Terms of Service </a></li>
                    <li><a href="privacy-policy"> Privacy Policy </a></li>


                  </ul>
                </nav>
                <div class="border-t border-slate-500 py-4 lg:col-span-12">
                  <p class="text-center text-sm text-gray-400">(2022) In United States copyright law, a copyright notice is a notice of statutorily prescribed form that informs users.</p>
                </div>
              </div>
            </footer>

          </div>

          {/* Mobile View */}
          <div className="fixed bottom-0 left-0 w-full flex md:hidden justify-around items-center border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-4">
            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaHome size={24} />
              <span className="sr-only">Home</span>
            </a>
            <a href="/deals" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaTags size={24} />
              <span className="sr-only">My Order</span>
            </a>
            <a href="/profile" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaUser size={24} />
              <span className="sr-only">Wallet</span>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Footer;

