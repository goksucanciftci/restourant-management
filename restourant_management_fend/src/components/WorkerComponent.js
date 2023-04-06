import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from 'react-router-dom';

const URL = 'http://localhost:8080/api/v1/workers';

function WorkerComponent(props){
    const [workers, setWorkers] = useState([])
    const history = useHistory();
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await axios.get(URL)
        setWorkers(response.data)
    }

    const handleAddWorker = async ()=>{
        await history.push({
            pathname:`/create-worker`,
        })
    }

    const handleUpdateWorker = async (worker,id)=>{
        await history.push({
            pathname:'/update-worker' +"/"+ worker.id,
            state:{id:id,firstname:worker.firstname, lastname: worker.lastname, role: worker.role}
        })
    }

    const removeData = (id) => {
        axios.delete(`${URL}/${id}`).then(res => {
            const del = workers.filter(worker => id !== worker.id)
            setWorkers(del)
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
            <button type="button" className="btn btn-success d-inline-block mt-lg-2 " style={{"margin-left":"20px"}}  onClick={handleAddWorker}>Add Worker</button>
            <table className="table table-striped">
                <thead>
                <tr>
                    <td> Worker First Name</td>
                    <td> Worker Last Name</td>
                    <td> Worker Role</td>
                    <td> </td>
                    <td> </td>

                    <td> Edit </td>
                    <td> Delete </td>
                </tr>
                </thead>
                <tbody>
                {
                    workers.map(
                        worker =>
                            <tr key={worker.id}>
                                <td> {worker.firstname}</td>
                                <td> {worker.lastname}</td>
                                <td> {worker.role}</td>
                                <td></td>
                                <td></td>

                                <td className='operation'>
                                    <button type="button" className="btn btn-info" onClick={()=>handleUpdateWorker(worker,worker.id)}>Edit</button>
                                </td>
                                <td className='operation'>
                                    <button type="button" className="btn btn-danger" onClick={() => removeData(worker.id)}>Delete</button>
                                </td>
                            </tr>
                    )
                }
                </tbody>
            </table>

        </div>



    )

}

export default WorkerComponent