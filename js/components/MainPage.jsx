// js/components/MainPage.jsx
import { useEffect, useState } from "react";
import Link from 'next/link';
import MovieDetails from "./MovieDetails";

export default function MainPage() {
	const [records, setRecords] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState(null);

	const handleMovieClick = (movie) => {
		setSelectedMovie(movie);
	};

	useEffect(() => {
		try {
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch (error) {
			console.log(error);
		}
	}, []);

	const deleteRecord = (event) => {
		event.preventDefault();
		const id = event.target.id;
		try {
			fetch(`/api/records?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
					setRecords(records.filter(record => record._id !== id));
				});
		}
		catch (error) {
			console.log(error);
		}
	}

	return (
		<section className="bg-gradient-to-b from-blue-200 to-white">
			<div className="container px-6 py-10 mx-auto">
				<h1 className="w-full mx-auto text-center text-6xl font-bold text-gray-800 dark:text-white">Movie Tracker</h1>
				<p className="w-full mx-auto text-center mt-4 text-3xl text-gray-700 dark:text-gray-400">Track the movies you've watched and discover new ones!</p>

				<div className="flex justify-center mt-8">
					<Link href="/insert">
						<button
							type="button"
							className="focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
						>
							Insert Movie
						</button>
					</Link>
					<Link href="/chat">
						<button
							type="button"
							className="focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
						>
							Chat
						</button>
					</Link>
				</div>

				<div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
					{records.map(record => (
						<div
							key={record._id}
							className="relative overflow-hidden bg-white rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
							<div className="relative pb-48/100">
								<img
									className="absolute object-cover w-full h-full"
									src={record.image}
									alt={record.title}
								/>
							</div>
							<div className="px-6 pt-6 pb-8 relative">
								<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
									{record.title}
								</h5>
								<p className="mb-2 font-medium text-gray-700 dark:text-gray-400">
									{record.genre} | {record.releaseYear}
								</p>
								<p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
									Director: {record.director}
								</p>
								<p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
									Cast: {record.cast}
								</p>
								<p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
									Rating: {record.rating}
								</p>
								<p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
									Watched: {record.watched ? "Yes" : "No"}
								</p>
								<div className="absolute bottom-0 right-0 p-2 flex">
									<button
										type="button"
										id={record._id}
										onClick={deleteRecord}
										className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mr-2"
									>
										Delete
									</button>
									<button
										type="button"
										onClick={() => handleMovieClick(record)}
										className="focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 md:px-5 py-2.5 mb-2 ml-auto"
									>
										Movie Details
									</button>
								</div>
							</div>

						</div>
					))}
				</div>
				<div className="overflow-y-auto h-screen">
					{selectedMovie && (
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
							<div className="relative">
								<button
									className="absolute top-0 right-0 m-2 bg-black text-white font-bold text-xl rounded-full w-8 h-8 flex items-center justify-center"
									onClick={() => setSelectedMovie(null)}
								>
									X
								</button>
								<MovieDetails movie={selectedMovie} />
							</div>

						</div>
					)}
				</div>
			</div>
		</section>

	)
}