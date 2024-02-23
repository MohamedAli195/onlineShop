import ProductsCard from "./components/ProductsCard"
import { products } from "./data"


function App() {
  const productList = products.map((product)=>{
    return <ProductsCard key={product.id} product={product}/>
  })
  return (
    <main className="container mx-auto">
    <div className="border-2 m-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
    {productList}
    </div>
   
    </main>
  )
}

export default App