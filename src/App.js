import React, { useEffect, useMemo, useState } from 'react';
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
  const [istate, setIstate] = useState(true)
  const [loading, setLoading] = useState(false)


  const submitHandler = async e => {      
    e.preventDefault()
    SerchApi()
  }  

  async function SerchApi (){
    setLoading(true)
    try {
      const profile = await fetch(`https://api.github.com/users/${name}`)
      const profileJSON = await profile.json()

      const repositories = await fetch(profileJSON.repos_url)
      const repositoriesJSON = await repositories.json()      
      
      if (profileJSON) {
        setData(profileJSON)
        setRepositories(repositoriesJSON)
        setUsers(false)        
        setIstate(false)        
      }
    } catch (err) {
      setUsers(true)
      setData(false)
      setIstate(false)
    } finally{
      setLoading(false)
    }
  }

  console.log('1', data)
  console.log('2', repositories)
  console.log('3', users)
  console.log('4', istate)

  useEffect(() => {
    setName('')
    console.log('Это useEffect repositories', repositories)
    console.log('Это useEffect data', data)
  }, [data,repositories])



  return (
    <div className="App">
      
      <Header submitHandler={submitHandler} name={name} setName={setName}/>
      {loading &&  (<div className="loader"></div>)}
      
      {Object.keys(data).length ? <Main data={data} repositories={repositories}   /> : null}
      {users ? <InitialStateUserNotFound /> : null}
      {istate && <InitialState />}
    </div>
  );
}

export default App;
