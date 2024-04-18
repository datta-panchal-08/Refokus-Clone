import React from 'react'
import Product from './Product'

const Products = () => {
    let data = [
        {title : "arqitel",description :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis id dolorem atque quis, nam aliquam distinctio", live : true , case : false},
        {title : "TTR",description :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis id dolorem atque quis, nam aliquam distinctio", live : true , case : false},
        {title : "YIR 2022",description :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis id dolorem atque quis, nam aliquam distinctio", live : true , case : true},
        {title : "YAHOO!",description :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis id dolorem atque quis, nam aliquam distinctio", live : true , case : true},
    ]
  return (
    <div>
        {data.map((val,index)=><Product val={val} />)}
    </div>
  )
}

export default Products