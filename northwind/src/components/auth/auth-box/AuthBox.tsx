import { useContext, useMemo, useState } from 'react'
import './AuthBox.css'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../auth/Auth'
import { jwtDecode } from 'jwt-decode'
import User from '../../../models/User'

function AuthBox(): JSX.Element {

    // const [jwt, setJwt] = useState<string>('')
    const { jwt, setJwt } = useContext(AuthContext)

    const [ stam, setStam ] = useState<{id: string}>({id: '123456'})

    function logout() {
        setJwt('')
    }

    // we use useMemo when we do CPU/memory intensive calcs, and we want to cache
    // the result between component's re-renders
    const fullUserName = useMemo(() => {
        if (!jwt) return ''
        const payload = jwtDecode(jwt) as {user: User}
        console.log('memorizing full user name')
        return `${payload.user.firstName} ${payload.user.lastName}`
    }, [ jwt ])

    function enforceRender() {
        // this won't create a re-render
        // react will see that the ref of the name "stam" did not change
        // so it doesn't need to re-render
        // setStam(stam)

        // cloning the state and setting it anew *will* cause a rerender
        // react will have to assume that something has changed
        setStam({...stam})
    }

    // function getUserName(): string {
    //     const payload = jwtDecode(jwt) as {user: User}
    //     console.log(`${payload.user.firstName} ${payload.user.lastName}`)
    //     return `${payload.user.firstName} ${payload.user.lastName}`
    // }

    return (
        <div className='AuthBox'>
            {jwt && <span>hello {fullUserName} | <button onClick={logout}>Logout</button></span>}

            {!jwt && <span>hello guest | <NavLink to="/login">Login</NavLink></span>}


            {stam.id}
            <button onClick={enforceRender}>force re-render</button>
        </div>
    )
}

export default AuthBox