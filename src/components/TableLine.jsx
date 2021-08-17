import React from 'react';

class TableLine extends React.PureComponent {

    render() {
        return(
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.email}</td>
                <td>{this.props.item.phone}</td>
                <td>
                    <button className="positive_button">Edit</button>
                    <button className="negative_button">Delete</button>
                </td>
            </tr>
        )
    }

}
    
export default TableLine;