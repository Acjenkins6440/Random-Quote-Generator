var col1 = '#606dbc';
var col2 = '#465298';
var col3 = 'blue';
var col4 = 'red';
var ico = '<i class="fa fa-quote-left" aria-hidden="true"></i>'
var ico2 = '<i class="fa fa-quote-right" aria-hidden="true"></i>'
$(document).ready(function() {
  $("#btn").click(function() {

    colors();
    $("#stripes").css('background', 'repeating-linear-gradient' + '(45deg,' + col1 + ',' + col1 + ' 30px,' + col2 + ' 30px, ' + col2 + ' 60px, ' + col3 + ' 60px, ' + col3 + ' 90px, ' + col4 + ' 90px, ' + col4 + ' 120px' + ')');
    $('#cli').css('opacity', '0');
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(data){
      $("#qt").html(ico + '     ' + data.quoteText + ico2);
      if(data.quoteAuthor.length < 1){
        $(".author").html('-Anonymous')
      }
      else{
        $(".author").html('-' + data.quoteAuthor);
      }
      $("a").attr('href','https://twitter.com/intent/tweet?text=' + data.quoteText + '  -'+data.quoteAuthor);
      $('#tweet').css('cursor', 'pointer');
    });

  });
});
/*function ChangeColors(){
  col4 = col3
  col3 = col2
  col2 = col1;
  col1 = colors();

}*/
function colors() {
  let colorArray = [];

  for (let i = 0; i < 3; i++) {
    colorArray.push(Math.floor(Math.random() * (255 - 0) + 0));
  }
  // rgb -> hex
  let color = colorArray.map(x => x.toString(16)).join("");

  col4 = col3;
  col3 = col2;
  col2 = col1;
  col1 =  `#${color}`;

}
