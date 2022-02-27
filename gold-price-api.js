(function ($) {
  "use strict";
  $(document).ready(function () {


    //       ---------------------------- GOLD status ------------------------------   

    var time_hr = 24 / 24 ;

    if( 

      $.cookie('kn_gold_ask') && 
      $.cookie('kn_gold_bid') && 
      $.cookie('kn_gold_ch') &&                 

      $.cookie('kn_silver_ask') && 
      $.cookie('kn_silver_bid') && 
      $.cookie('kn_silver_ch') &&    

      $.cookie('kn_platinum_ask') && 
      $.cookie('kn_platinum_bid') && 
      $.cookie('kn_platinum_ch') && 

      $.cookie('kn_palladium_ask') && 
      $.cookie('kn_palladium_bid') && 
      $.cookie('kn_palladium_ch')


    ){

      $('.kn-gold-ch span').text( Math.abs( $.cookie('kn_gold_ch') ) );      
      $('.kn-gold-ask span').text( $.cookie('kn_gold_ask'));          
      $('.kn-gold-bid span').text( $.cookie('kn_gold_bid'));

      if( $.cookie('kn_gold_ch') > 0 ){
        $('.kn-gold-ch').addClass('kn-positive-change');      
      }else{
        $('.kn-gold-ch').addClass('kn-nagative-change');    
      }

      $('.kn-silver-ch span').text( Math.abs( $.cookie('kn_silver_ch') ) );          
      $('.kn-silver-ask span').text( $.cookie('kn_silver_ask'));          
      $('.kn-silver-bid span').text( $.cookie('kn_silver_bid'));          

      if( $.cookie('kn_silver_ch') > 0 ){
        $('.kn-silver-ch').addClass('kn-positive-change');      
      }else{
        $('.kn-silver-ch').addClass('kn-nagative-change');    
      }

      $('.kn-platinum-ch span').text( Math.abs( $.cookie('kn_platinum_ch') ) );          
      $('.kn-platinum-ask span').text( $.cookie('kn_platinum_ask'));          
      $('.kn-platinum-bid span').text( $.cookie('kn_platinum_bid'));          

      if( $.cookie('kn_platinum_ch') > 0 ){
        $('.kn-platinum-ch').addClass('kn-positive-change');      
      }else{
        $('.kn-platinum-ch').addClass('kn-nagative-change');    
      }

      $('.kn-palladium-ch span').text( Math.abs( $.cookie('kn_palladium_ch') ) );          
      $('.kn-palladium-ask span').text( $.cookie('kn_palladium_ask'));          
      $('.kn-palladium-bid span').text( $.cookie('kn_palladium_bid'));          

      if( $.cookie('kn_palladium_ch') > 0 ){
        $('.kn-palladium-ch').addClass('kn-positive-change');      
      }else{
        $('.kn-palladium-ch').addClass('kn-nagative-change');    
      }

      console.log("Price ticker value comes Cookies");

    }else{

      var metalHeaders = new Headers();   

      metalHeaders.append("x-access-token", "goldapi-c9j4stkz0s27s0-io");
      metalHeaders.append("Content-Type", "application/json");

      var metalRequestOptions = {
        method: 'GET',
        headers: metalHeaders,
        redirect: 'follow'
      };

      fetch("https://www.goldapi.io/api/XAU/USD", metalRequestOptions)
      .then(response => response.json())
      .then(gold_result => {

        $.cookie('kn_gold_ask', gold_result['ask'], { expires: time_hr, path: '/' });			
        $.cookie('kn_gold_bid', gold_result['bid'], { expires: time_hr, path: '/' });			
        $.cookie('kn_gold_ch', gold_result['ch'], { expires: time_hr, path: '/' });          

        $('.kn-gold-ch span').text( Math.abs( $.cookie('kn_gold_ch') ) );      
        $('.kn-gold-ask span').text( $.cookie('kn_gold_ask'));          
        $('.kn-gold-bid span').text( $.cookie('kn_gold_bid'));

        if( $.cookie('kn_gold_ch') > 0 ){
          $('.kn-gold-ch').addClass('kn-positive-change');      
        }else{
          $('.kn-gold-ch').addClass('kn-nagative-change');    
        }

      })
      .catch(error => console.log('error', error));  

      fetch("https://www.goldapi.io/api/XAG/USD", metalRequestOptions)
      .then(response => response.json())
      .then( silver_result => {

        $.cookie('kn_silver_ask', silver_result['ask'], { expires: time_hr, path: '/' });			
        $.cookie('kn_silver_bid', silver_result['bid'], { expires: time_hr, path: '/' });			
        $.cookie('kn_silver_ch', silver_result['ch'], { expires: time_hr, path: '/' });          

        $('.kn-silver-ch span').text( Math.abs( $.cookie('kn_silver_ch') ) );          
        $('.kn-silver-ask span').text( $.cookie('kn_silver_ask'));          
        $('.kn-silver-bid span').text( $.cookie('kn_silver_bid'));          

        if( $.cookie('kn_silver_ch') > 0 ){
          $('.kn-silver-ch').addClass('kn-positive-change');      
        }else{
          $('.kn-silver-ch').addClass('kn-nagative-change');    
        }

      })
      .catch(error => console.log('error', error));

      fetch("https://www.goldapi.io/api/XPT/USD", metalRequestOptions)
      .then(response => response.json())
      .then( platinum_result => {

        $.cookie('kn_platinum_ask', platinum_result['ask'], { expires: time_hr, path: '/' });			
        $.cookie('kn_platinum_bid', platinum_result['bid'], { expires: time_hr, path: '/' });			
        $.cookie('kn_platinum_ch', platinum_result['ch'], { expires: time_hr, path: '/' });          

        $('.kn-platinum-ch span').text( Math.abs( $.cookie('kn_platinum_ch') ) );          
        $('.kn-platinum-ask span').text( $.cookie('kn_platinum_ask'));          
        $('.kn-platinum-bid span').text( $.cookie('kn_platinum_bid'));          

        if( $.cookie('kn_platinum_ch') > 0 ){
          $('.kn-platinum-ch').addClass('kn-positive-change');      
        }else{
          $('.kn-platinum-ch').addClass('kn-nagative-change');    
        }

      })
      .catch(error => console.log('error', error));  

      fetch("https://www.goldapi.io/api/XPD/USD", metalRequestOptions)
      .then(response => response.json())
      .then( palladium_result => {

        $.cookie('kn_palladium_ask', palladium_result['ask'], { expires: time_hr, path: '/' });			
        $.cookie('kn_palladium_bid', palladium_result['bid'], { expires: time_hr, path: '/' });			
        $.cookie('kn_palladium_ch', palladium_result['ch'], { expires: time_hr, path: '/' });          


        $('.kn-palladium-ch span').text( Math.abs( $.cookie('kn_palladium_ch') ) );          
        $('.kn-palladium-ask span').text( $.cookie('kn_palladium_ask'));          
        $('.kn-palladium-bid span').text( $.cookie('kn_palladium_bid'));          

        if( $.cookie('kn_palladium_ch') > 0 ){
          $('.kn-palladium-ch').addClass('kn-positive-change');      
        }else{
          $('.kn-palladium-ch').addClass('kn-nagative-change');    
        }

      })

      .catch(error => console.log('error', error));  

      console.log("Price ticker value comes Request");


    }

    //       ----------------------------------------------------------- 

    $('.kn-price-ticker-wrapper').slick({
      infinite:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 60000,
      pauseOnHover: false,
      cssEase: 'linear'
    });



  });

}(jQuery));