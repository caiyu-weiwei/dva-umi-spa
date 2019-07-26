import Context from './Context'
import { PureComponent } from 'react'

export default (WarppedComponent) => {
  return class Consumer extends PureComponent {
   render() {
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