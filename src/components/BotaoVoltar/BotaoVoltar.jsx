import { useNavigate } from "react-router-dom"
import styles from "./botaovoltar.module.css"

export function BotaoVoltar() {
 
    const navigate = useNavigate()

    return (
        <button
            className={styles.botao}
            onClick={(e) => {navigate("/")}}
        >
            ← Voltar
        </button>
    )



}