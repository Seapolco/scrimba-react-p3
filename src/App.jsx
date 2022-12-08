import './App.css'
import Navbar from './components/Navbar';
import TravelCard from './components/Travel-Card';
import data from './card-data';


function App() {

  let travelCards = data.map((item, i)=> {
   return  <TravelCard item={item} key={i}/>
  })

  return(
    <>
    <Navbar/>
    <main className="all-cards-container">
       {travelCards}
    </main>
  
    </>

  )
}

export default App
