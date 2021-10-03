import React,{useState} from 'react'
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
import { Button, Card, CardActions, CardContent, CardMedia, Grid, List, ListItem } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Card from '@mui/material/Card'
// import CardActions from '@mui/material/CardActions'
// import CardContent from '@mui/material/CardContent'
// import CardMedia from '@mui/material/CardMedia'

const useStyles = makeStyles({
center:{
  display: 'flex',
  justifyContent:'space-around',
  flexDirection:'column',
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
    marginLeft:'20%',
    marginRight:'20%'
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
  cardStyle:{
    maxWidth:'50%',
    marginLeft:'auto',
    marginRight:'auto'
  }
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

  function createData(srno, name, price,quantity, netItemprice) {
    return { srno, name, price, quantity, netItemprice }
  }

  function subtotal(items) {
    return items.reduce((acc, curr) => acc + curr.netItemprice, 0)
  }

  const rows = [
    createData(1, 'Frozen yoghurt', 50, 2, 100),
    createData(2, 'Ice cream sandwich', 75, 1, 75),
    createData(3, 'Eclair', 25, 2, 50),
    createData(4, 'Cupcake', 25, 3, 125),
    createData(5, 'Gingerbread', 30, 3, 90),
  ]

  let total = subtotal(rows);

  const placeOrder = () => {
   console.log(total)
    return (
      <div className={classes.center}>
        <Button
          variant='contained'
          color='primary'
          size='large'
          classes={{ root: classes.addOrder }}
          startIcon={<AddCircleIcon />}
          onClick={() => setValue(2)}
        >
          Create new Order
        </Button>
        <h2>Pending Orders</h2>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='customized table'>
            <TableHead classes={{ root: classes.head }}>
              <TableRow>
                <TableCell>sr.no</TableCell>
                <TableCell align='left'>Ordered Item</TableCell>
                <TableCell align='right'>Price&nbsp;</TableCell>
                <TableCell align='right'>Quantity&nbsp;</TableCell>
                <TableCell align='right'>Net Item Price&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.body}>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align='left'>{row.srno}</TableCell>
                  <TableCell align='left'>{row.name}</TableCell>
                  <TableCell align='right'>{row.price}</TableCell>
                  <TableCell align='right'>{row.quantity}</TableCell>
                  <TableCell align='right'>{row.netItemprice}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={3} align='right'>
                  <strong>Net total</strong>
                </TableCell>
                <TableCell align='right'>
                  <strong> {total}</strong>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }
  const orderhistory = () => {
    return <h2>order history</h2>
  }

  const menuItem = () => (
    <Card classes={{ root: classes.cardStyle }}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          chicken biryani
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo
          exercitationem dolores perspiciatis numquam similique ipsa placeat vel
          officiis quia repellat totam omnis, rem eum ullam iure, facere earum
          nisi.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Add to Order</Button>
      </CardActions>
    </Card>
  )
  const todayMenu = () => {
    return (
      <div>
        <h2>Today`s Menu</h2>
        <List>
          <ListItem>{menuItem()}</ListItem>
          <ListItem>{menuItem()}</ListItem>
          <ListItem> {menuItem()}</ListItem>
        </List>
      </div>
    )
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
          <Tab icon={<EditIcon />} label='Place Order' {...a11yProps(0)} />
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

