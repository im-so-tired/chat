import { ChangeEvent, FC, FormEvent, useState } from 'react'
import styles from './SendMessage.module.scss'
import { MdSend } from 'react-icons/md'
import { socket } from '../../socket'

const SendMessageForm: FC = () => {
	const [value, setValue] = useState('')

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		socket.emit('chat message', value)
		setValue('')
	}

	return (
		<form onSubmit={submitHandler} className={styles.form}>
			<input
				placeholder="Your message..."
				value={value}
				onChange={changeHandler}
			/>
			<button type="submit">
				<MdSend size={24} />
			</button>
		</form>
	)
}

export default SendMessageForm
