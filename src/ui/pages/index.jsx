import { useIndex } from "../../data/hooks/pages/useIndex.page";
import TextInput from "../components/inputs/TextInput/TextInput";
import styles from '../styles/pages/index.module.css';

export default function Index() {
    useIndex();
    return (
        <div>
            <TextInput />
        </div>
    )
}