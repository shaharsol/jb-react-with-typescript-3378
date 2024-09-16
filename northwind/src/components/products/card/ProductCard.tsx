import Product from '../../../models/Product'
import './ProductCard.css'

interface ProductCardProps {
    product: Product,
}

function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <div className='ProductCard'>
            <div>
                {props.product.name}
                <br/>
                price: ${props.product.price}
                <br/>
                stock: {props.product.stock}
                <br/>
            </div>
            <div>
                <img src={props.product.imageUrl} alt={props.product.name}/>
            </div>
        </div>
    )
}

export default ProductCard