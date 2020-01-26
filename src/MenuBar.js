import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Menu
        fixed={'top'}
        inverted={true}
        pointing={true}
        secondary={true}
        size='large'
      >
        <Container>
          <Menu.Item name="Home" as={Link} to='/' active={activeItem === "Home"} onClick={this.handleItemClick}>
            Home
          </Menu.Item>
          <Menu.Item name="PillForm" as={Link} to='/a/pill-form' active={activeItem === "PillForm"} onClick={this.handleItemClick}>
              Pill Form
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Abi:<12345>@deltahacks6-1mdlh.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/