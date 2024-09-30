import { createContext, PropsWithChildren, useState } from "react"

export const AuthContext = createContext({
    jwt: '',
    setJwt: (jwt: string) => {}
})

function Auth(props: PropsWithChildren): JSX.Element {

    const [jwt, setJwt] = useState<string>('')
    const value = { jwt, setJwt }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default Auth