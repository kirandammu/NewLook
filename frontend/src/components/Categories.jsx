import React from 'react'
import { subCategoriess} from '../assets/assets.js'
import { Link } from 'react-router-dom'
import Title from './Title.jsx'

const Categories = () => {
  return (
    <div className='py-4'>
      <Title text1={'category'} text2={'items'}/>
      <div className='grid grid-cols-2 md:flex gap-x-6 justify-between '>
        {subCategoriess.map((item, id)=>{
            return(
                <Link onClick={()=>{scrollTo(0,0)}} to={`/products/${item.path.toLowerCase()}`} key={id} className={`w-32 rounded-md flex flex-col justify-center pb-2 border border-gray-200 shadow-2xl`}>
                    <img src={item.image} className='h-32' />
                    <p className='text-center text-sm font-semibold text-gray-800 '>{item.text}</p>
                </Link>
            )
        })}
      </div>
    </div>
  )
}

export default Categories
