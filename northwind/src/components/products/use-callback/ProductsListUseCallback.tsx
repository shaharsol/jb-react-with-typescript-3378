import { FormEvent, memo, useCallback, useEffect, useState } from 'react'
import useTitle from '../../../util/useTitle'
import './ProductsListUseCallback.css'
import productsService from '../../../services/products'
import Product from '../../../models/Product'
import Spinner from '../../common/spinner/Spinner'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init, remove } from '../../../redux/product-slice'
import notify from '../../../util/notify'
// import ProductCard from '../card/ProductCard'
import ProductCard from '../card-slow/ProductCardSlow'

// memo is a react function (not hook!!!) that tells react to use a cached version of the component
// whenever possible
const ProductCardMemo = memo(ProductCard)

function ProductsListUseCallback(): JSX.Element {

    useTitle('Products')

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
            dispatch(remove({id}))
            // update the state
            // const newProducts = [...products]
            // const index = newProducts.findIndex(p => p.id === id)
            // newProducts.splice(index, 1)
            // setProducts(newProducts)
        }
    }

    /*
    we will use useCallback(myFunc) in conjunction with memo(SomeComponent) so re-renders
    of SomeComponent can be truly cached, as it will use the same copy of myFunc
    */
    const cachedDeleteProduct = useCallback(deleteProduct, [])

    function rerender(event: FormEvent<HTMLButtonElement>) {
        dispatch(init([...products]))
    }

    return (
        <div className='ProductsListUseCallback'>
            <h2>Northwind Products UseCallback</h2>
            {products.length === 0 && <Spinner />}


            {products.length > 0 && <div>
                <NavLink to="/products/add">Add Product</NavLink>
                <br />
                <button onClick={rerender}>re-render</button>
                <br/>
                {products.map(p => <ProductCardMemo key={p.id} product={p} deleteMe={cachedDeleteProduct} />)}
            </div>}
        </div>
    )
}

export default ProductsListUseCallback