import React from 'react';
import './search.css'
const InputSearch=({onChange})=>{
	return (<div>
		        <input className="search" onChange={onChange} type='search' placeholder='search'/>
		    </div>
		)

}
export default InputSearch;