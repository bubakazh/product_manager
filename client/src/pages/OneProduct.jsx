import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const OneProduct = () => {

    const { product_id } = useParams()

    const [ oneProduct, setOneProduct] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${product_id}`)
            .then(res => setOneProduct(res.data))
            .catch(errors => console.log(errors))
    }, [])

  return (
    <fieldset>
        <legend>OneProduct.jsx</legend>
        {
            (oneProduct) ?
            <>
            <h1> { oneProduct.title } </h1>
            <h3> { oneProduct.price } </h3>
            <h3> { oneProduct.description } </h3>
            </> :
            <h1> Loading... </h1>
        }
    </fieldset>
  )
}

export default OneProduct