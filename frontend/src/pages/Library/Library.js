import React from 'react'
import Navbar from '../../components/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import HistoryIcon from '@mui/icons-material/History';
import BookmarkAddedTwoToneIcon from '@mui/icons-material/BookmarkAddedTwoTone';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
center: {
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
    maxWidth: 1400,
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
        <Box p={7}>
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

const Library = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
 
  const columns = [
    { 
      id: 'srno', 
      label: 'SR. NO', 
      minWidth: 170, 
      align: 'center',
      fontWeight: 'bolder',
    },
    {
      id: 'id', 
      label: 'BOOK ID', 
      align: 'center',
      minWidth: 100, 
   },
    {
      id: 'name',
      label: 'BOOK NAME',
      minWidth: 170,
      align: 'center',
    },
    {
      id: 'idate',
      label: 'ISSUE DATE',
      minWidth: 170,
      align: 'center',
    },
    {
      id: 'rdate',
      label: 'RETURN DATE',
      minWidth: 170,
      align: 'center',
    },
    {
      id: 'diff',
      label: 'REMAINING DAYS',
      minWidth: 170,
      align: 'center',
    },
  ];  

  function createData(srno, id, name, idate, rdate, diff) {
    return { srno, id, name, idate, rdate, diff }
  }

  const rows = [
    createData(1,4018,'DBMS','2021-09-21','2021-09-27',3),
    createData(2,3018,'DS','2021-09-21','2021-09-27',3),
    createData(3,2018,'JAVA','2021-09-21','2021-09-27',3),
    createData(4,1018,'Python','2021-09-21','2021-09-27',3),
    createData(5,1200,'React','2021-09-21','2021-09-27',3),
    createData(6,4518,'DBMS','2021-09-20','2021-09-28',4),
    createData(7,3198,'DS','2021-09-20','2021-09-28',4),
    createData(8,2099,'JAVA','2021-09-20','2021-09-28',4),
    createData(9,1848,'Python','2021-09-20','2021-09-28',4),
    createData(10,9822,'React','2021-09-20','2021-09-28',4),
    createData(11,9815,'DBMS','2021-09-19','2021-09-29',5),
    createData(12,6558,'DS','2021-09-19','2021-09-29',5),
    createData(13,9855,'JAVA','2021-09-19','2021-09-29',5),
    createData(14,8954,'Python','2021-09-19','2021-09-29',5),
    createData(15,1640,'React','2021-09-19','2021-09-29',5),
  ];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  

    const issuedbooks = () => {
      return (
        <div className={classes.center}>
          <h2 style={{marginTop: -10,marginBottom: 40,fontSize: 25}}>Books Occupied By You&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇</h2>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer component={Paper}>
                <Table className={classes.table} stickyHeader aria-label="sticky table">
                  <TableHead  classes={{root: classes.head}} >
                    <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth, fontWeight: 'bolder', backgroundColor: '#FFB6C1' }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                    </TableRow>
                  </TableHead>
                  <TableBody className={classes.body}>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
        </div>
      )
    }

  const history = () => {
    return <h2>History Of Books[Logs]</h2>
  }
  const available = () => {
    return <h2>Available Books</h2>
  }

  return (
    <Navbar>
      <Paper square classes={{ root: classes.paper }} elevation={10}>
        <Tabs
          value={value}
          onChange={handleChange}         
          variant='fullwidth'
          centered
          indicatorColor='secondary'
          textColor='secondary'
          aria-label='icon label tabs example'
          classes={{ root: classes.Tabs }}
        >
          <Tab 
          icon={<BookmarkAddedTwoToneIcon />}
          label='Your Issued Books' 
          {...a11yProps(0)} 
          />
          <Tab
            icon={<HistoryIcon />}
            label='History'
            {...a11yProps(1)}
          />
          <Tab
            icon={<LibraryBooksTwoToneIcon />} 
            label='Available Books (To Issue)'
            {...a11yProps(2)}
          />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        {issuedbooks()}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {history()}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {available()}
      </TabPanel>
    </Navbar>
  )
}

export default Library

