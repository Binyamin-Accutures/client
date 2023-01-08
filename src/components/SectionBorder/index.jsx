import styles from "./style.module.css";
 
// creator: Elisha & dudu
// the component take the children components and wrap them with border frame
//examples: <SectionBorder border='solid' width='100px' height='100px'> <YourComponents/> </SectionBorder>

//------props to pass------
// border: solid / dashed
// width: width of the component wrapper
// height: height of the component wrapper

const SectionBorder = ({ children, border, height, width}) => {

   return (
      <div className={styles.sectionBorder} style={{height: height, width:width, borderStyle:border}}>
         {children}
      </div>
   )
}

export default SectionBorder;