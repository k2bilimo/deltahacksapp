import {
    Form,
    Button,
    Table,
    Container,
} from 'semantic-ui-react';
import{TimeInput} from 'semantic-ui-calendar-react'
import React, { Component } from 'react';
import TimeList from './TimeList'

class PillForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            PillName:'',
            PillDescription:'',
            Time:'',
            Times : []
        };
        this.onSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
          this.setState({ [name]: value });
        }
      }
    addTime = () => {
        var check = true
        for(var i = 0; i < this.state.Times.length; i++){
            if(this.state.Times[i] === this.state.Time){
                check = false;
                break;
            }
        }
        if(check === true){
            this.state.Times.push(this.state.Time)
        this.setState({Times: this.state.Times});
        }
    }
    onTimeRemove = (time) =>{
        for(var i = 0; i < this.state.Times.length; i++){
            if(this.state.Times[i] === time){
                this.state.Times.splice(i,1)
                this.setState({Times: this.state.Times});
                break;
            }
        }
    }
    handleSubmit = (event) => {

    }
    render(){
        return(
    <Container>
    <Form onSubmit={this.onSubmit} inverted size={'huge'} key={'huge'} style={{ marginTop : '5em', marginLeft: '3em' }}>
    <Form.Field>
    <Form.Input  name='PillName' fluid label='Pill Name' placeholder='Pill Name' width={10} onChange={this.handleChange}/>
    </Form.Field>
    <Form.Field>
        <Form.Input name='PillDescription' fluid label='Pill Description' placeholder='Pill Description' width={10} onChange={this.handleChange}/>
    </Form.Field>
    <Form.Group widths="12">
        <TimeInput  name="Time" placeholder="Time" value ={this.state.Time} onChange={this.handleChange}></TimeInput>
        <Button onClick={this.addTime}>Add</Button>
    </Form.Group>
    <Button type='submit' onClick={this.handleSubmit} >Submit</Button>
    
</Form>
<TimeList list ={this.state.Times} onTimeRemove = {this.onTimeRemove}/>
</Container>
        )
    }
}
export default PillForm