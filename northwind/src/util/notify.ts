import { Notyf } from "notyf";

class Notify {

    private notyf = new Notyf({
        duration: 4000, // milliseconds
        position: {
            x: 'center',
            y: 'center'
        }
    })

    public success(message: string): void {
        this.notyf.success(message)
    }

    public error(error: any): void {
        this.notyf.error(this.extractMessage(error))
    }

    private extractMessage(error: any): string {
        if (typeof(error) === 'string') return error; // throw 'some error'
        if (typeof(error.response?.data) === 'string') return error.response.data // axios
        if (typeof(error.message) === 'string') return error.message // browser error
        return 'something unexpected happened'
    }
}

const notify = new Notify()
export default notify;