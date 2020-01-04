import React from 'react';
import './ShowAttendance.css';


class ShowAttendanceTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           
        };
       
        
        }

    render(){
        return(
            <div class="show-attendance-table">
                <table class="attendance-table">
                 
                    <tr class="attendance-table-row"> 
                        <th class="attendance-table-heading row-name">
                            Name
                        </th>
                        <th class="attendance-table-heading row-present">
                            Scrums attended on time
                        </th>
                    </tr>
                    {this.props.list.map(detail => (
                         <tr class="attendance-table-row"> 
                         <td class="attendance-table-heading row-name">
                             {detail.Name}
                         </td>
                         <td class="attendance-table-heading row-present">
                              {detail.DaysPresent}/{this.props.days}
                         </td>
                     </tr>
                         ))}
                </table>
            </div>
        );
    }
}

export default ShowAttendanceTable;