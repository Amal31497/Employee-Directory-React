import React, { useEffect, useState } from 'react';
import { DropdownButton, Dropdown, Jumbotron, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import './App.css';
import EmployeeCard from './components/EmployeeCard'
import API from './utils/API'

function App() {

  const [employees, setEmployees] = useState([])
  const [emp, setEmp] = useState([])
  const [states, setStates] = useState([])
  useEffect(() => {
    API.findPeople(10)
      .then(res => {
        setEmp(res.data.results)
        setEmployees(res.data.results);
      })
      .catch(err => console.log(err))
  }, [])
  
  const sortByName = (option) => {
    if(option === "Ascending"){
      setEmployees([...employees.sort((e1,e2) => e1.name.first.localeCompare(e2.name.first)) ])
    } else if (option === "Descending"){
      setEmployees([...employees.sort((e1,e2) => e2.name.first.localeCompare(e1.name.first)) ])
    }
  }

  const filterByState = (option) => {
    setEmployees([...employees.filter((employee) =>  employee.location.state === option)])
  }
  const reset = () => {
    setEmp(emp)
    setEmployees(emp)
  }

  employees.forEach(employee => {
    var state = employee.location.state
    if (!states.includes(state)) {
      states.push(state)
    }
  })

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <h2 className="navbar-brand"><strong>Employee Directory</strong></h2>
        </div>
      </nav>
      <div className="filter">
        <DropdownButton id="dropdown-basic-button" title="Sort By Name">
          <Dropdown.Item href="#/action-1" onClick={() => sortByName("Ascending")}>Ascending</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={() => sortByName("Descending")}>Descending</Dropdown.Item>
        </DropdownButton>
        <Button onClick={() => reset()}>Reset</Button>
        <DropdownButton id="dropdown-basic-button" title="Filter by Location">
          {states.map((state) => (
            <Dropdown.Item href="#/action-1" onClick={() => filterByState(state)}>{state}</Dropdown.Item>
          ))}
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
