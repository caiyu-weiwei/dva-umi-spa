import { Icon } from 'antd'
import { iconFontUrl } from '@/utils/config'

export default (props) => {

  const { type } = props
  if (type.includes('icon')) {
    const IconFont = Icon.createFromIconfontCN({
      scriptUrl: iconFontUrl
    })
    
    return (
      <IconFont type={type} />
    )
  } else {
    return (
      <Icon type={type} />
    )
  }
}