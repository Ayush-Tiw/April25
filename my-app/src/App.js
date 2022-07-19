import React from "react";
import { Message } from "./Message";
import './App.css';
import { Routes, Route, Link,Navigate,useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { MovieList } from "./MovieList";
import { AddColor } from "./AddColor";
import { useState } from "react";
import { AddMovie } from "./AddMovie";
import { MovieDetails } from "./MovieDetails";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { useParams } from "react-router-dom";

function App() {
  
let students=[
    {name :"Ayush",
pic:"https://m.media-amazon.com/images/I/81zBYuenKfS._SL1500_.jpg"
},
{
    name:"Manish",
    pic:"https://m.media-amazon.com/images/I/711VUwDUBLL._SL1100_.jpg"
},
{
    name:"Ram",
    pic:"https://m.media-amazon.com/images/I/81zBYuenKfS._SL1500_.jpg"
}
]

const intial_movie_list=[
    {
        id:"100",
        image:"https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG" ,
        title:'RRR',
        ratings:8.8,
        description:"RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
        trailer:"https://www.youtube.com/embed/NgBoMJy386M"

    },
    {
        id:"101",
        image: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
        title:'Iron man 2',
        ratings:7,
        description:"With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
        trailer:"https://www.youtube.com/embed/RHT1CIrcLCk"

    },
    {
        id:"102",
        image:"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg" ,
        title:'Jai Bhim',
        ratings:8.8,
        description:"A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
        trailer:"https://www.youtube.com/embed/nnXpbTFrqXA" 

    },
    {
        id:"103",
        image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg" ,
        title:'The Avengers',
        ratings:8,
        description:"Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
        trailer:"https://www.youtube.com/embed/LPhqL4DqzBg"

    },
    {
        id:"104",
        image:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg" ,
        title:'Interstellar',
        ratings:8.8,
        description:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans",
        trailer:"https://www.youtube.com/embed/zSWdZVtXT7E"

    }
]
const [movieList,setMovieList]=useState(intial_movie_list)


  return (
    <div className="App">
     {/* {students.map((student)=>(
<Message name={student.name} pic={student.pic}/>
      ))} */}
     

     <AppBar position="static">
        <Toolbar>
        <Button color="inherit" onClick={()=>navigate("/")}>Home</Button>
        </Toolbar>
      </AppBar>

<nav>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/color-game">Color Game</Link></li>
        <li><Link to="/movies">Movie</Link></li>
        <li><Link to="/add-movie">Add Movie</Link></li>
        <li><Link to="/tic-tac-toe">Tic Tac Toe</Link></li>
    </ul>
</nav>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/color-game" element={<AddColor/>}/>
    <Route path="/movies" element={<MovieList movieList={movieList} setMovieList={setMovieList} />}/>
    <Route path="/add-movie" element={<AddMovie movieList={movieList} setMovieList={setMovieList} />}/>
    <Route path="/movies/:id" element={<MovieDetails movieList={movieList} />}/>
    <Route path="/tic-tac-toe" element={<TicTacToe/>}/>
</Routes>

     
{/* { {colorList.map((clr)=>(<ColorBox color={clr}/>))} */}

    </div> 

  )
}

function TicTacToe(){

    const styles={
        backgroundColor:"wheat",
        width:"120px",
        height:"120px"
    }

    return(
        <div style={styles} className="ticTacToeGame">

        </div>
    )
}


export default App;
