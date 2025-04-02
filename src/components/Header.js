import {useState} from 'react';

function Header({fetchUsers}) {
  
    const [username,setUsername]= useState("")
    const onChangeHandler = (e)=>{
        const query = e.target.value;
        setUsername(query);
        fetchUsers(query);
    }
    const clearSearch = () => {
        setUsername("");
        fetchUsers(""); 
      };
  
    return (
    <>
    <div className="header">
            <form>
                <input type="text" name="username" value={username}  onChange={onChangeHandler} placeholder="Search Users" />
            </form>
            <div style={{ marginTop:"2%" }}>
                <button type='button' onClick={clearSearch} >Clear</button>
            </div>

        </div>

<br/>

     
    </>
  );
}


export default Header;