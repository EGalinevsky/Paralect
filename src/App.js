import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import { Header } from './components/header/header';
import { Main } from './components/main/MainScreen';

function App() {

  const [name, setName] = useState('');
  const [data, setData] = useState({});
  const [repositories, setRepositories] = useState([]);

  const submitHandler = async e =>{
    e.preventDefault()

    const profile = await fetch(`https://api.github.com/users/${name}`)
    const profileJSON = await profile.json()

    const repositories = await fetch (profileJSON.repos_url)
    const repositoriesJSON = await repositories.json()

    

    if (profileJSON){
      setData(profileJSON)
      setRepositories(repositoriesJSON)
    }
  }

  console.log('data without',data)
  console.log('data without',repositories)

  useEffect(()=>{
    setName('')
    console.log('Это useEffect repositories',repositories)
    console.log('Это useEffect data', data)
  },[data, repositories])

  const HandlerChange = (e) =>{
    setName(e.target.value);
  }
  
  return (
    <div className="App">
      <Header name={name} HandlerChange={HandlerChange} submitHandler={submitHandler}/>
      {data.login ? <Main data={data} repositories={repositories}/> : null}
      
    </div>
  );
}

export default App;
