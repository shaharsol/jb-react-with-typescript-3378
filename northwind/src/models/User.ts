import Login from "./Login";

interface User extends Login {
    id: number;
    firstName: string;
    lastName: string;
    role: number;
}

export default User