import React from 'react';
import './Card.css'
const Card =({id,name,email})=>{
	return(<div className="card-container">
               <img src={`https://robohash.org/${name}?set=set2&size=180x180`} alt="monster" />
                <h2>{name}</h2>
                <p>{email}</p>
         
		 </div>
)
}
export default Card;