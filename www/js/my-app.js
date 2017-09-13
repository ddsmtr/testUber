// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    //window.open = cordova.InAppBrowser.open; // проверка плагина
    //window.open = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    //window.open = cordova.InAppBrowser.open('https://m.uber.com/sign-up?client_id=HkmYZkM7Fedx2vfAexLegqudhVOBBAXe','_blank', 'location=yes');

});
$$('#UberButton').on('click',function(){
    //myApp.alert("Test");
    // var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    // var xhr = new XHR();
    // var url = "https://m.uber.com/ul/?action=setPickup&client_id=HkmYZkM7Fedx2vfAexLegqudhVOBBAXe&pickup[formatted_address]=%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%93%D0%B0%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%BE%2C%2013%2C%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F&pickup[latitude]=59.856804&pickup[longitude]=30.325934&dropoff[formatted_address]=%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9F%D0%B5%D1%80%D0%B5%D0%B4%D0%BE%D0%B2%D0%B8%D0%BA%D0%BE%D0%B2%2C%2013%2C%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F&dropoff[latitude]=59.941352&dropoff[longitude]=30.466816";
    // xhr.open('GET', url, true);
    // xhr.onload = function() {
        //alert( this.responseText );

        // window.Uber = {
        //   gaTrackingId: 'UA-7157694-35',
        //   version: '3.0.0',
        //   deepLinkOptions: {
        //     iOS: {
        //       appName: 'uber',
        //         appId: '368677368',
        //         storeUrl: ''
        //     },
        //     android: {
        //       appId: 'com.ubercab',
        //         storeUrl: ''
        //     },
        //     fallbackUri: '',
        //     clientId: 'HkmYZkM7Fedx2vfAexLegqudhVOBBAXe',
        //     signUpParams: '',
        //     signUpUrl: 'http://m.uber.com/sign-up?client_id=HkmYZkM7Fedx2vfAexLegqudhVOBBAXe',
        //     nativeUrl: 'uber://?action=setPickup&client_id=HkmYZkM7Fedx2vfAexLegqudhVOBBAXe&pickup=my_location&dropoffformatted_address=%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9F%D0%B5%D1%80%D0%B5%D0%B4%D0%BE%D0%B2%D0%B8%D0%BA%D0%BE%D0%B2%2C%2013%2C%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F',
        //     storeUrl: ''
        //   }
        // };
        // var event = new Event("click");
        // $$('.primary-cta').dispatchEvent(event);
//         if (xhr.status == 200) {
//             //myApp.alert("Cool");
//             //window.open = cordova.InAppBrowser.open('https://m.uber.com/sign-up?client_id=HkmYZkM7Fedx2vfAexLegqudhVOBBAXe','_blank', 'location=yes');
//              window.open = cordova.InAppBrowser.open()
//         }else{
//             myApp.alert("Bad");
//         }
  
//     }
//     xhr.onerror = function() {
//       alert( 'Ошибка ' + this.status );
//     }

// xhr.send();
window.open = cordova.InAppBrowser.open('https://m.uber.com/ul/?action=setPickup&client_id=HkmYZkM7Fedx2vfAexLegqudhVOBBAXe&pickup[formatted_address]=%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%93%D0%B0%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%BE%2C%2013%2C%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F&pickup[latitude]=59.856804&pickup[longitude]=30.325934&dropoff[formatted_address]=%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9F%D0%B5%D1%80%D0%B5%D0%B4%D0%BE%D0%B2%D0%B8%D0%BA%D0%BE%D0%B2%2C%2013%2C%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F&dropoff[latitude]=59.941352&dropoff[longitude]=30.466816', '_blank', 'location=yes');
});
// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})