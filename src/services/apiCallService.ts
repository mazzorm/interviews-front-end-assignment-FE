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

    // Inserimento delle chiamate api verso il server locale nella porta 8080
    async getRecipes() {
        try {
            const response = await fetch('http://localhost:8080/recipes');
            const data = await response.json(); // Parse JSON dalla risposta
            return data; 
        } 
        catch (error) {
            console.error('Errore durante la richiesta:', error); // Gestione degli errori
        }
    }

    async getComments() {
        try {
            const response = await fetch('http://localhost:8080/comments');
            const data = await response.json(); // Parse JSON dalla risposta
            return data; 
        } 
        catch (error) {
            console.error('Errore durante la richiesta:', error); // Gestione degli errori
        }
    }

    async getCuisines() {
        try {
            const response = await fetch('http://localhost:8080/cuisines');
            const data = await response.json(); // Parse JSON dalla risposta
            return data; 
        } 
        catch (error) {
            console.error('Errore durante la richiesta:', error); // Gestione degli errori
        }
    }
    
    async getDifficulties() {
        try {
            const response = await fetch('http://localhost:8080/difficulties');
            const data = await response.json(); // Parse JSON dalla risposta
            return data; 
        } 
        catch (error) {
            console.error('Errore durante la richiesta:', error); // Gestione degli errori
        }
    }

    async getDiets() {
        try {
            const response = await fetch('http://localhost:8080/difficulties');
            const data = await response.json(); // Parse JSON dalla risposta
            return data; 
        } 
        catch (error) {
            console.error('Errore durante la richiesta:', error); // Gestione degli errori
        }
    }

}