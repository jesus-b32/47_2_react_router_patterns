import React from "react";
import { useParams } from "react-router-dom";

function DogDetails ({dog}) {
    // const params = useParams();
    // const currDog = dogs[params.name.toLocaleLowerCase()]
    // console.log(currDog);

    return (
        <div>
            <h3>Name: {dog.name}</h3>
            <p>Age: {dog.age}</p>
            <div>
                <p>Facts: </p>
                <ul>
                    {dog.facts.map(fact => (
                        <li>{fact}</li>
                    ))}
                </ul>
            </div>
            <img src={dog.src} alt="dog image"/>
        </div>
    )
}

export default DogDetails;

// dog.src