import {useState} from 'react';



function Header() {
  
    const [username,setUsername]= useState("")
    const onChangeHandler = (e)=>{
        setUsername(e.target.value)
    }
  
    return (
    <>
    <div className="header">
            <form>
                <input type="text" name="username" onChange={onChangeHandler} placeholder="Search Users" />
            </form>
            <div style={{ marginTop:"2%" }}>
                <button>Submit</button><br/><br/>
                <button>Clear</button>
            </div>

        </div>

<br/>

     
    </>
  );
}


export default Header;