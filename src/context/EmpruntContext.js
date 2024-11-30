import React, { createContext, useState } from 'react';

export const EmpruntContext = createContext();

export const EmpruntProvider = ({ children }) => {
    const [emprunts, setEmprunts] = useState([]);

    // Fonction pour emprunter un livre
    const empruntLivre = (livre) => {
        // Ajouter un livre avec ses détails
        const livreAvecDetails = {
            ...livre,
            dateEmprunt: new Date().toLocaleDateString(), // Ajouter la date d'emprunt
        };
        setEmprunts((prev) => [...prev, livreAvecDetails]);
    };

    // Fonction pour rendre un livre
    const returnLivre = (id) => {
        // Filtrer le livre avec l'id donné
        setEmprunts((prev) => prev.filter((livre) => livre.id !== id));
    };

    return (
        <EmpruntContext.Provider value={{ emprunts, empruntLivre, returnLivre }}>
            {children}
        </EmpruntContext.Provider>
    );
};
