import React from 'react'
import './ShowAttendance.css';
import ShowAttendanceTable from './ShowAttendanceTable';

class ShowAttendance extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div class="show-partition">
        <h5 class="show-attendance-heading">Leaderboard</h5>
        <div class="show-attendance-filter">
          <select class="show-attendance-filter-interval">
            <option>All time</option>
            <option>by Month</option>
            <option>by Iteration</option>
            <option>by Week</option>
          </select>
          <select class="show-attendance-filter-team">
            <option>All</option>
            <option>Team Biju</option>
            <option>Team Ankit</option>
            <option>Team Vinay</option>
          </select>
        </div>
        <ShowAttendanceTable />
        
      </div>
    );
  }
}

export default ShowAttendance;
