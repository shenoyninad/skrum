import React from 'react'
import './ShowAttendance.css';
import ShowAttendanceTable from './ShowAttendanceTable';
import Axios from 'axios'
import { CSVLink } from "react-csv";
var fromd
var tod
var namelist=[];
class ShowAttendance extends React.Component {
  constructor(props){
    super(props);
   this.state={
     finalist:[],
     days:0
   }
    this.handleIntervalChange = this.handleIntervalChange.bind(this);
    this.extractDate=this.extractDate.bind(this);
    this.action=this.action.bind(this);
  }
  componentDidMount = () => { 
   

    // Axios({
    //   method :'get',
    //   url: 'http://localhost:3002/statlist/25-12-2019',
    //   config: {headers : {'Content-Type' : 'application/json'}}
    // }).then( response => {
             
    //  console.log(response)
    // });

  }
  action(){
    namelist=[];
    
    Axios({
      method :'get',
      url: 'http://localhost:3002/getbydate',
      params:{fromd,tod},
      config: {headers : {'Content-Type' : 'application/json'}}
      
    }).then( response => {
             
      
       response.data[0].AttArr.forEach(element => {
        namelist.push({Name:element.Name,DaysPresent:0,AID:element.AID})
      });
     
        
        var i;
       response.data.forEach(element => {
          i=-1;
         element.AttArr.forEach(e=>{
        
          i++
          if(e.Present==true)
         { 
           namelist[i].DaysPresent++
         }
         });
       });
    
       this.setState({finalist: []});
       this.setState({days:response.data.length});
      for(var i = 0; i<namelist.length; i++){
        this.setState({finalist:[...this.state.finalist,namelist[i]]});
      }
    });
  }


  extractDate(e){
   if(e.target.name=="fromDate") 
    {
      console.log("FROM-DATE")
       fromd=new Date(e.target.value)
    console.log(fromd);
    
    }
    else
    {  console.log("TO-DATE")
      tod=new Date(e.target.value)
      tod.setDate(tod.getDate()+1)
      console.log(tod)
      
    }
  }
  handleIntervalChange(e){
    if(e.target.value == "date")
    {
      document.getElementById("show-attendance-filter-date").style.display = "inline";
      document.getElementById("show-attendance-filter-date-label").style.display = "inline";
      document.getElementById("show-attendance-filter-datex").style.display = "inline";
      document.getElementById("show-attendance-filter-date-labelx").style.display = "inline";
     
    }
    else{
      document.getElementById("show-attendance-filter-date").style.display = "none";
      document.getElementById("show-attendance-filter-date-label").style.display = "none";
      document.getElementById("show-attendance-filter-datex").style.display = "none";
      document.getElementById("show-attendance-filter-date-labelx").style.display = "none";
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
          <br />
          <label class="show-attendance-filter-date-label" id="show-attendance-filter-date-label">FROM date: </label><input class="show-attendance-filter-date" name="fromDate" id="show-attendance-filter-date" type="date" onChange={this.extractDate} />
          <label class="show-attendance-filter-date-labelx" id="show-attendance-filter-date-labelx">TO date: </label><input class="show-attendance-filter-datex" name="toDate" id="show-attendance-filter-datex" type="date" onChange={this.extractDate} />
        </div>
        <button class="btn-generate-report"><CSVLink data={this.state.finalist} filename={"my-file.csv"}>Download excel</CSVLink></button>
        <button class="btn-generate-report" onClick={this.action}>Generate Report</button>
        <ShowAttendanceTable list={this.state.finalist} days={this.state.days}/>
        
      </div>
    );
  }
}

export default ShowAttendance;
