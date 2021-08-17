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
    }

    render() {
        if (this.state.error) {
            return alert ("Error: " + this.state.error.message);
        }
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
                                deleteUser={this.deleteUser}/>
                        )
                    }
                </tbody>
            </table>
        )
    }
}

export default Table;
