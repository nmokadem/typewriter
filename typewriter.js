const sentence = "hello there from lighthouse labs";

let typewriter = function(sentence) {
  let ms = 0;
  for (const char of sentence) {
    ms += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, ms); // <= 1s delay to make it noticeable. Can dial it down later.
  }
  setTimeout(() => {
    console.log();
  }, ms); // <= 1s delay to make it noticeable. Can dial it down later.
};

if (process.argv.length === 2) {
  console.log("Usage : node typewriter.js text you would like to display as a typewiter");
  typewriter(sentence);
} else {
  let str = process.argv.slice(2).join(" ");
  typewriter(str);
}
