import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  const [formInputs, updateFormInputs] = useState({
    strA: '',
    strB: ''
  })
  const [answer , updateAnswer] = useState({
    yourAnswerIs: ''
  })
  const handleChange = (evt) => {
    updateFormInputs({...formInputs, ...{[evt.target.id]: evt.target.value}})
  }
  const handleSubmit = async (evt) =>{
    evt.preventDefault()
    try {
      const response = await fetch('https://arete-service-numero-uno.herokuapp.com/',{
        body: JSON.stringify(formInputs),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      await updateAnswer(data);
    }catch (error){
      console.error(error)
    }finally {
      updateFormInputs({
        strA: '',
        strB: ''
      })
    }
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1>My Anagrams App</h1>
        <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={handleSubmit}>
          <label>
           String Number 1
            <input
              type="text"
              value={formInputs.strA}
              id="strA"
              onChange={handleChange}
              /></label>
              <br/>
              <label>
              String Number 2
              <input
                type="text"
                value={formInputs.strB}
                id="strB"
                onChange={handleChange}
                />
                </label>
                <br />
                <input type="submit" value="Check if Anagram"/>
          </form>
          <section>
          <h1>
            {answer.yourAnswerIs != null  && answer.yourAnswerIs !== '' ? `Your Answer is: ${answer.yourAnswerIs}`: `Please enter your Strings Above and Submit`}
            </h1>
          </section>
      </header>
    </div>
  );
}
export default App;