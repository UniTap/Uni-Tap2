// import React from 'react';
// import Navbar from './Navbar';
// import './Grievance.css';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//   button: {
//     display: 'block',
//     marginTop: theme.spacing(2),
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }));

// function Grievance() {
//   const classes = useStyles();
//   const [name, setName] = React.useState('');
//   const [open, setOpen] = React.useState(false);

//   const handleChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   return (
//     <div className="Grievance">
//       <Navbar/>
//       <div className="selectName">
//         <div className="ToSend">
//           <h3>To: </h3>
//         </div>
//         <div className="selectName">
//           <FormControl className={classes.formControl}>
//             <Select
//               labelId="demo-controlled-open-select-label"
//               id="demo-controlled-open-select"
//               open={open}
//               onClose={handleClose}
//               onOpen={handleOpen}
//               value={name}
//               onChange={handleChange}
//             >
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               <MenuItem value={10}>Admin-1</MenuItem>
//               <MenuItem value={20}>Admin-2</MenuItem>
//               <MenuItem value={30}>Admin-3</MenuItem>
//             </Select>
//           </FormControl>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Grievance;



import React from 'react';
import './Grievance.css'
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(0),
    marginRight: theme.spacing(0),
    marginBottom: theme.spacing(0),
    marginLeft: theme.spacing(0),
    minWidth: 120,
  },
}));

export default function GroupedSelect() {
  const classes = useStyles();

  return (
      <Navbar>
      <div className="GrievanceForm">
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">To:</InputLabel>
            <Select native defaultValue="" id="grouped-native-select">
              <option aria-label="None" value="" />
              <optgroup label="Admin">
                <option value={1}>Option 1</option>
                <option value={2}>Option 2</option>
              </optgroup>
              <optgroup label="Faculty">
                <option value={3}>Option 3</option>
                <option value={4}>Option 4</option>
              </optgroup>
            </Select>
          </FormControl>
          
        </div>
        <div className="sendContent">
          <textarea name="" id="send" cols="60" rows="10" placeholder="Max limit: (300 words)"></textarea>
        </div>
      </div>
       </Navbar>
  );
}
