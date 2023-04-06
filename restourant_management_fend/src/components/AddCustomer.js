import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";



const URL = 'http://localhost:8080/api/v1/customers';

function AddCustomer(props) {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [address, setAddress] = useState("");
    const history = useHistory();


    useEffect(() => {
    }, [])

    const backButton = async () => {
        await history.push({
            pathname: `/`,
        })
    }

    function saveData() {
        let data = {firstname, lastname, email, phonenumber, address}
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
            <h1>ADD CUSTOMER SCREEN</h1>
            <button onClick={backButton} className="btn btn-warning mt-lg-2 mb-2">Back to the main screen</button>
            <form>
                <input className="w-33 p-3"
                       type="text"
                       name="firstname"
                       value={firstname}
                       onChange={(e) => {
                           setFirstname(e.target.value)
                       }}
                       placeholder="Enter your first name... "/>

                <input className="w-33 p-3"
                       type="text"
                       name="lastname"
                       value={lastname}
                       onChange={(e) => {
                           setLastname(e.target.value)
                       }}
                       placeholder="Enter your last name... "/>

                <input className="w-33 p-3"
                       type="text"
                       name="email"
                       value={email}
                       onChange={(e) => {
                           setEmail(e.target.value)
                       }}
                       placeholder="Enter your email... "/>
                <input className="w-33 p-3"
                       type="number"
                       name="phonenumber"
                       value={phonenumber}
                       onChange={(e) => {
                           setPhonenumber(e.target.value)
                       }}
                       placeholder="Enter your phone number... "/>

                <input className="w-33 p-3"
                       type="text"
                       name="address"
                       value={address}
                       onChange={(e)=>{setAddress(e.target.value)}}
                       placeholder="Enter your address... "/>

                       <br/>
                <button type="submit" className="btn btn-primary mt-lg-2" onClick={saveData}>Submit</button>
            </form>
        </div>
    )
}

export default AddCustomer