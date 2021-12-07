import { graphql } from "gatsby"
import React from "react"


const Product = ({pageContext}) => (
    <div>
        <h1>{ pageContext.title }</h1>
        <p>{ pageContext.content }</p>
    </div>
)

export default Product