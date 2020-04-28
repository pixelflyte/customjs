//BroadWest Amenities via mapbox
//Alyssa Butler, alyssa@alyssabutler.co

//initialize mapboxgl
mapboxgl.accessToken = 'pk.eyJ1IjoiZGVsZXZhbnRlY3JlYXRpdmUiLCJhIjoiY2s4NHh4YmtmMDE1cDNucGY3YTY4MmN3eiJ9.Q8TdTGGZSV98FSloKU-lHQ';

//custom marker(s)
var broadwest = {
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'properties': {
        'iconSize': [50, 50]/*,
        'message': 'Foo'*/
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.794014, 36.154641]
      }
    }
  ]
};

//dataset variables

  //define colors
  var entertainmentColor = '#5A829B';
  var groceryColor = '#2C9971';
  var hotelsColor = '#F2B761';
  var residentialColor = '#99682C';
  var foodBevColor = '#87362B';

var entertainment = {
  'type': 'FeatureCollection',
  'features': [
    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.778178, 36.160999]
        },
      'properties': {
        'name': 'Tootsies Orchid Lounge',
        'description':'<strong>Tootsies Orchid Lounge</strong><p>422 Broadway<br>Nashville TN</p>',
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.778132, 36.160608]
        },
      'properties': {
        'name': "Rippy's Bar & Grill",
        'description':"<strong>Rippy's Bar & Grill</strong><p>429 Broadway<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.777994, 36.161198]
        },
      'properties': {
        'name': "Robert's Western World",
        'description':"<strong>Robert's Western World</strong><p>416 Broadway<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.777796, 36.161097]
        },
      'properties': {
        'name': "The Stage on Broadway",
        'description':"<strong>The Stage on Broadway</strong><p>412 Broadway<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.776745, 36.161085]
        },
      'properties': {
        'name': "Honky Tonk Central",
        'description':"<strong>Honky Tonk Central</strong><p>329 Broadway<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.775178, 36.162956]
        },
      'properties': {
        'name': "Wildhorse Saloon",
        'description':"<strong>Wildhorse Saloon</strong><p>120 2nd Ave N<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.775955, 36.163619]
        },
      'properties': {
        'name': "B.B. King's Blues Club",
        'description':"<strong>B.B. King's Blues Club</strong><p>152 2nd Ave N<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.804396, 36.151654]
        },
      'properties': {
        'name': "EXIT/IN",
        'description':"<strong>EXIT/IN</strong><p>2208 Elliston<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.778450, 36.161499]
        },
      'properties': {
        'name': "Ryman Auditorium",
        'description':"<strong>Ryman Auditorium</strong><p>116 5th Ave N<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.772776, 36.159385]
        },
      'properties': {
        'name': "Ascend Amphitheater",
        'description':"<strong>Ascend Amphitheater</strong><p>301 1st Ave S<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.781968, 36.165106]
        },
      'properties': {
        'name': "TPAC",
        'description':"<strong>TPAC</strong><p>505 Deaderick St<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.775403, 36.159714]
        },
      'properties': {
        'name': "Schermerhorn Symphony",
        'description':"<strong>Schermerhorn Symphony</strong><p>1 Symphony Pl<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.780528, 36.153005]
        },
      'properties': {
        'name': "Mercy Lounge",
        'description':"<strong>Mercy Lounge</strong><p>1 Cannery Row<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.784531, 36.152596]
        },
      'properties': {
        'name': "The Station Inn",
        'description':"<strong>The Station Inn</strong><p>402 12 Ave S<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.788072, 36.157909]
        },
      'properties': {
        'name': "12th & Porter",
        'description':"<strong>12th & Porter</strong><p>114 12th Ave N<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.790056, 36.153332]
        },
      'properties': {
        'name': "Tin Roof",
        'description':"<strong>Tin Roof</strong><p>1516 Demonbreun St<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.803850, 36.151135]
        },
      'properties': {
        'name': "The End",
        'description':"<strong>The End</strong><p>2219 Elliston Pl<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.780076, 36.151843]
        },
      'properties': {
        'name': "Rudy's Jazz Room",
        'description':"<strong>Rudy's Jazz Room</strong><p>809 Gleaves St<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.784034, 36.151246]
        },
      'properties': {
        'name': "Sambuca",
        'description':"<strong>Sambuca</strong><p>610 12th Ave S<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.811000, 36.144886]
        },
      'properties': {
        'name': "Commodore Grille",
        'description':"<strong>Commodore Grille</strong><p>2613 West End Ave<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796748, 36.149699]
        },
      'properties': {
        'name': "Losers Bar & Grill",
        'description':"<strong>Losers Bar & Grill</strong><p>1911 Division St<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.797071, 36.152922]
        },
      'properties': {
        'name': "Analog",
        'description':"<strong>Analog</strong><p>1808 West End Ave<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.797707, 36.151396]
        },
      'properties': {
        'name': "The Row",
        'description':"<strong>The Row</strong><p>110 Lyle Ave<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.797319, 36.164168]
        },
      'properties': {
        'name': "Marathon Music Works",
        'description':"<strong>Marathon Music Works</strong><p>1402 Clinton St<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.812611, 36.145916]
        },
      'properties': {
        'name': "The Local",
        'description':"<strong>The Local</strong><p>110 28th Ave N<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.812309, 36.146352]
        },
      'properties': {
        'name': "Springwater",
        'description':"<strong>Springwater</strong><p>115 27th Ave N<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.776335, 36.152236]
        },
      'properties': {
        'name': "City Winery",
        'description':"<strong>City Winery</strong><p>609 Lafayette St<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.793521, 36.156721]
        },
      'properties': {
        'name': "Play Dance Bar",
        'description':"<strong>Play Dance Bar</strong><p>1519 Church St<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796041, 36.155518]
        },
      'properties': {
        'name': "WKNO Hang Suite",
        'description':"<strong>WKNO Hang Suite</strong><p>1703 Church St<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.793342, 36.156811]
        },
      'properties': {
        'name': "Tribe",
        'description':"<strong>Tribe</strong><p>1517 Church St<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.784648, 36.151928]
        },
      'properties': {
        'name': "The Back Room",
        'description':"<strong>The Back Room</strong><p>505 12th Ave S<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.788044, 36.158576]
        },
      'properties': {
        'name': "16-Bit Bar + Arcade and Pins Mechanical Co.",
        'description':"<strong>16-Bit Bar + Arcade and Pins Mechanical Co.</strong><p>1102 Grundy St<br>Nashville TN</p>",
        'color': entertainmentColor
        }
    } // end location point
  ] // end array
};

var grocery = {
  'type': 'FeatureCollection',
  'features': [
    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.791501, 36.162395]
        },
      'properties': {
        'name': 'Publix',
        'description': '<strong>Publix</strong><p>1100 Charlotte Ave.<br>Nashville TN</p>',
        'color': groceryColor
      },
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.788577, 36.156783]
        },
      'properties': {
        'name': 'Whole Foods',
        'description': '<strong>Whole Foods</strong><p>1214 Broadway<br>Nashville TN</p>',
        'color': groceryColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.785350, 36.152670]
        },
      'properties': {
        'name': 'Turnip Truck',
        'description': '<strong>Turnip Truck</strong><p>321 12th Ave S<br>Nashville TN</p>',
        'color': groceryColor
        }
    } // end location point
  ] //end array
};

var hotels = {
  'type': 'FeatureCollection',
  'features': [
    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.795486, 36.152794]
        },
      'properties': {
        'name': 'Aloft Nashville',
        'description': '<strong>Aloft Nashville</strong><p>1719 West End Ave<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796614, 36.153547]
        },
      'properties': {
        'name': 'Residence Inn by Marriott',
        'description': '<strong>Residence Inn by Marriott</strong><p>1801 Hayes<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796255, 36.153147]
        },
      'properties': {
        'name': 'Spring Hill Suites',
        'description': '<strong>Spring Hill Suites</strong><p>1800 West End Ave<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.797082, 36.152905]
        },
      'properties': {
        'name': 'Hutton Hotel',
        'description': '<strong>Hutton Hotel</strong><p>1808 West End Ave<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.798837, 36.152803]
        },
      'properties': {
        'name': 'Hayes Street Hotel',
        'description': '<strong>Hayes Street Hotel</strong><p>1909 Hayes<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.797592, 36.151846]
        },
      'properties': {
        'name': 'Marriott Courtyard',
        'description': '<strong>Marriott Courtyard</strong><p>1901 West End Ave<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.798616, 36.151158]
        },
      'properties': {
        'name': 'Hampton Inn',
        'description': '<strong>Hampton Inn</strong><p>1919 West End Ave<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.802196, 36.150820]
        },
      'properties': {
        'name': 'Loews Vanderbilt',
        'description': '<strong>Loews Vanderbilt</strong><p>2100 West End Ave<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.798522, 36.148683]
        },
      'properties': {
        'name': 'Kimpton Aertson',
        'description': '<strong>Kimpton Aertson</strong><p>2021 Broadway<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.795854, 36.151104]
        },
      'properties': {
        'name': 'Embassy Suites',
        'description': '<strong>Embassy Suites</strong><p>1811 Broadway<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.794777, 36.152186]
        },
      'properties': {
        'name': 'Hilton Garden',
        'description': '<strong>Hilton Garden</strong><p>1715 Broadway<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.794373, 36.151565]
        },
      'properties': {
        'name': 'Homes2Suites by Hilton',
        'description': '<strong>Homes2Suites by Hilton</strong><p>1800 Division<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.789103, 36.151348]
        },
      'properties': {
        'name': 'Best Western Music Row',
        'description': '<strong>Best Western Music Row</strong><p>1407 Division<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.788711, 36.152796]
        },
      'properties': {
        'name': 'Comfort Inn Downtown Nashville-Vanderbilt',
        'description': '<strong>Comfort Inn Downtown Nashville-Vanderbilt</strong><p>1501 Demonbreun<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.784079, 36.152570]
        },
      'properties': {
        'name': 'Thompson Hotel',
        'description': '<strong>Thompson Hotel</strong><p>401 11th Ave S<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.784463, 36.152432]
        },
      'properties': {
        'name': '404 Hotel',
        'description': '<strong>404 Hotel</strong><p>404 12th Ave S<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.782744, 36.151076]
        },
      'properties': {
        'name': 'Stay Alfred at The James',
        'description': '<strong>Stay Alfred at The James</strong><p>1002 Division<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.781588, 36.150392]
        },
      'properties': {
        'name': 'Fairfield Inn & Suites',
        'description': '<strong>Fairfield Inn & Suites</strong><p>901 Division<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.778740, 36.164049]
        },
      'properties': {
        'name': 'Noelle',
        'description': '<strong>Noelle</strong><p>200 4th Ave N<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.778476, 36.163736]
        },
      'properties': {
        'name': 'Courtyard by Marriott',
        'description': '<strong>Courtyard by Marriott</strong><p>170 4th Ave N<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.778784, 36.165271]
        },
      'properties': {
        'name': 'Hotel Indigo',
        'description': '<strong>Hotel Indigo</strong><p>301 Union St<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.782609, 36.163720]
        },
      'properties': {
        'name': 'Hermitage Hotel',
        'description': '<strong>Hermitage Hotel</strong><p>231 6th Ave N<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.780361, 36.165330]
        },
      'properties': {
        'name': 'Doubletree',
        'description': '<strong>Doubletree</strong><p>315 4th Ave N<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.777229, 36.160050]
        },
      'properties': {
        'name': 'Hilton',
        'description': '<strong>Hilton</strong><p>121 4th Ave S<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.779654, 36.160632]
        },
      'properties': {
        'name': 'Renaissance',
        'description': '<strong>Renaissance</strong><p>611 Commerce St<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.779065, 36.164727]
        },
      'properties': {
        'name': 'The Bobby',
        'description': '<strong>The Bobby</strong><p>230 4th Ave N<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.782852, 36.162989]
        },
      'properties': {
        'name': 'Sheraton Grand',
        'description': '<strong>Sheraton Grand</strong><p>623 Union St<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.779939, 36.164843]
        },
      'properties': {
        'name': 'Fairlane Hotel',
        'description': '<strong>Fairlane Hotel</strong><p>401 Union St<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.777787, 36.165269]
        },
      'properties': {
        'name': '21 c Museum Hotel',
        'description': '<strong>21 c Museum Hotel</strong><p>221 2nd Ave N<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.783187, 36.162159]
        },
      'properties': {
        'name': 'Homewood Suites',
        'description': '<strong>Homewood Suites</strong><p>706 Church St<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.781106, 36.160459]
        },
      'properties': {
        'name': 'Holston House',
        'description': '<strong>Holston House</strong><p>118 7th Ave N<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.783737, 36.163151]
        },
      'properties': {
        'name': 'The Capitol Hotel',
        'description': '<strong>The Capitol Hotel</strong><p>711 Union St<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.780567, 36.155501]
        },
      'properties': {
        'name': 'The Westin Nashville',
        'description': '<strong>The Westin Nashville</strong><p>807 Clark<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.781024, 36.157792]
        },
      'properties': {
        'name': 'Cambria Hotel',
        'description': '<strong>Cambria Hotel</strong><p>118 8th Ave S<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.784247, 36.158771]
        },
      'properties': {
        'name': 'Holiday Inn Express Nashville-Downtown',
        'description': '<strong>Holiday Inn Express Nashville-Downtown</strong><p>920 Broadway<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.784736, 36.157301]
        },
      'properties': {
        'name': 'Union Station Hotel',
        'description': '<strong>Union Station Hotel</strong><p>1001 Broadway<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.773769, 36.157223]
        },
      'properties': {
        'name': 'Hilton Garden Inn Nashville',
        'description': '<strong>Hilton Garden Inn Nashville</strong><p>305 Korean Veterans Blvd<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.774736, 36.157762]
        },
      'properties': {
        'name': 'Hampton Inn & Suites',
        'description': '<strong>Hampton Inn & Suites</strong><p>310 4th Ave S<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.774225, 36.158376]
        },
      'properties': {
        'name': 'Hyatt Place Nashville Downtown',
        'description': '<strong>Hyatt Place Nashville Downtown</strong><p>301 3rd Ave S<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.775403, 36.157271]
        },
      'properties': {
        'name': 'Omni',
        'description': '<strong>Omni</strong><p>250 5th Ave S<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.781135, 36.156527]
        },
      'properties': {
        'name': 'J W Marriott',
        'description': '<strong>J W Marriott</strong><p>201 8th Ave S<br>Nashville TN</p>',
        'color': hotelsColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.778967, 36.164237]
        },
      'properties': {
        'name': 'Dream Hotel',
        'description': '<strong>Dream Hotel</strong><p>210 4th Ave N<br>Nashville TN</p>',
        'color': hotelsColor
        }
    } // end location point
  ] // end array
};

var residential = {
  'type': 'FeatureCollection',
  'features': [
    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.789507, 36.152669]
        },
      'properties': {
        'name': '1505 Demonbreun',
        'description': '<strong>1505 Demonbreun</strong><br><p>1505 Demonbreun Street<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.798647, 36.154948]
        },
      'properties': {
        'name': '1818 Church',
        'description': '<strong>1818 Church</strong><br><p>1818 Church Street<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.817709, 36.154927]
        },
      'properties': {
        'name': '2700 Charlotte Ave',
        'description': '<strong>2700 Charlotte Ave</strong><br><p>2700 Charlotte Ave<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.783163, 36.168509]
        },
      'properties': {
        'name': 'The 500 Fifth',
        'description': '<strong>The 500 Fifth</strong><br><p>500 5th Avenue North<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.780376, 36.162825]
        },
      'properties': {
        'name': '505',
        'description': '<strong>505</strong><br><p>505 Church Street<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.794941, 36.149129]
        },
      'properties': {
        'name': 'Artisan on 18th',
        'description': '<strong>Artisan on 18th</strong><br><p>819 18th Avenue South<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.792932, 36.153454]
        },
      'properties': {
        'name': 'The Cadence',
        'description': '<strong>The Cadence</strong><br><p>1600 McGavock Street<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.809984, 36.156607]
        },
      'properties': {
        'name': 'Charlotte at Midtown',
        'description': '<strong>Charlotte at Midtown</strong><br><p>2400 Charlotte Avenue<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.766786, 36.157449]
        },
      'properties': {
        'name': 'City View',
        'description': '<strong>City View</strong><br><p>210 Middleton Street<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.780866, 36.162532]
        },
      'properties': {
        'name': 'Cumberland on Church Apartments',
        'description': '<strong>Cumberland on Church Apartments</strong><br><p>555 Church Street<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.803574, 36.152578]
        },
      'properties': {
        'name': 'The Dallas on Elliston',
        'description': '<strong>The Dallas on Elliston</strong><br><p>2110 Elliston Place<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.815366, 36.147278]
        },
      'properties': {
        'name': 'Duet',
        'description': '<strong>Duet</strong><br><p>301 29th Avenue North<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.805186, 36.153137]
        },
      'properties': {
        'name': 'Edge Midtown',
        'description': '<strong>Edge Midtown</strong><br><p>301 22nd Avenue North<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.790612, 36.152552]
        },
      'properties': {
        'name': 'Element Music Row',
        'description': '<strong>Element Music Row</strong><br><p>1515 Demonbreun Street<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.789403, 36.161091]
        },
      'properties': {
        'name': 'Eleven North',
        'description': '<strong>Eleven North</strong><br><p>210 11th Avenue North<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.805709, 36.150405]
        },
      'properties': {
        'name': 'Elliston 23',
        'description': '<strong>Elliston 23</strong><br><p>2300 Elliston Place<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.794991, 36.179404]
        },
      'properties': {
        'name': 'Evergreen at Werthan',
        'description': '<strong>Evergreen at Werthan</strong><br><p>1600 Rosa L Parks Blvd<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.791823, 36.179287]
        },
      'properties': {
        'name': 'The Flats at Taylor Place',
        'description': '<strong>The Flats at Taylor Place</strong><br><p>1515 5th Avenue North<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.789621, 36.158739]
        },
      'properties': {
        'name': 'The Gossett on Church',
        'description': '<strong>The Gossett on Church</strong><br><p>1201 Church Street<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.801755, 36.133290]
        },
      'properties': {
        'name': 'Hayes House Hillsboro Village',
        'description': '<strong>Hayes House Hillsboro Village</strong><br><p>2101 Portland Avenue<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.797360, 36.162388]
        },
      'properties': {
        'name': 'John Henry Hale',
        'description': '<strong>John Henry Hale</strong><br><p>1433 Jo Johnston Avenue<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.795590, 36.149695]
        },
      'properties': {
        'name': 'The Morris',
        'description': '<strong>The Morris</strong><br><p>818 19th Avenue South<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.793285, 36.141254]
        },
      'properties': {
        'name': 'Note16',
        'description': '<strong>Note16</strong><br><p>1520 Horton Avenue<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.787376, 36.151442]
        },
      'properties': {
        'name': 'Novel Music Row',
        'description': '<strong>Novel Music Row</strong><br><p>1221 Division Street<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.797474, 36.156975]
        },
      'properties': {
        'name': 'Olympus Midtown',
        'description': '<strong>Olympus Midtown</strong><br><p>1700 State Street<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.809131, 36.149107]
        },
      'properties': {
        'name': 'ParkCentral',
        'description': '<strong>ParkCentral</strong><br><p>220 25th Avenue North<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.788268, 36.180243]
        },
      'properties': {
        'name': 'Peyton Stakes',
        'description': '<strong>Peyton Stakes</strong><br><p>1401 3rd Avenue North<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.782159, 36.152926]
        },
      'properties': {
        'name': 'Pine Street Flats',
        'description': '<strong>Pine Street Flats</strong><br><p>1055 Pine Street<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.798355, 36.148897]
        },
      'properties': {
        'name': 'Residences at Aertson Midtown',
        'description': '<strong>Residences at Aertson Midtown</strong><br><p>905 20th Avenue South<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.764819, 36.157170]
        },
      'properties': {
        'name': 'River House',
        'description': '<strong>River House</strong><br><p>4 Academy Place<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.793766, 36.152913]
        },
      'properties': {
        'name': 'SkyHouse Nashville',
        'description': '<strong>SkyHouse Nashville</strong><br><p>111 17th Avenue South<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.774107, 36.159613]
        },
      'properties': {
        'name': 'SoBro',
        'description': '<strong>SoBro</strong><br><p>205 Demonbreun Street<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.778291, 36.165592]
        },
      'properties': {
        'name': 'The Stahlman Building',
        'description': '<strong>The Stahlman Building</strong><br><p>211 Union Street<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.766630, 36.156460]
        },
      'properties': {
        'name': 'Terra House',
        'description': '<strong>Terra House</strong><br><p>115 Middleton Street<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.798523, 36.147856]
        },
      'properties': {
        'name': 'Twenty & Grand',
        'description': '<strong>Twenty & Grand</strong><br><p>2000 Grand Avenue<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.783464, 36.153329]
        },
      'properties': {
        'name': 'Velocity in the Gulch',
        'description': '<strong>Velocity in the Gulch</strong><br><p>320 11th Avenue South<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.800456, 36.138183]
        },
      'properties': {
        'name': 'Village 21',
        'description': '<strong>Village 21</strong><br><p>1620 21st Avenue South<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.788882, 36.174671]
        },
      'properties': {
        'name': 'Vista Germantown',
        'description': '<strong>Vista Germantown</strong><br><p>515 Madison Street<br>Nashville TN</p>',
        'color': residentialColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.816508, 36.146234]
        },
      'properties': {
        'name': 'West End Village',
        'description': '<strong>West End Village</strong><br><p>221 31st Avenue North<br>Nashville TN</p>',
        'color': residentialColor
        }
    } // end location point
  ] // end array
};

var foodBev = {
  'type': 'FeatureCollection',
  'features': [
    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796016, 36.153316]
        },
      'properties': {
        'name': 'Golden Coast',
        'description': '<strong>Golden Coast</strong><br><p>1722 West End Ave<br>Nashville TN</p>',
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.795486, 36.152785]
        },
      'properties': {
        'name': 'Goten Japanese',
        'description': '<strong>Goten Japanese</strong><br><p>1719 West End Ave<br>Nashville TN</p>',
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796245, 36.153121]
        },
      'properties': {
        'name': "Inchin’s Bamboo Garden",
        'description': "<strong>Inchin’s Bamboo Garden</strong><br><p>1800 West End Ave<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.797071, 36.152896]
        },
      'properties': {
        'name': 'Mane & Rye Dinerant',
        'description': '<strong>Mane & Rye Dinerant</strong><br><p>1808 West End Ave<br>Nashville TN</p>',
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.798514, 36.152968]
        },
      'properties': {
        'name': 'Las Palmas',
        'description': '<strong>Las Palmas</strong><br><p>1905 Hayes<br>Nashville TN</p>',
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.799033, 36.151901]
        },
      'properties': {
        'name': 'Saltine',
        'description': '<strong>Saltine</strong><br><p>1918 West End Ave<br>Nashville TN</p>',
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.799342, 36.151706]
        },
      'properties': {
        'name': 'Amerigo',
        'description': '<strong>Amerigo</strong><br><p>1920 West End Ave<br>Nashville TN</p>',
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.800752, 36.150966]
        },
      'properties': {
        'name': 'Five Guys',
        'description': '<strong>Five Guys</strong><br><p>2020 West End Ave<br>Nashville TN</p>',
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.800954, 36.150808]
        },
      'properties': {
        'name': "Jason’s Deli",
        'description': "<strong>Jason’s Deli</strong><br><p>2028 West End Ave<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.801184, 36.150966]
        },
      'properties': {
        'name': 'PizzaRev Taproom',
        'description': '<strong>PizzaRev Taproom</strong><br><p>2032 West End Ave<br>Nashville TN</p>',
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.802196, 36.150829]
        },
      'properties': {
        'name': "Ruth’s Chris Steak House",
        'description': "<strong>Ruth’s Chris Steak House</strong><br><p>2100 West End Ave<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.801963, 36.150606]
        },
      'properties': {
        'name': "Mason's",
        'description': "<strong>Mason's</strong><br><p>2100 West End Ave<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.799141, 36.146651]
        },
      'properties': {
        'name': "Panera Bread",
        'description': "<strong>Panera Bread</strong><br><p>406 21st Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.799131, 36.146923]
        },
      'properties': {
        'name': "Starbucks",
        'description': "<strong>Starbucks</strong><br><p>402 21st Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.798837, 36.147182]
        },
      'properties': {
        'name': "Chipotle",
        'description': "<strong>Chipotle</strong><br><p>400 21st Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.799088, 36.147536]
        },
      'properties': {
        'name': "Mellow Mushroom",
        'description': "<strong>Mellow Mushroom</strong><br><p>212 21st Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.798819, 36.148223]
        },
      'properties': {
        'name': "Nada",
        'description': "<strong>Nada</strong><br><p>202 21st Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.798895, 36.148423]
        },
      'properties': {
        'name': "Caviar & Bananas",
        'description': "<strong>Caviar & Bananas</strong><br><p>2031 Broadway<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.798790, 36.148542]
        },
      'properties': {
        'name': "Henley",
        'description': "<strong>Henley</strong><br><p>2023 Broadway<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.798260, 36.148324]
        },
      'properties': {
        'name': "Giovanni Ristorante",
        'description': "<strong>Giovanni Ristorante</strong><br><p>909 20th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.798178, 36.149280]
        },
      'properties': {
        'name': "Union Common",
        'description': "<strong>Union Common</strong><br><p>1929 Broadway<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.798110, 36.149344]
        },
      'properties': {
        'name': "Two Boots Pizza",
        'description': "<strong>Two Boots Pizza</strong><br><p>1925 Broadway<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.797764, 36.149558]
        },
      'properties': {
        'name': "The Stillery",
        'description': "<strong>The Stillery</strong><br><p>1921 Broadway<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.797367, 36.149212]
        },
      'properties': {
        'name': "Kung Fu Saloon",
        'description': "<strong>Kung Fu Saloon</strong><br><p>1921 Division<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.797169, 36.149423]
        },
      'properties': {
        'name': "Rebar",
        'description': "<strong>Rebar</strong><br><p>1919 Division<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796855, 36.149644]
        },
      'properties': {
        'name': "Winners Bar & Grill",
        'description': "<strong>Winners Bar & Grill</strong><br><p>1913 Division<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796759, 36.149699]
        },
      'properties': {
        'name': "Losers Bar & Grill",
        'description': "<strong>Losers Bar & Grill</strong><br><p>1911 Division<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796304, 36.149837]
        },
      'properties': {
        'name': "The Slider House",
        'description': "<strong>The Slider House</strong><br><p>1907 Division<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796031, 36.150113]
        },
      'properties': {
        'name': "Hopsmith Tavern",
        'description': "<strong>Hopsmith Tavern</strong><br><p>1903 Division<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.797376, 36.149852]
        },
      'properties': {
        'name': "Donatos Pizza",
        'description': "<strong>Donatos Pizza</strong><br><p>1915 Broadway<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796798, 36.150472]
        },
      'properties': {
        'name': "Urban Cookhouse",
        'description': "<strong>Urban Cookhouse</strong><br><p>1907 Broadway<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.797062, 36.150912]
        },
      'properties': {
        'name': "Tavern",
        'description': "<strong>Tavern</strong><br><p>1904 Broadway<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.797707, 36.151422]
        },
      'properties': {
        'name': "The Row",
        'description': "<strong>The Row</strong><br><p>110 Lyle Ave<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796614, 36.153521]
        },
      'properties': {
        'name': "Valentino’s Ristorantew",
        'description': "<strong>Valentino’s Ristorante</strong><br><p>1801 Hayes St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796855, 36.152009]
        },
      'properties': {
        'name': "Midtown Cafe",
        'description': "<strong>Midtown Cafe</strong><br><p>102 19th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796443, 36.152520]
        },
      'properties': {
        'name': "Cook Out",
        'description': "<strong>Cook Out</strong><br><p>1807 West End Ave<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796609, 36.151501]
        },
      'properties': {
        'name': "Hattie B’s Hot Chicken",
        'description': "<strong>Hattie B’s Hot Chicken</strong><br><p>112 19th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796578, 36.151426]
        },
      'properties': {
        'name': "Gigi’s Cupcakes",
        'description': "<strong>Gigi’s Cupcakes</strong><br><p>1816 Broadway<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796805, 36.151109]
        },
      'properties': {
        'name': "Broadway Brewhouse",
        'description': "<strong>Broadway Brewhouse</strong><br><p>1900 Broadway<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796414, 36.150619]
        },
      'properties': {
        'name': "Chuy’s",
        'description': "<strong>Chuy’s</strong><br><p>1901 Broadway<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.795808, 36.150680]
        },
      'properties': {
        'name': "The Red Door Saloon",
        'description': "<strong>The Red Door Saloon</strong><br><p>1816 Division<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.795865, 36.151113]
        },
      'properties': {
        'name': "Five Odd Fellows",
        'description': "<strong>Five Odd Fellows</strong><br><p>1811 Broadway<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.794068, 36.151332]
        },
      'properties': {
        'name': "The Patterson House",
        'description': "<strong>The Patterson House</strong><br><p>1711 Division<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.793897, 36.151176]
        },
      'properties': {
        'name': "The Catbird Seat",
        'description': "<strong>The Catbird Seat</strong><br><p>1711 Division<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.793603, 36.152397]
        },
      'properties': {
        'name': "Grabbagreen",
        'description': "<strong>Grabbagreen</strong><br><p>117 17th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.793809, 36.152749]
        },
      'properties': {
        'name': "Capriotti’s Sandwich Shop",
        'description': "<strong>Capriotti’s Sandwich Shop</strong><br><p>111 17th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.792557, 36.152797]
        },
      'properties': {
        'name': "DeSano Pizza Bakery",
        'description': "<strong>DeSano Pizza Bakery</strong><br><p>115 16th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.791350, 36.152624]
        },
      'properties': {
        'name': "TailGate Brewery",
        'description': "<strong>TailGate Brewery</strong><br><p>1538 Demonbreun<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.790920, 36.152922]
        },
      'properties': {
        'name': "Live Oak",
        'description': "<strong>Live Oak</strong><br><p>1530 Demonbreun<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.790782, 36.152974]
        },
      'properties': {
        'name': "Just Love Coffee & Cafe",
        'description': "<strong>Just Love Coffee & Cafe</strong><br><p>1528 Demonbreun<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.790600, 36.153039]
        },
      'properties': {
        'name': "Sushiyobi",
        'description': "<strong>Sushiyobi</strong><br><p>1526 Demonbreun<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.790463, 36.153116]
        },
      'properties': {
        'name': "The Old Line",
        'description': "<strong>The Old Line</strong><br><p>1524 Demonbreun<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.790463, 36.153116]
        },
      'properties': {
        'name': "Little Chicago Pizzeria & Grill",
        'description': "<strong>Little Chicago Pizzeria & Grill</strong><br><p>1524A Demonbreun<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.790338, 36.153179]
        },
      'properties': {
        'name': "DawgHouse Saloon",
        'description': "<strong>DawgHouse Saloon</strong><br><p>1522 Demonbreun<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.790160, 36.153269]
        },
      'properties': {
        'name': "Two Bits",
        'description': "<strong>Two Bits</strong><br><p>1520 Demonbreun<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.790001, 36.153376]
        },
      'properties': {
        'name': "Tin Roof",
        'description': "<strong>Tin Roof</strong><br><p>1516 Demonbreun<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.795180, 36.156499]
        },
      'properties': {
        'name': "Chick-fil-A",
        'description': "<strong>Chick-fil-A</strong><br><p>1622 Church<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796246, 36.155938]
        },
      'properties': {
        'name': "HiFi Clyde’s",
        'description': "<strong>HiFi Clyde’s</strong><br><p>1700 Church<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.795913, 36.155552]
        },
      'properties': {
        'name': "Canvas Lounge",
        'description': "<strong>Canvas Lounge</strong><br><p>1701 Church<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796095, 36.155527]
        },
      'properties': {
        'name': "WKND Hang Suite",
        'description': "<strong>WKND Hang Suite</strong><br><p>1703 Church<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.793489, 36.156730]
        },
      'properties': {
        'name': "Play Dance Bar",
        'description': "<strong>Play Dance Bar</strong><br><p>1519 Church<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.796168, 36.159412]
        },
      'properties': {
        'name': "Jack Cawthon's Bar-B-Que",
        'description': "<strong>Jack Cawthon's Bar-B-Que</strong><br><p>1601 Charlotte<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.793183, 36.156900]
        },
      'properties': {
        'name': "Suzy Wong's House of Yum",
        'description': "<strong>Suzy Wong's House of Yum</strong><br><p>1515 Church<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.786945, 36.153952]
        },
      'properties': {
        'name': "Del Frisco's Grille",
        'description': "<strong>Del Frisco's Grille</strong><br><p>1201 Demonbreun<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.786448, 36.153558]
        },
      'properties': {
        'name': "Pemrose",
        'description': "<strong>Pemrose</strong><br><p>211 12th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.784195, 36.154457]
        },
      'properties': {
        'name': "Potbelly Sandwich Shop",
        'description': "<strong>Potbelly Sandwich Shop</strong><br><p>220 11th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.784223, 36.154278]
        },
      'properties': {
        'name': "Juice Bar",
        'description': "<strong>Juice Bar</strong><br><p>222 11th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.784671, 36.154870]
        },
      'properties': {
        'name': "Milk & Honey",
        'description': "<strong>Milk & Honey</strong><br><p>214 11th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.784091, 36.153970]
        },
      'properties': {
        'name': "Taziki's Mediterranean Café",
        'description': "<strong>Taziki's Mediterranean Café</strong><br><p>230 11th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.783530, 36.153183]
        },
      'properties': {
        'name': "Bar Louie",
        'description': "<strong>Bar Louie</strong><br><p>314 11th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.783425, 36.152719]
        },
      'properties': {
        'name': "The Pub",
        'description': "<strong>The Pub</strong><br><p>400 11th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.783614, 36.152425]
        },
      'properties': {
        'name': "Burger Republic",
        'description': "<strong>Burger Republic</strong><br><p>420 11th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.784068, 36.152596]
        },
      'properties': {
        'name': "L.A. Jackson",
        'description': "<strong>L.A. Jackson</strong><br><p>401 11th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.784484, 36.152440]
        },
      'properties': {
        'name': "Emmy Squared",
        'description': "<strong>Emmy Squared</strong><br><p>404 12th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.784068, 36.152561]
        },
      'properties': {
        'name': "Marsh House",
        'description': "<strong>Marsh House</strong><br><p>401 11th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.783908, 36.152631]
        },
      'properties': {
        'name': "Killebrew",
        'description': "<strong>Killebrew</strong><br><p>401 11th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.783931, 36.151872]
        },
      'properties': {
        'name': "Sunda",
        'description': "<strong>Sunda</strong><br><p>592 12th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.785346, 36.152926]
        },
      'properties': {
        'name': "Hops & Crafts",
        'description': "<strong>Hops & Crafts</strong><br><p>319 12th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.784659, 36.151928]
        },
      'properties': {
        'name': "Little Octopus",
        'description': "<strong>Little Octopus</strong><br><p>505 12th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.784825, 36.151841]
        },
      'properties': {
        'name': "The 404 Kitchen",
        'description': "<strong>The 404 Kitchen</strong><br><p>507 12th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.784557, 36.151670]
        },
      'properties': {
        'name': "Sambuca",
        'description': "<strong>Sambuca</strong><br><p>601 12th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.783992, 36.151238]
        },
      'properties': {
        'name': "City Fire",
        'description': "<strong>City Fire</strong><br><p>610 12th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.784487, 36.151954]
        },
      'properties': {
        'name': "Bar Otaku",
        'description': "<strong>Bar Otaku</strong><br><p>505 12th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.782716, 36.151465]
        },
      'properties': {
        'name': "Barista Parlor Golden Sound",
        'description': "<strong>Barista Parlor Golden Sound</strong><br><p>610 Magazine<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.783998, 36.151563]
        },
      'properties': {
        'name': "Starbucks",
        'description': "<strong>Starbucks</strong><br><p>602 12th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.784444, 36.151625]
        },
      'properties': {
        'name': "The Back Room",
        'description': "<strong>The Back Room</strong><br><p>505 12th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.782605, 36.151447]
        },
      'properties': {
        'name': "Colts Chocolates Factory",
        'description': "<strong>Colts Chocolates Factory</strong><br><p>609 Overton<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.783220, 36.153076]
        },
      'properties': {
        'name': "Biscuit Love",
        'description': "<strong>Biscuit Love</strong><br><p>316 11th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.781155, 36.151708]
        },
      'properties': {
        'name': "Peg Leg Porker BBQ",
        'description': "<strong>Peg Leg Porker BBQ</strong><br><p>903 Gleaves<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.779584, 36.151470]
        },
      'properties': {
        'name': "Arnold's Country Kitchen",
        'description': "<strong>Arnold's Country Kitchen</strong><br><p>605 8th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.779950, 36.151688]
        },
      'properties': {
        'name': "Night Train Pizza",
        'description': "<strong>Night Train Pizza</strong><br><p>600 9th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.779447, 36.150377]
        },
      'properties': {
        'name': "Jackalope Brewing Co",
        'description': "<strong>Jackalope Brewing Co</strong><br><p>701 8th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.780065, 36.151826]
        },
      'properties': {
        'name': "Rudy's Jazz Room",
        'description': "<strong>Rudy's Jazz Room</strong><br><p>809 Gleaves<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.779447, 36.150403]
        },
      'properties': {
        'name': "ZolliKoffee",
        'description': "<strong>ZolliKoffee</strong><br><p>701 8th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.779468, 36.149964]
        },
      'properties': {
        'name': "Party Fowl",
        'description': "<strong>Party Fowl</strong><br><p>719 8th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.780851, 36.151089]
        },
      'properties': {
        'name': "The Chef And I on Ninth",
        'description': "<strong>The Chef And I on Ninth</strong><br><p>611 9th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.786434, 36.155592]
        },
      'properties': {
        'name': "Whiskey Kitchen",
        'description': "<strong>Whiskey Kitchen</strong><br><p>118 12th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.785822, 36.155781]
        },
      'properties': {
        'name': "Kayne Prime Steakhouse",
        'description': "<strong>Kayne Prime Steakhouse</strong><br><p>1103 McGavock<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.786485, 36.155937]
        },
      'properties': {
        'name': "Moto",
        'description': "<strong>Moto</strong><br><p>1120 McGavock<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.786408, 36.156113]
        },
      'properties': {
        'name': "Virago",
        'description': "<strong>Virago</strong><br><p>1126 McGavock<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.786109, 36.156004]
        },
      'properties': {
        'name': "Saint Anejo",
        'description': "<strong>Saint Anejo</strong><br><p>1120 McGavock<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.787590, 36.155614]
        },
      'properties': {
        'name': "Adele's",
        'description': "<strong>Adele's</strong><br><p>1210 McGavock<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.788485, 36.157801]
        },
      'properties': {
        'name': "Chauhan Ale & Masala House",
        'description': "<strong>Chauhan Ale & Masala House</strong><br><p>123 12th Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.788376, 36.157608]
        },
      'properties': {
        'name': "The Mockingbird",
        'description': "<strong>The Mockingbird</strong><br><p>121 12th Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.782830, 36.156269]
        },
      'properties': {
        'name': "Flying Saucer Draught Emporium",
        'description': "<strong>Flying Saucer Draught Emporium</strong><br><p>11 10th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.782548, 36.155165]
        },
      'properties': {
        'name': "Cinco De Mayo",
        'description': "<strong>Cinco De Mayo</strong><br><p>209 10th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.782366, 36.155113]
        },
      'properties': {
        'name': "M. Restaurant & Bar",
        'description': "<strong>M. Restaurant & Bar</strong><br><p>209 10th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.778808, 36.149377]
        },
      'properties': {
        'name': "Fat Kat Slim's",
        'description': "<strong>Fat Kat Slim's</strong><br><p>730 8th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.776217, 36.150393]
        },
      'properties': {
        'name': "Tennessee Brew Works",
        'description': "<strong>Tennessee Brew Works</strong><br><p>809 Ewing<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.776339, 36.152223]
        },
      'properties': {
        'name': "City Winery",
        'description': "<strong>City Winery</strong><br><p>609 Lafayette<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.775559, 36.152522]
        },
      'properties': {
        'name': "Hot Diggity Dogs",
        'description': "<strong>Hot Diggity Dogs</strong><br><p>614 Ewing<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.782498, 36.162437]
        },
      'properties': {
        'name': "Mortons Steakhouse",
        'description': "<strong>Mortons Steakhouse</strong><br><p>618 Church St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.781326, 36.162994]
        },
      'properties': {
        'name': "Oscars Taco Shop",
        'description': "<strong>Oscars Taco Shop</strong><br><p>530 Church St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.782587, 36.163720]
        },
      'properties': {
        'name': "Capitol Grille",
        'description': "<strong>Capitol Grille</strong><br><p>231 6th Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.780726, 36.163122]
        },
      'properties': {
        'name': "Tazza",
        'description': "<strong>Tazza</strong><br><p>510 Church St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.781093, 36.162479]
        },
      'properties': {
        'name': "D'Andrews Bakery and Cafe",
        'description': "<strong>D'Andrews Bakery and Cafe</strong><br><p>555 Church St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.780442, 36.163251]
        },
      'properties': {
        'name': "Puckett's",
        'description': "<strong>Puckett's</strong><br><p>500 Church St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.780064, 36.163805]
        },
      'properties': {
        'name': "Starbucks",
        'description': "<strong>Starbucks</strong><br><p>424 Church St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.779968, 36.163666]
        },
      'properties': {
        'name': "Jimmy Johns",
        'description': "<strong>Jimmy Johns</strong><br><p>424 Church St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.780849, 36.163758]
        },
      'properties': {
        'name': "Woolworth on Fifth",
        'description': "<strong>Woolworth on Fifth</strong><br><p>221 5th Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.781037, 36.164081]
        },
      'properties': {
        'name': "Frothy Monkey",
        'description': "<strong>Frothy Monkey</strong><br><p>235 5th Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.779918, 36.164817]
        },
      'properties': {
        'name': "Ellington's Midway Bar & Grill",
        'description': "<strong>Ellington's Midway Bar & Grill</strong><br><p>401 Union S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.779407, 36.165417]
        },
      'properties': {
        'name': "Jeff Ruby's Steakhouse",
        'description': "<strong>Jeff Ruby's Steakhouse</strong><br><p>300 4th Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.780391, 36.164622]
        },
      'properties': {
        'name': "417 Union",
        'description': "<strong>417 Union</strong><br><p>417 Union St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.779530, 36.164990]
        },
      'properties': {
        'name': "Wild Eggs",
        'description': "<strong>Wild Eggs</strong><br><p>333 Union St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.779882, 36.164119]
        },
      'properties': {
        'name': "The Arcade Food Court",
        'description': "<strong>The Arcade Food Court</strong><br><p>217 Arcade Alley<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.780841, 36.164542]
        },
      'properties': {
        'name': "Subway",
        'description': "<strong>Subway</strong><br><p>246 5th Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.779622, 36.163312]
        },
      'properties': {
        'name': "Viiza",
        'description': "<strong>Viiza</strong><br><p>417 Church St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.779061, 36.164527]
        },
      'properties': {
        'name': "Skulls Rainbow Room",
        'description': "<strong>Skulls Rainbow Room</strong><br><p>222 Printers Alley<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.778237, 36.164582]
        },
      'properties': {
        'name': "Sea Salt",
        'description': "<strong>Sea Salt</strong><br><p>209 3rd Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.777820, 36.165286]
        },
      'properties': {
        'name': "Gray and Dudley",
        'description': "<strong>Gray and Dudley</strong><br><p>221 2nd Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.778964, 36.163252]
        },
      'properties': {
        'name': "Deacon's New South",
        'description': "<strong>Deacon's New South</strong><br><p>401 Church St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.779275, 36.163313]
        },
      'properties': {
        'name': "Dunn Brothers Coffee",
        'description': "<strong>Dunn Brothers Coffee</strong><br><p>401 Church St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.778827, 36.163126]
        },
      'properties': {
        'name': "Chile Burrito",
        'description': "<strong>Chile Burrito</strong><br><p>165 4th Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.778358, 36.163436]
        },
      'properties': {
        'name': "Café Le Crumbs",
        'description': "<strong>Café Le Crumbs</strong><br><p>162 4th Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.778614, 36.162586]
        },
      'properties': {
        'name': "The Well Coffeehouse",
        'description': "<strong>The Well Coffeehouse</strong><br><p>147B 4th Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.777047, 36.163037]
        },
      'properties': {
        'name': "Demo's",
        'description': "<strong>Demo's</strong><br><p>300 Commerce St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.776727, 36.163360]
        },
      'properties': {
        'name': "Another Broken Egg Café",
        'description': "<strong>Another Broken Egg Café</strong><br><p>208 Commerce St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.778662, 36.161724]
        },
      'properties': {
        'name': "Panera Bread",
        'description': "<strong>Panera Bread</strong><br><p>401 Commerce St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.778439, 36.161247]
        },
      'properties': {
        'name': "Café Lula at The Ryman",
        'description': "<strong>Café Lula at The Ryman</strong><br><p>116 5th Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.775901, 36.163884]
        },
      'properties': {
        'name': "The Old Spaghetti Factory",
        'description': "<strong>The Old Spaghetti Factory</strong><br><p>160 2nd Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.776204, 36.164028]
        },
      'properties': {
        'name': "The Melting Pot",
        'description': "<strong>The Melting Pot</strong><br><p>166 2nd Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.776121, 36.162860]
        },
      'properties': {
        'name': "Cerveza Jack's",
        'description': "<strong>Cerveza Jack's</strong><br><p>135 2nd Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.775689, 36.162277]
        },
      'properties': {
        'name': "The Stillery",
        'description': "<strong>The Stillery</strong><br><p>113 2nd Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.774322, 36.161964]
        },
      'properties': {
        'name': "Acme Feed & Seed",
        'description': "<strong>Acme Feed & Seed</strong><br><p>101 Broadway<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.774714, 36.161729]
        },
      'properties': {
        'name': "Rock Bottom",
        'description': "<strong>Rock Bottom</strong><br><p>111 Broadway<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.777248, 36.160771]
        },
      'properties': {
        'name': "Merchant's",
        'description': "<strong>Merchant's</strong><br><p>401 Broadway<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.778005, 36.161068]
        },
      'properties': {
        'name': "Jack's Bar-B-Que",
        'description': "<strong>Jack's Bar-B-Que</strong><br><p>416 Broadway<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.778033, 36.160218]
        },
      'properties': {
        'name': "Pancho & Lefty's Cantina",
        'description': "<strong>Pancho & Lefty's Cantina</strong><br><p>104 5th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.777828, 36.159830]
        },
      'properties': {
        'name': "The Palm",
        'description': "<strong>The Palm</strong><br><p>140 5th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.777685, 36.159896]
        },
      'properties': {
        'name': "Trattori II Mulino",
        'description': "<strong>Trattori II Mulino</strong><br><p>144 5th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.774404, 36.160067]
        },
      'properties': {
        'name': "The Southern Steak & Oyster",
        'description': "<strong>The Southern Steak & Oyster</strong><br><p>150 3rd Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.774353, 36.159609]
        },
      'properties': {
        'name': "The Diner",
        'description': "<strong>The Diner</strong><br><p>200 3rd Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.775010, 36.159213]
        },
      'properties': {
        'name': "Etch",
        'description': "<strong>Etch</strong><br><p>303 Demonbreun<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.774885, 36.158911]
        },
      'properties': {
        'name': "The Farm House",
        'description': "<strong>The Farm House</strong><br><p>210 Almond St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.774727, 36.159358]
        },
      'properties': {
        'name': "Bakersfield",
        'description': "<strong>Bakersfield</strong><br><p>201 3rd Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.774404, 36.159451]
        },
      'properties': {
        'name': "City Tap House",
        'description': "<strong>City Tap House</strong><br><p>204 3rd Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.774288, 36.159627]
        },
      'properties': {
        'name': "The Diner",
        'description': "<strong>The Diner</strong><br><p>200 3rd Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.769858, 36.155337]
        },
      'properties': {
        'name': "Husk",
        'description': "<strong>Husk</strong><br><p>37 Rutledge<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.769709, 36.156958]
        },
      'properties': {
        'name': "Creama",
        'description': "<strong>Creama</strong><br><p>15 Hermitage<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.766452, 36.155640]
        },
      'properties': {
        'name': "Hermitage Café",
        'description': "<strong>Hermitage Café</strong><br><p>71 Hermitage<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.767768, 36.158285]
        },
      'properties': {
        'name': "Pinewood Social",
        'description': "<strong>Pinewood Social</strong><br><p>33 Peabody<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.768532, 36.157841]
        },
      'properties': {
        'name': "Little Mosko's",
        'description': "<strong>Little Mosko's</strong><br><p>41 Peabody<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.775392, 36.157288]
        },
      'properties': {
        'name': "Kitchen Notes",
        'description': "<strong>Kitchen Notes</strong><br><p>250 5th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.775650, 36.157167]
        },
      'properties': {
        'name': "Barlines",
        'description': "<strong>Barlines</strong><br><p>250 5th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.773626, 36.155927]
        },
      'properties': {
        'name': "400 Degrees",
        'description': "<strong>400 Degrees</strong><br><p>319 Peabody<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.774116, 36.156801]
        },
      'properties': {
        'name': "Martin's BBQ Joint",
        'description': "<strong>Martin's BBQ Joint</strong><br><p>410 4th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.774432, 36.155007]
        },
      'properties': {
        'name': "Bar Sovereign",
        'description': "<strong>Bar Sovereign</strong><br><p>514 5th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.769799, 36.152298]
        },
      'properties': {
        'name': "3rd & Lindsley",
        'description': "<strong>3rd & Lindsley</strong><br><p>818 3rd Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.772236, 36.153852]
        },
      'properties': {
        'name': "Listening Room Café",
        'description': "<strong>Listening Room Café</strong><br><p>618 4th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.775585, 36.153491]
        },
      'properties': {
        'name': "Dandgure's Classic Southern Co",
        'description': "<strong>Dandgure's Classic Southern Co</strong><br><p>538 Lafayette<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.775317, 36.157123]
        },
      'properties': {
        'name': "Bob's Steak & Chop House",
        'description': "<strong>Bob's Steak & Chop House</strong><br><p>250 5th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.780244, 36.155624]
        },
      'properties': {
        'name': "Oak Steakhouse",
        'description': "<strong>Oak Steakhouse</strong><br><p>801 Clark<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.790465, 36.151798]
        },
      'properties': {
        'name': "Thai Esane",
        'description': "<strong>Thai Esane</strong><br><p>1510 Division St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.788475, 36.157689]
        },
      'properties': {
        'name': "Tansuo",
        'description': "<strong>Tansuo</strong><br><p>121B 12th Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.781135, 36.156509]
        },
      'properties': {
        'name': "Bourbon Steak by Michael Mina",
        'description': "<strong>Bourbon Steak by Michael Mina</strong><br><p>201 8th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.781242, 36.156310]
        },
      'properties': {
        'name': "Stompin Grounds",
        'description': "<strong>Stompin Grounds</strong><br><p>201 8th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.788865, 36.158020]
        },
      'properties': {
        'name': "Eastern Peak",
        'description': "<strong>Eastern Peak</strong><br><p>133 12th Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.793374, 36.156811]
        },
      'properties': {
        'name': "Tribe",
        'description': "<strong>Tribe</strong><br><p>1517 Church St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.782660, 36.151793]
        },
      'properties': {
        'name': "Superica",
        'description': "<strong>Superica</strong><br><p>615 Overton St<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.812746, 36.146200]
        },
      'properties': {
        'name': "Fable Lounge",
        'description': "<strong>Fable Lounge</strong><br><p>114 28th Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.791655, 36.142735]
        },
      'properties': {
        'name': "Bella Napoli",
        'description': "<strong>Bella Napoli</strong><br><p>1200 Villa Place<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.791719, 36.142579]
        },
      'properties': {
        'name': "Barcelona",
        'description': "<strong>Barcelona</strong><br><p>1200 Villa Place<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.791783, 36.142388]
        },
      'properties': {
        'name': "Taco Mamacita",
        'description': "<strong>Taco Mamacita</strong><br><p>1200 Villa Place<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.791730, 36.142874]
        },
      'properties': {
        'name': "Old Glory",
        'description': "<strong>Old Glory</strong><br><p>1200 Villa Place<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.799388, 36.146183]
        },
      'properties': {
        'name': "SATCO",
        'description': "<strong>SATCO</strong><br><p>416 21st Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.799120, 36.146166]
        },
      'properties': {
        'name': "Ben and Jerry’s",
        'description': "<strong>Ben and Jerry’s</strong><br><p>416-A 21st Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.799120, 36.146677]
        },
      'properties': {
        'name': "Panera Bread",
        'description': "<strong>Panera Bread</strong><br><p>406 21st Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.799089, 36.147855]
        },
      'properties': {
        'name': "The Ainsworth",
        'description': "<strong>The Ainsworth</strong><br><p>206 21st Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.802634, 36.152094]
        },
      'properties': {
        'name': "Krispy Kreme",
        'description': "<strong>Krispy Kreme</strong><br><p>2103 Elliston Pl<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.801546, 36.151217]
        },
      'properties': {
        'name': "Sitar",
        'description': "<strong>Sitar</strong><br><p>116 21st Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.803724, 36.151483]
        },
      'properties': {
        'name': "Samurai Sushi",
        'description': "<strong>Samurai Sushi</strong><br><p>2209 Elliston Pl<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.804949, 36.151926]
        },
      'properties': {
        'name': "Café Coco",
        'description': "<strong>Café Coco</strong><br><p>210 Louise Ave<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.805684, 36.152099]
        },
      'properties': {
        'name': "Jimmy Kelly’s",
        'description': "<strong>Jimmy Kelly’s</strong><br><p>217 Louise Ave<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.804118, 36.151935]
        },
      'properties': {
        'name': "Michaelangelo’s",
        'description': "<strong>Michaelangelo’s</strong><br><p>205 22nd Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.809174, 36.146086]
        },
      'properties': {
        'name': "Fleming’s",
        'description': "<strong>Fleming’s</strong><br><p>2525 West End Ave<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.809335, 36.146000]
        },
      'properties': {
        'name': "P.F. Chang's",
        'description': "<strong>P.F. Chang's</strong><br><p>2525 West End Ave<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.801369, 36.154905]
        },
      'properties': {
        'name': "Fainting Goat Cafe",
        'description': "<strong>Fainting Goat Cafe</strong><br><p>300 20th Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.790717, 36.162466]
        },
      'properties': {
        'name': "Central BBQ",
        'description': "<strong>Central BBQ</strong><br><p>408 11th Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.801088, 36.137164]
        },
      'properties': {
        'name': "Greenery Co",
        'description': "<strong>Greenery Co</strong><br><p>1705 21st Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.798980, 36.146187]
        },
      'properties': {
        'name': "Helen's Hot Chicken",
        'description': "<strong>Helen's Hot Chicken</strong><br><p>2010 Scarritt Place<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.807369, 36.148690]
        },
      'properties': {
        'name': "Martin's Bar-B-Que Joint",
        'description': "<strong>Martin's Bar-B-Que Joint</strong><br><p>2400 Elliston Pl<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.788758, 36.157908]
        },
      'properties': {
        'name': "The Eastern Peak",
        'description': "<strong>The Eastern Peak</strong><br><p>133 12th Ave N<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.786407, 36.127087]
        },
      'properties': {
        'name': "Ladybird Taco",
        'description': "<strong>Ladybird Taco</strong><br><p>2229 10th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.797897, 36.151781]
        },
      'properties': {
        'name': "Crab Fever",
        'description': "<strong>Crab Fever</strong><br><p>1907 West End Ave<br>Nashville TN</p>",
        'color': foodBevColor
        }
    }, // end location point

    // location point
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-86.789566, 36.126080]
        },
      'properties': {
        'name': "Ludlow's Gumbo Bar & Steak",
        'description': "<strong>Ludlow's Gumbo Bar & Steak</strong><br><p>2403 12th Ave S<br>Nashville TN</p>",
        'color': foodBevColor
        }
    } // end location point
  ] // end array
};

// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

function popItUp (thisGroup) {
  // Start behavior
  map.on('mouseenter', thisGroup, function(e) {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = 'pointer';

    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple copies of the feature are visible, the popup appears over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    // Populate the popup and set its coordinates based on the feature found.
    popup
    .setLngLat(coordinates)
    .setHTML(description)
    .addTo(map);
  });

  map.on('mouseleave', thisGroup, function() {
    map.getCanvas().style.cursor = '';
    popup.remove();
  });
// End behavior
}

//populate mapbox
var map = new mapboxgl.Map({
    container: 'mapbox-map',
    style: 'mapbox://styles/delevantecreative/ck8apqv900g9b1iqliz9umxxn',
    zoom: 13,
    maxZoom: 18,
    minZoom: 12,
    center: [-86.783178, 36.165319],
});

// disable map zoom when using scroll
map.scrollZoom.disable();

// add zoom in/out controls
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

// add custom marker(s) to map
broadwest.features.forEach(function(marker) {
  // create a DOM element for the marker
  var el = document.createElement('div');
  el.className = 'marker';
  el.style.backgroundImage = 'url(https://uploads-ssl.webflow.com/5e66dbf1fdb4d21418ab173c/5e718f302092a93a40b233e7_BW_marker.png)';
  el.style.width = marker.properties.iconSize[0] + 'px';
  el.style.height = marker.properties.iconSize[1] + 'px';

  /* --Option to add click event to BroadWest marker. Use 'message' attribute.--
    el.addEventListener('click', function() {
    window.alert(marker.properties.message);
  });*/

  // add marker to map
  new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .addTo(map);
});

//add source datasets, define IDs
map.on('load', function() {
  map.addSource('entertainment', {
      'type': 'geojson',
      'data': entertainment
  });

  map.addSource('grocery', {
      'type': 'geojson',
      'data': grocery
  });

  map.addSource('hotels', {
      'type': 'geojson',
      'data': hotels
  });

  map.addSource('residential', {
      'type': 'geojson',
      'data': residential
  });

  map.addSource('foodbev', {
      'type': 'geojson',
      'data': foodBev
  });

// add a layer for each dataset and define point color
  map.addLayer({
      'id': 'entertainment',
      'type': 'circle',
      'source': 'entertainment',
      'layout': {
          'visibility': 'visible'
      },
      'paint': {
          'circle-radius': 6,
          'circle-color': ['get', 'color']
      }
  });

  map.addLayer({
      'id': 'grocery',
      'type': 'circle',
      'source': 'grocery',
      'layout': {
          'visibility': 'visible'
      },
      'paint': {
          'circle-radius': 6,
          'circle-color': ['get', 'color']
      }
  });

  map.addLayer({
      'id': 'hotels',
      'type': 'circle',
      'source': 'hotels',
      'layout': {
          'visibility': 'visible'
      },
      'paint': {
          'circle-radius': 6,
          'circle-color': ['get', 'color']
      }
  });

  map.addLayer({
      'id': 'residential',
      'type': 'circle',
      'source': 'residential',
      'layout': {
          'visibility': 'visible'
      },
      'paint': {
          'circle-radius': 6,
          'circle-color': ['get', 'color']
      }
  });

  map.addLayer({
      'id': 'food-beverage',
      'type': 'circle',
      'source': 'foodbev',
      'layout': {
          'visibility': 'visible'
      },
      'paint': {
          'circle-radius': 6,
          'circle-color': ['get', 'color']
      }
  });

});


// the magic
var accLayerIds = ['entertainment','grocery','hotels','residential', 'food-beverage'];

var layers = document.getElementById('mapbox-menu');

// create all button in DOM
var allLayers = document.createElement('a');
allLayers.id = 'all-layers-btn';
allLayers.textContent = "View All";

layers.appendChild(allLayers);


//perform datagathering and output for each accordion layer
for (var i = 0; i < accLayerIds.length; i++) {
  var id = accLayerIds[i];

  //build the DOM
  var accWrapper = document.createElement('div');
  accWrapper.className = 'acc-wrapper';
  accWrapper.id = id + '-wrap';

  var accBtn = document.createElement('a');
  accBtn.className = 'acc-btn';
  accBtn.id = id + '-acc-btn';

  var markerIcon = document.createElement('div');
  markerIcon.className = 'marker-icon';
  markerIcon.id = id + '-marker-icon';

  var accCat = document.createElement('p');
  accCat.className = 'acc-cat';
  accCat.textContent = id;

  var accPanel = document.createElement('div');
  accPanel.className = 'acc-panel';
  accPanel.id = id + '-acc-panel';

  var pointsList = document.createElement('ul');
  pointsList.className = 'cat-ul';
  pointsList.id = id + '-cat-ul';

  accBtn.onclick = function(e) {
      var clickedLayer = this.textContent;
      var entLayer = $('#entertainment-acc-btn').text();
      var groLayer = $('#grocery-acc-btn').text();
      var hotLayer = $('#hotels-acc-btn').text();
      var resLayer = $('#residential-acc-btn').text();
      var foodBevLayer = $('#food-beverage-acc-btn').text();
      e.preventDefault();
      e.stopPropagation();

      map.setLayoutProperty(entLayer, 'visibility', 'none');
      map.setLayoutProperty(groLayer, 'visibility', 'none');
      map.setLayoutProperty(hotLayer, 'visibility', 'none');
      map.setLayoutProperty(resLayer, 'visibility', 'none');
      map.setLayoutProperty(foodBevLayer, 'visibility', 'none');

      var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

      if (visibility === 'none') {
          map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
      } /*else {
          this.className = 'active';
          map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
      }*/
  };

  //place HTML markup
  layers.appendChild(accWrapper);
  accWrapper.appendChild(accBtn);
  accWrapper.appendChild(accPanel);
  accBtn.appendChild(markerIcon);
  accBtn.appendChild(accCat);
  accPanel.appendChild(pointsList);

  /*var features = map.querySourceFeatures(id);*/

  /*pullDataOptions (id);*/
  popItUp(id);
};

// jerry-rigging list population
document.getElementById('entertainment-cat-ul').innerHTML =
"<li>Tootsies Orchid Lounge</li><li>Rippy's Bar & Grill</li><li>Robert's Western World</li><li>The Stage on Broadway</li><li>Honky Tonk Central</li><li>Wildhorse Saloon</li><li>B.B. King's Blues Club</li><li>EXIT/IN</li><li>Ryman Auditorium</li><li>Ascend Amphitheater</li><li>TPAC</li><li>Schermerhorn Symphony</li><li>Mercy Lounge</li><li>The Station Inn</li><li>12th & Porter</li><li>Tin Roof</li><li>The End</li><li>Rudy's Jazz Room</li><li>Sambuca</li><li>Commodore Grille</li><li>Losers Bar & Grill</li><li>Analog</li><li>The Row</li><li>Marathon Music Works</li><li>The Local</li><li>Springwater</li><li>City Winery</li><li>Play Dance Bar</li><li>WKNO Hang Suite</li><li>Tribe</li><li>The Back Room</li><li>16-Bit Bar + Arcade and Pins Mechanical Co.</li>";
document.getElementById('grocery-cat-ul').innerHTML =
"<li>Publix</li><li>Whole Foods</li><li>Turnip Truck</li>";
document.getElementById('hotels-cat-ul').innerHTML =
"<li>Aloft Nashville</li><li>Residence Inn by Marriott</li><li>Spring Hill Suites</li><li>Hutton Hotel</li><li>Hayes Street Hotel</li><li>Marriott Courtyard</li><li>Hampton Inn</li><li>Loews Vanderbilt</li><li>Kimpton Aertson</li><li>Embassy Suites</li><li>Hilton Garden</li><li>Homes2Suites by Hilton</li><li>Best Western Music Row</li><li>Comfort Inn Downtown Nashville-Vanderbilt</li><li>Thompson Hotel</li><li>404 Hotel</li><li>Stay Alfred at The James</li><li>Fairfield Inn & Suites</li><li>Noelle</li><li>Courtyard by Marriott</li><li>Hotel Indigo</li><li>Hermitage Hotel</li><li>Doubletree</li><li>Hilton</li><li>Renaissance</li><li>The Bobby</li><li>Sheraton Grand</li><li>Fairlane Hotel</li><li>21 c Museum Hotel</li><li>Homewood Suites</li><li>Holston House</li><li>The Capitol Hotel</li><li>The Westin Nashville</li><li>Cambria Hotel</li><li>Holiday Inn Express Nashville-Downtown</li><li>Union Station Hotel</li><li>Hilton Garden Inn Nashville</li><li>Hampton Inn & Suites</li><li>Hyatt Place Nashville Downtown</li><li>Omni</li><li>J W Marriott</li><li>Dream Hotel</li>";
document.getElementById('residential-cat-ul').innerHTML =
"<li>1505 Demonbreun</li><li>1818 Church</li><li>2700 Charlotte Ave</li><li>The 500 Fifth</li><li>505</li><li>Artisan on 18th</li><li>The Cadence</li><li>Charlotte at Midtown</li><li>City View</li><li>Cumberland on Church Apartments</li><li>The Dallas on Elliston</li><li>Duet</li><li>Edge Midtown</li><li>Element Music Row</li><li>Eleven North</li><li>Elliston 23</li><li>Evergreen at Werthan</li><li>The Flats at Taylor Place</li><li>The Gossett on Church</li><li>Hayes House Hillsboro Village</li><li>John Henry Hale</li><li>The Morris</li><li>Note16</li><li>Novel Music Row</li><li>Olympus Midtown</li><li>ParkCentral</li><li>Peyton Stakes</li><li>Pine Street Flats</li><li>Residences at Aertson Midtown</li><li>River House</li><li>SkyHouse Nashville</li><li>SoBro</li><li>The Stahlman Building</li><li>Terra House</li><li>Twenty & Grand</li><li>Velocity in the Gulch</li><li>Village 21</li><li>Vista Germantown</li><li>West End Village</li>";
document.getElementById('food-beverage-cat-ul').innerHTML =
"<li>Golden Coast</li><li>Goten Japanese</li><li>Inchin’s Bamboo Garden</li><li>Mane & Rye Dinerant</li><li>Las Palmas</li><li>Saltine</li><li>Amerigo</li><li>Five Guys</li><li>Jason’s Deli</li><li>PizzaRev Taproom</li><li>Ruth’s Chris Steak House</li><li>Mason's</li><li>Panera Bread</li><li>Starbucks</li><li>Chipotle</li><li>Mellow Mushroom</li><li>Nada</li><li>Caviar & Bananas</li><li>Henley</li><li>Giovanni Ristorante</li><li>Union Common</li><li>Two Boots Pizza</li><li>The Stillery</li><li>Kung Fu Saloon</li><li>Rebar</li><li>Winners Bar & Grill</li><li>Losers Bar & Grill</li><li>The Slider House</li><li>Hopsmith Tavern</li><li>Donatos Pizza</li><li>Urban Cookhouse</li><li>Tavern</li><li>The Row</li><li>Valentino’s Ristorante</li><li>Midtown Cafe</li><li>Cook Out</li><li>Hattie B’s Hot Chicken</li><li>Gigi’s Cupcakes</li><li>Broadway Brewhouse</li><li>Chuy’s</li><li>The Red Door Saloon</li><li>Five Odd Fellows</li><li>The Patterson House</li><li>The Catbird Seat</li><li>Grabbagreen</li><li>Capriotti’s Sandwich Shop</li><li>DeSano Pizza Bakery</li><li>TailGate Brewery</li><li>Live Oak</li><li>Just Love Coffee & Cafe</li><li>Sushiyobi</li><li>The Old Line</li><li>Little Chicago Pizzeria & Grill</li><li>DawgHouse Saloon</li><li>Two Bits</li><li>Tin Roof</li><li>Chick-fil-A</li><li>HiFi Clyde’s</li><li>Canvas Lounge</li><li>WKND Hang Suite</li><li>Play Dance Bar</li><li>Jack Cawthon's Bar-B-Que</li><li>Suzy Wong's House of Yum</li><li>Del Frisco's Grille</li><li>Pemrose</li><li>Potbelly Sandwich Shop</li><li>Juice Bar</li><li>Milk & Honey</li><li>Taziki's Mediterranean Café</li><li>Bar Louie</li><li>The Pub</li><li>Burger Republic</li><li>L.A. Jackson</li><li>Emmy Squared</li><li>Marsh House</li><li>Killebrew</li><li>Sunda</li><li>Hops & Crafts</li><li>Little Octopus</li><li>The 404 Kitchen</li><li>Sambuca</li><li>City Fire</li><li>Bar Otaku</li><li>Barista Parlor Golden Sound</li><li>The Back Room</li><li>Colts Chocolates Factory</li><li>Biscuit Love</li><li>Peg Leg Porker BBQ</li><li>Arnold's Country Kitchen</li><li>Night Train Pizza</li><li>Jackalope Brewing Co</li><li>Rudy's Jazz Room</li><li>ZolliKoffee</li><li>Party Fowl</li><li>The Chef And I on Ninth</li><li>Whiskey Kitchen</li><li>Kayne Prime Steakhouse</li><li>Moto</li><li>Virago</li><li>Saint Anejo</li><li>Adele's</li><li>Chauhan Ale & Masala House</li><li>The Mockingbird</li><li>Flying Saucer Draught Emporium</li><li>Cinco De Mayo</li><li>M. Restaurant & Bar</li><li>Fat Kat Slim's</li><li>Tennessee Brew Works</li><li>City Winery</li><li>Hot Diggity Dogs</li><li>Mortons Steakhouse</li><li>Oscars Taco Shop</li><li>Capitol Grille</li><li>Tazza</li><li>D'Andrews Bakery and Cafe</li><li>Puckett's</li><li>Jimmy Johns</li><li>Woolworth on Fifth</li><li>Frothy Monkey</li><li>Ellington's Midway Bar & Grill</li><li>Jeff Ruby's Steakhouse</li><li>417 Union</li><li>Wild Eggs</li><li>The Arcade Food Court</li><li>Subway</li><li>Viiza</li><li>Skulls Rainbow Room</li><li>Sea Salt</li><li>Gray and Dudley</li><li>Deacon's New South</li><li>Dunn Brothers Coffee</li><li>Chile Burrito</li><li>Café Le Crumbs</li><li>The Well Coffeehouse</li><li>Demo's</li><li>Another Broken Egg Café</li><li>Café Lula at The Ryman</li><li>The Old Spaghetti Factory</li><li>The Melting Pot</li><li>Cerveza Jack's</li><li>The Stillery</li><li>Acme Feed & Seed</li><li>Rock Bottom</li><li>Merchant's</li><li>Jack's Bar-B-Que</li><li>Pancho & Lefty's Cantina</li><li>The Palm</li><li>Trattori II Mulino</li><li>The Southern Steak & Oyster</li><li>The Diner</li><li>Etch</li><li>The Farm House</li><li>Bakersfield</li><li>City Tap House</li><li>The Diner</li><li>Husk</li><li>Creama</li><li>Hermitage Café</li><li>Pinewood Social</li><li>Little Mosko's</li><li>Kitchen Notes</li><li>Barlines</li><li>400 Degrees</li><li>Martin's BBQ Joint</li><li>Bar Sovereign</li><li>3rd & Lindsley</li><li>Listening Room Café</li><li>Dandgure's Classic Southern Co</li><li>Bob's Steak & Chop House</li><li>Oak Steakhouse</li><li>Thai Esane</li><li>Tansuo</li><li>Bourbon Steak by Michael Mina</li><li>Stompin Grounds</li><li>Eastern Peak</li><li>Tribe</li><li>Superica</li><li>Fable Lounge</li><li>Bella Napoli</li><li>Barcelona</li><li>Taco Mamacita</li><li>Old Glory</li><li>SATCO</li><li>Ben and Jerry’s</li><li>The Ainsworth</li><li>Krispy Kreme</li><li>Sitar</li><li>Samurai Sushi</li><li>Café Coco</li><li>Jimmy Kelly’s</li><li>Michaelangelo’s</li><li>Fleming’s</li><li>P.F. Chang's</li><li>Fainting Goat Cafe</li><li>Central BBQ</li><li>Greenery Co</li><li>Helen's Hot Chicken</li><li>Martin's Bar-B-Que Joint</li><li>The Eastern Peak</li><li>Ladybird Taco</li><li>Crab Fever</li><li>Ludlow's Gumbo Bar & Steak</li>";

//target food & beverage button to change textContent
$( 'div#food-beverage-wrap' )
  .append( '<div class="acc-cat-replace">Food + Beverage</div>' );
// toggle behavior for view all and acc buttons
$(".acc-wrapper a").click(function(){
  $('.acc-wrapper a.checked').not(this).removeClass('checked');
  $('a#all-layers-btn.checked').removeClass('checked');
  $(this).addClass('checked');
})

$('a#all-layers-btn').click(function() {
  $(this).addClass('checked');
  $('.acc-wrapper a.checked').removeClass('checked');
})

// toggle layer visibility for view all
allLayers.onclick = function (e) {
  for(var index in accLayerIds) {
    var clickedLayer = accLayerIds[index];
    e.preventDefault();
    e.stopPropagation();

    var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

    if (visibility === 'none') {
      map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
    } else {
      map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
    }
  }
}
