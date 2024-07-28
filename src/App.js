import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
<Button color="secondary">Secondary</Button>
<Button variant="contained" color="success">
  Success
</Button>
<Button variant="outlined" href="https://github.com/geekyshow1/muiv5" color="error">
  Error
</Button>
<Button  disabled>Secondary</Button>

</div>

  );
}

export default App;
