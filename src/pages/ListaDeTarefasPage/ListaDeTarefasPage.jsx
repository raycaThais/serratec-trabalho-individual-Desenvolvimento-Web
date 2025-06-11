import { useState } from "react"
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { BotaoVoltar } from "../../components/BotaoVoltar/BotaoVoltar";
import styles from "./listadetarefaspage.module.css"

export function ListaDeTarefasPage() {
    const [tarefa, setTarefa] = useState("");
    const [listaTarefas, setListaTarefas] = useState([]);

    const handleAdicionar = () => {
        if (tarefa.trim() === "")
            return;
        const novaLista = [...listaTarefas, tarefa]
        setListaTarefas(novaLista)
        setTarefa("")

    }

    const handleTecla = (e) => {
        if (e.key === "Enter")
            handleAdicionar()

    }

    const handleRemover = (index) => {
        const listaNova = listaTarefas.filter((_, i) => i !== index)
        setListaTarefas(listaNova)

    }

    return (
        <div className={styles.containerListaTarefas}>
            <h1>Minhas Tarefas</h1>
            <div className={styles.inserir}>
            <Input
                type="text"
                onChange={(e) => setTarefa(e.target.value)}
                onKeyDown={handleTecla}
                value={tarefa}
            />

            <Button
                onClick={handleAdicionar}
                nome="Adicionar Tarefa" />
            </div>
            <div className={styles.lista}>
            {
                listaTarefas.map((t, index) => (
                    <div className={styles.listaItens} key={index}>
                        <input type="checkbox" className={styles.checkbox} />
                       <p>{t}</p> 
                        <Button
                            onClick={() => handleRemover(index)}
                            nome="Remover" />
                     </div>

                ))
            }
            </div>
           
            <div className={styles.botaoVoltar}>
                <BotaoVoltar />
            </div>
        </div>

    )

}