import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle";
import hollow from "./hollow.png";
import def from "./default.png";
import hd from "./hd.png";
import "./choices.css";
const Choices = ({ setIsModeBoard, setMode }) => {
  return (
    <div className="choiceBoard">
      <div className="choiceNav">
        <AiFillCloseCircle
          className="closeBtn"
          onClick={() => setIsModeBoard(false)}
        />
      </div>
      <h3>Modes</h3>
      <div className="choicesCont">
        <div
          className="modeImgCont"
          onClick={() => {
            setIsModeBoard(false);
            setMode("default");
          }}
        >
          <img src={def} alt="" className="choiceImg" />
        </div>
        <div
          className="modeImgCont"
          onClick={() => {
            setIsModeBoard(false);
            setMode("hollow");
          }}
        >
          <img src={hollow} alt="" className="choiceImg" />
        </div>
        <div
          className="modeImgCont"
          onClick={() => {
            setIsModeBoard(false);
            setMode("hd");
          }}
        >
          <img src={hd} alt="" className="choiceImg" />
        </div>
      </div>
    </div>
  );
};
export default Choices;
