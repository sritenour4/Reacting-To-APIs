import React, { useState, useEffect } from 'react';

const App = () => {

    const [loaded, setLoaded] = useState(false);
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);

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

    useEffect(() => {
        if (!loaded) {
            setLoaded(loaded)
        }
    }, [loaded]);    

    if (!loaded) {
        return (
            <div>
                <button type="button" className="btn btn-primary mr-2" onClick={() => setLoaded(!loaded)}>Load Films</button>
                <button type="button" className="btn btn-primary mr-2" onClick={() => setLoaded(!loaded)}>Load People</button>
            </div>
        )
    } else {
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
    };

};


export default App;

/* <main className="container">
                    <section className="row justify-content-center mt-5">
                        {people.map(person => (
                            <div className="col-md-6" key={`people-card-${person.id}`}>
                                <div className="card shadow my-2">
                                    <div className="card-body">
                                        <h4 className="card-title">{person.title}</h4>
                                        <p className="card-text">Director: {person.name}</p>
                                        <p className="card-text">Producer: {person.gender}</p>
                                        <p className="card-text">Release date: {person.age}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </main>
            </main> */