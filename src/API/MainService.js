import axios from 'axios'

export default class MainService {
    static async getAll(){
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            return response.data
        } catch (e) {
            console.log(e);
        }
        
    }
}