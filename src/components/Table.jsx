import React from 'react';
import TableLine from './TableLine';

class Table extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            error: null
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
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
        fetch("https://jsonplaceholder.typicode.com/users/" + id, {
            method: "DELETE",
        })
        .then(
            this.setState({
                users: this.state.users.filter(item => item.id !== id)
            })
        )
        this.props.turnOffChanged();
    }

    updateUsers = () => {
        this.setState({
            users: this.state.users.map(
              item =>
                item.id === this.props.editingUser.id ?
                {...item, 
                    name: this.props.editingUser.name,
                    email: this.props.editingUser.email,
                    phone: this.props.editingUser.phone
                } :
                item
                )
            }
        );
        this.props.turnOffChanged();
    }

    addUser = () => {
        this.setState({
            users: [
              ...this.state.users,
                {
                    id: this.props.editingUser.id,
                    name: this.props.editingUser.name,
                    email: this.props.editingUser.email,
                    phone: this.props.editingUser.phone
                }
            ]
          });
        this.props.turnOffChanged();
    }

    render() {
        if (this.state.error) {
            return alert ("Error: " + this.state.error.message);
        }
        if (this.props.isChanged) this.updateUsers();
        if (this.props.isNew) this.addUser();
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map(item => 
                            <TableLine 
                                key={item.id} 
                                item={item}
                                deleteUser={this.deleteUser}
                                editUser={this.props.editUser}/>
                        )
                    }
                </tbody>
            </table>
        )
    }
}

export default Table;
