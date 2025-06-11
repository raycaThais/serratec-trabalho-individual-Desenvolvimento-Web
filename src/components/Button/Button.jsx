import styles from "./button.module.css"

export function Button({ type, onClick, nome, temaEscuro}) {
    return (
        <button
            className={temaEscuro? styles.buttonEscuro : styles.button}
            type={type}
            onClick={onClick}
        >
            {nome}
        </button>

    )
}