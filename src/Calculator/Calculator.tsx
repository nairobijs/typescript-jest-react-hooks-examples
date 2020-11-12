import React , { useState } from 'react';
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

function Calculator() {
  const [display, setDisplay] = useState('0')
  const [lastTyped, setLastTyped] = useState('')

  const changeDisplay = (e:any) => {
    let typed = e.target.textContent
    // if(isNaN(parseInt(lastTyped, 10)) 
    //   && isNaN(parseInt(typed, 10))
    //   && typed == '*'){
    const controls = ['+' , '-', '*', '/', '.'] 
    if(controls.includes(typed) && controls.includes(lastTyped)){
      console.log('change of control')
      setDisplay(display.slice(0, -1) + typed)
    }
    else{
      if(isNaN(typed)){
        switch (typed) {
          case '=':
            if(controls.includes(lastTyped)){
              backspace()
            }
            else{
              evaluate()
            }
            break;
          case 'C':
            clear()
            break;
          case 'CE':
            backspace()
            break;
          case '.':
            if(!display.includes('.')){
              setDisplay(display + typed)
            }
            break;
          default:
            setDisplay(display + typed)
            break;
        }
      }
      else{
        if(display ==='0' || lastTyped === '='){
          setDisplay(typed)
        }
        else{
          setDisplay(display + typed)  
        }
      }
    }    
    console.log(lastTyped, typed)
    setLastTyped(typed)
  }

  const evaluate = () => {
    if(display !== ''){
      let result = eval(display)
      setDisplay(result.toString())
    }
    else {
      clear()
    }
  }

  const clear = () => {
    setDisplay('0')
  }
  const backspace = () => {
    setDisplay(display.slice(0, -1))
  }
  
  return (
    <Wrapper>
      <h1>Calculator</h1>
      <Calc>
        <Display data-testid="display">{display}</Display>
        <Btn variant="outline-light" onClick={changeDisplay}>(</Btn>
        <Btn variant="outline-light" onClick={changeDisplay}>)</Btn>
        <Btn variant="outline-light" onClick={changeDisplay}>CE</Btn>
        <Btn variant="outline-light" onClick={changeDisplay}>C</Btn>
        <Btn variant="outline-light" onClick={changeDisplay}>7</Btn>
        <Btn variant="outline-light" onClick={changeDisplay}>8</Btn>
        <Btn variant="outline-light" onClick={changeDisplay}>9</Btn>
        <Btn variant="outline-light" onClick={changeDisplay}>/</Btn>
        <Btn variant="outline-light" onClick={changeDisplay}>4</Btn>
        <Btn variant="outline-light" onClick={changeDisplay}>5</Btn>
        <Btn variant="outline-light" onClick={changeDisplay}>6</Btn>
        <Btn variant="outline-light" onClick={changeDisplay}>*</Btn>
        <Btn variant="outline-light" onClick={changeDisplay}>1</Btn>
        <Btn variant="outline-light" onClick={changeDisplay}>2</Btn>
        <Btn variant="outline-light" onClick={changeDisplay}>3</Btn>
        <Btn variant="outline-light" onClick={changeDisplay}>-</Btn>
        <Btn variant="outline-light" onClick={changeDisplay}>0</Btn>
        <Btn variant="outline-light" onClick={changeDisplay}>.</Btn>
        <Btn variant="outline-light" onClick={changeDisplay}>=</Btn>
        <Btn variant="outline-light" onClick={changeDisplay}>+</Btn>
      </Calc>
    </Wrapper>
  );
}

export default Calculator;



// Styling
const Wrapper = styled.div`
  width: 500;
  text-align: center;
  background: #fff;
  color: #2e3a52;
  text-align: left;
`

const Calc = styled.div`
  width: 405px;
  margin: 0 auto;
  background-color: #999;
  margin-top: 1rem;
  border: 2px solid #888;
`
const Display = styled.div`
  height: 100px;
  font-size: 50px;
  background-color: #666;
  padding: 5px;
  overflow: hidden;
  text-align: right;
`
const Btn = styled(Button)`
  height: 50px;
  width: 100px;
  text-align: center;
  color: #333:
`
