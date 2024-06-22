import { useEffect, useState } from "react";
import { ApiService } from "../../services/apiCallService";
import RecipesCss from './Recipes.module.css';
import { useNavigate } from 'react-router-dom'; 

export default function Recipes() {
    const apiService: ApiService = ApiService.singleton;
    const baseUrl: String = 'http://localhost:8080';

    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const getRecipes = await apiService.getRecipes();
            setRecipes(getRecipes);
            setFilteredRecipes(getRecipes);            
        }
        fetchData();
    }, []); 

    useEffect(() => {
        const filtered = recipes.filter((recipe: any) => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredRecipes(filtered);
    }, [searchTerm, recipes]);

    const navigateToDetails = (id: string) => {
        apiService.navigationPageById = id;
        navigate('/recipes/detail');
    };

    return (
        <>
            <div className={RecipesCss["search-container"]}>
                <input 
                    type="text" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Cerca ricetta per nome"
                    className={RecipesCss["search-input"]}
                />
            </div>

            {
                filteredRecipes.map((recipe: any, index: any) => (

                    <div key={index} className={RecipesCss["recipe-container"]}>

                        <div className={RecipesCss['left-container']}>

                            <img src={`${baseUrl}${recipe.image}`} className={RecipesCss["recipe-image"]} />

                            <div className={RecipesCss["recipes-info-container"]}>
                                <div className={RecipesCss["recipe-name"]}>{recipe.name}</div>
                                <div className={RecipesCss["recipe-difficulty"]}>Difficoltà piatto {recipe.difficultyId}</div>
                                <div className={RecipesCss["recipe-instruction"]}>Istruzioni {recipe.instructions}</div>

                                <div>
                                {
                                    recipe.ingredients.map((ingredient: any, ingredientIndex: any) => (
                                        <li key={ingredientIndex} className={RecipesCss["recipe-ingredient"]}>{ingredient}</li>
                                    )) 
                                }
                                </div>

                            </div>

                        </div>

                        <div className={RecipesCss["recipe-comments-container"]}>
                            <div className={RecipesCss["recipe-comments"]} onClick={() => navigateToDetails(recipe.id)}>Mostra recensioni</div>
                        </div>

                    </div>
                ))
            }
        </>
    )
}