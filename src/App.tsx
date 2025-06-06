import Apresentation from "./components/Apresentation"
import Footer from "./components/Footer"
import Main from "./components/Main"

const App = () => {
  return (
    <div className="relative p-2 md:px-14 md:py-4 gap-2">
      <Apresentation />
      <Main />
      <Footer />
    </div>
  )
}

export default App
