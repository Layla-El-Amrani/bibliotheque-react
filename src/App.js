import React from 'react';
import { EmpruntProvider } from './context/EmpruntContext';
import ListLivre from './components/ListLivre'; // Importation du composant ListLivre
import LivresEmpruntes from './components/LivresEmpruntes'; // Importation du composant LivresEmpruntes
import './App.css';

const App = () => {
    return (
        <EmpruntProvider>
            <div className="container">
                <header>
                    <h1>Bienvenue à la Bibliothèque</h1>
                    <p>Découvrez, empruntez, et gérez vos livres facilement</p>
                </header>

                <div className="row mt-4">
                    <div className="col-12 col-md-6">
                        <ListLivre /> {/* Affichage de la liste des livres disponibles */}
                    </div>

                    <div className="col-12 col-md-6 mt-4 mt-md-0">
                        <LivresEmpruntes /> {/* Affichage des livres empruntés */}
                    </div>
                </div>
            </div>
        </EmpruntProvider>
    );
};

export default App;
