import { useForm } from 'react-hook-form'
import './AddProduct.css'
import Product from '../../../models/Product';
import ProductDraft from '../../../models/ProductDraft';
import productsService from '../../../services/products'
import { useNavigate } from 'react-router-dom';

function AddProduct(): JSX.Element {

    const { register, handleSubmit } = useForm<ProductDraft>();
    const navigate = useNavigate()
    // console.log(register('name'))

    async function addProduct(productDraft: ProductDraft) {
        // console.log(productDraft)
        try {
            const product = await productsService.add(productDraft)
            alert(`new product added with id ${product.id}`)
            navigate('/products')
        } catch (e) {
            alert(e)
        }

    }

    return (
        <div className='AddProduct'>
            <h3>Add Product</h3>
            <form onSubmit={handleSubmit(addProduct)}>
                <label>name:</label>
                <input type="text" {...register('name')}/>
                <br/>
                <label>price:</label>
                <input type="number" {...register('price')}/>
                <br/>
                <label>stock:</label>
                <input type="number" {...register('stock')} />
                <br/>
                <button>Add Product</button>
            </form>
        </div>
    )
}

export default AddProduct