import '../index.css';

const Notification = ({ type, message, setMessage }) => {
    if (message === null) {
        return null;
    }
    setTimeout(() => {
        setMessage(null)
    }, 5000)

    return (
        <div className={type ? 'success' : 'error'} >
            {message}
        </div>
    )

}

export default Notification;