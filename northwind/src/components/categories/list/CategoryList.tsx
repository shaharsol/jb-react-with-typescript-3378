import { useContext, useEffect, useState } from 'react'
import useTitle from '../../../util/useTitle'
import './CategoryList.css'
// import categoriesService from '../../../services/categories'
import Category from '../../../models/Category'
import CategoryCard from '../card/CategoryCard'
import Spinner from '../../common/spinner/Spinner'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init, remove } from '../../../redux/product-slice'
import notify from '../../../util/notify'
import { AuthContext } from '../../auth/auth/Auth'
import CategoryService from '../../../services/auth-aware/Category'
import useService from '../../../hooks/useService'

function CategoryList(): JSX.Element {

    useTitle('Products')

    const [categories, setCategories] = useState<Category[]>([])
    
    const categoriesService = useService(CategoryService);

    useEffect(() => {

        (async () => {
            try {
                const categories = await categoriesService.getAll();
                setCategories(categories)
            } catch (e) {
                notify.error(e)
            }
        })()

    }, [])


    async function deleteProduct(id: number) {
        if (window.confirm(`sure to delete product ${id}?`)) {
            // const isDeleted = await categoriesService.delete(id)
            alert(`product ${id} has been deleted`)
            // update the state
            // const newProducts = [...products]
            // const index = newProducts.findIndex(p => p.id === id)
            // newProducts.splice(index, 1)
            // setProducts(newProducts)
        }
    }

    return (
        <div className='CategoryList'>
            <h2>Northwind Products</h2>
            {categories.length === 0 && <Spinner />}

            {categories.length > 0 && <div>
                <NavLink to="/products/add">Add Product</NavLink>
                <br/>
                {categories.map(p => <CategoryCard key={p.id} category={p} deleteMe={deleteProduct} />)}
            </div>}
        </div>
    )
}

export default CategoryList