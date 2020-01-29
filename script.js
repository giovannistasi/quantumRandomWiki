$(document).ready(function () {

  qrand.getRandomHexOctets(16, function (err, octets) {
    console.log(octets.join(''));
    let randNum = octets.join('').slice(-2);
    console.log(randNum);

    randNum = parseInt(randNum, 16);
    console.log(randNum);
  

  var url = "https://en.wikipedia.org/w/api.php";

  var params = {
    action: "query",
    format: "json",
    list: "random",
    rnlimit: "255",
    rnnamespace: "0"
  };

  url = url + "?origin=*";
  Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });

  fetch(url)
    .then(function (response) { return response.json(); })
    .then(function (response) {
      var randoms = response.query.random;
      console.log(randoms);
      // for (var r in randoms) {
      //   console.log(randoms[r].title);
      // }
      // let randNum = Math.floor((Math.random() * randoms.length - 1));
      
      let randPage = randoms[randNum].title;

      $('button').click(() => {
        window.open('https://en.wikipedia.org/wiki/' + randPage.split(' ').join('_'), '_blank');
      });
    })
    .catch(function (error) { console.log(error); });

  });
});