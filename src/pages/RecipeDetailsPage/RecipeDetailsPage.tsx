import { useEffect, useState } from "react";
import { ApiService } from "../../services/apiCallService"
import RecipeDetailsPageCss from './RecipeDetailsPage.module.css'
import Comments from "../../components/Comments/Comments";
import ReactIf from "../../components/ReactIf";

export default function RecipeDetailsPage() {

    const apiService: ApiService = ApiService.singleton;
    const recipesToGet: number = Number(apiService.navigationPageById);

    const baseUrl: string = 'http://localhost:8080';

    const [recipes, setRecipes]: any = useState([]);
    const [ingredients, setIngredients]: any = useState([])
    const [comments, setComments]: any = useState([]);

    useEffect(() => {
        const fethData = async () => {

            const getRecipes = await apiService.getRecipes();
            const getComments = await apiService.getComments();

            const getIngredients = getRecipes[recipesToGet - 1].ingredients.map((ingredient: any) => { return ingredient })

            setRecipes(getRecipes[recipesToGet - 1]);
            setIngredients(getIngredients);
            setComments(getComments);

        }
        fethData();
    }, [])

    return (
        <>
            <div className={RecipeDetailsPageCss['details-container']}>

                <img src={`${baseUrl}${recipes.image}`}  className={RecipeDetailsPageCss['image-container']}/>

                <div className={RecipeDetailsPageCss['info-container']}>
                    <div>{recipes.name}</div>
                    <div>Difficolta: {recipes.difficultyId}</div>
                    <div>Istruzioni: {recipes.instructions}</div>
                    
                    <div className={RecipeDetailsPageCss['ingredients-container']}>
                    {
                        ingredients.map((ingredient: any) => (    
                                <li>{ingredient} </li>
                        ))
                    }
                    </div>


                </div>
            </div>


            <div className={RecipeDetailsPageCss['comments-container']}>
                <div>Commenti:</div>

                {
                    comments.map((comment: any) => (
                        <div>
                            <ReactIf condition={comment.recipeId == recipesToGet}>
                                <Comments comment={comment.comment} date={comment.date} rating={comment.rating} />
                            </ReactIf>
                        </div>
                    ))
                }

            </div>
        </>
    )
}