import styles from './CreateAccountLink.module.css'

function CreateAccountLink() {
    return (
        <p className={styles.link}>New here? <a href='/register'>Create an Account</a></p>
    )
}

export default CreateAccountLink;