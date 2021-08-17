import React from 'react';
import Table from './components/Table';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.count = 11;
    this.state = {
      editingUser: {},
      isSelectedNew: false,
      isChanged: false,
      isNew: false
    }
  }

  editUser = (user) => {
    this.setState({
      editingUser: user,
      isSelectedNew: true
    });
  }

  turnOffSelectedNew = () => {
    this.setState({
      isSelectedNew: false
    });
  }

  turnOffChanged = () => {
    this.setState({
      editingUser: {},
      isChanged: false,
      isNew: false
    });
  }

  saveChanges = (name, email, phone) => {
    fetch("https://jsonplaceholder.typicode.com/users/" + this.state.editingUser.id, {
      method: "PUT",
      body: JSON.stringify({
        name,
        email,
        phone,
        id: this.state.editingUser.id,
      }),
    })
    .then(
      this.setState({
        editingUser: {name, email, phone, id: this.state.editingUser.id},
        isChanged: true
      })
    )  
  }

  saveNewUser = (name, email, phone) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        phone,
        id: this.count,
      }),
    })
    .then(
      this.setState({
        editingUser: {name, email, phone, id: this.count},
        isNew: true
      })
    );
    this.count++;
  }

  render() {
    return(
      <div className="app">
        <Table 
          editUser={this.editUser}
          editingUser={this.state.editingUser}
          isChanged={this.state.isChanged}
          isNew={this.state.isNew}
          turnOffChanged={this.turnOffChanged}/>
        <Form 
          currentUser={this.state.editingUser}
          isSelectedNew={this.state.isSelectedNew}
          turnOffSelectedNew={this.turnOffSelectedNew}
          deleteCurrentUser={this.turnOffChanged}
          saveChanges={this.saveChanges}
          saveNewUser={this.saveNewUser}/>
      </div>
    )
  }
}

export default App;
