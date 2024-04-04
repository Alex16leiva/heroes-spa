import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'

import { HeroCard } from "../components";
import { getHeroByName } from "../helpers";
import { useForm } from "../hooks/useForm"
import { toast } from "react-toastify";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );
  const heroes = getHeroByName( q );

  const { searchText, onInputChange } = useForm({ searchText: q });

  const handleSubmit = (e) => {
    e.preventDefault();

    if( !searchText ) return toast.warning("Please  enter a hero name");

    navigate(`?q=${searchText.trim()}`)
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="searchText"
              placeholder="search a hero..."
              onChange={onInputChange}
              className="form-control mb-2"
              autoComplete="off"
            />
            <button className="btn btn-outline-primary mt-1" >
              Search
            </button>
          </form>

        </div>

        <div className="col-7">
          <h4>Result</h4>
          <hr />
          {
            ( q === "" )
            ? 
              <div className="alert alert-primary animate__animated animate__fadeIn" style={{opacity: 40}}>Search a hero</div>
              : ( heroes.length === 0 ) && <div className="alert alert-danger animate__animated animate__fadeIn">No hero with <b>{q}</b></div>
          }
          {
            heroes.map(hero => {
              return <HeroCard key={hero.id} {...hero} />
            })
          }

        </div>
      </div>
    </>
  )
}
