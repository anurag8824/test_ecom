import React from 'react'

const SingleProduct = () => {
    return (
        <div>
            <section class="py-6 sm:py-6">
                <div class="container mx-auto px-4">
                    <nav class="flex">
                        <ol role="list" class="flex items-center">
                            <li class="text-left">
                                <div class="-m-1">
                                    <a href="#" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Home </a>
                                </div>
                            </li>

                            <li class="text-left">
                                <div class="flex items-center">
                                    <span class="mx-2 text-gray-400">/</span>
                                    <div class="-m-1">
                                        <a href="#" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Deals </a>
                                    </div>
                                </div>
                            </li>

                            <li class="text-left">
                                <div class="flex items-center">
                                    <span class="mx-2 text-gray-400">/</span>
                                    <div class="-m-1">
                                        <a href="#" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page"> Name </a>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </nav>

                    <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-10 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                        <div class="lg:col-span-3 lg:row-end-1">
                            <div class="lg:flex lg:items-start">
                                <div class="lg:order-2 lg:ml-5">
                                    <div class="max-w-xl overflow-hidden rounded-lg">
                                        <img class="h-full w-48 max-w-full object-cover" src="./motorola.png" alt="" />
                                    </div>
                                </div>

                                {/* if we want three images then above will working */}

                                <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                                    <div class="flex flex-row items-start lg:flex-col">
                                        <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                                            <img class="h-full w-full object-cover" src="./motorola.png" alt="" />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                            <h1 class="sm: text-2xl mt-0 font-bold text-gray-900 sm:text-3xl">Product name</h1>

                            <div class="mt-2 flex items-center">
                                <p class="ml-1 text-sm font-medium text-gray-500">Deal Price</p>
                            </div>

                            <div class="mt-3 flex select-none flex-wrap items-center gap-1">
                            </div>

                            <h2 class="mt-2 text-base text-gray-900"></h2>

                            <div class="mt-3 flex select-none flex-wrap items-center gap-1">
                                <label class="">
                                    <input type="radio" name="subscription" value="4 Months" class="peer sr-only" />
                                    <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Rs. 12345</p>
                                    <span class="mt-1 block text-center text-xs">You'll spend</span>
                                </label>
                                <label class="">
                                    <input type="radio" name="subscription" value="8 Months" class="peer sr-only" checked />
                                    <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Rs. 12345</p>
                                    <span class="mt-1 block text-center text-xs">Recieve from yaper</span>
                                </label>

                                <label class="">
                                    <input type="radio" name="subscription" value="12 Months" class="peer sr-only" />
                                    <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Rs. 12345</p>
                                    <span class="mt-1 block text-center text-xs">Total You Recieve</span>
                                </label>

                                <label class="">
                                    <input type="radio" name="subscription" value="12 Months" class="peer sr-only" />
                                    <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Rs. 123</p>
                                    <span class="mt-1 block text-center text-xs">Total Earnings</span>
                                </label>
                            </div>

                            <div class="mt-6 flex flex-col items-center justify-between space-y-4 border-t border-b py-2 sm:flex-row sm:space-y-0">
                                {/* <div class="flex items-end">
                                    <h1 class="text-2xl font-bold">Rs. 123</h1>
                                    <span class="text-base"></span>
                                </div> */}

                                <button type="button" class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    Click To Buy
                                </button>
                            </div>

                            <ul class="mt-8 space-y-2">
                                <li class="flex items-center text-left text-sm font-medium text-gray-600">
                                    <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" class=""></path>
                                    </svg>
                                    100% Secure Prepaid Order
                                </li>

                                <li class="flex items-center text-left text-sm font-medium text-gray-600">
                                    <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" class=""></path>
                                    </svg>
                                    Amount Released on delivery confirmation
                                </li>
                            </ul>

                            <ul class="mt-8 space-y-1">
                                <li class="flex items-center text-left text-sm font-medium text-gray-600">

                                    Order ID
                                    <svg class="w-3.5 h-3.5 ml-2 block align-middle" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                    </svg>
                                </li>

                                <p className='grid'>237GHS@2374</p>

                                <hr />


                                <li class="flex items-center text-left text-sm font-medium text-gray-600">

                                    Order Address
                                    <svg class="w-3.5 h-3.5 ml-2 block align-middle" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                    </svg>
                                </li>

                                <p className='grid'>43, xyz city India</p>

                                <hr />

                                <li class="flex items-center text-left text-sm font-medium text-gray-600">
                                    Transaction ID


                                    <svg class="w-3.5 h-3.5 ml-2 block align-middle" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                    </svg>
                                </li>

                                <p className='grid'>transactionno45898</p>

                                <hr />
                            </ul>




                        </div>






                    </div>
                </div>
            </section>

        </div>
    )
}

export default SingleProduct