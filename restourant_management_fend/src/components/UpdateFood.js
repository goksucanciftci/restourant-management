import React, { useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";

const URL = 'http://localhost:8080/api/v1/food';

function UpdateFood(props){
    const [id,setId] = useState("");
    const [foodId, setFoodId] = useState("");
    const [foodname, setFoodname] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const history = useHistory();

    useEffect(()=>{
    },[])

    const backButton = async ()=>{
        await history.push({
            pathname:`/`,
        })
    }

    function UpdateData(){
        let data = {foodId,foodname,price,type}
        fetch(`http://localhost:8080/api/v1/food/${props.history.location.state.id}`,{
            method:"PUT",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data),})
    }

    return(
        <div className = "container">
            <h1>Update Food Screen</h1>
            <button onClick={backButton} className="btn btn-warning mt-lg-2 mb-2">Back to the main screen</button>
            <form>
                <input className="w-33 p-3"
                       type="number"
                       name="foodId"
                       value={foodId}
                       onChange={(e)=>{setFoodId(e.target.value)}}
                       placeholder={props?.history?.location?.state?.foodId} />
                <input className="w-33 p-3"
                       type="text"
                       name="foodname"
                       value={foodname}
                       onChange={(e)=>{setFoodname(e.target.value)}}
                       placeholder={props?.history?.location?.state?.foodname}/>
                <input className="w-33 p-3"
                       type="number"
                       name="price"
                       value={price}
                       onChange={(e)=>{setPrice(e.target.value)}}
                       placeholder={props?.history?.location?.state?.price}/>
                <input className="w-33 p-3"
                       type="text"
                       name="type"
                       value={type}
                       onChange={(e) => {
                           setType(e.target.value)
                       }}
                       placeholder={props?.history?.location?.state?.type}/>


                <br/>
                <button type="submit" className="btn btn-primary mt-lg-2" onClick={UpdateData}>Submit</button>
            </form>
        </div>
    )
}

export default UpdateFood