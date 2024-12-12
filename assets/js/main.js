function createGame(player1, hour, player2) {
    return`
    <li>
        <img src= "assets/times/icon-${player1}.png"alt="bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src= "assets/times/icon-${player2}.png"alt="bandeira do ${player2}">
      
    <li>
    `
}
function createCards(date, day, games) {
    return`
    <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
`

}

document.getElementById("app").innerHTML = `
        <main id="cards">
            ${createCards("11/12", "quarta-feira",
    createGame("atletico", "19:00", "bota"))}
    ${createCards("12/12", "domingo",
        createGame("bahia", "21:00", "santos"))}
        ${createCards("15/12", "domingo",
            createGame("flamengo", "16:00", "sp"))}
            ${createCards("15/12", "domingo",
                createGame("vasco", "16:00", "inter"))}
                 ${createCards("15/12", "domingo",
                createGame("palmeiras", "16:00", "cruzeiro"))}
    
    
        </main>
    `
    ;
