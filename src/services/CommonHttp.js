import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:5049/api/',
    header: {
        "Context-Type": "application/json"
    }
});