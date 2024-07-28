import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ButtonGroup from '@mui/material/ButtonGroup';

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
    <h1>Custom Button</h1>
    <Button variant="contained" style={{backgroundColor:"green"}}>Custom1</Button>
    <Button variant="contained" sx={{backgroundColor:"yellow"}}>Custom2</Button>
   <h1>Button with click </h1>
   <Button variant="contained" onClick={() => {alert('clicked'); }}> click me</Button>
   <h1>Button Group</h1>
   <ButtonGroup variant="text" aria-label="Basic button group">
   <Button>One</Button>
   <Button>Two</Button>
   <Button>Three</Button>
   </ButtonGroup>
   <h1>Button Group vertical</h1>
   <ButtonGroup variant="text" aria-label="Basic button group" orientation="vertical">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
   </ButtonGroup>
   <h1>Floating action button</h1>
   <Fab color="warning">R</Fab>
   <Fab color="Primary"><AddIcon/></Fab>
   <Fab color="Primary"><EditIcon/></Fab>
   <Fab disabled><FavoriteIcon/></Fab>

    </div>
  );
}

export default App;
