import react from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import './App.css';
import EmployeeCard from './components/EmployeeCard/index' 


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <h2 className="navbar-brand"><strong>Employee Directory</strong></h2>
        </div>
      </nav>
      <div className="filter">
        <DropdownButton id="dropdown-basic-button" title="Sort By Name">
          <Dropdown.Item href="#/action-1">Ascending</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Descending</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Filter by Location">
          <Dropdown.Item href="#/action-1">Washington</Dropdown.Item>
          <Dropdown.Item href="#/action-2">California</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Texas</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Oregon</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Utah</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="jumbotron"> 
        <EmployeeCard />
      </div>
    </div>
  );
}

export default App;
