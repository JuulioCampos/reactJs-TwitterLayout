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
                <TextInput  />
            </div>
            <div className={styles['button-container']}>
                <div>
                    0 / 150
                </div>
                <button className={styles['post-button']}>Tweetar</button>
            </div>
            <ul className={styles['tweet-list']}>
                <li className={styles['tweet-list-item']}>
                    <Tweet tweet={tweet}/>
                </li>
                <li className={styles['tweet-list-item']}>
                    <Tweet tweet={tweet}/>
                </li>
                <li className={styles['tweet-list-item']}>
                    <Tweet tweet={tweet}/>
                </li>
            </ul>
            
            
        </div>
    )
}