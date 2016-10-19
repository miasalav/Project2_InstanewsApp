$(document).ready(function(){

function buildArticle(result){
  
   $(".article").not(':first').remove();
    var docArray = (result.results);
        for (i in docArray){
        // var imageUrl = (result.response.docs[i].multimedia[1].url);
        
        if($('.article').length < 13){

        if(result.results[i].multimedia.length != 0){    
        var clone = $('.article').eq(0).clone();
            //$(clone).clone(docArray).appendTo(".results");

        var webUrl = (result.results[i].url);
        var snippet = (result.results[i].abstract);
        var headline = (result.results[i].title);
        var imageUrl = (result.results[i].multimedia[4].url);
        
        $(clone).css("background-image", "url("+ imageUrl + ")"); 
       // $('article').children('img').attr("src", final_image);
        $(clone).children('.article-link').children('article').children('.excerpt').children('p').html(snippet);
        $(clone).children('.article-link').attr("href", webUrl);
        
        $('.results').append(clone);

       }

        $('.article').show();

                    
         }
      
       }
    

         $('.article').eq(0).hide();
       
     }
 $( "select" ).on('change',function () {

     if ( $(window).width() > 1000) {   
    $('header').addClass('desktop-header');
       }

     if ( $(window).width() > 600) {   
    $('header').addClass('tablet-header');
    console.log('hey')
     }

     if ( $(window).width() < 600) {   
    $('header').addClass('mobile-header');
    console.log('hey')
     }

     
    var name = $('select option:selected').val();
    var url = "https://api.nytimes.com/svc/topstories/v2/"+name+".json";
    url += '?' + $.param({
    'api-key': "cbb4f140a0a34475ad196ecda325cb6e"
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        buildArticle(result)
    }).fail(function(err) {
        throw err;
    });

   
  })

/*
$('#button').on('click', function(e){
    //stops an element's native function
    e.preventDefault();
   //console.log('hello');
    var val = $('input[type=text]').val();
 
    var url = 'https://api.nytimes.com/svc/topstories/v2/home.json';
        url += '?' + $.param({
        'api-key': "cbb4f140a0a34475ad196ecda325cb6e"
        });
    
      
     function buildArticle(result){
 
        var docArray = (result.results);
        for (i in docArray){
        // var imageUrl = (result.response.docs[i].multimedia[1].url);
        
        if(result.results[i].multimedia.length != 0){
            
        var clone = $('article').eq(0).clone();
            //$(clone).clone(docArray).appendTo(".results");
        var webUrl = (result.results[i].web_url);
        var snippet = (result.results[i].abstract);
        var headline = (result.results[i].title);
        var imageUrl = (result.results[i].multimedia[4].url);
        
        $(clone).css("background-image", "url("+ imageUrl + ")"); 
       // $('article').children('img').attr("src", final_image);
        $(clone).children('.excerpt').children('p').html(snippet);
        $(clone).children('.link').attr("href", webUrl);
        $('.results').append(clone);
        $('article').show();
       console.log(imageUrl);
                    
         }
      
       }
    
         $('article').eq(0).remove();
       
     }
 */

    

  });


