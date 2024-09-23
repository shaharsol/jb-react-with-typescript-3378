import { NavLink } from 'react-router-dom'
import Product from '../../../models/Product'
import './ProductCard.css'
import productsService from '../../../services/products'

interface ProductCardProps {
    product: Product,
    deleteMe: Function
}

function ProductCard(props: ProductCardProps): JSX.Element {

    async function deleteMyself() {
        props.deleteMe(props.product.id)
    }

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
                <NavLink to={`/products/${props.product.id}`}><img src={props.product.imageUrl} alt={props.product.name}/></NavLink>
                <br />
                <button onClick={deleteMyself}>Delete</button>
            </div>
        </div>
    )
}

export default ProductCard