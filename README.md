#easyMap


###Benefits
* You can easily add Google Maps to your website.
* Google Maps API is loaded in the background.

Warning: if you want to use it in multiple places on one page, you should include Google Maps library manually.

##Installation

###Step 1: Link plugin file

```html
<script src="/js/jquery.easymap.js"></script>
```

###Step 2: Call the easyMap


```javascript
$(document).ready(function(){
  $('.map-wrap').easyMap({
    lat: 1.276816,
    lng: 103.848346,
    zoom: 13
  });
});
```

##Configuration options


**lat**
Google Maps Latitude
```
default: '1.276816'
options: latitude
```

**lng**
Google Maps Longitude
```
default: '103.848346'
options: latitude
```

**zoom**
Google Maps Zoom
```
default: '13'
options: int
```

**randomId**
Change id attribute of map container element.
```
default: true
options: bool
```

**tooltip**
HTML of tooltip visible after clicking on map marker.
```
default: false
options: string
```

**styles**
Style array, you can get some from: http://snazzymaps.com
```
default: false
options: array
```

##Alternative configuration

You can pass configuration options in data attribute of map container element:

```html
<div class="map-wrapper" data-options='{"lat": "52.224844", "lng": "20.957212"}'>
```

##Full features example

You can pass configuration options in data attribute of map container element:

```javascript
$(document).ready(function(){
  $('.map-wrap').easyMap({
    lat: 1.276816,
    lng: 103.848346,
    zoom: 13,
    randomId: true,
    markerIcon: '',
    tooltip: '<p>You`ve clicked on marker!</p>',
    styles: [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},{"featureType":"landscape","stylers":[{"color":"#f2e5d4"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}]
  });
});
```