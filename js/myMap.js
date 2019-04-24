function initMap() {
               var local = {lat: -13.133897, lng: 27.849332};
               var divMap = document.getElementById('map');
               var options = {
                   zoom: 7,
                   center: local,
                   disableDefaultUI: true //disbilita controles da UI
               };

               var map = new google.maps.Map(divMap, options);

           }
		   //-13.133897,27.849332,7z