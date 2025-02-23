import './App.css'
import Movie from './Movie.jsx'
function App ()
{
	let x="raj"
  return (
		<React.Fragment>
		  <h1>Components Demo {x}</h1>
			<div className='movies'>
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
			</div>
		</React.Fragment>
	)
}
export default App