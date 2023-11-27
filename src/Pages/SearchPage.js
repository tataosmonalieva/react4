import React, {useState} from 'react';

import axios from "axios";
import MealList from "../Components/MealList";

const SearchPage = () => {

    const [meals,setMeals] = useState([])
    const [value, setValue] = useState('')

    const handleSearch = () => {
        axios(`https://www.themealdb.com/api/json/v2/1/search.php?s=${value}`)
            .then (({data}) =>
            {(data.meals) = setMeals(data.meals)
            })}

    return (
        <div>
            <div className={'container'}>
                <h1>SearchPages</h1>
                <input type="text" placeholder={'Введите текст'}
                       onChange={event => setValue(event.target.value)}
                />
                <button onClick={ handleSearch}>click</button>
                {
                    meals === null ? <h1>ошибка</h1>
                        : <MealList meals={meals} />
                }
            </div>
        </div>
    )}
export default SearchPage;