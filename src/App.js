import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import { Header } from './components/header/header';
import { Main } from './components/main/MainScreen';
import { InitialStateUserNotFound } from './components/main/InitialStateUserNotFound/InitialStateUserNotFound';
import { InitialState } from './components/main/InitialState/InitialState';

function App() {

  const [name, setName] = useState('');
  const [data, setData] = useState({});
  const [repositories, setRepositories] = useState([]);
  const [users, setUsers] = useState(false)

  const submitHandler = async e =>{

    e.preventDefault()    
    try{
      const profile = await fetch(`https://api.github.com/users/${name}`)
      const profileJSON = await profile.json()
      // profile.catch(alert('lolol'))
  
      const repositories = await fetch (profileJSON.repos_url)
      const repositoriesJSON = await repositories.json()  
      
      
      if (profileJSON){
        setData(profileJSON)
        setRepositories(repositoriesJSON)
        setUsers(false)
      }
    } catch(err){
      setUsers(true)
      setData(false)
    }
    
  }

  console.log('data без функции',data)
  console.log('repositories без функции',repositories)

  useEffect(()=>{
    setName('')  
    console.log('Это useEffect repositories',repositories)
    console.log('Это useEffect data', data)
  },[data,repositories])

  const HandlerChange = (e) =>{
    setName(e.target.value);    
  }
  
  return (
    <div className="App">
      <Header name={name} HandlerChange={HandlerChange} submitHandler={submitHandler}/>
      {Object.keys(data).length ? <Main data={data} repositories={repositories}/> : <InitialState />}
      {users ? <InitialStateUserNotFound/> : null}       
    </div>
  );
}

export default App;
