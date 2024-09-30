import { FormEvent, useEffect, useRef, useState } from 'react'
import useTitle from '../../../util/useTitle'
import './Search.css'
import productsService from '../../../services/products'
import Product from '../../../models/Product'
import ProductCard from '../card/ProductCard'
import Spinner from '../../common/spinner/Spinner'
import { NavLink } from 'react-router-dom'
import notify from '../../../util/notify'
import ProductCardSlow from '../card-slow/ProductCardSlow'

function Search(): JSX.Element {

    useTitle('Products')

    const [ products, setProducts ] = useState<Product[]>([])

    // we don't want to useState for data that is not rendered.
    // any initial loading of this state will cause a useless re-render
    // const [ productsFromServer, setProductsFromServer ] = useState<Product[]>([])

    // instead, we'll use another hook, useRef
    // we use useRef, to save "static" data between re-renders
    // any change of the "reffed value" will not trigger a re-render
    const productsFromServer = useRef<Product[]>([])

    useEffect(() => {
        // productsService.getAll()
        //     .then(setProducts)
        //     .catch(console.error)

        (async() => {
            try {
                const data = await productsService.getAll()
                // setProductsFromServer(data)
                productsFromServer.current = data
                setProducts(data)
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
            setProducts(newProducts)
        }
    }

    function filter(event: FormEvent<HTMLInputElement>) {
        const currentInput = event.currentTarget.value
        console.log(currentInput)
        const filteredProducts = productsFromServer.current.filter(p => p.name.toLocaleLowerCase().includes(currentInput.toLocaleLowerCase()))
        console.log(filteredProducts)
        setProducts(filteredProducts)
    }


    return (
        <div className='Search'>
            <h2>Northwind Products Search</h2>
            {products.length === 0 && productsFromServer.current.length === 0 && <Spinner />}

            {(products.length > 0 || productsFromServer.current.length > 0) && <div>
                <br/>
                <input placeholder="search..." onChange={filter}/>
                <br/>
                {products.map(p => <ProductCardSlow key={p.id} product={p} deleteMe={deleteProduct} />)}
            </div>}
        </div>
    )
}

export default Search