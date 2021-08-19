import React from 'react';
import Table from './components/Table';
import Form from './components/Form';
import { loadUsersApi, deleteUserApi, saveNewUserApi, changeUserApi } from './api.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.count = 11;
    this.state = {
      users: [],
      editingUser: {},
      error: null
    }
  }

  componentDidMount() {
    loadUsersApi().then(response => response.json())
    .then(
      (apiUsers) => {
        this.setState({ users: apiUsers });
      },
      (error) => {
        this.setState({ error });
      }
    )
  }

  deleteUser = (id) => {
    deleteUserApi().then(
      this.setState({
        users: this.state.users.filter(item => item.id !== id)
      })
    )
  }

  deleteCurrentUser = () => {
    this.setState({
      editingUser: {}
    })
  }

  editUser = (user) => {
    this.setState({
      editingUser: user
    });
  }

  saveChanges = (name, email, phone) => {
    if (this.state.users.some (element => (element.id === this.state.editingUser.id))) {
      changeUserApi(this.state.editingUser.id, name, email, phone)
      .then(
        this.setState({
          users: this.state.users.map(
            item =>
              item.id === this.state.editingUser.id ?
                {...item, name, email, phone} : item
              ),
            editingUser: {}
          })
      );
    } else {
      saveNewUserApi(this.count, name, email, phone)
      .then(
        this.setState({
          users: [
            ...this.state.users, {id: this.count, name, email, phone}
          ]
        })
      );
      this.count++;
    }
  }

  render() {
    return(
      <div className="app">
        <Table 
          users={this.state.users}
          editUser={this.editUser}
          error={this.state.error}
          deleteUser={this.deleteUser}/>
        <Form 
          currentUser={this.state.editingUser}
          turnOffSelectedNew={this.turnOffSelectedNew}
          deleteCurrentUser={this.deleteCurrentUser}
          saveChanges={this.saveChanges}/>
      </div>
    )
  }
}

export default App;
