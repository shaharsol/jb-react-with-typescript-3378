import './Home.css'
import products1Source from '../../../assets/images/products1.jpeg'
import products2Source from '../../../assets/images/products2.jpeg'
import { useState } from 'react'



function Home(): JSX.Element {
    
    // const imageNumber = Math.round(Math.random()) + 1
    const [ imageNumber ] = useState<number>(Math.round(Math.random()) + 1)

    const desserts = [
        {id: 1, name: 'pana cota', price: 20},
        {id: 2, name: 'malabi', price: 15},
        {id: 3, name: 'bavaria', price: 25},
        {id: 4, name: 'baqlawa', price: 10},
    ]

    const sale1Info = '20% on all drinks'
    const sale2Info = '15% on all desserts'
    const [ saleInfo, setSaleInfo ] = useState<string>(sale1Info)

    function displaySale1Info() {
        console.log('in function displaySale1Info')
        setSaleInfo(sale1Info)
    }

    function displaySale2Info() {
        console.log('in function displaySale2Info')
        setSaleInfo(sale2Info)
    }

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

            <br/>
            <button onClick={displaySale1Info}>Sale 1 Info</button>
            <button onClick={displaySale2Info}>Sale 2 Info</button>
            <p>sale</p>
            <p>{saleInfo}</p>
        </div>
    )
}

export default Home