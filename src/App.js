
import './App.css';
import AimTrainer from './Components/AimTrainer/AimTrainer'

function App() {


  const blockCount = [{
    blockID: 0,
    positionX: Math.floor(Math.random() * 500),
    positionY: Math.floor(Math.random() * 600)
  }, {
    blockID: 1,
    positionX: Math.floor(Math.random() * 500),
    positionY: Math.floor(Math.random() * 600)
  }, {
    blockID: 2,
    positionX: Math.floor(Math.random() * 500),
    positionY: Math.floor(Math.random() * 600)
  }, {
    blockID: 3,
    positionX: Math.floor(Math.random() * 500),
    positionY: Math.floor(Math.random() * 600)
  }, {
    blockID: 4,
    positionX: Math.floor(Math.random() * 500),
    positionY: Math.floor(Math.random() * 600)
  }]
  return (
    <div className="App">
      <AimTrainer blockData={blockCount} />
    </div>
  );
}

export default App;
