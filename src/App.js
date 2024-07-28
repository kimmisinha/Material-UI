import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import AbcIcon from "@mui/icons-material/Abc";

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

    </div>
  );
}

export default App;
