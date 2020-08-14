import axios from 'axios'

const URI = 'http://localhost:1337/posts/'

export const api = {
    getPosts() {
        return axios.get(`${URI}`)
    }
}