import { useState } from "react"
import { Button } from "../../components/Button/Button"
import { BotaoVoltar } from "../../components/BotaoVoltar/BotaoVoltar"
import styles from "./boasvindaspage.module.css"
export function BoasVindasPage() {
    const [mensagem, setMensagem] = useState("Olá")
    const handleBotao = () => {
        setMensagem("Bem-vindo(a)!")
    }

    return (
        <div className={styles.containerBoasVindas}>
            <div className={styles.principal}>
                <p className={styles.texto}>{mensagem}</p>
                {
                    mensagem !== "Bem-vindo(a)!" ?
                     <Button
                        onClick={handleBotao}
                        nome="Entrar"
                    /> : ""
                }
                <div className={styles.botaoVoltar}>
                    <BotaoVoltar />
                </div>
            </div>
        </div>
    )

}