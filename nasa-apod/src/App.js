import React, { useState, useEffect} from "react";
import axios from 'axios';
import Header from './components/Header'
import Description from './components/Description'
import styled from 'styled-components'
import key from './APIkey'

const Main = styled.div`
  min-height: 100vh;
  background: rgb(43, 55, 56,.85);
`


function App() {

  const [ apod, setApod ] = useState(undefined);
  const [ mediaType, setMediaType ] = useState(undefined)
  useEffect( () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
      .then( resp => {
        setApod(resp.data)
        setMediaType(resp.data.media_type)
      })
      .catch( err => {
        console.log(err)
      })
  },[])

  return (
    <Main>
      {apod ? <Header title={apod.title} date={apod.date}/> : <div/>}
      {apod ? <Description hdurl={apod.hdurl} url={apod.url} mediaType={mediaType} expl={apod.explanation}/> : <div/>}
    </Main>
  );
}

export default App;