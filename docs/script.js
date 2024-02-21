// GOOGLE MAPS API CUSTOMIZATION & SETUP

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: 33.41835, lng: -111.93275 },
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        maxZoom: 16,
        minZoom: 14,
        styles: [
            {
                featureType: "poi.business",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "transit",
                elementType: "all",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "landscape.natural.landcover",
                elementType: "geometry.fill",
                stylers: [{ color: "#eaeeeb" }]
            },
            {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: [{ color: "#ffffff" }] 
            },
        ]
    });

    function addMarker(latitude, longitude, title, description, toilets, urinals, sinks, cleaniness, popularity) {
        var newMarker = new google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            map: map,
            title: title
        });
    
        newMarker.description = description;
        newMarker.toilets = toilets;
        newMarker.urinals = urinals;
        newMarker.sinks = sinks;
        newMarker.cleaniness = cleaniness;
        newMarker.popularity = popularity;
    
        newMarker.addListener('click', function() {
            replaceContainer();
            updateContainerContent(newMarker);
        });
    }

    addMarker(33.42139155407101, -111.93730032588027, 'Design North', 'Description', 2, 2, 2, 4, 6);
    addMarker(33.42050315320932, -111.93567167700462, 'School of Human Evolution and Social Change', 'Description', 3, 2, 2, 7, 1);
    addMarker(33.4199764082994, -111.93550764170703, 'Matthew Center', 'Description', 3, 3, 3, 5, 5);
    addMarker(33.418877348296355, -111.9370222313622, 'Payne Hall', 'Description', 2, 1, 2, 7, 2);
    addMarker(33.41651290900485, -111.93576841524074, 'Discovery Hall', 'Description', 3, 2, 2, 7, 3);
    addMarker(33.418029349755905, -111.93458038603406, 'Memorial Union North Bathrooms', 'Description', 4, 4, 9, 10);
    addMarker(33.41736969731808, -111.93445615553104, 'Memorial Union South Bathrooms', 'Description', 4, 4, 9, 10);
    addMarker(33.4191018489065, -111.93471327080667, 'Hayden Library', 'Description', 3, 3, 4, 8, 9);
    addMarker(33.41954789497661, -111.93224278098396, 'Engineering Center G-Wing', 'Description', 2, 2, 3, 6, 5);
    addMarker(33.4209769439257, -111.93151514717141, 'Physical Sciences F-Wing', 'Description', 2, 2, 1, 4, 6);
    addMarker(33.421676767008336, -111.9319809638733, 'Physical Sciences H-Wing East Bathrooms', 'Description', 3, 3, 3, 4, 3);
    addMarker(33.42166039694399, -111.93157398716512, 'Physical Sciences H-Wing West Bathrooms', 'Description', 3, 3, 3, 4, 3);
    addMarker(33.41982283737915, -111.93086300378584, 'Noble Library', 'Description', 3, 3, 4, 7, 8);
    addMarker(33.417993424291296, -111.93225555054977, 'Creativity Commons', 'Description', 3, 2, 2, 8, 4);
    addMarker(33.41793203392145, -111.92861237360582, "Interdisciplinary Science and Technology Building 4", 'Description', 3, 3, 4, 9, 2);
    addMarker(33.41926230772812, -111.93726297481227, "Lattie F. Coor Hall", 'Description', 5, 5, 4, 7, 6);
    addMarker(33.41559237788914, -111.9320720669076, 'Sun Devil Fitness Center', 'Desription', 2, 3, 2, 3, 8);
    addMarker(33.42309913084303, -111.93260391401117, 'Tooker House Dining Hall', 'Description', 3, 3, 3, 4, 3);

}

function loadGoogleMaps() {
    fetch('/api/key')
        .then(response => response.json())
        .then(data => {
            const apiKey = data.apiKey;
            // Loads the Google Maps script using the API key
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
            script.async = true;
            document.head.appendChild(script);
        })
        .catch(error => console.error('Error fetching API key:', error));
}

loadGoogleMaps();


// MENU SETUP

function replaceContainer() {

    var originalContainer = document.getElementById('info-container');
    var newContainer = document.getElementById('bathroom-container');

    originalContainer.style.display = 'none';
    newContainer.style.display = 'block';
}

function updateContainerContent(marker) {
    var navTitle = document.getElementById('nav-bathroom-title');
    var title = document.getElementById('bathroom-title');
    var toilets = document.getElementById('num-toilets');
    var urinals = document.getElementById('num-urinals');
    var sinks = document.getElementById('num-sinks');
    var cleaniness = document.getElementById('cleaniness-rating');
    var popularity = document.getElementById('popularity-rating');

    navTitle.textContent = marker.title;
    title.textContent = marker.title;
    toilets.textContent = marker.toilets;
    urinals.textContent = marker.urinals;
    sinks.textContent = marker.sinks;
    cleaniness.textContent = marker.cleaniness + "/10";
    popularity.textContent = marker.popularity + "/10";
}

// IDEAS GOING FOWARD

// User reviews
// Database
// Google Sheets API 
// Sort By
// Pictures
// Improved Styling
// Other universities

