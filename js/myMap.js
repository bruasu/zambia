function initMap() {
    //image
    let flag = 'img/bandera.png';
    let location = "img/location.png";

    //coordinates
    let local = {lat: -13.133897, lng: 27.849332};
    let capital = {lat: -15.404197, lng:28.308617};
    let catarataVictoria = {lat: -17.924294, lng: 25.856594};
    let nationalPark = {lat: -12.967226, lng: 31.547192};


    var divMap = document.getElementById('map');
    var options = {
        zoom: 6,
        center: local,
        disableDefaultUI: true //disbilita controles da UI
    };

    var map = new google.maps.Map(divMap, options);

    let imgFlag = new google.maps.Marker({
        position: capital,
        map: map,
        icon: flag,
        title: 'capital Zambia'
    });

    let imgCatarataV = new google.maps.Marker({
        position: catarataVictoria,
        map: map,
        icon: location,
        title: 'Catarata Victoria'
    });

    let imgNational = new google.maps.Marker({
        position: nationalPark,
        map: map,
        icon: location,
        title: 'national Park'
    });
}
 //-13.133897,27.849332,2z
           