import "./styles.css";
import { useState } from 'react';

export default function App() {
  return (
   <div>  <MovieForm />
   </div> 
  );
}

function Movies({ poster, year, name, rating, summary, alt_name }) {
  return (
    <div>
      <img src={poster} className="poster_img" alt={alt_name}></img>
      <h2>{name} </h2> {year}
      <p>IMDB: {rating}</p>
      <p>{summary}</p>
      <hr />
    </div>
  );
}

function MovieForm(){
  let[poster,setPoster] = useState();
  let[mname,setMname] = useState();
  let[alt_name,setAlt_name] = useState();
  let[year,setYear] = useState();
  let[rating,setRating] =useState();
  let[summary,setSummary] = useState();
  let[movie_details,setMovie_details] = useState([
    {
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_FMjpg_UX1000_.jpg",
      mname: "Frozen 2",
      alt_name: "image of frozen casts",
      year: "2019",
      rating: "6.8",
      summary:
        "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa's powers in order to save their kingdom."
    },
    {
      poster: "https://m.media-amazon.com/images/I/41id5fPqPML._AC_.jpg",
      year: "1997",
      alt_name: "image of sinking titanic",
      mname: "Titanic",
      rating: "7.8",
      summary:
        "James Cameron's 'Titanic' is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the 'ship of dreams' -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912."
    },
    {
      poster:"https://www.pinkvilla.com/imageresize/atrangi_re_twitter_reaction.jpg?width=752&format=webp&t=pvorg",
      year: "2021",
      alt_name: "image of atrangi re casts",
      mname: "Atrangi re",
      rating: "7.3",
      summary:
        "A Tamil boy meets a girl from Bihar, what follows is a love story for the ages. A non-linear narrative of two romances running in parallel from different timelines."
    },
    {
      poster:
        "https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg?region=0%2C0%2C540%2C810",
      year: "2003",
      alt_name: "image of nemo and his father",
      mname: "Finding Nemo",
      rating: "8.1",
      summary:
        "Marlin (Albert Brooks), a clown fish, is overly cautious with his son, Nemo (Alexander Gould), who has a foreshortened fin. When Nemo swims too close to the surface to prove himself, he is caught by a diver, and horrified Marlin must set out to find him. A blue reef fish named Dory (Ellen DeGeneres) -- who has a really short memory -- joins Marlin and complicates the encounters with sharks, jellyfish, and a host of ocean dangers. Meanwhile, Nemo plots his escape from a dentist's fish tank."
    },
    {
      poster:
        "data:image/jpeg;base64,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",
      alt_name: "image of elephant and other animals on an iceberg",
      year: "2006",
      mname: "Ice age 2",
      rating: "6.8",
      summary:
        "With global warming threatening their once-icy domain with widespread flooding, Manny (Ray Romano), Sid (John Alberto Leguizamo) and Diego (Denis Leary) set out to find a safe haven. Along the way, another mammoth (Queen Latifah), who thinks she is an opossum, joins the travelers on their perilous quest."
    }
  ]); 
  return(
  <div>
    <div>
     <ul className="movieform">
       <li className="list"><label for="posterURL">Poster URL:  </label>
       <input type="text" name="posterURL" onChange={(event) => setPoster(event.target.value)}></input></li>

       <li className="list">
       <label for="name">Movie name:  </label>
       <input type="text" name="name" onChange={(event) => setMname(event.target.value)}></input>
       </li>

       <li className="list">
       <label for="altname">Image description:  </label>
       <input type="text" name="altname" onChange={(event) => setAlt_name(event.target.value)}></input>
       </li>

       <li className="list">
       <label for="year">Release year:  </label>
       <input type="text" name="year" onChange={(event) => setYear(event.target.value)}></input>
       </li>

       <li className="list">
       <label for="rating">Rating:  </label>
       <input type="text" name="rating" onChange={(event) => setRating(event.target.value)}></input>
       </li>
        
       <li className="text-area">
       <label for="summary">Summary:  </label>
       <textarea name="summary" rows="5" cols="30" onChange={(event) => setSummary(event.target.value)}></textarea>
       </li>

       <li className="submit-button">
         <button onClick={(event) => setMovie_details([{poster:poster,mname:mname,alt_name:alt_name,year:year,rating:rating,summary:summary},...movie_details])}>Submit</button>
       </li>
     </ul>
    </div> 
    <div className="App">  
     {movie_details.map(
        ({ poster, year, mname, rating, summary, alt_name }) => (
          <Movies
            poster={poster}
            year={year}
            name={mname}
            rating={rating}
            summary={summary}
            alt_name={alt_name}
          />
        )
      )}
     </div> 
   </div>   
  );
}

