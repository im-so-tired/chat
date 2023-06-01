import { io } from 'socket.io-client'

const URL = 'http://localhost:9000'

export const socket = io(URL)
