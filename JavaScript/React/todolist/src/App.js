import './App.css';
import React, {useState} from 'react';
import Display from './components/Display';
import Form from './components/Form';


function App() {
  const [list, setList] = useState([]);
  return (
    <div>
      <h1>
        To Do List
      </h1>
      <Form list={list} setList={setList}/>
      <Display list={list} setList={setList}/>
    </div>

  );
}

export default App;
