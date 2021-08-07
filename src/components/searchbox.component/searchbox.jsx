import './searchbox.css'

export const   SearchBox=(props)=>(

<div>

<input type="search" onChange={props.filter}  placeholder="search monsters"/>

</div>

)