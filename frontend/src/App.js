import { CustomButton, BoardTab, ToggleSwitch } from "./components";

function App() {
  return (
    <div className="App">
      <h1>Start</h1>

      <CustomButton
        variant={"primary"}
        label={"Primary Button"}
        loading={true}
      />

      <BoardTab label={"platform launch"} variant={"plain"} />
      <BoardTab label={"platform launch"} />
      <BoardTab label={"platform launch"} variant={"active"} />

      <ToggleSwitch />
    </div>
  );
}

export default App;
