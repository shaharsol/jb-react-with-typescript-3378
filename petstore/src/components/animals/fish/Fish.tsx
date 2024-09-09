import './Fish.css'
import fishImageSource from '../../../assets/images/red-snapper.jpeg'

function Fish(): JSX.Element {
    return (
        <div className='Fish'>
            <h3>Red Snapper</h3>
            <p>Red snapper is a really tasty fish, mostly found in the Indian ocean</p>
            <img src={fishImageSource} alt=""/>
        </div>
    )
}

export default Fish;