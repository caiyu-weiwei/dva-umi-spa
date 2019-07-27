import Context from './Context'
import { PureComponent } from 'react'

export default (WarppedComponent) => {
  return class Consumer extends PureComponent {
   render() {
     console.log('Consumer this.props', this.props)
     return (
       <Context.Consumer>
         {
           ({ theme, location }) => <WarppedComponent theme={theme} location={location} {...this.props}></WarppedComponent>
         }
       </Context.Consumer>
     )
   }
  }
}