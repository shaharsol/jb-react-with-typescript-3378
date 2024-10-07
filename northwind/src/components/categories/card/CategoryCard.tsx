import { NavLink } from 'react-router-dom'
import Category from '../../../models/Category'
import './CategoryCard.css'
import productsService from '../../../services/products'

interface CategoryCardProps {
    category: Category,
    deleteMe: Function
}

function CategoryCard(props: CategoryCardProps): JSX.Element {

    async function deleteMyself() {
        props.deleteMe(props.category.id)
    }

    return (
        <div className='CategoryCard'>
            <div>
                {props.category.name}
                <br/>
                description: ${props.category.description}
                <br/>
            </div>
            <div>
                <NavLink to={`/products/${props.category.id}`}><img src={props.category.imageUrl} alt={props.category.name}/></NavLink>
                <br />
                <button onClick={deleteMyself}>Delete</button>
            </div>
        </div>
    )
}

export default CategoryCard