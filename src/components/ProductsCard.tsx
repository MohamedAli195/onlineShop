import { Iproduct } from "../interfaces"
import { txtSlicer } from "../utiltis/functions"
import Image from "./Image"
import Button from "./ui/Bottun"
interface Iprops {
  product:Iproduct
}

function ProductsCard({product}:Iprops) {
  const {title,description,image,price} =product
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
        <Image imageURL={image} imageAlt="product name" imageClass="rounded-md mb-2 max-h-40" />

        <h3>{ txtSlicer(title)}</h3>
        <p>{txtSlicer(description,30)}</p>
        <div className="flex items-center space-x-2 my-3">
            <span className="w-5 h-5 bg-red-700 rounded-full cursor-pointer"/>
            <span className="w-5 h-5 bg-indigo-700 rounded-full cursor-pointer" />
            <span className="w-5 h-5 bg-yellow-700 rounded-full cursor-pointer"/>
        </div>
        <div className="flex items-center justify-between">
            <span>{price}</span>
            <Image imageURL ={image} imageAlt="product name" imageClass="w-10 h-10 rounded-full object-bottom"/>
        </div>
        <div className="flex items-center justify-between space-x-2 mt-5"> 
            <Button className="bg-indigo-700"  onClick={()=>{console.log("Clicked")}} onBlur={()=>{}} >EDIT</Button>
            <Button className="bg-red-700">DELETE</Button>
        </div>
    </div>
  )
}

export default ProductsCard