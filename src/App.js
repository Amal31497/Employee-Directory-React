import React, { useEffect, useState } from 'react';
import { DropdownButton, Dropdown, Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';
import './App.css';
import EmployeeCard from './components/EmployeeCard'
import API from './utils/API'

function App() {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    API.findPeople(10)
      .then(res => {
        setEmployees(res.data.results);
        // console.log(res.data.results);
      })
      .catch(err => console.log(err))
  }, [])

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
      <Jumbotron className="container">
        <ListGroup variant="flush">
          {employees.map((employee, index) => (
            <ListGroupItem>
              <EmployeeCard
                id={employee.id}
                picture={employee.picture.large}
                firstName={employee.name.first}
                lastName={employee.name.last}
                location={employee.location.state}
                email={employee.email}
              />
            </ListGroupItem>

          ))}
        </ListGroup>
      </Jumbotron>
    </div>
  );
}

export default App;
