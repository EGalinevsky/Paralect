import React, { useEffect,  useState } from 'react';
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
        
      }
    } catch (err) {
      setNotuser(true)
      setData(false)
    }
  }



  console.log('3', loading)  



  useEffect(() => {
    setName('')
    setLoading(false)
    console.log('Это useEffect repositories', repositories)
    console.log('Это useEffect data', data)
  }, [data,repositories])



  return (
    <div className="App">
      
      <Header submitHandler={submitHandler} name={name} setName={setName}/>
      
      
      {Object.keys(data).length ? <Main data={data} repositories={repositories}/> :  (initial && <InitialState />)}
      {notUsers ? <InitialStateUserNotFound /> : null}
      {loading && (<div className="loader"></div>)}
      {/* {istate && <InitialState />}       */}
    </div>
  );
}

export default React.memo(App);
