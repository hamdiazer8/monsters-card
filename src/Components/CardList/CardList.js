import React from 'react';
import Card from '../Card/Card';
import './cardList.css'

const CardList =({monsters})=>{
	return(
	<div className='grid'>
	{monsters.map(e=>{
		return <Card  key={e.id} name={e.name} email={e.email}/>
		
	})}
	</div>)

}
export default CardList;