import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DCPage } from "../pages/DCPage"
import { MarvelPage } from "../pages/MarvelPage"
import { HeroPage, SearchPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="heroe/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to='/marvel' />} />
        </Routes>
      </div>


    </>
  )
}
