'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProductPage ({ product }) {

    const [activeImg, setActiveImage] = useState("/placeholder.png");
    const [amount, setAmount] = useState(1);

    return (
        <div className='d-flex flex-column flex-lg-row
            justify-content-between p-4 w-100'>
            <div className='d-flex flex-column w-100'>
                <div className='w-auto'>
                    <Image
                    src={activeImg}                    
                    width={400}
                    height={300}
                    className="img-fluid object-fit-cover" 
                    style={{ height: '100%', width: '100%'}}
                    alt="Product Image" 
                    />
                </div>
                <div className='d-inline-flex flex-row w-auto'>
                    <div className='w-auto'>
                        <Image
                        src="/placeholder.png" 
                        width={150}
                        height={150}
                        className="img-fluid object-fit-cover pe-1 py-2" 
                        alt="Hero Banner" 
                        onClick={() => setActiveImage("/placeholder.png")}
                        />
                    </div>
                    <div className='w-auto'>
                        <Image
                        src="/placeholder1.png" 
                        width={150}
                        height={150}
                        className="img-fluid object-fit-cover ps-1 py-2 " 
                        alt="Hero Banner" 
                        onClick={() => setActiveImage("/placeholder1.png")}
                        />
                    </div>
                </div>
            </div>
            <div className='d-inline-flex flex-column p-2 mx-lg-5 align-items-lg-center'>
                <div>
                    <h1 className='fw-bold'>{product.product}</h1>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Ab labore quis sequi 
                        totam autem beatae animi perspiciatis, 
                        nesciunt nisi minus corrupti perferendis 
                        suscipit? Placeat vero sed nobis quibusdam? 
                        Reprehenderit, nobis!
                    </p>
                    <h4 className='fw-semibold'>$ {product.price}</h4>
                    <div className='d-flex flex-row w-100'>
                        <div className='d-flex flex-row align-items-center'>
                            <button type="button" className="btn btn-secondary py-2 px-3" onClick={() =>
                            setAmount((prev) => prev - 1)}>-</button>
                            <span className='py-2 px-2'>{amount}</span>
                            <button type="button" className="btn btn-secondary py-2 px-3" onClick={() =>
                            setAmount((prev) => prev + 1)}>+</button>
                        </div>
                        <button type="button" className="btn btn-secondary fw-semibold ms-3 py-2 px-4">Add to Cart</button>
                    </div>
                </div>
            </div>
            {/* <NewReview /> */}
            <hr />

            <div className="fw-semibold">
            <h1 className="text-primary mb-6 mt-10">
                Other Customers Reviews
            </h1>
            {/* <Reviews /> */}
            </div>
        </div>
    )
}