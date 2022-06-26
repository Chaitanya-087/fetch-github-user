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

  useEffect(() => {
      const apiGet = async () => {                               // important .......
      const response = await fetch(baseURL+`${username}`);
      const user = await response.json();
      setUserData(user)
    }
    if (username) apiGet()
    else console.log('lauda')
  },[username])


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
        <div  className='searchForm'>
              <SearchIcon  className="icon"/>
              <input ref={userRef} type="text" placeholder="Search Github Username..." />
              <button type="submit" className="submit" onClick={() => setUsername(userRef.current.value)}>Search</button>
        </div>
        <GithubDetails data = {{userData,lightTheme}}/>
      </div>
    </main>
  );
}

export default App;