import { footerContent } from '@/utils/config.js'
export default () => {
  return (
    <footer>
      <div>
        {
          footerContent.map(content => (
            <a
              key={content.key}
              title={content.title}
              target={content.blankTarget}
              href={content.href}
            ></a>
          ))
        }
      </div>
    </footer>
  )
}