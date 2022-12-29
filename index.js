const twitter = require("./src/twitter");
const downloadMedia = require("./src/downloadMedia");
const deleteMedia = require("./src/deleteMedia");

main();
async function main() {
  // tweet
  await twitter.v1.tweet("Hello World");

  // tweet thread
  await twitter.v1.tweetThread(["one", "two", "three"]);

  // tweet image
  const mediaPath = await downloadMedia("https://i.imgur.com/Xs2XCZd.jpeg");
  const mediaId = await twitter.v1.uploadMedia(mediaPath);
  await twitter.v1.tweet("A moon", { media_ids: mediaId });
  await deleteMedia(mediaPath);
}
