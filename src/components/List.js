import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'

const List = () => {
    const data = useStaticQuery(graphql
        `query {
            allVowJson {
                edges {
                    node {
                        name
                        foreignData{
                            language
                            name
                        }
                    }
                }
            }
        }`
        )
    const items = data.allVowJson.edges
    console.log(items)
    const jp_filter = (item) => {if(item.language === 'Japanese') return item.name}
    return (
        <>
            {items.map(item => (
                <div>
                    <a><Link to={'/cards/' + item.node.name}>
                        {item.node.foreignData.map(item=>
                            (jp_filter(item))
                        )}
                    </Link></a>
                </div>
            ))}
        </>
    )
}

export default List
