import { useEffect } from 'react'
import './About.css'
import useTitle from '../../../util/useTitle'

function About(): JSX.Element {

    useTitle('About')

    return (
        <div className='About'>
            <p>we are northwind importers/exportes</p>
        </div>
    )
}

export default About