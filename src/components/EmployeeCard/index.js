import React from 'react';
import './style.css';

export default function EmployeeCard(props) {
    return (
        <div className="employeeCard">
            <img src={props.picture} alt={props.name}  />
            <div className="card-body">
                <h5 className="card-title"> Name : {props.firstName} {props.lastName}</h5>
                <p className="card-text"> Location : {props.location}</p>
                <p className="btn btn-primary"> Contact Me : {props.email}</p>
            </div>
        </div>
    )
}