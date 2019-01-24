import React from 'react'

export default function OpButton(props){
 return (
     <button onClick={() => props.onOp(props.op)}>{props.op} </button>
 )

}