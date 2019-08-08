import { Icon } from 'antd'
import classnames from 'classnames'
import { footerContent, copyright } from '@/utils/config.js'
import styles from './index.less'
export default (props) => {
  const { footerWrapperBgc } = props
  return (
    <footer className={classnames(styles.footerWrapper, {[styles.footerWrapperBgc]: footerWrapperBgc})}>
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