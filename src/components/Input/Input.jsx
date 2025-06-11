import styles from "./input.module.css"

export function Input({value, onChange, type, onKeyDown, placeholder}){

return(
    <input 
    className={styles.input}
    type={type}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    placeholder={placeholder}
     />
)


}