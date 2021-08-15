const handler = require("../handler/handler");

exports.getYoutube = (req, res) => {
  let url = `https://www.youtube.com/watch?v=${youtube_parser(req.query.url)}`;
  handler
    .handlerYoutube(url)
    .then((data) => {
      let formatList = [...data.requested_formats, ...data.formats];
      let resData = [];
      for (var obj of formatList) {
        if (obj.ext === "mp4") {
          resData.push({
            url: obj.url,
            ext: obj.ext,
            res: obj.format_note,
            codec: obj.vcodec
          });
        }
      }
      res.json({
        sucess: true,
        title: data.title,
        thumbnail: data.thumbnail,
        resData
      });
    })
    .catch((err) => {
      res.json({ sucess: false, message: err.stderr });
    });
};

function youtube_parser(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
}
