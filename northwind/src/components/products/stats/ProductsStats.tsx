import { useEffect, useState } from 'react'
import './ProductsStats.css'
import Product from '../../../models/Product'
import productsService from '../../../services/products'

function ProductStats(): JSX.Element {

    const [ products, setProducts ] = useState<Product[]>([])

    useEffect(() => {
        productsService.getAll()
            .then(setProducts)
            .catch(console.error)

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