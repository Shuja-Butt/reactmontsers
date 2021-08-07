import {Component} from 'react';
import {CardList} from './components/cardlist.component/cardlist'
import { SearchBox } from './components/searchbox.component/searchbox';
import './App.css';




class App extends Component {

  constructor(){//run first before any method
    super();
   this.state={
     monsters:[],
     searchBox:''
   }

   this.onSearchCahnge=this.onSearchCahnge.bind(this)
  }

  componentDidMount(){//runs before render
   
  //  fetch('https://jsonplaceholder.typicode.com/todos/1')
  //  .then(res=>res.json())
  //  .then(data=>this.setState({monsters:data}),()=>console.log(this.state))

  // with async await
  //  let context= this;
  //  (async function(){

  
     let callAPi= async ()=>{
      console.log(1)
      console.log(this,"in component did mount")
      let req = await   fetch('https://jsonplaceholder.typicode.com/users')
      let data = await req.json()
      this.setState({monsters:data})
      console.log(3)

    }
    callAPi()

  // })()
  }

   onSearchCahnge(e){
     this.setState({searchBox:e.target.value})
   }



  render(){//returns when the state changes
    
  //  let filteredProducts=()={


  //  }
  let filterMonsters = this.state.monsters.filter(monster=> monster.name.toLowerCase().includes(this.state.searchBox.toLowerCase()))

    return(
     <div  className='App'>
     <h1 id='heading'>Monsters Rorodex</h1>
     <SearchBox filter={this.onSearchCahnge}/>

     <CardList monsters={filterMonsters} />
     </div>

    )
  }
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
