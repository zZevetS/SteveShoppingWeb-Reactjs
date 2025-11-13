import { useEffect, useState } from 'react'
import {productList} from '../../../API/APIs.js'
import "../Product/product.css"
function ProductView (){
    const [getProduct, setGetProduct] = useState([])
    //Lay data 
    useEffect(() => {
        async function fetchData(){
            try {
                const data = await productList()
                setGetProduct(data)
            } catch (error) {
                console.log("Co loi")
            }
        }
        fetchData()
    }, [])
    return (
        <div >
            <h2 className="title">Feature Products</h2>
           <div className='container-product'>
                {getProduct.map((curValue, index) => {
                return <div className="small-container-product">
                            <div className="row">
                                <div className="col-4">
                                    <img className="product-image" src={curValue.image}/>
                                    <h4 className='product-name'>{curValue.title}</h4>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <p style={{color: 'black'}}>{curValue.price} USD</p>
                                    <button className='buy-btn'>Buy</button>
                                </div>
                            </div>
                        </div>
                })}
           </div>
        </div>
    )
}
export default ProductView