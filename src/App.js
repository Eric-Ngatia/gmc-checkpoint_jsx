import logo from './logo.svg';
import './App.css';
import './Style.css';
import img2 from './img2.jpg';
import millenuit from './millenuit.mp4';




function App() {
  return (
    <div className="App">
      <div style={{border:"solid1pxblack",maxWidth:100}}>

        <h1 className="title red">Eric N'GATIA</h1>

        <br />

        <img height="500px" width= "600px"  src={img2} />

        <br />

        <img height="500px" width= "600px" src={"img5.jpg"}></img>

      </div>

      <video width="320" height="240" controls= "true"> 
      
        <source src={millenuit.mp4} type="video/mp4"/>

      </video>
    </div>
  );
}

export default App;
