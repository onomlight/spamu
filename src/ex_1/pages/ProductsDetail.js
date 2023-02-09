import { useParams } from 'react-router-dom'
const ProductDetail = () => {
  const params = useParams()
  console.log(params.productID)
  return (
    <section>
      <h1>디테일 페이지</h1>
      <p>{params.productID}</p>
    </section>
  )
}

export default ProductDetail
