import React from 'react';

class Table extends React.PureComponent {

  render() {
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
                <tr>
                    <td>Leanne Graham</td>
                    <td>Sincere@april.biz</td>
                    <td>1-770-736-8031 x56442</td>
                    <td>
                        <button className="positive_button">Edit</button>
                        <button className="negative_button">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
  }
}

export default Table;
