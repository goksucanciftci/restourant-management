import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from 'react-router-dom';

const URL = 'http://localhost:8080/api/v1';

function Main(props){
    const history = useHistory();
    useEffect(() => {
    }, [])

    const customerComponent =async ()=>{
        await history.push({
            pathname:`/customer`,
        })
    }
    const workerComponent = async ()=>{
        await history.push({
            pathname:`/worker`,
        })
    }
    const foodComponent = async ()=>{
        await history.push({
            pathname:`/food`,
        })
    }
    return(
        <div>

            <button type="button" className="btn btn-success d-inline-block mt-lg-2 " style={{"margin-left":"400px","font-size":"24px" }}  onClick={customerComponent}>Customer</button>
            <button type="button" className="btn btn-success d-inline-block mt-lg-2 " style={{"margin-left":"400px","font-size":"24px" }}  onClick={workerComponent}>Worker</button>
            <button type="button" className="btn btn-success d-inline-block mt-lg-2 " style={{"margin-left":"400px","font-size":"24px" }}  onClick={foodComponent}>Food</button>
        </div>
    )
}
export default Main