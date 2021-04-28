import { useEffect, useState } from 'react';

const MovieList = () => {

    const [movies, setMovies] = useState([])
    
    useEffect(async () => {
        const url = "http://localhost:5000/movies";
        const res = await fetch(url);
        setMovies(await res.json());
    }, [])
    
    //criar um parãmetro assitido: sim ou não para as produções que ainda não vi. a lógica vai ser semelhante ao parâmetro type
    
    return(
            <table className="striped">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Temporadas</th>
                    <th>Temporada atual</th>
                    <th>Episódios</th>
                    <th>Episódio atual</th>
                    <th>Visto por último</th>
                </tr>
                </thead>

                <tbody>
                {movies.map(movie => {
                    let type = movie.type === 0 ? 'Série' : 'Filme';
                    let formatDate = (movie.last_view).split('T', 1)
                    
                    return(
                        <tr key={movie.id}>
                            <td>{movie.name}</td>
                            <td>{type}</td>
                            <td>{movie.total_seasons}</td>
                            <td>{movie.current_season}</td>
                            <td>{movie.total_ep}</td>
                            <td>{movie.atual_ep}</td>
                            <td>{formatDate}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
    )
}

export default MovieList;
