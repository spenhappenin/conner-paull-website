import { useEffect, useState, } from 'react'

import productsData from '../data/products'

const Landing = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(productsData)
  }, [])

  return (
    <div>
      { products.map((product) => (
        <div>
          <img src={product.image} />
        </div>
      ))}
    </div>
  )
}

export default Landing
