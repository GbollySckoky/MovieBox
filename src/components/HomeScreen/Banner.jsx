import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../features/GetData/getDataSlice';
import axios from '../../api/axios';
import request from '../../api/request';

const Banner = () => {
    const { data } = useSelector((state) => state.getDataSlice)
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(request.fetchNetflixOriginals);
            const randomIndex = Math.floor(Math.random() * response.data.results.length);
            const randomMovie = response.data.results[randomIndex];
            dispatch(getData(randomMovie));
            return response;
        };
        fetchData();
    },[dispatch]);

    const truncate = (str, n) =>{
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }
    return (
        <header
            className='banner'
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                width: '100%'
            }}
        >
            <div className='banner_content'>
                <h1 className='banner_title'>{data?.title  || data?.name}</h1>
                <div className='banner_buttons'>
                    <button type='button' className='banner_button'>Play</button>
                    <button type='button' className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description'>
                    {truncate(data?.overview, 150)}</h1>
            </div>
            <div  className='banner_fadeBottom'></div>
        </header>
    );
};

export default Banner;
