import './App.css';
import Card from './components/Card';
function App() {
  return (
    <>
    <h1>List of top 6 netflix series</h1>
    <Card imgsrc="witcher.jpg" link="https://www.netflix.com/title/81106534" title="The Witcher"/>
    <Card imgsrc="mirror.jpg" link="https://www.netflix.com/title/80195834" title="Black Mirror"/>
    <Card imgsrc="catching.jpg" link="https://www.netflix.com/title/81292129" title="Catching Killers"/>
    <Card imgsrc="planet.jpg" link="https://www.netflix.com/title/81222801" title="Our Planet"/>
    <Card imgsrc="suits.jpg" link="https://www.netflix.com/title/70191211" title="Suits"/>
    <Card imgsrc="titans.jpg" link="https://www.netflix.com/title/80226690" title="Titans"/>
    
    </>
    
  );
}

export default App;
