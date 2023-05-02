import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( { questions, onDeleteQuestion } ) {

  const showQuestions = questions.map(item => <QuestionItem question={item} key={item.id} onDeleteQuestion={onDeleteQuestion} />)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{showQuestions}</ul>
    </section>
  );
}

export default QuestionList;