import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DealsPage = () => {

    const [showdeals, setShowdeals] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://back-ecom-six.vercel.app/user/Deals', { withCredentials: true })
            .then((res) => {
                const msg = res.data.msg;
                if (msg == "0 Deals is live !") {
                    console.log("No deals is live !");
                } else {
                    setShowdeals(false);
                    const data = res.data.Deals
                    console.log(data);
                    setData(data);
                    console.log(res);
                }


            }).catch((err) => {
                console.log(err);
            })
    },[]);


    return (



        <>

            <div className={`${showdeals ? "block" : "hidden"} items-center text-center mt-10 text-red-600 mb-40 pt-8 pb-20`}>No deals is Live</div>

            <div className={` ${showdeals ? "hidden" : "block"} grid grid-col-2 md:grid-cols-2 gap-4`}>

                {data.map((deal) => {
                    return (
                    <div class=" mx-10 mt-10 mb-4 flex max-w-xs flex-col overflow-hidden border border-gray-100 bg-white ">
                        <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="/product">
                            <img class="object-cover" src="./motorola.png" alt="product image" />
                            <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{deal.
                                OfferAmmount
                            }</span>
                            <span class="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{deal.
                                Store
                            }</span>
                        </a>

                        <div class="mt-4 px-5 pb-5">
                            <a href="/product">
                                <h5 class="text-xl tracking-tight text-slate-900">{deal.DealTitle
                                }</h5>
                            </a>
                            <div class="mt-2 mb-2 flex items-center justify-between">
                                <p>
                                    <span class="text-3xl font-bold text-slate-900">{deal.Price}</span>
                                    {/* <span class="text-sm text-slate-900 line-through">$699</span> */}
                                </p>

                            </div>

                            <a href={`/product/${deal._id}`} class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Buy</a
                            >

                        </div>
                    </div>)
                })}




                {/* second div  */}







            </div>

        </>

    )
}

export default DealsPage