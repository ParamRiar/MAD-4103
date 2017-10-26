/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        document.getElementById("btnweather").addEventListener("click", getweather);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
function getweather(){
   
   
if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position)
    {
        $("#geoloc").html("latitude:" + position.coords.latitude + "<br> longitude: " + position.coords.longitude);

        var lat = position.coords.latitude;
        var long = position.coords.longitude;
      
        var weatherURL= "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&APPID=274f6fca2f23e4331420853909702ec3";
        $.getJSON(weatherURL).done(function(data){
           $("#weathermain").html("weathermain:" + data.weather[0].main);
              $("#weatherdesc").html("weather description:" + data.weather[0].description);
              var Current  = data.main.temp - 273.15;
            $("#currtemp").html("current temp:" + Current + "°C");

            var Max = data.main.temp_max - 273.15;
             $("#tempmax").html("Maximum Temp:" + Max + "°C");

             var Min = data.main.temp_min - 273.15;
             $("#tempmin").html("Minimum Temp:" + Min + "°C");

                var wind = data.wind.speed * (18/5);
                $("#wind").html("wind speed:" + wind);
               $("#direction").html("wind direction:" + data.wind.deg);
                $("#Humidity").html("Humidity:" + data.main.humidity);
               $("#Pressure").html("Pressure:" + data.main.pressure);
               var sunrise = new Date(data.sys.sunrise * 1000);
                $("#sunrise").html("sunrise:" + sunrise);
                 var sunset = new Date(data.sys.sunset * 1000);
               $("#sunset").html("sunset:" + sunset);

        });
    },function(er){
        alert(er.message);
    });
}
}

