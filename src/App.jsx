import React, { useState, useEffect } from 'react';

const App = () => {

    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);
    const [showFilms, setShowFilms] = useState(false)
    const [showPeople, setShowPeople] = useState(false)

    let toggleFilms = () => {
        setShowFilms(true)
        setShowPeople(false)
    }
    let togglePeople = () => {
        setShowFilms(false)
        setShowPeople(true)
    }

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(allFilms => setFilms(allFilms))
    }, []);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(allPeople => setPeople(allPeople))
    }, []);

    if (showFilms === false && showPeople === false) {
        return (
            <div>
                <button type="button" className="btn btn-primary mr-2" onClick={() => toggleFilms()}>Load Films</button>
                <button type="button" className="btn btn-primary mr-2" onClick={() => togglePeople()}>Load People</button>
            </div>
        )
    } else {
        if (showFilms) {
            return (
                <main className="container">
                    <section className="row justify-content-center mt-5">
                        {films.map(film => (
                            <div className="col-md-6" key={`film-card-${film.id}`}>
                                <div className="card shadow my-2">
                                    <div className="card-body">
                                        <h4 className="card-title">{film.title}</h4>
                                        <p className="card-text">Director: {film.director}</p>
                                        <p className="card-text">Producer: {film.producer}</p>
                                        <p className="card-text">Release date: {film.release_date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </main>
            )
        } else if (showPeople) {
            return (
                <main className="container">
                    <section className="row justify-content-center mt-5">
                        {people.map(person => (
                            <div className="col-md-6" key={`people-card-${person.id}`}>
                                <div className="card shadow my-2">
                                    <div className="card-body">
                                        <h4 className="card-title">{person.name}</h4>
                                        <p className="card-text">gender: {person.gender}</p>
                                        <p className="card-text">age: {person.age}</p>
                                        <p className="card-text">eye color: {person.eye_color}</p>
                                        <p className="card-text">hair color: {person.hair_color}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </main>
            )
        };
    };
};


export default App;

