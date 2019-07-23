import { Icon } from 'antd'
import { footerContent, copyright } from '@/utils/config.js'
import styles from './index.less'
export default () => {
  return (
    <footer className={ styles.footerWrapper }>
      <div className={ styles.footerBox }>
        {
          footerContent && footerContent.map(content => (
            <a
              className={ styles.content }
              key={content.key}
              title={content.title}
              target={content.blankTarget ? '_blank' : '_self'}
              href={content.href}
            >{ content.title }</a>
          ))
        }
        <div className={styles.copyright}>
          Copyright <Icon type="copyright"/> { copyright }
        </div>
      </div>
    </footer>
  )
}