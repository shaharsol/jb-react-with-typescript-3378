import { useForm } from 'react-hook-form'
import './AddProduct.css'
import Product from '../../../models/Product';
import productsService from '../../../services/products'
import { useNavigate } from 'react-router-dom';
import ProductDraft from '../../../models/ProductDraft';
import { FormEvent, useState } from 'react';
import notify from '../../../util/notify';

function AddProduct(): JSX.Element {

    const { register, handleSubmit } = useForm<ProductDraft>();
    const navigate = useNavigate()

    const [ previewImageSrc, setPreviewImageSrc ] = useState<string>('')

    // console.log(register('name'))

    async function addProduct(productDraft: ProductDraft) {
        // console.log(productDraft)
        // const image = (productDraft.image as unknown as FileList)[0]
        productDraft.image = productDraft.list[0]
        try {
            const product = await productsService.add(productDraft)
            alert(`new product added with id ${product.id}`)
            navigate('/products')
        } catch (e) {
            notify.error(e)
            // alert(e)
        }

    }

    function previewImage(event: FormEvent<HTMLInputElement>) {
        const file = event.currentTarget.files && event.currentTarget.files[0]
        if (file) {
            const fullFile = URL.createObjectURL(file)
            setPreviewImageSrc(fullFile)
        }
    }

    return (
        <div className='AddProduct'>
            <h3>Add Product</h3>
            <form action='/products/' onSubmit={handleSubmit(addProduct)}>
                <label>name:</label>
                <input type="text" {...register('name')}/>
                <br/>
                <label>price:</label>
                <input type="number" {...register('price')}/>
                <br/>
                <label>stock:</label>
                <input type="number" {...register('stock')} />
                <br/>
                <label>image:</label>
                <input type="file" {...register('list')} onChange={previewImage}/>
                <br/>
                {previewImageSrc && <img src={previewImageSrc} alt="preview"/>}
                
                <button>Add Product</button>
            </form>
        </div>
    )
}

export default AddProduct