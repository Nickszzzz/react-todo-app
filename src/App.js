import "./App.css";
import { Header } from "./includes/Header";
import { Section } from "./includes/Section";
import { useState } from "react";

export default function App() {

  const [isCompleteAll, setIsCompleteAll] = useState(false)

  const completeAll = isComplete => {
    console.log(isComplete === true);
    isCompleteAll ? setIsCompleteAll(!isComplete) : setIsCompleteAll(isComplete);
  }

  return (
    <div className="todo">
      <Header onSubmit={completeAll} />
      <Section is_complete_all = {isCompleteAll}/>
    </ div>
  );
}
