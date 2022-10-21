import Header from "./Components/Header/Header";
import "./App.css";
import { useState } from "react";
import EditPage from "./Components/Edit/EditPage";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="App">
      {isEdit ? (
        <EditPage setIsEdit={setIsEdit}></EditPage>
      ) : (
        <Header setIsEdit={setIsEdit}></Header>
      )}
    </div>
  );
}

export default App;
