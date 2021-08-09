import logo from './logo.svg';
import './App.css';
import azertt from "./azertt.png"

function App() {
  return (
    <div>
<div style={{border:'solid 1px black',maxWidth:'100vw'}} >

<h1 className='title red'>Your name here</h1>
{/* ici public way */
 <img src="/imageInPublic.png" alt ='myImage' /> }
 {
   /* ici public way  */
  <img src="/azert.png" alt="test" /> }

<img  src={azertt} alt="azertt" />
</div>

<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" ></source>

</video>
</div>
  );
}

export default App;
