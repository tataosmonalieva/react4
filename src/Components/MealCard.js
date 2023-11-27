import React from "react";
import {Link} from "react-router-dom";

const MealCard = ({meal}) => {
    return (
        <div className={'box'}>
            <img src={meal?.strMealThumb} alt=""/>
            <h4>
                <Link
                    to={`/meal/${meal?.idMeal}`}>
                    {meal?.strMeal}
                </Link>
            </h4>
            <p>{meal?.strCategory}</p>
        </div>
    )
}
export default MealCard