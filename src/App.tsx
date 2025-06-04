import Apresentation from "./components/Apresentation"
import Footer from "./components/Footer"
import Main from "./components/Main"

const App = () => {
  return (
    <div className=" p-2 md:px-24 md:py-8">
      <Apresentation />
      <Main />
      <Footer />
    </div>
  )
}

export default App