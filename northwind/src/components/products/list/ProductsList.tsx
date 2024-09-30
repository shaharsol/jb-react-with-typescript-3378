import { useEffect, useState } from 'react'
import useTitle from '../../../util/useTitle'
import './ProductsList.css'
import productsService from '../../../services/products'
import Product from '../../../models/Product'
import ProductCard from '../card/ProductCard'
import Spinner from '../../common/spinner/Spinner'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/product-slice'
import notify from '../../../util/notify'

function ProductsList(): JSX.Element {

    useTitle('Products')

    // const [ products, setProducts ] = useState<Product[]>([])

    // useEffect(() => {
    //     // how to overcome the fact that we can't use async functions inside useEffect
    //     // 1st solution, use an IIFE (immediately invoked function expression)
    //     // (async () => {
    //     //     try {
    //     //         const productsFromServer = await productsService.getAll()
    //     //         setProducts(productsFromServer)
    //     //     } catch (e) {
    //     //         console.error(e)
    //     //     }
    //     // })()

    //     // 2nd solution, use thenification
    //     productsService.getAll()
    //         .then(setProducts)
    //         .catch(console.error)

    // }, [])

    const products = useAppSelector((state) => state.products.products)

    const dispatch = useAppDispatch()
    
    useEffect(() => {

        (async () => {
            try {
                const products = await productsService.getAll();
                dispatch(init(products))

            } catch (e) {
                notify.error(e)
            }
        })()

    }, [])


    async function deleteProduct(id: number) {
        if (window.confirm(`sure to delete product ${id}?`)) {
            const isDeleted = await productsService.delete(id)
            alert(`product ${id} has been deleted`)
            // update the state
            const newProducts = [...products]
            const index = newProducts.findIndex(p => p.id === id)
            newProducts.splice(index, 1)
            // setProducts(newProducts)
        }
    }

    return (
        <div className='ProductsList'>
            <h2>Northwind Products</h2>
            {/* <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                        <th>stock</th>
                        <th>imageUrl</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td><img src={product.imageUrl}/></td>
                    </tr>)}
                </tbody>
            </table> */}
            {products.length === 0 && <Spinner />}

            {products.length > 0 && <div>
                <NavLink to="/products/add">Add Product</NavLink>
                <br/>
                {products.map(p => <ProductCard key={p.id} product={p} deleteMe={deleteProduct} />)}
            </div>}
        </div>
    )
}

export default ProductsList