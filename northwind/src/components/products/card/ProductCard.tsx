import Product from '../../../models/Product'
import './ProductCard.css'

interface ProductCardProps {
    product: Product
}

function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <div className='ProductCard'>
            <h4>{props.product.name}</h4>
            <br/>
            <p>price: ${props.product.price}</p>
            <br/>
            <p>stock: {props.product.stock}</p>
            <br/>
            <img src={props.product.imageUrl} alt={props.product.name}/>
        </div>
    )
}

export default ProductCard