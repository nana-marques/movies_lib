import {useState, useEffect} from 'react';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    console.log(moviesURL,apiKey);
  return (
    <div>Home</div>
  )
}

export default Home