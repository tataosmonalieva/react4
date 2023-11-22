import React, {useEffect, useState} from 'react';
import Header from "../Components/Header";

import axios from "axios";
import MealList from "../Components/MealList";


const SearchPage = () =>{
    const [meals,setMeals] = useState([]);
    const [value,setValue] =useState('');

    const handleSearch = () =>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
            .then (({data})=> {
                console.log(data.meals)
                setMeals(data.meals)

    })}

    return (
        <div>
            <Header/>
            <h1>Search Page</h1>
            <input type="text" onChange={event => setValue(event.target.value)}  />
            <button onClick={handleSearch}>search</button>
            <MealList meals={meals} />

        </div>
    );
};
export default SearchPage;