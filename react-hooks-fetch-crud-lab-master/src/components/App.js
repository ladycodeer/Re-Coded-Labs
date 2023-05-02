import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(()=> {
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then(json => setQuestions(json))
  }, [])

  function handleNewQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }

  function handleDeleteQuestion(deletedQuestion){
    setQuestions(questions.filter(question => question.id !== deletedQuestion.id))
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onQuestionAdd={handleNewQuestion} /> : <QuestionList questions={questions} onDeleteQuestion = {handleDeleteQuestion}/>}
    </main>
  );
}

export default App;