//start point
$(document).ready(function() {
  // get lang from click
  let jsonData = {};
  //retrieve localStorage if there is one
  let ls = false;
  jsonData.href = window.location.href;
  //console.log(jsonData);
  function getLs() {
    if (window.localStorage["local"]) {
      ls = JSON.parse(window.localStorage.getItem("local"));
      if (ls) {
        $.each(ls, (key, val) => {
          $("#" + key).text(val);
          //console.log(key + " : " + val);
        });
      }
    }
  }
  getLs();
  $("[data-lang]").click(function(e) {
    e.preventDefault();
    let lang = $(this).attr("data-lang");
    let jsonFile = `lang/${lang}.json`;

    // get key:value from json file
    $.getJSON(jsonFile, data => {
      $.each(data, (k, v) => {
        // set json file to the localStorage
        if ("localStorage" in window) {
          let jsonData = JSON.stringify(data);
          window.localStorage.setItem("local", jsonData);
          //console.log(window.localStorage);
          //console.log(localStorage.getItem("local"));
          //console.log(data);
          //console.log(jsonData);
          //localStorage.getItem("local");
          //console.log(k, ": " + v);
          $("#" + k).text(v);
        }
      });
      ls = JSON.parse(window.localStorage.getItem("local"));
    });
    //console.log(lang);
  });
});
