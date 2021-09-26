import './App.css';
import { useState } from 'react';
/* eslint no-eval: 0 */

function App() {
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')

  // When we click on any button showing it's value in span or showing the rusult.
  const changeValue = v => {
    const ops = ['/','-', '*', '+', '%','.','Del', 'Clr'];
    if (
      (ops.includes(v) && value === '') ||
      (ops.includes(v) && ops.includes(value.slice(-1)))
    ){
      setResult('')
      return;
    }else{
      setValue(value + v)
      setResult('')
    }
  }

  // For showing Result after cliking on '=' button.
  const showResult = () => {
    setResult(eval(value))
    setValue('')
  }

  // For Genareting operaters (0 to 9).
  const digest = () =>{
    const digestsAry = [];
    for (let i = 0; i < 10; i ++){
      digestsAry.push(
      <button onClick={()=> changeValue(i.toString())} className='digetsbtns' key={i}>{i}</button>
      )
    }
    return digestsAry;
  }

  // Back btn or Delete btn
  const del = () => {
    if (value === ''){

    }else{
      const newValue = value.slice(0, -1);
      setValue(newValue)
    }
  }
  const clrAll = () => {
    setValue('')
    setResult('')
  }
  // For Genareting operaters (-,+,/,%,*).
  const operaterBtns = () => {
    const operatersAry = ['/','-', '*', '+', '%','.','Del', 'Clr'];
    const operaters = [];
    operatersAry.forEach(op => {
      if (op === 'Del'){
        operaters.push(<button className='delBtn opbtns' onClick={del} key={op}>{op}</button>)
      }else if (op === 'Clr'){
        operaters.push(<button className='clrAll opbtns' onClick={clrAll} key={op}>{op}</button>)
      } else {
        operaters.push( <button className='opbtns' onClick={()=> changeValue(op.toString())} key={op}>{op}</button> )
      }
    });
    return operaters;
  }

  return (
    <div className="App">
      <div className='result'> <span>{value}  {result}</span> </div>  {/* For the result and input area */}
      <div className='operaters'> {operaterBtns()} <button className='opbtns' onClick={showResult} >=</button> </div> {/* Operaters buttons (-,+, etc) */}
      <div className='digets'> {digest()} </div> {/* For number 0 to 9 (genarated) */}
    </div>
  );
}
export default App;
