import './app.scss';
import SearchIcon from '@mui/icons-material/Search';
import GithubDetails from "./components/github/GithubDetails";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React, { useState,useRef, useEffect } from "react";
const baseURL = 'https://api.github.com/users/'

const App = () =>  {
  const [username,setUsername] = useState('octocat')
  const [userData,setUserData] = useState(null)
  const [lightTheme,setLightTheme] = useState(false)
  const userRef = useRef()

  const apiGet = () => {
    fetch(baseURL+`${username}`)
    .then((res) => res.json())
    .then((json) => setUserData(json))
  }

  useEffect(() => {
    apiGet()
  },[])

  function onSubmitHandler(e){
    e.preventDefault()
    setUsername(userRef.current.value)
    if (username) apiGet()
    else console.log('lauda')
  }

  return (
    <main className="appContainer" data-switch-theme={lightTheme}>
      <div className="wrapper" >
        <div className="top">
          <span className="title">devfinder</span>
          <div className='switchMode' onClick={() => setLightTheme(!lightTheme)}>
             <p>{lightTheme ? 'DARK' : 'LIGHT'}</p>
            {lightTheme ? <DarkModeIcon className='icon' /> :<LightModeIcon className='icon' />}
          </div>
        </div>
        <form onSubmit={onSubmitHandler} className='searchForm'>
              <SearchIcon  className="icon"/>
              <input ref={userRef} type="text" placeholder="Search Github Username..." />
              <button type="submit" className="submit" onClick={onSubmitHandler}>Search</button>
        </form>
        <GithubDetails data = {{userData,lightTheme}}/>
      </div>
    </main>
  );
}

export default App;