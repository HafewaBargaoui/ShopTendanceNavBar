import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div className="w-full h-screen mt-56">
      <div className=" grid gap-6 place-content-center text-center">
        <h1 className=" text-6xl font-extrabold ">Oops !</h1>
        <h2 className="text-xl font-bold">Cette page n'est plus à la mode</h2>
        <p>
          La page n'existe pas. Vous pouvez vérifier le lien ou faire une
          recherche ci-dessus pour trouver ce que vous cherchez.
        </p>
      </div>
      <div className="text-center mt-8">
        <Link to="/">
          <Button>Aller à la page d'accueil</Button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
