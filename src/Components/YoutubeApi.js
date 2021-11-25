import React from 'react';
import axios  from "axios";

const KEY = "AIzaSyCpXHG6cvg09b9ivsAlmDIjlK2WE8ck_hk";



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 8,
        key :KEY
    }
 
});
