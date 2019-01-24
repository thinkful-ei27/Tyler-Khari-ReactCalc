import React from 'react';
import NumButton from './button';
import DisplayWindow from './display'
import ClearButton from './clear'
import EqualButton from './equalbutton';
import OpButton from './opButton';

export default class App extends React.Component{


state = {
    display:'',
    operation: '',
    firstVal: 0,
    secondVal: 0

}

handleAdd(numVal){
    this.setState({display: this.state.display + numVal.toString()})
}
handleClear(e){
    this.setState({display: '', operation:'', firstVal:0})
}

handleOppclick(op){
    this.setState({operation: op, firstVal: Number(this.state.display), display: ''})
}

handleEqualClick(e){
    this.setState({secondVal: Number(this.state.display)})
}

render(){
    return( 
        <div>
            <DisplayWindow total = {this.state.display}/>
            <NumButton onClick ={numVal => this.handleAdd(numVal)}numVal = {0}/>
            <NumButton onClick ={numVal => this.handleAdd(numVal)}numVal = {1}/>
            <NumButton onClick ={numVal => this.handleAdd(numVal)}numVal = {2}/>
            <NumButton onClick ={numVal => this.handleAdd(numVal)}numVal = {3}/>
            <NumButton onClick ={numVal => this.handleAdd(numVal)}numVal = {4}/>
            <NumButton onClick ={numVal => this.handleAdd(numVal)}numVal = {5}/>
            <NumButton onClick ={numVal => this.handleAdd(numVal)}numVal = {6}/>
            <NumButton onClick ={numVal => this.handleAdd(numVal)}numVal = {7}/>
            <NumButton onClick ={numVal => this.handleAdd(numVal)}numVal = {8}/>
            <NumButton onClick ={numVal => this.handleAdd(numVal)}numVal = {9}/>
            <ClearButton clear= {(e)=> this.handleClear(e)}/>
            <EqualButton equal= {(e) => this.handleEqualClick(e)} />
            <OpButton  onOp={op => this.handleOppclick(op)}op ={'+'} />
            <OpButton  onOp={op => this.handleOppclick(op)}op= {'-'}/>
            <OpButton  onOp={op => this.handleOppclick(op)}op={'*'}/>
            <OpButton  onOp={op => this.handleOppclick(op)}op= {'/'}/>
            </div>
    )
}



}