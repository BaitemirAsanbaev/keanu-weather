import { useState } from "react";

const Input = ({getData}) => {
  const [value, setValue] = useState("")
  return ( <div>
    <label htmlFor="city">City</label>
    <input type="text" name="city" id="city" onInput={(e)=> setValue(e.target.value)}/>
    <button onClick={()=>{getData(value)}}>Search</button>
  </div> );
}
 
export default Input;