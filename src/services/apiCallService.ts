export class ApiService {
    protected static _singleton: ApiService = new ApiService();

    public static get singleton(): ApiService {
        return this._singleton;
    }

    protected constructor() {
        if (!ApiService._singleton) {
            ApiService._singleton = this;
        }
    }

    navigationPageById: string = '';

    async getRecipes() {
        try {
            const response = await fetch('http://localhost:8080/recipes');
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error('Errore durante la richiesta:', error);
        }
    }

    async getComments() {
        try {
            const response = await fetch('http://localhost:8080/comments');
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error('Errore durante la richiesta:', error);
        }
    }

    async getCuisines() {
        try {
            const response = await fetch('http://localhost:8080/cuisines');
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error('Errore durante la richiesta:', error);
        }
    }

    async getDifficulties() {
        try {
            const response = await fetch('http://localhost:8080/difficulties');
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error('Errore durante la richiesta:', error);
        }
    }

    async getDiets() {
        try {
            const response = await fetch('http://localhost:8080/diets');
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error('Errore durante la richiesta:', error);
        }
    }

}