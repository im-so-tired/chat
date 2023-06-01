import { FC } from 'react'
import styles from './Messages.module.scss'
import { IMessage } from '../../types/message.interface'

const Message: FC<{ item: IMessage }> = ({ item }) => {
	return (
		<div>
			<span className={styles.message}>{item.value}</span>
		</div>
	)
}

export default Message
