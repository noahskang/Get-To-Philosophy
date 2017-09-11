$(document).ready(function(){
  $.ajax({
    type: "GET",
      url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix&callback=?",
      contentType: "application/json; charset=utf-8",
      async: false,
      dataType: "json",
      success: function (data, textStatus, jqXHR) {

        // console.log(data);
        var markup = data.parse.text["*"];
        console.log(markup);
        var blurb = $('<div></div>').html(markup);
        console.log(blurb);
        // console.log(blurb);
        // append links as li elements to the links ul.
        // console.log(blurb.find('a'));
        // blurb.find('a').each((link)=>{
        //   $('#links').append(link);
        // });
        let alist = $(blurb).find('p').find('a');
        let firstlink = alist[0].title.split(" ").join("_");
        let urlString = "http://wikipedia.com/wiki/" + firstlink;
        console.log(urlString);
        console.log(firstlink);
        window.location.href = urlString;
        $('#links').html(alist);

        $('#paragraph').html($(blurb).find('p'));
      },
      error: function (errorMessage) {
      }
  });
});
