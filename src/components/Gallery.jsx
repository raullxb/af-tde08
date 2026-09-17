import Profile from "./Profile"

export default function Gallery() {
  return (
    <div className="galeria-container">
      <h1>Galeria de Fotos</h1>
      <ul className="galeria-lista">
        <li className="galeria-item">
          <Profile />
        </li>
        <li className="galeria-item">
          <Profile />
        </li>
        <li className="galeria-item">
          <Profile />
        </li>
        <li className="galeria-item">
          <Profile />
        </li>
        <li className="galeria-item">
          <Profile />
        </li>
      </ul>
    </div>
  )
}