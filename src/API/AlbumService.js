import axios from 'axios'

export default class AlbumService {
    static async getAll(){
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
            return response.data
        
    }
    static async getAlbumById(id){
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums/' + id)
        return response
}
static async getPhotosByAlbumId(id){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
        return response
}
}
