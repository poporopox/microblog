import './Tweet.css'

const Tweet = ({ user, text, date, email }) => {
    
    return (
        <div className="tweet">
            <div className="line">
                <div>{user}</div>
                <div>{date}</div>
                <div>{email}</div>
            </div>
            <div className='text'>{text}</div>
        </div>
    );
}

export default Tweet;