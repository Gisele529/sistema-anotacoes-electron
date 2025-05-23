

// imports modules app e Browserwindow do Electron
const { app, BrowserWindow } = require('electron')

// função para criar a janela principal
function createwindow() {

    const window = new BrowserWindow({
        width: 800, // largura da janela
        heigth: 600, // altura da janela

    })
    // carregar o arquivo html na janela
    window.loadFile('src/pages/index.html');
}


app.whenReady().then(() => {
    createwindow(); // chama a função de criar a janela
})
