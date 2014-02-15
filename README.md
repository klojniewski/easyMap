#easyMap


###Benefits
* You can allow easly add Google Maps on your website.
* Google Maps API is loaded in the background.

Warrning: if you want use it on multiple places on on one page, you should include Google Maps.

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
