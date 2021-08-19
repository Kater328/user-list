import React from 'react';
import TableLine from './TableLine';


class Table extends React.PureComponent {

    render() {
        if (this.props.error) {
            return alert ("Error: " + this.props.error.message);
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
                        this.props.users.map(item => 
                            <TableLine 
                                key={item.id} 
                                item={item}
                                deleteUser={this.props.deleteUser}
                                editUser={this.props.editUser}/>
                        )
                    }
                </tbody>
            </table>
        )
    }
}

export default Table;
