import axios from 'axios'

export let request = axios.create({
    baseURL: 'http://49.232.47.192:9527/api',
    timeout: 3000
})
