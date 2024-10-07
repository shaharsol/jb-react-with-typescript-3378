import { AxiosInstance } from "axios"

abstract class AuthAwareService {
    // protected axiosIntance: AxiosInstance;

    // constructor(axiosIntance: AxiosInstance) {
    //     this.axiosIntance = axiosIntance
    // }

    // short-hand constructor
    constructor(protected axiosIntance: AxiosInstance) {}

}

export default AuthAwareService