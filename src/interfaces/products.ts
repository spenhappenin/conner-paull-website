export interface ProductDetails {
  videoUrl: string,
}

export interface Product {
  id: number,
  name: string,
  image: string,
  url: string,
  details: ProductDetails[]
}

export interface Products {
  products: Product[],
}

// const Landing: FC<ProductProps> = ({products}: ProductProps) => {
  // const [products, setProducts] = useState<{
  //   id: number;
  //   name: string;
  //   image: string;
  //   url: string;
  //   details: {
  //     videoUrl: string;
  //   };
  // }[]>(
  //   [],
  // )

  // useEffect(() => {
  //   setProducts(productsData)
  // }, [])
