import React from 'react';
import './ShowAttendance.css';


class ShowAttendanceTable extends React.Component{


    render(){
        return(
            <div class="show-attendance-table">
                <table class="attendance-table">
                    <tr class="attendance-table-row"> 
                        <th class="attendance-table-heading row-name">
                            Name
                        </th>
                        <th class="attendance-table-heading row-present">
                            Present
                        </th>
                        <th class="attendance-table-heading row-present">
                            Absent
                        </th>
                    </tr>
                </table>
            </div>
        );
    }
}

export default ShowAttendanceTable;