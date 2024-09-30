import { useEffect, useState } from 'react'
import './ProductsStats.css'
import Product from '../../../models/Product'
import productsService from '../../../services/products'
import notify from '../../../util/notify'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/product-slice'

function ProductStats(): JSX.Element {

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

    function getTotalStock(): number {
        return products.reduce((cumm, curr) => cumm + curr.stock, 0)
    }

    function getTotalItems(): number {
        return products.length
    }

    function getTotalPrice(): number {
        return products.reduce((cumm, curr) => cumm + curr.price, 0)
    }

    return (
        <div className='ProductStats'>
            <span>Total Products: {getTotalItems()}</span>
            <br />
            <span>Total Stock: {getTotalStock()}</span>
            <br />
            <span>Total Inventory Value: ${getTotalPrice()}</span>
        </div>
    )
}

export default ProductStats