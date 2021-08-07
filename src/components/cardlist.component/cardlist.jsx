import {Card} from '../card.component/card'
import './cardlist.css'
export const CardList =  (props) => (

<div className="card-list-container">
 
    {props.monsters.map(monster=>{

       return  <Card  key={monster.key} monster={monster}/>

    })}


</div>


)
 

