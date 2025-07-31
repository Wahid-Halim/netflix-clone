import back_arrow_icon from "../assets/back_arrow_icon.png";
import styles from "./Player.module.css";
import { getMoviesVideo } from "../services/dataTMBD";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isPending } = useQuery({
    queryKey: ["moviesVideo", id],
    queryFn: () => getMoviesVideo(id),
  });
  if (isPending) return <p>Loading ....</p>;

  const { name, key, published_at, type } = data.results[0];

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <section className={styles.player}>
      <img src={back_arrow_icon} alt="back arrow icon" onClick={handleGoHome} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${key}`}
        title="trailer"
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
      <div className={styles.playerInfo}>
        <p>{published_at.slice(0, 10)}</p>
        <p>{name}</p>
        <p>{type}</p>
      </div>
    </section>
  );
};

export default Player;
