import React, {useEffect, useState} from 'react';
import axios from "axios";
import MealList from "../Components/MealList";


const HomePage = () => {

    const [meals,setMeals] = useState([])

    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then (({data})=> setMeals (data.meals))
    }, []);

    return (
        <>
            <div className={'container'}>
                <h1>Home page</h1>
                <MealList meals={meals} />

            </div>
        </>
    );
};
export default HomePage;