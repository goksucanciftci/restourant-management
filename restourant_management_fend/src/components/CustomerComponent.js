import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from 'react-router-dom';
import {forEach} from "react-bootstrap/ElementChildren";

const URL = 'http://localhost:8080/api/v1/customers';

function CustomerComponent(props) {

    const [customers, setCustomers] = useState([])
    const history = useHistory();
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await axios.get(URL)
        setCustomers(response.data)
    }

    const handleAddCustomer = async () => {
        await history.push({
            pathname: `/create-customer`,
        })
    }

    const getCustomer = async () => {
        await history.push({
            pathname: `/get-customer`,
        })
    }

    const handleUpdateCustomer = async (customer, id) => {
        await history.push({
            pathname: '/update-customer' + "/" + customer.id,
            state: {
                id: id,
                firstname: customer.firstname,
                lastname: customer.lastname,
                email: customer.email,
                phonenumber: customer.phonenumber,
                address: customer.address
            }
        })
    }


    const removeData = (id) => {
        axios.delete(`${URL}/${id}`).then(res => {
            const del = customers.filter(customer => id !== customer.id)
            setCustomers(del)
        })
    }
    const backButton = async () => {
        await history.push({
            pathname: `/`,
        })
    }




    return (
        <div>
            <button onClick={backButton} className="btn btn-warning mt-lg-2 mb-2">Back to the main screen</button>
            <button type="button" className="btn btn-success d-inline-block mt-lg-2 "
                    style={{"margin-left": "20px"}} onClick={handleAddCustomer}>Add Customer
            </button>
            <button type="button" className="btn btn-success d-inline-block mt-lg-2 "
                    style={{"margin-left": "20px"}} onClick={getCustomer}>Get Customer
            </button>


            <table className="table table-striped">
                <thead>
                <tr>
                    <td> Customer First Name</td>
                    <td> Customer Last Name</td>
                    <td> Customer Email</td>
                    <td> Customer Phone</td>
                    <td> Customer Address</td>
                    <td> Edit</td>
                    <td> Delete</td>
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
                                <td className='operation'>
                                    <button type="button" className="btn btn-info"
                                            onClick={() => handleUpdateCustomer(customer, customer.id)}>Edit
                                    </button>
                                </td>
                                <td className='operation'>
                                    <button type="button" className="btn btn-danger"
                                            onClick={() => removeData(customer.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                    )
                }
                </tbody>
            </table>

        </div>


    )

}

export default CustomerComponent