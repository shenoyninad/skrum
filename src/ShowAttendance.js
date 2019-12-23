import React from 'react'
import './ShowAttendance.css';
import ShowAttendanceTable from './ShowAttendanceTable';
import Axios from 'axios'
class ShowAttendance extends React.Component {
  constructor(props){
    super(props);
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
