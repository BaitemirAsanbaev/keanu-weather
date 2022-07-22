import { useState } from "react";
import classes from "./Input.module.css"

const Input = ({getData}) => {
  const [value, setValue] = useState("")
  return ( <div className={classes.Input}>
    <label htmlFor="city">City</label>
    <input type="text" name="city" id="city" onInput={(e)=> setValue(e.target.value)}/>
    <button onClick={()=>{getData(value)}}>Search</button>
  </div> );
}
 
export default Input;