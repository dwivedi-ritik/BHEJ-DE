import TopBar from "./components/TopBar"
import RoomDetails from "./components/RoomDetails"
import JoinRoom from "./components/JoinRoom"
import Clients from "./components/Clients"
import Footer from "./components/Footer"
function App() {

  return (
    <div className="App h-screen flex flex-col justify-between">
      <div>
        <TopBar />
        <div className="mt-6 px-3 md:px-6 grid grid-col-1 md:grid-cols-2 gap-3">
          <RoomDetails></RoomDetails>
          <JoinRoom></JoinRoom>
        </div>
        <div className="px-3 md:px-6  grid grid-cols-1 my-3">
          <Clients></Clients>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
