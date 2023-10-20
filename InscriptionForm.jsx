import React, { useRef } from "react";

export default function InscriptionForm({action}){

    const pData = useRef({})

    function handleChange(e){
        pData[e.target.name] = e.target.value
    }

    function handleAdd(e){
        e.preventDefault();
        action({...pData})
    }

    return(
        <form>
            <label htmlFor="FirstName">First Name</label>
            <input name="FirstName" onChange={handleChange}/>
            <label htmlFor="LastName">Last Name</label>
            <input name="LastName" onChange={handleChange}/>
            <label htmlFor="Ville">Ville</label>
            <input name="Ville" onChange={handleChange}/><br/>
            <label htmlFor="Option">Option</label>
            <input name="Option" onChange={handleChange}/><br/>
            <button onClick={handleAdd}>Submit</button>
            <button onClick={handleAdd}>Cancel</button>

        </form>
    )
}


