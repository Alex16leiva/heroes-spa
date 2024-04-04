import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate(); // just to make sure navigate is defined globally

  const hero = useMemo(() => getHeroById(id), [id]);

  const onReturn = () => {
    navigate(-1)
  }

  if (!hero) {
    return (<Navigate to="/marvel" />);
  }

  const heroImgUrl = `/heros/${id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={heroImgUrl}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between" ><b>Alter ego: {hero.alter_ego}</b></li>
          <li className="list-group-item d-flex justify-content-between" ><b>Publisher: {hero.publisher}</b></li>
          <li className="list-group-item d-flex justify-content-between" ><b>First Appearance: {hero.first_appearance}</b></li>
        </ul>

        <h5 className="mt-3">Characters: </h5>
        <p>{hero.characters}</p>

        <button
          className="btn btn-outline-info"
          onClick={onReturn}
        >
          Regresar
        </button>

      </div>

    </div>
  )
}
