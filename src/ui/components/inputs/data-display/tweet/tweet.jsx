import styles from './tweet.module.css';
export default function Tweet({tweet}) {
    const {user} = tweet;
    return (
        <div className={styles['tweet-container']}>
            <img src={user.picture} className={styles['avatar']} alt={'julio campos'}/>
            <div className={styles['user']}>
                <span className={styles['user-name']}>{user.name}</span>{' '}
                <span className={styles['user-username']}>@{user.username}</span>
                <span className={styles['date']}>- {tweet.date}</span>
            </div>
            <div className={styles['tweet-text']}>{tweet.text}</div>
        </div>
    )
}