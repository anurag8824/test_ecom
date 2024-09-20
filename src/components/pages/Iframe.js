// Header always set X-Frame-Options "SAMEORIGIN"

import React from 'react'

const Iframe = () => {

    const cd = () => {
        window.location.href = "https://www.amazon.in";
    }



    return (
        <div>
            <iframe class="w-full aspect-video ..." src="https://www.google.com/search?igu=1">

            </iframe>


            {/* <button onClick={cd}
            > Amazon</button> */}





        </div>
    )
}

export default Iframe