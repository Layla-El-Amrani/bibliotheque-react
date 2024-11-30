import React, { useEffect, useState, useContext } from 'react';
import { EmpruntContext } from '../context/EmpruntContext';
import Message from './Message'; // Importation du composant Message
import { fetchLivres } from '../services/api'; // Importation de la fonction pour récupérer les livres

const ListLivre = () => {
    const [livres, setLivres] = useState([]);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null); // Etat pour le message de succès
    const { empruntLivre, emprunts } = useContext(EmpruntContext); // Contexte pour gérer les emprunts

    // Utilisation de useEffect pour charger les livres au montage du composant
    useEffect(() => {
        const getLivres = async () => {
            try {
                const data = await fetchLivres(); // Appel API pour récupérer les livres
                setLivres(data);
            } catch (err) {
                setError('Erreur lors de la récupération des livres.');
            }
        };
        getLivres();
    }, []);

    // Fonction qui gère l'emprunt d'un livre
    const handleEmprunt = (livre) => {
        empruntLivre(livre); // Passer l'objet livre complet
        setSuccessMessage('Livre emprunté avec succès !'); // Affiche le message de succès
        setTimeout(() => setSuccessMessage(null), 3000); // Efface le message après 3 secondes
    };

    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4">Liste des livres</h3>
            
            {error && <Message type="error" text={error} />} {/* Affiche l'erreur si présente */}
            {successMessage && <Message type="success" text={successMessage} />} {/* Affiche le message de succès */}

            <div className="list-group">
                {livres.map((livre) => (
                    <div key={livre.id} className="list-group-item d-flex justify-content-between align-items-start p-3 mb-3">
                        <div className="d-flex flex-column">
                            {/* Affichage des informations du livre */}
                            <h5 className="mb-1">{livre.titre}</h5>
                            <p className="mb-1"><strong>Auteur:</strong> {livre.auteur}</p>
                            <p className="mb-1" style={{ color: livre.disponible ? '#2ecc71' : '#e74c3c' }}>
                                <strong>Disponibilité:</strong> {livre.disponible ? "Disponible" : "Non disponible"}
                            </p>
                        </div>

                        {/* Bouton ou badge selon la disponibilité */}
                        <div>
                            {livre.disponible && !emprunts.some(e => e.id === livre.id) ? (
                                <button
                                    className="btn btn-success"
                                    onClick={() => handleEmprunt(livre)} // Passer l'objet livre entier
                                >
                                    Emprunter
                                </button>
                            ) : (
                                <span className="badge bg-danger">Non disponible</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListLivre;
