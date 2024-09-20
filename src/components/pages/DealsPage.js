import React from 'react'

const DealsPage = () => {
    return (
        // <div className=''>

        //     <div class="grid grid-cols-2 md:grid-cols-2">
        //         <div class="bg-gray-100">
        //             <section class="py-2 bg-white md:py-4 dark:bg-gray-900 antialiased">
        //                 <div class="min-w-screen-sm px-4 mx-auto md:px-0">
        //                     <div class="md:grid md:grid-cols-2 md:gap-4 xl:gap-16">
        //                         <div class="max-w-sm md:max-w-sm mx-auto">
        //                             <img class="w-24" src="./motorola.png" alt="" />

        //                         </div>

        //                         <div class="mt-6 sm:mt-8 md:mt-0">
        //                             <a href='/product'
        //                                 class="text-sm font-semibold text-gray-900 sm:text-xl dark:text-white"
        //                             >
        //                                 Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD,
        //                                 Mac OS, Pink
        //                             </a>
        //                             <div class="mt-2 sm:items-center sm:gap-4 sm:grid">
        //                                 <p
        //                                     class="text-xl font-extrabold text-gray-900 md:text-xl dark:text-white"
        //                                 >
        //                                     $1,249.99
        //                                 </p>

        //                                 <p
        //                                     class="text-sm  text-gray-900 sm:text-sm dark:text-white"
        //                                 >
        //                                     From the card of ICICI
        //                                 </p>


        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </section>
        //         </div>

        //         <div class="bg-gray-100 p-4">

        //         <section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
        //                 <div class="max-w-screen-sm px-4 mx-auto xl:px-0">
        //                     <div class="md:grid md:grid-cols-2 md:gap-8 xl:gap-16">
        //                         <div class="shrink-0 max-w-sm md:max-w-sm mx-auto">
        //                             <img class="w-48" src="./motorola.png" alt="" />

        //                         </div>

        //                         <div class="mt-6 sm:mt-8 md:mt-0">
        //                             <a href='/product'
        //                                 class="text-sm font-semibold text-gray-900 sm:text-xl dark:text-white"
        //                             >
        //                                 Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD,
        //                                 Mac OS, Pink
        //                             </a>
        //                             <div class="mt-4 sm:items-center sm:gap-4 sm:grid">
        //                                 <p
        //                                     class="text-xl font-extrabold text-gray-900 md:text-xl dark:text-white"
        //                                 >
        //                                     $1,249.99
        //                                 </p>

        //                                 <p
        //                                     class="text-sm  text-gray-900 sm:text-sm dark:text-white"
        //                                 >
        //                                     From the card of ICICI
        //                                 </p>


        //                             </div>

        //                             <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">

        //                                 {/* <a
        //                             href="#"
        //                             title=""
        //                             class="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 bg-primary-700 focus:outline-none ring-primary-800 flex items-center justify-center bg-black"
        //                             role="button"
        //                         >
        //                             <svg
        //                                 class="w-5 h-5 -ms-2 me-2"
        //                                 aria-hidden="true"
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 width="24"
        //                                 height="24"
        //                                 fill="none"
        //                                 viewBox="0 0 24 24"
        //                             >
        //                                 <path
        //                                     stroke="currentColor"
        //                                     stroke-linecap="round"
        //                                     stroke-linejoin="round"
        //                                     stroke-width="2"
        //                                     d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
        //                                 />
        //                             </svg>

        //                             Buy Now
        //                         </a> */}

        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </section>




        //         </div>
        //     </div>





















        // </div>

        <>
            <div className='grid grid-col-2 md:grid-cols-2 gap-4'>

                <div class=" mx-10 mt-10 mb-4 flex max-w-xs flex-col overflow-hidden border border-gray-100 bg-white ">
                    <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="/product">
                        <img class="object-cover" src="./motorola.png" alt="product image" />
                        <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">Earn $180</span>
                    </a>
                    <div class="mt-4 px-5 pb-5">
                        <a href="/product">
                            <h5 class="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
                        </a>
                        <div class="mt-2 mb-2 flex items-center justify-between">
                            <p>
                                <span class="text-3xl font-bold text-slate-900">$449</span>
                                {/* <span class="text-sm text-slate-900 line-through">$699</span> */}
                            </p>
                            
                        </div>

                        <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Buy</a
                        >
                        
                    </div>
                </div>



                {/* second div  */}

                <div class=" mx-10 mt-10 mb-4 flex max-w-xs flex-col overflow-hidden border border-gray-100 bg-white ">
                    <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="/product">
                        <img class="object-cover" src="./motorola.png" alt="product image" />
                        <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">Earn $180</span>
                    </a>
                    <div class="mt-4 px-5 pb-5">
                        <a href="/product">
                            <h5 class="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
                        </a>
                        <div class="mt-2 mb-2 flex items-center justify-between">
                            <p>
                                <span class="text-3xl font-bold text-slate-900">$449</span>
                                {/* <span class="text-sm text-slate-900 line-through">$699</span> */}
                            </p>
                            
                        </div>

                        <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Buy</a
                        >
                        
                    </div>
                </div>

                



            </div>

        </>

    )
}

export default DealsPage