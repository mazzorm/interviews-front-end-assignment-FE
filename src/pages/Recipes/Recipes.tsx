import { useEffect, useState } from "react"
import { ApiService } from "../../services/apiCallService";
import RecipesCss from './Recipes.module.css'

export default function Recipes() {

    const apiService: ApiService = ApiService.singleton;
    const baseUrl: String = 'http://localhost:8080';

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fethData = async () => {
            const getRecipes = await apiService.getRecipes()
            setRecipes(getRecipes);            
        }
        fethData();
    }, []) 


    return (
        <>
            {
                recipes.map((recipe: any, index: any) => (
                    <div key={index} className={RecipesCss["recipe-container"]}>

                        <div className={RecipesCss['left-container']}>
                            <img src={`${baseUrl}${recipe.image}`}  className={RecipesCss["recipe-image"]} />
                            
                            <div className={RecipesCss["recipes-info-container"]}>
                            <div className={RecipesCss["recipe-name"]}>{recipe.name}</div>
                            <div className={RecipesCss["recipe-difficulty"]}>Difficoltà piatto {recipe.difficultyId}</div>
                            <div className={RecipesCss["recipe-instruction"]}>Istruzioni {recipe.instructions}</div>
                            {
                                recipe.ingredients.map((ingredient: any) => (
                                    <li className={RecipesCss["recipe-ingredient"]}>{ingredient}</li>
                                )) 
                            }
                            </div>
                        </div>

                        <div className={RecipesCss["recipe-comments-container"]}>
                            <div className={RecipesCss["recipe-comments"]}>mostra recensioni</div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

