import React from 'react';
import NumButton from './button';
import Input from './input'
import ClearButton from './clear';
import EqualButton from './equalbutton';
import OpButton from './opButton';
import Display from './display';

export default class App extends React.Component{


state = {
    display:'',
    input:'',
    operation: '',
    firstVal: 0,
    total: ''
}

handleAdd(numVal){
    this.setState({input: this.state.input + numVal.toString()})
    this.setState({display:this.state.display.concat(numVal)})
}
handleClear(e){
    this.setState({input: '', operation:'', firstVal:0, display:''})
}

handleOppclick(op){
    this.setState({operation: op, firstVal: this.state.input, input: ''})
    this.setState({display:this.state.display.concat(` ${op} `)})
}

 handleEqualClick(e){
    const secondValue = this.state.input;
    let answer = this.state.firstVal.concat(this.state.operation).concat(secondValue)
    this.setState({input: eval(answer).toString()});
    this.setState({display: eval(answer).toString()}) 
}


render(){
    return( 
        <div>
            <Display text = {this.state.display}/>
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