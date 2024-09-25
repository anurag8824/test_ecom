import React from 'react'

const Accordian = () => {
    return (
        <div className='flex flex-col gap-2 min-h-screen bg-gray-100 px-10'>


            <a href="#" class="flex items-center text-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Edit Profile
            </a>

            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <a href="#" class="flex items-center text-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Manage KYC and Bank Account
            </a>

            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <a href="#" class="flex items-center text-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ">
                MY Cards
            </a>
            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <a href="/faq" class="flex items-center text-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ">
                FAQ's
            </a>

            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <a href="/terms-of-service" class="flex items-center text-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Terms Of Service
            </a>
            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>


            <a href="privacy-policy" class="flex items-center text-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Privacy Policy
            </a>
            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <a href="#" class="flex items-center text-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Contact Support
            </a>


            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <a href="#" class="flex items-center text-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-100 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Log Out
            </a>

            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>


        </div>
    )
}

export default Accordian