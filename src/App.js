import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header/header';
import { Main } from './components/main/MainScreen';
import { InitialStateUserNotFound } from './components/main/InitialStateUserNotFound/InitialStateUserNotFound';
import { InitialState } from './components/main/InitialState/InitialState';

function App() {

  

  const [name, setName] = useState('');
  const [data, setData] = useState({});
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false)
  const [notUsers, setNotuser] = useState(false)
  const [initial, setInitial] = useState(true)
  
  const submitHandler = async e => {
    e.preventDefault()
    SerchApi()
    setInitial(false)
  }
  
  const URL = `https://api.github.com/users/${name}`

  async function SerchApi() {
    setLoading(true)
    try {
      const profile = await fetch(URL)
      const profileJSON = await profile.json()

      const repositories = await fetch(profileJSON.repos_url)
      const repositoriesJSON = await repositories.json()

      if (profileJSON) {
        setData(profileJSON)
        setRepositories(repositoriesJSON)
      }
    } catch (err) {
      setNotuser(true)
      setData(false)
    } finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    setName('')
  }, [data, repositories])

  const handlerChange = React.useCallback((e) => {
    setName(e.target.value)
  }, [])

  return (
    <div className="App">
      <Header submitHandler={submitHandler} name={name} handlerChange={handlerChange} />

      {Object.keys(data).length ? <Main data={data} repositories={repositories} /> : (initial && <InitialState />)}
      {notUsers ? <InitialStateUserNotFound /> : null}
      {loading && (<div className="loader"></div>)}

    </div>
  );
}

export default App;
