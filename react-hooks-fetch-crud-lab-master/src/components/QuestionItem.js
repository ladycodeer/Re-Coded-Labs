import React, { useState } from "react";

function QuestionItem({ question, onDeleteQuestion }) {
  const { id, prompt, answers, correctIndex } = question;
  const [answerOfQuestion, setAnswerOfQuestion] = useState(correctIndex)

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(){
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(onDeleteQuestion(question))
  }

  function handleAnswerChange(e){
    setAnswerOfQuestion(e.target.value)


    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "correctIndex": e.target.value
      })
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={e => handleAnswerChange(e)} value={answerOfQuestion}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;