// prettier-ignore
export default {
    "version": 8,
    "name": "CRE v5",
    "metadata": {
        "mapbox:type": "default",
        "mapbox:origin": "basic-v1",
        "mapbox:autocomposite": true,
        "mapbox:groups": {
            "Transit, transit-labels": {
                "name": "Transit, transit-labels",
                "collapsed": false
            },
            "Administrative boundaries, admin": {
                "name": "Administrative boundaries, admin",
                "collapsed": false
            },
            "Land & water, built": {
                "name": "Land & water, built",
                "collapsed": false
            },
            "Road network, bridges": {
                "name": "Road network, bridges",
                "collapsed": false
            },
            "Road network, tunnels": {
                "name": "Road network, tunnels",
                "collapsed": false
            },
            "Road network, road-labels": {
                "name": "Road network, road-labels",
                "collapsed": false
            },
            "Buildings, built": {
                "name": "Buildings, built",
                "collapsed": false
            },
            "Natural features, natural-labels": {
                "name": "Natural features, natural-labels",
                "collapsed": false
            },
            "Road network, surface": {
                "name": "Road network, surface",
                "collapsed": false
            },
            "Place labels, place-labels": {
                "name": "Place labels, place-labels",
                "collapsed": false
            },
            "Buildings, extruded": {
                "name": "Buildings, extruded",
                "collapsed": false
            },
            "Point of interest labels, poi-labels": {
                "name": "Point of interest labels, poi-labels",
                "collapsed": false
            },
            "Walking, cycling, etc., bridges": {
                "name": "Walking, cycling, etc., bridges",
                "collapsed": false
            },
            "Walking, cycling, etc., tunnels": {
                "name": "Walking, cycling, etc., tunnels",
                "collapsed": false
            },
            "Walking, cycling, etc., walking-cycling-labels": {
                "name": "Walking, cycling, etc., walking-cycling-labels",
                "collapsed": false
            },
            "Road network, bridges-case": {
                "name": "Road network, bridges-case",
                "collapsed": false
            },
            "Walking, cycling, etc., surface": {
                "name": "Walking, cycling, etc., surface",
                "collapsed": false
            },
            "Transit, built": {"name": "Transit, built", "collapsed": false},
            "Land & water, land-and-water": {
                "name": "Land & water, land-and-water",
                "collapsed": false
            }
        },
        "mapbox:sdk-support": {
            "android": "9.3.0",
            "ios": "5.10.0",
            "js": "1.10.0"
        },
        "mapbox:uiParadigm": "layers",
        "mapbox:trackposition": false,
        "mapbox:decompiler": {
            "id": "ckd7i4sex01xb1io2dwpuevpl",
            "componentVersion": "0.4.0",
            "strata": [
                {
                    "id": "basic-v1",
                    "order": [
                        ["land-and-water", "land-and-water"],
                        "water-pattern",
                        ["land-and-water", "built"],
                        ["transit", "built"],
                        ["buildings", "built"],
                        ["road-network", "tunnels-case"],
                        ["walking-cycling", "tunnels"],
                        ["road-network", "tunnels"],
                        ["transit", "ferries"],
                        ["road-network", "surface-case"],
                        ["walking-cycling", "surface"],
                        ["road-network", "surface"],
                        ["transit", "surface"],
                        ["road-network", "surface-icons"],
                        ["road-network", "bridges-case"],
                        ["walking-cycling", "bridges"],
                        ["road-network", "bridges"],
                        ["transit", "bridges"],
                        ["road-network", "bridges-2"],
                        ["road-network", "traffic-and-closures"],
                        ["walking-cycling", "barriers"],
                        ["buildings", "extruded"],
                        ["transit", "elevated"],
                        ["admin-boundaries", "admin"],
                        ["buildings", "building-labels"],
                        ["road-network", "road-labels"],
                        ["transit", "ferry-aerialway-labels"],
                        ["walking-cycling", "walking-cycling-labels"],
                        ["natural-features", "natural-labels"],
                        ["point-of-interest-labels", "poi-labels"],
                        ["transit", "transit-labels"],
                        ["place-labels", "place-labels"]
                    ]
                }
            ],
            "overrides": {
                "buildings": {
                    "building": {
                        "paint": {
                            "fill-color": "#f1f1ee",
                            "fill-outline-color": {"remove": true}
                        }
                    },
                    "building-outline": {"layout": {"visibility": "none"}},
                    "building-extrusion": {
                        "paint": {"fill-extrusion-color": "hsl(35, 46%, 69%)"}
                    }
                },
                "land-and-water": {
                    "landuse": {"paint": {"fill-color": "#f3f8e7"}},
                    "national-park": {"paint": {"fill-color": "#f3f8e7"}},
                    "land": {"paint": {"background-color": "#fcfcf8"}},
                    "land-structure-polygon": {
                        "paint": {"fill-color": "#f5f4ef"}
                    },
                    "water": {"paint": {"fill-color": "#dff2fb"}},
                    "waterway": {"paint": {"line-color": "#e4f0f6"}}
                },
                "natural-features": {
                    "waterway-label": {
                        "paint": {"text-color": "#8399af"},
                        "layout": {
                            "text-font": [
                                "Halyard Display Book",
                                "Arial Unicode MS Regular"
                            ],
                            "text-letter-spacing": 0.1
                        }
                    },
                    "water-point-label": {
                        "layout": {
                            "text-font": [
                                "Halyard Display Book",
                                "Arial Unicode MS Regular"
                            ]
                        }
                    },
                    "water-line-label": {
                        "layout": {
                            "text-font": [
                                "Halyard Display Book",
                                "Arial Unicode MS Regular"
                            ]
                        }
                    },
                    "natural-point-label": {
                        "layout": {
                            "text-font": [
                                "Halyard Display Book",
                                "Arial Unicode MS Regular"
                            ]
                        }
                    },
                    "natural-line-label": {
                        "layout": {
                            "text-font": [
                                "Halyard Display Book",
                                "Arial Unicode MS Regular"
                            ]
                        }
                    }
                },
                "place-labels": {
                    "settlement-subdivision-label": {
                        "paint": {"text-color": "#73683b"},
                        "layout": {
                            "text-font": [
                                "Halyard Display Book",
                                "Arial Unicode MS Regular"
                            ],
                            "text-size": [
                                "interpolate",
                                ["cubic-bezier", 0.5, 0, 1, 1],
                                ["zoom"],
                                13,
                                ["match", ["get", "type"], "suburb", 11, 10.5],
                                22,
                                ["match", ["get", "type"], "suburb", 17, 16]
                            ]
                        }
                    },
                    "country-label": {
                        "layout": {
                            "text-font": [
                                "Halyard Display Book",
                                "Arial Unicode MS Regular"
                            ],
                            "icon-image": {"remove": true},
                            "text-transform": "uppercase"
                        }
                    },
                    "state-label": {
                        "layout": {
                            "text-font": [
                                "Halyard Display Book",
                                "Arial Unicode MS Bold"
                            ]
                        },
                        "paint": {"text-color": "#73683b"}
                    },
                    "settlement-major-label": {
                        "layout": {
                            "text-font": [
                                "Halyard Display Regular",
                                "Arial Unicode MS Regular"
                            ],
                            "text-letter-spacing": 0.1,
                            "text-transform": "uppercase"
                        },
                        "paint": {"text-color": "#73683b"}
                    },
                    "settlement-minor-label": {
                        "layout": {
                            "text-font": [
                                "Halyard Display Book",
                                "Arial Unicode MS Regular"
                            ],
                            "text-letter-spacing": 0.1,
                            "text-transform": {"remove": true},
                            "text-size": [
                                "interpolate",
                                ["cubic-bezier", 0.2, 0, 0.9, 1],
                                ["zoom"],
                                8,
                                [
                                    "step",
                                    ["get", "symbolrank"],
                                    12,
                                    9,
                                    11,
                                    10,
                                    10.5,
                                    12,
                                    9.5,
                                    14,
                                    8.5,
                                    16,
                                    6.5,
                                    17,
                                    4
                                ],
                                13,
                                [
                                    "step",
                                    ["get", "symbolrank"],
                                    25,
                                    9,
                                    23,
                                    10,
                                    21,
                                    11,
                                    19,
                                    12,
                                    18,
                                    13,
                                    17,
                                    15,
                                    15
                                ]
                            ]
                        },
                        "paint": {"text-color": "#73683b"}
                    }
                },
                "transit": {
                    "aeroway-polygon": {
                        "paint": {"fill-color": "#f1f1ee"},
                        "layout": {"visibility": "visible"}
                    },
                    "aeroway-line": {"paint": {"line-color": "#f1f1ee"}},
                    "airport-label": {
                        "layout": {
                            "text-font": [
                                "Halyard Display Book",
                                "Arial Unicode MS Regular"
                            ],
                            "icon-image": {"remove": true}
                        },
                        "paint": {"text-color": "#73683b"}
                    },
                    "transit-label": {
                        "layout": {
                            "text-font": [
                                "Halyard Display Book",
                                "Arial Unicode MS Regular"
                            ],
                            "text-letter-spacing": 0.1,
                            "icon-image": ["get", "network"],
                            "icon-size": 0.6
                        },
                        "paint": {"icon-opacity": 0}
                    }
                },
                "walking-cycling": {
                    "road-path-bg": {"layout": {"visibility": "none"}},
                    "tunnel-pedestrian": {"layout": {"visibility": "none"}},
                    "tunnel-steps": {"layout": {"visibility": "none"}},
                    "bridge-path-trail": {"layout": {"visibility": "none"}},
                    "road-path-cycleway-piste": {
                        "layout": {"visibility": "none"}
                    },
                    "tunnel-path-trail": {"layout": {"visibility": "none"}},
                    "bridge-steps": {"layout": {"visibility": "none"}},
                    "gate-fence-hedge": {"layout": {"visibility": "none"}},
                    "road-pedestrian": {"layout": {"visibility": "none"}},
                    "bridge-path-bg": {"layout": {"visibility": "none"}},
                    "bridge-path": {"layout": {"visibility": "none"}},
                    "tunnel-path-cycleway-piste": {
                        "layout": {"visibility": "none"}
                    },
                    "tunnel-path": {"layout": {"visibility": "none"}},
                    "path-pedestrian-label": {"layout": {"visibility": "none"}},
                    "bridge-path-cycleway-piste": {
                        "layout": {"visibility": "none"}
                    },
                    "road-path-trail": {"layout": {"visibility": "none"}},
                    "bridge-steps-bg": {"layout": {"visibility": "none"}},
                    "golf-hole-label": {"layout": {"visibility": "none"}},
                    "road-path": {"layout": {"visibility": "none"}},
                    "road-pedestrian-case": {"layout": {"visibility": "none"}},
                    "golf-hole-line": {"layout": {"visibility": "none"}},
                    "road-steps-bg": {"layout": {"visibility": "none"}},
                    "road-pedestrian-polygon-pattern": {
                        "layout": {"visibility": "none"}
                    },
                    "road-steps": {"layout": {"visibility": "none"}},
                    "road-pedestrian-polygon-fill": {
                        "layout": {"visibility": "none"}
                    },
                    "bridge-pedestrian-case": {
                        "layout": {"visibility": "none"}
                    },
                    "bridge-pedestrian": {"layout": {"visibility": "none"}}
                },
                "point-of-interest-labels": {
                    "poi-label": {
                        "layout": {
                            "text-font": [
                                "Halyard Display Book",
                                "Arial Unicode MS Regular"
                            ],
                            "text-letter-spacing": 0.1,
                            "icon-size": 0.6,
                            "icon-image": {"remove": true}
                        },
                        "paint": {"text-color": "#73683b", "icon-opacity": 0.5}
                    }
                },
                "road-network": {
                    "bridge-simple": {
                        "paint": {
                            "line-color": [
                                "match",
                                ["get", "class"],
                                [
                                    "primary_link",
                                    "secondary_link",
                                    "tertiary_link",
                                    "street",
                                    "street_limited",
                                    "service",
                                    "track"
                                ],
                                "#f1f1ee",
                                "#f1f1ee"
                            ]
                        }
                    },
                    "road-simple": {
                        "paint": {
                            "line-color": [
                                "match",
                                ["get", "class"],
                                [
                                    "primary_link",
                                    "secondary_link",
                                    "tertiary_link",
                                    "street",
                                    "street_limited",
                                    "service",
                                    "track"
                                ],
                                "#f1f1ee",
                                "#f1f1ee"
                            ],
                            "line-width": [
                                "interpolate",
                                ["exponential", 1.5],
                                ["zoom"],
                                7,
                                [
                                    "match",
                                    ["get", "class"],
                                    ["motorway", "trunk", "primary"],
                                    0.3,
                                    ["secondary", "tertiary"],
                                    0.1,
                                    0
                                ],
                                13,
                                [
                                    "match",
                                    ["get", "class"],
                                    ["motorway", "trunk", "primary"],
                                    4,
                                    ["secondary", "tertiary"],
                                    2.5,
                                    [
                                        "motorway_link",
                                        "trunk_link",
                                        "primary_link",
                                        "street",
                                        "street_limited"
                                    ],
                                    1,
                                    0.5
                                ],
                                18,
                                [
                                    "match",
                                    ["get", "class"],
                                    ["motorway", "trunk", "primary"],
                                    32,
                                    ["secondary", "tertiary"],
                                    26,
                                    [
                                        "motorway_link",
                                        "trunk_link",
                                        "primary_link",
                                        "street",
                                        "street_limited"
                                    ],
                                    18,
                                    10
                                ]
                            ]
                        }
                    },
                    "tunnel-simple": {"paint": {"line-color": "#f1f1ee"}},
                    "road-label-simple": {
                        "paint": {
                            "text-color": "#73683b",
                            "text-halo-color": "#ffffff"
                        },
                        "layout": {
                            "text-transform": {"remove": true},
                            "text-letter-spacing": 0.1,
                            "text-font": [
                                "Halyard Display Light",
                                "Arial Unicode MS Regular"
                            ]
                        }
                    }
                }
            },
            "components": {
                "road-network": "0.4.0",
                "natural-features": "0.4.0",
                "place-labels": "0.4.0",
                "admin-boundaries": "0.4.0",
                "point-of-interest-labels": "0.4.0",
                "walking-cycling": "0.4.0",
                "transit": "0.4.0",
                "land-and-water": "0.4.0",
                "buildings": "0.4.0"
            },
            "propConfig": {
                "road-network": {
                    "color-base": "hsl(0, 0%, 100%)",
                    "color-road": "hsl(40, 38%, 84%)",
                    "roadNetwork": "Simple",
                    "color-road-label": "#73683b",
                    "roadsFont": [
                        "Halyard Display Light",
                        "Arial Unicode MS Regular"
                    ],
                    "shieldsFont": [
                        "Halyard Display Book",
                        "Arial Unicode MS Bold"
                    ]
                },
                "natural-features": {
                    "color-base": "hsl(0, 0%, 100%)",
                    "color-water": "#c1ccd7",
                    "color-poi": "hsl(26, 18%, 42%)",
                    "waterLabelsFont": [
                        "Halyard Display Light",
                        "Arial Unicode MS Regular"
                    ],
                    "poiEtcFont": [
                        "Halyard Display Book",
                        "Arial Unicode MS Regular"
                    ]
                },
                "place-labels": {
                    "color-base": "hsl(0, 0%, 100%)",
                    "color-place-label": "hsl(53, 17%, 52%)",
                    "settlementSubdivisionsDensity": 3,
                    "settlementLabelStyle": "Text only",
                    "settlementSubdivisionsFont": [
                        "Halyard Display Book",
                        "Arial Unicode MS Regular"
                    ],
                    "settlementsMinorFont": [
                        "Halyard Display Book",
                        "Arial Unicode MS Regular"
                    ],
                    "countriesSettlementsMajorFont": [
                        "Halyard Display Book",
                        "Arial Unicode MS Regular"
                    ],
                    "statesFont": [
                        "Halyard Display Regular",
                        "Arial Unicode MS Bold"
                    ]
                },
                "admin-boundaries": {
                    "color-base": "hsl(0, 0%, 100%)",
                    "color-place-label": "hsl(53, 17%, 52%)"
                },
                "point-of-interest-labels": {
                    "color-base": "hsl(0, 0%, 100%)",
                    "color-greenspace": "hsl(65, 62%, 46%)",
                    "color-hospital": "hsl(3, 45%, 55%)",
                    "color-school": "hsl(40, 45%, 45%)",
                    "color-poi": "hsl(26, 18%, 42%)",
                    "density": 2,
                    "poiEtcFont": [
                        "Halyard Display Book",
                        "Arial Unicode MS Regular"
                    ]
                },
                "walking-cycling": {
                    "roadsFont": [
                        "Halyard Display Light",
                        "Arial Unicode MS Regular"
                    ],
                    "golfHoleLabelLine": false,
                    "color-road": "hsl(40, 38%, 84%)",
                    "color-greenspace": "hsl(65, 62%, 46%)",
                    "walkingCyclingPisteBackground": false,
                    "color-road-label": "#73683b",
                    "poiEtcFont": [
                        "Halyard Display Book",
                        "Arial Unicode MS Regular"
                    ],
                    "color-base": "hsl(0, 0%, 100%)",
                    "pedestrianPolygonFeatures": false
                },
                "transit": {
                    "color-airport": "hsl(225, 4%, 40%)",
                    "matchLabelAndIcon": true,
                    "roadsFont": [
                        "Halyard Display Light",
                        "Arial Unicode MS Regular"
                    ],
                    "color-transit": "hsla(230, 55%, 42%, 0.65)",
                    "aerialways": false,
                    "color-road": "hsl(40, 38%, 84%)",
                    "color-water": "#c1ccd7",
                    "color-road-label": "#73683b",
                    "transitLabels": true,
                    "railways": false,
                    "ferries": false,
                    "poiEtcFont": [
                        "Halyard Display Book",
                        "Arial Unicode MS Regular"
                    ],
                    "color-base": "hsl(0, 0%, 100%)"
                },
                "land-and-water": {
                    "color-airport": "hsl(225, 4%, 40%)",
                    "color-hospital": "hsl(3, 45%, 55%)",
                    "landcover": false,
                    "color-greenspace": "hsl(65, 62%, 46%)",
                    "color-water": "#c1ccd7",
                    "transitionLandOnZoom": false,
                    "waterStyle": "Simple",
                    "color-base": "hsl(0, 0%, 100%)",
                    "color-school": "hsl(40, 45%, 45%)"
                },
                "buildings": {
                    "color-base": "hsl(0, 0%, 100%)",
                    "houseNumbers": false,
                    "3D": false,
                    "houseNumbersFont": [
                        "Halyard Display Light",
                        "Arial Unicode MS Regular"
                    ],
                    "haloWidth": 1
                }
            }
        }
    },
    "center": [-77.03785473679636, 38.8917250934245],
    "zoom": 15.194912350884389,
    "bearing": 0,
    "pitch": 0,
    "sources": {
        "composite": {
            "url": "mapbox://mapbox.mapbox-streets-v8",
            "type": "vector"
        }
    },
    "sprite": "mapbox://sprites/cpal/ckd7i4sex01xb1io2dwpuevpl/53scw41v5rj9y91shygngdd49",
    "glyphs": "mapbox://fonts/cpal/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "land",
            "type": "background",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, land-and-water"
            },
            "layout": {},
            "paint": {"background-color": "#fcfcf8"}
        },
        {
            "id": "national-park",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, land-and-water"
            },
            "source": "composite",
            "source-layer": "landuse_overlay",
            "minzoom": 5,
            "filter": ["==", ["get", "class"], "national_park"],
            "layout": {},
            "paint": {
                "fill-color": "#f3f8e7",
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5,
                    0,
                    6,
                    0.5,
                    10,
                    0.5
                ]
            }
        },
        {
            "id": "landuse",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, land-and-water"
            },
            "source": "composite",
            "source-layer": "landuse",
            "minzoom": 5,
            "filter": [
                "match",
                ["get", "class"],
                ["park", "airport", "glacier", "pitch", "sand"],
                true,
                "cemetery",
                true,
                "school",
                true,
                "hospital",
                true,
                false
            ],
            "layout": {},
            "paint": {
                "fill-color": "#f3f8e7",
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5,
                    0,
                    6,
                    ["match", ["get", "class"], "glacier", 0.5, 1]
                ]
            }
        },
        {
            "id": "pitch-outline",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, land-and-water"
            },
            "source": "composite",
            "source-layer": "landuse",
            "minzoom": 15,
            "filter": ["==", ["get", "class"], "pitch"],
            "layout": {},
            "paint": {"line-color": "hsl(47, 35%, 95%)"}
        },
        {
            "id": "waterway",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, land-and-water"
            },
            "source": "composite",
            "source-layer": "waterway",
            "minzoom": 8,
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 11, "round"],
                "line-join": "round"
            },
            "paint": {
                "line-color": "#e4f0f6",
                "line-width": [
                    "interpolate",
                    ["exponential", 1.3],
                    ["zoom"],
                    9,
                    ["match", ["get", "class"], ["canal", "river"], 0.1, 0],
                    20,
                    ["match", ["get", "class"], ["canal", "river"], 8, 3]
                ],
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    8,
                    0,
                    8.5,
                    1
                ]
            }
        },
        {
            "id": "water",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, land-and-water"
            },
            "source": "composite",
            "source-layer": "water",
            "layout": {},
            "paint": {"fill-color": "#dff2fb"}
        },
        {
            "id": "water-pattern",
            "type": "fill",
            "source": "composite",
            "source-layer": "water",
            "layout": {},
            "paint": {
                "fill-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    0,
                    "#e4f0f6",
                    22,
                    "#e4f0f6"
                ],
                "fill-opacity": 0.5
            }
        },
        {
            "id": "land-structure-polygon",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, built"
            },
            "source": "composite",
            "source-layer": "structure",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["geometry-type"], "Polygon"],
                ["==", ["get", "class"], "land"]
            ],
            "layout": {},
            "paint": {"fill-color": "#f5f4ef"}
        },
        {
            "id": "land-structure-line",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, built"
            },
            "source": "composite",
            "source-layer": "structure",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["geometry-type"], "LineString"],
                ["==", ["get", "class"], "land"]
            ],
            "layout": {"line-cap": "round"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.99],
                    ["zoom"],
                    14,
                    0.75,
                    20,
                    40
                ],
                "line-color": "hsl(0, 0%, 99%)"
            }
        },
        {
            "id": "aeroway-polygon",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "transit",
                "mapbox:group": "Transit, built"
            },
            "source": "composite",
            "source-layer": "aeroway",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", ["geometry-type"], "Polygon"],
                [
                    "match",
                    ["get", "type"],
                    ["runway", "taxiway", "helipad"],
                    true,
                    false
                ]
            ],
            "layout": {},
            "paint": {
                "fill-color": "#f1f1ee",
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    11,
                    0,
                    11.5,
                    1
                ]
            }
        },
        {
            "id": "aeroway-line",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "transit",
                "mapbox:group": "Transit, built"
            },
            "source": "composite",
            "source-layer": "aeroway",
            "minzoom": 9,
            "filter": ["==", ["geometry-type"], "LineString"],
            "layout": {},
            "paint": {
                "line-color": "#f1f1ee",
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    9,
                    ["match", ["get", "type"], "runway", 1, 0.5],
                    18,
                    ["match", ["get", "type"], "runway", 80, 20]
                ]
            }
        },
        {
            "id": "building-outline",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "buildings",
                "mapbox:group": "Buildings, built"
            },
            "source": "composite",
            "source-layer": "building",
            "minzoom": 15,
            "filter": [
                "all",
                ["!=", ["get", "type"], "building:part"],
                ["==", ["get", "underground"], "false"]
            ],
            "layout": {"visibility": "none"},
            "paint": {
                "line-color": "hsl(0, 0%, 89%)",
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    15,
                    0.75,
                    20,
                    3
                ],
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "building",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "buildings",
                "mapbox:group": "Buildings, built"
            },
            "source": "composite",
            "source-layer": "building",
            "minzoom": 15,
            "filter": [
                "all",
                ["!=", ["get", "type"], "building:part"],
                ["==", ["get", "underground"], "false"]
            ],
            "layout": {},
            "paint": {
                "fill-color": "#f1f1ee",
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "tunnel-path",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., tunnels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                ["==", ["get", "class"], "path"],
                ["!=", ["get", "type"], "steps"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {"visibility": "none"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    15,
                    1,
                    18,
                    4
                ],
                "line-color": "hsl(0, 0%, 89%)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.75, 1]],
                    16,
                    ["literal", [1, 0.75]],
                    17,
                    ["literal", [1, 0.5]]
                ]
            }
        },
        {
            "id": "tunnel-steps",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., tunnels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                ["==", ["get", "class"], "steps"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {"visibility": "none"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    15,
                    1,
                    16,
                    1.6,
                    18,
                    6
                ],
                "line-color": "hsl(0, 0%, 89%)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.75, 1]],
                    16,
                    ["literal", [1, 0.75]],
                    17,
                    ["literal", [0.3, 0.3]]
                ]
            }
        },
        {
            "id": "tunnel-pedestrian",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., tunnels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                ["==", ["get", "class"], "pedestrian"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {"visibility": "none"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    18,
                    12
                ],
                "line-color": "hsl(0, 0%, 89%)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.5, 0.4]],
                    16,
                    ["literal", [1, 0.2]]
                ]
            }
        },
        {
            "id": "tunnel-simple",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "class"],
                        [
                            "motorway",
                            "motorway_link",
                            "trunk",
                            "trunk_link",
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited",
                            "primary_link",
                            "track"
                        ],
                        true,
                        false
                    ],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "motorway",
                            "motorway_link",
                            "trunk",
                            "trunk_link",
                            "primary",
                            "primary_link",
                            "secondary",
                            "secondary_link",
                            "tertiary",
                            "tertiary_link",
                            "street",
                            "street_limited",
                            "service",
                            "track"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    13,
                    [
                        "match",
                        ["get", "class"],
                        ["motorway", "trunk", "primary"],
                        4,
                        ["secondary", "tertiary"],
                        2.5,
                        [
                            "motorway_link",
                            "trunk_link",
                            "street",
                            "street_limited",
                            "primary_link"
                        ],
                        1,
                        0.5
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        ["motorway", "trunk", "primary"],
                        32,
                        ["secondary", "tertiary"],
                        26,
                        [
                            "motorway_link",
                            "trunk_link",
                            "street",
                            "street_limited",
                            "primary_link"
                        ],
                        18,
                        12
                    ]
                ],
                "line-color": "#f1f1ee"
            }
        },
        {
            "id": "road-path",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "class"], "path"],
                [
                    "step",
                    ["zoom"],
                    [
                        "!",
                        [
                            "match",
                            ["get", "type"],
                            ["steps", "sidewalk", "crossing"],
                            true,
                            false
                        ]
                    ],
                    16,
                    ["!=", ["get", "type"], "steps"]
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-join": ["step", ["zoom"], "miter", 14, "round"],
                "visibility": "none"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    13,
                    0.5,
                    14,
                    1,
                    15,
                    1,
                    18,
                    4
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.75, 1]],
                    16,
                    ["literal", [1, 0.75]],
                    17,
                    ["literal", [1, 0.5]]
                ]
            }
        },
        {
            "id": "road-steps",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", ["get", "type"], "steps"],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {"line-join": "round", "visibility": "none"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    15,
                    1,
                    16,
                    1.6,
                    18,
                    6
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.75, 1]],
                    16,
                    ["literal", [1, 0.75]],
                    17,
                    ["literal", [0.3, 0.3]]
                ]
            }
        },
        {
            "id": "road-pedestrian",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["get", "class"], "pedestrian"],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-join": ["step", ["zoom"], "miter", 14, "round"],
                "visibility": "none"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    18,
                    12
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.5, 0.4]],
                    16,
                    ["literal", [1, 0.2]]
                ]
            }
        },
        {
            "id": "road-simple",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 5,
            "filter": [
                "all",
                [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "class"],
                        ["motorway", "trunk"],
                        true,
                        false
                    ],
                    6,
                    [
                        "match",
                        ["get", "class"],
                        ["motorway", "trunk", "primary"],
                        true,
                        false
                    ],
                    8,
                    [
                        "match",
                        ["get", "class"],
                        ["motorway", "trunk", "primary", "secondary"],
                        true,
                        false
                    ],
                    10,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "motorway",
                            "trunk",
                            "primary",
                            "secondary",
                            "tertiary",
                            "motorway_link",
                            "trunk_link"
                        ],
                        true,
                        false
                    ],
                    11,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "motorway",
                            "motorway_link",
                            "trunk",
                            "trunk_link",
                            "primary",
                            "secondary",
                            "tertiary",
                            "street"
                        ],
                        true,
                        false
                    ],
                    12,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "motorway",
                            "motorway_link",
                            "trunk",
                            "trunk_link",
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited",
                            "primary_link"
                        ],
                        true,
                        false
                    ],
                    13,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "motorway",
                            "motorway_link",
                            "trunk",
                            "trunk_link",
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited",
                            "primary_link",
                            "track"
                        ],
                        true,
                        false
                    ],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "motorway",
                            "motorway_link",
                            "trunk",
                            "trunk_link",
                            "primary",
                            "primary_link",
                            "secondary",
                            "secondary_link",
                            "tertiary",
                            "tertiary_link",
                            "street",
                            "street_limited",
                            "service",
                            "track"
                        ],
                        true,
                        false
                    ]
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    7,
                    [
                        "match",
                        ["get", "class"],
                        ["motorway", "trunk", "primary"],
                        0.3,
                        ["secondary", "tertiary"],
                        0.1,
                        0
                    ],
                    13,
                    [
                        "match",
                        ["get", "class"],
                        ["motorway", "trunk", "primary"],
                        4,
                        ["secondary", "tertiary"],
                        2.5,
                        [
                            "motorway_link",
                            "trunk_link",
                            "primary_link",
                            "street",
                            "street_limited"
                        ],
                        1,
                        0.5
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        ["motorway", "trunk", "primary"],
                        32,
                        ["secondary", "tertiary"],
                        26,
                        [
                            "motorway_link",
                            "trunk_link",
                            "primary_link",
                            "street",
                            "street_limited"
                        ],
                        18,
                        10
                    ]
                ],
                "line-color": [
                    "match",
                    ["get", "class"],
                    [
                        "primary_link",
                        "secondary_link",
                        "tertiary_link",
                        "street",
                        "street_limited",
                        "service",
                        "track"
                    ],
                    "#f1f1ee",
                    "#f1f1ee"
                ]
            }
        },
        {
            "id": "bridge-case-simple",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges-case"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "class"],
                        [
                            "motorway",
                            "motorway_link",
                            "trunk",
                            "trunk_link",
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited",
                            "primary_link",
                            "track"
                        ],
                        true,
                        false
                    ],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "motorway",
                            "motorway_link",
                            "trunk",
                            "trunk_link",
                            "primary",
                            "primary_link",
                            "secondary",
                            "secondary_link",
                            "tertiary",
                            "tertiary_link",
                            "street",
                            "street_limited",
                            "service",
                            "track"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {"line-join": ["step", ["zoom"], "miter", 14, "round"]},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    13,
                    [
                        "match",
                        ["get", "class"],
                        ["motorway", "trunk", "primary"],
                        6,
                        ["secondary", "tertiary"],
                        4,
                        [
                            "motorway_link",
                            "trunk_link",
                            "street",
                            "street_limited",
                            "primary_link"
                        ],
                        2.5,
                        1.25
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        ["motorway", "trunk", "primary"],
                        36,
                        ["secondary", "tertiary"],
                        30,
                        [
                            "motorway_link",
                            "trunk_link",
                            "street",
                            "street_limited",
                            "primary_link"
                        ],
                        22,
                        16
                    ]
                ],
                "line-color": "hsl(0, 0%, 99%)"
            }
        },
        {
            "id": "bridge-path",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                ["==", ["get", "class"], "path"],
                ["==", ["geometry-type"], "LineString"],
                ["!=", ["get", "type"], "steps"]
            ],
            "layout": {"line-join": "round", "visibility": "none"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    15,
                    1,
                    18,
                    4
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.75, 1]],
                    16,
                    ["literal", [1, 0.75]],
                    17,
                    ["literal", [1, 0.5]]
                ]
            }
        },
        {
            "id": "bridge-steps",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", ["get", "type"], "steps"],
                ["==", ["get", "structure"], "bridge"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {"line-join": "round", "visibility": "none"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    15,
                    1,
                    16,
                    1.6,
                    18,
                    6
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.75, 1]],
                    16,
                    ["literal", [1, 0.75]],
                    17,
                    ["literal", [0.3, 0.3]]
                ]
            }
        },
        {
            "id": "bridge-pedestrian",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                ["==", ["get", "class"], "pedestrian"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {"line-join": "round", "visibility": "none"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    18,
                    12
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.5, 0.4]],
                    16,
                    ["literal", [1, 0.2]]
                ]
            }
        },
        {
            "id": "bridge-simple",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "class"],
                        ["motorway", "trunk"],
                        true,
                        false
                    ],
                    13,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "motorway",
                            "motorway_link",
                            "trunk",
                            "trunk_link",
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited",
                            "primary_link",
                            "track"
                        ],
                        true,
                        false
                    ],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "motorway",
                            "motorway_link",
                            "trunk",
                            "trunk_link",
                            "primary",
                            "primary_link",
                            "secondary",
                            "secondary_link",
                            "tertiary",
                            "tertiary_link",
                            "street",
                            "street_limited",
                            "service",
                            "track"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    13,
                    [
                        "match",
                        ["get", "class"],
                        ["motorway", "trunk", "primary"],
                        4,
                        ["secondary", "tertiary"],
                        2.5,
                        [
                            "motorway_link",
                            "trunk_link",
                            "street",
                            "street_limited",
                            "primary_link"
                        ],
                        1,
                        0.5
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        ["motorway", "trunk", "primary"],
                        32,
                        ["secondary", "tertiary"],
                        26,
                        [
                            "motorway_link",
                            "trunk_link",
                            "street",
                            "street_limited",
                            "primary_link"
                        ],
                        18,
                        12
                    ]
                ],
                "line-color": [
                    "match",
                    ["get", "class"],
                    [
                        "primary_link",
                        "secondary_link",
                        "tertiary_link",
                        "street",
                        "street_limited",
                        "service",
                        "track"
                    ],
                    "#f1f1ee",
                    "#f1f1ee"
                ]
            }
        },
        {
            "id": "admin-1-boundary-bg",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "admin-boundaries",
                "mapbox:group": "Administrative boundaries, admin"
            },
            "source": "composite",
            "source-layer": "admin",
            "filter": [
                "all",
                ["==", ["get", "admin_level"], 1],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"], ["all", "US"], true, false]
            ],
            "layout": {"line-join": "bevel"},
            "paint": {
                "line-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    8,
                    "hsl(0, 0%, 99%)",
                    16,
                    "hsl(53, 29%, 99%)"
                ],
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    7,
                    3.75,
                    12,
                    5.5
                ],
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    7,
                    0,
                    8,
                    0.75
                ],
                "line-dasharray": [1, 0],
                "line-translate": [0, 0],
                "line-blur": ["interpolate", ["linear"], ["zoom"], 3, 0, 8, 3]
            }
        },
        {
            "id": "admin-0-boundary-bg",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "admin-boundaries",
                "mapbox:group": "Administrative boundaries, admin"
            },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 1,
            "filter": [
                "all",
                ["==", ["get", "admin_level"], 0],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"], ["all", "US"], true, false]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    3,
                    3.5,
                    10,
                    8
                ],
                "line-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    6,
                    "hsl(0, 0%, 99%)",
                    8,
                    "hsl(53, 29%, 99%)"
                ],
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    3,
                    0,
                    4,
                    0.5
                ],
                "line-translate": [0, 0],
                "line-blur": ["interpolate", ["linear"], ["zoom"], 3, 0, 10, 2]
            }
        },
        {
            "id": "admin-1-boundary",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "admin-boundaries",
                "mapbox:group": "Administrative boundaries, admin"
            },
            "source": "composite",
            "source-layer": "admin",
            "filter": [
                "all",
                ["==", ["get", "admin_level"], 1],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"], ["all", "US"], true, false]
            ],
            "layout": {"line-join": "round", "line-cap": "round"},
            "paint": {
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [2, 0]],
                    7,
                    ["literal", [2, 2, 6, 2]]
                ],
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    7,
                    0.75,
                    12,
                    1.5
                ],
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    2,
                    0,
                    3,
                    1
                ],
                "line-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    3,
                    "hsl(53, 9%, 77%)",
                    7,
                    "hsl(53, 5%, 62%)"
                ]
            }
        },
        {
            "id": "admin-0-boundary",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "admin-boundaries",
                "mapbox:group": "Administrative boundaries, admin"
            },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 1,
            "filter": [
                "all",
                ["==", ["get", "admin_level"], 0],
                ["==", ["get", "disputed"], "false"],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"], ["all", "US"], true, false]
            ],
            "layout": {"line-join": "round", "line-cap": "round"},
            "paint": {
                "line-color": "hsl(53, 5%, 51%)",
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    3,
                    0.5,
                    10,
                    2
                ],
                "line-dasharray": [10, 0]
            }
        },
        {
            "id": "admin-0-boundary-disputed",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "admin-boundaries",
                "mapbox:group": "Administrative boundaries, admin"
            },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 1,
            "filter": [
                "all",
                ["==", ["get", "disputed"], "true"],
                ["==", ["get", "admin_level"], 0],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"], ["all", "US"], true, false]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-color": "hsl(53, 5%, 51%)",
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    3,
                    0.5,
                    10,
                    2
                ],
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [3.25, 3.25]],
                    6,
                    ["literal", [2.5, 2.5]],
                    7,
                    ["literal", [2, 2.25]],
                    8,
                    ["literal", [1.75, 2]]
                ]
            }
        },
        {
            "id": "road-label-simple",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, road-labels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "match",
                ["get", "class"],
                [
                    "motorway",
                    "trunk",
                    "primary",
                    "secondary",
                    "tertiary",
                    "street",
                    "street_limited"
                ],
                true,
                false
            ],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    10,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "motorway",
                            "trunk",
                            "primary",
                            "secondary",
                            "tertiary"
                        ],
                        10,
                        9
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "motorway",
                            "trunk",
                            "primary",
                            "secondary",
                            "tertiary"
                        ],
                        16,
                        14
                    ]
                ],
                "text-max-angle": 30,
                "text-font": [
                    "Halyard Display Light",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-padding": 1,
                "text-rotation-alignment": "map",
                "text-pitch-alignment": "viewport",
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                "text-letter-spacing": 0.1
            },
            "paint": {
                "text-color": "#73683b",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            }
        },
        {
            "id": "path-pedestrian-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., walking-cycling-labels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "step",
                ["zoom"],
                ["match", ["get", "class"], ["pedestrian"], true, false],
                15,
                ["match", ["get", "class"], ["path", "pedestrian"], true, false]
            ],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    10,
                    ["match", ["get", "class"], "pedestrian", 9, 6.5],
                    18,
                    ["match", ["get", "class"], "pedestrian", 14, 13]
                ],
                "text-max-angle": 30,
                "text-font": [
                    "Halyard Display Light",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-padding": 1,
                "visibility": "none",
                "text-rotation-alignment": "map",
                "text-pitch-alignment": "viewport",
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                "text-letter-spacing": 0.01
            },
            "paint": {
                "text-color": "#73683b",
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "waterway-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "natural-features",
                "mapbox:group": "Natural features, natural-labels"
            },
            "source": "composite",
            "source-layer": "natural_label",
            "minzoom": 13,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["canal", "river", "stream"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "text-font": [
                    "Halyard Display Book",
                    "Arial Unicode MS Regular"
                ],
                "text-max-angle": 30,
                "symbol-spacing": [
                    "interpolate",
                    ["linear", 1],
                    ["zoom"],
                    15,
                    250,
                    17,
                    400
                ],
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    13,
                    12,
                    18,
                    16
                ],
                "symbol-placement": "line",
                "text-pitch-alignment": "viewport",
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                "text-letter-spacing": 0.1
            },
            "paint": {"text-color": "#8399af"}
        },
        {
            "id": "natural-line-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "natural-features",
                "mapbox:group": "Natural features, natural-labels"
            },
            "source": "composite",
            "source-layer": "natural_label",
            "minzoom": 4,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["glacier", "landform"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"],
                ["<=", ["get", "filterrank"], 2]
            ],
            "layout": {
                "text-size": [
                    "step",
                    ["zoom"],
                    ["step", ["get", "sizerank"], 18, 5, 12],
                    17,
                    ["step", ["get", "sizerank"], 18, 13, 12]
                ],
                "text-max-angle": 30,
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                "text-font": [
                    "Halyard Display Book",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line-center",
                "text-pitch-alignment": "viewport"
            },
            "paint": {
                "text-halo-width": 0.5,
                "text-halo-color": "hsl(0, 5%, 100%)",
                "text-halo-blur": 0.5,
                "text-color": [
                    "step",
                    ["zoom"],
                    [
                        "step",
                        ["get", "sizerank"],
                        "hsl(26, 13%, 52%)",
                        5,
                        "hsl(26, 18%, 42%)"
                    ],
                    17,
                    [
                        "step",
                        ["get", "sizerank"],
                        "hsl(26, 13%, 52%)",
                        13,
                        "hsl(26, 18%, 42%)"
                    ]
                ]
            }
        },
        {
            "id": "natural-point-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "natural-features",
                "mapbox:group": "Natural features, natural-labels"
            },
            "source": "composite",
            "source-layer": "natural_label",
            "minzoom": 4,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["dock", "glacier", "landform", "water_feature", "wetland"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "Point"],
                ["<=", ["get", "filterrank"], 2]
            ],
            "layout": {
                "text-size": [
                    "step",
                    ["zoom"],
                    ["step", ["get", "sizerank"], 18, 5, 12],
                    17,
                    ["step", ["get", "sizerank"], 18, 13, 12]
                ],
                "icon-image": [
                    "step",
                    ["zoom"],
                    ["concat", ["get", "maki"], "-11"],
                    15,
                    ["concat", ["get", "maki"], "-15"]
                ],
                "text-font": [
                    "Halyard Display Book",
                    "Arial Unicode MS Regular"
                ],
                "text-offset": [
                    "step",
                    ["zoom"],
                    [
                        "step",
                        ["get", "sizerank"],
                        ["literal", [0, 0]],
                        5,
                        ["literal", [0, 0.75]]
                    ],
                    17,
                    [
                        "step",
                        ["get", "sizerank"],
                        ["literal", [0, 0]],
                        13,
                        ["literal", [0, 0.75]]
                    ]
                ],
                "text-anchor": [
                    "step",
                    ["zoom"],
                    ["step", ["get", "sizerank"], "center", 5, "top"],
                    17,
                    ["step", ["get", "sizerank"], "center", 13, "top"]
                ],
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]]
            },
            "paint": {
                "icon-opacity": [
                    "step",
                    ["zoom"],
                    ["step", ["get", "sizerank"], 0, 5, 1],
                    17,
                    ["step", ["get", "sizerank"], 0, 13, 1]
                ],
                "text-halo-color": "hsl(0, 5%, 100%)",
                "text-halo-width": 0.5,
                "text-halo-blur": 0.5,
                "text-color": [
                    "step",
                    ["zoom"],
                    [
                        "step",
                        ["get", "sizerank"],
                        "hsl(26, 13%, 52%)",
                        5,
                        "hsl(26, 18%, 42%)"
                    ],
                    17,
                    [
                        "step",
                        ["get", "sizerank"],
                        "hsl(26, 13%, 52%)",
                        13,
                        "hsl(26, 18%, 42%)"
                    ]
                ]
            }
        },
        {
            "id": "water-line-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "natural-features",
                "mapbox:group": "Natural features, natural-labels"
            },
            "source": "composite",
            "source-layer": "natural_label",
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["bay", "ocean", "reservoir", "sea", "water"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    7,
                    ["step", ["get", "sizerank"], 24, 6, 18, 12, 12],
                    10,
                    ["step", ["get", "sizerank"], 18, 9, 12],
                    18,
                    ["step", ["get", "sizerank"], 18, 9, 16]
                ],
                "text-max-angle": 30,
                "text-letter-spacing": [
                    "match",
                    ["get", "class"],
                    "ocean",
                    0.25,
                    ["sea", "bay"],
                    0.15,
                    0
                ],
                "text-font": [
                    "Halyard Display Book",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line-center",
                "text-pitch-alignment": "viewport",
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]]
            },
            "paint": {
                "text-color": [
                    "match",
                    ["get", "class"],
                    ["bay", "ocean", "sea"],
                    "rgb(237, 239, 244)",
                    "rgb(145, 145, 145)"
                ]
            }
        },
        {
            "id": "water-point-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "natural-features",
                "mapbox:group": "Natural features, natural-labels"
            },
            "source": "composite",
            "source-layer": "natural_label",
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["bay", "ocean", "reservoir", "sea", "water"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "Point"]
            ],
            "layout": {
                "text-line-height": 1.3,
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    7,
                    ["step", ["get", "sizerank"], 24, 6, 18, 12, 12],
                    10,
                    ["step", ["get", "sizerank"], 18, 9, 12]
                ],
                "text-font": [
                    "Halyard Display Book",
                    "Arial Unicode MS Regular"
                ],
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                "text-letter-spacing": [
                    "match",
                    ["get", "class"],
                    "ocean",
                    0.25,
                    ["bay", "sea"],
                    0.15,
                    0.01
                ],
                "text-max-width": [
                    "match",
                    ["get", "class"],
                    "ocean",
                    4,
                    "sea",
                    5,
                    ["bay", "water"],
                    7,
                    10
                ]
            },
            "paint": {
                "text-color": [
                    "match",
                    ["get", "class"],
                    ["bay", "ocean", "sea"],
                    "rgb(237, 239, 244)",
                    "rgb(145, 145, 145)"
                ]
            }
        },
        {
            "id": "poi-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "point-of-interest-labels",
                "mapbox:group": "Point of interest labels, poi-labels"
            },
            "source": "composite",
            "source-layer": "poi_label",
            "minzoom": 6,
            "filter": [
                "<=",
                ["get", "filterrank"],
                ["+", ["step", ["zoom"], 0, 16, 1, 17, 2], 2]
            ],
            "layout": {
                "text-size": [
                    "step",
                    ["zoom"],
                    ["step", ["get", "sizerank"], 18, 5, 12],
                    17,
                    ["step", ["get", "sizerank"], 18, 13, 12]
                ],
                "text-font": [
                    "Halyard Display Book",
                    "Arial Unicode MS Regular"
                ],
                "text-offset": [
                    "step",
                    ["zoom"],
                    [
                        "step",
                        ["get", "sizerank"],
                        ["literal", [0, 0]],
                        5,
                        ["literal", [0, 0.75]]
                    ],
                    17,
                    [
                        "step",
                        ["get", "sizerank"],
                        ["literal", [0, 0]],
                        13,
                        ["literal", [0, 0.75]]
                    ]
                ],
                "text-anchor": [
                    "step",
                    ["zoom"],
                    ["step", ["get", "sizerank"], "center", 5, "top"],
                    17,
                    ["step", ["get", "sizerank"], "center", 13, "top"]
                ],
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                "text-letter-spacing": 0.1,
                "icon-size": 0.6
            },
            "paint": {
                "icon-opacity": 0.5,
                "text-halo-color": [
                    "match",
                    ["get", "class"],
                    "park_like",
                    "hsl(65, 37%, 100%)",
                    "education",
                    "hsl(40, 28%, 100%)",
                    "medical",
                    "hsl(3, 41%, 100%)",
                    "hsl(0, 5%, 100%)"
                ],
                "text-halo-width": 0.5,
                "text-halo-blur": 0.5,
                "text-color": "#73683b"
            }
        },
        {
            "id": "transit-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "transit",
                "mapbox:group": "Transit, transit-labels"
            },
            "source": "composite",
            "source-layer": "transit_stop_label",
            "minzoom": 12,
            "filter": [
                "step",
                ["zoom"],
                [
                    "all",
                    [
                        "match",
                        ["get", "mode"],
                        "rail",
                        true,
                        "metro_rail",
                        true,
                        false
                    ],
                    ["!=", ["get", "stop_type"], "entrance"]
                ],
                15,
                [
                    "all",
                    [
                        "match",
                        ["get", "mode"],
                        "rail",
                        true,
                        "metro_rail",
                        true,
                        "light_rail",
                        true,
                        false
                    ],
                    ["!=", ["get", "stop_type"], "entrance"]
                ],
                16,
                [
                    "all",
                    [
                        "match",
                        ["get", "mode"],
                        "ferry",
                        false,
                        "bus",
                        false,
                        true
                    ],
                    ["!=", ["get", "stop_type"], "entrance"]
                ],
                17,
                [
                    "all",
                    ["match", ["get", "mode"], "ferry", false, true],
                    ["!=", ["get", "stop_type"], "entrance"]
                ],
                19,
                ["match", ["get", "mode"], "ferry", false, true]
            ],
            "layout": {
                "text-size": 12,
                "icon-image": ["get", "network"],
                "text-font": [
                    "Halyard Display Book",
                    "Arial Unicode MS Regular"
                ],
                "text-justify": [
                    "match",
                    ["get", "stop_type"],
                    "entrance",
                    "left",
                    "center"
                ],
                "text-offset": [
                    "match",
                    ["get", "stop_type"],
                    "entrance",
                    ["literal", [1, 0]],
                    ["literal", [0, 0.8]]
                ],
                "icon-size": 0.6,
                "text-anchor": [
                    "match",
                    ["get", "stop_type"],
                    "entrance",
                    "left",
                    "top"
                ],
                "text-field": [
                    "step",
                    ["zoom"],
                    "",
                    14,
                    [
                        "match",
                        ["get", "mode"],
                        ["rail", "metro_rail"],
                        ["coalesce", ["get", "name_en"], ["get", "name"]],
                        ""
                    ],
                    16,
                    [
                        "match",
                        ["get", "mode"],
                        ["bus", "bicycle"],
                        "",
                        ["coalesce", ["get", "name_en"], ["get", "name"]]
                    ],
                    18,
                    ["coalesce", ["get", "name_en"], ["get", "name"]]
                ],
                "text-letter-spacing": 0.1,
                "text-max-width": [
                    "match",
                    ["get", "stop_type"],
                    "entrance",
                    15,
                    9
                ]
            },
            "paint": {
                "text-halo-color": "hsl(0, 5%, 100%)",
                "text-color": [
                    "match",
                    ["get", "network"],
                    "tokyo-metro",
                    "hsl(180, 50%, 30%)",
                    "mexico-city-metro",
                    "hsl(25, 100%, 63%)",
                    [
                        "barcelona-metro",
                        "delhi-metro",
                        "hong-kong-mtr",
                        "milan-metro",
                        "osaka-subway"
                    ],
                    "hsl(0, 90%, 47%)",
                    ["boston-t", "washington-metro"],
                    "hsl(230, 18%, 20%)",
                    [
                        "chongqing-rail-transit",
                        "kiev-metro",
                        "singapore-mrt",
                        "taipei-metro"
                    ],
                    "hsl(140, 90%, 25%)",
                    "hsla(230, 55%, 42%, 0.65)"
                ],
                "text-halo-blur": 0.5,
                "text-halo-width": 0.5,
                "icon-opacity": 0
            }
        },
        {
            "id": "airport-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "transit",
                "mapbox:group": "Transit, transit-labels"
            },
            "source": "composite",
            "source-layer": "airport_label",
            "minzoom": 8,
            "layout": {
                "text-line-height": 1.1,
                "text-size": ["step", ["get", "sizerank"], 18, 9, 12],
                "text-font": [
                    "Halyard Display Book",
                    "Arial Unicode MS Regular"
                ],
                "text-offset": [0, 0.75],
                "text-rotation-alignment": "viewport",
                "text-anchor": "top",
                "text-field": [
                    "step",
                    ["get", "sizerank"],
                    ["coalesce", ["get", "name_en"], ["get", "name"]],
                    15,
                    ["get", "ref"]
                ],
                "text-letter-spacing": 0.01,
                "text-max-width": 9
            },
            "paint": {
                "text-color": "#73683b",
                "text-halo-color": "hsl(225, 20%, 100%)",
                "text-halo-width": 1
            }
        },
        {
            "id": "settlement-subdivision-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "place-labels",
                "mapbox:group": "Place labels, place-labels"
            },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 10,
            "maxzoom": 15,
            "filter": [
                "all",
                ["==", ["get", "class"], "settlement_subdivision"],
                ["<=", ["get", "filterrank"], 3]
            ],
            "layout": {
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                "text-transform": "uppercase",
                "text-font": [
                    "Halyard Display Book",
                    "Arial Unicode MS Regular"
                ],
                "text-letter-spacing": [
                    "match",
                    ["get", "type"],
                    "suburb",
                    0.15,
                    0.1
                ],
                "text-max-width": 7,
                "text-padding": 3,
                "text-size": [
                    "interpolate",
                    ["cubic-bezier", 0.5, 0, 1, 1],
                    ["zoom"],
                    13,
                    ["match", ["get", "type"], "suburb", 11, 10.5],
                    22,
                    ["match", ["get", "type"], "suburb", 17, 16]
                ]
            },
            "paint": {
                "text-halo-color": "hsla(0, 5%, 100%, 0.75)",
                "text-halo-width": 1,
                "text-color": "#73683b",
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "settlement-minor-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "place-labels",
                "mapbox:group": "Place labels, place-labels"
            },
            "source": "composite",
            "source-layer": "place_label",
            "maxzoom": 15,
            "filter": [
                "all",
                ["<=", ["get", "filterrank"], 3],
                ["==", ["get", "class"], "settlement"],
                [
                    "step",
                    ["zoom"],
                    true,
                    8,
                    [">=", ["get", "symbolrank"], 11],
                    10,
                    [">=", ["get", "symbolrank"], 12],
                    11,
                    [">=", ["get", "symbolrank"], 13],
                    12,
                    [">=", ["get", "symbolrank"], 15],
                    13,
                    [">=", ["get", "symbolrank"], 11],
                    14,
                    [">=", ["get", "symbolrank"], 13]
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate",
                    ["cubic-bezier", 0.2, 0, 0.9, 1],
                    ["zoom"],
                    8,
                    [
                        "step",
                        ["get", "symbolrank"],
                        12,
                        9,
                        11,
                        10,
                        10.5,
                        12,
                        9.5,
                        14,
                        8.5,
                        16,
                        6.5,
                        17,
                        4
                    ],
                    13,
                    [
                        "step",
                        ["get", "symbolrank"],
                        25,
                        9,
                        23,
                        10,
                        21,
                        11,
                        19,
                        12,
                        18,
                        13,
                        17,
                        15,
                        15
                    ]
                ],
                "icon-image": "",
                "text-font": [
                    "Halyard Display Book",
                    "Arial Unicode MS Regular"
                ],
                "text-justify": [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "text_anchor"],
                        ["left", "bottom-left", "top-left"],
                        "left",
                        ["right", "bottom-right", "top-right"],
                        "right",
                        "center"
                    ],
                    8,
                    "center"
                ],
                "text-offset": [
                    "step",
                    ["zoom"],
                    ["literal", [0, 0]],
                    8,
                    ["literal", [0, 0]]
                ],
                "text-anchor": ["step", ["zoom"], "center", 8, "center"],
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                "text-letter-spacing": 0.1,
                "text-max-width": 7
            },
            "paint": {
                "text-color": "#73683b",
                "text-halo-color": "hsl(0, 5%, 100%)",
                "text-halo-width": 1,
                "icon-opacity": ["step", ["zoom"], 1, 8, 0],
                "text-halo-blur": 1
            }
        },
        {
            "id": "settlement-major-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "place-labels",
                "mapbox:group": "Place labels, place-labels"
            },
            "source": "composite",
            "source-layer": "place_label",
            "maxzoom": 15,
            "filter": [
                "all",
                ["<=", ["get", "filterrank"], 3],
                ["==", ["get", "class"], "settlement"],
                [
                    "step",
                    ["zoom"],
                    false,
                    8,
                    ["<", ["get", "symbolrank"], 11],
                    10,
                    ["<", ["get", "symbolrank"], 12],
                    11,
                    ["<", ["get", "symbolrank"], 13],
                    12,
                    ["<", ["get", "symbolrank"], 15],
                    13,
                    [">=", ["get", "symbolrank"], 11],
                    14,
                    [">=", ["get", "symbolrank"], 13]
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate",
                    ["cubic-bezier", 0.2, 0, 0.9, 1],
                    ["zoom"],
                    8,
                    ["step", ["get", "symbolrank"], 18, 9, 17, 10, 15],
                    15,
                    [
                        "step",
                        ["get", "symbolrank"],
                        28,
                        9,
                        26,
                        10,
                        23,
                        11,
                        21,
                        12,
                        20,
                        13,
                        19,
                        15,
                        16
                    ]
                ],
                "icon-image": "",
                "text-transform": "uppercase",
                "text-font": [
                    "Halyard Display Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-justify": [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "text_anchor"],
                        ["left", "bottom-left", "top-left"],
                        "left",
                        ["right", "bottom-right", "top-right"],
                        "right",
                        "center"
                    ],
                    8,
                    "center"
                ],
                "text-offset": [
                    "step",
                    ["zoom"],
                    ["literal", [0, 0]],
                    8,
                    ["literal", [0, 0]]
                ],
                "text-anchor": ["step", ["zoom"], "center", 8, "center"],
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                "text-letter-spacing": 0.1,
                "text-max-width": 7
            },
            "paint": {
                "text-color": "#73683b",
                "text-halo-color": "hsl(0, 5%, 100%)",
                "text-halo-width": 1,
                "icon-opacity": ["step", ["zoom"], 1, 8, 0],
                "text-halo-blur": 1
            }
        },
        {
            "id": "state-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "place-labels",
                "mapbox:group": "Place labels, place-labels"
            },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 3,
            "maxzoom": 9,
            "filter": ["==", ["get", "class"], "state"],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["cubic-bezier", 0.85, 0.7, 0.65, 1],
                    ["zoom"],
                    4,
                    ["step", ["get", "symbolrank"], 10, 6, 9.5, 7, 9],
                    9,
                    ["step", ["get", "symbolrank"], 24, 6, 18, 7, 14]
                ],
                "text-transform": "uppercase",
                "text-font": ["Halyard Display Book", "Arial Unicode MS Bold"],
                "text-field": [
                    "step",
                    ["zoom"],
                    [
                        "step",
                        ["get", "symbolrank"],
                        ["coalesce", ["get", "name_en"], ["get", "name"]],
                        5,
                        [
                            "coalesce",
                            ["get", "abbr"],
                            ["get", "name_en"],
                            ["get", "name"]
                        ]
                    ],
                    5,
                    ["coalesce", ["get", "name_en"], ["get", "name"]]
                ],
                "text-letter-spacing": 0.15,
                "text-max-width": 6
            },
            "paint": {
                "text-color": "#73683b",
                "text-halo-color": "hsl(0, 5%, 100%)",
                "text-halo-width": 1
            }
        },
        {
            "id": "country-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "place-labels",
                "mapbox:group": "Place labels, place-labels"
            },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 1,
            "maxzoom": 10,
            "filter": ["==", ["get", "class"], "country"],
            "layout": {
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                "text-transform": "uppercase",
                "text-line-height": 1.1,
                "text-max-width": 6,
                "text-font": [
                    "Halyard Display Book",
                    "Arial Unicode MS Regular"
                ],
                "text-offset": ["literal", [0, 0]],
                "text-justify": [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "text_anchor"],
                        ["left", "bottom-left", "top-left"],
                        "left",
                        ["right", "bottom-right", "top-right"],
                        "right",
                        "center"
                    ],
                    7,
                    "center"
                ],
                "text-size": [
                    "interpolate",
                    ["cubic-bezier", 0.2, 0, 0.7, 1],
                    ["zoom"],
                    1,
                    ["step", ["get", "symbolrank"], 11, 4, 9, 5, 8],
                    9,
                    ["step", ["get", "symbolrank"], 28, 4, 22, 5, 21]
                ]
            },
            "paint": {
                "icon-opacity": [
                    "step",
                    ["zoom"],
                    ["case", ["has", "text_anchor"], 1, 0],
                    7,
                    0
                ],
                "text-color": "hsl(53, 17%, 29%)",
                "text-halo-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    2,
                    "hsla(0, 5%, 100%, 0.75)",
                    3,
                    "hsl(0, 5%, 100%)"
                ],
                "text-halo-width": 1.25
            }
        }
    ],
    "created": "2020-07-29T15:06:12.073Z",
    "id": "ckd7i4sex01xb1io2dwpuevpl",
    "modified": "2020-07-30T20:04:54.733Z",
    "owner": "cpal",
    "visibility": "private",
    "draft": false
}
