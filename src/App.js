import { Typography } from '@mui/material';
import './App.css';
import FamilyTree from './components/FamilyTree';
import MemberPage from './components/MemberPage';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Typography variant='h2' align='center'>FamilyTree</Typography>
      <Routes>
        <Route path='/' element={<FamilyTree/>}/>
        <Route path='/member/:id' element={<MemberPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
