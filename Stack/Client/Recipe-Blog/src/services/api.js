import axios from "axios"

const API="https://670192a4b52042b542d81c12.mockapi.io"

const getrecipes=()=>axios.get(`${API}/recipe`)

export {getrecipes}