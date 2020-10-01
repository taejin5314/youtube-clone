# youtube-clone

This project is clone coding of Youtube by using Youtube API and deployed by using Firebase.

# 1. `npx create-react-app`

I used the line of code to initiate my project.

# 2. Axios

By using `Axios`, I can fetch the data of videos from Youtube API.

https://developers.google.com/youtube/v3/docs/videos/list

First, I bring the data of trending videos.

The base url is
https://www.googleapis.com/youtube/v3/videos
and I can add some attributes.

For example, to fetch 12 most popular videos, use
https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&key=[YOUR_API_Key]

# 3. VideoCard

I made VideoCard component to display several videos by using just one component.

From RecommendedVideos.js, I sent props to VideoCard.js. For example, VideoCard.js got props such as id, thumbnail, title, publishedAt, channelTitle.

It makes much easier to make the application by avoiding repetitive works.

![homepage](https://user-images.githubusercontent.com/21342802/94870680-2ca90c80-0416-11eb-964f-11a1e8eece19.png)

This is the screenshot of my project's home page.
