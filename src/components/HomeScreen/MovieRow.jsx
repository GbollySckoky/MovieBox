import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import API_KEY from '../../config';
import { MdCancel } from "react-icons/md";

const MovieRow = ({ title, fetchURL, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const [noTrailer, setNoTrailer] = useState('');
    const [cancel, setCancel] = useState(false);
    console.log(cancel);
    
    const handleCancelClick = () => {
        setNoTrailer('');
        setCancel(!cancel);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await axios.get(fetchURL);
                setMovies(request.data.results);
            } catch (error) {
                if(error.response){
                    setMovies(error.request.data)
                    console.log(error.request.data)
                }
                else{
                  setMovies(`${error.message}`)
                  console.log(`${error.message}`)
                }
            }
        };
        fetchData();
    }, [fetchURL]);

    const handleClick = async (id) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US&official=true`);
            const videos = response.data.results;
            if (videos.length > 0) {
                const trailerKey = videos[0].key; // Assuming the first video is the trailer
                setTrailerUrl(`https://www.youtube.com/embed/${trailerKey}`);
                setNoTrailer('');
            } else {
                // Handle case when no trailers are available
                setNoTrailer("Couldn't fetch the movie trailer for this data");
                setTrailerUrl('');
            }
        } catch (error) {
            setNoTrailer("An error occurred while fetching the trailer.");
        }
    };

    const handleClose = () => {
        setTrailerUrl('');
        setNoTrailer('');
    };

    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className='row_posters'>
                {movies && movies?.map((movie) => (
                    <div className={`row_poster ${isLargeRow && 'row_posterLarge'}`} key={movie.id}>
                        <img
                            onClick={() => {
                                if (trailerUrl) {
                                    handleClose();
                                } else {
                                    handleClick(movie.id);
                                }
                            }}
                            src={`https://image.tmdb.org/t/p/w300/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.title}
                        />
                        <p className='movie-title'>{movie?.title || movie?.name}</p>
                    </div>
                ))}
            </div>
            {trailerUrl && (
                <div className="trailer_container">
                    <iframe
                        title="movie-trailer"
                        width="100%"
                        height="315"
                        src={trailerUrl}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
            {noTrailer && (
                <div className='trail'>
                    <p className='noTrailer'>{noTrailer}</p>
                    <span onClick={handleCancelClick}><MdCancel /></span>
                </div>
            )}
        </div>
    );
};

export default MovieRow;
