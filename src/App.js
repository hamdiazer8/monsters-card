import React,{Component} from 'react';
import CardList from './Components/CardList/CardList';
import InputSearch from './Components/InputSearch/InputSearch';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      input:''
    }
  }

componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=> response.json())
  .then(response=> this.setState({monsters:response}))
}
onSearchChange=(event)=>{
  this.setState({input:event.target.value});
}


render(){
  const {monsters,input}=this.state;
  const filterMonster=monsters.filter(monster=>{
    return monster.name.toLowerCase().includes(input.toLowerCase())
  })
  return(<div className='center'>
         <h1>Monsters</h1>
     <InputSearch onChange={this.onSearchChange}/>
        <CardList monsters={filterMonster}/>
    </div>
    )
} }
export default App;