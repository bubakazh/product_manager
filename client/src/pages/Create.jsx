import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Create = () => {

    const navigate = useNavigate();

    const [ title, setTitle ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ description, setDescription ] = useState(false)
    
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);

    const createProduct = (e) => {
        e.preventDefault()
        if (title.trim().length == 0){
            setTitle("");
            return;
        }
        let body = {
            "title" : title,
            "price" : price,
            "description" : description
        }
        // ! MAKE AN AXIOS REQUEST TO MY API
        axios.post("http://localhost:8000/api/products", body)
            .then ( res => {
                console.log(res.data)
                // setName("")
                // setDate("")
                // setUnder30Mins(false)
                navigate("/dashboard")
            })
            // .catch(err=>{
            //     const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            //     const errorArr = []; // Define a temp error array to push the messages in
            //     for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            //         errorArr.push(errorResponse[key].message)
            //     }
            //     // Set Errors
            //     setErrors(errorArr);
            // })            
            .catch ( errors => console.log(errors))
        // ! not https. WE ARE NOT SET UP TO RECEIVE SECURE REQUESTS YET.
    }


    return (
        <fieldset>
            <legend>Create.jsx</legend>
            <form onSubmit={createProduct}>
                <p>
                    Title:
                    <input type="text" value = {title} onChange = {(e) => setTitle(e.target.value)}/>
                </p>
                <p>
                    Price:
                    <input 
                    type="number"
                    step = "0.01"
                    min = { 0 } 
                    value = {price} 
                    onChange = {(e) => setPrice(e.target.value)}/>
                </p>
                <p>
                    Description:
                    <textArea type="text" value = {description} onChange = {(e) => setDescription(e.target.value)}/>
                </p>
                <button>Submit</button>
            </form>
            {/* <Link to={`/dashboard`}>Dashboard</Link> */}
            {
                errors.map((error) => <p> { error } </p>)
            }
        </fieldset>
    )
}

export default Create