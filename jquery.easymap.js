/*globals jQuery, google, document */
(function ($) {
    "use strict";
    var pluginName  =   "easyMap",
        defaults    =   {
            lat: 1.276816,
            lng: 103.848346,
            zoom: 13,
            randomId: true,
            markerIcon: '',
            styles: false
        };
    // The actual plugin constructor
    function Plugin(element, options) {
        this.element        =   element;
        this.$element       =   $(this.element);
        this.options        =   options;
        this.metadata       =   this.$element.data('options');
        this.settings       =   $.extend({}, defaults, this.options, this.metadata);
        this.map            =   null;
        this.init();
    }
    Plugin.prototype = {
        init: function () {
            var that = this;
            that.prepareHTML();
            if (typeof google !== 'object' || typeof google.maps !== 'object') {
                $.getScript(('https:' === document.location.protocol ? 'https:' : 'http:') + '//www.google.com/jsapi', function () {
                    google.load('maps', 3, {
                        other_params: 'sensor=false',
                        callback: function () {
                            that.render();
                        }
                    });
                });
            } else {
                that.render();
            }
        },
        prepareHTML: function () {
            if (this.settings.randomId) {
                this.$element.attr('id', this.getRandomId());
            }
            if (this.$element.height() === 0) {
                this.$element.height('100%');
            }
        },
        render: function () {
            this.renderMap();
            this.addMarker();
        },
        renderMap: function () {
            var mapOptions = {
                    zoom: this.settings.zoom,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    navigationControlOptions: {
                        style: google.maps.NavigationControlStyle.SMALL
                    },
                    streetViewControl: false,
                    mapTypeControl: false,
                    scrollwheel: false,
                    styles: this.settings.styles
                };
            this.mapLocation = new google.maps.LatLng(this.settings.lat, this.settings.lng);
            this.map = new google.maps.Map(document.getElementById(this.element.id), $.extend(mapOptions, { center: this.mapLocation }));
        },
        addMarker: function () {
            this.marker = new google.maps.Marker({
                position: this.mapLocation,
                icon: this.settings.markerIcon,
                map: this.map
            });
        },
        getRandomId: function () {
            var randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)),
                randomNumber = Date.now();
            return randomLetter + '-' + randomNumber;
        }
    };
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };
}(jQuery));