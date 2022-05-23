import React,{useState} from 'react';
import './App.css';

const App = () =>{
  const[result,setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  const clear = () => {
    setResult("")
    }

  const calculate = () => {
    try{
      setResult(eval(result).toString())
    }catch(err){
      setResult("Error")
    }
  }
  return(
        <div className="container">
        <form>
        <input type ="text" value={result}/>
        </form>

        <div className="keypad">
        <button className='highlight' onClick={clear} id="clear">Clear</button>        <button className="highlight" name="/" onClick={handleClick} >&divide;</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button className="highlight" name="*" onClick={handleClick} >&times;</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button className="highlight" name="-" onClick={handleClick} >&ndash;</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button className="highlight" name="+" onClick={handleClick} >+</button>
        <button className="highlight" onClick={calculate} id="result" >=</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
 
        </div>
        </div>
    
  );
}

export default App;



@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

* {
font-family:'Roboto',sans-serif;
font-size: 18px;
}

body {
  display: flex;
  justify-content: center;
}

.container{
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%,-50%);
  margin: 0 auto;
  width: 256px;
  text-align: center;
  border: 10px solid #101116;
  background: #101116 ;
  border-radius: 5px;
}

.keypad{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows : minmax(60px,auto) ;
}

input[type="text"]{
  height: 75px;
  width: 249px;
  background-color: #10111600;
  border: 0px;
  color: #ffffff;
  text-align: right;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 1px;
}

#clear{
  grid-column:1/4;
  grid-row:1;
  color: #262834;

}

#result{
  grid-column: 3/5;
  grid-row: 5;
}

button{
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: #ffffff;
  color: #262834;
  font-weight: 500;
}

input:focus,
input:active,
button:focus
button:active{
outline: none;
}

.highlight{
  background: rgb(255, 0, 17);
}