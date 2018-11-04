/**
 * @Author John Mauduit
 *
 * Jquery language functions
 * Listen on click, on the flag button in index.thml
 * Read entry from json file
 * Set items to local storage
 * Get items fron local storage
 */

//start point
$(document).ready(function() {
  let jsonData = {};
  let ls = false;
  jsonData.href = window.location.href;

  function getLs() {
    if (window.sessionStorage["local"]) {
      ls = JSON.parse(window.sessionStorage.getItem("local"));
      if (ls) {
        $.each(ls, (key, val) => {
          $("#" + key).text(val);
        });
      }
    }
  }
  getLs();

  // get language from flag click
  $("[data-lang]").click(function(e) {
    e.preventDefault();

    let lang = $(this).attr("data-lang");
    let jsonFile = `lang/${lang}.json`;

    // get key:value from json files
    $.getJSON(jsonFile, data => {
      $.each(data, (k, v) => {
        // set json file to the localStorage
        if ("localStorage" in window) {
          let jsonData = JSON.stringify(data);
          window.sessionStorage.setItem("local", jsonData);
          $("#" + k).text(v);
        }
      });
    });
  });
});
