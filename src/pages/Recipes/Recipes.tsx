import { useEffect, useState } from "react"
import { ApiService } from "../../services/apiCallService";
import RecipesCss from './Recipes.module.css'

export default function Recipes() {

    const apiService: ApiService = ApiService.singleton;
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fethData = async () => {
            const getRecipes = await apiService.getRecipes()
            setRecipes(getRecipes);
            console.log('tutte le recipes' ,getRecipes);
        }
        fethData();
    }, []) 


    return (
        <div>
            {
                recipes.map((recipe: any, index: any) => (
                    <div key={index}>
                        <img src={recipe.image} className={RecipesCss["recipe-image"]} />
                        <div className={RecipesCss["recipe-name"]}>{recipe.name}</div>
                        <div className={RecipesCss["recipe-difficulty"]}>Difficolta piatto {recipe.difficultyId}</div>
                        <div className={RecipesCss["recipe-instruction"]}>Istruzioni {recipe.instructions}</div>
                        {
                          recipe.ingredients.map((ingredient: any) => (
                            <li className={RecipesCss["recipe-ingredient"]}>{ingredient}</li>
                        )) 
                        }
                    </div>
                ))
            }
        </div>
    )
}

