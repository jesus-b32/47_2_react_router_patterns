import React from "react";
import { Link } from "react-router-dom";

function DogList ({dogs}) {
    return (
        <div>
            <h1>List of Dogs</h1>
            <div>
                {dogs.map(dog => (
                    <div>
                        <h3>
                            <Link key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
                        </h3>
                        <img src={dog.src} alt={dog.name}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DogList;