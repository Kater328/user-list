import React from 'react';

class Form extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: ""
    }
  }

  createNewState = () => {
    this.setState({
      name: this.props.currentUser.name,
      email: this.props.currentUser.email,
      phone: this.props.currentUser.phone
    })
    this.props.turnOffSelectedNew();
  }

  clearForm = (e) => {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
    
  }

  saveChanges = (e) => {
    e.preventDefault();
    if(this.props.currentUser.id) {
      this.props.saveChanges(this.state.name, this.state.email, this.state.phone);
    } else {
      this.props.saveNewUser(this.state.name, this.state.email, this.state.phone);
    }
    this.clearForm(e);
  }

  render() {
    return(
        <form>
          {this.props.isSelectedNew && this.createNewState()}
            <input 
              type="text" 
              placeholder="Name" 
              value={this.state.name}
              onChange={(e) => this.setState({name: e.target.value})}/>
            <input 
              type="text" 
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({email: e.target.value})}/>
            <input 
              type="text" 
              placeholder="Phone"
              value={this.state.phone}
              onChange={(e) => this.setState({phone: e.target.value})}/>

            <div className="buttons">
                <button 
                  className="positive_button"
                  onClick={(e) => this.saveChanges(e)}>
                    {this.props.currentUser.id ? "Save" : "Create"}
                </button>
                <button 
                  className="negative_button"
                  onClick={(e) => {this.clearForm(e); this.props.deleteCurrentUser()}}>
                    Cancel
                </button>
            </div>
        </form>
    )
  }
}

export default Form;
