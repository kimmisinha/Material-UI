import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ButtonGroup from '@mui/material/ButtonGroup';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Stack from '@mui/system/Stack';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';


function App() {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
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
   <h1>Checkbox</h1>
   <Checkbox/>
   <Checkbox checked/>
   <Checkbox checked={true} color="success"/>
   <Checkbox icon={<FavoriteBorder />}checkedIcon={<FavoriteBorder />}onChange={() => console.log("Checked Done")}/>
   <FormControlLabel control={<Checkbox  />} label='India'/>
   <FormControlLabel control={<Checkbox  />} label='India' labelPlacement="bottom"/>
   <FormControlLabel control={<Checkbox  />} label='India' labelPlacement="top"/>
   <FormControlLabel control={<Checkbox  />} label='Bottom' labelPlacement='bottom'/>
   <FormControlLabel control={<Checkbox  />} label='End' labelPlacement='end'/>
   <h1>Radio Button</h1>
   <Radio value='male' name='radio-button'/>
   <Radio value='female' name='radio-button'/>
   <FormControlLabel control={<Radio  />} label='Top' labelPlacement='top'/>
    <FormControlLabel control={<Radio  />} label='Start' labelPlacement='start'/>
    <FormControlLabel control={<Radio  />} label='Bottom' labelPlacement='bottom'/>
    <FormControlLabel control={<Radio  />} label='End' labelPlacement='end'/>
    <RadioGroup row>  
    <FormControlLabel control={<Radio  />}  label='Male'/>
    <FormControlLabel control={<Radio  />}  label='Male'/>
    <FormControlLabel control={<Radio  />}  label='Other'/>
    </RadioGroup>
    <h1>Rating</h1>
    <Rating value={3} readOnly/>
    <Rating defaultValue={3.7} precision={2.5} />
     <h1>Slider</h1>
     <Slider value={5} color='secondary'/>
     <Slider defaultValue={30} color='secondary'/>
   <Box sx={{height:300}}>
   <Slider orientation='vertical' defaultValue={30} color='secondary'/>
   </Box>
   <h2>Switch</h2>
   <Switch/>
   <Switch defaultChecked/>
   <Switch disabled defaultChecked/>
   <FormControlLabel control={<Switch />} label='Dark'/> 
   <h1>Text message</h1>
   <TextField />
   <TextField label='Name' />
   <TextField label='Standard' variant='standard'/>
   <TextField label='Outlined' variant='outlined'/>
   <TextField label='Filled' variant='filled'/>
   <h1>Box</h1>
   <Box>Hello World</Box>
   <h2>Stack</h2>
   <Stack spacing={2} direction='row'>
   <Button variant='contained'>Click Me</Button>
      <Button variant='contained' color="secondary">Click Me</Button>
      <Button variant='contained' color="primary" href="https://google.com">Link</Button>
      <Button variant='contained' disabled>Disabled</Button>
  </Stack>
  <h1>These are System Key/Props</h1>
    <h1>Alignment</h1>
    <Box textAlign="left">Hello</Box>
    <Box textAlign="center">Hello</Box>
    <Box textAlign="right">Hello</Box>
    <h1>Font Weight</h1>
    <Box fontWeight="bold">Hello</Box>
    <Box fontWeight={500}></Box>
    <h1>Font Size</h1>
    <Box fontSize={24}>kimmi</Box>
    <h1>Font Style</h1>
    <Box fontStyle="italic">Hello</Box> 
    <h1>Color</h1>
    <Box color="primary.main">primary</Box>
    <Box color="secondary.main">secondary</Box>
    <Box color="error.main">error</Box>
    <Box color="warning.main">warning</Box>
    <Box color="info.main">info</Box>
    <Box color="success.main">success</Box>
    <h1>Background Color</h1>
    <Box bgcolor="primary.main">primary</Box>
    <Box bgcolor="secondary.main">secondary</Box>
    <Box bgcolor="error.main">error</Box>
    <Box bgcolor="warning.main">warning</Box>
    <Box bgcolor="info.main">info</Box>
    <Box bgcolor="success.main">success</Box>
    <h1>Margin</h1>
    <Box m={10}>All Side Margin</Box>
    <Box mt={10}>Margin Top</Box>
    <Box mb={10}>Margin Bottom</Box>
    <Box ml={10}>Margin Left</Box>
    <Box mr={10}>Margin Right</Box>
    <Box mx={10}>Margin Left Right</Box>
    <Box my={10}>Margin Top Bottom</Box>
    <h1>Padding</h1>
    <Box p={10}> All Side Padding</Box>
    <Box pt={10}>Padding Top</Box>
    <Box pb={10}>Padding Bottom</Box>
    <Box pl={10}>Padding Left</Box>
    <Box pr={10}>Padding Right</Box>
    <Box px={10}>Padding Left Right</Box>
    <Box py={10}>Padding Top Bottom</Box>
    <h1>Width Sizing</h1>
    <Box width={1/4} bgcolor="red">Width 1/4</Box>
    <Box width={1} bgcolor="red">Width 100%</Box>
    <Box width="50%"bgcolor="red">Width 50%</Box>
    <Box width={500} bgcolor="pink">Width 500px</Box>
    <Box width={500} bgcolor="pink">Width 500px</Box>
    <h1>Height Sizing</h1>
    <Box height="50%" bgcolor="yellow">Height 50%</Box>
    <Box height={500} bgcolor="pink">Height 500px</Box>
    <h1>Border</h1>
    <stack spacing={4}>
    <Box border={1}>Hello 1</Box>
    <Box borderTop={1}>Hello 2</Box>
    <Box borderBottom={1}>Hello 3</Box>
    <Box borderLeft={1}>Hello 4</Box>
    <Box borderRight={1}>Hello 5</Box>
    </stack>
    <stack spacing={4}>
    <Box border={0}>Hello</Box>
    <Box border={1} borderTop={0}>Hello 2</Box>
      <Box border={1} borderBottom={0}>Hello 3</Box>
      <Box border={1} borderLeft={0}>Hello 4</Box>
      <Box border={1} borderRight={0}>Hello 5</Box>
    </stack>
    <h1>Border Color</h1>
    <Box border={1} borderColor="secondary.main">Hello</Box>
    <h1>Border Raduis</h1> 
    <Box border={1} borderRadius="40%" width={300} height={300}></Box>
    <Box border={1} borderRadius={16} width={300} height={300}></Box>
    <h1>Avatar</h1>
    <Avatar>kimmi</Avatar>
    <Avatar src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg" />
    <Avatar><DeleteIcon /></Avatar>
    <AvatarGroup total={24} borderRadius="40%">
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
    <h1>Badge</h1>
    <Stack spacing={4} direction="row">
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
    <Badge badgeContent={100} color="success" max={40}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={0} showZero>
    <MailIcon />
   </Badge>
   <Badge color="secondary" badgeContent={1000} max={999}>
   <MailIcon />
   </Badge>
   <Badge color="primary" variant="dot">
        <MailIcon />
      </Badge>
    </Stack>
    <h1>Chip</h1>
    <Stack direction="row" spacing={1}>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
      <Chip label="Clickable" onClick={handleClick} />
      <Chip label="Clickable" variant="outlined" onClick={handleClick} />
      <Chip label="Deletable" onDelete={handleDelete} />
      <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
      <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Avatar"
        variant="outlined"
      />
    </Stack>
    <h1>Divider</h1>
    <Divider />
    <Divider>CENTER</Divider>
    <Divider textAlign="left">LEFT</Divider>
   
   </div>
  );
}

export default App;
