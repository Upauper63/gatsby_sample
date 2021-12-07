import React from "react"

const fT_filter = (foreignData) => {if(foreignData.language === 'Japanese' && 'flavorText' in foreignData) return <i>{foreignData.flavorText}</i>};
const name_filter = (foreignData) => {if(foreignData.language === 'Japanese' && 'name' in foreignData) return <h1>{foreignData.name}</h1>};
const text_filter = (foreignData) => {if(foreignData.language === 'Japanese' && 'text' in foreignData) return <p>{foreignData.text}</p>};
const type_filter = (foreignData) => {if(foreignData.language === 'Japanese' && 'flavorText' in foreignData) return <h2>{foreignData.type}</h2>};

const Detail = ({pageContext}) => (
    pageContext.foreignData.map(data => 
        <>
            { name_filter(data) }
            { type_filter(data)}
            { text_filter(data) }
            { fT_filter(data) }
        </>
    )
)

export default Detail
