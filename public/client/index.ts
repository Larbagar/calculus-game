import {openSocket} from "./ws.js"

openSocket()


// import Player from "../game/Player.js"
// import {setupClientInputRecord} from "./clientInputRecord.js"
// import {clientInputRecord, startListening} from "./clientInputRecord.js"
// import State from "../game/State.js"
// import Bullet from "../game/Bullet.js"
// import {setCurrentState} from "./currentState.js"
// import gameLoop from "./gameLoop.js"

// startListening()
// setupClientInputRecord(0)
// const clientPlayer = new Player(0, 0, 0, 0, clientInputRecord)
//
// const players = new Set<Player>
// players.add(clientPlayer)
//
// const state = new State(new Date().getTime(), players, new Set<Bullet>())
// setCurrentState(state)
//
// gameLoop()