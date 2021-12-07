import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const Tests = () => {
    const data = useStaticQuery(graphql
        `query {
            allTestsJson {
                edges {
                    node {
                        itema
                        itemb
                    }
                }
            }
        }`
        )
    const items = data.allTestsJson.edges
    return (
        <div>
            {items.map(item => (
                <div>
                    <p>{item.node.itema}</p>
                    <p>{item.node.itemb}</p>
                </div>
            ))}
        </div>
    )
}

export default Tests
