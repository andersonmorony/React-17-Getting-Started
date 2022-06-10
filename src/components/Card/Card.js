import React from "react";
import './Card.css';

const Card = (props) => {
    
    const {name, avatar_url, html_url} = props.item

    return(
        <>
            <div className="card">
                <div className="card-body">
                    <img className="card-img" src={avatar_url} alt=""/>
                    <div className="card-info"><p>{name}</p></div>
                </div>
                <a href={html_url}>See the repository</a>
            </div>
        </>    
    )
}

export default Card