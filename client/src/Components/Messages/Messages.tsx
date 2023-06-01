import { FC } from 'react'
import styles from './Messages.module.scss'
import Message from './Message'
import { IMessage } from '../../types/message.interface'

const Messages: FC<{ messages: IMessage[] }> = ({ messages }) => {
	return (
		<div className={styles.messages}>
			{messages.map((ms) => (
				<Message item={ms} key={ms.id} />
			))}
		</div>
	)
}

export default Messages
