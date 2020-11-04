const dati = [
    {
        "titolo corso":"front-end developer",
        "tematica corso": "react js",
        "livello corso": [
            "Principiante", "Internmedio", "Esperto"
        ],
        "Immagine corso":"dsdsadasdasdsa"
    }
]

const header = (
<header>
    <div className="headerContainer">
        <h1 id="titleWebPage">Corsi di Frontend</h1>
        <nav id="navContaienr">
        <ul className="ulList">
            <li>la scuola</li>
            <li>news</li>
        </ul>
        <div className="btnsContainer">
            <button className="btn" id="btnModal">aggiungi corso</button>
            <button className="btn" id="btnFilter">filtra</button>
        </div>
        </nav>
    </div>
</header>
)

const ora = new Date().getHours();
const modal= (
        <div className="modalBody">
            <div id="modalHeader">
                <h2 id="textContent"></h2><span id="idCourse"></span>
                <button type="button" className="btn btnRemove" id="btnClose">X chiudi</button>
            </div>
            <form class="form" id="modalCourse" novalidate>
                <input type="text"></input>
                <button type="submit" className="btn" id="buttonSubmit">aggiungi</button>
                <button type="click" className="btn" id="buttonModify" >applica modifiche</button>
            </form>
        </div>
)

const lista = (
    <div id="containerLista">
        <h2>Lista corsi</h2><strong>Numero di corsi presenti:<span id="totCorsi"></span></strong>
        <hr></hr>
        <strong id="emptyList">
            ಥ_ಥ  al momento non ci sono corsi  ಥ_ಥ
        </strong>
        <ul id="listaRoot" class="listaCorsi"></ul>
    </div>
)

ReactDOM.render(
    <div id="container">
        {header}
        <div>{lista}
        sono le {ora}
        </div>
        <div>{modal}</div>
    </div>,
    root
)