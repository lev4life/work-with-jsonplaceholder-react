import axios from 'axios'

export default class AlbumService {
    static async getAll(){
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
            return response.data
        } catch (e) {
            console.log(e);
        }
        
    }
}