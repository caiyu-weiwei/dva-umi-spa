import { connect } from 'dva'
import Login from './components/Login/index'

const login = ({ dispatch }) => {

  const handleSubmit = form => {
    console.log('返回值到父组件', form)
    dispatch({
      type: 'login/login',
      payload: form
    })
  }

  return (
    <Login handleSubmit={ handleSubmit } />
  )
}

const mapStateToProps = ( state ) => {
  console.log('mapStateToProps login', state)
  return state
}

export default connect(mapStateToProps) (login)