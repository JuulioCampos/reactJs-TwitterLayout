import { useIndex } from "../../data/hooks/pages/useIndex.page";
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
    useIndex();
    return (
        <div>
            <TextInput  />
            <Tweet tweet={tweet}/>
        </div>
    )
}