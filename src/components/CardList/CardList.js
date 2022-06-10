import React from "react"
import Card from '../Card/Card'

const CardList = (props) => {
    
    let listCard = props.items

    return (
        <>
            {listCard ? listCard.map(card =>  <Card item={card} /> ) : null}
        </>
    )
}

export default CardList