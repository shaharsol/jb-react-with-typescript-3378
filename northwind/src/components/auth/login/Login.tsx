import { useForm } from 'react-hook-form'
import LoginModel from '../../../models/Login'
import './Login.css'
import authService from '../../../services/auth'
import { useContext } from 'react'
import { AuthContext } from '../auth/Auth'


function Login(): JSX.Element {

    const { jwt, setJwt } = useContext(AuthContext)
    
    const { register, handleSubmit } = useForm<LoginModel>()

    async function submit(login: LoginModel) {
        const jwt = await authService.login(login)
        console.log(jwt)
        setJwt(jwt)
    }

    return (
        <div className='Login'>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder="email" type="text" {...register('email')}/>
                <br />
                <input placeholder="password" type="password" {...register('password')}/>
                <br/>
                <button>Login</button>
            </form>

        </div>
    )
}

export default Login