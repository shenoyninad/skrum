import React from 'react';
import './SaveAttendance.css';
import Axios from 'axios'
var finalarr=[];
class SaveAttendance extends React.Component {
  constructor(props){
    super(props);
    this.state = { date: new Date().getDate() + '/' + (new Date().getMonth()+1) + '/' + new Date().getFullYear(),namelist:[],
  };
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount = () => { 
    Axios({
      method :'get',
      url: 'http://localhost:3002/namelist/SG078343',
      config: {headers : {'Content-Type' : 'application/json'}}
    }).then( response => {
      
      response.data.forEach(element => {
        
        finalarr.push({AID:element.AID,Name:element.Name,Present:"NA"})

      });
      console.log("array ready for present/not present",finalarr);
      
      for(var i = 0; i<response.data.length; i++){
      this.setState({namelist:[...this.state.namelist,response.data[i]]});
      
      }
      console.log(response)
    });

  }
  render(){
    return (
      <div>
        <h5 class="save-attendance-heading">Save Attendance</h5>
        <p class="date-part">Please enter the attendance for the date : {this.state.date}</p>
        <p class="attendance-marker">Please use <code>A=Absent</code>, <code>P=Present</code></p>
          
        <AttendanceTable list={this.state.namelist} handleSave = {this.handleSave} handleChange={this.handleChange} />
        
      </div>
    );
  }

  handleSave = (e) =>{
    //alert(e.target.value);
    alert("Submitted")
    Axios.post('http://localhost:3002/savetodb', {   
      package:finalarr,
      
    });
  }

  handleChange = (e) =>{
    if(e.target.value.length == 0) {
      e.target.style.backgroundColor = "white";
    }
    else if(e.target.value === 'P' || e.target.value === 'p') {
      e.target.style.backgroundColor = "green";
      finalarr.forEach(element=>{
      if(e.target.name==element.AID)
       {
         element.Present=true;
       }
      });
        
      console.log(finalarr);
    }
    else if (e.target.value === 'a' || e.target.value === 'A') {
      e.target.style.backgroundColor = "red";
      finalarr.forEach(element=>{
        if(e.target.name==element.AID)
         {
           element.Present=false;
         }
        });
        console.log(finalarr);
    }
    
  }
}

class AttendanceTable extends React.Component{
  constructor(props){
    super(props);
    this.state={
      
    }
  }


  render(){
    return(
      <div class="save-partition">
        <table class="attendance-table">
        <tr class="attendance-table-row">
            <th class="attendance-table-heading row-name">Name</th>
            <th class="attendance-table-heading row-attendance">Attendance</th>
          </tr>
        {this.props.list.map(detail => ( 
          
          <tr class="attendance-table-row">
            <td class="attendance-table-data row-name">{detail.Name}</td>
            <td class="attendance-table-data row-attendance"><input className="attendance-status" id="attendance-status" name={detail.AID} onChange = {this.props.handleChange} /></td>
          </tr>
          
          ))}
        </table>
        <button class="btn-save" onClick={this.props.handleSave}>Save</button>
      </div>
    );
  }
}

export default SaveAttendance;
