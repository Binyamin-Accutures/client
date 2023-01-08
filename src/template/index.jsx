import styles from "./style.module.css"

// creator: israel israeli
// color: _______________
// icon: ________________

const Name = ({ style = {}, className = "", ...props }) => {

   return (
      <div className={`${styles.Name} ${className}`} style={style} {...props} >

      </div>
   )
}

export default Name