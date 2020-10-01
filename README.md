# Youtube-clone

This project is clone coding of Youtube by using Youtube API and deployed by using Firebase.

## 1. npx create-react-app

I used `npx create-react-app` to initiate my project.

## 2. Axios

By using `Axios`, I can fetch the data of videos from Youtube API.

https://developers.google.com/youtube/v3/docs/videos/list

First, I bring the data of trending videos.

The base url is <br />
https://www.googleapis.com/youtube/v3/videos<br />
and I can add some attributes.

For example, to fetch 12 most popular videos, use<br />
https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&key=[YOUR_API_Key]

## 3. VideoCard

I made VideoCard component to display several videos by using just one component.

From `RecommendedVideos.js`, I sent props to `VideoCard.js`. For example, `VideoCard.js` got props such as id, thumbnail, title, publishedAt, channelTitle.

It makes much easier to make the application by avoiding repetitive works.

![homepage](https://user-images.githubusercontent.com/21342802/94870680-2ca90c80-0416-11eb-964f-11a1e8eece19.png)

This is the screenshot of my project's home page.

## 4. npm react-router-dom

## 5. Firebase deploy

I used firebase to deploy my app.

`npm install -g firebase-tools`: Install firebase.<br />
`firebase init`: Initiate firebase, and I used my existing project for hosting.<br />
`npm run build`: Build my app before deployment.<br />
`firebase deploy`: Start deployment. If succeed, it will show the address of your application.

Below link is my app's address. Check what I have done.

https://clone-8e3ce.web.app/
