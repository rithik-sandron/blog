import Header from "./Header";
import styles from '../styles/Layout.module.css'

export default function Layout({ children, bg = '', fore = '', title = '' }) {

  return (
    <div id={styles.common}>
      <Header bg={bg} fore={fore} title={title} />
      {children}
      {/* <Footer bg={bg} fore={fore} /> */}
    </div>
  );
}