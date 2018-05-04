var gulp        = require("gulp");
var request     = require("request");
var fs          = require('fs');




/*
  what goes where?
*/
var buildSrc = ".";
var buildDest = "public";



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





/*
  cleanup the build output
*/
gulp.task('clean-build', function () {
  return gulp.src(buildDest, {read: false})
    .pipe(clean());
});



/*
  Check if we need to help the developer setup the Netlify environment variables
*/
gulp.task('check-init', function () {

  // Look for the environment variables
  if(process.env.APPROVED_COMMENTS_FORM_ID && process.env.API_AUTH && process.env.SLACK_WEBHOOK_URL && process.env.URL ) {

    // Automatically detect and set the comments queue form environment variable.
    var siteDomain = process.env.URL.split("://")[1];
    var url = `https://api.netlify.com/api/v1/sites/${siteDomain}/forms/?access_token=${process.env.API_AUTH}`;

    // REFACTOR: do this conditionally.. not for every build after envs are init'd
    request(url, function(err, response, body){
      if(!err && response.statusCode === 200){
        var body = JSON.parse(body);
        var approvedForm = body.filter(function(f){
          return f.name == 'approved-comments';
        });
        var initStatus = {
          'environment' : true,
          'approved_form_id' : approvedForm[0].id,
          'rootURL' :  process.env.URL,
          'siteName' : siteDomain.replace('.netlify.com', '')
        };
        saveInitStatus(initStatus);
      } else {
        console.log("Couldn't detect a APPROVED_FORM from the API");
        console.log(err, response);
      }
    });
  } else {
    var initStatus = {"environment" : false};
    saveInitStatus(initStatus);
  }

});



/*
  save the status of our environment somewhere that our SSG can access it
*/
function saveInitStatus(initStatus) {
  fs.writeFile(buildSrc + "/data/init.json", JSON.stringify(initStatus), function(err) {
    if(err) {
      console.log(err);
    }
  });
}


/*
  Watch src folder for changes
*/
gulp.task("watch", function () {
  gulp.watch(buildSrc + "/**/*", ["build:local"])
});



/*
  Let's build this sucker for production
*/
gulp.task('build', function(callback) {
  runSequence(
    ['clean-build','check-init', 'get:comments'],
    callback
  );
});

