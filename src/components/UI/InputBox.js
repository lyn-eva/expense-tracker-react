import styles from "./InputBox.module.css";

function InputBox(props) {
   return (
      <div className={`${styles["input-box"]} ${styles[props.className] || ''}`}>
         <label>{props.label}</label>
         <input
            onChange={props.setValue}
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}
         />
         <small>{props.errorMsg}</small>
      </div>
   );
}

export default InputBox;
