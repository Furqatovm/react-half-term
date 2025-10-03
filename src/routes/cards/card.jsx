import React from 'react'
import  toast, { Toaster } from 'react-hot-toast';
import  { Link } from 'react-router-dom';

const Card = ({product}) => {
  return (
    <div className="flex items-center justify-center">
    <Toaster position="top-center"  reverseOrder={false}/>
    
      <div className="w-80 border border-blue-200 rounded-lg shadow-md p-4">
        {/* Discount Badge */}
        <div className="relative">
          <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
            -{product.discountPercentage}%
          </span>
          {/* Wishlist Icon */}
          <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
          {/* Product Image */}
          <Link to={`/about/${product.id}`}>
            <img src={product.thumbnail} alt="Product Image" className="object-contain w-full h-[270px] fill" />
          </Link>
        </div>
        {/* Product Details */}
        <div className="mt-4">
          <h3 className="text-gray-800 font-medium text-base">
           {(product.title).slice(0, 20)}
          </h3>
          <p className="uppercase text-[#212427]text-xs font-medium">
            {product.category}
          </p>
          {/* Ratings */}
          <div className="flex space-x-1 text-orange-500 text-sm mt-1">
            {Array.from({length: product.rating}).map((_, index) =>{
              return  <svg key={index} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00008 13.3916L14.1501 16.5L12.7834 10.6416L17.3334 6.69996L11.3417 6.19163L9.00008 0.666626L6.65841 6.19163L0.666748 6.69996L5.21675 10.6416L3.85008 16.5L9.00008 13.3916Z" fill="#6682A9"/>
              </svg>
              
            })}
          </div>
          {/* Pricing */}
          <div className="flex items-end justify-between">
            <div className="flex items-baseline space-x-2 mt-2">
              <span className="text-[#212427] text-xl font-semibold">${product.price}</span>
              <span className="text-slate-600 text-sm line-through">  ${ (product.price / (1 - product.discountPercentage / 100)).toFixed(2) }</span>
            </div>
            <button 
             className="w-10 h-10 rounded-full bg-transparent border border-[#DDDDDD] flex items-center justify-center shadow text-green-500 hover:cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card