import { useEffect, useState } from 'react'
import useTitle from '../../../util/useTitle'
import './ProductsList.css'
import productsService from '../../../services/products'
import Product from '../../../models/Product'
import ProductCard from '../card/ProductCard'
import Spinner from '../../common/spinner/Spinner'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init, remove, topAdd } from '../../../redux/product-slice'
import notify from '../../../util/notify'
import { io } from 'socket.io-client'

function ProductsListLive(): JSX.Element {

    useTitle('Products')

    const products = useAppSelector((state) => state.products.products)

    const dispatch = useAppDispatch()
    
    useEffect(() => {
        // the url for the server MUST come from config...
        const socket = io('ws://localhost:3033');

        // this is the way to listen to "new product" events from the server
        socket.on('new product', (product) => {
            console.log(product)
            dispatch(topAdd(product))
        });

        // this is how you emit a message to the server
        socket.emit('startup acknowledge', {})

        return () => {
            socket.disconnect()
        }
    }, [])

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
            dispatch(remove({id}))
            // update the state
            // const newProducts = [...products]
            // const index = newProducts.findIndex(p => p.id === id)
            // newProducts.splice(index, 1)
            // setProducts(newProducts)
        }
    }

    return (
        <div className='ProductsList'>
            <h2>Northwind Products Live</h2>
            
            {products.length === 0 && <Spinner />}

            {products.length > 0 && <div>
                <NavLink to="/products/add">Add Product</NavLink>
                <br/>
                {products.map(p => <ProductCard key={p.id} product={p} deleteMe={deleteProduct} />)}
            </div>}
        </div>
    )
}

export default ProductsListLive