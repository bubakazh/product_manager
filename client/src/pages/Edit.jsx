import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

    // see useParams? You know what that is by now. (getting path variable)
    const { product_id } = useParams();

    const navigate = useNavigate();

    const [ title, setTitle ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ description, setDescription ] = useState("")

    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${product_id}`)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(errors => console.log(errors))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault()
        let updatedBody = {
            "title" : title.trim(),
            "price" : price,
            "description" : description.trim()
        }
        axios.put(`http://localhost:8000/api/products/update/${product_id}`, updatedBody)
            .then(res => {
                console.log(res.data);
                navigate(`/products/${product_id}`)
            })
            .catch ( err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
    }

  return (
    <fieldset>
    <legend>Edit.jsx</legend>
    <h1> PRODUCT MANAGER </h1>
    <h2> edit product </h2>
            <form onSubmit={updateProduct}>
                <p>
                    Title:
                    <input 
                        type="text" 
                        // pattern="[^\s]+" 
                        value = {title} 
                        onChange = {(e) => setTitle(e.target.value)}
                    />
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
                <p style = {{
                        display: 'flex',
                        alignItems: 'flex-start'
                }}>
                    Description:
                    <textarea style = {{height: 100, width: 400}} type="text" value = {description} onChange = {(e) => setDescription(e.target.value)}/>
                </p>
                {
                    // title.trim().length === 0 || price <= 0 || description.length === 0 ?
                    title.trim().length < 3 || price <= 0 || description.trim().length <= 20 ?
                    <button disabled>SUBMIT</button> :
                    <button>SUBMIT</button>
                }
            </form>
            {
                errors.map((error) => <p> { error } </p>)
            }
    </fieldset>
  )
}

export default Edit