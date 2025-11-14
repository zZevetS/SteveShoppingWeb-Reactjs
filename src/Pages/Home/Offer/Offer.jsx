import "../Offer/offer.css"
import {productList} from '../../../API/APIs.js'
import { useEffect, useRef, useState } from "react"

function Offer (){
    const isFetched = useRef(false)
    const [randomData, setRandomData] = useState("")
    useEffect(() => {
        if (isFetched.current === true) { 
            return;// Nếu đã fetch rồi → không fetch nữa => return ra ngoai luon, trach fech lai lan 2
        }
        isFetched.current = true;
        async function fetchRandomData(){
            try {
                const data = await productList()
                // Lay ngau nhien 1 index
                // console.log(data.length)
                const getRandomData = Math.floor(Math.random() * data.length)
                console.log(getRandomData)
                // Lay ra item thong qua index dc nhan
                const getRandomItem = data[getRandomData]
                console.log(getRandomItem)
                // 
                setRandomData(getRandomItem)
            } catch (error) {
                console.log("Co loi", error)
            }
        }
        fetchRandomData()

    }, [])
    return(
        <div>
            <div className="offer">
            <div className="smalloffer-container">
                    <h3 className="offer-title">Exclusively Available On Amazon</h3>
                <div className="row">
                    <div className="col-2-left">
                        <img src={randomData.image} className="offer-img"/>
                    </div>
                    <div className="col-2-right">
                        <h1 className="item-title">{randomData.title}</h1>
                        <div className="item-des">{randomData.description}</div>
                        <br/>
                        <div style={{marginTop: 20}}>
                            <a href="" className="buyoffer-btn">Buy Now &#8594;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Offer