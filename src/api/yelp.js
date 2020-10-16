import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer HWNUfnY_tTl9PWISq1x2VKCMG1kYr3xAgX0pSUbNWSuYLfVjYefW6uLAByFYT1GNmnM3C8QC0sR1GsKasIvgkvg-cicHMj3vr4m4zudy4Hgm2YiCkFvxD2Rs6nZ8X3Yx'
    }
});