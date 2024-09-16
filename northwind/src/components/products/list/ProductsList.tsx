import { useEffect } from 'react'
import useTitle from '../../../util/useTitle'
import './ProductsList.css'
import productsService from '../../../services/products'

function ProductsList(): JSX.Element {

    useTitle('Products')

    useEffect(() => {
        // how to overcome the fact that we can't use async functions inside useEffect
        // 1st solution, use an IIFE (immediately invoked function expression)
        (async () => {
            try {
                const products = await productsService.getAll()
                console.log(products)
            } catch (e) {
                console.error(e)
            }
        })()

        // 2nd solution, use thenification
        // productsService.getAll()
        //     .then((products) => {console.log(products)})
        //     .catch()

    }, [])

    return (
        <div className='ProductsList'>
            <h2>Northwind Products</h2>
        </div>
    )
}

export default ProductsList