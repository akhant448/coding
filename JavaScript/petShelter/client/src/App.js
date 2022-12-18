import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayAll from './components/DisplayAll';
import CreatePet from './components/CreatePet';
import OnePet from './components/OnePet';
import EditPet from './components/EditPet';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAll/>}/>
          <Route path="/pets/:id" element={<OnePet/>}/>
          <Route path="/pets/new" element={<CreatePet/>}/>
          <Route path="/pets/:id/edit" element={<EditPet/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
