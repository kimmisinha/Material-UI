import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AcUnitIcon from '@mui/icons-material/AcUnit';
function App() {
  return (
    <div className="App">
      <h1>Text Button</h1>
      <Button variant="text">Text</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="primary" href="https://google.com">Link</Button>
      <Button disabled>Disabled</Button>
      <h1>Contained Button</h1>
      <Button variant='contained'>Click Me</Button>
    <Button variant='contained' color="secondary">Click Me</Button>
    <Button variant='contained' color="primary" href="https://google.com">Link</Button>
    <Button variant='contained' disabled>Disabled</Button>
    <h1>Outlined Button</h1>
    <Button variant="outlined">Click Me</Button>
    <Button variant="outlined" color="secondary">Secondary</Button>
    <Button variant="outlined" href="https://google.com" color="primary">Link</Button>
    <Button variant="outlined" disabled>Disabled</Button>
    <h1>Button Size</h1>
    <Button variant="contained" color="secondary" size="small">Small</Button>
    <Button variant="contained" color="secondary" size="medium">Medium</Button>
    <Button variant="contained" color="secondary" size="large">Large</Button>  
    <h1>Button with Icon</h1>
    <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} >Delete</Button>
    <Button variant="contained" color="warning" endIcon={<AcUnitIcon />} >Delete</Button>
    <h1>Icon Button</h1>
    <IconButton color="secondary">
      <DeleteIcon/>
    </IconButton>
    
    </div>
  );
}

export default App;
