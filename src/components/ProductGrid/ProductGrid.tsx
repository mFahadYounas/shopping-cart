import currencyFormatter from '../../utils/currencyFormatter'
import products from '../../data/products.json'
import Card from '../Card/Card'
import './ProductGrid.css'

function ProductGrid() {
  return (
    <div className="productGrid">
        {products.map(product => (
            <Card key={product.id} id={product.id} imgSrc={product.imgUrl} productInfo={product.name} productPrice={currencyFormatter(product.price)} />
        ))
        }
    </div>
  )
}

export default ProductGrid