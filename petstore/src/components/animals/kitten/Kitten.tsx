import './Kitten.css'
import kittenImageSource from '../../../assets/images/kitten.jpeg'

function Kitten(): JSX.Element {
    return (
        <div className="Kitten">
            <h3>Cute Kitten</h3>
            <img src={kittenImageSource} alt=""/>
        </div>
    )
}

export default Kitten;