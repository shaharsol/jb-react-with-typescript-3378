import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import productsService from '../../../services/products'
import { useEffect, useState } from 'react';
import Product from '../../../models/Product';
import Spinner from '../../common/spinner/Spinner';

function ProductDetails(): JSX.Element {

    const { id } = useParams<'id'>();

    const [ product, setProduct ] = useState<Product>()

    useEffect(() => {
        if (id) {
            productsService.getOne(+id)
            .then(setProduct)
            .catch(console.error)
        }
    }, [])

    return (
        <div className='ProductDetails'>
            {!product && <Spinner />}

            {product && <div>
                <h3>{product?.name}</h3>
                <br/>
                <p>price: {product?.price}</p>
                <br/>
                <p>stock: {product?.stock}</p>
                <br/>
                <img src={product?.imageUrl} alt={product?.name}/>
            </div>}
        </div>
    )
}

export default ProductDetails