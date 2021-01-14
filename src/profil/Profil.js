import React from 'react'
import PropTypes from 'prop-types';
export const Profil = ({FullName,Bio,Profession,children,handleName}) => {
    return (
        <div>
            
            <p><b>The full name is :</b> {FullName}</p>
            <p><b>The Bio is :</b> {Bio}</p>
            <p><b>The profession is :</b> {Profession}</p>
            {children} 
            <br/><br/>
            <button onClick={()=>handleName(FullName)} class="btn btn-success" >Savoir plus</button>

        </div>
    );
    
}
Profil.defaultProps = {
    FullName: "Default name",
    Bio: "Default adresse",
    Profession : "Default profession",
   };
Profil.prototype={
   FullName: PropTypes.string,
   Bio: PropTypes.string,
   Profession:PropTypes.string,
   children: PropTypes.element.isRequired,
   handleName:PropTypes.func

};