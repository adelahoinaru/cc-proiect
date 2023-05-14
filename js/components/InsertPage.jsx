// js/components/InsertPage.jsx
import { useRouter } from 'next/router';

export default function InsertPage() {
	const insertRecord = (event) => {
		event.preventDefault();
		const title = document.getElementById("title").value;
		const genre = document.getElementById("genre").value;
		const releaseYear = document.getElementById("releaseYear").value;
		const director = document.getElementById("director").value;
		const cast = document.getElementById("cast").value;
		const rating = document.getElementById("rating").value;
		const watched = document.getElementById("watched").value;
		const data = {title, genre, releaseYear, director, cast, rating, watched};
		fetch("/api/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(() => {
			console.log("New record inserted");
			document.getElementById("title").value = "";
			document.getElementById("genre").value = "";
			document.getElementById("releaseYear").value = "";
			document.getElementById("director").value = "";
			document.getElementById("cast").value = "";
			document.getElementById("rating").value = "";
			document.getElementById("watched").value = "";
		});
	}

	const router = useRouter();

	function handleClick() {
		router.back();
	}

	return (
		<section className="bg-gradient-to-b from-blue-200 to-white">
			<div className="container px-6 py-10 mx-auto">
			<button
				className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mr-4 text-lg"
				onClick={handleClick}
			>Go Back</button>
				<h1 className="w-[500px] mx-auto text-center text-6xl">Movie tracker</h1>
				<p className="w-[1000px] mx-auto text-center mt-4 text-3xl">Keep track of your favorite movies</p>

				<form>
					<div className="mb-6">
						<label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Movie title</label>
						<input type="text" id="title"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Enter movie title" required/>
					</div>
					<div className="mb-6">
						<label htmlFor="genre"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre</label>
						<input type="text" id="genre"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Enter movie genre" required/>
					</div>
					<div className="mb-6">
						<label htmlFor="releaseYear"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Release year</label>
						<input type="number" id="releaseYear"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Enter movie release year" required/>
					</div>
					<div className="mb-6">
						<label htmlFor="director"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Director</label>
						<input type="text" id="director"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Enter movie director" required/>
					</div>
					<div className="mb-6">
						<label htmlFor="cast"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cast</label>
						<input type="text" id="cast"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Enter movie cast" required/>
					</div>
					<div className="mb-6">
    					<label htmlFor="rating"
          				 		className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
    					<input type="number" id="rating"
           						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
           						placeholder="Enter movie rating" required min="0" max="10" step="0.1" />
					</div>
					<div className="mb-6">
						<label htmlFor="watched"
	       						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Watched</label>
								<select id="watched"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required>
									<option value="">Select an option</option>
									<option value="yes">Yes</option>
									<option value="no">No</option>
								</select>
					</div>
					<button type="submit"
					        onClick={ insertRecord }
					        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
					</button>
				</form>
			</div>
		</section>
	)
}