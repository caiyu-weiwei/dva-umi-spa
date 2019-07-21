import styles from './index.less'
import Basic from './Basic/index'

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
