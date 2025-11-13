
const userApi = "https://fakestoreapi.com/users"
const productApi = 'https://fakestoreapi.com/products'
export async function userInfo () {
    try {
        const response = await fetch(userApi)
        const data = await response.json()
        console.log(data)
        return data 
    } catch (error) {
        console.log(error)
    }
}

export async function productList () {
    try {
        const response = await fetch(productApi)
        const data = await response.json()
        console.log(data)
        return data 
    } catch (error) {
        console.log(error)
    }
}