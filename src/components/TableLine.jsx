import React from 'react';

class TableLine extends React.PureComponent {

    render() {
        return(
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.email}</td>
                <td>{this.props.item.phone}</td>
                <td>
                    <button 
                        className="positive_button"
                        onClick={() => this.props.editUser(this.props.item)}>
                            Edit
                    </button>
                    <button 
                        className="negative_button"
                        onClick={() => this.props.deleteUser(this.props.item.id)}>
                            Delete
                    </button>
                </td>
            </tr>
        )
    }

}
    
export default TableLine;