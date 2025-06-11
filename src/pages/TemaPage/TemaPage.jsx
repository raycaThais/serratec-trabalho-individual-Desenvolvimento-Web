import { useState } from "react"
import styles from "./temapage.module.css"
import { Button } from "../../components/Button/Button"
import { BotaoVoltar } from "../../components/BotaoVoltar/BotaoVoltar"

export function TemaPage() {
    const [temaEscuro, setTemaEscuro] = useState(false)
    const [nomeBotao, setNomeBotao] = useState("Ir Para Modo Escuro 🌙")
    const handleMudarTema = () => {
        if (nomeBotao === "Ir Para Modo Escuro 🌙") {
            setNomeBotao("Ir Para Modo Claro ☀️")
            setTemaEscuro(true)
        }
        if (nomeBotao === "Ir Para Modo Claro ☀️") {
            setNomeBotao("Ir Para Modo Escuro 🌙")
            setTemaEscuro(false)
        }
    }

   const tema = nomeBotao === "Ir Para Modo Escuro 🌙" ?styles.claro : styles.escuro

    return (
        <>

            <div className={tema}>
                <Button
                    temaEscuro={temaEscuro}
                    onClick={handleMudarTema}
                    nome={nomeBotao}
                />
                <div className={styles.botaoVoltar}>
                 <BotaoVoltar/>
                </div>
               
            </div>
        </>
    )


}