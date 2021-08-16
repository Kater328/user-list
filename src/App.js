import React from 'react';
import Table from './components/Table';
import Form from './components/Form';

class App extends React.Component {
  render() {

    return(
      <div className="app">
        <Table />
        <Form />
      </div>
    )
  }
}

export default App;
