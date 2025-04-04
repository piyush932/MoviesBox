import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';
import Errorpage from '../pages/Errorpage';

function Mainroutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:name' element={<MovieDetails/>}/>
        <Route path='/*' element={<Errorpage/>}/>
    </Routes>
  )
}

export default Mainroutes