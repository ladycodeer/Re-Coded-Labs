import React from 'react'
import { Link } from 'react-router-dom'

const MovieList = ({movies}) => {
    const renderMovies = Object.keys(movies).map((id)=>(
    <li key={id}>
        <Link to={`/movies/${id}`}>{movies[id].title}</Link>
    </li>
    ))
  return (
    <ul>{renderMovies}</ul>
  )
}

export default MovieList