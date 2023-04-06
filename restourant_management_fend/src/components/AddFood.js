import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";

const URL = 'http://localhost:8080/api/v1/food';

function AddFood(props){
    const [foodId, setFoodId] = useState("");
    const [foodname, setFoodname] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");

    const history = useHistory();

    useEffect(() => {
    }, [])

    const backButton = async () => {
        await history.push({
            pathname: `/`,
        })
    }
    function saveData() {
        let data = {foodId, foodname, price, type}
        fetch(URL, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            resp.json().then((result) => {
                console.warn("result", result);
            })
        })
    }

    return (
        <div className="container">
            <h1>ADD FOOD SCREEN</h1>
            <button onClick={backButton} className="btn btn-warning mt-lg-2 mb-2">Back to the main screen</button>
            <form>
                <input className="w-33 p-3"
                       type="number"
                       name="foodId"
                       value={foodId}
                       onChange={(e) => {
                           setFoodId(e.target.value)
                       }}
                       placeholder="Enter food id... "/>

                <input className="w-33 p-3"
                       type="text"
                       name="foodname"
                       value={foodname}
                       onChange={(e) => {
                           setFoodname(e.target.value)
                       }}
                       placeholder="Enter food name... "/>

                <input className="w-33 p-3"
                       type="number"
                       name="price"
                       value={price}
                       onChange={(e) => {
                           setPrice(e.target.value)
                       }}
                       placeholder="Enter price... "/>
                <input className="w-33 p-3"
                       type="text"
                       name="type"
                       value={type}
                       onChange={(e) => {
                           setType(e.target.value)
                       }}
                       placeholder="Enter food type... "/>



                <br/>
                <button type="submit" className="btn btn-primary mt-lg-2" onClick={saveData}>Submit</button>
            </form>
        </div>
    )
}

export default AddFood