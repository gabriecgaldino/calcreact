import React from "react";

export default function Button( { value }){
    function handleSetScreen(){
        if(value == 'C'){
            return document.getElementById('Screen').textContent = ''
        }
        if(value == '='){
            try{
                return document.getElementById('Screen').textContent = eval(document.getElementById('Screen').textContent)
            } catch(a){
                return document.getElementById('Screen').textContent = 'Error'
            }
            
        }
        document.getElementById('Screen').textContent += value
    }
    return (
        <button type="button" id="btn" className="btn btn-dark" value={value} onClick={handleSetScreen}> { value } </button>
    )
}