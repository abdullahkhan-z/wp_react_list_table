import React,{useState,useEffect,useRef} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));



export default function ListTable(props)
{



  /*ALL PROPS LIST 

  ContainerStyle -> Array
  TableHeaders  -> Array
  RecordsPerPage -> Integer
  CheckBoxes -> Boolean
  HeaderText -> Text
  HeaderComponent -> Text
  HeaderStyle=
  */


  //Defaults
  const CustomContainerStyle={margin:"10px"}
  const HeaderText="Header Goes Here..."
  const DefaultTableHeaders=["A","B","C","D","E"]
  const HeaderTag="h5"
  const HeaderComponent=""
  const CustomHeaderContainerStyle={margin:"10px"}
  const DetaultRecords=10
  const HeaderStyle={}
  const TableHeadStyle={}
  const TableHeadRowStyle={}
  const TableHeadCellStyle={fontSize:"15px",fontWeight:"Bold"}
  //Initializing components variables
  
  const OptionsExist=props.Options?true:false;
  const StylesExist=props.Styles?true:false;

  if(props.CheckBoxes==null)
    var checkbox=true
  else
    var checkbox=props.Options.CheckBoxes

  const [checkboxes,SetCheckBoxes]=useState(checkbox)

  const [TableHeaders,setTableHeaders]=useState(OptionsExist?(props.Options.TableHeaders?props.Options.TableHeaders:DefaultTableHeaders):DefaultTableHeaders);
  const [RecordsPerPage,SetRecordsPerPage]=useState(OptionsExist?(props.Options.RecordsPerPage?props.Options.RecordsPerPage:DetaultRecords):DetaultRecords);

  const [HeaderTextState,SetHeaderTextState]=useState(OptionsExist?(props.Options.HeaderText?props.Options.HeaderText:HeaderText):HeaderText);
  const [HeaderTagState,SetHeaderTag]=useState(OptionsExist?(props.Options.HeaderTag?props.Options.HeaderTag:HeaderTag):HeaderTag);
  const [HeaderComponentState,SetHeaderComponentState]=useState(OptionsExist?(props.Options.HeaderComponent?props.Options.HeaderComponent:HeaderComponent):HeaderComponent);
  
  //Initializing Styles

  const classes = useStyles();
  const [ContainerStyle,SetContainerStyle]=useState(StylesExist?(props.Styles.ContainerStyle?props.Styles.ContainerStyle:CustomContainerStyle):CustomContainerStyle); 
  const [HeaderContainerStyleState,SetHeaderContainerStyleState]=useState(StylesExist?(props.Styles.HeaderStyle?props.Styles.HeaderContainerStyle:CustomHeaderContainerStyle):CustomContainerStyle);
  const [HeaderStyleState,setHeaderStyleState]=useState(StylesExist?(props.Styles.HeaderStyle?props.Styles.HeaderStyle:HeaderStyle):HeaderStyle);
  const [TableHeadStyleState,setTableHeaderStyle]=useState(StylesExist?(props.Styles.TableHeadStyle?props.Styles.TableHeaderStyle:TableHeadStyle):TableHeadStyle);
  const [TableHeadRowStyleState,setTableHeadRowStyleState]=useState(StylesExist?(props.Styles.TableHeadRowStyleState?props.Styles.TableHeadRowStyleState:TableHeadRowStyle):TableHeadRowStyle);
  const [TableHeadCellStyleState,setTableHeadCellStyleState]=useState(StylesExist?(props.Styles.TableHeadCellStyle?props.Styles.TableHeadCellStyle:TableHeadCellStyle):TableHeadCellStyle);
  

  //Initializing References
  useEffect((props)=>{

  if(props.ChangeStyles.HeaderCellStyle)
  {
    const headerCellCustomStyle=props.ChangeStyles.HeaderCellStyle;
    headerCellCustomStyle.map((key,value)=>{
      
    });
  }


    
  },[]);


  return (
    <div style={ContainerStyle}>
    <Paper className={classes.root}>
      <div style={HeaderContainerStyleState}>
      <Typography style={HeaderStyleState} variant={HeaderTagState} component={HeaderComponentState}>{HeaderTextState}</Typography>
      </div>
      <Table className={classes.table}>
        <TableHead style={TableHeadStyleState}>
        <TableRow style={TableHeadRowStyleState}>
          {TableHeaders.map((row,index)=>(
            <TableCell key={index} ref={"HeaderCell"+index} style={TableHeadCellStyleState}><button>asda</button></TableCell>
            
          ))}
        </TableRow>
        </TableHead>
        <TableBody>
          {/* {TableHeaders.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </Paper>
    </div>
  );



  //Helper Functions


}