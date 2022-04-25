import { useEffect, useState } from 'react'
import productsData from '../data/products'

const Landing = () => {
  const [products, setProducts] = useState<{
    id: number;
    name: string;
    image: string;
    url: string;
    details: {
      videoUrl: string;
    };
  }[]>(
    [],
  );

  useEffect(() => {
    setProducts(productsData)
  }, [])

  return (
    <div>
      Landing
    </div>
  )
}

export default Landing
