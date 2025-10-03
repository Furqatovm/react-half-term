import React from 'react'
import Swiper from 'swiper'
import Slider from '../../components/slider'
import useAxios from '../../hooks/useAxios'
import Card from '../cards/card'

const Home = () => {
  const {Data, error, loading} =useAxios("products");
  return (
    <div className='max-w-[1350px] mx-auto'>
      <Slider />

      <div className='grid grid-cols-5 gap-4'>
        {Data.map((val) =>{
          return <Card key={val.id} product ={val} />
        })}

      </div>
    </div>

    
  )
}

export default Home