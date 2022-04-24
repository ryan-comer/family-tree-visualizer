import { Typography } from '@mui/material';
import './App.css';
import FamilyTree from './components/FamilyTree';

function App() {
  return (
    <div className="App">
      <Typography variant='h2' align='center'>FamilyTree</Typography>
      <FamilyTree></FamilyTree>
    </div>
  );
}

export default App;
