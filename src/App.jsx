import { Error404, Nav } from "./components"

function App() {
  return (
    <div 
      className="app"
      style={{
        background: `linear-gradient(135deg, rgba(107, 142, 35, 0.87) 0%, rgba(53, 71, 18, 0.87) 100%), url(/bg_image.png)`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        width: `100%`
      }}
    >
      <Nav/>
      <Error404/>
    </div>
  )
}

export default App;
