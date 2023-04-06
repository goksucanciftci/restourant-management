import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

const URL = 'http://localhost:8080/api/v1/customers';

function GetCustomer(props){

    const [customers, setCustomers] = useState([])
    const history = useHistory();
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await axios.get(URL)
        setCustomers(response.data)
    }
    const backButton = async () => {
        await history.push({
            pathname: `/`,
        })
    }
    


    return (
        <div>
            <button onClick={backButton} className="btn btn-warning mt-lg-2 mb-2">Back to the main screen</button>

            <table className="table table-striped">
                <thead>
                <tr>
                    <td> Customer First Name</td>
                    <td> Customer Last Name</td>
                    <td> Customer Email </td>
                    <td> Customer Phone</td>
                    <td> Customer Address</td>

                </tr>
                </thead>
                <tbody>
                {
                    customers.map(
                        customer =>
                            <tr key={customer.id}>
                                <td> {customer.firstname}</td>
                                <td> {customer.lastname}</td>
                                <td> {customer.email}</td>
                                <td> {customer.phonenumber}</td>
                                <td> {customer.address}</td>


                            </tr>
                    )
                }
                </tbody>
            </table>

        </div>



    )
}

export default GetCustomer