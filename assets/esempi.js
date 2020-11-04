//Vecchio sistema ( DOM NORMALE )
const rootN = document.getElementById('rootN');
const h1 = document.createElement('h1');
h1.id = 'idDOMnormale';
h1.textContent = 'Hello Guys';
rootN.appendChild(h1);

console.log('Elemento DOM normale', h1);

//Nuovo sistema ( DOM con React ) 
const root = document.getElementById('root');
ReactDOM.render(
    React.createElement("ul", {id: 'lista'},
        React.createElement("li", null, "html"),
        React.createElement("li", null, "html"),
        React.createElement("li", null, "html"),
        React.createElement("li", null, "html")
    ), root
)

//Nuovissimo sistema (DOM con React - JSX )
const nome = 'indy'
ReactDOM.render(
    <div>
        <h2 className="nome">
            Ciao {nome}, benvenuto
        </h2>
    </div>,
    rootJ
)

let data = [
    {
        "nome": "Pollo bruciato",
        "ingredienti":[
            {"nome":"Pollo", "quantity": "500gr"},
            {"nome":"Patatine", "quantity": "399"},
            {"nome":"Insalata", "quantity": "500gr"},
            {"nome":"Carote", "quantity": "500gr"},
            {"nome":"Pomoodori", "quantity": "500gr"},
        ],
        "step":[
            "Fai bollire il pollo",
            "prepara il ragu",
            "prepara il ragu",
            "prepara il ragu",
            "prepara il ragu",
        ]
    }
]

const menu = data.map( item =>{
    return (
        <div>
            <h1>Primo piatto {item.nome}</h1>
            <u>gli ingredienti sono: </u>
            <ul>
                {item.ingredienti.map( ingrediente => <li>{ingrediente.nome} - {ingrediente.quantity}</li>)}
            </ul>
        </div>
    )
})
const elemento = (
    <div>
        {menu}
    </div>
)
ReactDOM.render(
    elemento,
    chef
)

const elm = (
    <h1>Sono le: {new Date().toLocaleTimeString()}</h1>
)

ReactDOM.render(
    elm,
    orario
)
function ora () {
    const element = (
        <div>
            <h1>Ciao a tutti</h1>
            <h2>sono le {new Date().toLocaleTimeString()}</h2>
        </div>
        )
        ReactDOM.render(element, rootO)
    }
    
setInterval(ora, 1000)

const persone = [
     {
          
         nome:'Utente-1',
         psw:'122345'
     },
     {
         nome:'Utente-2',
         psw:'32345'
     },
     {
         nome:'Utente-3',
         psw:'111345'
     },
 ]
    
 const elementP = ( 
     <div>
         <ul>
             {persone.map( (persona,index)=>{
                 return (
                 <li key={persona.nome}>{persona.nome}-{index}</li>
                 )
             } )}
         </ul>
     </div>
 )
    
 ReactDOM.render(
     elementP,
     rootP)
    
    
