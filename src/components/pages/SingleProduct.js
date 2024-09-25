import React, { useEffect, useState } from 'react'
import Name from '../CopyBoard/Name'
import Address from '../CopyBoard/Address'
import PinCode from '../CopyBoard/PinCode'
import { json } from 'react-router-dom'



const SingleProduct = () => {

    // for set value 
    const [order, setOrder] = useState("");
    const [track, setTrack] = useState("");
    const [delivered, setDelivered] = useState("");
    const [flipdelivered, setFlipdelivered] = useState("");

    // for hide and show 
    const [checked, setChecked] = useState(true);
    const [tracked, setTracked] = useState(true);
    const [invoice, setInvoice] = useState(true);

    //for data save to local storage
    const [trackdata, setTrackdata] = useState(() => {
        // const savedData = localStorage.getItem('trackdata');
        // return savedData ? JSON.parse(savedData) : { track: '', delivered: '', flipdelivered: '' };
    });

    // Handle input changes and update state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTrackdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Save form data to localStorage when trackdata changes
    useEffect(() => {
        // localStorage.setItem('trackdata',trackdata);
    }, [trackdata]);


    //   const checking = OrderID.length > 0; 
    const showIdForm = (event) => {
        event.preventDefault();

        setOrder(order);
        setChecked(setChecked(false))
        localStorage.setItem('orderId', order);


    }


    const showTrackForm = (event) => {
        event.preventDefault();

        setTrack(track);
        setDelivered(delivered);
        setFlipdelivered(flipdelivered);

        setTracked(setTracked(true));
        localStorage.setItem('Data', JSON.stringify({
            TrackingId: track,
            deliveredId: delivered,
            support: flipdelivered
        }))


    }
    const Data = localStorage.getItem("Data");
    console.log(Data)

    const hideinvoice = (event) => {
        event.preventDefault();

        setTracked(false);
        setInvoice(false);




    }



    return (
        <div>
            <section class="py-3 sm:py-6">
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

                    <div class="md:flex grid-cols-2 gap-24">

                        <div class=" pt-8 immagess..">

                            <div class="lg:flex lg:items-start">
                                {/* <div class="lg:order-2 lg:ml-5 sm:items-center"> */}
                                    <div class="max-w-xl overflow-hidden rounded-lg md:items-center ">
                                        <img class="h-full w-48 max-w-full object-cover" src="/motorola.png" alt="" />
                                    </div>

                                {/* </div> */}

                            </div>

                            <div className='flex ml-1 text-sm font-medium pb-2 mt-8  text-gray-500 gap-2'>
                                <p>Order Cancelled?</p>
                                <button type="button" class="text-blue-800 hover:text-red-600 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Marked Cancelled</button>
                            </div>


                        </div>


                        <div className='acceptedd.... mb-0'>
                            <div class="md:flex grid-cols-2 gap-1 md:m-4
                             items-center">



                                <a href="https://pagedone.io/" class="pb-3 flex items-center font-medium  ">
                                    <span class="w-6 h-6 text-white bg-indigo-600 border border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-8 lg:h-8">1</span>
                                    <div class="block">
                                        <h4 class="text-base  text-indigo-600">Accepted</h4>
                                    </div>
                                    <svg class="w-5 h-5 ml-2 stroke-gray-900 sm:ml-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 18L9.67462 13.0607C10.1478 12.5607 10.3844 12.3107 10.3844 12C10.3844 11.6893 10.1478 11.4393 9.67462 10.9393L5 6M12.6608 18L17.3354 13.0607C17.8086 12.5607 18.0452 12.3107 18.0452 12C18.0452 11.6893 17.8086 11.4393 17.3354 10.9393L12.6608 6" stroke="stroke-current" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </a>

                                <a class="pb-3 flex items-center font-medium  ">
                                    <span class={`w-6 h-6 ${checked ? "bg-gray-50" : "bg-indigo-600 text-white"}   border border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-8 lg:h-8`}>2</span>
                                    <div class="block">
                                        <h4 class={`text-base  ${checked ? "text-gray-900" : "text-indigo-600"} `} >Ordered</h4>
                                    </div>
                                    <svg class="w-5 h-5 ml-2 stroke-gray-900 sm:ml-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 18L9.67462 13.0607C10.1478 12.5607 10.3844 12.3107 10.3844 12C10.3844 11.6893 10.1478 11.4393 9.67462 10.9393L5 6M12.6608 18L17.3354 13.0607C17.8086 12.5607 18.0452 12.3107 18.0452 12C18.0452 11.6893 17.8086 11.4393 17.3354 10.9393L12.6608 6" stroke="stroke-current" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </a>

                                <a class="pb-3 flex items-center font-medium  ">
                                    <span class={`w-6 h-6 bg-gray-50 ${tracked ? "bg-gray-50" : "bg-indigo-600 text-white"} border border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-8 lg:h-8`}>3</span>
                                    <div class="block">
                                        <h4 class={`text-base  ${tracked ? "text-gray-900" : "text-indigo-600"}`}>Shipped</h4>
                                    </div>
                                    <svg class="w-5 h-5 ml-2 stroke-gray-900 sm:ml-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 18L9.67462 13.0607C10.1478 12.5607 10.3844 12.3107 10.3844 12C10.3844 11.6893 10.1478 11.4393 9.67462 10.9393L5 6M12.6608 18L17.3354 13.0607C17.8086 12.5607 18.0452 12.3107 18.0452 12C18.0452 11.6893 17.8086 11.4393 17.3354 10.9393L12.6608 6" stroke="stroke-current" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </a>

                                <a class="pb-3 flex items-center font-medium  ">
                                    <span class="w-6 h-6 bg-gray-50 text-gray border border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-8 lg:h-8">4</span>
                                    <div class="block">
                                        <h4 class="text-base text-gray-900" >Delivered</h4>
                                    </div>
                                    <svg class="w-5 h-5 ml-2 stroke-gray-900 sm:ml-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 18L9.67462 13.0607C10.1478 12.5607 10.3844 12.3107 10.3844 12C10.3844 11.6893 10.1478 11.4393 9.67462 10.9393L5 6M12.6608 18L17.3354 13.0607C17.8086 12.5607 18.0452 12.3107 18.0452 12C18.0452 11.6893 17.8086 11.4393 17.3354 10.9393L12.6608 6" stroke="stroke-current" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </a>

                                <a class="pb-3 flex items-center font-medium  ">
                                    <span class="w-6 h-6 bg-gray-50 border border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-8 lg:h-8">5</span>
                                    <div class="block">
                                        <h4 class="text-base  text-gray-900">Payment Released</h4>
                                    </div>
                                </a>

                            </div>

                            <div class="pt- 4 yapper.... mt-10">



                                <div className='ml-1 text-sm font-medium pb-2 text-gray-500'>
                                    YaperID - xhsk342dk
                                </div>

                                <div className={`${checked ? "hidden" : "block"} ml-1 text-sm font-medium pb-2 text-gray-500`}>
                                    Flipkart - {order}
                                </div>

                                <div className={`${tracked ? "hidden" : "block"} ml-1 text-sm font-medium pb-2 text-gray-500`}>
                                    Tracking ID - {track}
                                </div>

                                <div className={`${tracked ? "hidden" : "block"} ml-1 text-sm font-medium pb-2 text-gray-500`}>
                                    Delivery Support - {delivered}
                                </div>

                                <div className={`${tracked ? "hidden" : "block"} ml-1 text-sm font-medium pb-2 text-gray-500`}>
                                    FlipCart Delivery Support - {flipdelivered}
                                </div>


                                <div className={`${checked ? "block" : "hidden"} ml-1 hihdden align-middle grid gap-2 text-sm font-medium pb-2 text-gray-500`}>
                                    <p> Order ID </p>

                                    <input onChange={e => { setOrder(e.target.value) }} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz1234" required />

                                    <button type="button" onClick={showIdForm} class="text-white w-24 bg-gray-700 hover:bg-blue-800 focus:ring-4  font-medium w-f rounded-lg text-sm px-5 py-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">SaveId</button>
                                </div>


                                <div className={`${checked ? "hidden" : "block"}`}>

                                    <div className={`${tracked ? "block" : "hidden"} ml-1  text-sm font-medium pb-2  text-gray-500`}>

                                        <form class="grid gap-2 align-middle w-full mx-full">
                                            <label for="countries" class="block text-sm font-medium pb-1 text-gray-500 dark:text-white">Select Tracking ID</label>
                                            <select id="countries" required class="bg-gray-50 border font-medium border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-0 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option selected>Choose a Company</option>
                                                <option value="EKART">E-Kart</option>
                                                <option value="DV">Delhivery</option>
                                                <option value="FEDEX">Fedex</option>
                                                <option value="ATS">ATS</option>
                                                <option value="EXP">E-com Express</option>
                                                <option value="OTH">Others</option>
                                            </select>
                                        </form>

                                    </div>



                                    <div className={`${tracked ? "block" : "hidden"} ml-1 align-middle grid gap-2 text-sm font-medium pb-2 text-gray-500`}>
                                        <p> Tracking ID </p>

                                        <input onChange={e => { setTrack(e.target.value) }} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                    </div>

                                    <div className={`${tracked ? "block" : "hidden"} ml-1 align-middle grid gap-2 text-sm font-medium pb-2 text-gray-500`}>
                                        <p> Delivery Support</p>

                                        <input onChange={e => { setDelivered(e.target.value) }} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                    </div>

                                    <div className={`${tracked ? "block" : "hidden"} ml-1 align-middle grid gap-2 text-sm font-medium pb-2 text-gray-500`}>
                                        <p> FlipCart Delivery Support</p>

                                        <input onChange={e => { setFlipdelivered(e.target.value) }} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                    </div>


                                    <div className={`${tracked ? "block" : "hidden"} ml-1 text-sm font-medium pb-2 mt-0  text-gray-500`}>

                                        <button type="button" onClick={showTrackForm} class="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save Track</button>


                                    </div>
                                </div>


                                <div className={`${invoice ? "block" : "hidden"}`}>

                                    <div className={`${tracked ? "hidden" : "block"}  ml-1 text-sm font-medium pb-2 text-gray-500`}>
                                        Invoice

                                        <div class="flex pt-1 pb-2 items-center justify-center w-36">
                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-36 h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
                                                <div class="flex flex-col items-center  p-2 m-1 ">
                                                    <svg class="w-8 h-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                    </svg>
                                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input id="dropzone-file" type="file" class="hidden" />
                                            </label>
                                        </div>

                                        <button type="button" onClick={hideinvoice} class="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save Invoice</button>

                                    </div>
                                </div>


                                <div>





                                    <h1 class="sm: text-2xl mt-3 font-bold text-gray-900 sm:text-3xl">Product name</h1>

                                    <div class="mt-2 flex items-center">
                                        <p class="ml-1 text-sm font-medium text-gray-500">Deal Price</p>
                                    </div>

                                    <div class="mt-3 flex select-none flex-wrap items-center gap-1">
                                    </div>


                                    <div class="mt-3 flex select-none flex-wrap items-center gap-1">
                                        <label class="">
                                            <input type="radio" name="subscription" value="4 Months" class="peer sr-only" />
                                            <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Rs. 12345</p>
                                            <span class="mt-1 block text-center ml-1 text-xs font-medium text-gray-500">You'll spend</span>
                                        </label>
                                        <label class="">
                                            <input type="radio" name="subscription" value="8 Months" class="peer sr-only" checked />
                                            <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Rs. 12345</p>
                                            <span class="mt-1 block text-center ml-1 text-xs font-medium text-gray-500">Recieve from yaper</span>
                                        </label>

                                        <label class="">
                                            <input type="radio" name="subscription" value="12 Months" class="peer sr-only" />
                                            <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Rs. 12345</p>
                                            <span class="mt-1 block text-center ml-1 text-xs font-medium text-gray-500">Total You Recieve</span>
                                        </label>

                                        <label class="">
                                            <input type="radio" name="subscription" value="12 Months" class="peer sr-only" />
                                            <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Rs. 123</p>
                                            <span class="mt-1 block text-center ml-1 text-xs font-medium text-gray-500">Total Earnings</span>
                                        </label>
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


                                </div>

                                <ul class="mt-8 space-y-1">
                                    <Name />
                                    <hr />

                                    <Address />

                                    <hr />

                                    <PinCode />

                                    <hr />

                                </ul>





                            </div>


                        </div>







                    </div>

                </div>
            </section>
        </div>
    )
}

export default SingleProduct