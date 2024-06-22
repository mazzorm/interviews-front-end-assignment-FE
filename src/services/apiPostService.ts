export class ApiServicePost {
    protected static _singleton: ApiServicePost = new ApiServicePost();

    public static get singleton(): ApiServicePost {
        return this._singleton;
    }

    protected constructor() {
        if (!ApiServicePost._singleton) { 
            ApiServicePost._singleton = this;
        }
    }


    async createRecipes(newRecipe: any) {
        try {
            const postResponse = await fetch('http://localhost:8080/recipes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newRecipe),
            });

            const postData = await postResponse.json();
            return postData;
        }
        catch (error) {
            throw error;
        }
    }

}