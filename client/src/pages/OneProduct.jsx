import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const OneProduct = () => {

    const { product_id } = useParams()

    const [ oneProduct, setOneProduct] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${product_id}`)
            .then(res => setOneProduct(res.data))
            .catch(errors => console.log(errors))
    }, [])

    const deleteProduct = (product_id) => {
      axios.delete(`http://localhost:8000/api/products/delete/${product_id}`)
          .then( res => {
              console.log(res.data)
              navigate(`/`)
          })
          .catch(errors => console.log(errors))
    }

  return (
    <fieldset>
        <legend>OneProduct.jsx</legend>
        <div style = {{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start'
        }}>
          {
              (oneProduct) ?
              <>
              <h1> { oneProduct.title } </h1>
              <h3> $ { oneProduct.price.toFixed(2) } </h3>
              <h3> { oneProduct.description } </h3>
              <button onClick = {() => deleteProduct(oneProduct._id)}>Delete</button>
              </> :
              <h1> Loading... </h1>
          }
          <Link to = {`/`}>back</Link>
        </div>
    </fieldset>
  )
}

export default OneProduct