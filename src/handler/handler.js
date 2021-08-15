const youtubeDl = require("youtube-dl-exec");

async function handlerYoutube(url) {
  let streamdata = null;
  await youtubeDl(url, {
    dumpSingleJson: true,
    noWarnings: true,
    noCallHome: true,
    noCheckCertificate: true,
    preferFreeFormats: true,
    youtubeSkipDashManifest: true
  }).then((output) => {
    streamdata = output;
  });
  // console.log(streamdata);
  return streamdata;
}

exports.handlerYoutube = handlerYoutube;
