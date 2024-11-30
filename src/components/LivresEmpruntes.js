import React, { useContext } from 'react';
import { EmpruntContext } from '../context/EmpruntContext';
import Message from './Message';

const LivresEmpruntes = () => {
    const { emprunts, returnLivre } = useContext(EmpruntContext); // Contexte pour gérer les emprunts
    const [successMessage, setSuccessMessage] = React.useState(null); // Etat pour le message de succès

    // Fonction pour gérer le retour d'un livre
    const handleReturn = (id) => {
        returnLivre(id);
        setSuccessMessage(`Le livre avec l'ID ${id} a été rendu avec succès.`);
        setTimeout(() => setSuccessMessage(null), 3000); // Effacer après 3 secondes
    };

    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4">Livres Empruntés</h3>

            {successMessage && <Message type="success" text={successMessage} />} {/* Affiche le message de succès */}

            <div className="list-group">
                {emprunts.length > 0 ? (
                    emprunts.map((livre) => (
                        <div
                            key={livre.id}
                            className="list-group-item d-flex justify-content-between align-items-center p-3 border rounded shadow-sm mb-3"
                            style={{ backgroundColor: '#f1f3f5' }} 
                        >
                            <div className="d-flex flex-column">
                                {/* Affichage des informations détaillées du livre emprunté */}
                                <h5 className="mb-1 ">{livre.titre}</h5>
                                <p className="mb-1 text-secondary"><strong>Auteur:</strong> {livre.auteur}</p>
                                <p className="mb-1" style={{ color:'#2ecc71' }}><strong>Date d'emprunt:</strong> {livre.dateEmprunt}</p>
                            </div>
                            
                            
                            
                            {/* Bouton pour rendre le livre */}
                            <div>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleReturn(livre.id)}
                                >
                                    Rendre le livre
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Aucun livre emprunté. Vous pouvez emprunter des livres à partir de la liste des livres disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default LivresEmpruntes;
