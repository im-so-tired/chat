import Messages from './Components/Messages/Messages'
import SendMessageForm from './Components/SendMessageForm/SendMessageForm'
import styles from './App.module.scss'
import { useEffect, useState } from 'react'
import { IMessage } from './types/message.interface'
import { socket } from './socket'

function App() {
	const [messages, setMessages] = useState<IMessage[]>([])

	useEffect(() => {
		socket.connect()
		socket.on('chat message', (ms: IMessage) => {
			setMessages((prev) => [...prev, ms])
		})
		return () => {
			socket.disconnect()
		}
	}, [])

	return (
		<div className={styles.chat}>
			<Messages messages={messages} />
			<SendMessageForm />
		</div>
	)
}

export default App
