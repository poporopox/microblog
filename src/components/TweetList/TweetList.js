import Tweet from '../Tweet/Tweet';
import './TweetList.css';
import { useContext } from 'react';
import { TweetsContext } from '../../contexts/TweetsContext';


const TweetList = () => {
    const { tweets } = useContext(TweetsContext);

    const tweetsArray = tweets.slice(0);
    tweetsArray.sort((a, b) => new Date(b.date) - new Date(a.date));
    return (
        <div className="TweetList">
            {tweetsArray.map((tweet) => (
                <Tweet key={tweet.date} user={tweet.userName} text={tweet.content} date={tweet.date} />
            ))}
        </div>
    );
}

export default TweetList;