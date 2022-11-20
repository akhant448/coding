import './App.css';
import React from 'react';
import {BrowserRouter,Route,Routes,Link, useParams} from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
    <h1 style ={{textAlign : 'center'}}>Welcome!</h1>
  </div>
  )}

const ParamsComponent = (props) => {
  const {word,color,bgColor} = useParams();
  return (
    <div>
      {
        isNaN(word)?
        <p style={
          color?
          {color: color, backgroundColor: bgColor}
          :null
        }>
          This word is: {word}
        </p>
        :
        <p>
          This number is: {word}
        </p>
      }
    </div>
  )
}
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path="/:word" element={<ParamsComponent/>}/>
      <Route path="/:word/:color/:bgColor" element={<ParamsComponent/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
