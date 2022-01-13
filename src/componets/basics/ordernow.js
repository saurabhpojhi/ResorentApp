import React,{useState} from 'react'
import ReactDOM from "react-dom";


const OrderNow =() => {

    const [category, setCategory] = useState("");
    const [food, setFood] = useState("");
    const [price, setPrice] = useState("");
    const [item, setItem] = useState("");
    
    const collectData= async()=>{
        console.warn(category,food,price,item);

         let result = await fetch('http://localhost:5000/register',{
               method:'post',
               body:JSON.stringify({category,food,price,item}),
               headers:{
                   'Content-Type': 'application/json'
               }
         })
          result = await result.json()
         console.warn(  result);   
         
        }

    return (

        <div className="Register">
            <h1> Register </h1>

            <div>
                <input className="inputBox" type="text" 
                value={category} onChange={(e) =>setCategory(e.target.value)} placeholder=" Enter category" />
            </div>
            <div>
                <input className="inputBox" type="text"
                 value={food} onChange={(e) =>setFood(e.target.value)} placeholder=" Food Name" />
            </div>
            <div>
                <input className="inputBox" type="number"
                 value={price} onChange={(e) =>setPrice(e.target.value)} placeholder=" Food Price" />
            </div>
            <div>
                <input className="inputBox" type="text"
                 value={item} onChange={(e) =>setItem(e.target.value)} placeholder=" Item Description" />
            </div>

            <button onClick={collectData} className="appButton" type="button"> Submit </button>

        </div>
    )
};

export default OrderNow;