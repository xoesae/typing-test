import axios from "axios"

const DICTIONARY_URL = 'https://api.dicionario-aberto.net'

const DictionaryApi = axios.create({
    baseURL: DICTIONARY_URL,
    timeout: 5000,
    headers: {'Accept': 'application/json'},
})

export default DictionaryApi