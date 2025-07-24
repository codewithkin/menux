import React from 'react'
import Cart from './cart/Cart';


function Topbar() {
    return (
        <article className="w-full flex justify-end items-center p-4">
            <Cart />
        </article>
    )
}

export default Topbar
