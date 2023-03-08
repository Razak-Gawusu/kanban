import { CustomButton, BoardTab, ToggleSwitch, SubTask } from "./components";
import white from "./asset/icons/boardIcon-white.svg";
import voilet from "./asset/icons/boardIcon-voilet.svg";
import grey from "./asset/icons/boardIcon-grey.svg";
import eye from "./asset/icons/eye-slash.svg";

function App() {
  return (
    <div className="App">
      <h1>Start</h1>

      <CustomButton
        variant={"primaryLarge"}
        label={"Primary Button"}
        loading={true}
      />

      <BoardTab label={"platform launch"} src={grey} />
      <BoardTab label={"+  platform launch"} src={voilet} variant={"plain"} />
      <BoardTab label={"platform launch"} src={white} variant={"active"} />
      <BoardTab label={"platform launch"} src={eye} />

      <ToggleSwitch />

      <SubTask title={"This is a subtask"} isCompleted={true} />
    </div>
  );
}

export default App;
