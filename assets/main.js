function ora () {
    const element = (
        <div>
            <h1>Ciao a tutti</h1>
            <h2>sono le {new Date().toLocaleTimeString()}</h2>
        </div>
    )
    ReactDOM.render(element, root)
}
setTimeout(1000)