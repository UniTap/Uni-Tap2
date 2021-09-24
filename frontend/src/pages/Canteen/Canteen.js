import React from 'react'
import Navbar from '../../components/Navbar'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EditIcon from '@material-ui/icons/Edit'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Button } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
center:{
  display: 'flex',
  justifyContent:'space-around',
  flexDirection:'column'
    },
  paper: {
    flexGrow: 1,
    borderColor: 'red',
    borderWidth: '10px',
  },
  Tabs: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  addOrder: {
    borderRadius:'20px',
    
  },
  table: {
    minWidth: 500,
  },
head: {
    backgroundColor: '#eee',
  },
  tableRow:{
      '&:nth-of-type(odd)': {
      backgroundColor: 'red',
    },
  },
  body: {
    fontSize: 14,
  },
  
})

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Canteen = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  function createData(srno, name, quantity, price) {
    return { srno, name, quantity, price }
  }

  const rows = [
    createData(1,'Frozen yoghurt',2,100),
    createData(2,'Ice cream sandwich',1,75),
    createData(3,'Eclair', 2,50),
    createData(4,'Cupcake', 3, 125),
    createData(5,'Gingerbread', 3,90),
  ];

  const placeOrder = () => {
    return (
      <div className={classes.center}>
        <Button
          variant='contained'
          color='primary'
          size='large'
          classes={{ root: classes.addOrder }}
          startIcon={<AddCircleIcon />}
        >
          Place Order
        </Button>
        <h2>Pending Orders</h2>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='customized table'>
            <TableHead  classes={{root: classes.head}} >
              <TableRow>
                <TableCell>sr.no</TableCell>
                <TableCell align='left'>Ordered Item</TableCell>
                <TableCell align='right'>Quantity&nbsp;</TableCell>
                <TableCell align='right'>Price&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.body}>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align='left'>{row.srno}</TableCell>
                  <TableCell align='left'>{row.name}</TableCell>
                  <TableCell align='right'>{row.quantity}</TableCell>
                  <TableCell align='right'>{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }
  const orderhistory = () => {
    return <h2>order history</h2>
  }
  const todayMenu = () => {
    return <h2>Today`s Menu</h2>
  }

  return (
    <Navbar>
      <Paper square classes={{ root: classes.paper }} elevation={5}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='fullWidth'
          indicatorColor='primary'
          textColor='primary'
          aria-label='icon label tabs example'
          classes={{ root: classes.Tabs }}
        >
          <Tab  
          icon={<EditIcon />} 
          label='Place Order' 
          {...a11yProps(0)} 
          />
          <Tab
            icon={<MenuBookIcon />}
            label='Order History'
            {...a11yProps(1)}
          />
          <Tab
            icon={<RestaurantMenuIcon />}
            label='Today`s Menu'
            {...a11yProps(2)}
          />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        {placeOrder()}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {orderhistory()}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {todayMenu()}
      </TabPanel>
    </Navbar>
  )
}

export default Canteen







// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// const useStyles = makeStyles({
  
// });

// export default function CustomizedTables() {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Dessert (100g serving)</StyledTableCell>
//             <StyledTableCell align="right">Calories</StyledTableCell>
//             <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.calories}</StyledTableCell>
//               <StyledTableCell align="right">{row.fat}</StyledTableCell>
//               <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//               <StyledTableCell align="right">{row.protein}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

