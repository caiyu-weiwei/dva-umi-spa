import { connect } from 'dva'
import Login from './components/Login/index'
import { Fragment } from 'react'
import { projectName } from '@/utils/config.js'
import styles from './index.less'

const login = ({ dispatch }) => {

  const handleSubmit = form => {
    console.log('返回值到父组件', form)
    dispatch({
      type: 'login/login',
      payload: form
    })
  }

  return (
    <div className={ styles.content }>
      <h2 className ={ styles.projectName }>{ projectName }</h2>
      <Login className={ styles.login } handleSubmit={ handleSubmit } />
    </div>
    
  )
}

const mapStateToProps = ( state ) => {
  console.log('mapStateToProps login', state)
  return state
}

export default connect(mapStateToProps) (login)