// import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import CustomSphere from './components/CustomSphere';

function App() {
    return(
      <div className="App">
        <Canvas className='canvas1'>
          <CustomSphere /> 
        </Canvas>
      </div>
    );
}

export default App;
