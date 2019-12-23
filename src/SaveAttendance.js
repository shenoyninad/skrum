import React from 'react';
import './SaveAttendance.css';

class SaveAttendance extends React.Component {
  constructor(props){
    super(props);
    this.state = { date: new Date().getDate() + '/' + (new Date().getMonth()+1) + '/' + new Date().getFullYear()};
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render(){
    return (
      <div>
        <h5 class="save-attendance-heading">Save Attendance</h5>
        <p class="date-part">Please enter the attendance for the date : {this.state.date}</p>
        <p class="attendance-marker">Please use <code>A=Absent</code>, <code>P=Present</code></p>
        <AttendanceTable handleSave = {this.handleSave} handleChange={this.handleChange} />
      </div>
    );
  }

  handleSave = (e) =>{
    alert(e.target.value);
  }

  handleChange = (e) =>{
    if(e.target.value.length == 0) {
      e.target.style.backgroundColor = "white";
    }
    else if(e.target.value === 'P' || e.target.value === 'p') {
      e.target.style.backgroundColor = "green";
    }
    else if (e.target.value === 'a' || e.target.value === 'A') {
      e.target.style.backgroundColor = "red";
    }
  }
}

class AttendanceTable extends React.Component{
  render(){
    return(
      <div class="save-partition">
        <table class="attendance-table">
          <tr class="attendance-table-row">
            <th class="attendance-table-heading row-name">Name</th>
            <th class="attendance-table-heading row-attendance">Attendance</th>
          </tr>
          <tr class="attendance-table-row">
            <td class="attendance-table-data row-name">Name</td>
            <td class="attendance-table-data row-attendance"><input className="attendance-status" id="attendance-status" onChange = {this.props.handleChange} /></td>
          </tr>
        </table>
        <button class="btn-save" onClick={this.props.handleSave}>Save</button>
      </div>
    );
  }
}

export default SaveAttendance;
