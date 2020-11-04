const datiMusica = {
    titolo:'SPOTIFINDY',
    descrizione:'the best social-music in the world',
    footerStyle:{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        flexFlow:'row wrap',
        flexGrow:1,
        listStyle:'none',
        fontSize:'1.8rem',
        color:'#fff',
        backgroundColor: '#32429b'
    },
    navMenu: ["home", "sfoglia", "artisti", "contattaci"],
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
    logo:"LOGO",
    musica : [
        {
            "id":'1',
            "titolo canzone":'titolo canzone',
            "artista":'artista',
            "minuti":"2:30"
        },
        {
            "id":'2',
            "titolo canzone":'titolo canzone',
            "artista":'artista',
            "minuti":"3:30"
        },
        {
            "id":'3',
            "titolo canzone":'titolo canzone',
            "artista":'artista',
            "minuti":"5:30"
        }
    ]
}


const {titolo, descrizione, menuStyle, navMenu, footerStyle} = datiMusica
/* const brano = (
    <div className="esecuzione">

    </div>
) */

const header = (
    <header>
        
    <nav style={{display:'flex' , flexFlow:'row wrap'}}>
        <h1>
            <span>{titolo}</span>
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
        <div id="sopra">

            <h1>cooococo</h1>
        </div>
    </main>
)

const footer = (
    <footer style={{display:'flex', flexFlow:'row wrap'}}>
                <h1 style={{
                    display:'flex',
                    margin: '20px',
                    justifyContent:'space-around',
                    alignItems:'center',
                    height: '100px',
                    width: '100px',
                    backgroundColor: 'orange'
                }}>
                    <span style ={{
                        justifyContent:'center',
                        alignItems:'center',
                        height: '50px',
                        width: '50px',
                        color: 'black'
                        /* borderRadius: '50px' */
                    }}></span>
                </h1>
                <span style = {{
                    display: 'flex',
                    justifyContent:'space-around',
                    color:'white'
                }}>Nome canzone
                </span>
                <ul style={footerStyle}>
                    <li>ciao</li>
                    <li>ciao</li>
                    <li>ciao</li>

                </ul>
            </footer>
)

const element = (
    <div className="Container">
        {header}
        <div className="MusicaContainer">
            {main}
            {footer} 
        </div>
    </div>
)

ReactDOM.render(
    element,
    root,
)