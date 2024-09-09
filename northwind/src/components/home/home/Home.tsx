import './Home.css'
import products1Source from '../../../assets/images/products1.jpeg'
import products2Source from '../../../assets/images/products2.jpeg'



function Home(): JSX.Element {
    
    const imageNumber = Math.round(Math.random()) + 1

    const desserts = [
        {id: 1, name: 'pana cota', price: 20},
        {id: 2, name: 'malabi', price: 15},
        {id: 3, name: 'bavaria', price: 25},
        {id: 4, name: 'baqlawa', price: 10},
    ]

    return (
        <div className='Home'>
            <h2>This is home</h2>

            {/* using ternary operator*/}
            {/* { imageNumber === 1 ? <img src={products1Source} alt=""/> : <img src={products2Source} alt=""/> } */}
            {/* <img src={ imageNumber === 1 ? products1Source : products2Source} alt=""/> */}

            {/* conditional rendering */} 
            { imageNumber === 1 && <img src={products1Source} alt=""/> }
            { imageNumber === 2 && <img src={products2Source} alt=""/> }

            <br />

            { desserts.map(dessert => <span key={dessert.id}>{dessert.name} ${dessert.price} | </span>) }

        </div>
    )
}

export default Home