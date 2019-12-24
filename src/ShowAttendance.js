import React from 'react'
import './ShowAttendance.css';
import ShowAttendanceTable from './ShowAttendanceTable';
import Axios from 'axios'
class ShowAttendance extends React.Component {
  constructor(props){
    super(props);

    this.handleIntervalChange = this.handleIntervalChange.bind(this);
  }
  componentDidMount = () => { 
    Axios({
      method :'get',
      url: 'http://localhost:3002/scrumd/SG078343',
      config: {headers : {'Content-Type' : 'application/json'}}
    }).then( response => {
    //   for(var i = 0; i<response.data.length; i++){
    //   this.setState({batches:[...this.state.batches,response.data[i]]  });
    //   }
      console.log(response)
    });

  }

  handleIntervalChange(e){
    if(e.target.value == "date")
    {
      document.getElementById("show-attendance-filter-date").style.display = "inline";
      document.getElementById("show-attendance-filter-date-label").style.display = "inline";
    }
    else{
      document.getElementById("show-attendance-filter-date").style.display = "none";
      document.getElementById("show-attendance-filter-date-label").style.display = "none";
    }

  }

  render(){
    return (
      <div class="show-partition">
        <h5 class="show-attendance-heading">Leaderboard</h5>
        <div class="show-attendance-filter">
          <select class="show-attendance-filter-interval" onChange={this.handleIntervalChange} >
            <option value="time">All time</option>
            <option value="month">by Month</option>
            <option value="iteration">by Iteration</option>
            <option value="week">by Week</option>
            <option value="date">By Date</option>
          </select>
          <select class="show-attendance-filter-team">
            <option value="all">All</option>
            <option value="Biju">Team Biju</option>
            <option value="ankit">Team Ankit</option>
            <option value="vinay">Team Vinay</option>
          </select>
          <label class="show-attendance-filter-date-label" id="show-attendance-filter-date-label">Select a date: </label><input class="show-attendance-filter-date" id="show-attendance-filter-date" type="date" />
        </div>
        <ShowAttendanceTable />
        <button class="btn-generate-report">Generate Report</button>
      </div>
    );
  }
}

export default ShowAttendance;
