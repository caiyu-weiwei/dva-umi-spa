import { PureComponent } from 'react'
import { Breadcrumb, Icon } from 'antd'
import { link } from 'fs';
const Item = Breadcrumb.Item

class Index extends PureComponent{
  
  render() {
    const { breadList } = this.props
    const breadcrumbItems = (
      <Breadcrumb>
        {
          breadList.map(bread => {
            const { icon, title, link } = bread
            return title === '首页' ? <Item href={link} key={title}><Icon type={icon} /><span>{title}</span></Item> : <Item key={title}><Icon type={icon} /><span>{title}</span></Item>
          })
        }
      </Breadcrumb>
    )
    return (
      <div>{breadcrumbItems}</div>
    )
  }
}

export default Index