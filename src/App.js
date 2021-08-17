import React from 'react';
import Table from './components/Table';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingUser: {},
      isSelectedNew: false,
      isChanged: false
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
      isChanged: false
    });
  }

  deleteCurrentUser = () => {
    this.setState({
      editingUser: {}
    });
  }

  saveChanges = (name, email, phone) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
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

  render() {
    return(
      <div className="app">
        <Table 
          editUser={this.editUser}
          editingUser={this.state.editingUser}
          isChanged={this.state.isChanged}
          turnOffChanged={this.turnOffChanged}/>
        <Form 
          currentUser={this.state.editingUser}
          isSelectedNew={this.state.isSelectedNew}
          turnOffSelectedNew={this.turnOffSelectedNew}
          deleteCurrentUser={this.deleteCurrentUser}
          saveChanges={this.saveChanges}/>
      </div>
    )
  }
}

export default App;
