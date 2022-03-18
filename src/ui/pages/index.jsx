import { useIndex } from "../../data/hooks/useIndex.page";
import Tweet from "../components/inputs/data-display/tweet/tweet";
import TextInput from "../components/inputs/TextInput/TextInput";
import styles from '../styles/pages/index.module.css';

const tweet = {
   date: 'há 5 dias' ,
   text: 'meu primeiro tweet',
   user: {
       name: 'Júlio Campos',
       username: 'juuliocampos',
       picture: 'https://github.com/juuliocampos.png'
   }
}
export default function Index() {
    const {         
        user,
        text,
        onTextChange,
        maxTextLength, 
        sendTweet,
        sortedTweetList
     } = useIndex();
    return (
        <div>
            <h1 className={styles['page-title']}>TwitClone</h1>
            <div className={styles['tweet-container']}>
                <img className={styles['avatar']} src={user.pictue} alt={user.name} />
                <TextInput 
                    placeholder = {'O que você está acontecendo?'}
                    rows = {3}
                    maxLength = {maxTextLength}
                    onChange = {onTextChange}
                />
            </div>
            <div className={styles['button-container']}>
                <div>
                    {text.length} / {maxTextLength}
                </div>
                <button 
                onClick = {sendTweet} 
                disabled = {text.length === 0} 
                className={styles['post-button']}>Tweetar</button>
            </div>
            <ul className={styles['tweet-list']}>
                {sortedTweetList.map((tweet)=> (
                <li key = {tweet.id * 3.14159265359} className={styles['tweet-list-item']}>
                    <Tweet tweet={tweet.data}/>
                </li>
                ))}

            </ul>
            
            
        </div>
    )
}