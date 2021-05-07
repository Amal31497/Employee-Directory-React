import react from 'react';


export default function Employee(props) {
    return (
        <div className="card-50">
            <img src={props.picture} alt={props.name} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title"> Name : {props.name}</h5>
                    <p className="card-text"> Location : {props.location}</p>
                    <p className="btn btn-primary"> Contact Me : {props.email}</p>
                </div>
        </div>
    )
}