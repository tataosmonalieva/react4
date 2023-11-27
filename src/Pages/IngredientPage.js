import {useEffect, useState} from "react";
import axios from "axios";
// import MealList from "../Components/MealList";
import {Link, useParams} from "react-router-dom";


const IngredientPage = () => {
    const params = useParams()
    const [ingredient, setIngredient] = useState([])


    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.name}`)
            .then(({data}) => {
                setIngredient(data.meals)
                console.log(data.meals)
            })
    }, []);

    return(

        <>
            <div className="row">
                <div className="col-3">
                    <div className="box">
                        <h3>{params.name}</h3>
                        <img src={`https://www.themealdb.com/images/ingredients/${params.name}.png`} alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="box">
                    <h2>Meals</h2>
                    <div className="row">
                        {
                            ingredient.map((meal, idx) =>
                                <div key={idx} className={'col-6'}>
                                    <div className="box ">
                                        <img src={`${meal.strMealThumb}`} alt=""/>
                                        <h5>
                                            <Link to={`/meal/${meal.idMeal}`}>{meal.strMeal}</Link>
                                        </h5>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>


        </>

    )
}

export default IngredientPage