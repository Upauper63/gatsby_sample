import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const List = () => {
    const data = useStaticQuery(graphql
        `query {
            allVowJson {
                edges {
                    node {
                        artist
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
    const jp_filter = (language, name) => {if(language === 'Japanese') return name}
    return (
        <div>
            {items.map(item => (
                <div>
                    <p>
                        {item.node.foreignData.map(item=>
                            (jp_filter(item.language, item.name))
                        )}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default List
