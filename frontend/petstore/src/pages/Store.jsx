import React from "react";
import PetProfile from "../components/PetProfile";

// Paste your petsData array here or import it from a separate file
import { petsData } from "../data/petsData";

const Store = () => {
  return (
    <div>
      <h1>Store Page</h1>
      {petsData.map((pet) => (
        <PetProfile key={pet.id} {...pet} />
      ))}
    </div>
  );
};

export default Store;
