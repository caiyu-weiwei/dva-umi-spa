import { connect } from 'dva'
import Login from './components/Login/index'
import { projectName } from '@/utils/config.js'
import styles from './index.less'

const login = ({ dispatch, loading }) => {

  const handleSubmit = form => {
    dispatch({
      type: 'login/login',
      payload: form
    })
  }

  return (
    <div className={ styles.content }>
      <h2 className ={ styles.projectName }>{ projectName }</h2>
      <Login className={ styles.login } handleSubmit={ handleSubmit } loading={loading} />
    </div>
    
  )
}

const mapStateToProps = ( {loading} ) => ({
  loading: loading.global
})

export default connect(mapStateToProps) (login)