// REF: http://simpleweatherjs.com/

// On click button, get zip, then run Simple Weather
$('button').on('click', function() {
  
  // 1. Get & store entered zipcode
  var zipcode = $('#getWeather').val();
  
  // 2. Pass weather into _simpleWeather()_ object
  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      var currently = weather.curently;
      var code = '<img src=' + weather.image + '>';
      var temp = weather.temp + '&deg;' + weather.units.temp;
      var humidity = 'Humidity' + ' '  + weather.humidity;
      var sunset =  'Sunset' + ' ' + weather.sunset;
      var sunrise = 'Sunrise' + ' ' + weather.sunrise;
      var high = 'High' + ' ' +weather.high + '&deg;' + weather.units.temp;
      var low = 'Low' + ' ' + weather.low + '&deg;' + weather.units.temp;
      var weatherCam1 = '<img src="http://images.wsdot.wa.gov/spokane/i90/I-90-Appleway.jpg">';
      var weatherCam2 = '<img src="http://images.wsdot.wa.gov/rweather/Medium_Spangle3.jpg">';
      var weatherCam3 = '<img src="http://images.wsdot.wa.gov/nw/005vc16702.jpg">';
      var currently =  weather.currently;
      


      // Output to hooks in HTML
      $('.code').html(code);
      $('.temp').html(temp);
      $('.city').text(city);
      $('.currently').html(currently);
      $('.humidity').html(humidity);
      $('.sunset').html(sunset);
      $('.sunrise').html(sunrise);
      $('.high').html(high);
      $('.low').html(low);
      $('.weatherCam1').html(weatherCam1);
      $('.weatherCam2').html(weatherCam2);
      $('.weatherCam3').html(weatherCam3);
      $('.currently').html(currently);
     

      if ( zipcode == '99004') {

            $('.currentView').html(weatherCam2);

          }

     else if  ( zipcode == '99216'){

            $('.currentView').html(weatherCam1);

          }

    else if  ( zipcode == '98040'){

            $('.currentView').html(weatherCam3);

          }

   else  {
        $('.currentView').text('Enjoy Your Day!');
   }

   $('body').removeClass('wrapper').addClass('');


      
      

      // See console for all properties of object
      console.log(weather);
    },
  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  // 3. Reset input value
  $('#getWeather').val('');
  
});

// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

  $.simpleWeather({
    
    location: '#',
    
    success: function(weather) {
      
      // Get & Store Weather Data
      // html = '<h2><i class="icon-' + weather.code+'"></i> ' + weather.temp +'&deg;' + weather.units.temp+'</h2>';
      var temp, tomHi, tomLo, cityAndState; 

      temp = weather.temp + '<span> f</span>';
      tomHi = weather.tomorrow.high;
      tomLo = weather.tomorrow.low;
      cityAndState = weather.city + ' , ' + weather.region;

      console.log(cityAndState);

      // Display Weather
      $('.temp').html(temp);
      $('.tomHi').html(tomHi);
      $('.tomLo').html(tomLo);
      $('.cityAndState').html(cityAndState);
      $('.humidity').text(humidity);
      $('.sunset').html(sunset);
      $('.sunrise').html(sunrise);
      $('.high').html(high);
      $('.low').html(low);
      $('.weatherCam1').html(weatherCam1);
      $('.weatherCam2').html(weatherCam2);
      $('.weatherCam3').html(weatherCam3);
      $('.currently').html(currently);
     




    },
    
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }


  
  });

  console.log('Page Loaded. Lets Do this!');

}); 
