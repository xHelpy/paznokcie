import React from "react";
import './App.css';
import Kafelek from "./kafelek";

const data = [
    {id:"f1",shade:"fioletowy",title:"No Risk No story",price: 27.29,desc:"Oszczedzasz 33%"},
    {id:"f2",shade:"fioletowy",title:"Moony Whispers",price: 38.99,desc:"Mój wybór - kasia Kot"},
    {id:"c1",shade:"czerwony",title:"Alizee",price: 27.29,desc:"Oszczedzasz 29%"},
    {id:"c2",shade:"czerwony",title:"Mysterious Tale",price: 27.29,desc:"GET THE LOOK"},
    {id:"z1",shade:"zloty",title:"g-INCREDIBLE",price: 25.99,desc:"Oszczedzasz 29%"},
    {id:"z2",shade:"zloty",title:"Glow  Gold",price: 29.99,desc:"XMAS TREND"},
]

function App() {
  return (
    <div className="App">
     <banner>
       <h1>grafiki i inspiracja ze strony: NEONAIL.PL</h1>
         <div className="odcienie">
             <p>Wybierz odcień</p>
             <button>
                 <img src="fioletowy.jpg">

                 </img>
             </button>
             <button>
                 <img src="czerwony.jpg">

                 </img>
             </button>
             <button>
                 <img src="zloty.jpg">

                 </img>
             </button>
             <button>
                 <img src="wszystkie.jpg">

                 </img>
             </button>
         </div>
     </banner>
        <div className="Selekcje">
            {data.map((item) =>
                <Kafelek source={item.id+".jpg"} title={item.title} shade={item.shade} price={item.price} tag={item.desc}></Kafelek>
            )}

        </div>
    </div>
  );
}

export default App;
