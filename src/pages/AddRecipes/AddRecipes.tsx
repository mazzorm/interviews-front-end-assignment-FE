import { useState } from 'react';
import { ApiServicePost } from '../../services/apiPostService';
import AddRecipesCss from './AddRecipes.module.css';
import ReactIf from '../../components/ReactIf';

export default function AddRecipes() {

    const apiServicePost = ApiServicePost.singleton;
    const [newRecipe, setNewRecipe] = useState({});
    const [isCreated, setIsCreated] = useState(false)

    const addRecipesPost = async () => {
        try {
            await apiServicePost.createRecipes(newRecipe);
            setIsCreated(true);
        }
        catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (element: any) => {
        const { name, value } = element.target;
        setNewRecipe({ ...newRecipe, [name]: value });
    };

    return (
        <>
            <div className={AddRecipesCss['add-recipes-container']}>

                <form>
                    <div className={AddRecipesCss['form-container']}>
                        <input
                            className={AddRecipesCss['add-recipes-input']}
                            type="text"
                            name="name"
                            placeholder="Nome"
                            onChange={handleInputChange}
                        />

                        <input
                            className={AddRecipesCss['add-recipes-input']}
                            type="text"
                            name="instructions"
                            placeholder="Istruzioni"
                            onChange={handleInputChange}
                        />

                        <input
                            className={AddRecipesCss['add-recipes-input']}
                            type="text"
                            name="difficultyId"
                            placeholder="Difficolta"
                            onChange={handleInputChange}
                        />
                        <label>Seleziona immagine</label>
                        <input
                            className={AddRecipesCss['add-recipes-input']}
                            type="file"
                            name="image"
                            placeholder="Seleziona Immagine"
                            accept="image/png, image/jpeg"
                            onChange={handleInputChange}
                        />

                        <div className={AddRecipesCss['submit-button']} onClick={addRecipesPost}>Crea Ricetta</div>
                    </div>

                </form>
            </div>

            <ReactIf condition={isCreated}>Hai Caricato correttamente una ricetta sul forum di cucina</ReactIf>
        </>
    );
}
