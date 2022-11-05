function createGame(player1, hour, player2) {
  return `
              <li>
              <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
            </li>
  `
}

let deplay = -0.3

function createCard(date, day, games) {
  deplay = deplay + 0.3
  return `
    <div class="card" style="animation-deplay: ${deplay}s">
          <h2>${date}<span>${day}</span></h2>
          <ul>
              ${games}
          </ul>
        </div>
  `
}

document.querySelector('#cards').innerHTML =
  createCard("18/11", "Sexta-feira",
    createGame('brazil', '16:00', 'serbia')
  ) +
  createCard("19/11", "Sabádo",
    createGame('brazil', '13:00', 'suiça') +
    createGame('portugal', '17:00', 'uruguay')
  ) +
  createCard("20/11", "Domingo",
    createGame('camaroes', '16:00', 'brazil')
  )