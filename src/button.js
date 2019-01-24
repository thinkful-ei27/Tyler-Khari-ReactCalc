import React from 'react';

export default function NumButton(props){
        return <button
         onClick={() => props.onClick(props.numVal)}>
        {props.numVal}</button>
}