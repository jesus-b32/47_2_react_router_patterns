import React from "react";
import { Navigate, Link } from "react-router-dom";

function DogDetails ({dog}) {
    if (!dog) return <Navigate to="/dogs" />

    return (
        <div>
            <h1>Name: {dog.name}</h1>
            <h3>Age: {dog.age}</h3>
            <div>
                <h3>Facts: </h3>
                <div>
                    {dog.facts.map(fact => (
                        <p>{fact}</p>
                    ))}
                </div>
            </div>
            <img src={dog.src} alt={dog.name}/>
            <div>
                <h3><Link to="/dogs">Go Home</Link></h3>
            </div>
        </div>
    )
}

export default DogDetails;