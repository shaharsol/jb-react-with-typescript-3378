import { useContext, useState } from 'react'
import './AuthBox.css'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../auth/Auth'
import { jwtDecode } from 'jwt-decode'

function AuthBox(): JSX.Element {

    // const [jwt, setJwt] = useState<string>('')
    const { jwt } = useContext(AuthContext)

    function logout() {

    }

    function getUserName(): string {
        const payload = jwtDecode(jwt)
        console.log(payload)
        return ''
    }

    return (
        <div className='AuthBox'>
            {jwt && <span>hello {getUserName()} | <button onClick={logout}>Logout</button></span>}

            {!jwt && <span>hello guest | <NavLink to="/login">Login</NavLink></span>}
        </div>
    )
}

export default AuthBox