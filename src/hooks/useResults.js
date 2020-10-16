import {useEffect, useState} from 'react';
import axios from 'axios';



export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const location = 'san jose';

    const searchApi = async (term) => {
        // const response = yelp.get('/search', {
        //     params: {
        //         term: term,
        //         limit: 50,
        //         location: location
        //     }
        // })
        // setResults(response.data.businesses);

        axios.get('https://api.yelp.com/v3/businesses/search', {
            params: {
                term: term,
                limit: 50,
                location: location
            },
            headers: {
                Authorization: 'Bearer HWNUfnY_tTl9PWISq1x2VKCMG1kYr3xAgX0pSUbNWSuYLfVjYefW6uLAByFYT1GNmnM3C8QC0sR1GsKasIvgkvg-cicHMj3vr4m4zudy4Hgm2YiCkFvxD2Rs6nZ8X3Yx'
            }
        })
        .then(response => {
            setResults(response.data.businesses);
        }, 
        (error) => {
            setErrorMessage('Something went wrong');
        });
        
    }

    useEffect(() => {
        searchApi('');
    }, [] );

    return [searchApi, results, errorMessage];

}