import {
    Form,
    Button,
    Table,
    Container,
} from 'semantic-ui-react';
import{TimeInput} from 'semantic-ui-calendar-react'
import React, { Component } from 'react';
import TimeList from './TimeList'
import axios from "axios"
class PillForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            PillName:'',
            PillDescription:'',
            Time:'',
            Times : []
        };
  //      this.onSubmit = this.handleSubmit.bind(this);
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
        this.setState({Times: this.state.Times, name: this.state.name, PillDescription:this.state.PillDescription});
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
    postinfo = () => {
        axios.defaults.baseURL = 'http://localhost:5000/api/pills';
       /* axios.defaults.headers = {
            "Access-Control-Allow-Origin" : "*",
            "crossDomain": "true"
        }*/
        let payload = JSON.stringify({
            name: this.state.PillName,
            Description: this.state.PillDescription,
            Times : this.state.Times
        })
        console.log(payload)
        axios.post(`/api/pills`,payload,{
            headers: {'Content-Type': 'application/json',}},).then(function (response) {
            
            console.log(response.status);
          })
          .catch(function (error) {
              
            console.log(error.stringify);
          });
          return axios(`/api/pills`, {
            method: 'POST',
            data: payload,
            mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
            withCredentials: true,
            credentials: 'same-origin',
          }).then(response => {
              console.log(response)
          }).catch(error => {
              console.log(error)
          })
    }
    render(){
        return(
    <Container>
    <Form inverted size={'huge'} key={'huge'} style={{ marginTop : '5em', marginLeft: '3em' }}>
    <Form.Field>
    <Form.Input  name='PillName' fluid label='Pill Name' placeholder='Pill Name' width={10} onChange={this.handleChange}/>
    </Form.Field>
    <Form.Field>
        <Form.Input name='PillDescription' fluid label='Pill Description' placeholder='Pill Description' width={10} onChange={this.handleChange}/>
    </Form.Field>
    <Form.Group widths="12">
        <TimeInput  name="Time" placeholder="Time" value ={this.state.Time} onChange={this.handleChange}></TimeInput>
        <Button  onClick={this.addTime}>Add</Button>
    </Form.Group>
    <Button onClick={this.postinfo} >Submit</Button>
    
</Form>
<TimeList list ={this.state.Times} onTimeRemove = {this.onTimeRemove}/>
</Container>
        )
    }
}
export default PillForm