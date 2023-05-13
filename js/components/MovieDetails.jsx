import React from "react";

const MovieDetails = ({ movie }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md text-gray-800 overflow-y-auto max-h-400">
            <h1 className="text-2xl font-bold mb-4">{movie.title}</h1>
            <div className="mb-4">
                <p className="font-semibold">Genre:</p>
                <p className="ml-4">{movie.genre}</p>
            </div>
            <div className="mb-4">
                <p className="font-semibold">Release Year:</p>
                <p className="ml-4">{movie.releaseYear}</p>
            </div>
            <div className="mb-4">
                <p className="font-semibold">Director:</p>
                <p className="ml-4">{movie.director}</p>
            </div>
            <div className="mb-4">
                <p className="font-semibold">Cast:</p>
                <p className="ml-4">{movie.cast}</p>
            </div>
            <div className="mb-4">
                <p className="font-semibold">Rating:</p>
                <p className="ml-4">{movie.rating}</p>
            </div>
            <div className="mb-4">
                <p className="font-semibold">Watched:</p>
                <p className="ml-4">{movie.watched ? "Yes" : "No"}</p>
            </div>
        </div>

    );
};

export default MovieDetails;