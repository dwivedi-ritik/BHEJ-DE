import TopBar from "./components/TopBar"
import RoomDetails from "./components/RoomDetails"
import JoinRoom from "./components/JoinRoom"
function App() {

  return (
    <div className="App">
      <TopBar />
      <div className="mt-6 px-3 md:px-6 grid grid-col-1 md:grid-cols-2 gap-2">
        <RoomDetails></RoomDetails>
        <JoinRoom></JoinRoom>
      </div>
    </div>
  )
}

export default App
