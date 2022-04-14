import * as tweetsDao from "../tweets/tweets-dao.js";

const findAllTweets = async (req, res) => {
    const tweets = await tweetsDao.findAllTweets();
    res.json(tweets);
}

const createTweet = async (req, res) => {
    const newTweet = req.body;
    newTweet.likes = 0;
    newTweet.dislikes = 0;
    newTweet.comments = 0;
    newTweet.retweets = 0;
    newTweet.liked = false;
    newTweet.disliked = false;
    newTweet.verified = false;
    newTweet.handle = "webdev";
    newTweet.username = "Web Dev";
    newTweet.time = "Just now";
    newTweet["avatar-image"] = "../media/profileimage.jpg";
    const insertedTweet = await tweetsDao.createTweet(newTweet);
    res.json(insertedTweet);
}

const deleteTweet = async (req, res) => {
    const tweetIdToDelete = req.params.tid;
    const status = await tweetsDao.deleteTweet(tweetIdToDelete);
    res.send(status);
}

const updateTweet = async (req, res) => {
    const tweetdIdToUpdate = req.params.tid;
    const updatedTweet = req.body;
    const status = await tweetsDao.updateTweet(tweetdIdToUpdate, updatedTweet);
    res.send(status);
}

export default (app) => {
    app.post('/api/tweets', createTweet);
    app.get('/api/tweets', findAllTweets);
    app.put('/api/tweets/:tid', updateTweet);
    app.delete('/api/tweets/:tid', deleteTweet);
}