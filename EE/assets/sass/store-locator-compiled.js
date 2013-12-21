(function ($) {
    /*


 Copyright 2012 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
    var d = !0,
        f = null,
        g = !1,
        h = Math,
        j = "getLocation",
        l = "trigger",
        m = "bindTo",
        n = "removeListener",
        o = "geometry",
        p = "attr",
        q = "getBounds",
        r = "find",
        s = "addListener",
        t = "maps",
        u = "getMap",
        v = "contains",
        w = "push",
        x = "addClass",
        z = "click",
        A = "highlight",
        B = "length",
        C = "prototype",
        D = "getId",
        E = "getMarker",
        F = "setMap",
        G = "append",
        H = "event";

    function I(a) {
        return function () {
            return this[a]
        }
    }
    var J;

    function K() {}
    window.storeLocator = K;

    function L(a) {
        return a * h.PI / 180
    };

    function M(a, b) {
        this.b = a;
        this.a = b
    }
    K.Feature = M;
    M[C].getId = I("b");
    M[C].getDisplayName = I("a");
    M[C].toString = function () {
        return this.getDisplayName()
    };

    function N(a) {
        this.a = [];
        this.b = {};
        for (var b = 0, c; c = arguments[b]; b++) this.add(c)
    }
    K.FeatureSet = N;
    J = N[C];
    J.toggle = function (a) {
        this[v](a) ? this.remove(a) : this.add(a)
    };
    J.contains = function (a) {
        return a[D]() in this.b
    };
    J.getById = function (a) {
        return a in this.b ? this.a[this.b[a]] : f
    };
    J.add = function (a) {
        a && (this.a[w](a), this.b[a[D]()] = this.a[B] - 1)
    };
    J.remove = function (a) {
        this[v](a) && (this.a[this.b[a[D]()]] = f, delete this.b[a[D]()])
    };
    J.asList = function () {
        for (var a = [], b = 0, c = this.a[B]; b < c; b++) {
            var e = this.a[b];
            e !== f && a[w](e)
        }
        return a
    };
    var O = new N;

    function P(a, b) {
        this.g = $(a);
        this.g[x]("storelocator-panel");
        this.c = $.extend({
            locationSearch: d,
            locationSearchLabel: "Where are you?",
            featureFilter: d,
            directions: d,
            view: f
        }, b);
        this.l = new google[t].DirectionsRenderer({
            draggable: d
        });
        this.t = new google[t].DirectionsService;
        Q(this)
    }
    K.Panel = P;
    P.prototype = new google[t].MVCObject;

    function Q(a) {
        a.c.view && a.set("view", a.c.view);
        a.e = $('<form class="storelocator-filter"/>');
        a.g[G](a.e);
        a.c.locationSearch && (a.i = $('<div class="location-search"><h4>' + a.c.locationSearchLabel + "</h4></div>"), a.e[G](a.i), "undefined" != typeof google[t].places ? R(a) : a.e.submit(function () {
            a.searchPosition($("input", a.i).val())
        }), a.e.submit(function () {
            return g
        }), google[t][H][s](a, "geocode", function (b) {
            a.s && window.clearTimeout(a.s);
            if (b[o]) {
                this.k = b[o].location;
                a.h && S(a);
                var c = a.get("view");
                c[A](f);
                var e = c[u]();
                b[o].viewport ? e.fitBounds(b[o].viewport) : (e.setCenter(b[o].location), e.setZoom(13));
                c.refreshView();
                T(a)
            } else a.searchPosition(b.name)
        }));
        if (a.c.featureFilter) {
            a.d = $('<div class="feature-filter"/>');
            for (var b = a.get("view").getFeatures().asList(), c = 0, e = b[B]; c < e; c++) {
                var i = b[c],
                    k = $('<input type="checkbox"/>');
                k.data("feature", i);
                $("<label/>")[G](k)[G](i.getDisplayName()).appendTo(a.d)
            }
            a.e[G](a.d);
            a.d[r]("input").change(function () {
                var b = $(this).data("feature"),
                    c = a.get("featureFilter");
                c.toggle(b);
                a.set("featureFilter", c);
                a.get("view").refreshView()
            })
        }
        a.b = $('<ul class="store-list"/>');
        a.g[G](a.b);
        a.c.directions && (a.a = $('<div class="directions-panel"><form><input class="directions-to"/><input type="submit" value="Find directions"/><a href="#" class="close-directions">Close</a></form><div class="rendered-directions"></div></div>'), a.a[r](".directions-to")[p]("readonly", "readonly"), a.a.hide(), a.h = g, a.a[r]("form").submit(function () {
                S(a);
                return g
            }), a.a[r](".close-directions")[z](function () {
                a.hideDirections()
            }),
            a.g[G](a.a))
    }
    var U = new google[t].Geocoder;

    function T(a) {
        var b = a.get("view");
        a.r && google[t][H][n](a.r);
        a.r = google[t][H].addListenerOnce(b, "stores_changed", function () {
            a.set("stores", b.get("stores"))
        })
    }
    J = P[C];
    J.searchPosition = function (a) {
        var b = this,
            a = {
                address: a,
                bounds: this.get("view")[u]()[q]()
            };
        U.geocode(a, function (a, e) {
            e == google[t].GeocoderStatus.OK && google[t][H][l](b, "geocode", a[0])
        })
    };
    J.setView = function (a) {
        this.set("view", a)
    };
    J.view_changed = function () {
        function a() {
            b.clearMarkers();
            T(c)
        }
        var b = this.get("view");
        this[m]("selectedStore", b);
        var c = this;
        this.o && google[t][H][n](this.o);
        this.q && google[t][H][n](this.q);
        this.p && google[t][H][n](this.p);
        b[u]();
        this.o = google[t][H][s](b, "load", a);
        this.q = google[t][H][s](b[u](), "zoom_changed", a);
        this.p = google[t][H][s](b[u](), "idle", function () {
            var a = b[u]();
            c.j ? a[q]()[v](c.j) || (c.j = a.getCenter(), T(c)) : c.j = a.getCenter()
        });
        a();
        this[m]("featureFilter", b);
        this.f && this.f[m]("bounds", b[u]())
    };

    function R(a) {
        var b = $("input", a.i)[0];
        a.f = new google[t].places.Autocomplete(b);
        a.get("view") && a.f[m]("bounds", a.get("view")[u]());
        google[t][H][s](a.f, "place_changed", function () {
            google[t][H][l](a, "geocode", this.getPlace())
        })
    }
    J.stores_changed = function () {
        if (this.get("stores")) {
            var a = this.get("view"),
                b = a && a[u]()[q](),
                c = this.get("stores"),
                e = this.get("selectedStore");
            this.b.empty();
            c[B] ? b && !b[v](c[0][j]()) && this.b[G]('<li class="no-stores">There are no stores in this area. However, stores closest to you are listed below.</li>') : this.b[G]('<li class="no-stores">There are no stores in this area.</li>');
            for (var b = function () {
                a[A](this.store, d)
            }, i = 0, k = h.min(10, c[B]); i < k; i++) {
                var y = c[i].getInfoPanelItem();
                y.store = c[i];
                e && c[i][D]() ==
                    e[D]() && $(y)[x]("highlighted");
                y.u || (y.u = google[t][H].addDomListener(y, "click", b));
                this.b[G](y)
            }
        }
    };
    J.selectedStore_changed = function () {
        $(".highlighted", this.b).removeClass("highlighted");
        var a = this,
            b = this.get("selectedStore");
        if (b) {
            this.m = b;
            this.b[r]("#store-" + b[D]())[x]("highlighted");
            this.c.directions && this.a[r](".directions-to").val(b.getDetails().title);
            var c = a.get("view").getInfoWindow().getContent(),
                e = $("<a/>").text("Directions")[p]("href", "#")[x]("action")[x]("directions"),
                i = $("<a/>").text("Zoom here")[p]("href", "javascript:void(0)")[x]("action")[x]("zoomhere"),
                k = $("<a/>").text("Street view")[p]("href", "javascript:void(0)")[x]("action")[x]("streetview");
            e[z](function () {
                a.showDirections();
                return g
            });
            i[z](function () {
                a.get("view")[u]().setOptions({
                    center: b[j](),
                    zoom: 16
                })
            });
            k[z](function () {
                var c = a.get("view")[u]().getStreetView();
                $('#button.icon-close').show();
                c.setPosition(b[j]());
                c.setVisible(d)
            });
            $(c)[G](e)[G](i)[G](k)
        }
    };
    J.hideDirections = function () {
        this.h = g;
        this.a.fadeOut();
        this.d.fadeIn();
        this.b.fadeIn();
        this.l[F](f)
    };
    J.showDirections = function () {
        var a = this.get("selectedStore");
        this.d.fadeOut();
        this.b.fadeOut();
        this.a[r](".directions-to").val(a.getDetails().title);
        this.a.fadeIn();
        S(this);
        this.h = d
    };

    function S(a) {
        if (a.k && a.m) {
            var b = a.a[r](".rendered-directions").empty();
            a.t.route({
                origin: a.k,
                destination: a.m[j](),
                travelMode: google[t].DirectionsTravelMode.DRIVING
            }, function (c, e) {
                if (e == google[t].DirectionsStatus.OK) {
                    var i = a.l;
                    i.setPanel(b[0]);
                    i[F](a.get("view")[u]());
                    i.setDirections(c)
                }
            })
        }
    }
    J.featureFilter_changed = function () {
        T(this)
    };

    function V() {
        this.b = []
    }
    K.StaticDataFeed = V;
    V[C].setStores = function (a) {
        this.b = a;
        this.a ? this.a() : delete this.a
    };
    V[C].getStores = function (a, b, c) {
        if (this.b[B]) {
            for (var e = [], i = 0, k; k = this.b[i]; i++) k.hasAllFeatures(b) && e[w](k);
            aa(a.getCenter(), e);
            c(e)
        } else {
            var y = this;
            this.a = function () {
                y.getStores(a, b, c)
            }
        }
    };

    function aa(a, b) {
        b.sort(function (b, e) {
            return b.distanceTo(a) - e.distanceTo(a)
        })
    };
    /*

 Latitude/longitude spherical geodesy formulae & scripts
 (c) Chris Veness 2002-2010
 www.movable-type.co.uk/scripts/latlong.html
*/
    function W(a, b, c, e) {
        this.f = a;
        this.d = b;
        this.a = c || O;
        this.b = e || {}
    }
    K.Store = W;
    J = W[C];
    J.setMarker = function (a) {
        this.e = a;
        google[t][H][l](this, "marker_changed", a)
    };
    J.getMarker = I("e");
    J.getId = I("f");
    J.getLocation = I("d");
    J.getFeatures = I("a");
    J.hasFeature = function (a) {
        return this.a[v](a)
    };
    J.hasAllFeatures = function (a) {
        if (!a) return d;
        for (var a = a.asList(), b = 0, c = a[B]; b < c; b++)
            if (!this.hasFeature(a[b])) return g;
        return d
    };
    J.getDetails = I("b");

    function ba(a) {
        for (var b = ["title", "address", "phone", "misc", "web"], c = [], e = 0, i = b[B]; e < i; e++) {
            var k = b[e];
            a.b[k] && (c[w]('<div class="'), c[w](k), c[w]('">'), c[w](a.b[k]), c[w]("</div>"))
        }
        return c.join("")
    }

    function ca(a) {
        var b = [];
        b[w]('<ul class="features">');
        for (var a = a.a.asList(), c = 0, e; e = a[c]; c++) b[w]("<li>"), b[w](e.getDisplayName()), b[w]("</li>");
        b[w]("</ul>");
        return b.join("")
    }
    J.getInfoWindowContent = function () {
        if (!this.c) {
            var a = ['<div class="store">'];
            a[w](ba(this));
            a[w](ca(this));
            a[w]("</div>");
            this.c = a.join("")
        }
        return this.c
    };
    J.getInfoPanelContent = function () {
        return this.getInfoWindowContent()
    };
    var X = {};
    W[C].getInfoPanelItem = function () {
        var a = this[D]();
        if (!X[a]) {
            var b = this.getInfoPanelContent();
            X[a] = $('<li class="store" id="store-' + this[D]() + '">' + b + "</li>")[0]
        }
        return X[a]
    };
    W[C].distanceTo = function (a) {
        var b = this[j](),
            c = L(b.lat()),
            e = L(b.lng()),
            b = L(a.lat()),
            i = L(a.lng()),
            a = b - c,
            e = i - e,
            c = h.sin(a / 2) * h.sin(a / 2) + h.cos(c) * h.cos(b) * h.sin(e / 2) * h.sin(e / 2);
        return 6371 * 2 * h.atan2(h.sqrt(c), h.sqrt(1 - c))
    };

    function Y() {}
    K.DataFeed = Y;
    Y[C].getStores = function () {};

    function Z(a, b, c) {
        this.g = a;
        this.f = b;
        this.b = $.extend({
            updateOnPan: d,
            geolocation: d,
            features: new N
        }, c);
        da(this);
        google[t][H][l](this, "load");
        this.set("featureFilter", new N)
    }
    K.View = Z;
    Z.prototype = new google[t].MVCObject;

    function ea(a) {
        window.navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition(function (b) {
            b = new google[t].LatLng(b.coords.latitude, b.coords.longitude);
            a[u]().setCenter(b);
            a[u]().setZoom(11);
            google[t][H][l](a, "load")
        }, void 0, {
            maximumAge: 6E4,
            timeout: 1E4
        })
    }

    function da(a) {
        a.b.geolocation && ea(a);
        a.c = {};
        a.a = new google[t].InfoWindow;
        var b = a[u]();
        a.set("updateOnPan", a.b.updateOnPan);
        google[t][H][s](a.a, "closeclick", function () {
            a[A](f)
        });
        google[t][H][s](b, "click", function () {
            a[A](f);
            a.a.close()
        })
    }
    J = Z[C];
    J.updateOnPan_changed = function () {
        this.e && google[t][H][n](this.e);
        if (this.get("updateOnPan") && this[u]()) {
            var a = this,
                b = this[u]();
            this.e = google[t][H][s](b, "idle", function () {
                a.refreshView()
            })
        }
    };
    J.addStoreToMap = function (a) {
        var b = this[E](a);
        a.setMarker(b);
        var c = this;
        b.n = google[t][H][s](b, "click", function () {
            c[A](a, g)
        });
        b[u]() != this[u]() && b[F](this[u]())
    };
    J.createMarker = function (a) {
        var a = {
            position: a[j]()
        }, b = this.b.markerIcon;
        b && (a.icon = b);
        return new google[t].Marker(a)
    };
    J.getMarker = function (a) {
        var b = this.c,
            c = a[D]();
        b[c] || (b[c] = this.createMarker(a));
        return b[c]
    };
    J.getInfoWindow = function (a) {
        if (!a) return this.a;
        this.a.setContent($(a.getInfoWindowContent())[0]);
        return this.a
    };
    J.getFeatures = function () {
        return this.b.features
    };
    J.getFeatureById = function (a) {
        if (!this.d) {
            this.d = {};
            for (var b = 0, c; c = this.b.features[b]; b++) this.d[c[D]()] = c
        }
        return this.d[a]
    };
    J.featureFilter_changed = function () {
        google[t][H][l](this, "featureFilter_changed", this.get("featureFilter"));
        this.get("stores") && this.clearMarkers()
    };
    J.clearMarkers = function () {
        for (var a in this.c) {
            this.c[a][F](f);
            var b = this.c[a].n;
            b && google[t][H][n](b)
        }
    };
    J.refreshView = function () {
        var a = this;
        this.f.getStores(this[u]()[q](), this.get("featureFilter"), function (b) {
            var c = a.get("stores");
            if (c)
                for (var e = 0, i = c[B]; e < i; e++) google[t][H][n](c[e][E]().n);
            a.set("stores", b)
        })
    };
    J.stores_changed = function () {
        for (var a = this.get("stores"), b = 0, c; c = a[b]; b++) this.addStoreToMap(c)
    };
    J.getMap = I("g");
    J.highlight = function (a, b) {
        var c = this.getInfoWindow(a);
        a ? (c = this.getInfoWindow(a), a[E]() ? c.open(this[u](), a[E]()) : (c.setPosition(a[j]()), c.open(this[u]())), b && this[u]().panTo(a[j]()), this[u]().getStreetView().getVisible() && this[u]().getStreetView().setPosition(a[j]())) : c.close();
        this.set("selectedStore", a)
    };
    J.selectedStore_changed = function () {
        google[t][H][l](this, "selectedStore_changed", this.get("selectedStore"))
    };
})(jQuery)
