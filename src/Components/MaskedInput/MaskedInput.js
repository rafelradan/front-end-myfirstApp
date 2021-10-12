import React from "react";
import InputMask from "react-input-mask";
import Style from "./Style.css"


const MaskedInp = ({value, onChange}) =>{
    return (
    <InputMask 
        name="inpUserCpf" 
        id="inpUserCpf"
        mask="999.999.999-99" 
        value={value} 
        onChange={onChange} />
        )
}

export default MaskedInp