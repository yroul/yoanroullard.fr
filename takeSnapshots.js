var htmlSnapshots = require('html-snapshots');
var result = htmlSnapshots.run({
  input: "array",
  source: [
    "http://yoanroullard.local",
    "http://yoanroullard.local/#!/music",
    "http://yoanroullard.local/#!/programming",
    "http://yoanroullard.local/#!/contact"
  ],
  outputDir: "./seo",
  outputDirClean: true,
  selector: "#content",
  outputPath : {
    "http://yoanroullard.local/#!/music": "music",
    "http://yoanroullard.local/#!/programming" : 'programming',
    "http://yoanroullard.local/#!/contact" : 'contact'
  },
}/*, function(err, snapshotsCompleted) {
  /*
    Do something when html-snapshots has completed.

    err is undefined if all snapshots were generated successfully.

    snapshotsCompleted is an array of normalized paths to output files that
      contain completed snapshots.
    If no snapshots are completed, this is an empty array.

    You can use snapshotsCompleted to populate shared storage if you are running
      in a scalable server environment with an ephemeral file system:
  */
/*if (typeof err === "undefined") {
    // safe to use snapshotsCompleted to update alternative storage
    //   Example: https://github.com/localnerve/wpspa/blob/master/server/workers/snapshots/lib/index.js
    //
    console.log(" Snapshots are ok");
  }else{
    console.log(err);
  }
*/
);
