import './Spinner.css'
import spinnerImageSource from '../../../assets/images/loading.gif'

function Spinner(): JSX.Element {
    return (
        <div className='Spinner'>
            <img src={spinnerImageSource} />
        </div>
    )
}

export default Spinner;