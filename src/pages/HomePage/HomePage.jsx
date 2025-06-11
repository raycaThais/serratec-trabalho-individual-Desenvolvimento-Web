import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./homepage.module.css"
import { useEffect, useState } from "react";

export function HomePage() {

    const navigate = useNavigate()
    const [entrada, setEntrada] = useState(styles.fadeIn)

    useEffect(() => {
        setEntrada(styles.fadeIn);
    }, []);
    return (
        <div className={`${styles.containerHome} ${entrada}`}>
            <h1 className={styles.titulo}>🌸 Trabalho Individual - Desenvolvimento WEB 🌸 </h1>
            <div className={styles.menu}>
                <span className={styles.emoji}>🌞🌙</span>
                <Button
                    nome=" Questão 1 - Tema Claro/Escuro"
                    onClick={(e) => navigate("/tema")}
                />
                <span className={styles.emoji}>💌</span>
                <Button

                    nome={"Questão 2 – Boas-Vindas"}
                    onClick={(e) => navigate("/boas-vindas")}
                />
                <span className={styles.emoji}>📝</span>
                <Button
                    nome="Questão 3 - Lista de Tarefas"
                    onClick={(e) => navigate("/lista-de-tarefas")}
                />
            </div>
        </div>
    )
}