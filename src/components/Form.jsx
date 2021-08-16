import React from 'react';

class Form extends React.PureComponent {

  render() {
    return(
        <form>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Email"></input>
            <input type="text" placeholder="Phone"></input>
            <div className="buttons">
                <button className="positive_button">Save</button>
                <button className="negative_button">Cancel</button>
            </div>
        </form>
    )
  }
}

export default Form;
