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
                        <img src={recipe.image} />
                        <div>{recipe.name}</div>
                        <div>Difficolta piatto {recipe.difficultyId}</div>
                        <div>Istruzioni {recipe.instructions}</div>
                        {
                          recipe.ingredients.map((ingredient: any) => (
                            <li>{ingredient}</li>
                        )) 
                        }
                    </div>
                ))
            }
        </div>
    )
}

