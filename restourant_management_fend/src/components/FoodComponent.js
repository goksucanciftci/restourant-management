import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from 'react-router-dom';

const URL = 'http://localhost:8080/api/v1/food';

function FoodComponent(props){
    const [foods, setFoods] = useState([])
    const history = useHistory();

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await axios.get(URL)
        setFoods(response.data)
    }

    const handleAddFood = async ()=>{
        await history.push({
            pathname:`/create-food`,
        })
    }

    const handleUpdateFood = async (food,id)=>{
        await history.push({
            pathname:'/update-food' +"/"+ food.id,
            state:{id:id,foodId:food.foodId, foodname: food.foodname, price: food.price, type: food.type}
        })
    }

    const removeData = (id) => {
        axios.delete(`${URL}/${id}`).then(res => {
            const del = foods.filter(food => id !== food.id)
            setFoods(del)
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
            <button type="button" className="btn btn-success d-inline-block mt-lg-2 " style={{"margin-left":"20px"}}  onClick={handleAddFood}>Add Food</button>
            <table className="table table-striped">
                <thead>
                <tr>
                    <td> Food Id</td>
                    <td> Food Name</td>
                    <td> Food Price</td>
                    <td> Food Type</td>
                    <td> </td>
                    <td> Edit </td>
                    <td> Delete </td>
                </tr>
                </thead>
                <tbody>
                {
                    foods.map(
                        food =>
                            <tr key={food.id}>
                                <td> {food.foodId}</td>
                                <td> {food.foodname}</td>
                                <td> {food.price}</td>
                                <td> {food.type}</td>
                                <td> </td>
                                <td className='operation'>
                                    <button type="button" className="btn btn-info" onClick={()=>handleUpdateFood(food,food.id)}>Edit</button>
                                </td>
                                <td className='operation'>
                                    <button type="button" className="btn btn-danger" onClick={() => removeData(food.id)}>Delete</button>
                                </td>
                            </tr>
                    )
                }
                </tbody>
            </table>

        </div>



    )
}

export default FoodComponent