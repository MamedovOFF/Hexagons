import Header from './components/Header'
import Hexagons from './components/Hexagons'
import { hexagons } from './utils/constant.ts'

function App() {
  return (
    <>
      <Header />
      <Hexagons hexagons={hexagons} />
    </>
  )
}

export default App
