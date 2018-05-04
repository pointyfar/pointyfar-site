var gulp        = require("gulp");
var request     = require("request");
var fs          = require('fs');

gulp.task("get:comments", function () {

  var url = `https://api.netlify.com/api/v1/forms/${process.env.APPROVED_COMMENTS_FORM_ID}/submissions/?access_token=${process.env.API_AUTH}`;

  // Go and get the data from Netlify's submissions API
  request(url, function(err, response, body){
    if(!err && response.statusCode === 200){
      var body = JSON.parse(body);
      var comments = {};

      // massage the data into the shape we want,
      // and add a gravatar URL if possible
      for(var item in body){
        var data = body[item].data;
        var comment = {
          name: data.name,
          colour: data.colour,
          animal: data.animal,
          message: "\n" + data.message, // add a newline before the markdown so that 11ty can spot the markdown and interpret it.
          date: body[item].created_at
        };

        // Add it to an existing array or create a new one
        if(comments[data.path]){
          comments[data.path].push(comment);
        } else {
          comments[data.path] = [comment];
        }
      }

      // write our data to a file where our site generator can get it.
      fs.writeFile(buildSrc + "/data/comments.json", JSON.stringify(comments, null, 2), function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("Comments data saved.");
        }
      });

    } else {
      console.log("Couldn't get comments from Netlify");
    }
  });
});