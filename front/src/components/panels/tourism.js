import src from "./tour.png";
import { useNavigate, useParams } from "react-router-dom";
function Tourism() {
  const navigate = useNavigate();
  const { name } = useParams();
  return (
    <div className="panel">
      <div className="one_card" onClick={() => navigate(`/popular/${name}`)}>
        <img src={src} alt="" />
        <p>أشهر الأماكن</p>
      </div>
    </div>
  );
}
export default Tourism;
