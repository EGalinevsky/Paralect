import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header/header';
import { Main } from './components/main/MainScreen';
import axios from 'axios';
import { Switch, Route, useHistory } from 'react-router-dom'
import { InitialStateUserNotFound } from './components/pages/InitialStateUserNotFound/InitialStateUserNotFound';
import { InitialState } from './components/pages/InitialState/InitialState';

function App() {

  const [name, setName] = useState('');
  const [data, setData] = useState({});
  const history = useHistory();
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notFoundUsers, setNotFoundUsersr] = useState(false);
 


  const submitHandler = async e => {
    e.preventDefault()
    SerchApi()
    setNotFoundUsersr(false)
  }

  const URL = `https://api.github.com/users/${name}`

  async function SerchApi() {
    setLoading(true)
    try {
      const profile = await axios.get(URL)
        .then((res => res.data))
      const repositories = await axios.get(profile.repos_url)
        .then((rep => rep.data))
      if (profile) {
        setData(profile)
        setRepositories(repositories)
      }
    } catch (err) {
      setNotFoundUsersr(true)
    } finally {
      setLoading(false)
    }
  }
  
  console.log(repositories)
  console.log(data)
  console.log(notFoundUsers)
  console.log(repositories.length)

  useEffect(() => {    
    setName('')
    if (Object.keys(data).length && repositories.length) {
      history.push("/main")
    } else if (Object.keys(data).length || repositories.length)  {     
      history.push("/notrepositories")      
    } else {
      history.push("/") 
    }
  }, [data,repositories])

  useEffect(()=>{
    if (notFoundUsers) {
      history.push("/usernotfound")
    }
  },[notFoundUsers])

  const handlerChange = React.useCallback((e) => {
    setName(e.target.value)
  }, [])

  return (
    <div className="App">

      <Header submitHandler={submitHandler} name={name} handlerChange={handlerChange} />

      <Switch>
        <Route path='/' exact render={() => <InitialState />} />
        <Route path='/main' render={() => <Main data={data} repositories={repositories} />} />
        <Route path='/notrepositories' render={() => <Main data={data} repositories={repositories} />} />
        <Route path='/usernotfound' render={() => <InitialStateUserNotFound />} />
      </Switch>

      {loading && (<div className="loader"></div>)}
    </div>
  );
}

export default App;
