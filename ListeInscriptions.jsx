import React, { useState, useEffect } from "react";

function ListeInscriptions() {
  const [inscriptions, setInscriptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch inscriptions from your API and update the 'inscriptions' state
  }, []);

  const filteredInscriptions = inscriptions.filter((inscription) =>
    inscription.ville.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Liste d'Inscriptions</h1>
      <input
        type="text"
        placeholder="Search by Ville"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredInscriptions.map((inscription, index) => (
          <li key={index}>{inscription.name} - {inscription.ville} - {inscription.option}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeInscriptions;




