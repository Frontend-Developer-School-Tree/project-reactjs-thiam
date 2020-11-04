
const datiRistorante = {
    nome:"React cooking",
    descrizione:"serve piatti swahhhh ....... ",
    orarioApertura:new Date(2020,20,1,8).getHours(),
    orarioChiusura:18,
    aperta:true,
    menuStyle:{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        flexFlow:'row wrap',
        flexGrow:1,
        listStyle:'none',
        fontSize:'1.8rem',
        color:'#fff'
    },
    navMenu:['menu','prenota','contattaci'],
    menu:[
        {
            "id":"01",
            "nome":"Js in salsa tonnata",
            "ingredienti":[
                {
                    "idIngr":"01",
                    "nome":"js"
                },
                {
                    "idIngr":"02",
                    "nome":"tonno"
                },
                {
                    "idIngr":"03",
                    "nome":"philadephia"
                }
            ]
        },
        {
            "id":"02",
            "nome":"Css con panatura di Sass",
            "ingredienti":[
                {
                    "idIngr":"04",
                    "nome":"colore blue"
                },
                {
                    "idIngr":"05",
                    "nome":"tanto css"
                },
                {
                    "idIngr":"06",
                    "nome":"transpilatore panato"
                }
            ]
        },
        {
            "id":"03",
            "nome":"Riduzione di HTML",
            "ingredienti":[
                {
                    "idIngr":"07",
                    "nome":"html"
                },
                {
                    "idIngr":"08",
                    "nome":"arancia"
                },
                {
                    "idIngr":"09",
                    "nome":"aceto"
                }
            ]
        },
        {
            "id":"04",
            "nome":"JSON alla fiamma",
            "ingredienti":[
                {
                    "idIngr":"010",
                    "nome":"JSON"
                },
                {
                    "idIngr":"011",
                    "nome":"tabasco"
                },
                {
                    "idIngr":"012",
                    "nome":"peperoni"
                }
            ]
        },
    ]
}

const {nome, descrizione, orarioApertura, orarioChiusura, menuStyle, navMenu, menu} = datiRistorante
const header = (
    <header>
        <nav style={{display:'flex' , flexFlow:'row wrap'}}>
            <h1>
                <span>{nome}</span>
                <span style={{display: 'block', fontSize:'1.2rem'}}>{descrizione}</span>
            </h1>
            <ul style={menuStyle}>
                {navMenu.map ((item, index) => {
                    return <li id={`item-${index}`} key={item} item={item}>{item}</li>
                })}
            </ul>
        </nav>
    </header>
)

const main = (
    <main>
        <h1>Il nostro menu offre diversi piatti:</h1>
        <div id="MenuContainer">
            {menu.map( piatto => {
                return(
                    <div key={piatto.id} className="piatto">
                        <h3>{piatto.nome}</h3>
                        <ul>
                            ingredienti:
                            {piatto.ingredienti.map( ingrediente => (
                                <li key={ingrediente.idIngr}>
                                    <i className="fa fa-check"></i>
                                    {ingrediente.nome}
                                </li>
                            )
                            )}
                        </ul>
                    </div>
                )
            })}
        </div>
    </main>
)
const avviso = (
    <div className="bckOrange">
        <div className="cardAlert">
            <i
                style ={{
                    fontSize: '10rem',
                    color: '#000',
                    backgroundColor:'#fff',
                    borderTopLeftRadius:5,
                    borderBottomLeftRadius:5,
                    padding:20
                }}
                className="fa fa-ban"></i>
                <h2 style={{padding:10,fontSize:'2rem'}}>
                      Il ristorante è chiuso per DPCM<br/>
                      <div className="tooltip">
                          quando apre?
                        <span className="tooltiptext">
                            {`L'orario di apertura è alle ${orarioApertura}`}
                        </span>
                      </div>
                </h2>
        </div>
    </div>
)
const element = (
    <div className= "Container" style={{backgroundColor: (
        new Date(2020,11,4,20).getHours() >= orarioChiusura) ?
        '#FF922C':
        '#fff'
}}>
        {/* <h1>PIPPO</h1> */}
        {header}
        {main}
    </div>
)

ReactDOM.render(
    element, 
    root,
)

