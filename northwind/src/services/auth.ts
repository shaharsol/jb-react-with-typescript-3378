import axios from "axios";
import Login from "../models/Login";

class Auth {
    async login(login: Login): Promise<string> {
        const response = await axios.post<string>(`${process.env.REACT_APP_REST_SERVER}/api/login`, login);
        const jwt = response.data
        return jwt
    }
}

const auth = new Auth()
export default auth;