import React, {Component} from 'react'
import { TableCell, TableRow, Button } from 'semantic-ui-react'
class Time extends Component{
    constructor(props){
        super(props)
        this.onSubmit = this.handleRemoveTime.bind(this)
    }
    handleRemoveTime(){
        this.props.onTimeRemove(this.props.time)
        
    }
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.time}</TableCell>
                <Button negative onClick={this.onSubmit}>Remove</Button>
            </TableRow>
        )
    }
}
export default Time