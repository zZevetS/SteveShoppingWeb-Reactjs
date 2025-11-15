import {productList} from '../../../API/APIs.js'
import { useParams } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
function ProductDetail () {
    //truyen id thong qua Hook useParams tu Reactjs -
    const { title } = useParams()                       // (2)
    // Kiem tra xem Route tra ve co ki tu khong
    const decodedTitle = title ? decodeURIComponent(title) : null;

    console.log(decodedTitle)
    const [product, setProduct] = useState({})           // (1)
    // tim kiem du lieu dung voi id dc truyen vao tu Route
    useEffect(() => {
        async function fetchData() {
            const data = await productList()
            const findItem = data.find(item => item.title === decodedTitle)
            console.log(findItem)
            setProduct(findItem)
        }
        fetchData()
    }, [decodedTitle])                                   // (3)

    return (
        <div>
            <div>
                <h1>{product.title}</h1>
                <img src={product.image} width={250}/>
                <p>{product.description}</p>
                <h3>Price: {product.price} USD</h3>
            </div>
        </div>
    )
}
export default ProductDetail