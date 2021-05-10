import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';
export default function EmployeeCard(props) {
    return (
            <div className="row">
                <img src={props.picture} alt={props.name} id={props.id} className="col" />
                <div className="col">
                    <h5 className="card-title"> {props.firstName} {props.lastName}</h5>
                    <p className="card-text"> {props.location}</p>
                    <Button variant="dark"><a href={`mailto:${props.email}`}>Contact Me</a></Button>
                </div>
            </div>
    )
}