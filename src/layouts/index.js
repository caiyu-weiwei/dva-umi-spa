import styles from './index.css';

function BasicLayout({ children, location }) {
  console.log('BasicLayout', children)
  console.log('BasicLayout location', location)
  return (
    <div className={styles.normal}>
      {children}
    </div>
  );
}

export default BasicLayout;
