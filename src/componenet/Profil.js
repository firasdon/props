import React from 'react'
import PropTypes from "prop-types";


function Profil(props) {
    return (
        <div>
            <h1>Name : {props.name} </h1>
            <h2> Biographie : {props.bio}</h2>
            <h3> Profession : {props.Profession} </h3>
            {props.children}

             
             </div>  


    )
}

Profil.defaultProps = {
    name: "Firas" ,
    bio: "many section"

}
Profil.propTypes = {
    
    
    name: PropTypes.string,
    bio : PropTypes.string,
    
   };


export default Profil
