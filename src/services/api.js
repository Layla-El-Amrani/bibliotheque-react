import axios from 'axios';

export const fetchLivres = () => {
    return axios.get('https://gahi-said.com/apis/auteurs.php')
        .then(response => response.data) // Retourne les données en cas de succès
        .catch(error => {
            console.error("Erreur lors de la récupération des livres :", error);
            throw error; // Jette l'erreur si nécessaire pour la gestion dans d'autres parties du code
        });
};
