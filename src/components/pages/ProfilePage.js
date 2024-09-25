import React, { useState } from 'react'
import Accordion from './Accordian';

const ProfilePage = () => {

    const [selector, setSelector] = useState(true);

    return (
        <div>

            <section class="relative pt-20 pb-24 ">
                <div class="w-full max-w-5xl mx-auto px-6 md:px-8 bg-gray-100">
                    <div class="flex pt-2 px-10 items-center justify-center sm:justify-start relative z-10 mb-5">
                        <img src="./profile.png" alt="user-avatar-image"
                            class="border-4 border-solid border-white pt- rounded-full w-24 h-24 object-cover" />
                    </div>
                    <div class="flex items-center px-10 justify-center  flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
                        <div class="block">
                            <h3 class="font-medium  text-xl text-gray-900  mb-1 max-sm:text-center">User name</h3>

                            <h3 class="font-manrope font-sm text-sm text-gray-900 max-sm:text-center">+91-9876543210</h3>

                            <p class="font-normal text-base leading-7 text-gray-500  max-sm:text-center">Email: xyz1234@gamil.com</p>
                        </div>
                        
                    </div>
            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>




                    {/* accordian from here  */}

                    <Accordion/>
                    




                </div>
            </section>


        </div>
    )
}

export default ProfilePage