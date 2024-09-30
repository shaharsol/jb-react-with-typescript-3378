import { NavLink } from 'react-router-dom'
import Product from '../../../models/Product'
import './ProductCardSlow.css'
import productsService from '../../../services/products'
import sleep from '../../../util/sleep'

interface ProductCardSlowProps {
    product: Product,
    deleteMe: Function
}

function ProductCardSlow(props: ProductCardSlowProps): JSX.Element {

    async function deleteMyself() {
        props.deleteMe(props.product.id)
    }

    // we can't use await sleep(1000) in react
    // console.log(Date.now())
    // sleep(10000)
    //     .then()
    //     .catch()
    // console.log(Date.now())
    const startTime = performance.now()
    while (performance.now() - startTime < 100) {
        // do nothing
    }

    return (
        <div className='ProductCardSlow'>
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

export default ProductCardSlow