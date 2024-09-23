import { useForm } from 'react-hook-form'
import './EditProduct.css'
import Product from '../../../models/Product';
import productsService from '../../../services/products'
import { useNavigate, useParams } from 'react-router-dom';
import ProductDraft from '../../../models/ProductDraft';
import { FormEvent, useEffect, useState } from 'react';
import Spinner from '../../common/spinner/Spinner';

function EditProduct(): JSX.Element {

    const { id } = useParams<'id'>()

    const { register, handleSubmit, setValue } = useForm<ProductDraft>();
    const [ previewImageSrc, setPreviewImageSrc ] = useState<string>('')
    const [ product, setProduct ] = useState<Product>()

    useEffect(() => {

        (async () => {
            if (!id) return
            const product = await productsService.getOne(+id)
            setValue('name', product.name)
            setValue('price', product.price)
            setValue('stock', product.stock)
            setPreviewImageSrc(product.imageUrl)
            setProduct(product)
        })()
    }, [])

    const navigate = useNavigate()


    // console.log(register('name'))

    async function editProduct(productDraft: ProductDraft) {
        // console.log(productDraft)
        // const image = (productDraft.image as unknown as FileList)[0]
        if (id) {
            productDraft.image = productDraft.list[0]
            try {
                const product = await productsService.update(+id, productDraft)
                alert(`product with id ${product.id} had been updated`)
                navigate(`/products/${id}`)
            } catch (e) {
                alert(e)
            }
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
        <div className='EditProduct'>

            {!product && <Spinner />}

            {product && <div>
                <h3>Edit Product</h3>
                <form action='/products/' onSubmit={handleSubmit(editProduct)}>
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
                    
                    <button>Edit Product</button>
                </form>
            
            </div>}
        </div>
    )
}

export default EditProduct