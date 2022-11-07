import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';




function App() {
  const [userslist,setUsersList] = useState([])

const userDetails =(name,age) => {
  setUsersList((prevusers)=> {
    return [
      ...prevusers,
      {Username:name, Age: age , key: Math.random().toString()},
    ]
  }
  )
}

  return (
    <div>
      <AddUser onAddUser={userDetails}/>
      <UsersList users={userslist}/>
    </div>
  );

  }
export default App;
