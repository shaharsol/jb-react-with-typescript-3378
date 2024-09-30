import { useForm } from 'react-hook-form'
import './AddProductQuick.css'
import Product from '../../../models/Product';
import productsService from '../../../services/products'
import { useNavigate } from 'react-router-dom';
import ProductDraft from '../../../models/ProductDraft';
import { FormEvent, useState } from 'react';
import notify from '../../../util/notify';
import { add } from '../../../redux/product-slice';
import { useDispatch } from 'react-redux';


function AddProductQuick(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<ProductDraft>();
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [ previewImageSrc, setPreviewImageSrc ] = useState<string>('')

    // console.log(register('name'))

    async function addProduct(productDraft: ProductDraft) {
        // console.log(productDraft)
        // const image = (productDraft.image as unknown as FileList)[0]
        productDraft.image = productDraft.list[0]
        try {
            const product = await productsService.add(productDraft)
            alert(`new product added with id ${product.id}`)
            // navigate('/products')
            dispatch(add(product))
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
        <div className='AddProductQuick'>
            <h3>Quick Add Product</h3>
            <form action='/products/' onSubmit={handleSubmit(addProduct)}>
                <label>name:</label>
                <input type="text" {...register('name', {
                    required: {
                        value: true,
                        message: 'Name must not be blank'
                    },
                    minLength: {
                        value: 2,
                        message: 'Name must be longer than 2 chars'
                    }
                })}/>
                <br/>
                <span className="error">{formState.errors.name?.message}</span>
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

export default AddProductQuick