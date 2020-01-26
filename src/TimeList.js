import React, {Component} from 'react'
import { Table, TableHeader, TableHeaderCell, TableBody } from 'semantic-ui-react'
import Time from './Time'
class TimeList extends Component{
    removeTime = (time) =>{
        this.props.onTimeRemove(time)
    }
        render(){
            var times = []
            var that = this;
            this.props.list.forEach(element => 
                times.push(<Time time={element} onTimeRemove={that.removeTime}/>)
            );
            return(
                <Table>
                    <TableHeader>
                        <TableHeaderCell width = {5}>Time</TableHeaderCell>
                        <TableHeaderCell width={5}>Remove</TableHeaderCell>
                    </TableHeader>
                    <TableBody>
                        {times}
                    </TableBody>
                </Table>
            )
        }
    }
export default TimeList