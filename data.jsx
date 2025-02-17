import axios from "axios"


// const fetchData = async () => {
//   try {
//     const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${process.env.API_KEY}`);
//     console.log(response.data)
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching NEO data, using demo data instead:', error.message);
//     return demoData; // Fallback to demo data
//   }
// }

const demoData = 
{
    "links": {
      "next": "http://api.nasa.gov/neo/rest/v1/neo/browse?page=1&size=20&api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh",
      "self": "http://api.nasa.gov/neo/rest/v1/neo/browse?page=0&size=20&api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
    },
    "page": {
      "size": 20,
      "total_elements": 36717,
      "total_pages": 1836,
      "number": 0
    },
    "near_earth_objects": [
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2000433?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2000433",
        "neo_reference_id": "2000433",
        "name": "433 Eros (A898 PA)",
        "name_limited": "Eros",
        "designation": "433",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2000433",
        "absolute_magnitude_h": 10.41,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 22.0067027115,
            "estimated_diameter_max": 49.2084832235
          },
          "meters": {
            "estimated_diameter_min": 22006.7027114738,
            "estimated_diameter_max": 49208.4832234845
          },
          "miles": {
            "estimated_diameter_min": 13.6743268705,
            "estimated_diameter_max": 30.5767244291
          },
          "feet": {
            "estimated_diameter_min": 72200.4705239119,
            "estimated_diameter_max": 161445.1600989368
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "1900-12-27",
            "close_approach_date_full": "1900-Dec-27 01:30",
            "epoch_date_close_approach": -2177879400000,
            "relative_velocity": {
              "kilometers_per_second": "5.5786191875",
              "kilometers_per_hour": "20083.0290749201",
              "miles_per_hour": "12478.8132604691"
            },
            "miss_distance": {
              "astronomical": "0.3149291693",
              "lunar": "122.5074468577",
              "kilometers": "47112732.928149391",
              "miles": "29274494.7651919558"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1907-11-05",
            "close_approach_date_full": "1907-Nov-05 03:31",
            "epoch_date_close_approach": -1961526540000,
            "relative_velocity": {
              "kilometers_per_second": "4.3944908885",
              "kilometers_per_hour": "15820.1671985367",
              "miles_per_hour": "9830.0366684463"
            },
            "miss_distance": {
              "astronomical": "0.4714855425",
              "lunar": "183.4078760325",
              "kilometers": "70533232.893794475",
              "miles": "43827318.620434755"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1917-04-20",
            "close_approach_date_full": "1917-Apr-20 21:19",
            "epoch_date_close_approach": -1663036860000,
            "relative_velocity": {
              "kilometers_per_second": "4.8167840184",
              "kilometers_per_hour": "17340.4224662258",
              "miles_per_hour": "10774.6641707501"
            },
            "miss_distance": {
              "astronomical": "0.499257206",
              "lunar": "194.211053134",
              "kilometers": "74687814.59975122",
              "miles": "46408855.985038036"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1924-03-05",
            "close_approach_date_full": "1924-Mar-05 22:13",
            "epoch_date_close_approach": -1446083220000,
            "relative_velocity": {
              "kilometers_per_second": "4.5960548855",
              "kilometers_per_hour": "16545.797587763",
              "miles_per_hour": "10280.915173352"
            },
            "miss_distance": {
              "astronomical": "0.3597864889",
              "lunar": "139.9569441821",
              "kilometers": "53823292.394218643",
              "miles": "33444243.0636095534"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1931-01-30",
            "close_approach_date_full": "1931-Jan-30 04:07",
            "epoch_date_close_approach": -1228247580000,
            "relative_velocity": {
              "kilometers_per_second": "5.9208185341",
              "kilometers_per_hour": "21314.9467227704",
              "miles_per_hour": "13244.2789789347"
            },
            "miss_distance": {
              "astronomical": "0.1740731458",
              "lunar": "67.7144537162",
              "kilometers": "26040971.835879446",
              "miles": "16181109.5707945148"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1938-01-13",
            "close_approach_date_full": "1938-Jan-13 22:04",
            "epoch_date_close_approach": -1008726960000,
            "relative_velocity": {
              "kilometers_per_second": "6.0840524046",
              "kilometers_per_hour": "21902.5886564605",
              "miles_per_hour": "13609.4168237879"
            },
            "miss_distance": {
              "astronomical": "0.2150052405",
              "lunar": "83.6370385545",
              "kilometers": "32164326.017637735",
              "miles": "19985985.424901343"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1944-11-27",
            "close_approach_date_full": "1944-Nov-27 01:41",
            "epoch_date_close_approach": -791936340000,
            "relative_velocity": {
              "kilometers_per_second": "3.626098636",
              "kilometers_per_hour": "13053.9550896485",
              "miles_per_hour": "8111.2200388986"
            },
            "miss_distance": {
              "astronomical": "0.4030090561",
              "lunar": "156.7705228229",
              "kilometers": "60289296.383270507",
              "miles": "37462031.6350747166"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1961-04-04",
            "close_approach_date_full": "1961-Apr-04 09:08",
            "epoch_date_close_approach": -275928720000,
            "relative_velocity": {
              "kilometers_per_second": "3.7078364482",
              "kilometers_per_hour": "13348.2112136055",
              "miles_per_hour": "8294.0593510317"
            },
            "miss_distance": {
              "astronomical": "0.4424921301",
              "lunar": "172.1294386089",
              "kilometers": "66195880.154722887",
              "miles": "41132212.6021023606"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1968-02-11",
            "close_approach_date_full": "1968-Feb-11 13:46",
            "epoch_date_close_approach": -59566440000,
            "relative_velocity": {
              "kilometers_per_second": "6.0668849725",
              "kilometers_per_hour": "21840.7859008821",
              "miles_per_hour": "13571.014994912"
            },
            "miss_distance": {
              "astronomical": "0.2662714057",
              "lunar": "103.5795768173",
              "kilometers": "39833635.134625859",
              "miles": "24751473.1315964942"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1975-01-23",
            "close_approach_date_full": "1975-Jan-23 07:39",
            "epoch_date_close_approach": 159694740000,
            "relative_velocity": {
              "kilometers_per_second": "5.8253076833",
              "kilometers_per_hour": "20971.1076598791",
              "miles_per_hour": "13030.6307567732"
            },
            "miss_distance": {
              "astronomical": "0.1511341909",
              "lunar": "58.7912002601",
              "kilometers": "22609353.042813383",
              "miles": "14048800.5292673654"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1981-12-29",
            "close_approach_date_full": "1981-Dec-29 08:05",
            "epoch_date_close_approach": 378461100000,
            "relative_velocity": {
              "kilometers_per_second": "5.6652718459",
              "kilometers_per_hour": "20394.9786453535",
              "miles_per_hour": "12672.6465921642"
            },
            "miss_distance": {
              "astronomical": "0.3084893271",
              "lunar": "120.0023482419",
              "kilometers": "46149346.251893277",
              "miles": "28675874.0429781426"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1988-11-06",
            "close_approach_date_full": "1988-Nov-06 14:56",
            "epoch_date_close_approach": 594831360000,
            "relative_velocity": {
              "kilometers_per_second": "4.305902138",
              "kilometers_per_hour": "15501.2476969045",
              "miles_per_hour": "9631.8724925571"
            },
            "miss_distance": {
              "astronomical": "0.4676402077",
              "lunar": "181.9120407953",
              "kilometers": "69957978.998277599",
              "miles": "43469872.4247609062"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2005-03-08",
            "close_approach_date_full": "2005-Mar-08 22:07",
            "epoch_date_close_approach": 1110319620000,
            "relative_velocity": {
              "kilometers_per_second": "4.4122923953",
              "kilometers_per_hour": "15884.2526231559",
              "miles_per_hour": "9869.8568590937"
            },
            "miss_distance": {
              "astronomical": "0.3655672222",
              "lunar": "142.2056494358",
              "kilometers": "54688077.782936714",
              "miles": "33981595.7867820932"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2012-01-31",
            "close_approach_date_full": "2012-Jan-31 11:01",
            "epoch_date_close_approach": 1328007660000,
            "relative_velocity": {
              "kilometers_per_second": "5.9451959021",
              "kilometers_per_hour": "21402.705247412",
              "miles_per_hour": "13298.8087133156"
            },
            "miss_distance": {
              "astronomical": "0.1786758136",
              "lunar": "69.5048914904",
              "kilometers": "26729521.135077032",
              "miles": "16608954.2658937616"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2019-01-15",
            "close_approach_date_full": "2019-Jan-15 06:01",
            "epoch_date_close_approach": 1547532060000,
            "relative_velocity": {
              "kilometers_per_second": "6.0449176185",
              "kilometers_per_hour": "21761.7034264303",
              "miles_per_hour": "13521.8762207172"
            },
            "miss_distance": {
              "astronomical": "0.2085986871",
              "lunar": "81.1448892819",
              "kilometers": "31205919.274956477",
              "miles": "19390459.0899223026"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2025-11-30",
            "close_approach_date_full": "2025-Nov-30 02:18",
            "epoch_date_close_approach": 1764469080000,
            "relative_velocity": {
              "kilometers_per_second": "3.7288508677",
              "kilometers_per_hour": "13423.8631236067",
              "miles_per_hour": "8341.0665058878"
            },
            "miss_distance": {
              "astronomical": "0.3976474744",
              "lunar": "154.6848675416",
              "kilometers": "59487215.181119528",
              "miles": "36963641.4867163664"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2042-04-06",
            "close_approach_date_full": "2042-Apr-06 19:02",
            "epoch_date_close_approach": 2280423720000,
            "relative_velocity": {
              "kilometers_per_second": "3.7252247205",
              "kilometers_per_hour": "13410.8089939193",
              "miles_per_hour": "8332.9551773606"
            },
            "miss_distance": {
              "astronomical": "0.4461417254",
              "lunar": "173.5491311806",
              "kilometers": "66741851.837964898",
              "miles": "41471463.6747876724"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2049-02-12",
            "close_approach_date_full": "2049-Feb-12 05:38",
            "epoch_date_close_approach": 2496721080000,
            "relative_velocity": {
              "kilometers_per_second": "6.0590645856",
              "kilometers_per_hour": "21812.6325080767",
              "miles_per_hour": "13553.5215714769"
            },
            "miss_distance": {
              "astronomical": "0.2725553389",
              "lunar": "106.0240268321",
              "kilometers": "40773698.156568143",
              "miles": "25335601.2070526534"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2056-01-24",
            "close_approach_date_full": "2056-Jan-24 11:03",
            "epoch_date_close_approach": 2715937380000,
            "relative_velocity": {
              "kilometers_per_second": "5.8207578574",
              "kilometers_per_hour": "20954.7282866821",
              "miles_per_hour": "13020.4532512442"
            },
            "miss_distance": {
              "astronomical": "0.1497821765",
              "lunar": "58.2652666585",
              "kilometers": "22407094.568364055",
              "miles": "13923122.940991759"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2062-12-31",
            "close_approach_date_full": "2062-Dec-31 08:25",
            "epoch_date_close_approach": 2934779100000,
            "relative_velocity": {
              "kilometers_per_second": "5.7322434825",
              "kilometers_per_hour": "20636.0765370681",
              "miles_per_hour": "12822.4554460466"
            },
            "miss_distance": {
              "astronomical": "0.3029535232",
              "lunar": "117.8489205248",
              "kilometers": "45321201.779715584",
              "miles": "28161288.9295956992"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2069-11-08",
            "close_approach_date_full": "2069-Nov-08 21:29",
            "epoch_date_close_approach": 3151171740000,
            "relative_velocity": {
              "kilometers_per_second": "4.2454176851",
              "kilometers_per_hour": "15283.5036662481",
              "miles_per_hour": "9496.5748197307"
            },
            "miss_distance": {
              "astronomical": "0.4647282185",
              "lunar": "180.7792769965",
              "kilometers": "69522351.616494595",
              "miles": "43199186.121611611"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2086-03-11",
            "close_approach_date_full": "2086-Mar-11 22:55",
            "epoch_date_close_approach": 3666725700000,
            "relative_velocity": {
              "kilometers_per_second": "4.2258643769",
              "kilometers_per_hour": "15213.1117567663",
              "miles_per_hour": "9452.8360246418"
            },
            "miss_distance": {
              "astronomical": "0.3713100271",
              "lunar": "144.4396005419",
              "kilometers": "55547189.163802277",
              "miles": "34515422.8449623426"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2093-01-31",
            "close_approach_date_full": "2093-Jan-31 15:47",
            "epoch_date_close_approach": 3884255220000,
            "relative_velocity": {
              "kilometers_per_second": "5.9749136221",
              "kilometers_per_hour": "21509.6890394877",
              "miles_per_hour": "13365.2842812306"
            },
            "miss_distance": {
              "astronomical": "0.1824638842",
              "lunar": "70.9784509538",
              "kilometers": "27296208.428246654",
              "miles": "16961077.4217016652"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2100-01-16",
            "close_approach_date_full": "2100-Jan-16 11:39",
            "epoch_date_close_approach": 4103782740000,
            "relative_velocity": {
              "kilometers_per_second": "6.0149196633",
              "kilometers_per_hour": "21653.7107877231",
              "miles_per_hour": "13454.7737947383"
            },
            "miss_distance": {
              "astronomical": "0.2038791175",
              "lunar": "79.3089767075",
              "kilometers": "30499881.715479725",
              "miles": "18951747.693781205"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2106-12-04",
            "close_approach_date_full": "2106-Dec-04 02:22",
            "epoch_date_close_approach": 4320872520000,
            "relative_velocity": {
              "kilometers_per_second": "3.8530305141",
              "kilometers_per_hour": "13870.9098509079",
              "miles_per_hour": "8618.8439570822"
            },
            "miss_distance": {
              "astronomical": "0.3922912542",
              "lunar": "152.6012978838",
              "kilometers": "58685936.047948554",
              "miles": "36465749.7209118852"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2123-04-10",
            "close_approach_date_full": "2123-Apr-10 05:51",
            "epoch_date_close_approach": 4836779460000,
            "relative_velocity": {
              "kilometers_per_second": "3.7537243254",
              "kilometers_per_hour": "13513.4075714592",
              "miles_per_hour": "8396.7059434992"
            },
            "miss_distance": {
              "astronomical": "0.4497028378",
              "lunar": "174.9344039042",
              "kilometers": "67274586.667835486",
              "miles": "41802489.7481862668"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2130-02-14",
            "close_approach_date_full": "2130-Feb-14 22:11",
            "epoch_date_close_approach": 5053011060000,
            "relative_velocity": {
              "kilometers_per_second": "6.0381849282",
              "kilometers_per_hour": "21737.4657416866",
              "miles_per_hour": "13506.8158659941"
            },
            "miss_distance": {
              "astronomical": "0.2781645724",
              "lunar": "108.2060186636",
              "kilometers": "41612827.540500788",
              "miles": "25857012.0280873544"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2137-01-25",
            "close_approach_date_full": "2137-Jan-25 14:12",
            "epoch_date_close_approach": 5272179120000,
            "relative_velocity": {
              "kilometers_per_second": "5.8142759703",
              "kilometers_per_hour": "20931.393493074",
              "miles_per_hour": "13005.9539179604"
            },
            "miss_distance": {
              "astronomical": "0.1494623094",
              "lunar": "58.1408383566",
              "kilometers": "22359243.131520978",
              "miles": "13893389.4368983764"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2144-01-03",
            "close_approach_date_full": "2144-Jan-03 10:26",
            "epoch_date_close_approach": 5491103160000,
            "relative_velocity": {
              "kilometers_per_second": "5.7943538473",
              "kilometers_per_hour": "20859.6738502169",
              "miles_per_hour": "12961.3901209861"
            },
            "miss_distance": {
              "astronomical": "0.296580393",
              "lunar": "115.369772877",
              "kilometers": "44367795.07656291",
              "miles": "27568869.475111758"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2150-11-12",
            "close_approach_date_full": "2150-Nov-12 07:12",
            "epoch_date_close_approach": 5707523520000,
            "relative_velocity": {
              "kilometers_per_second": "4.1745035914",
              "kilometers_per_hour": "15028.2129289863",
              "miles_per_hour": "9337.9470835693"
            },
            "miss_distance": {
              "astronomical": "0.4609447583",
              "lunar": "179.3075109787",
              "kilometers": "68956354.029344821",
              "miles": "42847491.5292516898"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2167-03-16",
            "close_approach_date_full": "2167-Mar-16 05:30",
            "epoch_date_close_approach": 6223152600000,
            "relative_velocity": {
              "kilometers_per_second": "4.026253601",
              "kilometers_per_hour": "14494.512963503",
              "miles_per_hour": "9006.3266800166"
            },
            "miss_distance": {
              "astronomical": "0.3774337428",
              "lunar": "146.8217259492",
              "kilometers": "56463283.989007836",
              "miles": "35084657.7735706968"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2174-02-03",
            "close_approach_date_full": "2174-Feb-03 01:30",
            "epoch_date_close_approach": 6440520600000,
            "relative_velocity": {
              "kilometers_per_second": "6.0055431713",
              "kilometers_per_hour": "21619.9554168322",
              "miles_per_hour": "13433.7995199755"
            },
            "miss_distance": {
              "astronomical": "0.1884002692",
              "lunar": "73.2877047188",
              "kilometers": "28184278.979746604",
              "miles": "17512898.8741029752"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2181-01-17",
            "close_approach_date_full": "2181-Jan-17 20:55",
            "epoch_date_close_approach": 6660046500000,
            "relative_velocity": {
              "kilometers_per_second": "5.9898389294",
              "kilometers_per_hour": "21563.4201458554",
              "miles_per_hour": "13398.6707011844"
            },
            "miss_distance": {
              "astronomical": "0.1980108125",
              "lunar": "77.0262060625",
              "kilometers": "29621995.786969375",
              "miles": "18406254.672652375"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2187-12-06",
            "close_approach_date_full": "2187-Dec-06 23:28",
            "epoch_date_close_approach": 6877265280000,
            "relative_velocity": {
              "kilometers_per_second": "3.9833820614",
              "kilometers_per_hour": "14340.1754211404",
              "miles_per_hour": "8910.4273332081"
            },
            "miss_distance": {
              "astronomical": "0.3873137309",
              "lunar": "150.6650413201",
              "kilometers": "57941309.164393183",
              "miles": "36003060.0306766054"
            },
            "orbiting_body": "Earth"
          }
        ],
        "orbital_data": {
          "orbit_id": "659",
          "orbit_determination_date": "2021-05-24 17:55:05",
          "first_observation_date": "1893-10-29",
          "last_observation_date": "2021-05-13",
          "data_arc_in_days": 46582,
          "observations_used": 9130,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".15023",
          "jupiter_tisserand_invariant": "4.582",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".2226906033843441",
          "semi_major_axis": "1.458181334135072",
          "inclination": "10.8277255953075",
          "ascending_node_longitude": "304.2743443730555",
          "orbital_period": "643.1551163107046",
          "perihelion_distance": "1.133458052992745",
          "perihelion_argument": "178.9102909699136",
          "aphelion_distance": "1.782904615277399",
          "perihelion_time": "2460445.664780181111",
          "mean_anomaly": "86.66755145250509",
          "mean_motion": ".5597405522715084",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "AMO",
            "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
            "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
          }
        },
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2000719?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2000719",
        "neo_reference_id": "2000719",
        "name": "719 Albert (A911 TB)",
        "name_limited": "Albert",
        "designation": "719",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2000719",
        "absolute_magnitude_h": 15.59,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 2.0256060086,
            "estimated_diameter_max": 4.529392731
          },
          "meters": {
            "estimated_diameter_min": 2025.6060086475,
            "estimated_diameter_max": 4529.3927309679
          },
          "miles": {
            "estimated_diameter_min": 1.2586528312,
            "estimated_diameter_max": 2.8144332906
          },
          "feet": {
            "estimated_diameter_min": 6645.6892174112,
            "estimated_diameter_max": 14860.2128474689
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "1909-08-21",
            "close_approach_date_full": "1909-Aug-21 15:04",
            "epoch_date_close_approach": -1904892960000,
            "relative_velocity": {
              "kilometers_per_second": "3.4460288901",
              "kilometers_per_hour": "12405.7040041951",
              "miles_per_hour": "7708.4220241622"
            },
            "miss_distance": {
              "astronomical": "1.7087742244",
              "lunar": "664.7131732916",
              "kilometers": "255628984.281142028",
              "miles": "158840485.3011268664"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "1911-09-08",
            "close_approach_date_full": "1911-Sep-08 08:15",
            "epoch_date_close_approach": -1840290300000,
            "relative_velocity": {
              "kilometers_per_second": "7.1848432414",
              "kilometers_per_hour": "25865.4356691061",
              "miles_per_hour": "16071.7758467287"
            },
            "miss_distance": {
              "astronomical": "0.2054817436",
              "lunar": "79.9323982604",
              "kilometers": "30739631.166446132",
              "miles": "19100721.0946233416"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1941-09-08",
            "close_approach_date_full": "1941-Sep-08 16:50",
            "epoch_date_close_approach": -893488200000,
            "relative_velocity": {
              "kilometers_per_second": "7.3096055444",
              "kilometers_per_hour": "26314.5799596961",
              "miles_per_hour": "16350.856642179"
            },
            "miss_distance": {
              "astronomical": "0.2056683666",
              "lunar": "80.0049946074",
              "kilometers": "30767549.569739142",
              "miles": "19118068.7860064796"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1956-09-12",
            "close_approach_date_full": "1956-Sep-12 20:20",
            "epoch_date_close_approach": -419744400000,
            "relative_velocity": {
              "kilometers_per_second": "3.2634605904",
              "kilometers_per_hour": "11748.4581256152",
              "miles_per_hour": "7300.0349947747"
            },
            "miss_distance": {
              "astronomical": "1.4171297823",
              "lunar": "551.2634853147",
              "kilometers": "211999596.945643701",
              "miles": "131730441.1203010338"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "1971-09-06",
            "close_approach_date_full": "1971-Sep-06 04:03",
            "epoch_date_close_approach": 52977780000,
            "relative_velocity": {
              "kilometers_per_second": "7.6655656068",
              "kilometers_per_hour": "27596.0361846551",
              "miles_per_hour": "17147.1037059597"
            },
            "miss_distance": {
              "astronomical": "0.3147502385",
              "lunar": "122.4378427765",
              "kilometers": "47085965.261591995",
              "miles": "29257862.108459731"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2001-09-05",
            "close_approach_date_full": "2001-Sep-05 00:40",
            "epoch_date_close_approach": 999650400000,
            "relative_velocity": {
              "kilometers_per_second": "7.653221372",
              "kilometers_per_hour": "27551.5969391175",
              "miles_per_hour": "17119.4908869755"
            },
            "miss_distance": {
              "astronomical": "0.284648998",
              "lunar": "110.728460222",
              "kilometers": "42582883.79843426",
              "miles": "26459777.036182388"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2003-10-26",
            "close_approach_date_full": "2003-Oct-26 03:46",
            "epoch_date_close_approach": 1067139960000,
            "relative_velocity": {
              "kilometers_per_second": "3.7241283233",
              "kilometers_per_hour": "13406.861963708",
              "miles_per_hour": "8330.5026462829"
            },
            "miss_distance": {
              "astronomical": "1.4865987509",
              "lunar": "578.2869141001",
              "kilometers": "222392006.679300583",
              "miles": "138187985.0885027254"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "2048-09-19",
            "close_approach_date_full": "2048-Sep-19 10:28",
            "epoch_date_close_approach": 2484124080000,
            "relative_velocity": {
              "kilometers_per_second": "13.0394476018",
              "kilometers_per_hour": "46942.011366575",
              "miles_per_hour": "29167.9403405255"
            },
            "miss_distance": {
              "astronomical": "0.4256632727",
              "lunar": "165.5830130803",
              "kilometers": "63678318.933149149",
              "miles": "39567872.5984262962"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2050-11-15",
            "close_approach_date_full": "2050-Nov-15 11:59",
            "epoch_date_close_approach": 2552126340000,
            "relative_velocity": {
              "kilometers_per_second": "5.004842564",
              "kilometers_per_hour": "18017.433230455",
              "miles_per_hour": "11195.3323314458"
            },
            "miss_distance": {
              "astronomical": "1.9591583958",
              "lunar": "762.1126159662",
              "kilometers": "293085923.004296946",
              "miles": "182115147.7632560148"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "2063-10-10",
            "close_approach_date_full": "2063-Oct-10 19:16",
            "epoch_date_close_approach": 2959269360000,
            "relative_velocity": {
              "kilometers_per_second": "3.4163448208",
              "kilometers_per_hour": "12298.841354702",
              "miles_per_hour": "7642.0217295369"
            },
            "miss_distance": {
              "astronomical": "1.5638259933",
              "lunar": "608.3283113937",
              "kilometers": "233945037.648314271",
              "miles": "145366705.6509520998"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "2078-09-10",
            "close_approach_date_full": "2078-Sep-10 05:26",
            "epoch_date_close_approach": 3430013160000,
            "relative_velocity": {
              "kilometers_per_second": "7.522254583",
              "kilometers_per_hour": "27080.1164989495",
              "miles_per_hour": "16826.5312768056"
            },
            "miss_distance": {
              "astronomical": "0.21345961",
              "lunar": "83.03578829",
              "kilometers": "31933102.9870307",
              "miles": "19842310.09599566"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2108-09-07",
            "close_approach_date_full": "2108-Sep-07 18:36",
            "epoch_date_close_approach": 4376486160000,
            "relative_velocity": {
              "kilometers_per_second": "7.818688726",
              "kilometers_per_hour": "28147.2794137754",
              "miles_per_hour": "17489.6248112984"
            },
            "miss_distance": {
              "astronomical": "0.2568612553",
              "lunar": "99.9190283117",
              "kilometers": "38425896.678406211",
              "miles": "23876745.0165832718"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2110-11-08",
            "close_approach_date_full": "2110-Nov-08 03:30",
            "epoch_date_close_approach": 4444860600000,
            "relative_velocity": {
              "kilometers_per_second": "3.4670013425",
              "kilometers_per_hour": "12481.204833129",
              "miles_per_hour": "7755.3353031184"
            },
            "miss_distance": {
              "astronomical": "1.3899546779",
              "lunar": "540.6923697031",
              "kilometers": "207934259.210376073",
              "miles": "129204357.3876648874"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "2138-09-08",
            "close_approach_date_full": "2138-Sep-08 23:41",
            "epoch_date_close_approach": 5323275660000,
            "relative_velocity": {
              "kilometers_per_second": "8.6062196024",
              "kilometers_per_hour": "30982.3905686926",
              "miles_per_hour": "19251.2526286413"
            },
            "miss_distance": {
              "astronomical": "0.3677623545",
              "lunar": "143.0595559005",
              "kilometers": "55016464.899384915",
              "miles": "34185646.079005227"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2157-12-03",
            "close_approach_date_full": "2157-Dec-03 17:48",
            "epoch_date_close_approach": 5930300880000,
            "relative_velocity": {
              "kilometers_per_second": "4.2458307041",
              "kilometers_per_hour": "15284.9905348568",
              "miles_per_hour": "9497.4987020614"
            },
            "miss_distance": {
              "astronomical": "1.6444270932",
              "lunar": "639.6821392548",
              "kilometers": "246002790.513011484",
              "miles": "152859045.8566431192"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "2170-11-10",
            "close_approach_date_full": "2170-Nov-10 05:57",
            "epoch_date_close_approach": 6338498220000,
            "relative_velocity": {
              "kilometers_per_second": "3.7527965121",
              "kilometers_per_hour": "13510.0674434286",
              "miles_per_hour": "8394.6305178348"
            },
            "miss_distance": {
              "astronomical": "1.8228425861",
              "lunar": "709.0857659929",
              "kilometers": "272693368.225851607",
              "miles": "169443801.8020498966"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "2185-09-13",
            "close_approach_date_full": "2185-Sep-13 19:01",
            "epoch_date_close_approach": 6806919660000,
            "relative_velocity": {
              "kilometers_per_second": "8.3173756879",
              "kilometers_per_hour": "29942.5524763199",
              "miles_per_hour": "18605.1376761889"
            },
            "miss_distance": {
              "astronomical": "0.2200717816",
              "lunar": "85.6079230424",
              "kilometers": "32922269.774465192",
              "miles": "20456949.8364839696"
            },
            "orbiting_body": "Earth"
          }
        ],
        "orbital_data": {
          "orbit_id": "266",
          "orbit_determination_date": "2024-02-16 05:25:47",
          "first_observation_date": "1911-10-04",
          "last_observation_date": "2024-02-15",
          "data_arc_in_days": 41042,
          "observations_used": 2076,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".201378",
          "jupiter_tisserand_invariant": "3.142",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".5467795398304031",
          "semi_major_axis": "2.636157147539425",
          "inclination": "11.57525888751013",
          "ascending_node_longitude": "183.8571590019408",
          "orbital_period": "1563.346950700131",
          "perihelion_distance": "1.19476035548719",
          "perihelion_argument": "156.2155261769503",
          "aphelion_distance": "4.07755393959166",
          "perihelion_time": "2459955.833573002386",
          "mean_anomaly": "148.4506773209914",
          "mean_motion": ".2302751796962134",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "AMO",
            "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
            "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
          }
        },
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2000887?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2000887",
        "neo_reference_id": "2000887",
        "name": "887 Alinda (A918 AA)",
        "name_limited": "Alinda",
        "designation": "887",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2000887",
        "absolute_magnitude_h": 13.88,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 4.4519981645,
            "estimated_diameter_max": 9.9549705315
          },
          "meters": {
            "estimated_diameter_min": 4451.9981644783,
            "estimated_diameter_max": 9954.9705314777
          },
          "miles": {
            "estimated_diameter_min": 2.7663425515,
            "estimated_diameter_max": 6.1857299941
          },
          "feet": {
            "estimated_diameter_min": 14606.2936579469,
            "estimated_diameter_max": 32660.6655184933
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "1910-01-04",
            "close_approach_date_full": "1910-Jan-04 16:47",
            "epoch_date_close_approach": -1893136380000,
            "relative_velocity": {
              "kilometers_per_second": "6.8047915783",
              "kilometers_per_hour": "24497.2496817318",
              "miles_per_hour": "15221.6382814072"
            },
            "miss_distance": {
              "astronomical": "0.3205431789",
              "lunar": "124.6912965921",
              "kilometers": "47952576.806468943",
              "miles": "29796349.5524516934"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1914-01-02",
            "close_approach_date_full": "1914-Jan-02 20:24",
            "epoch_date_close_approach": -1767065760000,
            "relative_velocity": {
              "kilometers_per_second": "6.1066275153",
              "kilometers_per_hour": "21983.8590550944",
              "miles_per_hour": "13659.9150889835"
            },
            "miss_distance": {
              "astronomical": "0.2113160066",
              "lunar": "82.2019265674",
              "kilometers": "31612424.484265942",
              "miles": "19643049.7142043196"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1918-01-03",
            "close_approach_date_full": "1918-Jan-03 12:57",
            "epoch_date_close_approach": -1640775780000,
            "relative_velocity": {
              "kilometers_per_second": "6.5135708511",
              "kilometers_per_hour": "23448.8550638064",
              "miles_per_hour": "14570.2066367301"
            },
            "miss_distance": {
              "astronomical": "0.2162415267",
              "lunar": "84.1179538863",
              "kilometers": "32349271.799868129",
              "miles": "20100905.4050690202"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1922-01-03",
            "close_approach_date_full": "1922-Jan-03 20:13",
            "epoch_date_close_approach": -1514519220000,
            "relative_velocity": {
              "kilometers_per_second": "8.1523980098",
              "kilometers_per_hour": "29348.6328351447",
              "miles_per_hour": "18236.0991080376"
            },
            "miss_distance": {
              "astronomical": "0.3248540683",
              "lunar": "126.3682325687",
              "kilometers": "48597476.678514521",
              "miles": "30197071.7512055498"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1926-01-06",
            "close_approach_date_full": "1926-Jan-06 17:45",
            "epoch_date_close_approach": -1388038500000,
            "relative_velocity": {
              "kilometers_per_second": "10.7038415444",
              "kilometers_per_hour": "38533.8295597975",
              "miles_per_hour": "23943.423150642"
            },
            "miss_distance": {
              "astronomical": "0.4435382718",
              "lunar": "172.5363877302",
              "kilometers": "66352380.724761066",
              "miles": "41229457.5470160708"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1966-01-20",
            "close_approach_date_full": "1966-Jan-20 07:29",
            "epoch_date_close_approach": -124561860000,
            "relative_velocity": {
              "kilometers_per_second": "12.8240821298",
              "kilometers_per_hour": "46166.6956671443",
              "miles_per_hour": "28686.1893160653"
            },
            "miss_distance": {
              "astronomical": "0.3793017127",
              "lunar": "147.5483662403",
              "kilometers": "56742728.307271949",
              "miles": "35258296.4212089362"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1970-01-11",
            "close_approach_date_full": "1970-Jan-11 14:00",
            "epoch_date_close_approach": 914400000,
            "relative_velocity": {
              "kilometers_per_second": "8.8414081953",
              "kilometers_per_hour": "31829.0695029025",
              "miles_per_hour": "19777.3459919563"
            },
            "miss_distance": {
              "astronomical": "0.2285968842",
              "lunar": "88.9241879538",
              "kilometers": "34197606.964956654",
              "miles": "21249407.6198996652"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1974-01-04",
            "close_approach_date_full": "1974-Jan-04 05:00",
            "epoch_date_close_approach": 126507600000,
            "relative_velocity": {
              "kilometers_per_second": "7.0959730762",
              "kilometers_per_hour": "25545.503074393",
              "miles_per_hour": "15872.9821741971"
            },
            "miss_distance": {
              "astronomical": "0.1367787636",
              "lunar": "53.2069390404",
              "kilometers": "20461811.695793532",
              "miles": "12714380.2141214616"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1977-12-15",
            "close_approach_date_full": "1977-Dec-15 08:39",
            "epoch_date_close_approach": 251023140000,
            "relative_velocity": {
              "kilometers_per_second": "11.6622019746",
              "kilometers_per_hour": "41983.9271086964",
              "miles_per_hour": "26087.1795970675"
            },
            "miss_distance": {
              "astronomical": "0.3379661102",
              "lunar": "131.4688168678",
              "kilometers": "50559010.218105274",
              "miles": "31415912.1743258212"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2025-01-08",
            "close_approach_date_full": "2025-Jan-08 13:40",
            "epoch_date_close_approach": 1736343600000,
            "relative_velocity": {
              "kilometers_per_second": "8.2486986341",
              "kilometers_per_hour": "29695.3150828859",
              "miles_per_hour": "18451.5139746965"
            },
            "miss_distance": {
              "astronomical": "0.0821977244",
              "lunar": "31.9749147916",
              "kilometers": "12296604.489087028",
              "miles": "7640755.7229678664"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2056-02-05",
            "close_approach_date_full": "2056-Feb-05 11:25",
            "epoch_date_close_approach": 2716975500000,
            "relative_velocity": {
              "kilometers_per_second": "14.655833254",
              "kilometers_per_hour": "52760.9997143417",
              "miles_per_hour": "32783.6334058364"
            },
            "miss_distance": {
              "astronomical": "0.2817437211",
              "lunar": "109.5983075079",
              "kilometers": "42148260.562434057",
              "miles": "26189714.6802897066"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2087-01-25",
            "close_approach_date_full": "2087-Jan-25 21:50",
            "epoch_date_close_approach": 3694369800000,
            "relative_velocity": {
              "kilometers_per_second": "11.2689479877",
              "kilometers_per_hour": "40568.2127558356",
              "miles_per_hour": "25207.5097537579"
            },
            "miss_distance": {
              "astronomical": "0.1663251003",
              "lunar": "64.7004640167",
              "kilometers": "24881880.732416361",
              "miles": "15460883.7564173418"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2122-01-30",
            "close_approach_date_full": "2122-Jan-30 14:19",
            "epoch_date_close_approach": 4799225940000,
            "relative_velocity": {
              "kilometers_per_second": "13.022533999",
              "kilometers_per_hour": "46881.1223963856",
              "miles_per_hour": "29130.1063023542"
            },
            "miss_distance": {
              "astronomical": "0.2584034253",
              "lunar": "100.5189324417",
              "kilometers": "38656602.025584111",
              "miles": "24020098.6719222918"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2125-12-01",
            "close_approach_date_full": "2125-Dec-01 04:59",
            "epoch_date_close_approach": 4920238740000,
            "relative_velocity": {
              "kilometers_per_second": "15.302999222",
              "kilometers_per_hour": "55090.797199353",
              "miles_per_hour": "34231.2789597869"
            },
            "miss_distance": {
              "astronomical": "0.364668449",
              "lunar": "141.856026661",
              "kilometers": "54553623.22660363",
              "miles": "33898049.599564894"
            },
            "orbiting_body": "Earth"
          }
        ],
        "orbital_data": {
          "orbit_id": "495",
          "orbit_determination_date": "2024-09-26 06:24:43",
          "first_observation_date": "1918-02-03",
          "last_observation_date": "2024-09-25",
          "data_arc_in_days": 38951,
          "observations_used": 3693,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".0805238",
          "jupiter_tisserand_invariant": "3.221",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".5710932671105234",
          "semi_major_axis": "2.472525000383516",
          "inclination": "9.398803141434318",
          "ascending_node_longitude": "110.423006393605",
          "orbital_period": "1420.069056578836",
          "perihelion_distance": "1.060482619902046",
          "perihelion_argument": "350.4742461160188",
          "aphelion_distance": "3.884567380864986",
          "perihelion_time": "2460678.609990569171",
          "mean_anomaly": "340.1984301575826",
          "mean_motion": ".253508798274427",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "AMO",
            "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
            "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
          }
        },
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2001036?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2001036",
        "neo_reference_id": "2001036",
        "name": "1036 Ganymed (A924 UB)",
        "name_limited": "Ganymed",
        "designation": "1036",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2001036",
        "absolute_magnitude_h": 9.25,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 37.5452479361,
            "estimated_diameter_max": 83.9537266171
          },
          "meters": {
            "estimated_diameter_min": 37545.2479360728,
            "estimated_diameter_max": 83953.7266171425
          },
          "miles": {
            "estimated_diameter_min": 23.3295282553,
            "estimated_diameter_max": 52.1664110618
          },
          "feet": {
            "estimated_diameter_min": 123179.9512385851,
            "estimated_diameter_max": 275438.7444345857
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "1910-02-25",
            "close_approach_date_full": "1910-Feb-25 08:36",
            "epoch_date_close_approach": -1888673040000,
            "relative_velocity": {
              "kilometers_per_second": "6.3038663038",
              "kilometers_per_hour": "22693.9186936849",
              "miles_per_hour": "14101.1185349733"
            },
            "miss_distance": {
              "astronomical": "1.956256638",
              "lunar": "760.983832182",
              "kilometers": "292651826.21816106",
              "miles": "181845412.528140228"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "1911-10-15",
            "close_approach_date_full": "1911-Oct-15 19:16",
            "epoch_date_close_approach": -1837053840000,
            "relative_velocity": {
              "kilometers_per_second": "17.0937033606",
              "kilometers_per_hour": "61537.3320982921",
              "miles_per_hour": "38236.9050474082"
            },
            "miss_distance": {
              "astronomical": "0.3813629756",
              "lunar": "148.3501975084",
              "kilometers": "57051088.846621972",
              "miles": "35449902.7754563336"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1924-10-17",
            "close_approach_date_full": "1924-Oct-17 00:51",
            "epoch_date_close_approach": -1426633740000,
            "relative_velocity": {
              "kilometers_per_second": "19.3628738296",
              "kilometers_per_hour": "69706.345786447",
              "miles_per_hour": "43312.812469362"
            },
            "miss_distance": {
              "astronomical": "0.4962748884",
              "lunar": "193.0509315876",
              "kilometers": "74241666.239127708",
              "miles": "46131632.2487820504"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1998-10-14",
            "close_approach_date_full": "1998-Oct-14 05:12",
            "epoch_date_close_approach": 908341920000,
            "relative_velocity": {
              "kilometers_per_second": "13.6399767704",
              "kilometers_per_hour": "49103.9163732694",
              "miles_per_hour": "30511.2640376017"
            },
            "miss_distance": {
              "astronomical": "0.4642628807",
              "lunar": "180.5982605923",
              "kilometers": "69452738.072784109",
              "miles": "43155930.2713503442"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2011-10-13",
            "close_approach_date_full": "2011-Oct-13 00:04",
            "epoch_date_close_approach": 1318464240000,
            "relative_velocity": {
              "kilometers_per_second": "14.3047014785",
              "kilometers_per_hour": "51496.9253226382",
              "miles_per_hour": "31998.1867372804"
            },
            "miss_distance": {
              "astronomical": "0.3591042306",
              "lunar": "139.6915457034",
              "kilometers": "53721228.005748822",
              "miles": "33380823.1934328636"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2024-10-13",
            "close_approach_date_full": "2024-Oct-13 01:56",
            "epoch_date_close_approach": 1728784560000,
            "relative_velocity": {
              "kilometers_per_second": "16.334372763",
              "kilometers_per_hour": "58803.7419469094",
              "miles_per_hour": "36538.3584336227"
            },
            "miss_distance": {
              "astronomical": "0.37409707",
              "lunar": "145.52376023",
              "kilometers": "55964124.8452409",
              "miles": "34774494.66408842"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2037-10-15",
            "close_approach_date_full": "2037-Oct-15 18:31",
            "epoch_date_close_approach": 2139244260000,
            "relative_velocity": {
              "kilometers_per_second": "18.6810511941",
              "kilometers_per_hour": "67251.7842986466",
              "miles_per_hour": "41787.6434160118"
            },
            "miss_distance": {
              "astronomical": "0.4661874523",
              "lunar": "181.3469189447",
              "kilometers": "69740649.884806601",
              "miles": "43334830.3756330538"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2040-06-30",
            "close_approach_date_full": "2040-Jun-30 21:47",
            "epoch_date_close_approach": 2224705620000,
            "relative_velocity": {
              "kilometers_per_second": "6.6728715803",
              "kilometers_per_hour": "24022.3376891748",
              "miles_per_hour": "14926.546438032"
            },
            "miss_distance": {
              "astronomical": "1.9576239694",
              "lunar": "761.5157240966",
              "kilometers": "292856376.083185178",
              "miles": "181972513.9204963364"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "2050-12-07",
            "close_approach_date_full": "2050-Dec-07 07:15",
            "epoch_date_close_approach": 2554010100000,
            "relative_velocity": {
              "kilometers_per_second": "14.9802967307",
              "kilometers_per_hour": "53929.0682305528",
              "miles_per_hour": "33509.4257569232"
            },
            "miss_distance": {
              "astronomical": "0.095659021",
              "lunar": "37.211359169",
              "kilometers": "14310385.78788527",
              "miles": "8892061.398225926"
            },
            "orbiting_body": "Mars"
          },
          {
            "close_approach_date": "2088-05-12",
            "close_approach_date_full": "2088-May-12 05:03",
            "epoch_date_close_approach": 3735176580000,
            "relative_velocity": {
              "kilometers_per_second": "6.2203932237",
              "kilometers_per_hour": "22393.4156053278",
              "miles_per_hour": "13914.3976020994"
            },
            "miss_distance": {
              "astronomical": "1.9597704456",
              "lunar": "762.3507033384",
              "kilometers": "293177484.350710872",
              "miles": "182172041.3457271536"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "2124-10-12",
            "close_approach_date_full": "2124-Oct-12 21:42",
            "epoch_date_close_approach": 4884442920000,
            "relative_velocity": {
              "kilometers_per_second": "14.4716329786",
              "kilometers_per_hour": "52097.8787230212",
              "miles_per_hour": "32371.5958098684"
            },
            "miss_distance": {
              "astronomical": "0.3763480713",
              "lunar": "146.3993997357",
              "kilometers": "56300869.845088131",
              "miles": "34983738.3042369678"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2137-10-12",
            "close_approach_date_full": "2137-Oct-12 19:09",
            "epoch_date_close_approach": 5294660940000,
            "relative_velocity": {
              "kilometers_per_second": "15.0172002441",
              "kilometers_per_hour": "54061.9208786185",
              "miles_per_hour": "33591.9752259394"
            },
            "miss_distance": {
              "astronomical": "0.3591573352",
              "lunar": "139.7122033928",
              "kilometers": "53729172.340796024",
              "miles": "33385759.5743281712"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2150-10-13",
            "close_approach_date_full": "2150-Oct-13 20:02",
            "epoch_date_close_approach": 5704977720000,
            "relative_velocity": {
              "kilometers_per_second": "16.9054538307",
              "kilometers_per_hour": "60859.6337903828",
              "miles_per_hour": "37815.8096738076"
            },
            "miss_distance": {
              "astronomical": "0.4125980916",
              "lunar": "160.5006576324",
              "kilometers": "61723795.669424892",
              "miles": "38353388.1587398296"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2176-12-16",
            "close_approach_date_full": "2176-Dec-16 13:29",
            "epoch_date_close_approach": 6531024540000,
            "relative_velocity": {
              "kilometers_per_second": "15.7498519292",
              "kilometers_per_hour": "56699.4669452327",
              "miles_per_hour": "35230.8437804975"
            },
            "miss_distance": {
              "astronomical": "0.0286835439",
              "lunar": "11.1578985771",
              "kilometers": "4290997.071491493",
              "miles": "2666301.9421608834"
            },
            "orbiting_body": "Mars"
          }
        ],
        "orbital_data": {
          "orbit_id": "1252",
          "orbit_determination_date": "2024-09-27 06:21:18",
          "first_observation_date": "1924-10-23",
          "last_observation_date": "2024-09-26",
          "data_arc_in_days": 36498,
          "observations_used": 10962,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".344742",
          "jupiter_tisserand_invariant": "3.035",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".5328259253944083",
          "semi_major_axis": "2.665298760429642",
          "inclination": "26.68673090090136",
          "ascending_node_longitude": "215.4949774297593",
          "orbital_period": "1589.341680228911",
          "perihelion_distance": "1.245158481951149",
          "perihelion_argument": "132.49614454",
          "aphelion_distance": "4.085439038908136",
          "perihelion_time": "2460569.662513291066",
          "mean_anomaly": "6.984964500281317",
          "mean_motion": ".2265088775298145",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "AMO",
            "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
            "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
          }
        },
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2001221?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2001221",
        "neo_reference_id": "2001221",
        "name": "1221 Amor (1932 EA1)",
        "name_limited": "Amor",
        "designation": "1221",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2001221",
        "absolute_magnitude_h": 17.38,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 0.8882904164,
            "estimated_diameter_max": 1.9862777548
          },
          "meters": {
            "estimated_diameter_min": 888.2904163894,
            "estimated_diameter_max": 1986.2777548083
          },
          "miles": {
            "estimated_diameter_min": 0.5519579043,
            "estimated_diameter_max": 1.2342153948
          },
          "feet": {
            "estimated_diameter_min": 2914.338729707,
            "estimated_diameter_max": 6516.6595090853
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "1900-03-08",
            "close_approach_date_full": "1900-Mar-08 23:35",
            "epoch_date_close_approach": -2203201500000,
            "relative_velocity": {
              "kilometers_per_second": "13.26937926",
              "kilometers_per_hour": "47769.7653360464",
              "miles_per_hour": "29682.2744667229"
            },
            "miss_distance": {
              "astronomical": "0.2850489183",
              "lunar": "110.8840292187",
              "kilometers": "42642711.023484021",
              "miles": "26496951.9500046498"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1908-03-14",
            "close_approach_date_full": "1908-Mar-14 13:15",
            "epoch_date_close_approach": -1950259500000,
            "relative_velocity": {
              "kilometers_per_second": "10.7701457274",
              "kilometers_per_hour": "38772.5246184722",
              "miles_per_hour": "24091.7389775168"
            },
            "miss_distance": {
              "astronomical": "0.1839109068",
              "lunar": "71.5413427452",
              "kilometers": "27512679.927048516",
              "miles": "17095586.5737848808"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1916-03-17",
            "close_approach_date_full": "1916-Mar-17 22:06",
            "epoch_date_close_approach": -1697507640000,
            "relative_velocity": {
              "kilometers_per_second": "9.5575160075",
              "kilometers_per_hour": "34407.0576269065",
              "miles_per_hour": "21379.2075571187"
            },
            "miss_distance": {
              "astronomical": "0.1354294029",
              "lunar": "52.6820377281",
              "kilometers": "20259950.209211823",
              "miles": "12588949.3026682374"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1924-03-20",
            "close_approach_date_full": "1924-Mar-20 12:01",
            "epoch_date_close_approach": -1444823940000,
            "relative_velocity": {
              "kilometers_per_second": "8.8556257677",
              "kilometers_per_hour": "31880.2527636215",
              "miles_per_hour": "19809.1492797069"
            },
            "miss_distance": {
              "astronomical": "0.1162239128",
              "lunar": "45.2111020792",
              "kilometers": "17386849.797945736",
              "miles": "10803687.4907977168"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1932-03-22",
            "close_approach_date_full": "1932-Mar-22 14:22",
            "epoch_date_close_approach": -1192181880000,
            "relative_velocity": {
              "kilometers_per_second": "8.3949317519",
              "kilometers_per_hour": "30221.7543069751",
              "miles_per_hour": "18778.6228359091"
            },
            "miss_distance": {
              "astronomical": "0.1078284733",
              "lunar": "41.9452761137",
              "kilometers": "16130909.931031871",
              "miles": "10023282.6453509798"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1940-03-22",
            "close_approach_date_full": "1940-Mar-22 20:08",
            "epoch_date_close_approach": -939700320000,
            "relative_velocity": {
              "kilometers_per_second": "8.3684250271",
              "kilometers_per_hour": "30126.330097608",
              "miles_per_hour": "18719.3299431498"
            },
            "miss_distance": {
              "astronomical": "0.1052769581",
              "lunar": "40.9527367009",
              "kilometers": "15749208.691839247",
              "miles": "9786104.4934137286"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1948-03-21",
            "close_approach_date_full": "1948-Mar-21 19:24",
            "epoch_date_close_approach": -687328560000,
            "relative_velocity": {
              "kilometers_per_second": "8.5747637086",
              "kilometers_per_hour": "30869.1493510354",
              "miles_per_hour": "19180.8889398142"
            },
            "miss_distance": {
              "astronomical": "0.1098614999",
              "lunar": "42.7361234611",
              "kilometers": "16435046.380045213",
              "miles": "10212264.2715734194"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1956-03-21",
            "close_approach_date_full": "1956-Mar-21 06:18",
            "epoch_date_close_approach": -434914920000,
            "relative_velocity": {
              "kilometers_per_second": "8.7184144921",
              "kilometers_per_hour": "31386.2921715576",
              "miles_per_hour": "19502.221377377"
            },
            "miss_distance": {
              "astronomical": "0.1148121983",
              "lunar": "44.6619451387",
              "kilometers": "17175660.315697621",
              "miles": "10672460.4316083298"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1964-03-19",
            "close_approach_date_full": "1964-Mar-19 02:54",
            "epoch_date_close_approach": -182639160000,
            "relative_velocity": {
              "kilometers_per_second": "9.3128707173",
              "kilometers_per_hour": "33526.3345823879",
              "miles_per_hour": "20831.9605075954"
            },
            "miss_distance": {
              "astronomical": "0.1281807284",
              "lunar": "49.8623033476",
              "kilometers": "19175563.943688508",
              "miles": "11915142.9220890904"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1972-03-14",
            "close_approach_date_full": "1972-Mar-14 08:55",
            "epoch_date_close_approach": 69411300000,
            "relative_velocity": {
              "kilometers_per_second": "11.0809530574",
              "kilometers_per_hour": "39891.4310066544",
              "miles_per_hour": "24786.983894107"
            },
            "miss_distance": {
              "astronomical": "0.1954117169",
              "lunar": "76.0151578741",
              "kilometers": "29233176.621283003",
              "miles": "18164653.6462833214"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1980-03-09",
            "close_approach_date_full": "1980-Mar-09 23:31",
            "epoch_date_close_approach": 321492660000,
            "relative_velocity": {
              "kilometers_per_second": "13.1912984112",
              "kilometers_per_hour": "47488.6742801504",
              "miles_per_hour": "29507.6154159079"
            },
            "miss_distance": {
              "astronomical": "0.2801661027",
              "lunar": "108.9846139503",
              "kilometers": "41912252.210121249",
              "miles": "26043065.8903572762"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1988-03-05",
            "close_approach_date_full": "1988-Mar-05 01:32",
            "epoch_date_close_approach": 573528720000,
            "relative_velocity": {
              "kilometers_per_second": "15.6005955156",
              "kilometers_per_hour": "56162.1438559897",
              "miles_per_hour": "34896.9721087398"
            },
            "miss_distance": {
              "astronomical": "0.3680126447",
              "lunar": "143.1569187883",
              "kilometers": "55053907.780186789",
              "miles": "34208912.0062801282"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2065-05-14",
            "close_approach_date_full": "2065-May-14 22:38",
            "epoch_date_close_approach": 3009566280000,
            "relative_velocity": {
              "kilometers_per_second": "16.5038485669",
              "kilometers_per_hour": "59413.8548410103",
              "miles_per_hour": "36917.4588594044"
            },
            "miss_distance": {
              "astronomical": "0.4969990304",
              "lunar": "193.3326228256",
              "kilometers": "74349996.339905248",
              "miles": "46198945.4520505024"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2073-04-30",
            "close_approach_date_full": "2073-Apr-30 15:11",
            "epoch_date_close_approach": 3260790660000,
            "relative_velocity": {
              "kilometers_per_second": "12.3264960238",
              "kilometers_per_hour": "44375.3856856242",
              "miles_per_hour": "27573.1389556035"
            },
            "miss_distance": {
              "astronomical": "0.3686880387",
              "lunar": "143.4196470543",
              "kilometers": "55154945.283997569",
              "miles": "34271693.7999176922"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2081-04-15",
            "close_approach_date_full": "2081-Apr-15 04:26",
            "epoch_date_close_approach": 3511916760000,
            "relative_velocity": {
              "kilometers_per_second": "9.0784801842",
              "kilometers_per_hour": "32682.5286629556",
              "miles_per_hour": "20307.6523239348"
            },
            "miss_distance": {
              "astronomical": "0.2566701134",
              "lunar": "99.8446741126",
              "kilometers": "38397302.257298458",
              "miles": "23858977.2672084004"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2089-04-07",
            "close_approach_date_full": "2089-Apr-07 05:22",
            "epoch_date_close_approach": 3763689720000,
            "relative_velocity": {
              "kilometers_per_second": "7.900199168",
              "kilometers_per_hour": "28440.7170046818",
              "miles_per_hour": "17671.9555188258"
            },
            "miss_distance": {
              "astronomical": "0.1974870477",
              "lunar": "76.8224615553",
              "kilometers": "29543641.688508399",
              "miles": "18357567.6935139462"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2097-03-31",
            "close_approach_date_full": "2097-Mar-31 04:56",
            "epoch_date_close_approach": 4015544160000,
            "relative_velocity": {
              "kilometers_per_second": "7.5647837584",
              "kilometers_per_hour": "27233.2215302621",
              "miles_per_hour": "16921.6647891787"
            },
            "miss_distance": {
              "astronomical": "0.1405275266",
              "lunar": "54.6652078474",
              "kilometers": "21022618.655728342",
              "miles": "13062849.5002894396"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2105-03-28",
            "close_approach_date_full": "2105-Mar-28 01:54",
            "epoch_date_close_approach": 4267648440000,
            "relative_velocity": {
              "kilometers_per_second": "7.850226698",
              "kilometers_per_hour": "28260.8161126527",
              "miles_per_hour": "17560.1721006646"
            },
            "miss_distance": {
              "astronomical": "0.11397658",
              "lunar": "44.33688962",
              "kilometers": "17050653.5978846",
              "miles": "10594784.85902348"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2113-03-28",
            "close_approach_date_full": "2113-Mar-28 03:53",
            "epoch_date_close_approach": 4520116380000,
            "relative_velocity": {
              "kilometers_per_second": "7.8270908722",
              "kilometers_per_hour": "28177.5271400146",
              "miles_per_hour": "17508.419572083"
            },
            "miss_distance": {
              "astronomical": "0.1153447227",
              "lunar": "44.8690971303",
              "kilometers": "17255324.831660649",
              "miles": "10721961.6664249962"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2121-03-27",
            "close_approach_date_full": "2121-Mar-27 04:24",
            "epoch_date_close_approach": 4772492640000,
            "relative_velocity": {
              "kilometers_per_second": "7.9746532372",
              "kilometers_per_hour": "28708.7516540989",
              "miles_per_hour": "17838.5018264038"
            },
            "miss_distance": {
              "astronomical": "0.1109500292",
              "lunar": "43.1595613588",
              "kilometers": "16597888.044757804",
              "miles": "10313449.3900095352"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2129-03-25",
            "close_approach_date_full": "2129-Mar-25 14:40",
            "epoch_date_close_approach": 5024817600000,
            "relative_velocity": {
              "kilometers_per_second": "8.259040821",
              "kilometers_per_hour": "29732.5469554627",
              "miles_per_hour": "18474.6484124096"
            },
            "miss_distance": {
              "astronomical": "0.108298997",
              "lunar": "42.128309833",
              "kilometers": "16201299.27433639",
              "miles": "10067020.555126582"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2137-03-26",
            "close_approach_date_full": "2137-Mar-26 08:41",
            "epoch_date_close_approach": 5277343260000,
            "relative_velocity": {
              "kilometers_per_second": "8.1154799107",
              "kilometers_per_hour": "29215.7276785882",
              "miles_per_hour": "18153.5170122872"
            },
            "miss_distance": {
              "astronomical": "0.1108819024",
              "lunar": "43.1330600336",
              "kilometers": "16587696.420587888",
              "miles": "10307116.6084053344"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2145-03-25",
            "close_approach_date_full": "2145-Mar-25 20:47",
            "epoch_date_close_approach": 5529761220000,
            "relative_velocity": {
              "kilometers_per_second": "8.231840469",
              "kilometers_per_hour": "29634.6256882721",
              "miles_per_hour": "18413.8039450266"
            },
            "miss_distance": {
              "astronomical": "0.1091826293",
              "lunar": "42.4720427977",
              "kilometers": "16333488.784279591",
              "miles": "10149159.3077807158"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2153-03-23",
            "close_approach_date_full": "2153-Mar-23 13:24",
            "epoch_date_close_approach": 5782022640000,
            "relative_velocity": {
              "kilometers_per_second": "8.7801308617",
              "kilometers_per_hour": "31608.4711020853",
              "miles_per_hour": "19640.2747245152"
            },
            "miss_distance": {
              "astronomical": "0.1146556207",
              "lunar": "44.6010364523",
              "kilometers": "17152236.640247909",
              "miles": "10657905.6345987842"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2161-03-21",
            "close_approach_date_full": "2161-Mar-21 22:17",
            "epoch_date_close_approach": 6034342620000,
            "relative_velocity": {
              "kilometers_per_second": "9.3009457196",
              "kilometers_per_hour": "33483.4045904947",
              "miles_per_hour": "20805.2854801327"
            },
            "miss_distance": {
              "astronomical": "0.1314780889",
              "lunar": "51.1449765821",
              "kilometers": "19668842.051110643",
              "miles": "12221651.7250391534"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2169-03-18",
            "close_approach_date_full": "2169-Mar-18 15:12",
            "epoch_date_close_approach": 6286518720000,
            "relative_velocity": {
              "kilometers_per_second": "10.4840192931",
              "kilometers_per_hour": "37742.4694550848",
              "miles_per_hour": "23451.7027566886"
            },
            "miss_distance": {
              "astronomical": "0.1698005925",
              "lunar": "66.0524304825",
              "kilometers": "25401806.962737975",
              "miles": "15783950.935115055"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2177-03-12",
            "close_approach_date_full": "2177-Mar-12 21:30",
            "epoch_date_close_approach": 6538483800000,
            "relative_velocity": {
              "kilometers_per_second": "12.9548949989",
              "kilometers_per_hour": "46637.6219959388",
              "miles_per_hour": "28978.8046229766"
            },
            "miss_distance": {
              "astronomical": "0.2609685941",
              "lunar": "101.5167831049",
              "kilometers": "39040345.814254567",
              "miles": "24258546.0052523446"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2185-03-07",
            "close_approach_date_full": "2185-Mar-07 20:51",
            "epoch_date_close_approach": 6790510260000,
            "relative_velocity": {
              "kilometers_per_second": "15.732122475",
              "kilometers_per_hour": "56635.6409098434",
              "miles_per_hour": "35191.1847642302"
            },
            "miss_distance": {
              "astronomical": "0.3703556436",
              "lunar": "144.0683453604",
              "kilometers": "55404415.425039132",
              "miles": "34426707.3574867416"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2193-03-02",
            "close_approach_date_full": "2193-Mar-02 19:29",
            "epoch_date_close_approach": 7042534140000,
            "relative_velocity": {
              "kilometers_per_second": "18.6424242932",
              "kilometers_per_hour": "67112.7274556525",
              "miles_per_hour": "41701.2389015414"
            },
            "miss_distance": {
              "astronomical": "0.4776986922",
              "lunar": "185.8247912658",
              "kilometers": "71462706.854905614",
              "miles": "44404866.9585969132"
            },
            "orbiting_body": "Earth"
          }
        ],
        "orbital_data": {
          "orbit_id": "121",
          "orbit_determination_date": "2023-10-12 20:33:22",
          "first_observation_date": "1932-03-12",
          "last_observation_date": "2023-10-11",
          "data_arc_in_days": 33450,
          "observations_used": 622,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".110666",
          "jupiter_tisserand_invariant": "3.781",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".4347181841117018",
          "semi_major_axis": "1.920153887199105",
          "inclination": "11.8684818991409",
          "ascending_node_longitude": "171.2608112276811",
          "orbital_period": "971.8572540079572",
          "perihelion_distance": "1.085428076140884",
          "perihelion_argument": "26.71760451877877",
          "aphelion_distance": "2.754879698257325",
          "perihelion_time": "2460838.872826168096",
          "mean_anomaly": "271.7008006406135",
          "mean_motion": ".3704247702173888",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "AMO",
            "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
            "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
          }
        },
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2001566?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2001566",
        "neo_reference_id": "2001566",
        "name": "1566 Icarus (1949 MA)",
        "name_limited": "Icarus",
        "designation": "1566",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2001566",
        "absolute_magnitude_h": 16.57,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 1.2898968334,
            "estimated_diameter_max": 2.8842970035
          },
          "meters": {
            "estimated_diameter_min": 1289.8968334309,
            "estimated_diameter_max": 2884.2970035133
          },
          "miles": {
            "estimated_diameter_min": 0.8015044853,
            "estimated_diameter_max": 1.7922185134
          },
          "feet": {
            "estimated_diameter_min": 4231.9451269935,
            "estimated_diameter_max": 9462.9169810064
          }
        },
        "is_potentially_hazardous_asteroid": true,
        "close_approach_data": [
          {
            "close_approach_date": "1902-06-11",
            "close_approach_date_full": "1902-Jun-11 20:20",
            "epoch_date_close_approach": -2131933200000,
            "relative_velocity": {
              "kilometers_per_second": "27.0080710025",
              "kilometers_per_hour": "97229.0556090252",
              "miles_per_hour": "60414.3540255079"
            },
            "miss_distance": {
              "astronomical": "0.0844837195",
              "lunar": "32.8641668855",
              "kilometers": "12638584.486877465",
              "miles": "7853252.240000417"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1906-09-01",
            "close_approach_date_full": "1906-Sep-01 21:08",
            "epoch_date_close_approach": -1998615120000,
            "relative_velocity": {
              "kilometers_per_second": "25.1520073201",
              "kilometers_per_hour": "90547.2263522308",
              "miles_per_hour": "56262.5251742514"
            },
            "miss_distance": {
              "astronomical": "0.3860572406",
              "lunar": "150.1762665934",
              "kilometers": "57753340.891837522",
              "miles": "35886261.9621089236"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1911-06-08",
            "close_approach_date_full": "1911-Jun-08 11:07",
            "epoch_date_close_approach": -1848228780000,
            "relative_velocity": {
              "kilometers_per_second": "21.4737511686",
              "kilometers_per_hour": "77305.504206965",
              "miles_per_hour": "48034.6339890445"
            },
            "miss_distance": {
              "astronomical": "0.3361859463",
              "lunar": "130.7763331107",
              "kilometers": "50292701.490414381",
              "miles": "31250435.6041892178"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1912-06-26",
            "close_approach_date_full": "1912-Jun-26 09:25",
            "epoch_date_close_approach": -1815057300000,
            "relative_velocity": {
              "kilometers_per_second": "38.3332906194",
              "kilometers_per_hour": "137999.8462297608",
              "miles_per_hour": "85747.7377864866"
            },
            "miss_distance": {
              "astronomical": "0.3070511702",
              "lunar": "119.4429052078",
              "kilometers": "45934201.042927474",
              "miles": "28542189.0091841812"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1914-08-09",
            "close_approach_date_full": "1914-Aug-09 15:15",
            "epoch_date_close_approach": -1748162700000,
            "relative_velocity": {
              "kilometers_per_second": "42.8975106483",
              "kilometers_per_hour": "154431.0383338631",
              "miles_per_hour": "95957.4415691718"
            },
            "miss_distance": {
              "astronomical": "0.0993895873",
              "lunar": "38.6625494597",
              "kilometers": "14868470.560259051",
              "miles": "9238839.1954788638"
            },
            "orbiting_body": "Merc"
          },
          {
            "close_approach_date": "1915-08-21",
            "close_approach_date_full": "1915-Aug-21 23:01",
            "epoch_date_close_approach": -1715561940000,
            "relative_velocity": {
              "kilometers_per_second": "33.2679902828",
              "kilometers_per_hour": "119764.765018012",
              "miles_per_hour": "74417.167463553"
            },
            "miss_distance": {
              "astronomical": "0.4038606827",
              "lunar": "157.1018055703",
              "kilometers": "60416697.908665849",
              "miles": "37541195.2720887562"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1921-06-15",
            "close_approach_date_full": "1921-Jun-15 13:34",
            "epoch_date_close_approach": -1531995960000,
            "relative_velocity": {
              "kilometers_per_second": "30.2012714373",
              "kilometers_per_hour": "108724.577174118",
              "miles_per_hour": "67557.2240779957"
            },
            "miss_distance": {
              "astronomical": "0.0572518042",
              "lunar": "22.2709518338",
              "kilometers": "8564747.961977054",
              "miles": "5321887.6043651852"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1925-09-05",
            "close_approach_date_full": "1925-Sep-05 01:06",
            "epoch_date_close_approach": -1398725640000,
            "relative_velocity": {
              "kilometers_per_second": "21.9053623562",
              "kilometers_per_hour": "78859.3044824528",
              "miles_per_hour": "49000.1050546663"
            },
            "miss_distance": {
              "astronomical": "0.4358992973",
              "lunar": "169.5648266497",
              "kilometers": "65209606.410576751",
              "miles": "40519370.5153551238"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1928-02-18",
            "close_approach_date_full": "1928-Feb-18 02:03",
            "epoch_date_close_approach": -1321307820000,
            "relative_velocity": {
              "kilometers_per_second": "30.4454072887",
              "kilometers_per_hour": "109603.4662393096",
              "miles_per_hour": "68103.3315640865"
            },
            "miss_distance": {
              "astronomical": "0.1332018051",
              "lunar": "51.8155021839",
              "kilometers": "19926706.323115137",
              "miles": "12381881.1537254106"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1930-06-08",
            "close_approach_date_full": "1930-Jun-08 19:39",
            "epoch_date_close_approach": -1248582060000,
            "relative_velocity": {
              "kilometers_per_second": "23.5673744539",
              "kilometers_per_hour": "84842.5480340094",
              "miles_per_hour": "52717.8599159099"
            },
            "miss_distance": {
              "astronomical": "0.2200473286",
              "lunar": "85.5984108254",
              "kilometers": "32918611.657750082",
              "miles": "20454676.7881598516"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1931-07-02",
            "close_approach_date_full": "1931-Jul-02 22:56",
            "epoch_date_close_approach": -1214960640000,
            "relative_velocity": {
              "kilometers_per_second": "42.2781102361",
              "kilometers_per_hour": "152201.1968498858",
              "miles_per_hour": "94571.904787086"
            },
            "miss_distance": {
              "astronomical": "0.4233026722",
              "lunar": "164.6647394858",
              "kilometers": "63325178.126428214",
              "miles": "39348441.0763047932"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1934-08-27",
            "close_approach_date_full": "1934-Aug-27 11:44",
            "epoch_date_close_approach": -1115468160000,
            "relative_velocity": {
              "kilometers_per_second": "29.3930605429",
              "kilometers_per_hour": "105815.0179546067",
              "miles_per_hour": "65749.3371285166"
            },
            "miss_distance": {
              "astronomical": "0.3720268039",
              "lunar": "144.7184267171",
              "kilometers": "55654417.446347693",
              "miles": "34582051.4101284434"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1939-06-10",
            "close_approach_date_full": "1939-Jun-10 17:55",
            "epoch_date_close_approach": -964418700000,
            "relative_velocity": {
              "kilometers_per_second": "20.2647774633",
              "kilometers_per_hour": "72953.1988677698",
              "miles_per_hour": "45330.2807075873"
            },
            "miss_distance": {
              "astronomical": "0.458325223",
              "lunar": "178.288511747",
              "kilometers": "68564477.12807501",
              "miles": "42603990.514094738"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1939-06-14",
            "close_approach_date_full": "1939-Jun-14 01:07",
            "epoch_date_close_approach": -964133580000,
            "relative_velocity": {
              "kilometers_per_second": "24.5293290355",
              "kilometers_per_hour": "88305.5845277078",
              "miles_per_hour": "54869.6561194527"
            },
            "miss_distance": {
              "astronomical": "0.0719278071",
              "lunar": "27.9799169619",
              "kilometers": "10760246.735930877",
              "miles": "6686107.2827930226"
            },
            "orbiting_body": "Mars"
          },
          {
            "close_approach_date": "1940-06-09",
            "close_approach_date_full": "1940-Jun-09 04:40",
            "epoch_date_close_approach": -932930400000,
            "relative_velocity": {
              "kilometers_per_second": "32.0967953652",
              "kilometers_per_hour": "115548.4633146901",
              "miles_per_hour": "71797.3215523973"
            },
            "miss_distance": {
              "astronomical": "0.1077005507",
              "lunar": "41.8955142223",
              "kilometers": "16111772.982547009",
              "miles": "10011391.4969623642"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1940-06-20",
            "close_approach_date_full": "1940-Jun-20 13:42",
            "epoch_date_close_approach": -931947480000,
            "relative_velocity": {
              "kilometers_per_second": "34.0549944136",
              "kilometers_per_hour": "122597.9798888693",
              "miles_per_hour": "76177.6170037255"
            },
            "miss_distance": {
              "astronomical": "0.1747098634",
              "lunar": "67.9621368626",
              "kilometers": "26136223.432630958",
              "miles": "16240296.1684969004"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1943-08-15",
            "close_approach_date_full": "1943-Aug-15 15:46",
            "epoch_date_close_approach": -832493640000,
            "relative_velocity": {
              "kilometers_per_second": "37.6202941475",
              "kilometers_per_hour": "135433.0589310835",
              "miles_per_hour": "84152.8359785946"
            },
            "miss_distance": {
              "astronomical": "0.4723124994",
              "lunar": "183.7295622666",
              "kilometers": "70656943.884616278",
              "miles": "43904189.0656015164"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1949-04-19",
            "close_approach_date_full": "1949-Apr-19 21:19",
            "epoch_date_close_approach": -653280060000,
            "relative_velocity": {
              "kilometers_per_second": "35.6669643214",
              "kilometers_per_hour": "128401.0715570062",
              "miles_per_hour": "79783.4324905186"
            },
            "miss_distance": {
              "astronomical": "0.0920122315",
              "lunar": "35.7927580535",
              "kilometers": "13764833.846346905",
              "miles": "8553071.140941089"
            },
            "orbiting_body": "Merc"
          },
          {
            "close_approach_date": "1949-06-11",
            "close_approach_date_full": "1949-Jun-11 09:20",
            "epoch_date_close_approach": -648744000000,
            "relative_velocity": {
              "kilometers_per_second": "26.5514646706",
              "kilometers_per_hour": "95585.2728140977",
              "miles_per_hour": "59392.9713216264"
            },
            "miss_distance": {
              "astronomical": "0.0986987841",
              "lunar": "38.3938270149",
              "kilometers": "14765127.872949867",
              "miles": "9174625.0272354846"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1952-09-29",
            "close_approach_date_full": "1952-Sep-29 07:06",
            "epoch_date_close_approach": -544553640000,
            "relative_velocity": {
              "kilometers_per_second": "33.6738490136",
              "kilometers_per_hour": "121225.8564491231",
              "miles_per_hour": "75325.0328586232"
            },
            "miss_distance": {
              "astronomical": "0.0916543389",
              "lunar": "35.6535378321",
              "kilometers": "13711293.875698143",
              "miles": "8519802.9458466534"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1953-09-01",
            "close_approach_date_full": "1953-Sep-01 09:15",
            "epoch_date_close_approach": -515429100000,
            "relative_velocity": {
              "kilometers_per_second": "25.6558023616",
              "kilometers_per_hour": "92360.8885018558",
              "miles_per_hour": "57389.4643027225"
            },
            "miss_distance": {
              "astronomical": "0.3807770991",
              "lunar": "148.1222915499",
              "kilometers": "56963442.970138917",
              "miles": "35395442.1531823746"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1958-06-08",
            "close_approach_date_full": "1958-Jun-08 15:03",
            "epoch_date_close_approach": -364985820000,
            "relative_velocity": {
              "kilometers_per_second": "21.2294041838",
              "kilometers_per_hour": "76425.8550618334",
              "miles_per_hour": "47488.0542188375"
            },
            "miss_distance": {
              "astronomical": "0.3531702823",
              "lunar": "137.3832398147",
              "kilometers": "52833521.979378701",
              "miles": "32829228.2464440338"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1959-06-26",
            "close_approach_date_full": "1959-Jun-26 14:26",
            "epoch_date_close_approach": -331896840000,
            "relative_velocity": {
              "kilometers_per_second": "37.7427242406",
              "kilometers_per_hour": "135873.8072662039",
              "miles_per_hour": "84426.6998538254"
            },
            "miss_distance": {
              "astronomical": "0.2888437781",
              "lunar": "112.3602296809",
              "kilometers": "43210413.966512647",
              "miles": "26849706.2013706486"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1962-08-21",
            "close_approach_date_full": "1962-Aug-21 02:43",
            "epoch_date_close_approach": -232406220000,
            "relative_velocity": {
              "kilometers_per_second": "33.9210532256",
              "kilometers_per_hour": "122115.7916123216",
              "miles_per_hour": "75878.0039604451"
            },
            "miss_distance": {
              "astronomical": "0.4110192939",
              "lunar": "159.8865053271",
              "kilometers": "61487610.896343993",
              "miles": "38206629.7460253834"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1965-01-19",
            "close_approach_date_full": "1965-Jan-19 02:07",
            "epoch_date_close_approach": -156203580000,
            "relative_velocity": {
              "kilometers_per_second": "34.778862008",
              "kilometers_per_hour": "125203.9032286481",
              "miles_per_hour": "77796.8364256008"
            },
            "miss_distance": {
              "astronomical": "0.0869458668",
              "lunar": "33.8219421852",
              "kilometers": "13006916.478583716",
              "miles": "8082123.1267626408"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1968-04-25",
            "close_approach_date_full": "1968-Apr-25 13:51",
            "epoch_date_close_approach": -53172540000,
            "relative_velocity": {
              "kilometers_per_second": "40.5829853243",
              "kilometers_per_hour": "146098.747167404",
              "miles_per_hour": "90780.0798718795"
            },
            "miss_distance": {
              "astronomical": "0.09149043",
              "lunar": "35.58977727",
              "kilometers": "13686773.4533841",
              "miles": "8504566.66193658"
            },
            "orbiting_body": "Merc"
          },
          {
            "close_approach_date": "1968-06-14",
            "close_approach_date_full": "1968-Jun-14 20:39",
            "epoch_date_close_approach": -48828060000,
            "relative_velocity": {
              "kilometers_per_second": "29.6050257418",
              "kilometers_per_hour": "106578.0926704282",
              "miles_per_hour": "66223.4820818002"
            },
            "miss_distance": {
              "astronomical": "0.0424822034",
              "lunar": "16.5255771226",
              "kilometers": "6355247.141546758",
              "miles": "3948967.4577029404"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1972-09-04",
            "close_approach_date_full": "1972-Sep-04 18:18",
            "epoch_date_close_approach": 84478680000,
            "relative_velocity": {
              "kilometers_per_second": "22.4264427477",
              "kilometers_per_hour": "80735.1938915832",
              "miles_per_hour": "50165.7097822451"
            },
            "miss_distance": {
              "astronomical": "0.4248230139",
              "lunar": "165.2561524071",
              "kilometers": "63552618.006420393",
              "miles": "39489765.6644237034"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1977-05-11",
            "close_approach_date_full": "1977-May-11 10:27",
            "epoch_date_close_approach": 232194420000,
            "relative_velocity": {
              "kilometers_per_second": "36.6241271186",
              "kilometers_per_hour": "131846.8576270676",
              "miles_per_hour": "81924.5099516632"
            },
            "miss_distance": {
              "astronomical": "0.093271588",
              "lunar": "36.282647732",
              "kilometers": "13953230.89631756",
              "miles": "8670135.639439928"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1977-06-08",
            "close_approach_date_full": "1977-Jun-08 14:37",
            "epoch_date_close_approach": 234628620000,
            "relative_velocity": {
              "kilometers_per_second": "23.1596061935",
              "kilometers_per_hour": "83374.5822966432",
              "miles_per_hour": "51805.723094267"
            },
            "miss_distance": {
              "astronomical": "0.2386779758",
              "lunar": "92.8457325862",
              "kilometers": "35705716.795591546",
              "miles": "22186503.6149374948"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1978-07-02",
            "close_approach_date_full": "1978-Jul-02 02:52",
            "epoch_date_close_approach": 268195920000,
            "relative_velocity": {
              "kilometers_per_second": "41.6895294723",
              "kilometers_per_hour": "150082.3061003225",
              "miles_per_hour": "93255.3084766143"
            },
            "miss_distance": {
              "astronomical": "0.4053554617",
              "lunar": "157.6832746013",
              "kilometers": "60640313.663186579",
              "miles": "37680143.6588256302"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1981-08-26",
            "close_approach_date_full": "1981-Aug-26 20:57",
            "epoch_date_close_approach": 367707420000,
            "relative_velocity": {
              "kilometers_per_second": "29.9245497862",
              "kilometers_per_hour": "107728.3792303099",
              "miles_per_hour": "66938.2254167445"
            },
            "miss_distance": {
              "astronomical": "0.3731361363",
              "lunar": "145.1499570207",
              "kilometers": "55820371.210509681",
              "miles": "34685170.2974923578"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1986-06-11",
            "close_approach_date_full": "1986-Jun-11 02:10",
            "epoch_date_close_approach": 518839800000,
            "relative_velocity": {
              "kilometers_per_second": "20.2062941581",
              "kilometers_per_hour": "72742.6589690743",
              "miles_per_hour": "45199.4594022007"
            },
            "miss_distance": {
              "astronomical": "0.4707190712",
              "lunar": "183.1097186968",
              "kilometers": "70418570.419898344",
              "miles": "43756070.6629673872"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1986-06-18",
            "close_approach_date_full": "1986-Jun-18 23:17",
            "epoch_date_close_approach": 519520620000,
            "relative_velocity": {
              "kilometers_per_second": "22.873712666",
              "kilometers_per_hour": "82345.3655977249",
              "miles_per_hour": "51166.207862653"
            },
            "miss_distance": {
              "astronomical": "0.0626426445",
              "lunar": "24.3679887105",
              "kilometers": "9371206.188367215",
              "miles": "5822997.509468967"
            },
            "orbiting_body": "Mars"
          },
          {
            "close_approach_date": "1987-05-05",
            "close_approach_date_full": "1987-May-05 08:06",
            "epoch_date_close_approach": 547200360000,
            "relative_velocity": {
              "kilometers_per_second": "42.7988637787",
              "kilometers_per_hour": "154075.9096034834",
              "miles_per_hour": "95736.7783866756"
            },
            "miss_distance": {
              "astronomical": "0.0981111705",
              "lunar": "38.1652453245",
              "kilometers": "14677222.130006835",
              "miles": "9120002.931430923"
            },
            "orbiting_body": "Merc"
          },
          {
            "close_approach_date": "1987-06-21",
            "close_approach_date_full": "1987-Jun-21 00:47",
            "epoch_date_close_approach": 551234820000,
            "relative_velocity": {
              "kilometers_per_second": "33.6426097703",
              "kilometers_per_hour": "121113.3951731754",
              "miles_per_hour": "75255.1537952433"
            },
            "miss_distance": {
              "astronomical": "0.1607286757",
              "lunar": "62.5234548473",
              "kilometers": "24044667.532640759",
              "miles": "14940663.5970061142"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1989-09-01",
            "close_approach_date_full": "1989-Sep-01 01:33",
            "epoch_date_close_approach": 620616780000,
            "relative_velocity": {
              "kilometers_per_second": "38.8312519225",
              "kilometers_per_hour": "139792.5069209219",
              "miles_per_hour": "86861.6274253917"
            },
            "miss_distance": {
              "astronomical": "0.1179083072",
              "lunar": "45.8663315008",
              "kilometers": "17638831.612425664",
              "miles": "10960261.7298716032"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1990-08-15",
            "close_approach_date_full": "1990-Aug-15 06:31",
            "epoch_date_close_approach": 650701860000,
            "relative_velocity": {
              "kilometers_per_second": "37.9701323019",
              "kilometers_per_hour": "136692.4762867493",
              "miles_per_hour": "84935.3889460637"
            },
            "miss_distance": {
              "astronomical": "0.4775583771",
              "lunar": "185.7702086919",
              "kilometers": "71441716.014816777",
              "miles": "44391823.8553824426"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1996-06-11",
            "close_approach_date_full": "1996-Jun-11 07:34",
            "epoch_date_close_approach": 834478440000,
            "relative_velocity": {
              "kilometers_per_second": "26.4609764382",
              "kilometers_per_hour": "95259.5151776039",
              "miles_per_hour": "59190.5581946617"
            },
            "miss_distance": {
              "astronomical": "0.1011943665",
              "lunar": "39.3646085685",
              "kilometers": "15138461.684399355",
              "miles": "9406603.900666899"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2000-09-01",
            "close_approach_date_full": "2000-Sep-01 13:10",
            "epoch_date_close_approach": 967813800000,
            "relative_velocity": {
              "kilometers_per_second": "25.6179538711",
              "kilometers_per_hour": "92224.6339359265",
              "miles_per_hour": "57304.8010142428"
            },
            "miss_distance": {
              "astronomical": "0.38014446",
              "lunar": "147.87619494",
              "kilometers": "56868801.5083002",
              "miles": "35336634.67573476"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2005-06-08",
            "close_approach_date_full": "2005-Jun-08 13:59",
            "epoch_date_close_approach": 1118239140000,
            "relative_velocity": {
              "kilometers_per_second": "21.3246214496",
              "kilometers_per_hour": "76768.6372185049",
              "miles_per_hour": "47701.045720576"
            },
            "miss_distance": {
              "astronomical": "0.3468146443",
              "lunar": "134.9108966327",
              "kilometers": "51882732.072087641",
              "miles": "32238434.7935098058"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2006-06-27",
            "close_approach_date_full": "2006-Jun-27 01:05",
            "epoch_date_close_approach": 1151370300000,
            "relative_velocity": {
              "kilometers_per_second": "38.05184602",
              "kilometers_per_hour": "136986.6456719176",
              "miles_per_hour": "85118.1743620868"
            },
            "miss_distance": {
              "astronomical": "0.296982581",
              "lunar": "115.526224009",
              "kilometers": "44427961.54470247",
              "miles": "27606255.184815286"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2009-08-21",
            "close_approach_date_full": "2009-Aug-21 21:05",
            "epoch_date_close_approach": 1250888700000,
            "relative_velocity": {
              "kilometers_per_second": "33.4789685779",
              "kilometers_per_hour": "120524.2868802794",
              "miles_per_hour": "74889.1048118047"
            },
            "miss_distance": {
              "astronomical": "0.4041929671",
              "lunar": "157.2310642019",
              "kilometers": "60466406.947140077",
              "miles": "37572083.0363119826"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2015-06-16",
            "close_approach_date_full": "2015-Jun-16 15:39",
            "epoch_date_close_approach": 1434469140000,
            "relative_velocity": {
              "kilometers_per_second": "30.2225835936",
              "kilometers_per_hour": "108801.3009367883",
              "miles_per_hour": "67604.8972404171"
            },
            "miss_distance": {
              "astronomical": "0.0538362061",
              "lunar": "20.9422841729",
              "kilometers": "8053781.761441007",
              "miles": "5004387.9300076166"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2019-09-06",
            "close_approach_date_full": "2019-Sep-06 10:20",
            "epoch_date_close_approach": 1567765200000,
            "relative_velocity": {
              "kilometers_per_second": "21.7030030193",
              "kilometers_per_hour": "78130.8108694235",
              "miles_per_hour": "48547.4474538371"
            },
            "miss_distance": {
              "astronomical": "0.4388241194",
              "lunar": "170.7025824466",
              "kilometers": "65647153.566865678",
              "miles": "40791249.7110672364"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2024-06-09",
            "close_approach_date_full": "2024-Jun-09 01:25",
            "epoch_date_close_approach": 1717896300000,
            "relative_velocity": {
              "kilometers_per_second": "23.873615536",
              "kilometers_per_hour": "85945.0159294848",
              "miles_per_hour": "53402.8905924068"
            },
            "miss_distance": {
              "astronomical": "0.2056648618",
              "lunar": "80.0036312402",
              "kilometers": "30767025.259124366",
              "miles": "19117742.9944976108"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2025-05-24",
            "close_approach_date_full": "2025-May-24 15:02",
            "epoch_date_close_approach": 1748098920000,
            "relative_velocity": {
              "kilometers_per_second": "42.2723767564",
              "kilometers_per_hour": "152180.5563231242",
              "miles_per_hour": "94559.0795664435"
            },
            "miss_distance": {
              "astronomical": "0.0958471109",
              "lunar": "37.2845261401",
              "kilometers": "14338523.636293783",
              "miles": "8909545.4464808854"
            },
            "orbiting_body": "Merc"
          },
          {
            "close_approach_date": "2025-07-03",
            "close_approach_date_full": "2025-Jul-03 19:20",
            "epoch_date_close_approach": 1751570400000,
            "relative_velocity": {
              "kilometers_per_second": "42.8342978911",
              "kilometers_per_hour": "154203.4724079413",
              "miles_per_hour": "95816.04095259"
            },
            "miss_distance": {
              "astronomical": "0.4376264023",
              "lunar": "170.2366704947",
              "kilometers": "65467977.639843101",
              "miles": "40679914.9526767538"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2028-08-28",
            "close_approach_date_full": "2028-Aug-28 15:55",
            "epoch_date_close_approach": 1851090900000,
            "relative_velocity": {
              "kilometers_per_second": "28.7144791777",
              "kilometers_per_hour": "103372.1250397646",
              "miles_per_hour": "64231.4184726249"
            },
            "miss_distance": {
              "astronomical": "0.3685132899",
              "lunar": "143.3516697711",
              "kilometers": "55128803.235732513",
              "miles": "34255449.8843661594"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2033-04-30",
            "close_approach_date_full": "2033-Apr-30 16:13",
            "epoch_date_close_approach": 1998490380000,
            "relative_velocity": {
              "kilometers_per_second": "30.0362016293",
              "kilometers_per_hour": "108130.3258656024",
              "miles_per_hour": "67187.9794246572"
            },
            "miss_distance": {
              "astronomical": "0.1382840194",
              "lunar": "53.7924835466",
              "kilometers": "20686994.757278678",
              "miles": "12854302.4802466364"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2033-06-10",
            "close_approach_date_full": "2033-Jun-10 02:51",
            "epoch_date_close_approach": 2001984660000,
            "relative_velocity": {
              "kilometers_per_second": "20.4008437179",
              "kilometers_per_hour": "73443.037384571",
              "miles_per_hour": "45634.6473126519"
            },
            "miss_distance": {
              "astronomical": "0.4346424568",
              "lunar": "169.0759156952",
              "kilometers": "65021585.748847016",
              "miles": "40402539.8936641808"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2034-06-22",
            "close_approach_date_full": "2034-Jun-22 22:51",
            "epoch_date_close_approach": 2034629460000,
            "relative_velocity": {
              "kilometers_per_second": "35.019966125",
              "kilometers_per_hour": "126071.8780501382",
              "miles_per_hour": "78336.1622250984"
            },
            "miss_distance": {
              "astronomical": "0.2027843412",
              "lunar": "78.8831087268",
              "kilometers": "30336105.512873244",
              "miles": "18849981.8804250072"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2037-08-17",
            "close_approach_date_full": "2037-Aug-17 13:46",
            "epoch_date_close_approach": 2134129560000,
            "relative_velocity": {
              "kilometers_per_second": "36.49651296",
              "kilometers_per_hour": "131387.4466559687",
              "miles_per_hour": "81639.0498402045"
            },
            "miss_distance": {
              "astronomical": "0.4499147316",
              "lunar": "175.0168305924",
              "kilometers": "67306285.528981692",
              "miles": "41822186.5071516696"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2043-06-13",
            "close_approach_date_full": "2043-Jun-13 16:57",
            "epoch_date_close_approach": 2317827420000,
            "relative_velocity": {
              "kilometers_per_second": "27.7088153303",
              "kilometers_per_hour": "99751.7351889277",
              "miles_per_hour": "61981.8490122534"
            },
            "miss_distance": {
              "astronomical": "0.0586289374",
              "lunar": "22.8066566486",
              "kilometers": "8770764.155403338",
              "miles": "5449900.1309405444"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2044-06-04",
            "close_approach_date_full": "2044-Jun-04 01:27",
            "epoch_date_close_approach": 2348616420000,
            "relative_velocity": {
              "kilometers_per_second": "39.8896045172",
              "kilometers_per_hour": "143602.5762619232",
              "miles_per_hour": "89229.0563445267"
            },
            "miss_distance": {
              "astronomical": "0.0890129048",
              "lunar": "34.6260199672",
              "kilometers": "13316140.960592776",
              "miles": "8274266.3100852688"
            },
            "orbiting_body": "Merc"
          },
          {
            "close_approach_date": "2045-08-21",
            "close_approach_date_full": "2045-Aug-21 08:04",
            "epoch_date_close_approach": 2386915440000,
            "relative_velocity": {
              "kilometers_per_second": "32.5298108014",
              "kilometers_per_hour": "117107.3188851635",
              "miles_per_hour": "72765.9337817284"
            },
            "miss_distance": {
              "astronomical": "0.0989931063",
              "lunar": "38.5083183507",
              "kilometers": "14809157.847163581",
              "miles": "9201983.9845601778"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2047-09-04",
            "close_approach_date_full": "2047-Sep-04 06:05",
            "epoch_date_close_approach": 2451189900000,
            "relative_velocity": {
              "kilometers_per_second": "24.2882200078",
              "kilometers_per_hour": "87437.5920279216",
              "miles_per_hour": "54330.3193353494"
            },
            "miss_distance": {
              "astronomical": "0.3932907861",
              "lunar": "152.9901157929",
              "kilometers": "58835463.891185607",
              "miles": "36558662.0142990966"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2052-06-08",
            "close_approach_date_full": "2052-Jun-08 09:26",
            "epoch_date_close_approach": 2601451560000,
            "relative_velocity": {
              "kilometers_per_second": "21.9008151715",
              "kilometers_per_hour": "78842.9346173147",
              "miles_per_hour": "48989.9334570753"
            },
            "miss_distance": {
              "astronomical": "0.3067236102",
              "lunar": "119.3154843678",
              "kilometers": "45885198.764630274",
              "miles": "28511740.4053708212"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2053-06-29",
            "close_approach_date_full": "2053-Jun-29 00:06",
            "epoch_date_close_approach": 2634768360000,
            "relative_velocity": {
              "kilometers_per_second": "39.376481463",
              "kilometers_per_hour": "141755.3332669318",
              "miles_per_hour": "88081.2513846666"
            },
            "miss_distance": {
              "astronomical": "0.3366047076",
              "lunar": "130.9392312564",
              "kilometers": "50355347.288932812",
              "miles": "31289361.8983523256"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2056-08-23",
            "close_approach_date_full": "2056-Aug-23 19:39",
            "epoch_date_close_approach": 2734285140000,
            "relative_velocity": {
              "kilometers_per_second": "32.2074181994",
              "kilometers_per_hour": "115946.705517809",
              "miles_per_hour": "72044.7737702186"
            },
            "miss_distance": {
              "astronomical": "0.3884887894",
              "lunar": "151.1221390766",
              "kilometers": "58117095.413118578",
              "miles": "36112288.5406412564"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2057-12-11",
            "close_approach_date_full": "2057-Dec-11 11:27",
            "epoch_date_close_approach": 2775295620000,
            "relative_velocity": {
              "kilometers_per_second": "34.1516635692",
              "kilometers_per_hour": "122945.9888491844",
              "miles_per_hour": "76393.8562379835"
            },
            "miss_distance": {
              "astronomical": "0.0847379334",
              "lunar": "32.9630560926",
              "kilometers": "12676614.344841858",
              "miles": "7876882.8979713204"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2062-06-18",
            "close_approach_date_full": "2062-Jun-18 01:10",
            "epoch_date_close_approach": 2917818600000,
            "relative_velocity": {
              "kilometers_per_second": "31.2748984379",
              "kilometers_per_hour": "112589.6343764458",
              "miles_per_hour": "69958.8203157421"
            },
            "miss_distance": {
              "astronomical": "0.0834014077",
              "lunar": "32.4431475953",
              "kilometers": "12476672.946921599",
              "miles": "7752645.0742881062"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2066-09-06",
            "close_approach_date_full": "2066-Sep-06 21:29",
            "epoch_date_close_approach": 3051034140000,
            "relative_velocity": {
              "kilometers_per_second": "20.9947945695",
              "kilometers_per_hour": "75581.2604503537",
              "miles_per_hour": "46963.2559726101"
            },
            "miss_distance": {
              "astronomical": "0.4557685583",
              "lunar": "177.2939691787",
              "kilometers": "68182005.534650821",
              "miles": "42366333.6862344898"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2070-04-02",
            "close_approach_date_full": "2070-Apr-02 23:30",
            "epoch_date_close_approach": 3163707000000,
            "relative_velocity": {
              "kilometers_per_second": "36.2348604589",
              "kilometers_per_hour": "130445.4976520098",
              "miles_per_hour": "81053.7593604946"
            },
            "miss_distance": {
              "astronomical": "0.0865160716",
              "lunar": "33.6547518524",
              "kilometers": "12942620.032127492",
              "miles": "8042171.1675317096"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2071-06-10",
            "close_approach_date_full": "2071-Jun-10 12:28",
            "epoch_date_close_approach": 3201164880000,
            "relative_velocity": {
              "kilometers_per_second": "24.450848678",
              "kilometers_per_hour": "88023.0552408338",
              "miles_per_hour": "54694.1034078392"
            },
            "miss_distance": {
              "astronomical": "0.1794463512",
              "lunar": "69.8046306168",
              "kilometers": "26844791.918791944",
              "miles": "16680580.2095550672"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2072-07-05",
            "close_approach_date_full": "2072-Jul-05 01:07",
            "epoch_date_close_approach": 3234906420000,
            "relative_velocity": {
              "kilometers_per_second": "43.6468472678",
              "kilometers_per_hour": "157128.6501639806",
              "miles_per_hour": "97633.6326532801"
            },
            "miss_distance": {
              "astronomical": "0.4607999836",
              "lunar": "179.2511936204",
              "kilometers": "68934696.042594932",
              "miles": "42834033.8803247816"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2074-11-13",
            "close_approach_date_full": "2074-Nov-13 22:38",
            "epoch_date_close_approach": 3309374280000,
            "relative_velocity": {
              "kilometers_per_second": "24.0501539465",
              "kilometers_per_hour": "86580.5542075548",
              "miles_per_hour": "53797.789363022"
            },
            "miss_distance": {
              "astronomical": "0.0605291637",
              "lunar": "23.5458446793",
              "kilometers": "9055033.962401319",
              "miles": "5626537.1982394422"
            },
            "orbiting_body": "Mars"
          },
          {
            "close_approach_date": "2075-08-30",
            "close_approach_date_full": "2075-Aug-30 18:05",
            "epoch_date_close_approach": 3334413900000,
            "relative_velocity": {
              "kilometers_per_second": "28.0049843733",
              "kilometers_per_hour": "100817.9437439527",
              "miles_per_hour": "62644.34954468"
            },
            "miss_distance": {
              "astronomical": "0.3674214533",
              "lunar": "142.9269453337",
              "kilometers": "54965466.805984471",
              "miles": "34153957.3331928598"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2080-06-09",
            "close_approach_date_full": "2080-Jun-09 19:05",
            "epoch_date_close_approach": 3485185500000,
            "relative_velocity": {
              "kilometers_per_second": "20.5164277054",
              "kilometers_per_hour": "73859.1397394209",
              "miles_per_hour": "45893.1971341974"
            },
            "miss_distance": {
              "astronomical": "0.4187388584",
              "lunar": "162.8894159176",
              "kilometers": "62642441.302871608",
              "miles": "38924208.0860918704"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2081-06-23",
            "close_approach_date_full": "2081-Jun-23 19:30",
            "epoch_date_close_approach": 3517932600000,
            "relative_velocity": {
              "kilometers_per_second": "35.5899790044",
              "kilometers_per_hour": "128123.9244156884",
              "miles_per_hour": "79611.2240348482"
            },
            "miss_distance": {
              "astronomical": "0.2204431119",
              "lunar": "85.7523705291",
              "kilometers": "32977819.996411653",
              "miles": "20491467.1438126914"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2082-07-24",
            "close_approach_date_full": "2082-Jul-24 17:35",
            "epoch_date_close_approach": 3552140100000,
            "relative_velocity": {
              "kilometers_per_second": "38.6175386713",
              "kilometers_per_hour": "139023.1392167254",
              "miles_per_hour": "86383.5722538592"
            },
            "miss_distance": {
              "astronomical": "0.1117003825",
              "lunar": "43.4514487925",
              "kilometers": "16710139.300185275",
              "miles": "10383199.085795795"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2084-08-18",
            "close_approach_date_full": "2084-Aug-18 12:56",
            "epoch_date_close_approach": 3617441760000,
            "relative_velocity": {
              "kilometers_per_second": "35.9178640208",
              "kilometers_per_hour": "129304.3104748292",
              "miles_per_hour": "80344.670028096"
            },
            "miss_distance": {
              "astronomical": "0.4388164685",
              "lunar": "170.6996062465",
              "kilometers": "65646009.008522095",
              "miles": "40790538.515491111"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2090-06-14",
            "close_approach_date_full": "2090-Jun-14 07:08",
            "epoch_date_close_approach": 3801107280000,
            "relative_velocity": {
              "kilometers_per_second": "28.169723358",
              "kilometers_per_hour": "101411.0040886222",
              "miles_per_hour": "63012.8541793997"
            },
            "miss_distance": {
              "astronomical": "0.0435378985",
              "lunar": "16.9362425165",
              "kilometers": "6513176.879876195",
              "miles": "4047100.446613691"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2094-09-04",
            "close_approach_date_full": "2094-Sep-04 21:06",
            "epoch_date_close_approach": 3934472760000,
            "relative_velocity": {
              "kilometers_per_second": "23.8337643136",
              "kilometers_per_hour": "85801.551528947",
              "miles_per_hour": "53313.7473930838"
            },
            "miss_distance": {
              "astronomical": "0.3988996612",
              "lunar": "155.1719682068",
              "kilometers": "59674539.659241644",
              "miles": "37080039.5199729272"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2094-11-14",
            "close_approach_date_full": "2094-Nov-14 11:57",
            "epoch_date_close_approach": 3940574220000,
            "relative_velocity": {
              "kilometers_per_second": "40.9689944454",
              "kilometers_per_hour": "147488.3800034785",
              "miles_per_hour": "91643.5436749392"
            },
            "miss_distance": {
              "astronomical": "0.1480050402",
              "lunar": "57.5739606378",
              "kilometers": "22141238.763184374",
              "miles": "13757927.8038534012"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2099-06-09",
            "close_approach_date_full": "2099-Jun-09 10:15",
            "epoch_date_close_approach": 4084683300000,
            "relative_velocity": {
              "kilometers_per_second": "22.1497005824",
              "kilometers_per_hour": "79738.9220967095",
              "miles_per_hour": "49546.6652328137"
            },
            "miss_distance": {
              "astronomical": "0.2909833209",
              "lunar": "113.1925118301",
              "kilometers": "43530485.012166483",
              "miles": "27048589.1268161454"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2100-06-30",
            "close_approach_date_full": "2100-Jun-30 20:11",
            "epoch_date_close_approach": 4118069460000,
            "relative_velocity": {
              "kilometers_per_second": "39.9340827397",
              "kilometers_per_hour": "143762.6978628293",
              "miles_per_hour": "89328.5496803786"
            },
            "miss_distance": {
              "astronomical": "0.3527426983",
              "lunar": "137.2169096387",
              "kilometers": "52769556.323732621",
              "miles": "32789481.8310913298"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2103-08-26",
            "close_approach_date_full": "2103-Aug-26 16:18",
            "epoch_date_close_approach": 4217588280000,
            "relative_velocity": {
              "kilometers_per_second": "31.6954765706",
              "kilometers_per_hour": "114103.7156542021",
              "miles_per_hour": "70899.6115408013"
            },
            "miss_distance": {
              "astronomical": "0.3823388759",
              "lunar": "148.7298227251",
              "kilometers": "57197081.452834333",
              "miles": "35540618.3744184754"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2109-06-19",
            "close_approach_date_full": "2109-Jun-19 18:46",
            "epoch_date_close_approach": 4401110760000,
            "relative_velocity": {
              "kilometers_per_second": "31.7892476245",
              "kilometers_per_hour": "114441.291448038",
              "miles_per_hour": "71109.3680111434"
            },
            "miss_distance": {
              "astronomical": "0.098877326",
              "lunar": "38.463279814",
              "kilometers": "14791837.36089562",
              "miles": "9191221.533454756"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2113-09-08",
            "close_approach_date_full": "2113-Sep-08 01:46",
            "epoch_date_close_approach": 4534278360000,
            "relative_velocity": {
              "kilometers_per_second": "20.5935521852",
              "kilometers_per_hour": "74136.787866576",
              "miles_per_hour": "46065.7168829844"
            },
            "miss_distance": {
              "astronomical": "0.4668639579",
              "lunar": "181.6100796231",
              "kilometers": "69841853.681609673",
              "miles": "43397715.4989445674"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2117-03-05",
            "close_approach_date_full": "2117-Mar-05 12:12",
            "epoch_date_close_approach": 4644389520000,
            "relative_velocity": {
              "kilometers_per_second": "35.4786940285",
              "kilometers_per_hour": "127723.2985027476",
              "miles_per_hour": "79362.2906724434"
            },
            "miss_distance": {
              "astronomical": "0.0959667002",
              "lunar": "37.3310463778",
              "kilometers": "14356413.940848574",
              "miles": "8920661.9662513612"
            },
            "orbiting_body": "Merc"
          },
          {
            "close_approach_date": "2118-06-11",
            "close_approach_date_full": "2118-Jun-11 21:35",
            "epoch_date_close_approach": 4684426500000,
            "relative_velocity": {
              "kilometers_per_second": "24.8495396845",
              "kilometers_per_hour": "89458.3428642842",
              "miles_per_hour": "55585.9353203104"
            },
            "miss_distance": {
              "astronomical": "0.1620996826",
              "lunar": "63.0567765314",
              "kilometers": "24249767.244636062",
              "miles": "15068106.6484271756"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2119-07-07",
            "close_approach_date_full": "2119-Jul-07 21:37",
            "epoch_date_close_approach": 4718209020000,
            "relative_velocity": {
              "kilometers_per_second": "44.2343903915",
              "kilometers_per_hour": "159243.8054094749",
              "miles_per_hour": "98947.9078667929"
            },
            "miss_distance": {
              "astronomical": "0.4763968521",
              "lunar": "185.3183754669",
              "kilometers": "71267954.348865027",
              "miles": "44283853.3628182926"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2121-11-20",
            "close_approach_date_full": "2121-Nov-20 14:04",
            "epoch_date_close_approach": 4793090640000,
            "relative_velocity": {
              "kilometers_per_second": "22.8117189357",
              "kilometers_per_hour": "82122.1881686298",
              "miles_per_hour": "51027.5340873356"
            },
            "miss_distance": {
              "astronomical": "0.0717154126",
              "lunar": "27.8972955014",
              "kilometers": "10728472.971131162",
              "miles": "6666363.9808555556"
            },
            "orbiting_body": "Mars"
          },
          {
            "close_approach_date": "2122-09-01",
            "close_approach_date_full": "2122-Sep-01 11:57",
            "epoch_date_close_approach": 4817707020000,
            "relative_velocity": {
              "kilometers_per_second": "27.5181084284",
              "kilometers_per_hour": "99065.1903424146",
              "miles_per_hour": "61555.2567435964"
            },
            "miss_distance": {
              "astronomical": "0.3672277465",
              "lunar": "142.8515933885",
              "kilometers": "54936488.681299955",
              "miles": "34135951.161471179"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2127-06-11",
            "close_approach_date_full": "2127-Jun-11 13:36",
            "epoch_date_close_approach": 4968394560000,
            "relative_velocity": {
              "kilometers_per_second": "20.6270488286",
              "kilometers_per_hour": "74257.3757828412",
              "miles_per_hour": "46140.6455246215"
            },
            "miss_distance": {
              "astronomical": "0.4072702891",
              "lunar": "158.4281424599",
              "kilometers": "60926767.763644217",
              "miles": "37858137.9831435146"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2128-06-25",
            "close_approach_date_full": "2128-Jun-25 09:16",
            "epoch_date_close_approach": 5001210960000,
            "relative_velocity": {
              "kilometers_per_second": "35.9825826894",
              "kilometers_per_hour": "129537.2976818648",
              "miles_per_hour": "80489.4392179343"
            },
            "miss_distance": {
              "astronomical": "0.2316439808",
              "lunar": "90.1095085312",
              "kilometers": "34653446.126000896",
              "miles": "21532652.9403125248"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2131-08-21",
            "close_approach_date_full": "2131-Aug-21 01:47",
            "epoch_date_close_approach": 5100716820000,
            "relative_velocity": {
              "kilometers_per_second": "35.6259321867",
              "kilometers_per_hour": "128253.3558721164",
              "miles_per_hour": "79691.647708427"
            },
            "miss_distance": {
              "astronomical": "0.4327090433",
              "lunar": "168.3238178437",
              "kilometers": "64732351.207417771",
              "miles": "40222817.8834403998"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2136-03-13",
            "close_approach_date_full": "2136-Mar-13 06:54",
            "epoch_date_close_approach": 5244677640000,
            "relative_velocity": {
              "kilometers_per_second": "35.3308239946",
              "kilometers_per_hour": "127190.9663804052",
              "miles_per_hour": "79031.5201934246"
            },
            "miss_distance": {
              "astronomical": "0.0882878122",
              "lunar": "34.3439589458",
              "kilometers": "13207668.652080014",
              "miles": "8206864.7430276332"
            },
            "orbiting_body": "Merc"
          },
          {
            "close_approach_date": "2137-06-15",
            "close_approach_date_full": "2137-Jun-15 10:22",
            "epoch_date_close_approach": 5284347720000,
            "relative_velocity": {
              "kilometers_per_second": "28.2663136486",
              "kilometers_per_hour": "101758.7291349564",
              "miles_per_hour": "63228.9170005511"
            },
            "miss_distance": {
              "astronomical": "0.0395611101",
              "lunar": "15.3892718289",
              "kilometers": "5918257.805795487",
              "miles": "3677434.8756002406"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2138-07-13",
            "close_approach_date_full": "2138-Jul-13 08:25",
            "epoch_date_close_approach": 5318295900000,
            "relative_velocity": {
              "kilometers_per_second": "29.7953113939",
              "kilometers_per_hour": "107263.121018117",
              "miles_per_hour": "66649.1320570628"
            },
            "miss_distance": {
              "astronomical": "0.1408201983",
              "lunar": "54.7790571387",
              "kilometers": "21066401.718657621",
              "miles": "13090055.0340563298"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2141-09-05",
            "close_approach_date_full": "2141-Sep-05 21:21",
            "epoch_date_close_approach": 5417702460000,
            "relative_velocity": {
              "kilometers_per_second": "23.8939647626",
              "kilometers_per_hour": "86018.273145396",
              "miles_per_hour": "53448.4097774823"
            },
            "miss_distance": {
              "astronomical": "0.3969275357",
              "lunar": "154.4048113873",
              "kilometers": "59379513.885068959",
              "miles": "36896719.0045872742"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2146-06-10",
            "close_approach_date_full": "2146-Jun-10 10:19",
            "epoch_date_close_approach": 5567912340000,
            "relative_velocity": {
              "kilometers_per_second": "21.9807729159",
              "kilometers_per_hour": "79130.782497348",
              "miles_per_hour": "49168.7909356438"
            },
            "miss_distance": {
              "astronomical": "0.3018162816",
              "lunar": "117.4065335424",
              "kilometers": "45151072.858680192",
              "miles": "28055575.7200509696"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2147-07-01",
            "close_approach_date_full": "2147-Jul-01 06:34",
            "epoch_date_close_approach": 5601249240000,
            "relative_velocity": {
              "kilometers_per_second": "39.5328263976",
              "kilometers_per_hour": "142318.1750314151",
              "miles_per_hour": "88430.9793688257"
            },
            "miss_distance": {
              "astronomical": "0.3397285061",
              "lunar": "132.1543888729",
              "kilometers": "50822660.890842007",
              "miles": "31579737.1057014166"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2150-08-25",
            "close_approach_date_full": "2150-Aug-25 22:45",
            "epoch_date_close_approach": 5700753900000,
            "relative_velocity": {
              "kilometers_per_second": "32.2340328562",
              "kilometers_per_hour": "116042.5182824928",
              "miles_per_hour": "72104.3080961412"
            },
            "miss_distance": {
              "astronomical": "0.3865149192",
              "lunar": "150.3543035688",
              "kilometers": "57821808.635542104",
              "miles": "35928805.8452608752"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2150-11-01",
            "close_approach_date_full": "2150-Nov-01 16:14",
            "epoch_date_close_approach": 5706605640000,
            "relative_velocity": {
              "kilometers_per_second": "30.268772041",
              "kilometers_per_hour": "108967.5793476119",
              "miles_per_hour": "67708.2161785203"
            },
            "miss_distance": {
              "astronomical": "0.1316713197",
              "lunar": "51.2201433633",
              "kilometers": "19697748.967209039",
              "miles": "12239613.6497971782"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2156-06-18",
            "close_approach_date_full": "2156-Jun-18 16:04",
            "epoch_date_close_approach": 5884243440000,
            "relative_velocity": {
              "kilometers_per_second": "30.9442826558",
              "kilometers_per_hour": "111399.4175610434",
              "miles_per_hour": "69219.2658728606"
            },
            "miss_distance": {
              "astronomical": "0.0703475981",
              "lunar": "27.3652156609",
              "kilometers": "10523850.835376047",
              "miles": "6539217.6815495686"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2160-09-07",
            "close_approach_date_full": "2160-Sep-07 23:10",
            "epoch_date_close_approach": 6017497800000,
            "relative_velocity": {
              "kilometers_per_second": "21.372992051",
              "kilometers_per_hour": "76942.7713836515",
              "miles_per_hour": "47809.2459189139"
            },
            "miss_distance": {
              "astronomical": "0.4443231151",
              "lunar": "172.8416917739",
              "kilometers": "66469791.610724837",
              "miles": "41302413.2885512706"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2163-02-21",
            "close_approach_date_full": "2163-Feb-21 04:22",
            "epoch_date_close_approach": 6094930920000,
            "relative_velocity": {
              "kilometers_per_second": "31.0204210595",
              "kilometers_per_hour": "111673.5158143667",
              "miles_per_hour": "69389.5798680991"
            },
            "miss_distance": {
              "astronomical": "0.1179891115",
              "lunar": "45.8977643735",
              "kilometers": "17650919.763592505",
              "miles": "10967772.958706369"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2163-04-10",
            "close_approach_date_full": "2163-Apr-10 06:31",
            "epoch_date_close_approach": 6099085860000,
            "relative_velocity": {
              "kilometers_per_second": "24.1521906318",
              "kilometers_per_hour": "86947.8862744494",
              "miles_per_hour": "54026.0352242544"
            },
            "miss_distance": {
              "astronomical": "0.0677740494",
              "lunar": "26.3641052166",
              "kilometers": "10138853.431514778",
              "miles": "6299991.3878608164"
            },
            "orbiting_body": "Mars"
          },
          {
            "close_approach_date": "2165-06-11",
            "close_approach_date_full": "2165-Jun-11 02:24",
            "epoch_date_close_approach": 6167586240000,
            "relative_velocity": {
              "kilometers_per_second": "23.8650287196",
              "kilometers_per_hour": "85914.103390641",
              "miles_per_hour": "53383.6827429236"
            },
            "miss_distance": {
              "astronomical": "0.205057788",
              "lunar": "79.767479532",
              "kilometers": "30676208.31171156",
              "miles": "19061311.960117128"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2166-07-05",
            "close_approach_date_full": "2166-Jul-05 18:55",
            "epoch_date_close_approach": 6201255300000,
            "relative_velocity": {
              "kilometers_per_second": "42.7538795652",
              "kilometers_per_hour": "153913.9664348986",
              "miles_per_hour": "95636.1531995068"
            },
            "miss_distance": {
              "astronomical": "0.4339077034",
              "lunar": "168.7900966226",
              "kilometers": "64911668.205231758",
              "miles": "40334240.2991559404"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2169-08-30",
            "close_approach_date_full": "2169-Aug-30 10:27",
            "epoch_date_close_approach": 6300757620000,
            "relative_velocity": {
              "kilometers_per_second": "29.053636499",
              "kilometers_per_hour": "104593.0913962812",
              "miles_per_hour": "64990.0794845393"
            },
            "miss_distance": {
              "astronomical": "0.3657602043",
              "lunar": "142.2807194727",
              "kilometers": "54716947.494044841",
              "miles": "33999534.5934311658"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2170-11-17",
            "close_approach_date_full": "2170-Nov-17 06:52",
            "epoch_date_close_approach": 6339106320000,
            "relative_velocity": {
              "kilometers_per_second": "35.605936868",
              "kilometers_per_hour": "128181.3727247158",
              "miles_per_hour": "79646.9201799769"
            },
            "miss_distance": {
              "astronomical": "0.0862726537",
              "lunar": "33.5600622893",
              "kilometers": "12906205.232767619",
              "miles": "8019544.0604423822"
            },
            "orbiting_body": "Merc"
          },
          {
            "close_approach_date": "2174-06-12",
            "close_approach_date_full": "2174-Jun-12 17:08",
            "epoch_date_close_approach": 6451722480000,
            "relative_velocity": {
              "kilometers_per_second": "20.2156417477",
              "kilometers_per_hour": "72776.3102916782",
              "miles_per_hour": "45220.3690254042"
            },
            "miss_distance": {
              "astronomical": "0.4585302793",
              "lunar": "178.3682786477",
              "kilometers": "68595153.113785091",
              "miles": "42623051.6877366158"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2175-06-12",
            "close_approach_date_full": "2175-Jun-12 17:27",
            "epoch_date_close_approach": 6483259620000,
            "relative_velocity": {
              "kilometers_per_second": "31.8118154859",
              "kilometers_per_hour": "114522.5357491662",
              "miles_per_hour": "71159.8500603639"
            },
            "miss_distance": {
              "astronomical": "0.1048829987",
              "lunar": "40.7994864943",
              "kilometers": "15690273.204732769",
              "miles": "9749483.6798554522"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2175-06-23",
            "close_approach_date_full": "2175-Jun-23 19:48",
            "epoch_date_close_approach": 6484218480000,
            "relative_velocity": {
              "kilometers_per_second": "34.1302301223",
              "kilometers_per_hour": "122868.8284404064",
              "miles_per_hour": "76345.9117606514"
            },
            "miss_distance": {
              "astronomical": "0.1721832617",
              "lunar": "66.9792888013",
              "kilometers": "25758249.199972579",
              "miles": "16005433.8710324302"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2178-08-17",
            "close_approach_date_full": "2178-Aug-17 23:47",
            "epoch_date_close_approach": 6583679220000,
            "relative_velocity": {
              "kilometers_per_second": "37.7100120837",
              "kilometers_per_hour": "135756.0435012793",
              "miles_per_hour": "84353.5260300033"
            },
            "miss_distance": {
              "astronomical": "0.4686235123",
              "lunar": "182.2945462847",
              "kilometers": "70105079.271998801",
              "miles": "43561276.2963974138"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2184-06-13",
            "close_approach_date_full": "2184-Jun-13 03:43",
            "epoch_date_close_approach": 6767379780000,
            "relative_velocity": {
              "kilometers_per_second": "26.254761449",
              "kilometers_per_hour": "94517.1412163914",
              "miles_per_hour": "58729.2758852627"
            },
            "miss_distance": {
              "astronomical": "0.106974386",
              "lunar": "41.613036154",
              "kilometers": "16003140.29015782",
              "miles": "9943890.271985116"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2187-10-02",
            "close_approach_date_full": "2187-Oct-02 02:41",
            "epoch_date_close_approach": 6871574460000,
            "relative_velocity": {
              "kilometers_per_second": "32.3581401043",
              "kilometers_per_hour": "116489.304375318",
              "miles_per_hour": "72381.923599208"
            },
            "miss_distance": {
              "astronomical": "0.0966972694",
              "lunar": "37.6152377966",
              "kilometers": "14465705.537056178",
              "miles": "8988572.6150761364"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2188-09-03",
            "close_approach_date_full": "2188-Sep-03 07:01",
            "epoch_date_close_approach": 6900706860000,
            "relative_velocity": {
              "kilometers_per_second": "26.1297577748",
              "kilometers_per_hour": "94067.1279891698",
              "miles_per_hour": "58449.6551663817"
            },
            "miss_distance": {
              "astronomical": "0.3722341983",
              "lunar": "144.7991031387",
              "kilometers": "55685443.206837621",
              "miles": "34601329.9237403298"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2193-06-10",
            "close_approach_date_full": "2193-Jun-10 21:52",
            "epoch_date_close_approach": 7051182720000,
            "relative_velocity": {
              "kilometers_per_second": "20.8934131115",
              "kilometers_per_hour": "75216.2872014065",
              "miles_per_hour": "46736.4757891184"
            },
            "miss_distance": {
              "astronomical": "0.3783680411",
              "lunar": "147.1851679879",
              "kilometers": "56603053.024632457",
              "miles": "35171506.2250916266"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2194-06-27",
            "close_approach_date_full": "2194-Jun-27 14:06",
            "epoch_date_close_approach": 7084159560000,
            "relative_velocity": {
              "kilometers_per_second": "36.9176680764",
              "kilometers_per_hour": "132903.6050751527",
              "miles_per_hour": "82581.1317201692"
            },
            "miss_distance": {
              "astronomical": "0.2597674796",
              "lunar": "101.0495495644",
              "kilometers": "38860661.643428452",
              "miles": "24146895.4388065576"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2197-08-22",
            "close_approach_date_full": "2197-Aug-22 00:33",
            "epoch_date_close_approach": 7183643580000,
            "relative_velocity": {
              "kilometers_per_second": "34.9342017192",
              "kilometers_per_hour": "125763.1261890232",
              "miles_per_hour": "78144.3158256183"
            },
            "miss_distance": {
              "astronomical": "0.4204581389",
              "lunar": "163.5582160321",
              "kilometers": "62899642.003604143",
              "miles": "39084025.1907094534"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2200-01-21",
            "close_approach_date_full": "2200-Jan-21 02:09",
            "epoch_date_close_approach": 7259854140000,
            "relative_velocity": {
              "kilometers_per_second": "32.3135858114",
              "kilometers_per_hour": "116328.9089208848",
              "miles_per_hour": "72282.2601014242"
            },
            "miss_distance": {
              "astronomical": "0.0968301109",
              "lunar": "37.6669131401",
              "kilometers": "14485578.342503783",
              "miles": "9000921.0037788854"
            },
            "orbiting_body": "Venus"
          }
        ],
        "orbital_data": {
          "orbit_id": "182",
          "orbit_determination_date": "2024-08-04 06:21:20",
          "first_observation_date": "1949-07-01",
          "last_observation_date": "2024-08-01",
          "data_arc_in_days": 27425,
          "observations_used": 1755,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".0342147",
          "jupiter_tisserand_invariant": "5.299",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".8269521475242672",
          "semi_major_axis": "1.07804000683721",
          "inclination": "22.80351024536095",
          "ascending_node_longitude": "87.95309627755429",
          "orbital_period": "408.8375189294123",
          "perihelion_distance": ".1865525080661035",
          "perihelion_argument": "31.43364433510509",
          "aphelion_distance": "1.969527505608316",
          "perihelion_time": "2460417.816765914216",
          "mean_anomaly": "160.8608829324126",
          "mean_motion": ".8805454082166947",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "APO",
            "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
            "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
          }
        },
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2001580?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2001580",
        "neo_reference_id": "2001580",
        "name": "1580 Betulia (1950 KA)",
        "name_limited": "Betulia",
        "designation": "1580",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2001580",
        "absolute_magnitude_h": 14.69,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 3.0658787593,
            "estimated_diameter_max": 6.8555133165
          },
          "meters": {
            "estimated_diameter_min": 3065.8787592885,
            "estimated_diameter_max": 6855.5133165417
          },
          "miles": {
            "estimated_diameter_min": 1.9050481505,
            "estimated_diameter_max": 4.259817165
          },
          "feet": {
            "estimated_diameter_min": 10058.657668624,
            "estimated_diameter_max": 22491.8423094427
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "1911-05-07",
            "close_approach_date_full": "1911-May-07 13:13",
            "epoch_date_close_approach": -1850986020000,
            "relative_velocity": {
              "kilometers_per_second": "28.6869686913",
              "kilometers_per_hour": "103273.0872886148",
              "miles_per_hour": "64169.8802655285"
            },
            "miss_distance": {
              "astronomical": "0.4856278577",
              "lunar": "188.9092366453",
              "kilometers": "72648893.124583099",
              "miles": "45141928.9285568062"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1924-05-10",
            "close_approach_date_full": "1924-May-10 05:06",
            "epoch_date_close_approach": -1440442440000,
            "relative_velocity": {
              "kilometers_per_second": "28.2361614929",
              "kilometers_per_hour": "101650.1813743133",
              "miles_per_hour": "63161.4696433893"
            },
            "miss_distance": {
              "astronomical": "0.3833240999",
              "lunar": "149.1130748611",
              "kilometers": "57344468.864707213",
              "miles": "35632200.6654290194"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1929-06-09",
            "close_approach_date_full": "1929-Jun-09 14:54",
            "epoch_date_close_approach": -1280048760000,
            "relative_velocity": {
              "kilometers_per_second": "11.3576547546",
              "kilometers_per_hour": "40887.5571164246",
              "miles_per_hour": "25405.9379204806"
            },
            "miss_distance": {
              "astronomical": "1.8495583406",
              "lunar": "719.4781944934",
              "kilometers": "276689988.194494522",
              "miles": "171927186.2944955236"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "1937-05-14",
            "close_approach_date_full": "1937-May-14 10:01",
            "epoch_date_close_approach": -1029851940000,
            "relative_velocity": {
              "kilometers_per_second": "27.9374309839",
              "kilometers_per_hour": "100574.7515420756",
              "miles_per_hour": "62493.2393679081"
            },
            "miss_distance": {
              "astronomical": "0.2750673949",
              "lunar": "107.0012166161",
              "kilometers": "41149496.383488863",
              "miles": "25569111.3972497894"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1950-05-18",
            "close_approach_date_full": "1950-May-18 06:48",
            "epoch_date_close_approach": -619290720000,
            "relative_velocity": {
              "kilometers_per_second": "27.8499374739",
              "kilometers_per_hour": "100259.7749061754",
              "miles_per_hour": "62297.525135451"
            },
            "miss_distance": {
              "astronomical": "0.1881845953",
              "lunar": "73.2038075717",
              "kilometers": "28152014.623692011",
              "miles": "17492850.7328953118"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1963-05-19",
            "close_approach_date_full": "1963-May-19 23:06",
            "epoch_date_close_approach": -208918440000,
            "relative_velocity": {
              "kilometers_per_second": "27.9571303215",
              "kilometers_per_hour": "100645.6691573986",
              "miles_per_hour": "62537.3048161625"
            },
            "miss_distance": {
              "astronomical": "0.1578750433",
              "lunar": "61.4133918437",
              "kilometers": "23617770.203837771",
              "miles": "14675401.8972363998"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1965-03-17",
            "close_approach_date_full": "1965-Mar-17 09:33",
            "epoch_date_close_approach": -151252020000,
            "relative_velocity": {
              "kilometers_per_second": "11.1486216402",
              "kilometers_per_hour": "40135.0379045504",
              "miles_per_hour": "24938.351746858"
            },
            "miss_distance": {
              "astronomical": "1.9226234382",
              "lunar": "747.9005174598",
              "kilometers": "287620371.166796634",
              "miles": "178719011.3323721892"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "1976-05-22",
            "close_approach_date_full": "1976-May-22 19:40",
            "epoch_date_close_approach": 201642000000,
            "relative_velocity": {
              "kilometers_per_second": "28.2281265426",
              "kilometers_per_hour": "101621.2555535375",
              "miles_per_hour": "63143.4962632522"
            },
            "miss_distance": {
              "astronomical": "0.1298026416",
              "lunar": "50.4932275824",
              "kilometers": "19418198.703733392",
              "miles": "12065909.1708571296"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1989-05-27",
            "close_approach_date_full": "1989-May-27 05:12",
            "epoch_date_close_approach": 612249120000,
            "relative_velocity": {
              "kilometers_per_second": "28.8707360102",
              "kilometers_per_hour": "103934.6496366613",
              "miles_per_hour": "64580.9493811799"
            },
            "miss_distance": {
              "astronomical": "0.1849577935",
              "lunar": "71.9485816715",
              "kilometers": "27669291.947499845",
              "miles": "17192900.770774061"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2002-05-29",
            "close_approach_date_full": "2002-May-29 13:32",
            "epoch_date_close_approach": 1022679120000,
            "relative_velocity": {
              "kilometers_per_second": "29.2104951386",
              "kilometers_per_hour": "105157.7824990666",
              "miles_per_hour": "65340.9565756006"
            },
            "miss_distance": {
              "astronomical": "0.2377970723",
              "lunar": "92.5030611247",
              "kilometers": "35573935.508316001",
              "miles": "22104618.5200867738"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2015-06-03",
            "close_approach_date_full": "2015-Jun-03 08:52",
            "epoch_date_close_approach": 1433321520000,
            "relative_velocity": {
              "kilometers_per_second": "30.3291408095",
              "kilometers_per_hour": "109184.9069142421",
              "miles_per_hour": "67843.2550767967"
            },
            "miss_distance": {
              "astronomical": "0.3521854967",
              "lunar": "137.0001582163",
              "kilometers": "52686200.151212029",
              "miles": "32737686.7072588402"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2028-06-07",
            "close_approach_date_full": "2028-Jun-07 13:47",
            "epoch_date_close_approach": 1843998420000,
            "relative_velocity": {
              "kilometers_per_second": "31.8636815413",
              "kilometers_per_hour": "114709.2535487754",
              "miles_per_hour": "71275.8692397932"
            },
            "miss_distance": {
              "astronomical": "0.4778468028",
              "lunar": "185.8824062892",
              "kilometers": "71484863.885190036",
              "miles": "44418634.6987970568"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2059-08-19",
            "close_approach_date_full": "2059-Aug-19 22:11",
            "epoch_date_close_approach": 2828556660000,
            "relative_velocity": {
              "kilometers_per_second": "12.0654767697",
              "kilometers_per_hour": "43435.7163709495",
              "miles_per_hour": "26989.2649861603"
            },
            "miss_distance": {
              "astronomical": "1.9745349485",
              "lunar": "768.0940949665",
              "kilometers": "295386222.536159695",
              "miles": "183544487.612985991"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "2090-05-08",
            "close_approach_date_full": "2090-May-08 15:44",
            "epoch_date_close_approach": 3797941440000,
            "relative_velocity": {
              "kilometers_per_second": "28.7177848823",
              "kilometers_per_hour": "103384.0255763603",
              "miles_per_hour": "64238.8130032668"
            },
            "miss_distance": {
              "astronomical": "0.4857788606",
              "lunar": "188.9679767734",
              "kilometers": "72671482.836786922",
              "miles": "45155965.5248346436"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2095-05-29",
            "close_approach_date_full": "2095-May-29 16:59",
            "epoch_date_close_approach": 3957526740000,
            "relative_velocity": {
              "kilometers_per_second": "11.5815589321",
              "kilometers_per_hour": "41693.6121556604",
              "miles_per_hour": "25906.7891752769"
            },
            "miss_distance": {
              "astronomical": "1.8651909769",
              "lunar": "725.5592900141",
              "kilometers": "279028597.287459203",
              "miles": "173380330.6016668814"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "2103-05-13",
            "close_approach_date_full": "2103-May-13 09:00",
            "epoch_date_close_approach": 4208490000000,
            "relative_velocity": {
              "kilometers_per_second": "28.2327736627",
              "kilometers_per_hour": "101637.9851858204",
              "miles_per_hour": "63153.891406156"
            },
            "miss_distance": {
              "astronomical": "0.3800853059",
              "lunar": "147.8531839951",
              "kilometers": "56859952.180938433",
              "miles": "35331135.9586910554"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2116-05-15",
            "close_approach_date_full": "2116-May-15 23:09",
            "epoch_date_close_approach": 4619027340000,
            "relative_velocity": {
              "kilometers_per_second": "27.8883512151",
              "kilometers_per_hour": "100398.0643743308",
              "miles_per_hour": "62383.4528330391"
            },
            "miss_distance": {
              "astronomical": "0.2877797589",
              "lunar": "111.9463262121",
              "kilometers": "43051238.960553543",
              "miles": "26750799.4390351734"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2129-05-17",
            "close_approach_date_full": "2129-May-17 21:30",
            "epoch_date_close_approach": 5029421400000,
            "relative_velocity": {
              "kilometers_per_second": "27.8699542674",
              "kilometers_per_hour": "100331.8353625295",
              "miles_per_hour": "62342.3007006784"
            },
            "miss_distance": {
              "astronomical": "0.24170805",
              "lunar": "94.02443145",
              "kilometers": "36159009.4418535",
              "miles": "22468166.6044383"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2131-03-07",
            "close_approach_date_full": "2131-Mar-07 17:55",
            "epoch_date_close_approach": 5086346100000,
            "relative_velocity": {
              "kilometers_per_second": "11.325315571",
              "kilometers_per_hour": "40771.136055505",
              "miles_per_hour": "25333.5984007108"
            },
            "miss_distance": {
              "astronomical": "1.8670594059",
              "lunar": "726.2861088951",
              "kilometers": "279308110.286105433",
              "miles": "173554011.9253156554"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "2142-05-21",
            "close_approach_date_full": "2142-May-21 08:09",
            "epoch_date_close_approach": 5439946140000,
            "relative_velocity": {
              "kilometers_per_second": "27.9023629903",
              "kilometers_per_hour": "100448.506765193",
              "miles_per_hour": "62414.7957730723"
            },
            "miss_distance": {
              "astronomical": "0.1746194425",
              "lunar": "67.9269631325",
              "kilometers": "26122696.658587475",
              "miles": "16231891.020858155"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2155-05-25",
            "close_approach_date_full": "2155-May-25 00:50",
            "epoch_date_close_approach": 5850492600000,
            "relative_velocity": {
              "kilometers_per_second": "28.1813544353",
              "kilometers_per_hour": "101452.8759670213",
              "miles_per_hour": "63038.8717362861"
            },
            "miss_distance": {
              "astronomical": "0.1507804761",
              "lunar": "58.6536052029",
              "kilometers": "22556438.062145907",
              "miles": "14015920.6849392366"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2166-12-13",
            "close_approach_date_full": "2166-Dec-13 09:42",
            "epoch_date_close_approach": 6215132520000,
            "relative_velocity": {
              "kilometers_per_second": "11.2307023981",
              "kilometers_per_hour": "40430.52863334",
              "miles_per_hour": "25121.9581944217"
            },
            "miss_distance": {
              "astronomical": "1.9751496583",
              "lunar": "768.3332170787",
              "kilometers": "295478181.812907821",
              "miles": "183601628.4579010898"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "2168-05-26",
            "close_approach_date_full": "2168-May-26 02:13",
            "epoch_date_close_approach": 6260897580000,
            "relative_velocity": {
              "kilometers_per_second": "28.3356943036",
              "kilometers_per_hour": "102008.499493054",
              "miles_per_hour": "63384.1145877812"
            },
            "miss_distance": {
              "astronomical": "0.1726012669",
              "lunar": "67.1418928241",
              "kilometers": "25820781.887541503",
              "miles": "16044289.8813106214"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2181-05-29",
            "close_approach_date_full": "2181-May-29 16:13",
            "epoch_date_close_approach": 6671434380000,
            "relative_velocity": {
              "kilometers_per_second": "28.8923665502",
              "kilometers_per_hour": "104012.5195806365",
              "miles_per_hour": "64629.3347360905"
            },
            "miss_distance": {
              "astronomical": "0.2375599847",
              "lunar": "92.4108340483",
              "kilometers": "35538467.708352589",
              "miles": "22082579.8511361682"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2194-06-02",
            "close_approach_date_full": "2194-Jun-02 22:13",
            "epoch_date_close_approach": 7082028780000,
            "relative_velocity": {
              "kilometers_per_second": "29.8782949205",
              "kilometers_per_hour": "107561.8617139296",
              "miles_per_hour": "66834.757907747"
            },
            "miss_distance": {
              "astronomical": "0.3349517781",
              "lunar": "130.2962416809",
              "kilometers": "50108072.556472647",
              "miles": "31135712.5044186486"
            },
            "orbiting_body": "Earth"
          }
        ],
        "orbital_data": {
          "orbit_id": "306",
          "orbit_determination_date": "2024-03-18 06:26:07",
          "first_observation_date": "1952-10-27",
          "last_observation_date": "2024-03-18",
          "data_arc_in_days": 26075,
          "observations_used": 1775,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".135879",
          "jupiter_tisserand_invariant": "3.066",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".4875600938453158",
          "semi_major_axis": "2.195071506860215",
          "inclination": "52.188421980",
          "ascending_node_longitude": "62.22763076859623",
          "orbital_period": "1187.876896137847",
          "perihelion_distance": "1.12484223697827",
          "perihelion_argument": "159.7295602988922",
          "aphelion_distance": "3.26530077674216",
          "perihelion_time": "2460735.677282977172",
          "mean_anomaly": "319.0329418561779",
          "mean_motion": ".3030617071267828",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "AMO",
            "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
            "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
          }
        },
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2001620?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2001620",
        "neo_reference_id": "2001620",
        "name": "1620 Geographos (1951 RA)",
        "name_limited": "Geographos",
        "designation": "1620",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2001620",
        "absolute_magnitude_h": 15.27,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 2.3472263753,
            "estimated_diameter_max": 5.2485577338
          },
          "meters": {
            "estimated_diameter_min": 2347.2263753125,
            "estimated_diameter_max": 5248.5577337793
          },
          "miles": {
            "estimated_diameter_min": 1.4584984001,
            "estimated_diameter_max": 3.2613015676
          },
          "feet": {
            "estimated_diameter_min": 7700.8741811804,
            "estimated_diameter_max": 17219.6781552924
          }
        },
        "is_potentially_hazardous_asteroid": true,
        "close_approach_data": [
          {
            "close_approach_date": "1901-08-23",
            "close_approach_date_full": "1901-Aug-23 17:36",
            "epoch_date_close_approach": -2157171840000,
            "relative_velocity": {
              "kilometers_per_second": "11.7628121919",
              "kilometers_per_hour": "42346.1238907982",
              "miles_per_hour": "26312.2345920352"
            },
            "miss_distance": {
              "astronomical": "0.0338992138",
              "lunar": "13.1867941682",
              "kilometers": "5071250.179154606",
              "miles": "3151128.7415453228"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1908-02-27",
            "close_approach_date_full": "1908-Feb-27 21:02",
            "epoch_date_close_approach": -1951613880000,
            "relative_velocity": {
              "kilometers_per_second": "8.1164535236",
              "kilometers_per_hour": "29219.2326850884",
              "miles_per_hour": "18155.6948870206"
            },
            "miss_distance": {
              "astronomical": "0.3488149146",
              "lunar": "135.6890017794",
              "kilometers": "52181968.248391902",
              "miles": "32424371.5314641676"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1908-06-07",
            "close_approach_date_full": "1908-Jun-07 22:48",
            "epoch_date_close_approach": -1942881120000,
            "relative_velocity": {
              "kilometers_per_second": "8.5838542827",
              "kilometers_per_hour": "30901.8754178481",
              "miles_per_hour": "19201.2236450512"
            },
            "miss_distance": {
              "astronomical": "0.2816402812",
              "lunar": "109.5580693868",
              "kilometers": "42132786.173721044",
              "miles": "26180099.3410126472"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1908-08-31",
            "close_approach_date_full": "1908-Aug-31 15:23",
            "epoch_date_close_approach": -1935563820000,
            "relative_velocity": {
              "kilometers_per_second": "7.081284537",
              "kilometers_per_hour": "25492.6243330312",
              "miles_per_hour": "15840.1253807104"
            },
            "miss_distance": {
              "astronomical": "0.3623215211",
              "lunar": "140.9430717079",
              "kilometers": "54202527.811720057",
              "miles": "33679889.0249965066"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1915-03-14",
            "close_approach_date_full": "1915-Mar-14 16:15",
            "epoch_date_close_approach": -1729410300000,
            "relative_velocity": {
              "kilometers_per_second": "12.1053297855",
              "kilometers_per_hour": "43579.1872277813",
              "miles_per_hour": "27078.4121971733"
            },
            "miss_distance": {
              "astronomical": "0.0815995158",
              "lunar": "31.7422116462",
              "kilometers": "12207113.756711346",
              "miles": "7585148.7603987348"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1919-09-08",
            "close_approach_date_full": "1919-Sep-08 06:12",
            "epoch_date_close_approach": -1587836880000,
            "relative_velocity": {
              "kilometers_per_second": "20.028202304",
              "kilometers_per_hour": "72101.5282942963",
              "miles_per_hour": "44801.0857337532"
            },
            "miss_distance": {
              "astronomical": "0.3111504649",
              "lunar": "121.0375308461",
              "kilometers": "46547446.798549763",
              "miles": "28923242.2520542094"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1922-02-27",
            "close_approach_date_full": "1922-Feb-27 21:16",
            "epoch_date_close_approach": -1509763440000,
            "relative_velocity": {
              "kilometers_per_second": "22.2397807498",
              "kilometers_per_hour": "80063.2106991392",
              "miles_per_hour": "49748.1655591402"
            },
            "miss_distance": {
              "astronomical": "0.3917517096",
              "lunar": "152.3914150344",
              "kilometers": "58605221.325018552",
              "miles": "36415595.9177459376"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1926-08-21",
            "close_approach_date_full": "1926-Aug-21 06:24",
            "epoch_date_close_approach": -1368466560000,
            "relative_velocity": {
              "kilometers_per_second": "10.5595595302",
              "kilometers_per_hour": "38014.4143087682",
              "miles_per_hour": "23620.6787131344"
            },
            "miss_distance": {
              "astronomical": "0.0664845001",
              "lunar": "25.8624705389",
              "kilometers": "9945939.602974787",
              "miles": "6180120.2933025806"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1933-03-11",
            "close_approach_date_full": "1933-Mar-11 02:46",
            "epoch_date_close_approach": -1161638040000,
            "relative_velocity": {
              "kilometers_per_second": "7.6540789912",
              "kilometers_per_hour": "27554.6843684084",
              "miles_per_hour": "17121.4092954702"
            },
            "miss_distance": {
              "astronomical": "0.2736852584",
              "lunar": "106.4635655176",
              "kilometers": "40942731.707039608",
              "miles": "25440633.7848902704"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1933-05-08",
            "close_approach_date_full": "1933-May-08 19:40",
            "epoch_date_close_approach": -1156566000000,
            "relative_velocity": {
              "kilometers_per_second": "7.7912232997",
              "kilometers_per_hour": "28048.4038787867",
              "miles_per_hour": "17428.1873990161"
            },
            "miss_distance": {
              "astronomical": "0.270760432",
              "lunar": "105.325808048",
              "kilometers": "40505183.90747984",
              "miles": "25168754.189468192"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1933-09-19",
            "close_approach_date_full": "1933-Sep-19 01:31",
            "epoch_date_close_approach": -1145053740000,
            "relative_velocity": {
              "kilometers_per_second": "7.9097885961",
              "kilometers_per_hour": "28475.2389458463",
              "miles_per_hour": "17693.4061105454"
            },
            "miss_distance": {
              "astronomical": "0.433453807",
              "lunar": "168.613530923",
              "kilometers": "64843766.27059109",
              "miles": "40292047.993453442"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1940-03-09",
            "close_approach_date_full": "1940-Mar-09 21:19",
            "epoch_date_close_approach": -940819260000,
            "relative_velocity": {
              "kilometers_per_second": "14.9940527192",
              "kilometers_per_hour": "53978.5897890984",
              "miles_per_hour": "33540.1965275651"
            },
            "miss_distance": {
              "astronomical": "0.1470295866",
              "lunar": "57.1945091874",
              "kilometers": "21995312.982340542",
              "miles": "13667253.7282497996"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1944-09-02",
            "close_approach_date_full": "1944-Sep-02 03:37",
            "epoch_date_close_approach": -799359780000,
            "relative_velocity": {
              "kilometers_per_second": "16.7374293605",
              "kilometers_per_hour": "60254.7456976294",
              "miles_per_hour": "37439.9557363964"
            },
            "miss_distance": {
              "astronomical": "0.1916377209",
              "lunar": "74.5470734301",
              "kilometers": "28668594.858294483",
              "miles": "17813838.8062625454"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1951-02-10",
            "close_approach_date_full": "1951-Feb-10 07:22",
            "epoch_date_close_approach": -596133480000,
            "relative_velocity": {
              "kilometers_per_second": "9.1771136451",
              "kilometers_per_hour": "33037.6091224784",
              "miles_per_hour": "20528.2855127978"
            },
            "miss_distance": {
              "astronomical": "0.4614917102",
              "lunar": "179.5202752678",
              "kilometers": "69038176.868577274",
              "miles": "42898333.8839594212"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1951-08-08",
            "close_approach_date_full": "1951-Aug-08 15:38",
            "epoch_date_close_approach": -580638120000,
            "relative_velocity": {
              "kilometers_per_second": "7.9958928861",
              "kilometers_per_hour": "28785.2143899685",
              "miles_per_hour": "17886.0127969224"
            },
            "miss_distance": {
              "astronomical": "0.1936526814",
              "lunar": "75.3308930646",
              "kilometers": "28970028.657228618",
              "miles": "18001141.0835982084"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1958-03-18",
            "close_approach_date_full": "1958-Mar-18 04:43",
            "epoch_date_close_approach": -372107820000,
            "relative_velocity": {
              "kilometers_per_second": "9.0553684202",
              "kilometers_per_hour": "32599.3263127108",
              "miles_per_hour": "20255.9536191397"
            },
            "miss_distance": {
              "astronomical": "0.1515041954",
              "lunar": "58.9351320106",
              "kilometers": "22664704.927903798",
              "miles": "14083194.5957884924"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1962-09-13",
            "close_approach_date_full": "1962-Sep-13 21:32",
            "epoch_date_close_approach": -230351280000,
            "relative_velocity": {
              "kilometers_per_second": "23.5595099794",
              "kilometers_per_hour": "84814.2359258742",
              "miles_per_hour": "52700.2678729411"
            },
            "miss_distance": {
              "astronomical": "0.4363845383",
              "lunar": "169.7535853987",
              "kilometers": "65282197.430613421",
              "miles": "40564476.4836143698"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1965-03-04",
            "close_approach_date_full": "1965-Mar-04 20:24",
            "epoch_date_close_approach": -152336160000,
            "relative_velocity": {
              "kilometers_per_second": "18.7506269914",
              "kilometers_per_hour": "67502.2571692096",
              "miles_per_hour": "41943.277517168"
            },
            "miss_distance": {
              "astronomical": "0.2726611878",
              "lunar": "106.0652020542",
              "kilometers": "40789532.926549986",
              "miles": "25345440.4768663668"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1969-08-27",
            "close_approach_date_full": "1969-Aug-27 00:06",
            "epoch_date_close_approach": -10972440000,
            "relative_velocity": {
              "kilometers_per_second": "13.176536694",
              "kilometers_per_hour": "47435.5320983402",
              "miles_per_hour": "29474.5949307715"
            },
            "miss_distance": {
              "astronomical": "0.0606033528",
              "lunar": "23.5747042392",
              "kilometers": "9066132.493738536",
              "miles": "5633433.5058263568"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1976-02-22",
            "close_approach_date_full": "1976-Feb-22 11:52",
            "epoch_date_close_approach": 193837920000,
            "relative_velocity": {
              "kilometers_per_second": "8.4540701809",
              "kilometers_per_hour": "30434.6526512559",
              "miles_per_hour": "18910.9095876651"
            },
            "miss_distance": {
              "astronomical": "0.3846923662",
              "lunar": "149.6453304518",
              "kilometers": "57549158.588779994",
              "miles": "35759388.9621681572"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1976-06-23",
            "close_approach_date_full": "1976-Jun-23 12:31",
            "epoch_date_close_approach": 204381060000,
            "relative_velocity": {
              "kilometers_per_second": "8.5330337337",
              "kilometers_per_hour": "30718.9214414159",
              "miles_per_hour": "19087.5431589731"
            },
            "miss_distance": {
              "astronomical": "0.2711269322",
              "lunar": "105.4683766258",
              "kilometers": "40560011.556754414",
              "miles": "25202822.5109583532"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1983-03-16",
            "close_approach_date_full": "1983-Mar-16 10:22",
            "epoch_date_close_approach": 416658120000,
            "relative_velocity": {
              "kilometers_per_second": "11.0596562088",
              "kilometers_per_hour": "39814.7623518452",
              "miles_per_hour": "24739.3449735674"
            },
            "miss_distance": {
              "astronomical": "0.0894588473",
              "lunar": "34.7994915997",
              "kilometers": "13382853.008735251",
              "miles": "8315719.2546024238"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1987-09-10",
            "close_approach_date_full": "1987-Sep-10 22:36",
            "epoch_date_close_approach": 558311760000,
            "relative_velocity": {
              "kilometers_per_second": "21.448505747",
              "kilometers_per_hour": "77214.6206892601",
              "miles_per_hour": "47978.1625055017"
            },
            "miss_distance": {
              "astronomical": "0.3621243639",
              "lunar": "140.8663775571",
              "kilometers": "54173033.514544893",
              "miles": "33661562.1185618034"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1990-03-02",
            "close_approach_date_full": "1990-Mar-02 19:44",
            "epoch_date_close_approach": 636407040000,
            "relative_velocity": {
              "kilometers_per_second": "20.5262674364",
              "kilometers_per_hour": "73894.5627709874",
              "miles_per_hour": "45915.2076284505"
            },
            "miss_distance": {
              "astronomical": "0.3341983959",
              "lunar": "130.0031760051",
              "kilometers": "49995368.184056733",
              "miles": "31065681.2547915954"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1994-08-25",
            "close_approach_date_full": "1994-Aug-25 10:10",
            "epoch_date_close_approach": 777809400000,
            "relative_velocity": {
              "kilometers_per_second": "12.2172333541",
              "kilometers_per_hour": "43982.040074657",
              "miles_per_hour": "27328.7292897223"
            },
            "miss_distance": {
              "astronomical": "0.0333047305",
              "lunar": "12.9555401645",
              "kilometers": "4982316.743724035",
              "miles": "3095868.067240283"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2001-02-20",
            "close_approach_date_full": "2001-Feb-20 23:36",
            "epoch_date_close_approach": 982712160000,
            "relative_velocity": {
              "kilometers_per_second": "8.541197994",
              "kilometers_per_hour": "30748.3127784073",
              "miles_per_hour": "19105.8057927832"
            },
            "miss_distance": {
              "astronomical": "0.3910836455",
              "lunar": "152.1315380995",
              "kilometers": "58505280.358635085",
              "miles": "36353495.480870773"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2001-06-27",
            "close_approach_date_full": "2001-Jun-27 11:35",
            "epoch_date_close_approach": 993641700000,
            "relative_velocity": {
              "kilometers_per_second": "8.5006790956",
              "kilometers_per_hour": "30602.4447440079",
              "miles_per_hour": "19015.1690688531"
            },
            "miss_distance": {
              "astronomical": "0.2670865535",
              "lunar": "103.8966693115",
              "kilometers": "39955579.509241045",
              "miles": "24827245.852354621"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2008-03-17",
            "close_approach_date_full": "2008-Mar-17 11:41",
            "epoch_date_close_approach": 1205754060000,
            "relative_velocity": {
              "kilometers_per_second": "9.7438577408",
              "kilometers_per_hour": "35077.8878668494",
              "miles_per_hour": "21796.0353803765"
            },
            "miss_distance": {
              "astronomical": "0.1251027024",
              "lunar": "48.6649512336",
              "kilometers": "18715097.810283888",
              "miles": "11629022.5343701344"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2012-09-14",
            "close_approach_date_full": "2012-Sep-14 02:56",
            "epoch_date_close_approach": 1347591360000,
            "relative_velocity": {
              "kilometers_per_second": "23.8467224909",
              "kilometers_per_hour": "85848.2009671403",
              "miles_per_hour": "53342.7335398322"
            },
            "miss_distance": {
              "astronomical": "0.446174799",
              "lunar": "173.561996811",
              "kilometers": "66746799.57807813",
              "miles": "41474538.057932994"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2015-03-07",
            "close_approach_date_full": "2015-Mar-07 09:37",
            "epoch_date_close_approach": 1425721020000,
            "relative_velocity": {
              "kilometers_per_second": "17.7053225018",
              "kilometers_per_hour": "63739.1610063259",
              "miles_per_hour": "39605.0359041807"
            },
            "miss_distance": {
              "astronomical": "0.2384221474",
              "lunar": "92.7462153386",
              "kilometers": "35667445.411866038",
              "miles": "22162722.8798178044"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2019-08-31",
            "close_approach_date_full": "2019-Aug-31 17:20",
            "epoch_date_close_approach": 1567272000000,
            "relative_velocity": {
              "kilometers_per_second": "15.2835382843",
              "kilometers_per_hour": "55020.7378235455",
              "miles_per_hour": "34187.7467881914"
            },
            "miss_distance": {
              "astronomical": "0.1372576208",
              "lunar": "53.3932144912",
              "kilometers": "20533447.712947696",
              "miles": "12758892.7711063648"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2026-02-09",
            "close_approach_date_full": "2026-Feb-09 02:21",
            "epoch_date_close_approach": 1770603660000,
            "relative_velocity": {
              "kilometers_per_second": "9.3118429214",
              "kilometers_per_hour": "33522.6345169139",
              "miles_per_hour": "20829.6614308013"
            },
            "miss_distance": {
              "astronomical": "0.4729322424",
              "lunar": "183.9706422936",
              "kilometers": "70749656.117363688",
              "miles": "43961797.7756793744"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2026-08-12",
            "close_approach_date_full": "2026-Aug-12 08:35",
            "epoch_date_close_approach": 1786523700000,
            "relative_velocity": {
              "kilometers_per_second": "8.3615352677",
              "kilometers_per_hour": "30101.5269636165",
              "miles_per_hour": "18703.9182402538"
            },
            "miss_distance": {
              "astronomical": "0.1704372834",
              "lunar": "66.3001032426",
              "kilometers": "25497054.565226358",
              "miles": "15843135.0508974204"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2033-03-14",
            "close_approach_date_full": "2033-Mar-14 23:04",
            "epoch_date_close_approach": 1994454240000,
            "relative_velocity": {
              "kilometers_per_second": "7.737120437",
              "kilometers_per_hour": "27853.6335732196",
              "miles_per_hour": "17307.1647055375"
            },
            "miss_distance": {
              "astronomical": "0.245392354",
              "lunar": "95.457625706",
              "kilometers": "36710173.47268598",
              "miles": "22810644.052307324"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2033-09-23",
            "close_approach_date_full": "2033-Sep-23 08:08",
            "epoch_date_close_approach": 2011075680000,
            "relative_velocity": {
              "kilometers_per_second": "8.0798014784",
              "kilometers_per_hour": "29087.285322347",
              "miles_per_hour": "18073.7079270994"
            },
            "miss_distance": {
              "astronomical": "0.4548008285",
              "lunar": "176.9175222865",
              "kilometers": "68037235.217835295",
              "miles": "42276377.582685271"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2040-03-12",
            "close_approach_date_full": "2040-Mar-12 10:58",
            "epoch_date_close_approach": 2215162680000,
            "relative_velocity": {
              "kilometers_per_second": "13.7430093155",
              "kilometers_per_hour": "49474.833535705",
              "miles_per_hour": "30741.7375377829"
            },
            "miss_distance": {
              "astronomical": "0.1136386637",
              "lunar": "44.2054401793",
              "kilometers": "17000102.039166319",
              "miles": "10563373.5769964422"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2044-09-06",
            "close_approach_date_full": "2044-Sep-06 21:24",
            "epoch_date_close_approach": 2356809840000,
            "relative_velocity": {
              "kilometers_per_second": "19.2045438202",
              "kilometers_per_hour": "69136.3577528024",
              "miles_per_hour": "42958.6440714566"
            },
            "miss_distance": {
              "astronomical": "0.2814460765",
              "lunar": "109.4825237585",
              "kilometers": "42103733.564257055",
              "miles": "26162046.886595159"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2047-02-28",
            "close_approach_date_full": "2047-Feb-28 15:33",
            "epoch_date_close_approach": 2434980780000,
            "relative_velocity": {
              "kilometers_per_second": "22.5440279236",
              "kilometers_per_hour": "81158.5005250388",
              "miles_per_hour": "50428.7360623498"
            },
            "miss_distance": {
              "astronomical": "0.4034960507",
              "lunar": "156.9599637223",
              "kilometers": "60362149.738132009",
              "miles": "37507300.6106353642"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2051-08-23",
            "close_approach_date_full": "2051-Aug-23 03:35",
            "epoch_date_close_approach": 2576374500000,
            "relative_velocity": {
              "kilometers_per_second": "11.0130375819",
              "kilometers_per_hour": "39646.9352946924",
              "miles_per_hour": "24635.0637668604"
            },
            "miss_distance": {
              "astronomical": "0.0478817189",
              "lunar": "18.6259886521",
              "kilometers": "7163003.159378743",
              "miles": "4450883.7730149334"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2058-03-04",
            "close_approach_date_full": "2058-Mar-04 22:25",
            "epoch_date_close_approach": 2782506300000,
            "relative_velocity": {
              "kilometers_per_second": "7.9256423268",
              "kilometers_per_hour": "28532.3123765954",
              "miles_per_hour": "17728.8693208906"
            },
            "miss_distance": {
              "astronomical": "0.3160574273",
              "lunar": "122.9463392197",
              "kilometers": "47281517.921759851",
              "miles": "29379372.8969579038"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2058-05-28",
            "close_approach_date_full": "2058-May-28 23:59",
            "epoch_date_close_approach": 2789855940000,
            "relative_velocity": {
              "kilometers_per_second": "8.4039906196",
              "kilometers_per_hour": "30254.3662307026",
              "miles_per_hour": "18798.8866170718"
            },
            "miss_distance": {
              "astronomical": "0.2819782625",
              "lunar": "109.6895441125",
              "kilometers": "42183347.456300875",
              "miles": "26211516.665167075"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2058-09-11",
            "close_approach_date_full": "2058-Sep-11 03:14",
            "epoch_date_close_approach": 2798939640000,
            "relative_velocity": {
              "kilometers_per_second": "7.4145414152",
              "kilometers_per_hour": "26692.349094831",
              "miles_per_hour": "16585.5876917299"
            },
            "miss_distance": {
              "astronomical": "0.3960268361",
              "lunar": "154.0544392429",
              "kilometers": "59244771.143399107",
              "miles": "36812993.7473053966"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2065-03-13",
            "close_approach_date_full": "2065-Mar-13 19:56",
            "epoch_date_close_approach": 3004199760000,
            "relative_velocity": {
              "kilometers_per_second": "12.9517023085",
              "kilometers_per_hour": "46626.1283107512",
              "miles_per_hour": "28971.6628939776"
            },
            "miss_distance": {
              "astronomical": "0.0965980627",
              "lunar": "37.5766463903",
              "kilometers": "14450864.426046449",
              "miles": "8979350.7763170362"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2069-09-07",
            "close_approach_date_full": "2069-Sep-07 10:06",
            "epoch_date_close_approach": 3145773960000,
            "relative_velocity": {
              "kilometers_per_second": "19.2698421029",
              "kilometers_per_hour": "69371.4315705714",
              "miles_per_hour": "43104.7098000587"
            },
            "miss_distance": {
              "astronomical": "0.284331477",
              "lunar": "110.604944553",
              "kilometers": "42535383.33315399",
              "miles": "26430261.615705462"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2072-02-28",
            "close_approach_date_full": "2072-Feb-28 11:27",
            "epoch_date_close_approach": 3223884420000,
            "relative_velocity": {
              "kilometers_per_second": "22.8747688355",
              "kilometers_per_hour": "82349.1678077316",
              "miles_per_hour": "51168.5704080874"
            },
            "miss_distance": {
              "astronomical": "0.4149194647",
              "lunar": "161.4036717683",
              "kilometers": "62071068.140660189",
              "miles": "38569173.2662770482"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2076-08-20",
            "close_approach_date_full": "2076-Aug-20 09:35",
            "epoch_date_close_approach": 3365141700000,
            "relative_velocity": {
              "kilometers_per_second": "10.2248345955",
              "kilometers_per_hour": "36809.4045438353",
              "miles_per_hour": "22871.9325066959"
            },
            "miss_distance": {
              "astronomical": "0.0783701768",
              "lunar": "30.4859987752",
              "kilometers": "11724011.520803416",
              "miles": "7284962.9508065008"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2083-03-12",
            "close_approach_date_full": "2083-Mar-12 08:35",
            "epoch_date_close_approach": 3572066100000,
            "relative_velocity": {
              "kilometers_per_second": "7.7450096134",
              "kilometers_per_hour": "27882.0346083225",
              "miles_per_hour": "17324.8120042657"
            },
            "miss_distance": {
              "astronomical": "0.2685509055",
              "lunar": "104.4663022395",
              "kilometers": "40174643.449371285",
              "miles": "24963365.872782333"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2083-05-08",
            "close_approach_date_full": "2083-May-08 07:41",
            "epoch_date_close_approach": 3576987660000,
            "relative_velocity": {
              "kilometers_per_second": "7.6484766195",
              "kilometers_per_hour": "27534.5158301994",
              "miles_per_hour": "17108.8773501592"
            },
            "miss_distance": {
              "astronomical": "0.269859447",
              "lunar": "104.975324883",
              "kilometers": "40370398.47057789",
              "miles": "25085002.402599282"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2083-09-20",
            "close_approach_date_full": "2083-Sep-20 20:56",
            "epoch_date_close_approach": 3588699360000,
            "relative_velocity": {
              "kilometers_per_second": "7.8692379683",
              "kilometers_per_hour": "28329.2566858344",
              "miles_per_hour": "17602.6984112619"
            },
            "miss_distance": {
              "astronomical": "0.4388476077",
              "lunar": "170.7117193953",
              "kilometers": "65650667.366515599",
              "miles": "40793433.0849253062"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2090-03-11",
            "close_approach_date_full": "2090-Mar-11 06:39",
            "epoch_date_close_approach": 3792897540000,
            "relative_velocity": {
              "kilometers_per_second": "15.005935833",
              "kilometers_per_hour": "54021.3689989152",
              "miles_per_hour": "33566.7778649093"
            },
            "miss_distance": {
              "astronomical": "0.1508073057",
              "lunar": "58.6640419173",
              "kilometers": "22560451.713158859",
              "miles": "14018414.6520318942"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2094-09-03",
            "close_approach_date_full": "2094-Sep-03 10:34",
            "epoch_date_close_approach": 3934348440000,
            "relative_velocity": {
              "kilometers_per_second": "16.6942588757",
              "kilometers_per_hour": "60099.3319524037",
              "miles_per_hour": "37343.3876789811"
            },
            "miss_distance": {
              "astronomical": "0.1900233726",
              "lunar": "73.9190919414",
              "kilometers": "28427091.791176362",
              "miles": "17663775.7588713156"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2101-02-12",
            "close_approach_date_full": "2101-Feb-12 10:24",
            "epoch_date_close_approach": 4137647040000,
            "relative_velocity": {
              "kilometers_per_second": "9.169251543",
              "kilometers_per_hour": "33009.3055546944",
              "miles_per_hour": "20510.6987764711"
            },
            "miss_distance": {
              "astronomical": "0.4558547622",
              "lunar": "177.3275024958",
              "kilometers": "68194901.454476514",
              "miles": "42374346.8392393332"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2101-08-07",
            "close_approach_date_full": "2101-Aug-07 02:26",
            "epoch_date_close_approach": 4152824760000,
            "relative_velocity": {
              "kilometers_per_second": "8.0119289861",
              "kilometers_per_hour": "28842.94435001",
              "miles_per_hour": "17921.8839490382"
            },
            "miss_distance": {
              "astronomical": "0.1980370843",
              "lunar": "77.0364257927",
              "kilometers": "29625925.992290441",
              "miles": "18408696.7889964458"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2108-03-18",
            "close_approach_date_full": "2108-Mar-18 23:57",
            "epoch_date_close_approach": 4361558220000,
            "relative_velocity": {
              "kilometers_per_second": "9.3905190847",
              "kilometers_per_hour": "33805.8687050247",
              "miles_per_hour": "21005.6521406305"
            },
            "miss_distance": {
              "astronomical": "0.1395653645",
              "lunar": "54.2909267905",
              "kilometers": "20878681.254973615",
              "miles": "12973410.946781287"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2112-09-14",
            "close_approach_date_full": "2112-Sep-14 05:20",
            "epoch_date_close_approach": 4503273600000,
            "relative_velocity": {
              "kilometers_per_second": "22.8446159039",
              "kilometers_per_hour": "82240.6172540494",
              "miles_per_hour": "51101.1213154397"
            },
            "miss_distance": {
              "astronomical": "0.4115762606",
              "lunar": "160.1031653734",
              "kilometers": "61570931.928324922",
              "miles": "38258403.0345390436"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2115-03-06",
            "close_approach_date_full": "2115-Mar-06 04:41",
            "epoch_date_close_approach": 4581290460000,
            "relative_velocity": {
              "kilometers_per_second": "19.5634507563",
              "kilometers_per_hour": "70428.42272281",
              "miles_per_hour": "43761.4829968482"
            },
            "miss_distance": {
              "astronomical": "0.3029349418",
              "lunar": "117.8416923602",
              "kilometers": "45318422.041853966",
              "miles": "28159561.6805820908"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2119-08-27",
            "close_approach_date_full": "2119-Aug-27 16:11",
            "epoch_date_close_approach": 4722595860000,
            "relative_velocity": {
              "kilometers_per_second": "12.3889919731",
              "kilometers_per_hour": "44600.3711031362",
              "miles_per_hour": "27712.9361446126"
            },
            "miss_distance": {
              "astronomical": "0.0336165493",
              "lunar": "13.0768376777",
              "kilometers": "5028964.172029991",
              "miles": "3124853.4351202358"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2126-02-25",
            "close_approach_date_full": "2126-Feb-25 01:41",
            "epoch_date_close_approach": 4927657260000,
            "relative_velocity": {
              "kilometers_per_second": "8.4548311668",
              "kilometers_per_hour": "30437.3922006333",
              "miles_per_hour": "18912.6118371101"
            },
            "miss_distance": {
              "astronomical": "0.374968052",
              "lunar": "145.862572228",
              "kilometers": "56094421.89724924",
              "miles": "34855457.497909912"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2126-06-23",
            "close_approach_date_full": "2126-Jun-23 11:31",
            "epoch_date_close_approach": 4937887860000,
            "relative_velocity": {
              "kilometers_per_second": "8.6068345691",
              "kilometers_per_hour": "30984.6044486596",
              "miles_per_hour": "19252.6282475574"
            },
            "miss_distance": {
              "astronomical": "0.2728494264",
              "lunar": "106.1384268696",
              "kilometers": "40817693.020161768",
              "miles": "25362938.3476496784"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2133-03-18",
            "close_approach_date_full": "2133-Mar-18 05:51",
            "epoch_date_close_approach": 5150411460000,
            "relative_velocity": {
              "kilometers_per_second": "10.6944233242",
              "kilometers_per_hour": "38499.923967205",
              "miles_per_hour": "23922.3555339558"
            },
            "miss_distance": {
              "astronomical": "0.100594172",
              "lunar": "39.131132908",
              "kilometers": "15048673.86561364",
              "miles": "9350812.337162632"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2137-09-13",
            "close_approach_date_full": "2137-Sep-13 19:10",
            "epoch_date_close_approach": 5292155400000,
            "relative_velocity": {
              "kilometers_per_second": "22.3425661523",
              "kilometers_per_hour": "80433.2381481479",
              "miles_per_hour": "49978.0862259978"
            },
            "miss_distance": {
              "astronomical": "0.3934902977",
              "lunar": "153.0677258053",
              "kilometers": "58865310.401585899",
              "miles": "36577207.7758834462"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2140-03-05",
            "close_approach_date_full": "2140-Mar-05 23:55",
            "epoch_date_close_approach": 5370278100000,
            "relative_velocity": {
              "kilometers_per_second": "19.4255481727",
              "kilometers_per_hour": "69931.9734215933",
              "miles_per_hour": "43453.0087074339"
            },
            "miss_distance": {
              "astronomical": "0.2984549216",
              "lunar": "116.0989645024",
              "kilometers": "44648220.562376992",
              "miles": "27743117.7919948096"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2144-08-29",
            "close_approach_date_full": "2144-Aug-29 08:08",
            "epoch_date_close_approach": 5511744480000,
            "relative_velocity": {
              "kilometers_per_second": "13.5183021609",
              "kilometers_per_hour": "48665.8877792548",
              "miles_per_hour": "30239.0901037264"
            },
            "miss_distance": {
              "astronomical": "0.0705258061",
              "lunar": "27.4345385729",
              "kilometers": "10550510.372593007",
              "miles": "6555783.1498252166"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2151-02-17",
            "close_approach_date_full": "2151-Feb-17 11:46",
            "epoch_date_close_approach": 5715920760000,
            "relative_velocity": {
              "kilometers_per_second": "8.960783769",
              "kilometers_per_hour": "32258.8215684072",
              "miles_per_hour": "20044.3772128806"
            },
            "miss_distance": {
              "astronomical": "0.4286689797",
              "lunar": "166.7522331033",
              "kilometers": "64127966.298193239",
              "miles": "39847270.5152111382"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2151-07-22",
            "close_approach_date_full": "2151-Jul-22 16:37",
            "epoch_date_close_approach": 5729330220000,
            "relative_velocity": {
              "kilometers_per_second": "8.0845087658",
              "kilometers_per_hour": "29104.2315567271",
              "miles_per_hour": "18084.237658123"
            },
            "miss_distance": {
              "astronomical": "0.2319490125",
              "lunar": "90.2281658625",
              "kilometers": "34699078.218603375",
              "miles": "21561007.407841575"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2158-03-20",
            "close_approach_date_full": "2158-Mar-20 02:29",
            "epoch_date_close_approach": 5939490540000,
            "relative_velocity": {
              "kilometers_per_second": "8.6455573065",
              "kilometers_per_hour": "31124.0063032426",
              "miles_per_hour": "19339.2471388121"
            },
            "miss_distance": {
              "astronomical": "0.1750878014",
              "lunar": "68.1091547446",
              "kilometers": "26192762.152423018",
              "miles": "16275427.6999049284"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2165-03-11",
            "close_approach_date_full": "2165-Mar-11 12:24",
            "epoch_date_close_approach": 6159673440000,
            "relative_velocity": {
              "kilometers_per_second": "15.8836924571",
              "kilometers_per_hour": "57181.2928453966",
              "miles_per_hour": "35530.2316571854"
            },
            "miss_distance": {
              "astronomical": "0.1803815409",
              "lunar": "70.1684194101",
              "kilometers": "26984694.305957883",
              "miles": "16767511.5218814654"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2169-09-05",
            "close_approach_date_full": "2169-Sep-05 14:32",
            "epoch_date_close_approach": 6301290720000,
            "relative_velocity": {
              "kilometers_per_second": "17.265684071",
              "kilometers_per_hour": "62156.4626556043",
              "miles_per_hour": "38621.6086984226"
            },
            "miss_distance": {
              "astronomical": "0.2107284041",
              "lunar": "81.9733491949",
              "kilometers": "31524520.401859267",
              "miles": "19588428.6502092046"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2172-02-28",
            "close_approach_date_full": "2172-Feb-28 02:38",
            "epoch_date_close_approach": 6379526280000,
            "relative_velocity": {
              "kilometers_per_second": "24.4218478582",
              "kilometers_per_hour": "87918.6522895826",
              "miles_per_hour": "54629.2314740465"
            },
            "miss_distance": {
              "astronomical": "0.4683835425",
              "lunar": "182.2011980325",
              "kilometers": "70069180.301054475",
              "miles": "43538969.710222755"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2176-08-20",
            "close_approach_date_full": "2176-Aug-20 12:13",
            "epoch_date_close_approach": 6520824780000,
            "relative_velocity": {
              "kilometers_per_second": "9.8725060042",
              "kilometers_per_hour": "35541.0216152136",
              "miles_per_hour": "22083.8086808531"
            },
            "miss_distance": {
              "astronomical": "0.0936338729",
              "lunar": "36.4235765581",
              "kilometers": "14007427.945690723",
              "miles": "8703812.1243210574"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2183-03-08",
            "close_approach_date_full": "2183-Mar-08 21:14",
            "epoch_date_close_approach": 6727439640000,
            "relative_velocity": {
              "kilometers_per_second": "7.8929526608",
              "kilometers_per_hour": "28414.6295788513",
              "miles_per_hour": "17655.7458069257"
            },
            "miss_distance": {
              "astronomical": "0.3014479871",
              "lunar": "117.2632669819",
              "kilometers": "45095976.785947477",
              "miles": "28021340.6079581026"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2183-05-26",
            "close_approach_date_full": "2183-May-26 05:10",
            "epoch_date_close_approach": 6734207400000,
            "relative_velocity": {
              "kilometers_per_second": "8.2553440682",
              "kilometers_per_hour": "29719.2386453818",
              "miles_per_hour": "18466.3791460707"
            },
            "miss_distance": {
              "astronomical": "0.2804002421",
              "lunar": "109.0756941769",
              "kilometers": "41947278.965644327",
              "miles": "26064830.5070006326"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2183-09-15",
            "close_approach_date_full": "2183-Sep-15 19:32",
            "epoch_date_close_approach": 6743935920000,
            "relative_velocity": {
              "kilometers_per_second": "7.505987466",
              "kilometers_per_hour": "27021.5548775192",
              "miles_per_hour": "16790.1433626452"
            },
            "miss_distance": {
              "astronomical": "0.4101471258",
              "lunar": "159.5472319362",
              "kilometers": "61357136.406302046",
              "miles": "38125556.6573223948"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2190-03-16",
            "close_approach_date_full": "2190-Mar-16 04:16",
            "epoch_date_close_approach": 6948994560000,
            "relative_velocity": {
              "kilometers_per_second": "12.7193170838",
              "kilometers_per_hour": "45789.5415016922",
              "miles_per_hour": "28451.8403847598"
            },
            "miss_distance": {
              "astronomical": "0.0965581506",
              "lunar": "37.5611205834",
              "kilometers": "14444893.660899222",
              "miles": "8975640.7148923836"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2194-09-10",
            "close_approach_date_full": "2194-Sep-10 09:32",
            "epoch_date_close_approach": 7090623120000,
            "relative_velocity": {
              "kilometers_per_second": "19.8591089839",
              "kilometers_per_hour": "71492.7923419111",
              "miles_per_hour": "44422.8408860058"
            },
            "miss_distance": {
              "astronomical": "0.3054387654",
              "lunar": "118.8156797406",
              "kilometers": "45692988.719269698",
              "miles": "28392306.6214019124"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2197-03-02",
            "close_approach_date_full": "2197-Mar-02 20:06",
            "epoch_date_close_approach": 7168766760000,
            "relative_velocity": {
              "kilometers_per_second": "22.0537875174",
              "kilometers_per_hour": "79393.6350627728",
              "miles_per_hour": "49332.1172977546"
            },
            "miss_distance": {
              "astronomical": "0.388513355",
              "lunar": "151.131695095",
              "kilometers": "58120770.37455385",
              "miles": "36114572.05578913"
            },
            "orbiting_body": "Earth"
          }
        ],
        "orbital_data": {
          "orbit_id": "764",
          "orbit_determination_date": "2024-07-10 13:52:13",
          "first_observation_date": "1951-09-14",
          "last_observation_date": "2024-01-27",
          "data_arc_in_days": 26433,
          "observations_used": 8159,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".0299635",
          "jupiter_tisserand_invariant": "5.074",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".335621681427412",
          "semi_major_axis": "1.24562787745437",
          "inclination": "13.33590217764326",
          "ascending_node_longitude": "337.1497817435668",
          "orbital_period": "507.7862138329879",
          "perihelion_distance": ".8275681547902761",
          "perihelion_argument": "277.0069527512796",
          "aphelion_distance": "1.663687600118464",
          "perihelion_time": "2460700.139965611163",
          "mean_anomaly": "289.3592723810798",
          "mean_motion": ".7089597751828781",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "APO",
            "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
            "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
          }
        },
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2001627?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2001627",
        "neo_reference_id": "2001627",
        "name": "1627 Ivar (1929 SH)",
        "name_limited": "Ivar",
        "designation": "1627",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2001627",
        "absolute_magnitude_h": 12.84,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 7.1871213318,
            "estimated_diameter_max": 16.0708918604
          },
          "meters": {
            "estimated_diameter_min": 7187.1213318013,
            "estimated_diameter_max": 16070.8918604465
          },
          "miles": {
            "estimated_diameter_min": 4.4658687691,
            "estimated_diameter_max": 9.9859861462
          },
          "feet": {
            "estimated_diameter_min": 23579.795150227,
            "estimated_diameter_max": 52726.0248514274
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "1901-07-11",
            "close_approach_date_full": "1901-Jul-11 20:46",
            "epoch_date_close_approach": -2160875640000,
            "relative_velocity": {
              "kilometers_per_second": "8.3835105987",
              "kilometers_per_hour": "30180.6381554315",
              "miles_per_hour": "18753.0748583013"
            },
            "miss_distance": {
              "astronomical": "0.2465443589",
              "lunar": "95.9057556121",
              "kilometers": "36882510.951955543",
              "miles": "22917729.5963027734"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1906-08-17",
            "close_approach_date_full": "1906-Aug-17 18:28",
            "epoch_date_close_approach": -1999920720000,
            "relative_velocity": {
              "kilometers_per_second": "13.470483176",
              "kilometers_per_hour": "48493.7394334236",
              "miles_per_hour": "30132.1238162848"
            },
            "miss_distance": {
              "astronomical": "0.3931678341",
              "lunar": "152.9422874649",
              "kilometers": "58817070.533873367",
              "miles": "36547232.9120397846"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1929-07-19",
            "close_approach_date_full": "1929-Jul-19 10:23",
            "epoch_date_close_approach": -1276609020000,
            "relative_velocity": {
              "kilometers_per_second": "6.5498707205",
              "kilometers_per_hour": "23579.5345936695",
              "miles_per_hour": "14651.4058146054"
            },
            "miss_distance": {
              "astronomical": "0.1665221116",
              "lunar": "64.7771014124",
              "kilometers": "24911353.203262292",
              "miles": "15479197.1005999496"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1934-08-22",
            "close_approach_date_full": "1934-Aug-22 18:18",
            "epoch_date_close_approach": -1115876520000,
            "relative_velocity": {
              "kilometers_per_second": "15.8822132629",
              "kilometers_per_hour": "57175.967746544",
              "miles_per_hour": "35526.9228478457"
            },
            "miss_distance": {
              "astronomical": "0.4829510668",
              "lunar": "187.8679649852",
              "kilometers": "72248450.907507716",
              "miles": "44893105.6729538408"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1957-07-21",
            "close_approach_date_full": "1957-Jul-21 08:58",
            "epoch_date_close_approach": -392828520000,
            "relative_velocity": {
              "kilometers_per_second": "6.2927128486",
              "kilometers_per_hour": "22653.7662549937",
              "miles_per_hour": "14076.1693710543"
            },
            "miss_distance": {
              "astronomical": "0.1501796295",
              "lunar": "58.4198758755",
              "kilometers": "22466552.690589165",
              "miles": "13960068.504953877"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1962-08-23",
            "close_approach_date_full": "1962-Aug-23 03:49",
            "epoch_date_close_approach": -232229460000,
            "relative_velocity": {
              "kilometers_per_second": "15.9410920192",
              "kilometers_per_hour": "57387.9312691952",
              "miles_per_hour": "35658.6287377952"
            },
            "miss_distance": {
              "astronomical": "0.486435327",
              "lunar": "189.223342203",
              "kilometers": "72769688.81195349",
              "miles": "45216987.888158562"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1985-07-16",
            "close_approach_date_full": "1985-Jul-16 15:26",
            "epoch_date_close_approach": 490375560000,
            "relative_velocity": {
              "kilometers_per_second": "7.3196295087",
              "kilometers_per_hour": "26350.6662314173",
              "miles_per_hour": "16373.2792480715"
            },
            "miss_distance": {
              "astronomical": "0.2007329352",
              "lunar": "78.0851117928",
              "kilometers": "30029219.544768024",
              "miles": "18659291.7822617712"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1990-08-19",
            "close_approach_date_full": "1990-Aug-19 15:40",
            "epoch_date_close_approach": 651080400000,
            "relative_velocity": {
              "kilometers_per_second": "13.8788273012",
              "kilometers_per_hour": "49963.7782841666",
              "miles_per_hour": "31045.548789959"
            },
            "miss_distance": {
              "astronomical": "0.4076688355",
              "lunar": "158.5831770095",
              "kilometers": "60986389.456180385",
              "miles": "37895185.184983913"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2013-07-06",
            "close_approach_date_full": "2013-Jul-06 21:16",
            "epoch_date_close_approach": 1373145360000,
            "relative_velocity": {
              "kilometers_per_second": "10.4527134306",
              "kilometers_per_hour": "37629.7683501164",
              "miles_per_hour": "23381.6746728821"
            },
            "miss_distance": {
              "astronomical": "0.3215714207",
              "lunar": "125.0912826523",
              "kilometers": "48106399.589593909",
              "miles": "29891930.5977335842"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2018-08-12",
            "close_approach_date_full": "2018-Aug-12 14:32",
            "epoch_date_close_approach": 1534084320000,
            "relative_velocity": {
              "kilometers_per_second": "10.5006119751",
              "kilometers_per_hour": "37802.2031103229",
              "miles_per_hour": "23488.8189270781"
            },
            "miss_distance": {
              "astronomical": "0.283998047",
              "lunar": "110.475240283",
              "kilometers": "42485502.91535989",
              "miles": "26399267.361310882"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2041-06-29",
            "close_approach_date_full": "2041-Jun-29 06:58",
            "epoch_date_close_approach": 2256101880000,
            "relative_velocity": {
              "kilometers_per_second": "13.6383320158",
              "kilometers_per_hour": "49097.9952570064",
              "miles_per_hour": "30507.5848862215"
            },
            "miss_distance": {
              "astronomical": "0.4353012179",
              "lunar": "169.3321737631",
              "kilometers": "65120135.006245873",
              "miles": "40463775.5626761274"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2046-08-06",
            "close_approach_date_full": "2046-Aug-06 06:42",
            "epoch_date_close_approach": 2417150520000,
            "relative_velocity": {
              "kilometers_per_second": "7.8319948078",
              "kilometers_per_hour": "28195.1813080386",
              "miles_per_hour": "17519.3891855421"
            },
            "miss_distance": {
              "astronomical": "0.1774769996",
              "lunar": "69.0385528444",
              "kilometers": "26550181.114150852",
              "miles": "16497517.5442796776"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2074-08-03",
            "close_approach_date_full": "2074-Aug-03 16:48",
            "epoch_date_close_approach": 3300540480000,
            "relative_velocity": {
              "kilometers_per_second": "6.9713164947",
              "kilometers_per_hour": "25096.7393810272",
              "miles_per_hour": "15594.137867061"
            },
            "miss_distance": {
              "astronomical": "0.1407388686",
              "lunar": "54.7474198854",
              "kilometers": "21054234.968769882",
              "miles": "13082494.9662410916"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2097-06-25",
            "close_approach_date_full": "2097-Jun-25 12:24",
            "epoch_date_close_approach": 4023001440000,
            "relative_velocity": {
              "kilometers_per_second": "15.2814131476",
              "kilometers_per_hour": "55013.0873312959",
              "miles_per_hour": "34182.9930698266"
            },
            "miss_distance": {
              "astronomical": "0.4865457281",
              "lunar": "189.2662882309",
              "kilometers": "72786204.581359147",
              "miles": "45227250.3113923486"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2102-08-06",
            "close_approach_date_full": "2102-Aug-06 04:18",
            "epoch_date_close_approach": 4184281080000,
            "relative_velocity": {
              "kilometers_per_second": "7.314235863",
              "kilometers_per_hour": "26331.2491066298",
              "miles_per_hour": "16361.2142018389"
            },
            "miss_distance": {
              "astronomical": "0.1569521035",
              "lunar": "61.0543682615",
              "kilometers": "23479700.375619545",
              "miles": "14589609.284237921"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2125-07-03",
            "close_approach_date_full": "2125-Jul-03 19:10",
            "epoch_date_close_approach": 4907243400000,
            "relative_velocity": {
              "kilometers_per_second": "12.5974502375",
              "kilometers_per_hour": "45350.82085491",
              "miles_per_hour": "28179.2364362078"
            },
            "miss_distance": {
              "astronomical": "0.3972819197",
              "lunar": "154.5426667633",
              "kilometers": "59432528.976631039",
              "miles": "36929661.0549407782"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2130-08-12",
            "close_approach_date_full": "2130-Aug-12 12:53",
            "epoch_date_close_approach": 5068443180000,
            "relative_velocity": {
              "kilometers_per_second": "9.5732666192",
              "kilometers_per_hour": "34463.7598291559",
              "miles_per_hour": "21414.4401005108"
            },
            "miss_distance": {
              "astronomical": "0.2494441098",
              "lunar": "97.0337587122",
              "kilometers": "37316307.510126126",
              "miles": "23187278.2784114988"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2153-07-13",
            "close_approach_date_full": "2153-Jul-13 00:49",
            "epoch_date_close_approach": 5791654140000,
            "relative_velocity": {
              "kilometers_per_second": "9.2148867383",
              "kilometers_per_hour": "33173.5922579269",
              "miles_per_hour": "20612.7801449324"
            },
            "miss_distance": {
              "astronomical": "0.2713591619",
              "lunar": "105.5587139791",
              "kilometers": "40594752.625225153",
              "miles": "25224409.6098989914"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2158-08-20",
            "close_approach_date_full": "2158-Aug-20 02:45",
            "epoch_date_close_approach": 5952710700000,
            "relative_velocity": {
              "kilometers_per_second": "12.867098454",
              "kilometers_per_hour": "46321.5544343291",
              "miles_per_hour": "28782.4125317085"
            },
            "miss_distance": {
              "astronomical": "0.3757849641",
              "lunar": "146.1803510349",
              "kilometers": "56216630.207386467",
              "miles": "34931394.2205965646"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2181-07-21",
            "close_approach_date_full": "2181-Jul-21 20:31",
            "epoch_date_close_approach": 6676029060000,
            "relative_velocity": {
              "kilometers_per_second": "6.7937892107",
              "kilometers_per_hour": "24457.6411585756",
              "miles_per_hour": "15197.0270854494"
            },
            "miss_distance": {
              "astronomical": "0.1664701687",
              "lunar": "64.7568956243",
              "kilometers": "24903582.656060669",
              "miles": "15474368.7064644722"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2186-08-26",
            "close_approach_date_full": "2186-Aug-26 02:04",
            "epoch_date_close_approach": 6836839440000,
            "relative_velocity": {
              "kilometers_per_second": "15.5926577018",
              "kilometers_per_hour": "56133.5677266226",
              "miles_per_hour": "34879.216013245"
            },
            "miss_distance": {
              "astronomical": "0.4731844749",
              "lunar": "184.0687607361",
              "kilometers": "70787389.562108463",
              "miles": "43985244.2510162694"
            },
            "orbiting_body": "Earth"
          }
        ],
        "orbital_data": {
          "orbit_id": "1337",
          "orbit_determination_date": "2024-09-24 06:21:31",
          "first_observation_date": "1929-09-25",
          "last_observation_date": "2024-09-23",
          "data_arc_in_days": 34697,
          "observations_used": 13345,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".11195",
          "jupiter_tisserand_invariant": "3.879",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".3969628543096672",
          "semi_major_axis": "1.863384844539243",
          "inclination": "8.454079284132391",
          "ascending_node_longitude": "133.076856921743",
          "orbital_period": "929.0781901468489",
          "perihelion_distance": "1.12369027797357",
          "perihelion_argument": "167.8426866392379",
          "aphelion_distance": "2.603079411104916",
          "perihelion_time": "2460196.841158422833",
          "mean_anomaly": "156.4100680749071",
          "mean_motion": ".3874808426437164",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "AMO",
            "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
            "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
          }
        },
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2001685?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2001685",
        "neo_reference_id": "2001685",
        "name": "1685 Toro (1948 OA)",
        "name_limited": "Toro",
        "designation": "1685",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2001685",
        "absolute_magnitude_h": 14.28,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 3.7030107822,
            "estimated_diameter_max": 8.2801838305
          },
          "meters": {
            "estimated_diameter_min": 3703.0107822286,
            "estimated_diameter_max": 8280.1838304779
          },
          "miles": {
            "estimated_diameter_min": 2.3009435128,
            "estimated_diameter_max": 5.1450661069
          },
          "feet": {
            "estimated_diameter_min": 12148.9858947669,
            "estimated_diameter_max": 27165.958318385
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "1900-08-02",
            "close_approach_date_full": "1900-Aug-02 11:05",
            "epoch_date_close_approach": -2190545700000,
            "relative_velocity": {
              "kilometers_per_second": "17.0090767602",
              "kilometers_per_hour": "61232.6763368053",
              "miles_per_hour": "38047.6038049444"
            },
            "miss_distance": {
              "astronomical": "0.2002647305",
              "lunar": "77.9029801645",
              "kilometers": "29959177.118924035",
              "miles": "18615769.437000283"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1904-01-29",
            "close_approach_date_full": "1904-Jan-29 05:51",
            "epoch_date_close_approach": -2080404540000,
            "relative_velocity": {
              "kilometers_per_second": "21.1758146314",
              "kilometers_per_hour": "76232.9326729176",
              "miles_per_hour": "47368.1797489026"
            },
            "miss_distance": {
              "astronomical": "0.297917295",
              "lunar": "115.889827755",
              "kilometers": "44567792.76816165",
              "miles": "27693142.27806477"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1908-08-04",
            "close_approach_date_full": "1908-Aug-04 01:10",
            "epoch_date_close_approach": -1937947800000,
            "relative_velocity": {
              "kilometers_per_second": "16.1350770105",
              "kilometers_per_hour": "58086.2772377183",
              "miles_per_hour": "36092.5537647367"
            },
            "miss_distance": {
              "astronomical": "0.1770320452",
              "lunar": "68.8654655828",
              "kilometers": "26483616.883663724",
              "miles": "16456156.4493944312"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1912-01-31",
            "close_approach_date_full": "1912-Jan-31 01:55",
            "epoch_date_close_approach": -1827785100000,
            "relative_velocity": {
              "kilometers_per_second": "22.1491519651",
              "kilometers_per_hour": "79736.94707431",
              "miles_per_hour": "49545.4380307011"
            },
            "miss_distance": {
              "astronomical": "0.3304520101",
              "lunar": "128.5458319289",
              "kilometers": "49434916.848178487",
              "miles": "30717432.9431656406"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1916-08-05",
            "close_approach_date_full": "1916-Aug-05 18:54",
            "epoch_date_close_approach": -1685336760000,
            "relative_velocity": {
              "kilometers_per_second": "15.1884483101",
              "kilometers_per_hour": "54678.4139162801",
              "miles_per_hour": "33975.040024813"
            },
            "miss_distance": {
              "astronomical": "0.1544005765",
              "lunar": "60.0618242585",
              "kilometers": "23097997.371172055",
              "miles": "14352430.035422159"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1920-02-01",
            "close_approach_date_full": "1920-Feb-01 16:58",
            "epoch_date_close_approach": -1575183720000,
            "relative_velocity": {
              "kilometers_per_second": "23.0674244278",
              "kilometers_per_hour": "83042.7279400958",
              "miles_per_hour": "51599.5217025557"
            },
            "miss_distance": {
              "astronomical": "0.3615966747",
              "lunar": "140.6611064583",
              "kilometers": "54094092.334202889",
              "miles": "33612510.3436583082"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1924-08-07",
            "close_approach_date_full": "1924-Aug-07 09:59",
            "epoch_date_close_approach": -1432735260000,
            "relative_velocity": {
              "kilometers_per_second": "14.3509671388",
              "kilometers_per_hour": "51663.4816996742",
              "miles_per_hour": "32101.6783927781"
            },
            "miss_distance": {
              "astronomical": "0.138348511",
              "lunar": "53.817570779",
              "kilometers": "20696642.56327157",
              "miles": "12860297.348904866"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1928-02-03",
            "close_approach_date_full": "1928-Feb-03 02:53",
            "epoch_date_close_approach": -1322600820000,
            "relative_velocity": {
              "kilometers_per_second": "23.8390985501",
              "kilometers_per_hour": "85820.7547802538",
              "miles_per_hour": "53325.6795466527"
            },
            "miss_distance": {
              "astronomical": "0.3872089545",
              "lunar": "150.6242833005",
              "kilometers": "57925634.838126915",
              "miles": "35993320.455964827"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1932-08-08",
            "close_approach_date_full": "1932-Aug-08 15:40",
            "epoch_date_close_approach": -1180167600000,
            "relative_velocity": {
              "kilometers_per_second": "13.7183034582",
              "kilometers_per_hour": "49385.8924496953",
              "miles_per_hour": "30686.4730057565"
            },
            "miss_distance": {
              "astronomical": "0.1291295172",
              "lunar": "50.2313821908",
              "kilometers": "19317500.727248364",
              "miles": "12003338.3497168632"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1936-02-04",
            "close_approach_date_full": "1936-Feb-04 06:30",
            "epoch_date_close_approach": -1070040600000,
            "relative_velocity": {
              "kilometers_per_second": "24.4494828529",
              "kilometers_per_hour": "88018.1382705541",
              "miles_per_hour": "54691.0481937229"
            },
            "miss_distance": {
              "astronomical": "0.4075887213",
              "lunar": "158.5520125857",
              "kilometers": "60974404.542503631",
              "miles": "37887738.1049508678"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1940-08-09",
            "close_approach_date_full": "1940-Aug-09 13:03",
            "epoch_date_close_approach": -927629820000,
            "relative_velocity": {
              "kilometers_per_second": "13.2807584182",
              "kilometers_per_hour": "47810.730305677",
              "miles_per_hour": "29707.7285057691"
            },
            "miss_distance": {
              "astronomical": "0.1246548458",
              "lunar": "48.4907350162",
              "kilometers": "18648099.416858446",
              "miles": "11587391.6631447148"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1944-02-04",
            "close_approach_date_full": "1944-Feb-04 20:00",
            "epoch_date_close_approach": -817531200000,
            "relative_velocity": {
              "kilometers_per_second": "24.7591199737",
              "kilometers_per_hour": "89132.8319053499",
              "miles_per_hour": "55383.6754691881"
            },
            "miss_distance": {
              "astronomical": "0.4181969711",
              "lunar": "162.6786217579",
              "kilometers": "62561376.117011557",
              "miles": "38873836.5153592066"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1948-08-10",
            "close_approach_date_full": "1948-Aug-10 00:22",
            "epoch_date_close_approach": -675128280000,
            "relative_velocity": {
              "kilometers_per_second": "13.0971614566",
              "kilometers_per_hour": "47149.7812438111",
              "miles_per_hour": "29297.0404623003"
            },
            "miss_distance": {
              "astronomical": "0.1236474538",
              "lunar": "48.0988595282",
              "kilometers": "18497395.719403406",
              "miles": "11493748.7278267628"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1952-02-05",
            "close_approach_date_full": "1952-Feb-05 00:55",
            "epoch_date_close_approach": -565052700000,
            "relative_velocity": {
              "kilometers_per_second": "24.8263444627",
              "kilometers_per_hour": "89374.840065617",
              "miles_per_hour": "55534.0499285497"
            },
            "miss_distance": {
              "astronomical": "0.4201546266",
              "lunar": "163.4401497474",
              "kilometers": "62854237.210005342",
              "miles": "39055811.9602320396"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1956-08-09",
            "close_approach_date_full": "1956-Aug-09 20:36",
            "epoch_date_close_approach": -422681040000,
            "relative_velocity": {
              "kilometers_per_second": "13.1963075704",
              "kilometers_per_hour": "47506.7072536178",
              "miles_per_hour": "29518.8204043383"
            },
            "miss_distance": {
              "astronomical": "0.1243789003",
              "lunar": "48.3833922167",
              "kilometers": "18606818.557822361",
              "miles": "11561740.9267801418"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1960-02-04",
            "close_approach_date_full": "1960-Feb-04 21:41",
            "epoch_date_close_approach": -312603540000,
            "relative_velocity": {
              "kilometers_per_second": "24.6880428778",
              "kilometers_per_hour": "88876.9543600022",
              "miles_per_hour": "55224.6831133025"
            },
            "miss_distance": {
              "astronomical": "0.4156483047",
              "lunar": "161.6871905283",
              "kilometers": "62180101.052230989",
              "miles": "38636923.1759220882"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1964-08-09",
            "close_approach_date_full": "1964-Aug-09 09:15",
            "epoch_date_close_approach": -170261100000,
            "relative_velocity": {
              "kilometers_per_second": "13.4823407884",
              "kilometers_per_hour": "48536.4268384189",
              "miles_per_hour": "30158.6481096831"
            },
            "miss_distance": {
              "astronomical": "0.127080383",
              "lunar": "49.434268987",
              "kilometers": "19010954.61558421",
              "miles": "11812859.428553698"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1968-02-04",
            "close_approach_date_full": "1968-Feb-04 03:24",
            "epoch_date_close_approach": -60208560000,
            "relative_velocity": {
              "kilometers_per_second": "24.2141327237",
              "kilometers_per_hour": "87170.8778052386",
              "miles_per_hour": "54164.593489594"
            },
            "miss_distance": {
              "astronomical": "0.4000921547",
              "lunar": "155.6358481783",
              "kilometers": "59852934.146830489",
              "miles": "37190888.7144151882"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1972-08-08",
            "close_approach_date_full": "1972-Aug-08 07:30",
            "epoch_date_close_approach": 82107000000,
            "relative_velocity": {
              "kilometers_per_second": "14.1138691835",
              "kilometers_per_hour": "50809.929060695",
              "miles_per_hour": "31571.3139766302"
            },
            "miss_distance": {
              "astronomical": "0.1354996186",
              "lunar": "52.7093516354",
              "kilometers": "20270454.328372382",
              "miles": "12595476.2596555916"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1976-02-02",
            "close_approach_date_full": "1976-Feb-02 20:54",
            "epoch_date_close_approach": 192142440000,
            "relative_velocity": {
              "kilometers_per_second": "23.399648263",
              "kilometers_per_hour": "84238.733746624",
              "miles_per_hour": "52342.6731993953"
            },
            "miss_distance": {
              "astronomical": "0.3728582157",
              "lunar": "145.0418459073",
              "kilometers": "55778794.880720559",
              "miles": "34659335.9641153542"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1980-08-06",
            "close_approach_date_full": "1980-Aug-06 12:33",
            "epoch_date_close_approach": 334413180000,
            "relative_velocity": {
              "kilometers_per_second": "15.1155752474",
              "kilometers_per_hour": "54416.0708906803",
              "miles_per_hour": "33812.0302709341"
            },
            "miss_distance": {
              "astronomical": "0.1538744833",
              "lunar": "59.8571740037",
              "kilometers": "23019294.949030571",
              "miles": "14303526.6179850398"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1984-02-01",
            "close_approach_date_full": "1984-Feb-01 02:07",
            "epoch_date_close_approach": 444449220000,
            "relative_velocity": {
              "kilometers_per_second": "22.3001103767",
              "kilometers_per_hour": "80280.397356219",
              "miles_per_hour": "49883.1169017017"
            },
            "miss_distance": {
              "astronomical": "0.3365706705",
              "lunar": "130.9259908245",
              "kilometers": "50350255.411271835",
              "miles": "31286197.952287923"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1988-08-04",
            "close_approach_date_full": "1988-Aug-04 11:41",
            "epoch_date_close_approach": 586698060000,
            "relative_velocity": {
              "kilometers_per_second": "16.315935879",
              "kilometers_per_hour": "58737.3691642931",
              "miles_per_hour": "36497.1169676687"
            },
            "miss_distance": {
              "astronomical": "0.1825687346",
              "lunar": "71.0192377594",
              "kilometers": "27311893.824755302",
              "miles": "16970823.8751430876"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1992-01-29",
            "close_approach_date_full": "1992-Jan-29 17:15",
            "epoch_date_close_approach": 696705300000,
            "relative_velocity": {
              "kilometers_per_second": "20.9184180267",
              "kilometers_per_hour": "75306.3048961729",
              "miles_per_hour": "46792.4092839581"
            },
            "miss_distance": {
              "astronomical": "0.2908551805",
              "lunar": "113.1426652145",
              "kilometers": "43511315.481265535",
              "miles": "27036677.732652983"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1996-08-02",
            "close_approach_date_full": "1996-Aug-02 05:33",
            "epoch_date_close_approach": 838963980000,
            "relative_velocity": {
              "kilometers_per_second": "17.6771640036",
              "kilometers_per_hour": "63637.7904129341",
              "miles_per_hour": "39542.0481596367"
            },
            "miss_distance": {
              "astronomical": "0.2207543142",
              "lunar": "85.8734282238",
              "kilometers": "33024375.197630754",
              "miles": "20520395.2044382452"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2000-01-27",
            "close_approach_date_full": "2000-Jan-27 05:40",
            "epoch_date_close_approach": 948951600000,
            "relative_velocity": {
              "kilometers_per_second": "19.4763186125",
              "kilometers_per_hour": "70114.7470050968",
              "miles_per_hour": "43566.5771043614"
            },
            "miss_distance": {
              "astronomical": "0.242549473",
              "lunar": "94.351744997",
              "kilometers": "36284884.53042251",
              "miles": "22546381.757590238"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2004-07-30",
            "close_approach_date_full": "2004-Jul-30 20:31",
            "epoch_date_close_approach": 1091219460000,
            "relative_velocity": {
              "kilometers_per_second": "19.0951252477",
              "kilometers_per_hour": "68742.4508917189",
              "miles_per_hour": "42713.8856665795"
            },
            "miss_distance": {
              "astronomical": "0.2633742014",
              "lunar": "102.4525643446",
              "kilometers": "39400219.542391018",
              "miles": "24482161.1707433284"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2008-01-24",
            "close_approach_date_full": "2008-Jan-24 16:04",
            "epoch_date_close_approach": 1201190640000,
            "relative_velocity": {
              "kilometers_per_second": "18.0866233334",
              "kilometers_per_hour": "65111.8440001522",
              "miles_per_hour": "40457.9677344279"
            },
            "miss_distance": {
              "astronomical": "0.196341259",
              "lunar": "76.376749751",
              "kilometers": "29372234.13951833",
              "miles": "18251059.981399754"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2012-07-28",
            "close_approach_date_full": "2012-Jul-28 22:16",
            "epoch_date_close_approach": 1343513760000,
            "relative_velocity": {
              "kilometers_per_second": "20.3147406614",
              "kilometers_per_hour": "73133.0663810468",
              "miles_per_hour": "45442.0433854899"
            },
            "miss_distance": {
              "astronomical": "0.3017052371",
              "lunar": "117.3633372319",
              "kilometers": "45134460.838004977",
              "miles": "28045253.4890516026"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2016-01-22",
            "close_approach_date_full": "2016-Jan-22 07:07",
            "epoch_date_close_approach": 1453446420000,
            "relative_velocity": {
              "kilometers_per_second": "16.8898917652",
              "kilometers_per_hour": "60803.6103548399",
              "miles_per_hour": "37780.9988896504"
            },
            "miss_distance": {
              "astronomical": "0.156550026",
              "lunar": "60.897960114",
              "kilometers": "23419550.43804462",
              "miles": "14552233.846150956"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2020-07-27",
            "close_approach_date_full": "2020-Jul-27 13:22",
            "epoch_date_close_approach": 1595856120000,
            "relative_velocity": {
              "kilometers_per_second": "21.2227096747",
              "kilometers_per_hour": "76401.7548289801",
              "miles_per_hour": "47473.0792713738"
            },
            "miss_distance": {
              "astronomical": "0.3311603294",
              "lunar": "128.8213681366",
              "kilometers": "49540879.906738378",
              "miles": "30783275.3346024964"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2024-01-20",
            "close_approach_date_full": "2024-Jan-20 20:46",
            "epoch_date_close_approach": 1705783560000,
            "relative_velocity": {
              "kilometers_per_second": "16.1740893675",
              "kilometers_per_hour": "58226.7217228283",
              "miles_per_hour": "36179.820506054"
            },
            "miss_distance": {
              "astronomical": "0.133062962",
              "lunar": "51.761492218",
              "kilometers": "19905935.69109094",
              "miles": "12368974.881457372"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2028-07-26",
            "close_approach_date_full": "2028-Jul-26 22:59",
            "epoch_date_close_approach": 1848265140000,
            "relative_velocity": {
              "kilometers_per_second": "21.6298622183",
              "kilometers_per_hour": "77867.5039858465",
              "miles_per_hour": "48383.8387960945"
            },
            "miss_distance": {
              "astronomical": "0.3439255615",
              "lunar": "133.7870434235",
              "kilometers": "51450531.438954005",
              "miles": "31969877.773235069"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2032-01-20",
            "close_approach_date_full": "2032-Jan-20 14:44",
            "epoch_date_close_approach": 1958222640000,
            "relative_velocity": {
              "kilometers_per_second": "16.033918529",
              "kilometers_per_hour": "57722.1067043813",
              "miles_per_hour": "35866.2723575085"
            },
            "miss_distance": {
              "astronomical": "0.1288056445",
              "lunar": "50.1053957105",
              "kilometers": "19269050.061177215",
              "miles": "11973232.501846967"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2036-07-27",
            "close_approach_date_full": "2036-Jul-27 08:29",
            "epoch_date_close_approach": 2100760140000,
            "relative_velocity": {
              "kilometers_per_second": "21.4788135553",
              "kilometers_per_hour": "77323.7287989965",
              "miles_per_hour": "48045.9580417987"
            },
            "miss_distance": {
              "astronomical": "0.3391578722",
              "lunar": "131.9324122858",
              "kilometers": "50737295.274852214",
              "miles": "31526693.3715959932"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2040-01-21",
            "close_approach_date_full": "2040-Jan-21 07:02",
            "epoch_date_close_approach": 2210742120000,
            "relative_velocity": {
              "kilometers_per_second": "16.3307905903",
              "kilometers_per_hour": "58790.8461249454",
              "miles_per_hour": "36530.3454713584"
            },
            "miss_distance": {
              "astronomical": "0.1383546148",
              "lunar": "53.8199451572",
              "kilometers": "20697555.678750476",
              "miles": "12860864.7325535288"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2044-07-28",
            "close_approach_date_full": "2044-Jul-28 10:57",
            "epoch_date_close_approach": 2353316220000,
            "relative_velocity": {
              "kilometers_per_second": "20.8819715975",
              "kilometers_per_hour": "75175.0977509928",
              "miles_per_hour": "46710.8822664433"
            },
            "miss_distance": {
              "astronomical": "0.3203990891",
              "lunar": "124.6352456599",
              "kilometers": "47931021.279300217",
              "miles": "29782955.5689563146"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2048-01-23",
            "close_approach_date_full": "2048-Jan-23 02:54",
            "epoch_date_close_approach": 2463360840000,
            "relative_velocity": {
              "kilometers_per_second": "17.1581593608",
              "kilometers_per_hour": "61769.3736990488",
              "miles_per_hour": "38381.0866742784"
            },
            "miss_distance": {
              "astronomical": "0.1653526623",
              "lunar": "64.3221856347",
              "kilometers": "24736406.078909301",
              "miles": "15370489.9983423138"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2052-07-30",
            "close_approach_date_full": "2052-Jul-30 02:22",
            "epoch_date_close_approach": 2605918920000,
            "relative_velocity": {
              "kilometers_per_second": "19.9200568533",
              "kilometers_per_hour": "71712.2046717673",
              "miles_per_hour": "44559.1751750768"
            },
            "miss_distance": {
              "astronomical": "0.2897187614",
              "lunar": "112.7005981846",
              "kilometers": "43341309.604478218",
              "miles": "26931040.9792586884"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2056-01-25",
            "close_approach_date_full": "2056-Jan-25 10:22",
            "epoch_date_close_approach": 2716021320000,
            "relative_velocity": {
              "kilometers_per_second": "18.2992748109",
              "kilometers_per_hour": "65877.3893193343",
              "miles_per_hour": "40933.6478245608"
            },
            "miss_distance": {
              "astronomical": "0.203430279",
              "lunar": "79.134378531",
              "kilometers": "30432736.43190573",
              "miles": "18910025.549249874"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2060-08-01",
            "close_approach_date_full": "2060-Aug-01 05:47",
            "epoch_date_close_approach": 2858564820000,
            "relative_velocity": {
              "kilometers_per_second": "18.7172335391",
              "kilometers_per_hour": "67382.0407406772",
              "miles_per_hour": "41868.5797035613"
            },
            "miss_distance": {
              "astronomical": "0.2529583659",
              "lunar": "98.4008043351",
              "kilometers": "37842032.737320633",
              "miles": "23513948.7866774154"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2064-01-27",
            "close_approach_date_full": "2064-Jan-27 18:31",
            "epoch_date_close_approach": 2968684260000,
            "relative_velocity": {
              "kilometers_per_second": "19.5055283897",
              "kilometers_per_hour": "70219.9022030392",
              "miles_per_hour": "43631.916454994"
            },
            "miss_distance": {
              "astronomical": "0.2435468208",
              "lunar": "94.7397132912",
              "kilometers": "36434085.636951696",
              "miles": "22639091.0262015648"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2068-08-03",
            "close_approach_date_full": "2068-Aug-03 07:46",
            "epoch_date_close_approach": 3111205560000,
            "relative_velocity": {
              "kilometers_per_second": "17.5293369751",
              "kilometers_per_hour": "63105.6131104838",
              "miles_per_hour": "39211.3738796781"
            },
            "miss_distance": {
              "astronomical": "0.2183164999",
              "lunar": "84.9251184611",
              "kilometers": "32659683.370895213",
              "miles": "20293786.2113034194"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2072-01-30",
            "close_approach_date_full": "2072-Jan-30 03:28",
            "epoch_date_close_approach": 3221350080000,
            "relative_velocity": {
              "kilometers_per_second": "20.7376147842",
              "kilometers_per_hour": "74655.41322308",
              "miles_per_hour": "46387.9705107522"
            },
            "miss_distance": {
              "astronomical": "0.28471936",
              "lunar": "110.75583104",
              "kilometers": "42593409.8037632",
              "miles": "26466317.59260416"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2076-08-05",
            "close_approach_date_full": "2076-Aug-05 03:07",
            "epoch_date_close_approach": 3363822420000,
            "relative_velocity": {
              "kilometers_per_second": "16.5014807719",
              "kilometers_per_hour": "59405.3307788951",
              "miles_per_hour": "36912.1623386973"
            },
            "miss_distance": {
              "astronomical": "0.1898204014",
              "lunar": "73.8401361446",
              "kilometers": "28396727.731985018",
              "miles": "17644908.4073805284"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2080-01-31",
            "close_approach_date_full": "2080-Jan-31 20:47",
            "epoch_date_close_approach": 3473959620000,
            "relative_velocity": {
              "kilometers_per_second": "21.6721987641",
              "kilometers_per_hour": "78019.9155506722",
              "miles_per_hour": "48478.5414153607"
            },
            "miss_distance": {
              "astronomical": "0.3163575323",
              "lunar": "123.0630800647",
              "kilometers": "47326412.990536201",
              "miles": "29407269.3991175338"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2084-08-06",
            "close_approach_date_full": "2084-Aug-06 10:11",
            "epoch_date_close_approach": 3616395060000,
            "relative_velocity": {
              "kilometers_per_second": "15.8249117607",
              "kilometers_per_hour": "56969.6823384412",
              "miles_per_hour": "35398.7451174608"
            },
            "miss_distance": {
              "astronomical": "0.1731468238",
              "lunar": "67.3541144582",
              "kilometers": "25902396.037745306",
              "miles": "16095002.5626689828"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2088-02-01",
            "close_approach_date_full": "2088-Feb-01 18:09",
            "epoch_date_close_approach": 3726497340000,
            "relative_velocity": {
              "kilometers_per_second": "22.1284699415",
              "kilometers_per_hour": "79662.491789549",
              "miles_per_hour": "49499.174412234"
            },
            "miss_distance": {
              "astronomical": "0.3313955518",
              "lunar": "128.9128696502",
              "kilometers": "49576068.676754666",
              "miles": "30805140.6223837508"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2092-08-06",
            "close_approach_date_full": "2092-Aug-06 19:22",
            "epoch_date_close_approach": 3868888920000,
            "relative_velocity": {
              "kilometers_per_second": "15.6456852187",
              "kilometers_per_hour": "56324.466787325",
              "miles_per_hour": "34997.8332657132"
            },
            "miss_distance": {
              "astronomical": "0.1691694465",
              "lunar": "65.8069146885",
              "kilometers": "25307388.865478955",
              "miles": "15725282.249981379"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2096-02-01",
            "close_approach_date_full": "2096-Feb-01 21:28",
            "epoch_date_close_approach": 3978970080000,
            "relative_velocity": {
              "kilometers_per_second": "22.1411850294",
              "kilometers_per_hour": "79708.26610566",
              "miles_per_hour": "49527.616792153"
            },
            "miss_distance": {
              "astronomical": "0.3319954459",
              "lunar": "129.1462284551",
              "kilometers": "49665811.556340233",
              "miles": "30860904.2619638954"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2100-08-07",
            "close_approach_date_full": "2100-Aug-07 07:27",
            "epoch_date_close_approach": 4121306820000,
            "relative_velocity": {
              "kilometers_per_second": "15.9507866126",
              "kilometers_per_hour": "57422.83180541",
              "miles_per_hour": "35680.314573756"
            },
            "miss_distance": {
              "astronomical": "0.1762267717",
              "lunar": "68.5522141913",
              "kilometers": "26363149.683296279",
              "miles": "16381301.6021514902"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2104-02-02",
            "close_approach_date_full": "2104-Feb-02 00:46",
            "epoch_date_close_approach": 4231356360000,
            "relative_velocity": {
              "kilometers_per_second": "21.6187007446",
              "kilometers_per_hour": "77827.3226807069",
              "miles_per_hour": "48358.871695687"
            },
            "miss_distance": {
              "astronomical": "0.3148816868",
              "lunar": "122.4889761652",
              "kilometers": "47105629.647287116",
              "miles": "29270080.9911335608"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2108-08-06",
            "close_approach_date_full": "2108-Aug-06 00:25",
            "epoch_date_close_approach": 4373655900000,
            "relative_velocity": {
              "kilometers_per_second": "16.7700369346",
              "kilometers_per_hour": "60372.1329645884",
              "miles_per_hour": "37512.8956190244"
            },
            "miss_distance": {
              "astronomical": "0.1977211123",
              "lunar": "76.9135126847",
              "kilometers": "29578657.254110801",
              "miles": "18379325.3570630138"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2112-01-31",
            "close_approach_date_full": "2112-Jan-31 03:40",
            "epoch_date_close_approach": 4483654800000,
            "relative_velocity": {
              "kilometers_per_second": "20.510745109",
              "kilometers_per_hour": "73838.6823925055",
              "miles_per_hour": "45880.4857343876"
            },
            "miss_distance": {
              "astronomical": "0.2779047616",
              "lunar": "108.1049522624",
              "kilometers": "41573960.398217792",
              "miles": "25832861.1057658496"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2116-08-03",
            "close_approach_date_full": "2116-Aug-03 20:11",
            "epoch_date_close_approach": 4625928660000,
            "relative_velocity": {
              "kilometers_per_second": "18.0731042486",
              "kilometers_per_hour": "65063.1752950241",
              "miles_per_hour": "40427.7268937332"
            },
            "miss_distance": {
              "astronomical": "0.2345287782",
              "lunar": "91.2316947198",
              "kilometers": "35085005.672422434",
              "miles": "21800811.6077762292"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2120-01-28",
            "close_approach_date_full": "2120-Jan-28 15:03",
            "epoch_date_close_approach": 4735897380000,
            "relative_velocity": {
              "kilometers_per_second": "19.0674661702",
              "kilometers_per_hour": "68642.878212886",
              "miles_per_hour": "42652.0150762235"
            },
            "miss_distance": {
              "astronomical": "0.2304300992",
              "lunar": "89.6373085888",
              "kilometers": "34471852.024208704",
              "miles": "21419815.5977959552"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2124-08-01",
            "close_approach_date_full": "2124-Aug-01 07:55",
            "epoch_date_close_approach": 4878172500000,
            "relative_velocity": {
              "kilometers_per_second": "19.5967691574",
              "kilometers_per_hour": "70548.3689667178",
              "miles_per_hour": "43836.0129282364"
            },
            "miss_distance": {
              "astronomical": "0.2804655948",
              "lunar": "109.1011163772",
              "kilometers": "41957055.590363076",
              "miles": "26070905.4199034088"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2128-01-25",
            "close_approach_date_full": "2128-Jan-25 11:42",
            "epoch_date_close_approach": 4988086920000,
            "relative_velocity": {
              "kilometers_per_second": "17.4221245415",
              "kilometers_per_hour": "62719.648349247",
              "miles_per_hour": "38971.5503867863"
            },
            "miss_distance": {
              "astronomical": "0.1765118596",
              "lunar": "68.6631133844",
              "kilometers": "26405798.225899052",
              "miles": "16407802.1776768376"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2132-07-29",
            "close_approach_date_full": "2132-Jul-29 21:13",
            "epoch_date_close_approach": 5130421980000,
            "relative_velocity": {
              "kilometers_per_second": "21.1371429725",
              "kilometers_per_hour": "76093.7147009622",
              "miles_per_hour": "47281.6751151618"
            },
            "miss_distance": {
              "astronomical": "0.3297121654",
              "lunar": "128.2580323406",
              "kilometers": "49324237.656927698",
              "miles": "30648660.0827623124"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2136-01-22",
            "close_approach_date_full": "2136-Jan-22 07:01",
            "epoch_date_close_approach": 5240271660000,
            "relative_velocity": {
              "kilometers_per_second": "15.8643563811",
              "kilometers_per_hour": "57111.682972081",
              "miles_per_hour": "35486.9787889577"
            },
            "miss_distance": {
              "astronomical": "0.125839141",
              "lunar": "48.951425849",
              "kilometers": "18825267.45622967",
              "miles": "11697478.778002646"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2140-07-27",
            "close_approach_date_full": "2140-Jul-27 17:46",
            "epoch_date_close_approach": 5382697560000,
            "relative_velocity": {
              "kilometers_per_second": "22.4753569521",
              "kilometers_per_hour": "80911.2850275982",
              "miles_per_hour": "50275.1259661762"
            },
            "miss_distance": {
              "astronomical": "0.373189339",
              "lunar": "145.170652871",
              "kilometers": "55828330.22110793",
              "miles": "34690115.797352234"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2144-01-19",
            "close_approach_date_full": "2144-Jan-19 14:30",
            "epoch_date_close_approach": 5492500200000,
            "relative_velocity": {
              "kilometers_per_second": "14.6894974037",
              "kilometers_per_hour": "52882.1906532088",
              "miles_per_hour": "32858.9367422674"
            },
            "miss_distance": {
              "astronomical": "0.090306899",
              "lunar": "35.129383711",
              "kilometers": "13509719.73670513",
              "miles": "8394550.583905594"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2148-07-26",
            "close_approach_date_full": "2148-Jul-26 10:53",
            "epoch_date_close_approach": 5635047180000,
            "relative_velocity": {
              "kilometers_per_second": "23.3230146368",
              "kilometers_per_hour": "83962.8526925822",
              "miles_per_hour": "52171.2514411214"
            },
            "miss_distance": {
              "astronomical": "0.4006143206",
              "lunar": "155.8389707134",
              "kilometers": "59931049.053257122",
              "miles": "37239427.0665154036"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2152-01-18",
            "close_approach_date_full": "2152-Jan-18 00:59",
            "epoch_date_close_approach": 5744825940000,
            "relative_velocity": {
              "kilometers_per_second": "14.0743312774",
              "kilometers_per_hour": "50667.5925986461",
              "miles_per_hour": "31482.8716344199"
            },
            "miss_distance": {
              "astronomical": "0.0740212644",
              "lunar": "28.7942718516",
              "kilometers": "11073423.488946828",
              "miles": "6880706.2934411064"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2156-07-26",
            "close_approach_date_full": "2156-Jul-26 06:08",
            "epoch_date_close_approach": 5887490880000,
            "relative_velocity": {
              "kilometers_per_second": "23.544549844",
              "kilometers_per_hour": "84760.3794385627",
              "miles_per_hour": "52666.8035461447"
            },
            "miss_distance": {
              "astronomical": "0.4083940313",
              "lunar": "158.8652781757",
              "kilometers": "61094877.203193331",
              "miles": "37962596.3450807278"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2160-01-18",
            "close_approach_date_full": "2160-Jan-18 06:26",
            "epoch_date_close_approach": 5997306360000,
            "relative_velocity": {
              "kilometers_per_second": "14.132485236",
              "kilometers_per_hour": "50876.946849771",
              "miles_per_hour": "31612.9562245147"
            },
            "miss_distance": {
              "astronomical": "0.0754024947",
              "lunar": "29.3315704383",
              "kilometers": "11280052.599806289",
              "miles": "7009099.6692492282"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2164-07-27",
            "close_approach_date_full": "2164-Jul-27 03:03",
            "epoch_date_close_approach": 6140026980000,
            "relative_velocity": {
              "kilometers_per_second": "23.0667397911",
              "kilometers_per_hour": "83040.2632481396",
              "miles_per_hour": "51597.9902388232"
            },
            "miss_distance": {
              "astronomical": "0.3928261073",
              "lunar": "152.8093557397",
              "kilometers": "58765948.932471451",
              "miles": "36515467.4219139838"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2168-01-20",
            "close_approach_date_full": "2168-Jan-20 08:06",
            "epoch_date_close_approach": 6249945960000,
            "relative_velocity": {
              "kilometers_per_second": "14.9218182201",
              "kilometers_per_hour": "53718.5455923722",
              "miles_per_hour": "33378.6151765493"
            },
            "miss_distance": {
              "astronomical": "0.0973055307",
              "lunar": "37.8518514423",
              "kilometers": "14556700.131939609",
              "miles": "9045114.0344762442"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2170-10-20",
            "close_approach_date_full": "2170-Oct-20 11:44",
            "epoch_date_close_approach": 6336704640000,
            "relative_velocity": {
              "kilometers_per_second": "10.9332537191",
              "kilometers_per_hour": "39359.7133886156",
              "miles_per_hour": "24456.5952441651"
            },
            "miss_distance": {
              "astronomical": "0.0807396173",
              "lunar": "31.4077111297",
              "kilometers": "12078474.772695151",
              "miles": "7505216.2022530438"
            },
            "orbiting_body": "Mars"
          },
          {
            "close_approach_date": "2172-07-28",
            "close_approach_date_full": "2172-Jul-28 22:59",
            "epoch_date_close_approach": 6392645940000,
            "relative_velocity": {
              "kilometers_per_second": "22.0184285436",
              "kilometers_per_hour": "79266.3427568545",
              "miles_per_hour": "49253.0228091133"
            },
            "miss_distance": {
              "astronomical": "0.3587185654",
              "lunar": "139.5415219406",
              "kilometers": "53663533.313295698",
              "miles": "33344973.3739207124"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2176-01-23",
            "close_approach_date_full": "2176-Jan-23 02:22",
            "epoch_date_close_approach": 6502645320000,
            "relative_velocity": {
              "kilometers_per_second": "16.1001847024",
              "kilometers_per_hour": "57960.6649287167",
              "miles_per_hour": "36014.5031608462"
            },
            "miss_distance": {
              "astronomical": "0.1337140813",
              "lunar": "52.0147776257",
              "kilometers": "20003341.751486831",
              "miles": "12429500.2007910278"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2180-07-31",
            "close_approach_date_full": "2180-Jul-31 03:19",
            "epoch_date_close_approach": 6645295140000,
            "relative_velocity": {
              "kilometers_per_second": "20.7737791465",
              "kilometers_per_hour": "74785.6049272819",
              "miles_per_hour": "46468.8665727325"
            },
            "miss_distance": {
              "astronomical": "0.3194788366",
              "lunar": "124.2772674374",
              "kilometers": "47793353.465438042",
              "miles": "29697412.7560952996"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2184-01-26",
            "close_approach_date_full": "2184-Jan-26 00:00",
            "epoch_date_close_approach": 6755356800000,
            "relative_velocity": {
              "kilometers_per_second": "17.423726952",
              "kilometers_per_hour": "62725.417027123",
              "miles_per_hour": "38975.1348188809"
            },
            "miss_distance": {
              "astronomical": "0.1765813907",
              "lunar": "68.6901609823",
              "kilometers": "26416199.930357809",
              "miles": "16414265.4971194042"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2188-08-02",
            "close_approach_date_full": "2188-Aug-02 05:39",
            "epoch_date_close_approach": 6897937140000,
            "relative_velocity": {
              "kilometers_per_second": "19.5416488489",
              "kilometers_per_hour": "70349.935856135",
              "miles_per_hour": "43712.7143101635"
            },
            "miss_distance": {
              "astronomical": "0.2808826588",
              "lunar": "109.2633542732",
              "kilometers": "42019447.476416756",
              "miles": "26109673.9401769928"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2192-01-28",
            "close_approach_date_full": "2192-Jan-28 11:37",
            "epoch_date_close_approach": 7008032220000,
            "relative_velocity": {
              "kilometers_per_second": "18.6442624423",
              "kilometers_per_hour": "67119.3447923167",
              "miles_per_hour": "41705.3506572037"
            },
            "miss_distance": {
              "astronomical": "0.2173413873",
              "lunar": "84.5457996597",
              "kilometers": "32513808.602925051",
              "miles": "20203143.8336296638"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2193-08-02",
            "close_approach_date_full": "2193-Aug-02 00:06",
            "epoch_date_close_approach": 7055683560000,
            "relative_velocity": {
              "kilometers_per_second": "8.6831005983",
              "kilometers_per_hour": "31259.1621539383",
              "miles_per_hour": "19423.2277283735"
            },
            "miss_distance": {
              "astronomical": "0.1375276927",
              "lunar": "53.4982724603",
              "kilometers": "20573849.893934549",
              "miles": "12783997.5222488162"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2196-08-04",
            "close_approach_date_full": "2196-Aug-04 00:42",
            "epoch_date_close_approach": 7150552920000,
            "relative_velocity": {
              "kilometers_per_second": "18.5321345903",
              "kilometers_per_hour": "66715.6845249349",
              "miles_per_hour": "41454.5318649519"
            },
            "miss_distance": {
              "astronomical": "0.2503139019",
              "lunar": "97.3721078391",
              "kilometers": "37446426.555628953",
              "miles": "23268130.5041194314"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2200-01-30",
            "close_approach_date_full": "2200-Jan-30 03:34",
            "epoch_date_close_approach": 7260636840000,
            "relative_velocity": {
              "kilometers_per_second": "19.490517577",
              "kilometers_per_hour": "70165.8632771726",
              "miles_per_hour": "43598.3387679743"
            },
            "miss_distance": {
              "astronomical": "0.2456290787",
              "lunar": "95.5497116143",
              "kilometers": "36745586.983582369",
              "miles": "22832648.9875959322"
            },
            "orbiting_body": "Earth"
          }
        ],
        "orbital_data": {
          "orbit_id": "813",
          "orbit_determination_date": "2024-08-27 05:51:49",
          "first_observation_date": "1948-07-17",
          "last_observation_date": "2024-07-28",
          "data_arc_in_days": 27770,
          "observations_used": 5575,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".0504424",
          "jupiter_tisserand_invariant": "4.714",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".4360801269858126",
          "semi_major_axis": "1.367917594859341",
          "inclination": "9.381627488724899",
          "ascending_node_longitude": "274.2099731979073",
          "orbital_period": "584.3705626034316",
          "perihelion_distance": ".7713959163869525",
          "perihelion_argument": "127.2720216158619",
          "aphelion_distance": "1.96443927333173",
          "perihelion_time": "2460866.283532679082",
          "mean_anomaly": "196.2647301428124",
          "mean_motion": ".6160474586470656",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "APO",
            "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
            "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
          }
        },
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2001862?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2001862",
        "neo_reference_id": "2001862",
        "name": "1862 Apollo (1932 HA)",
        "name_limited": "Apollo",
        "designation": "1862",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2001862",
        "absolute_magnitude_h": 16.08,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 1.6164228334,
            "estimated_diameter_max": 3.6144313359
          },
          "meters": {
            "estimated_diameter_min": 1616.4228333988,
            "estimated_diameter_max": 3614.4313358626
          },
          "miles": {
            "estimated_diameter_min": 1.0043982724,
            "estimated_diameter_max": 2.2459028136
          },
          "feet": {
            "estimated_diameter_min": 5303.2246887282,
            "estimated_diameter_max": 11858.3709039515
          }
        },
        "is_potentially_hazardous_asteroid": true,
        "close_approach_data": [
          {
            "close_approach_date": "1905-10-06",
            "close_approach_date_full": "1905-Oct-06 20:28",
            "epoch_date_close_approach": -2027129520000,
            "relative_velocity": {
              "kilometers_per_second": "12.3118751776",
              "kilometers_per_hour": "44322.7506393308",
              "miles_per_hour": "27540.4335847553"
            },
            "miss_distance": {
              "astronomical": "0.2670364858",
              "lunar": "103.8771929762",
              "kilometers": "39948089.487965246",
              "miles": "24822591.7689465548"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1907-04-29",
            "close_approach_date_full": "1907-Apr-29 12:34",
            "epoch_date_close_approach": -1977909960000,
            "relative_velocity": {
              "kilometers_per_second": "24.2864015732",
              "kilometers_per_hour": "87431.0456634775",
              "miles_per_hour": "54326.2516790647"
            },
            "miss_distance": {
              "astronomical": "0.2394713065",
              "lunar": "93.1543382285",
              "kilometers": "35824397.378517155",
              "miles": "22260248.309580539"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1911-01-29",
            "close_approach_date_full": "1911-Jan-29 19:13",
            "epoch_date_close_approach": -1859431620000,
            "relative_velocity": {
              "kilometers_per_second": "11.6407199576",
              "kilometers_per_hour": "41906.5918472117",
              "miles_per_hour": "26039.1264730633"
            },
            "miss_distance": {
              "astronomical": "0.0657746441",
              "lunar": "25.5863365549",
              "kilometers": "9839746.657368067",
              "miles": "6114135.0566786446"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1914-08-20",
            "close_approach_date_full": "1914-Aug-20 00:36",
            "epoch_date_close_approach": -1747265040000,
            "relative_velocity": {
              "kilometers_per_second": "16.7859807237",
              "kilometers_per_hour": "60429.5306052318",
              "miles_per_hour": "37548.5602807897"
            },
            "miss_distance": {
              "astronomical": "0.3733807771",
              "lunar": "145.2451222919",
              "kilometers": "55856968.953104777",
              "miles": "34707911.0802368426"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1921-11-28",
            "close_approach_date_full": "1921-Nov-28 19:59",
            "epoch_date_close_approach": -1517630460000,
            "relative_velocity": {
              "kilometers_per_second": "28.1572209572",
              "kilometers_per_hour": "101365.9954457609",
              "miles_per_hour": "62984.8875590618"
            },
            "miss_distance": {
              "astronomical": "0.3615124069",
              "lunar": "140.6283262841",
              "kilometers": "54081486.050813303",
              "miles": "33604677.1623894614"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1923-07-05",
            "close_approach_date_full": "1923-Jul-05 12:06",
            "epoch_date_close_approach": -1467201240000,
            "relative_velocity": {
              "kilometers_per_second": "14.0368634791",
              "kilometers_per_hour": "50532.7085246923",
              "miles_per_hour": "31399.0599163567"
            },
            "miss_distance": {
              "astronomical": "0.3296989486",
              "lunar": "128.2528910054",
              "kilometers": "49322260.451799482",
              "miles": "30647431.5044655716"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1930-09-25",
            "close_approach_date_full": "1930-Sep-25 20:54",
            "epoch_date_close_approach": -1239159960000,
            "relative_velocity": {
              "kilometers_per_second": "11.6496413844",
              "kilometers_per_hour": "41938.7089840139",
              "miles_per_hour": "26059.0828128724"
            },
            "miss_distance": {
              "astronomical": "0.0862900956",
              "lunar": "33.5668471884",
              "kilometers": "12908814.503856372",
              "miles": "8021165.3863150536"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1930-11-11",
            "close_approach_date_full": "1930-Nov-11 22:54",
            "epoch_date_close_approach": -1235091960000,
            "relative_velocity": {
              "kilometers_per_second": "17.7832028403",
              "kilometers_per_hour": "64019.5302251866",
              "miles_per_hour": "39779.2464335333"
            },
            "miss_distance": {
              "astronomical": "0.0282674871",
              "lunar": "10.9960524819",
              "kilometers": "4228755.860412477",
              "miles": "2627627.0469751026"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1932-05-15",
            "close_approach_date_full": "1932-May-15 03:59",
            "epoch_date_close_approach": -1187553660000,
            "relative_velocity": {
              "kilometers_per_second": "15.2930589678",
              "kilometers_per_hour": "55055.012284166",
              "miles_per_hour": "34209.0436051253"
            },
            "miss_distance": {
              "astronomical": "0.0750035574",
              "lunar": "29.1763838286",
              "kilometers": "11220372.429462738",
              "miles": "6972016.1309842644"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1939-10-14",
            "close_approach_date_full": "1939-Oct-14 15:34",
            "epoch_date_close_approach": -953540760000,
            "relative_velocity": {
              "kilometers_per_second": "11.8104504305",
              "kilometers_per_hour": "42517.6215497928",
              "miles_per_hour": "26418.796567981"
            },
            "miss_distance": {
              "astronomical": "0.2424305742",
              "lunar": "94.3054933638",
              "kilometers": "36267097.523196954",
              "miles": "22535329.4238038052"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1941-05-01",
            "close_approach_date_full": "1941-May-01 09:44",
            "epoch_date_close_approach": -904745760000,
            "relative_velocity": {
              "kilometers_per_second": "23.0318466146",
              "kilometers_per_hour": "82914.6478125161",
              "miles_per_hour": "51519.9376921714"
            },
            "miss_distance": {
              "astronomical": "0.198457275",
              "lunar": "77.199879975",
              "kilometers": "29688785.62600425",
              "miles": "18447755.95418865"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1946-07-02",
            "close_approach_date_full": "1946-Jul-02 17:04",
            "epoch_date_close_approach": -741596160000,
            "relative_velocity": {
              "kilometers_per_second": "11.6479161701",
              "kilometers_per_hour": "41932.4982124388",
              "miles_per_hour": "26055.2236809457"
            },
            "miss_distance": {
              "astronomical": "0.0506596809",
              "lunar": "19.7066158701",
              "kilometers": "7578580.357519683",
              "miles": "4709111.4697623054"
            },
            "orbiting_body": "Mars"
          },
          {
            "close_approach_date": "1948-08-30",
            "close_approach_date_full": "1948-Aug-30 06:42",
            "epoch_date_close_approach": -673377480000,
            "relative_velocity": {
              "kilometers_per_second": "16.2706184608",
              "kilometers_per_hour": "58574.2264587659",
              "miles_per_hour": "36395.7464348926"
            },
            "miss_distance": {
              "astronomical": "0.361872865",
              "lunar": "140.768544485",
              "kilometers": "54135409.81479755",
              "miles": "33638183.83560419"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1950-04-18",
            "close_approach_date_full": "1950-Apr-18 20:49",
            "epoch_date_close_approach": -621832260000,
            "relative_velocity": {
              "kilometers_per_second": "31.141289304",
              "kilometers_per_hour": "112108.6414943201",
              "miles_per_hour": "69659.9500440679"
            },
            "miss_distance": {
              "astronomical": "0.4669160962",
              "lunar": "181.6303614218",
              "kilometers": "69849653.460235094",
              "miles": "43402562.0566445372"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1950-06-26",
            "close_approach_date_full": "1950-Jun-26 15:50",
            "epoch_date_close_approach": -615888600000,
            "relative_velocity": {
              "kilometers_per_second": "13.5220980192",
              "kilometers_per_hour": "48679.5528690386",
              "miles_per_hour": "30247.5810590979"
            },
            "miss_distance": {
              "astronomical": "0.009947019",
              "lunar": "3.869390391",
              "kilometers": "1488052.85524953",
              "miles": "924633.168442314"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1955-11-28",
            "close_approach_date_full": "1955-Nov-28 19:53",
            "epoch_date_close_approach": -444715620000,
            "relative_velocity": {
              "kilometers_per_second": "27.6586337453",
              "kilometers_per_hour": "99571.0814831117",
              "miles_per_hour": "61869.5978248813"
            },
            "miss_distance": {
              "astronomical": "0.345582897",
              "lunar": "134.431746933",
              "kilometers": "51698465.29962939",
              "miles": "32123936.730449982"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1957-06-26",
            "close_approach_date_full": "1957-Jun-26 18:32",
            "epoch_date_close_approach": -394954080000,
            "relative_velocity": {
              "kilometers_per_second": "12.9666967277",
              "kilometers_per_hour": "46680.1082198431",
              "miles_per_hour": "29005.2039102686"
            },
            "miss_distance": {
              "astronomical": "0.3082582354",
              "lunar": "119.9124535706",
              "kilometers": "46114775.425798598",
              "miles": "28654392.7277447324"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1964-10-26",
            "close_approach_date_full": "1964-Oct-26 03:51",
            "epoch_date_close_approach": -163541340000,
            "relative_velocity": {
              "kilometers_per_second": "12.1717364091",
              "kilometers_per_hour": "43818.2510727859",
              "miles_per_hour": "27226.9571735319"
            },
            "miss_distance": {
              "astronomical": "0.1854304162",
              "lunar": "72.1324319018",
              "kilometers": "27739995.296733494",
              "miles": "17236833.7947864572"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1966-05-02",
            "close_approach_date_full": "1966-May-02 02:58",
            "epoch_date_close_approach": -115765320000,
            "relative_velocity": {
              "kilometers_per_second": "22.6578598846",
              "kilometers_per_hour": "81568.2955846241",
              "miles_per_hour": "50683.3667759016"
            },
            "miss_distance": {
              "astronomical": "0.1863195766",
              "lunar": "72.4783152974",
              "kilometers": "27873011.798661842",
              "miles": "17319486.4164317396"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1968-04-15",
            "close_approach_date_full": "1968-Apr-15 18:27",
            "epoch_date_close_approach": -54019980000,
            "relative_velocity": {
              "kilometers_per_second": "11.6320530644",
              "kilometers_per_hour": "41875.391031858",
              "miles_per_hour": "26019.7394997675"
            },
            "miss_distance": {
              "astronomical": "0.0695227204",
              "lunar": "27.0443382356",
              "kilometers": "10400450.888445548",
              "miles": "6462540.5100946424"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1973-08-03",
            "close_approach_date_full": "1973-Aug-03 13:55",
            "epoch_date_close_approach": 113234100000,
            "relative_velocity": {
              "kilometers_per_second": "16.6762104289",
              "kilometers_per_hour": "60034.3575439234",
              "miles_per_hour": "37303.0151083339"
            },
            "miss_distance": {
              "astronomical": "0.3748364916",
              "lunar": "145.8113952324",
              "kilometers": "56074740.741632892",
              "miles": "34843228.1948902296"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1980-11-13",
            "close_approach_date_full": "1980-Nov-13 17:15",
            "epoch_date_close_approach": 342983700000,
            "relative_velocity": {
              "kilometers_per_second": "18.7763174576",
              "kilometers_per_hour": "67594.7428472311",
              "miles_per_hour": "42000.7445208254"
            },
            "miss_distance": {
              "astronomical": "0.0554813695",
              "lunar": "21.5822527355",
              "kilometers": "8299894.701882965",
              "miles": "5157315.419856317"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1982-05-14",
            "close_approach_date_full": "1982-May-14 17:13",
            "epoch_date_close_approach": 390244380000,
            "relative_velocity": {
              "kilometers_per_second": "15.8094104529",
              "kilometers_per_hour": "56913.8776304191",
              "miles_per_hour": "35364.070242079"
            },
            "miss_distance": {
              "astronomical": "0.0586981502",
              "lunar": "22.8335804278",
              "kilometers": "8781118.242860074",
              "miles": "5456333.8625500612"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1986-01-22",
            "close_approach_date_full": "1986-Jan-22 20:40",
            "epoch_date_close_approach": 506810400000,
            "relative_velocity": {
              "kilometers_per_second": "11.5653998558",
              "kilometers_per_hour": "41635.4394808494",
              "miles_per_hour": "25870.64293742"
            },
            "miss_distance": {
              "astronomical": "0.0852798562",
              "lunar": "33.1738640618",
              "kilometers": "12757684.841426294",
              "miles": "7927257.7686350972"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1989-09-10",
            "close_approach_date_full": "1989-Sep-10 14:31",
            "epoch_date_close_approach": 621441060000,
            "relative_velocity": {
              "kilometers_per_second": "15.3278950657",
              "kilometers_per_hour": "55180.4222366017",
              "miles_per_hour": "34286.9684725151"
            },
            "miss_distance": {
              "astronomical": "0.3422804817",
              "lunar": "133.1471073813",
              "kilometers": "51204431.004893979",
              "miles": "31816958.0544917502"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1991-04-21",
            "close_approach_date_full": "1991-Apr-21 00:26",
            "epoch_date_close_approach": 672193560000,
            "relative_velocity": {
              "kilometers_per_second": "29.9273379135",
              "kilometers_per_hour": "107738.4164885258",
              "miles_per_hour": "66944.4621786621"
            },
            "miss_distance": {
              "astronomical": "0.4278624595",
              "lunar": "166.4384967455",
              "kilometers": "64007312.594161265",
              "miles": "39772299.779964857"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1996-12-01",
            "close_approach_date_full": "1996-Dec-01 09:29",
            "epoch_date_close_approach": 849432540000,
            "relative_velocity": {
              "kilometers_per_second": "29.6490579416",
              "kilometers_per_hour": "106736.6085897715",
              "miles_per_hour": "66321.9777095722"
            },
            "miss_distance": {
              "astronomical": "0.4110714709",
              "lunar": "159.9068021801",
              "kilometers": "61495416.464406983",
              "miles": "38211479.9011150454"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1998-07-09",
            "close_approach_date_full": "1998-Jul-09 12:32",
            "epoch_date_close_approach": 899987520000,
            "relative_velocity": {
              "kilometers_per_second": "14.5083741217",
              "kilometers_per_hour": "52230.146838206",
              "miles_per_hour": "32453.7820728842"
            },
            "miss_distance": {
              "astronomical": "0.3388135923",
              "lunar": "131.7984874047",
              "kilometers": "50685791.735128401",
              "miles": "31494690.5560018938"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2003-12-02",
            "close_approach_date_full": "2003-Dec-02 16:05",
            "epoch_date_close_approach": 1070381100000,
            "relative_velocity": {
              "kilometers_per_second": "11.6549157531",
              "kilometers_per_hour": "41957.6967111089",
              "miles_per_hour": "26070.8810480776"
            },
            "miss_distance": {
              "astronomical": "0.0893893258",
              "lunar": "34.7724477362",
              "kilometers": "13372452.740416046",
              "miles": "8309256.8275355948"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2005-11-06",
            "close_approach_date_full": "2005-Nov-06 19:15",
            "epoch_date_close_approach": 1131304500000,
            "relative_velocity": {
              "kilometers_per_second": "15.2288441639",
              "kilometers_per_hour": "54823.8389900454",
              "miles_per_hour": "34065.4015102313"
            },
            "miss_distance": {
              "astronomical": "0.0752460297",
              "lunar": "29.2707055533",
              "kilometers": "11256645.769076739",
              "miles": "6994555.3390634382"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2007-05-08",
            "close_approach_date_full": "2007-May-08 15:18",
            "epoch_date_close_approach": 1178637480000,
            "relative_velocity": {
              "kilometers_per_second": "19.1791137772",
              "kilometers_per_hour": "69044.8095980482",
              "miles_per_hour": "42901.7596082983"
            },
            "miss_distance": {
              "astronomical": "0.0714216704",
              "lunar": "27.7830297856",
              "kilometers": "10684529.763682048",
              "miles": "6639058.9378983424"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2014-08-21",
            "close_approach_date_full": "2014-Aug-21 04:26",
            "epoch_date_close_approach": 1408595160000,
            "relative_velocity": {
              "kilometers_per_second": "16.7835839157",
              "kilometers_per_hour": "60420.9020964721",
              "miles_per_hour": "37543.1988609996"
            },
            "miss_distance": {
              "astronomical": "0.3731436407",
              "lunar": "145.1528762323",
              "kilometers": "55821493.852765309",
              "miles": "34685867.8750429042"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2021-09-18",
            "close_approach_date_full": "2021-Sep-18 13:57",
            "epoch_date_close_approach": 1631973420000,
            "relative_velocity": {
              "kilometers_per_second": "11.8749963119",
              "kilometers_per_hour": "42749.9867227",
              "miles_per_hour": "26563.1792500021"
            },
            "miss_distance": {
              "astronomical": "0.0697946543",
              "lunar": "27.1501205227",
              "kilometers": "10441131.620666341",
              "miles": "6487818.3449478658"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2021-11-22",
            "close_approach_date_full": "2021-Nov-22 08:44",
            "epoch_date_close_approach": 1637570640000,
            "relative_velocity": {
              "kilometers_per_second": "23.5545794393",
              "kilometers_per_hour": "84796.4859814289",
              "miles_per_hour": "52689.2387477384"
            },
            "miss_distance": {
              "astronomical": "0.2116190659",
              "lunar": "82.3198166351",
              "kilometers": "31657761.510029633",
              "miles": "19671220.8357016154"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2023-05-30",
            "close_approach_date_full": "2023-May-30 10:16",
            "epoch_date_close_approach": 1685441760000,
            "relative_velocity": {
              "kilometers_per_second": "11.4187987472",
              "kilometers_per_hour": "41107.6754898786",
              "miles_per_hour": "25542.710917586"
            },
            "miss_distance": {
              "astronomical": "0.2128176097",
              "lunar": "82.7860501733",
              "kilometers": "31837061.109611339",
              "miles": "19782632.4406569182"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2030-10-04",
            "close_approach_date_full": "2030-Oct-04 03:27",
            "epoch_date_close_approach": 1917314820000,
            "relative_velocity": {
              "kilometers_per_second": "12.7071090471",
              "kilometers_per_hour": "45745.592569574",
              "miles_per_hour": "28424.5322274667"
            },
            "miss_distance": {
              "astronomical": "0.2793585493",
              "lunar": "108.6704756777",
              "kilometers": "41791443.941569991",
              "miles": "25967999.1131722358"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2032-04-26",
            "close_approach_date_full": "2032-Apr-26 20:30",
            "epoch_date_close_approach": 1966624200000,
            "relative_velocity": {
              "kilometers_per_second": "25.9362974198",
              "kilometers_per_hour": "93370.6707113682",
              "miles_per_hour": "58016.9036984054"
            },
            "miss_distance": {
              "astronomical": "0.2958099347",
              "lunar": "115.0700645983",
              "kilometers": "44252536.155959089",
              "miles": "27497250.9028458682"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2037-11-15",
            "close_approach_date_full": "2037-Nov-15 23:52",
            "epoch_date_close_approach": 2141941920000,
            "relative_velocity": {
              "kilometers_per_second": "20.8671712485",
              "kilometers_per_hour": "75121.8164945057",
              "miles_per_hour": "46677.775365711"
            },
            "miss_distance": {
              "astronomical": "0.1431676288",
              "lunar": "55.6922076032",
              "kilometers": "21417572.321430656",
              "miles": "13308262.3282128128"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2039-07-17",
            "close_approach_date_full": "2039-Jul-17 03:57",
            "epoch_date_close_approach": 2194487820000,
            "relative_velocity": {
              "kilometers_per_second": "12.9032959092",
              "kilometers_per_hour": "46451.8652730926",
              "miles_per_hour": "28863.3826192725"
            },
            "miss_distance": {
              "astronomical": "0.0579803347",
              "lunar": "22.5543501983",
              "kilometers": "8673734.573007089",
              "miles": "5389608.7441882682"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2039-07-26",
            "close_approach_date_full": "2039-Jul-26 05:09",
            "epoch_date_close_approach": 2195269740000,
            "relative_velocity": {
              "kilometers_per_second": "16.1277931737",
              "kilometers_per_hour": "58060.055425293",
              "miles_per_hour": "36076.2605502328"
            },
            "miss_distance": {
              "astronomical": "0.366852007",
              "lunar": "142.705430723",
              "kilometers": "54880278.85242509",
              "miles": "34101023.993402642"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2046-11-13",
            "close_approach_date_full": "2046-Nov-13 04:49",
            "epoch_date_close_approach": 2425697340000,
            "relative_velocity": {
              "kilometers_per_second": "17.9824579509",
              "kilometers_per_hour": "64736.8486230978",
              "miles_per_hour": "40224.9601902799"
            },
            "miss_distance": {
              "astronomical": "0.0352917495",
              "lunar": "13.7284905555",
              "kilometers": "5279570.553773565",
              "miles": "3280573.019922597"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2048-05-13",
            "close_approach_date_full": "2048-May-13 23:58",
            "epoch_date_close_approach": 2473027080000,
            "relative_velocity": {
              "kilometers_per_second": "16.1497801773",
              "kilometers_per_hour": "58139.2086384258",
              "miles_per_hour": "36125.443278693"
            },
            "miss_distance": {
              "astronomical": "0.0497605008",
              "lunar": "19.3568348112",
              "kilometers": "7444064.929813296",
              "miles": "4625527.4588276448"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2049-12-13",
            "close_approach_date_full": "2049-Dec-13 00:24",
            "epoch_date_close_approach": 2522967840000,
            "relative_velocity": {
              "kilometers_per_second": "11.1822791443",
              "kilometers_per_hour": "40256.2049194181",
              "miles_per_hour": "25013.6402178462"
            },
            "miss_distance": {
              "astronomical": "0.0611389905",
              "lunar": "23.7830673045",
              "kilometers": "9146262.752750235",
              "miles": "5683224.139953843"
            },
            "orbiting_body": "Mars"
          },
          {
            "close_approach_date": "2055-09-18",
            "close_approach_date_full": "2055-Sep-18 02:39",
            "epoch_date_close_approach": 2704847940000,
            "relative_velocity": {
              "kilometers_per_second": "14.6272836348",
              "kilometers_per_hour": "52658.2210852778",
              "miles_per_hour": "32719.7707626828"
            },
            "miss_distance": {
              "astronomical": "0.3270693322",
              "lunar": "127.2299702258",
              "kilometers": "48928875.439442414",
              "miles": "30402993.3925327532"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2057-04-23",
            "close_approach_date_full": "2057-Apr-23 18:50",
            "epoch_date_close_approach": 2755277400000,
            "relative_velocity": {
              "kilometers_per_second": "28.2355236975",
              "kilometers_per_hour": "101647.8853111696",
              "miles_per_hour": "63160.0429590431"
            },
            "miss_distance": {
              "astronomical": "0.3719412052",
              "lunar": "144.6851288228",
              "kilometers": "55641612.063152924",
              "miles": "34574094.5139773912"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2057-06-06",
            "close_approach_date_full": "2057-Jun-06 09:28",
            "epoch_date_close_approach": 2759045280000,
            "relative_velocity": {
              "kilometers_per_second": "11.6017781285",
              "kilometers_per_hour": "41766.4012625042",
              "miles_per_hour": "25952.0174955821"
            },
            "miss_distance": {
              "astronomical": "0.0868039423",
              "lunar": "33.7667335547",
              "kilometers": "12985684.875682901",
              "miles": "8068930.4204739938"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2064-07-25",
            "close_approach_date_full": "2064-Jul-25 22:57",
            "epoch_date_close_approach": 2984252220000,
            "relative_velocity": {
              "kilometers_per_second": "16.1403340355",
              "kilometers_per_hour": "58105.2025279368",
              "miles_per_hour": "36104.313204095"
            },
            "miss_distance": {
              "astronomical": "0.3663630879",
              "lunar": "142.5152411931",
              "kilometers": "54807137.596462773",
              "miles": "34055576.1243933474"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2071-11-17",
            "close_approach_date_full": "2071-Nov-17 19:34",
            "epoch_date_close_approach": 3215014440000,
            "relative_velocity": {
              "kilometers_per_second": "20.3379233847",
              "kilometers_per_hour": "73216.5241848588",
              "miles_per_hour": "45493.9008191974"
            },
            "miss_distance": {
              "astronomical": "0.1066155268",
              "lunar": "41.4734399252",
              "kilometers": "15949455.718207916",
              "miles": "9910532.2258086008"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2073-05-20",
            "close_approach_date_full": "2073-May-20 12:48",
            "epoch_date_close_approach": 3262510080000,
            "relative_velocity": {
              "kilometers_per_second": "13.5791249377",
              "kilometers_per_hour": "48884.8497755774",
              "miles_per_hour": "30375.1445730525"
            },
            "miss_distance": {
              "astronomical": "0.1319297392",
              "lunar": "51.3206685488",
              "kilometers": "19736407.973975504",
              "miles": "12263635.2427057952"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2075-05-17",
            "close_approach_date_full": "2075-May-17 22:47",
            "epoch_date_close_approach": 3325358820000,
            "relative_velocity": {
              "kilometers_per_second": "14.3167451968",
              "kilometers_per_hour": "51540.2827085063",
              "miles_per_hour": "32025.1273307382"
            },
            "miss_distance": {
              "astronomical": "0.0083048366",
              "lunar": "3.2305814374",
              "kilometers": "1242385.866058042",
              "miles": "771982.7798512996"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2077-01-20",
            "close_approach_date_full": "2077-Jan-20 22:01",
            "epoch_date_close_approach": 3378405660000,
            "relative_velocity": {
              "kilometers_per_second": "14.4808956824",
              "kilometers_per_hour": "52131.2244565241",
              "miles_per_hour": "32392.3155518885"
            },
            "miss_distance": {
              "astronomical": "0.0586217012",
              "lunar": "22.8038417668",
              "kilometers": "8769681.635296444",
              "miles": "5449227.4841371672"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2080-11-05",
            "close_approach_date_full": "2080-Nov-05 09:15",
            "epoch_date_close_approach": 3498023700000,
            "relative_velocity": {
              "kilometers_per_second": "14.5720439427",
              "kilometers_per_hour": "52459.3581935411",
              "miles_per_hour": "32596.2050953145"
            },
            "miss_distance": {
              "astronomical": "0.0979261013",
              "lunar": "38.0932534057",
              "kilometers": "14649536.171884231",
              "miles": "9102799.6747791478"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2082-05-12",
            "close_approach_date_full": "2082-May-12 11:03",
            "epoch_date_close_approach": 3545809380000,
            "relative_velocity": {
              "kilometers_per_second": "17.5069802792",
              "kilometers_per_hour": "63025.1290050322",
              "miles_per_hour": "39161.3641864879"
            },
            "miss_distance": {
              "astronomical": "0.0333074687",
              "lunar": "12.9566053243",
              "kilometers": "4982726.372611669",
              "miles": "3096122.5988282722"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2087-07-23",
            "close_approach_date_full": "2087-Jul-23 17:24",
            "epoch_date_close_approach": 3709819440000,
            "relative_velocity": {
              "kilometers_per_second": "12.734649917",
              "kilometers_per_hour": "45844.7397011266",
              "miles_per_hour": "28486.1383992917"
            },
            "miss_distance": {
              "astronomical": "0.0777183462",
              "lunar": "30.2324366718",
              "kilometers": "11626499.051442594",
              "miles": "7224371.5120080372"
            },
            "orbiting_body": "Mars"
          },
          {
            "close_approach_date": "2089-10-22",
            "close_approach_date_full": "2089-Oct-22 19:12",
            "epoch_date_close_approach": 3780846720000,
            "relative_velocity": {
              "kilometers_per_second": "11.8522453889",
              "kilometers_per_hour": "42668.0834000105",
              "miles_per_hour": "26512.2877104121"
            },
            "miss_distance": {
              "astronomical": "0.2094447685",
              "lunar": "81.4740149465",
              "kilometers": "31332491.250243095",
              "miles": "19469107.268400911"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2091-05-06",
            "close_approach_date_full": "2091-May-06 06:37",
            "epoch_date_close_approach": 3829271820000,
            "relative_velocity": {
              "kilometers_per_second": "21.1515000361",
              "kilometers_per_hour": "76145.4001300234",
              "miles_per_hour": "47313.7904307915"
            },
            "miss_distance": {
              "astronomical": "0.1355424634",
              "lunar": "52.7260182626",
              "kilometers": "20276863.819192958",
              "miles": "12599458.9325725004"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2098-08-30",
            "close_approach_date_full": "2098-Aug-30 09:53",
            "epoch_date_close_approach": 4060230780000,
            "relative_velocity": {
              "kilometers_per_second": "11.694182388",
              "kilometers_per_hour": "42099.0565967006",
              "miles_per_hour": "26158.7165836555"
            },
            "miss_distance": {
              "astronomical": "0.0887057227",
              "lunar": "34.5065261303",
              "kilometers": "13270187.172730649",
              "miles": "8245711.9503909962"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2098-09-25",
            "close_approach_date_full": "2098-Sep-25 10:25",
            "epoch_date_close_approach": 4062479100000,
            "relative_velocity": {
              "kilometers_per_second": "13.8287477148",
              "kilometers_per_hour": "49783.4917733664",
              "miles_per_hour": "30933.5257632898"
            },
            "miss_distance": {
              "astronomical": "0.3079602484",
              "lunar": "119.7965366276",
              "kilometers": "46070197.205310908",
              "miles": "28626693.1059822104"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2100-04-29",
            "close_approach_date_full": "2100-Apr-29 16:01",
            "epoch_date_close_approach": 4112697660000,
            "relative_velocity": {
              "kilometers_per_second": "25.4138818818",
              "kilometers_per_hour": "91489.9747744134",
              "miles_per_hour": "56848.312381357"
            },
            "miss_distance": {
              "astronomical": "0.2778655569",
              "lunar": "108.0897016341",
              "kilometers": "41568095.458603803",
              "miles": "25829216.8012783614"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2107-09-04",
            "close_approach_date_full": "2107-Sep-04 08:58",
            "epoch_date_close_approach": 4344569880000,
            "relative_velocity": {
              "kilometers_per_second": "16.1517085153",
              "kilometers_per_hour": "58146.1506551232",
              "miles_per_hour": "36129.7567779014"
            },
            "miss_distance": {
              "astronomical": "0.3578631197",
              "lunar": "139.2087535633",
              "kilometers": "53535560.458675039",
              "miles": "33265454.7293879782"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2109-04-22",
            "close_approach_date_full": "2109-Apr-22 14:59",
            "epoch_date_close_approach": 4396085940000,
            "relative_velocity": {
              "kilometers_per_second": "30.0485968591",
              "kilometers_per_hour": "108174.9486926678",
              "miles_per_hour": "67215.7063140635"
            },
            "miss_distance": {
              "astronomical": "0.4307658045",
              "lunar": "167.5678979505",
              "kilometers": "64441646.822036415",
              "miles": "40042182.554535927"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2116-08-14",
            "close_approach_date_full": "2116-Aug-14 14:45",
            "epoch_date_close_approach": 4626859500000,
            "relative_velocity": {
              "kilometers_per_second": "16.8982604331",
              "kilometers_per_hour": "60833.7375591798",
              "miles_per_hour": "37799.7187628137"
            },
            "miss_distance": {
              "astronomical": "0.3755842367",
              "lunar": "146.1022680763",
              "kilometers": "56186601.815895829",
              "miles": "34912735.4433432802"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2120-03-24",
            "close_approach_date_full": "2120-Mar-24 04:09",
            "epoch_date_close_approach": 4740696540000,
            "relative_velocity": {
              "kilometers_per_second": "11.6439582509",
              "kilometers_per_hour": "41918.2497031298",
              "miles_per_hour": "26046.3702113698"
            },
            "miss_distance": {
              "astronomical": "0.0810313495",
              "lunar": "31.5211949555",
              "kilometers": "12122117.288425565",
              "miles": "7532334.404040197"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2123-12-05",
            "close_approach_date_full": "2123-Dec-05 19:53",
            "epoch_date_close_approach": 4857479580000,
            "relative_velocity": {
              "kilometers_per_second": "30.7110188729",
              "kilometers_per_hour": "110559.6679425919",
              "miles_per_hour": "68697.4781168844"
            },
            "miss_distance": {
              "astronomical": "0.4450484985",
              "lunar": "173.1238659165",
              "kilometers": "66578307.422298195",
              "miles": "41369841.887157291"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2125-07-24",
            "close_approach_date_full": "2125-Jul-24 15:07",
            "epoch_date_close_approach": 4909043220000,
            "relative_velocity": {
              "kilometers_per_second": "15.8757764379",
              "kilometers_per_hour": "57152.7951765329",
              "miles_per_hour": "35512.5243139962"
            },
            "miss_distance": {
              "astronomical": "0.3620181406",
              "lunar": "140.8250566934",
              "kilometers": "54157142.735120522",
              "miles": "33651688.0460943236"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2132-11-26",
            "close_approach_date_full": "2132-Nov-26 22:45",
            "epoch_date_close_approach": 5140795500000,
            "relative_velocity": {
              "kilometers_per_second": "25.4277216326",
              "kilometers_per_hour": "91539.7978774504",
              "miles_per_hour": "56879.2705200191"
            },
            "miss_distance": {
              "astronomical": "0.2730122071",
              "lunar": "106.2017485619",
              "kilometers": "40842044.666158877",
              "miles": "25378069.7588194226"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2134-06-29",
            "close_approach_date_full": "2134-Jun-29 12:52",
            "epoch_date_close_approach": 5190871920000,
            "relative_velocity": {
              "kilometers_per_second": "12.9803356276",
              "kilometers_per_hour": "46729.2082592243",
              "miles_per_hour": "29035.7127652941"
            },
            "miss_distance": {
              "astronomical": "0.3079978164",
              "lunar": "119.8111505796",
              "kilometers": "46075817.298091068",
              "miles": "28630185.2697020184"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2141-10-10",
            "close_approach_date_full": "2141-Oct-10 22:39",
            "epoch_date_close_approach": 5420731140000,
            "relative_velocity": {
              "kilometers_per_second": "11.6504670322",
              "kilometers_per_hour": "41941.6813159736",
              "miles_per_hour": "26060.9297043615"
            },
            "miss_distance": {
              "astronomical": "0.0693938485",
              "lunar": "26.9942070665",
              "kilometers": "10381171.926702695",
              "miles": "6450561.118759391"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2141-11-19",
            "close_approach_date_full": "2141-Nov-19 08:49",
            "epoch_date_close_approach": 5424137340000,
            "relative_velocity": {
              "kilometers_per_second": "20.5862541026",
              "kilometers_per_hour": "74110.5147691926",
              "miles_per_hour": "46049.3918020019"
            },
            "miss_distance": {
              "astronomical": "0.1143831119",
              "lunar": "44.4950305291",
              "kilometers": "17111469.904211653",
              "miles": "10632574.3594526914"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2143-05-28",
            "close_approach_date_full": "2143-May-28 07:07",
            "epoch_date_close_approach": 5472083220000,
            "relative_velocity": {
              "kilometers_per_second": "12.1054164766",
              "kilometers_per_hour": "43579.4993158234",
              "miles_per_hour": "27078.6061165459"
            },
            "miss_distance": {
              "astronomical": "0.1847178503",
              "lunar": "71.8552437667",
              "kilometers": "27633396.955858861",
              "miles": "17170596.6572238418"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2150-11-10",
            "close_approach_date_full": "2150-Nov-10 14:06",
            "epoch_date_close_approach": 5707375560000,
            "relative_velocity": {
              "kilometers_per_second": "15.8510078082",
              "kilometers_per_hour": "57063.6281093767",
              "miles_per_hour": "35457.1193660736"
            },
            "miss_distance": {
              "astronomical": "0.0577743517",
              "lunar": "22.4742228113",
              "kilometers": "8642919.954950879",
              "miles": "5370461.4284009702"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2152-05-14",
            "close_approach_date_full": "2152-May-14 23:28",
            "epoch_date_close_approach": 5755015680000,
            "relative_velocity": {
              "kilometers_per_second": "16.6822295137",
              "kilometers_per_hour": "60056.0262492199",
              "miles_per_hour": "37316.4791991333"
            },
            "miss_distance": {
              "astronomical": "0.0403545029",
              "lunar": "15.6979016281",
              "kilometers": "6036947.678748823",
              "miles": "3751185.3427988374"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2159-10-23",
            "close_approach_date_full": "2159-Oct-23 18:05",
            "epoch_date_close_approach": 5989831500000,
            "relative_velocity": {
              "kilometers_per_second": "11.8359036245",
              "kilometers_per_hour": "42609.2530480517",
              "miles_per_hour": "26475.7328175519"
            },
            "miss_distance": {
              "astronomical": "0.2145634085",
              "lunar": "83.4651659065",
              "kilometers": "32098228.891539895",
              "miles": "19944914.575224751"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2161-05-06",
            "close_approach_date_full": "2161-May-06 13:45",
            "epoch_date_close_approach": 6038286300000,
            "relative_velocity": {
              "kilometers_per_second": "21.5529069103",
              "kilometers_per_hour": "77590.4648770217",
              "miles_per_hour": "48211.6974676138"
            },
            "miss_distance": {
              "astronomical": "0.1500984687",
              "lunar": "58.3883043243",
              "kilometers": "22454411.207781669",
              "miles": "13952524.1373742722"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2163-04-29",
            "close_approach_date_full": "2163-Apr-29 13:21",
            "epoch_date_close_approach": 6100752060000,
            "relative_velocity": {
              "kilometers_per_second": "11.9629526737",
              "kilometers_per_hour": "43066.6296253175",
              "miles_per_hour": "26759.928835798"
            },
            "miss_distance": {
              "astronomical": "0.0509217334",
              "lunar": "19.8085542926",
              "kilometers": "7617782.853347858",
              "miles": "4733470.7711141204"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2165-01-04",
            "close_approach_date_full": "2165-Jan-04 04:12",
            "epoch_date_close_approach": 6153941520000,
            "relative_velocity": {
              "kilometers_per_second": "19.7074212168",
              "kilometers_per_hour": "70946.716380413",
              "miles_per_hour": "44083.5305198183"
            },
            "miss_distance": {
              "astronomical": "0.1351993467",
              "lunar": "52.5925458663",
              "kilometers": "20225534.291711529",
              "miles": "12567564.2431719402"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2168-09-15",
            "close_approach_date_full": "2168-Sep-15 10:06",
            "epoch_date_close_approach": 6270602760000,
            "relative_velocity": {
              "kilometers_per_second": "15.1283259024",
              "kilometers_per_hour": "54461.973248735",
              "miles_per_hour": "33840.5522111376"
            },
            "miss_distance": {
              "astronomical": "0.3363260192",
              "lunar": "130.8308214688",
              "kilometers": "50313656.097899104",
              "miles": "31263456.1935074752"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2170-04-26",
            "close_approach_date_full": "2170-Apr-26 13:16",
            "epoch_date_close_approach": 6321417360000,
            "relative_velocity": {
              "kilometers_per_second": "27.9464865012",
              "kilometers_per_hour": "100607.3514042077",
              "miles_per_hour": "62513.4956544645"
            },
            "miss_distance": {
              "astronomical": "0.3626615779",
              "lunar": "141.0753538031",
              "kilometers": "54253399.584679073",
              "miles": "33711499.2789262874"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2177-08-16",
            "close_approach_date_full": "2177-Aug-16 00:16",
            "epoch_date_close_approach": 6551972160000,
            "relative_velocity": {
              "kilometers_per_second": "16.8986178595",
              "kilometers_per_hour": "60835.0242942097",
              "miles_per_hour": "37800.5182899216"
            },
            "miss_distance": {
              "astronomical": "0.3752223481",
              "lunar": "145.9614934109",
              "kilometers": "56132464.052158547",
              "miles": "34879095.7968480686"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2184-10-06",
            "close_approach_date_full": "2184-Oct-06 20:11",
            "epoch_date_close_approach": 6777375060000,
            "relative_velocity": {
              "kilometers_per_second": "11.5985829768",
              "kilometers_per_hour": "41754.8987165812",
              "miles_per_hour": "25944.8702608668"
            },
            "miss_distance": {
              "astronomical": "0.0810126904",
              "lunar": "31.5139365656",
              "kilometers": "12119325.926809448",
              "miles": "7530599.9323604624"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2184-12-02",
            "close_approach_date_full": "2184-Dec-02 23:22",
            "epoch_date_close_approach": 6782311320000,
            "relative_velocity": {
              "kilometers_per_second": "29.0830083692",
              "kilometers_per_hour": "104698.830129057",
              "miles_per_hour": "65055.7814210243"
            },
            "miss_distance": {
              "astronomical": "0.3923381564",
              "lunar": "152.6195428396",
              "kilometers": "58692952.517166868",
              "miles": "36470109.5527160584"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2186-07-16",
            "close_approach_date_full": "2186-Jul-16 20:10",
            "epoch_date_close_approach": 6833362200000,
            "relative_velocity": {
              "kilometers_per_second": "15.0372889841",
              "kilometers_per_hour": "54134.2403429303",
              "miles_per_hour": "33636.9117286391"
            },
            "miss_distance": {
              "astronomical": "0.3484757609",
              "lunar": "135.5570709901",
              "kilometers": "52131231.577269283",
              "miles": "32392845.2259227854"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2193-11-22",
            "close_approach_date_full": "2193-Nov-22 21:28",
            "epoch_date_close_approach": 7065437280000,
            "relative_velocity": {
              "kilometers_per_second": "22.4484739214",
              "kilometers_per_hour": "80814.5061168928",
              "miles_per_hour": "50214.9913146882"
            },
            "miss_distance": {
              "astronomical": "0.1750083905",
              "lunar": "68.0782639045",
              "kilometers": "26180882.450928235",
              "miles": "16268045.995690243"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2195-06-06",
            "close_approach_date_full": "2195-Jun-06 08:26",
            "epoch_date_close_approach": 7113860760000,
            "relative_velocity": {
              "kilometers_per_second": "11.1465011964",
              "kilometers_per_hour": "40127.4043070015",
              "miles_per_hour": "24933.6085262032"
            },
            "miss_distance": {
              "astronomical": "0.2335162707",
              "lunar": "90.8378293023",
              "kilometers": "34933536.707063409",
              "miles": "21706693.1570326842"
            },
            "orbiting_body": "Earth"
          }
        ],
        "orbital_data": {
          "orbit_id": "534",
          "orbit_determination_date": "2024-02-25 04:47:48",
          "first_observation_date": "1930-12-13",
          "last_observation_date": "2024-02-24",
          "data_arc_in_days": 34041,
          "observations_used": 3461,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".0259785",
          "jupiter_tisserand_invariant": "4.414",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".5598715965109902",
          "semi_major_axis": "1.470612082034263",
          "inclination": "6.352454347151728",
          "ascending_node_longitude": "35.55648326281653",
          "orbital_period": "651.3968009151621",
          "perihelion_distance": ".6472581478173889",
          "perihelion_argument": "286.0329799312636",
          "aphelion_distance": "2.293966016251137",
          "perihelion_time": "2460794.347197457866",
          "mean_anomaly": "252.868692344222",
          "mean_motion": ".5526585323941228",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "APO",
            "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
            "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
          }
        },
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2001863?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2001863",
        "neo_reference_id": "2001863",
        "name": "1863 Antinous (1948 EA)",
        "name_limited": "Antinous",
        "designation": "1863",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2001863",
        "absolute_magnitude_h": 15.45,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 2.160503512,
            "estimated_diameter_max": 4.8310327184
          },
          "meters": {
            "estimated_diameter_min": 2160.5035119642,
            "estimated_diameter_max": 4831.0327183789
          },
          "miles": {
            "estimated_diameter_min": 1.3424742277,
            "estimated_diameter_max": 3.0018636313
          },
          "feet": {
            "estimated_diameter_min": 7088.2663421925,
            "estimated_diameter_max": 15849.8453837663
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "1907-10-11",
            "close_approach_date_full": "1907-Oct-11 06:15",
            "epoch_date_close_approach": -1963676700000,
            "relative_velocity": {
              "kilometers_per_second": "18.0795139571",
              "kilometers_per_hour": "65086.2502455823",
              "miles_per_hour": "40442.0647706509"
            },
            "miss_distance": {
              "astronomical": "0.0894311",
              "lunar": "34.7886979",
              "kilometers": "13378702.071757",
              "miles": "8313139.9819666"
            },
            "orbiting_body": "Mars"
          },
          {
            "close_approach_date": "1914-03-29",
            "close_approach_date_full": "1914-Mar-29 02:55",
            "epoch_date_close_approach": -1759698300000,
            "relative_velocity": {
              "kilometers_per_second": "19.821148348",
              "kilometers_per_hour": "71356.1340526686",
              "miles_per_hour": "44337.9267395596"
            },
            "miss_distance": {
              "astronomical": "0.2168025643",
              "lunar": "84.3361975127",
              "kilometers": "32433201.829818041",
              "miles": "20153057.1073733258"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1931-04-06",
            "close_approach_date_full": "1931-Apr-06 05:10",
            "epoch_date_close_approach": -1222541400000,
            "relative_velocity": {
              "kilometers_per_second": "15.6406877321",
              "kilometers_per_hour": "56306.4758356079",
              "miles_per_hour": "34986.6543879642"
            },
            "miss_distance": {
              "astronomical": "0.1742218489",
              "lunar": "67.7722992221",
              "kilometers": "26063217.502901843",
              "miles": "16194932.3873097134"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1948-04-05",
            "close_approach_date_full": "1948-Apr-05 23:14",
            "epoch_date_close_approach": -686018760000,
            "relative_velocity": {
              "kilometers_per_second": "15.3983410199",
              "kilometers_per_hour": "55434.0276717433",
              "miles_per_hour": "34444.5490274785"
            },
            "miss_distance": {
              "astronomical": "0.1768682664",
              "lunar": "68.8017556296",
              "kilometers": "26459115.924032568",
              "miles": "16440932.2590347184"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1965-02-02",
            "close_approach_date_full": "1965-Feb-02 06:30",
            "epoch_date_close_approach": -154978200000,
            "relative_velocity": {
              "kilometers_per_second": "16.2935283339",
              "kilometers_per_hour": "58656.7020018902",
              "miles_per_hour": "36446.9935300079"
            },
            "miss_distance": {
              "astronomical": "0.0984644052",
              "lunar": "38.3026536228",
              "kilometers": "14730065.288736924",
              "miles": "9152838.1476765912"
            },
            "orbiting_body": "Mars"
          },
          {
            "close_approach_date": "1965-04-06",
            "close_approach_date_full": "1965-Apr-06 03:08",
            "epoch_date_close_approach": -149547120000,
            "relative_velocity": {
              "kilometers_per_second": "15.3032329746",
              "kilometers_per_hour": "55091.6387084531",
              "miles_per_hour": "34231.8018408163"
            },
            "miss_distance": {
              "astronomical": "0.1796545759",
              "lunar": "69.8856300251",
              "kilometers": "26875941.890393333",
              "miles": "16699935.9043726754"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1982-04-05",
            "close_approach_date_full": "1982-Apr-05 22:46",
            "epoch_date_close_approach": 386894760000,
            "relative_velocity": {
              "kilometers_per_second": "15.4520154427",
              "kilometers_per_hour": "55627.2555938014",
              "miles_per_hour": "34564.6133438262"
            },
            "miss_distance": {
              "astronomical": "0.1820279305",
              "lunar": "70.8088649645",
              "kilometers": "27230990.683308035",
              "miles": "16920552.994139483"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1999-04-01",
            "close_approach_date_full": "1999-Apr-01 14:44",
            "epoch_date_close_approach": 922977840000,
            "relative_velocity": {
              "kilometers_per_second": "17.8563601672",
              "kilometers_per_hour": "64282.8966019214",
              "miles_per_hour": "39942.8920580106"
            },
            "miss_distance": {
              "astronomical": "0.1894093628",
              "lunar": "73.6802421292",
              "kilometers": "28335237.232937236",
              "miles": "17606699.9830204168"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2016-03-27",
            "close_approach_date_full": "2016-Mar-27 11:19",
            "epoch_date_close_approach": 1459077540000,
            "relative_velocity": {
              "kilometers_per_second": "20.2354290933",
              "kilometers_per_hour": "72847.5447359488",
              "miles_per_hour": "45264.6313388455"
            },
            "miss_distance": {
              "astronomical": "0.237177027",
              "lunar": "92.261863503",
              "kilometers": "35481178.05213249",
              "miles": "22046981.709468762"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2033-03-23",
            "close_approach_date_full": "2033-Mar-23 16:37",
            "epoch_date_close_approach": 1995208620000,
            "relative_velocity": {
              "kilometers_per_second": "22.6518747294",
              "kilometers_per_hour": "81546.7490258821",
              "miles_per_hour": "50669.978582221"
            },
            "miss_distance": {
              "astronomical": "0.306334402",
              "lunar": "119.164082378",
              "kilometers": "45826974.04692374",
              "miles": "28475561.243438012"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2043-08-24",
            "close_approach_date_full": "2043-Aug-24 20:36",
            "epoch_date_close_approach": 2324061360000,
            "relative_velocity": {
              "kilometers_per_second": "24.2545472005",
              "kilometers_per_hour": "87316.3699216942",
              "miles_per_hour": "54254.9966327327"
            },
            "miss_distance": {
              "astronomical": "0.3600310281",
              "lunar": "140.0520699309",
              "kilometers": "53859874.937670147",
              "miles": "33466974.4020441486"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2050-03-17",
            "close_approach_date_full": "2050-Mar-17 21:01",
            "epoch_date_close_approach": 2531163660000,
            "relative_velocity": {
              "kilometers_per_second": "26.4321603393",
              "kilometers_per_hour": "95155.7772213162",
              "miles_per_hour": "59126.0994628784"
            },
            "miss_distance": {
              "astronomical": "0.4296534819",
              "lunar": "167.1352044591",
              "kilometers": "64275245.730323553",
              "miles": "39938785.7107209114"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2060-08-19",
            "close_approach_date_full": "2060-Aug-19 18:18",
            "epoch_date_close_approach": 2860165080000,
            "relative_velocity": {
              "kilometers_per_second": "21.6938199166",
              "kilometers_per_hour": "78097.7516998565",
              "miles_per_hour": "48526.9057715025"
            },
            "miss_distance": {
              "astronomical": "0.2772909289",
              "lunar": "107.8661713421",
              "kilometers": "41482132.333761443",
              "miles": "25775801.7923881934"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2077-08-17",
            "close_approach_date_full": "2077-Aug-17 02:41",
            "epoch_date_close_approach": 3396393660000,
            "relative_velocity": {
              "kilometers_per_second": "20.1511683233",
              "kilometers_per_hour": "72544.20596379",
              "miles_per_hour": "45076.1484223338"
            },
            "miss_distance": {
              "astronomical": "0.234611106",
              "lunar": "91.263720234",
              "kilometers": "35097321.73594422",
              "miles": "21808464.454781436"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2094-08-13",
            "close_approach_date_full": "2094-Aug-13 08:54",
            "epoch_date_close_approach": 3932528040000,
            "relative_velocity": {
              "kilometers_per_second": "18.0439201831",
              "kilometers_per_hour": "64958.1126592381",
              "miles_per_hour": "40362.4450576249"
            },
            "miss_distance": {
              "astronomical": "0.1931269322",
              "lunar": "75.1263766258",
              "kilometers": "28891377.696754414",
              "miles": "17952269.6429583532"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2111-08-16",
            "close_approach_date_full": "2111-Aug-16 02:17",
            "epoch_date_close_approach": 4469134620000,
            "relative_velocity": {
              "kilometers_per_second": "18.8826938396",
              "kilometers_per_hour": "67977.6978226223",
              "miles_per_hour": "42238.6978498399"
            },
            "miss_distance": {
              "astronomical": "0.2036375107",
              "lunar": "79.2149916623",
              "kilometers": "30463737.852822209",
              "miles": "18929288.9389521242"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2128-08-22",
            "close_approach_date_full": "2128-Aug-22 00:22",
            "epoch_date_close_approach": 5006190120000,
            "relative_velocity": {
              "kilometers_per_second": "22.6619348102",
              "kilometers_per_hour": "81582.9653167189",
              "miles_per_hour": "50692.4819769357"
            },
            "miss_distance": {
              "astronomical": "0.3061766254",
              "lunar": "119.1027072806",
              "kilometers": "45803371.003627898",
              "miles": "28460894.9924170724"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2135-03-18",
            "close_approach_date_full": "2135-Mar-18 01:17",
            "epoch_date_close_approach": 5213467020000,
            "relative_velocity": {
              "kilometers_per_second": "27.3355610462",
              "kilometers_per_hour": "98408.0197663686",
              "miles_per_hour": "61146.916504275"
            },
            "miss_distance": {
              "astronomical": "0.4727597336",
              "lunar": "183.9035363704",
              "kilometers": "70723849.168327432",
              "miles": "43945762.0811332816"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2145-08-28",
            "close_approach_date_full": "2145-Aug-28 19:43",
            "epoch_date_close_approach": 5543235780000,
            "relative_velocity": {
              "kilometers_per_second": "26.663408735",
              "kilometers_per_hour": "95988.2714460752",
              "miles_per_hour": "59643.3789993683"
            },
            "miss_distance": {
              "astronomical": "0.4415076264",
              "lunar": "171.7464666696",
              "kilometers": "66048600.498195768",
              "miles": "41040697.2671588784"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2152-03-28",
            "close_approach_date_full": "2152-Mar-28 11:54",
            "epoch_date_close_approach": 5750913240000,
            "relative_velocity": {
              "kilometers_per_second": "20.6974140353",
              "kilometers_per_hour": "74510.6905269058",
              "miles_per_hour": "46298.0454554543"
            },
            "miss_distance": {
              "astronomical": "0.2858849606",
              "lunar": "111.2092496734",
              "kilometers": "42767781.170793922",
              "miles": "26574666.9358512436"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2169-04-07",
            "close_approach_date_full": "2169-Apr-07 18:18",
            "epoch_date_close_approach": 6288257880000,
            "relative_velocity": {
              "kilometers_per_second": "15.1149913966",
              "kilometers_per_hour": "54413.969027778",
              "miles_per_hour": "33810.7242550657"
            },
            "miss_distance": {
              "astronomical": "0.2257332753",
              "lunar": "87.8102440917",
              "kilometers": "33769217.173003611",
              "miles": "20983218.5465313918"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2186-07-23",
            "close_approach_date_full": "2186-Jul-23 19:33",
            "epoch_date_close_approach": 6833964780000,
            "relative_velocity": {
              "kilometers_per_second": "10.9653651602",
              "kilometers_per_hour": "39475.314576598",
              "miles_per_hour": "24528.4253267755"
            },
            "miss_distance": {
              "astronomical": "0.2804744664",
              "lunar": "109.1045674296",
              "kilometers": "41958382.762826568",
              "miles": "26071730.0866319184"
            },
            "orbiting_body": "Earth"
          }
        ],
        "orbital_data": {
          "orbit_id": "238",
          "orbit_determination_date": "2024-01-19 16:44:23",
          "first_observation_date": "1948-03-05",
          "last_observation_date": "2023-12-30",
          "data_arc_in_days": 27693,
          "observations_used": 1369,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".186605",
          "jupiter_tisserand_invariant": "3.296",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".606271498416921",
          "semi_major_axis": "2.261464898091422",
          "inclination": "18.34949143749587",
          "ascending_node_longitude": "345.9970309608836",
          "orbital_period": "1242.17619888942",
          "perihelion_distance": ".8904031857082662",
          "perihelion_argument": "268.5697015027924",
          "aphelion_distance": "3.632526610474578",
          "perihelion_time": "2460000.698802723977",
          "mean_anomaly": "173.8307586415045",
          "mean_motion": ".2898139574094734",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "APO",
            "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
            "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
          }
        },
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2001864?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2001864",
        "neo_reference_id": "2001864",
        "name": "1864 Daedalus (1971 FA)",
        "name_limited": "Daedalus",
        "designation": "1864",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2001864",
        "absolute_magnitude_h": 14.86,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 2.8350124902,
            "estimated_diameter_max": 6.3392806452
          },
          "meters": {
            "estimated_diameter_min": 2835.01249023,
            "estimated_diameter_max": 6339.2806452153
          },
          "miles": {
            "estimated_diameter_min": 1.7615945461,
            "estimated_diameter_max": 3.9390451538
          },
          "feet": {
            "estimated_diameter_min": 9301.2223784463,
            "estimated_diameter_max": 20798.1655120482
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "1902-11-17",
            "close_approach_date_full": "1902-Nov-17 09:11",
            "epoch_date_close_approach": -2118235740000,
            "relative_velocity": {
              "kilometers_per_second": "22.5062056381",
              "kilometers_per_hour": "81022.3402970207",
              "miles_per_hour": "50344.1313917793"
            },
            "miss_distance": {
              "astronomical": "0.2966433514",
              "lunar": "115.3942636946",
              "kilometers": "44377213.519101518",
              "miles": "27574721.8239282284"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1904-05-09",
            "close_approach_date_full": "1904-May-09 17:03",
            "epoch_date_close_approach": -2071637820000,
            "relative_velocity": {
              "kilometers_per_second": "15.411268066",
              "kilometers_per_hour": "55480.5650376752",
              "miles_per_hour": "34473.4655368822"
            },
            "miss_distance": {
              "astronomical": "0.3527121314",
              "lunar": "137.2050191146",
              "kilometers": "52764983.580600118",
              "miles": "32786640.4602649084"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1909-11-13",
            "close_approach_date_full": "1909-Nov-13 09:45",
            "epoch_date_close_approach": -1897654500000,
            "relative_velocity": {
              "kilometers_per_second": "21.1217902509",
              "kilometers_per_hour": "76038.4449031522",
              "miles_per_hour": "47247.3326121836"
            },
            "miss_distance": {
              "astronomical": "0.1472268551",
              "lunar": "57.2712466339",
              "kilometers": "22024823.929758637",
              "miles": "13685590.9806657106"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1909-12-13",
            "close_approach_date_full": "1909-Dec-13 05:42",
            "epoch_date_close_approach": -1895077080000,
            "relative_velocity": {
              "kilometers_per_second": "32.4206119021",
              "kilometers_per_hour": "116714.2028476021",
              "miles_per_hour": "72521.6667638337"
            },
            "miss_distance": {
              "astronomical": "0.4983308522",
              "lunar": "193.8507015058",
              "kilometers": "74549234.044404814",
              "miles": "46322746.0209178732"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1918-09-10",
            "close_approach_date_full": "1918-Sep-10 09:15",
            "epoch_date_close_approach": -1619189100000,
            "relative_velocity": {
              "kilometers_per_second": "24.175636642",
              "kilometers_per_hour": "87032.2919113253",
              "miles_per_hour": "54078.4816045676"
            },
            "miss_distance": {
              "astronomical": "0.4465201501",
              "lunar": "173.6963383889",
              "kilometers": "66798463.367040287",
              "miles": "41506640.4477864806"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1920-04-18",
            "close_approach_date_full": "1920-Apr-18 09:20",
            "epoch_date_close_approach": -1568558400000,
            "relative_velocity": {
              "kilometers_per_second": "32.6720778725",
              "kilometers_per_hour": "117619.4803410601",
              "miles_per_hour": "73084.1709930326"
            },
            "miss_distance": {
              "astronomical": "0.4814421543",
              "lunar": "187.2809980227",
              "kilometers": "72022720.811491341",
              "miles": "44752843.4953328658"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1925-10-21",
            "close_approach_date_full": "1925-Oct-21 07:13",
            "epoch_date_close_approach": -1394729220000,
            "relative_velocity": {
              "kilometers_per_second": "20.959801507",
              "kilometers_per_hour": "75455.285425209",
              "miles_per_hour": "46884.9799910139"
            },
            "miss_distance": {
              "astronomical": "0.3346866764",
              "lunar": "130.1931171196",
              "kilometers": "50068413.906819268",
              "miles": "31111069.7622231784"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1927-05-04",
            "close_approach_date_full": "1927-May-04 11:36",
            "epoch_date_close_approach": -1346329440000,
            "relative_velocity": {
              "kilometers_per_second": "21.7700662416",
              "kilometers_per_hour": "78372.2384698252",
              "miles_per_hour": "48697.4611758755"
            },
            "miss_distance": {
              "astronomical": "0.2642491172",
              "lunar": "102.7929065908",
              "kilometers": "39531105.082500364",
              "miles": "24563489.6741144632"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1932-11-26",
            "close_approach_date_full": "1932-Nov-26 13:45",
            "epoch_date_close_approach": -1170670500000,
            "relative_velocity": {
              "kilometers_per_second": "25.1725652206",
              "kilometers_per_hour": "90621.2347939832",
              "miles_per_hour": "56308.5111418503"
            },
            "miss_distance": {
              "astronomical": "0.3318948872",
              "lunar": "129.1071111208",
              "kilometers": "49650768.189010264",
              "miles": "30851556.7469550832"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1934-05-08",
            "close_approach_date_full": "1934-May-08 07:16",
            "epoch_date_close_approach": -1125074640000,
            "relative_velocity": {
              "kilometers_per_second": "13.9433268383",
              "kilometers_per_hour": "50195.9766177302",
              "miles_per_hour": "31189.8278045002"
            },
            "miss_distance": {
              "astronomical": "0.4402943938",
              "lunar": "171.2745191882",
              "kilometers": "65867103.485421206",
              "miles": "40927920.2529604028"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1934-06-20",
            "close_approach_date_full": "1934-Jun-20 20:41",
            "epoch_date_close_approach": -1121311140000,
            "relative_velocity": {
              "kilometers_per_second": "13.068093777",
              "kilometers_per_hour": "47045.1375971975",
              "miles_per_hour": "29232.0189697697"
            },
            "miss_distance": {
              "astronomical": "0.4620566701",
              "lunar": "179.7400446689",
              "kilometers": "69122693.666252687",
              "miles": "42950850.1868216006"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1941-08-14",
            "close_approach_date_full": "1941-Aug-14 11:56",
            "epoch_date_close_approach": -895665840000,
            "relative_velocity": {
              "kilometers_per_second": "23.8982967016",
              "kilometers_per_hour": "86033.8681258507",
              "miles_per_hour": "53458.0998918654"
            },
            "miss_distance": {
              "astronomical": "0.4927125514",
              "lunar": "191.6651824946",
              "kilometers": "73708748.211705518",
              "miles": "45800492.3417034284"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1948-09-23",
            "close_approach_date_full": "1948-Sep-23 00:33",
            "epoch_date_close_approach": -671326020000,
            "relative_velocity": {
              "kilometers_per_second": "23.3374885613",
              "kilometers_per_hour": "84014.9588207758",
              "miles_per_hour": "52203.6281628315"
            },
            "miss_distance": {
              "astronomical": "0.413237954",
              "lunar": "160.749564106",
              "kilometers": "61819517.72155798",
              "miles": "38412867.083860924"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1950-04-24",
            "close_approach_date_full": "1950-Apr-24 09:14",
            "epoch_date_close_approach": -621355560000,
            "relative_velocity": {
              "kilometers_per_second": "29.0294286681",
              "kilometers_per_hour": "104505.9432052133",
              "miles_per_hour": "64935.928987706"
            },
            "miss_distance": {
              "astronomical": "0.3873535155",
              "lunar": "150.6805175295",
              "kilometers": "57947260.855811985",
              "miles": "36006758.240235993"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1950-07-01",
            "close_approach_date_full": "1950-Jul-01 14:12",
            "epoch_date_close_approach": -615462480000,
            "relative_velocity": {
              "kilometers_per_second": "21.7425479729",
              "kilometers_per_hour": "78273.172702544",
              "miles_per_hour": "48635.9055606447"
            },
            "miss_distance": {
              "astronomical": "0.1227344789",
              "lunar": "47.7437122921",
              "kilometers": "18360816.618999943",
              "miles": "11408882.4101394934"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1955-11-04",
            "close_approach_date_full": "1955-Nov-04 21:09",
            "epoch_date_close_approach": -446784660000,
            "relative_velocity": {
              "kilometers_per_second": "20.8798876014",
              "kilometers_per_hour": "75167.5953649673",
              "miles_per_hour": "46706.2205755265"
            },
            "miss_distance": {
              "astronomical": "0.3038599953",
              "lunar": "118.2015381717",
              "kilometers": "45456808.075090011",
              "miles": "28245550.7742677118"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1957-05-08",
            "close_approach_date_full": "1957-May-08 06:31",
            "epoch_date_close_approach": -399230940000,
            "relative_velocity": {
              "kilometers_per_second": "18.3847403407",
              "kilometers_per_hour": "66185.0652266053",
              "miles_per_hour": "41124.8256681648"
            },
            "miss_distance": {
              "astronomical": "0.2836511512",
              "lunar": "110.3402978168",
              "kilometers": "42433608.042567944",
              "miles": "26367021.3826238672"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1962-12-05",
            "close_approach_date_full": "1962-Dec-05 20:44",
            "epoch_date_close_approach": -223182960000,
            "relative_velocity": {
              "kilometers_per_second": "28.5894804923",
              "kilometers_per_hour": "102922.1297722318",
              "miles_per_hour": "63951.8089131959"
            },
            "miss_distance": {
              "astronomical": "0.4039532293",
              "lunar": "157.1378061977",
              "kilometers": "60430542.682901591",
              "miles": "37549798.0158843158"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1964-07-16",
            "close_approach_date_full": "1964-Jul-16 03:43",
            "epoch_date_close_approach": -172354620000,
            "relative_velocity": {
              "kilometers_per_second": "19.4592590076",
              "kilometers_per_hour": "70053.332427518",
              "miles_per_hour": "43528.4164741986"
            },
            "miss_distance": {
              "astronomical": "0.4951958111",
              "lunar": "192.6311705179",
              "kilometers": "74080238.573482357",
              "miles": "46031325.7486242466"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1971-08-28",
            "close_approach_date_full": "1971-Aug-28 11:20",
            "epoch_date_close_approach": 52226400000,
            "relative_velocity": {
              "kilometers_per_second": "24.468414043",
              "kilometers_per_hour": "88086.2905546639",
              "miles_per_hour": "54733.3953727021"
            },
            "miss_distance": {
              "astronomical": "0.4733100955",
              "lunar": "184.1176271495",
              "kilometers": "70806182.136296585",
              "miles": "43996921.415139473"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1978-10-06",
            "close_approach_date_full": "1978-Oct-06 22:13",
            "epoch_date_close_approach": 276559980000,
            "relative_velocity": {
              "kilometers_per_second": "22.1577693709",
              "kilometers_per_hour": "79767.9697352",
              "miles_per_hour": "49564.7143057414"
            },
            "miss_distance": {
              "astronomical": "0.3762136698",
              "lunar": "146.3471175522",
              "kilometers": "56280763.666963326",
              "miles": "34971244.9044768588"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1980-04-29",
            "close_approach_date_full": "1980-Apr-29 02:57",
            "epoch_date_close_approach": 325825020000,
            "relative_velocity": {
              "kilometers_per_second": "25.4822951029",
              "kilometers_per_hour": "91736.2623703979",
              "miles_per_hour": "57001.3459156508"
            },
            "miss_distance": {
              "astronomical": "0.3113948845",
              "lunar": "121.1326100705",
              "kilometers": "46584011.450096015",
              "miles": "28945962.472974407"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1985-11-16",
            "close_approach_date_full": "1985-Nov-16 13:13",
            "epoch_date_close_approach": 500994780000,
            "relative_velocity": {
              "kilometers_per_second": "22.3316378667",
              "kilometers_per_hour": "80393.8963199666",
              "miles_per_hour": "49953.6407439259"
            },
            "miss_distance": {
              "astronomical": "0.2986990057",
              "lunar": "116.1939132173",
              "kilometers": "44684735.023837859",
              "miles": "27765806.8262420942"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1987-05-11",
            "close_approach_date_full": "1987-May-11 01:19",
            "epoch_date_close_approach": 547694340000,
            "relative_velocity": {
              "kilometers_per_second": "15.6517873533",
              "kilometers_per_hour": "56346.4344720586",
              "miles_per_hour": "35011.4831307077"
            },
            "miss_distance": {
              "astronomical": "0.3465129151",
              "lunar": "134.7935239739",
              "kilometers": "51837594.026450837",
              "miles": "32210387.3125300706"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1991-02-14",
            "close_approach_date_full": "1991-Feb-14 20:45",
            "epoch_date_close_approach": 666564300000,
            "relative_velocity": {
              "kilometers_per_second": "23.5888088566",
              "kilometers_per_hour": "84919.7118838378",
              "miles_per_hour": "52765.8065313769"
            },
            "miss_distance": {
              "astronomical": "0.1382706234",
              "lunar": "53.7872725026",
              "kilometers": "20684990.744212158",
              "miles": "12853057.2442694604"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1992-12-12",
            "close_approach_date_full": "1992-Dec-12 18:55",
            "epoch_date_close_approach": 724186500000,
            "relative_velocity": {
              "kilometers_per_second": "32.0024752019",
              "kilometers_per_hour": "115208.9107269084",
              "miles_per_hour": "71586.3367791726"
            },
            "miss_distance": {
              "astronomical": "0.4912102366",
              "lunar": "191.0807820374",
              "kilometers": "73484005.117556042",
              "miles": "45660843.4586036996"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2001-09-09",
            "close_approach_date_full": "2001-Sep-09 17:59",
            "epoch_date_close_approach": 1000058340000,
            "relative_velocity": {
              "kilometers_per_second": "24.2472269763",
              "kilometers_per_hour": "87290.0171146904",
              "miles_per_hour": "54238.622023292"
            },
            "miss_distance": {
              "astronomical": "0.4469608415",
              "lunar": "173.8677673435",
              "kilometers": "66864389.861807605",
              "miles": "41547605.272070749"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2003-04-19",
            "close_approach_date_full": "2003-Apr-19 07:42",
            "epoch_date_close_approach": 1050738120000,
            "relative_velocity": {
              "kilometers_per_second": "32.9736215462",
              "kilometers_per_hour": "118705.0375664521",
              "miles_per_hour": "73758.6940367769"
            },
            "miss_distance": {
              "astronomical": "0.4942898082",
              "lunar": "192.2787353898",
              "kilometers": "73944702.469428534",
              "miles": "45947107.5188164092"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2005-03-27",
            "close_approach_date_full": "2005-Mar-27 11:06",
            "epoch_date_close_approach": 1111921560000,
            "relative_velocity": {
              "kilometers_per_second": "21.3041586906",
              "kilometers_per_hour": "76694.9712863227",
              "miles_per_hour": "47655.2725751042"
            },
            "miss_distance": {
              "astronomical": "0.1322810822",
              "lunar": "51.4573409758",
              "kilometers": "19788968.138414914",
              "miles": "12296294.6144532532"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2008-10-20",
            "close_approach_date_full": "2008-Oct-20 13:49",
            "epoch_date_close_approach": 1224510540000,
            "relative_velocity": {
              "kilometers_per_second": "21.0865850513",
              "kilometers_per_hour": "75911.7061845432",
              "miles_per_hour": "47168.582101168"
            },
            "miss_distance": {
              "astronomical": "0.3376902832",
              "lunar": "131.3615201648",
              "kilometers": "50517747.086416784",
              "miles": "31390272.4532242592"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2010-05-04",
            "close_approach_date_full": "2010-May-04 13:10",
            "epoch_date_close_approach": 1272978600000,
            "relative_velocity": {
              "kilometers_per_second": "22.0368706471",
              "kilometers_per_hour": "79332.7343295154",
              "miles_per_hour": "49294.2759504703"
            },
            "miss_distance": {
              "astronomical": "0.2711744479",
              "lunar": "105.4868602331",
              "kilometers": "40567119.804265973",
              "miles": "25207239.3711495074"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2015-11-27",
            "close_approach_date_full": "2015-Nov-27 06:14",
            "epoch_date_close_approach": 1448604840000,
            "relative_velocity": {
              "kilometers_per_second": "24.9859434474",
              "kilometers_per_hour": "89949.3964105043",
              "miles_per_hour": "55891.0568974047"
            },
            "miss_distance": {
              "astronomical": "0.3323167782",
              "lunar": "129.2712267198",
              "kilometers": "49713882.183982434",
              "miles": "30890773.9649042292"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2017-05-08",
            "close_approach_date_full": "2017-May-08 23:45",
            "epoch_date_close_approach": 1494287100000,
            "relative_velocity": {
              "kilometers_per_second": "13.9797444123",
              "kilometers_per_hour": "50327.0798843779",
              "miles_per_hour": "31271.2902759347"
            },
            "miss_distance": {
              "astronomical": "0.4348851206",
              "lunar": "169.1703119134",
              "kilometers": "65057887.736453122",
              "miles": "40425096.9027802036"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2024-08-13",
            "close_approach_date_full": "2024-Aug-13 15:16",
            "epoch_date_close_approach": 1723562160000,
            "relative_velocity": {
              "kilometers_per_second": "23.8245305652",
              "kilometers_per_hour": "85768.3100346818",
              "miles_per_hour": "53293.0924212722"
            },
            "miss_distance": {
              "astronomical": "0.4924242622",
              "lunar": "191.5530379958",
              "kilometers": "73665620.761441514",
              "miles": "45773694.1867563332"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2031-09-22",
            "close_approach_date_full": "2031-Sep-22 12:02",
            "epoch_date_close_approach": 1947844920000,
            "relative_velocity": {
              "kilometers_per_second": "23.5114810036",
              "kilometers_per_hour": "84641.3316129064",
              "miles_per_hour": "52592.8318569195"
            },
            "miss_distance": {
              "astronomical": "0.4167747342",
              "lunar": "162.1253716038",
              "kilometers": "62348612.506136154",
              "miles": "38741631.3379967652"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2033-04-23",
            "close_approach_date_full": "2033-Apr-23 23:05",
            "epoch_date_close_approach": 1997910300000,
            "relative_velocity": {
              "kilometers_per_second": "29.6168381775",
              "kilometers_per_hour": "106620.6174390472",
              "miles_per_hour": "66249.9053192791"
            },
            "miss_distance": {
              "astronomical": "0.4064954767",
              "lunar": "158.1267404363",
              "kilometers": "60810857.478954629",
              "miles": "37786114.6720027202"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2038-11-03",
            "close_approach_date_full": "2038-Nov-03 00:44",
            "epoch_date_close_approach": 2172357840000,
            "relative_velocity": {
              "kilometers_per_second": "20.8671797961",
              "kilometers_per_hour": "75121.8472660975",
              "miles_per_hour": "46677.7944859815"
            },
            "miss_distance": {
              "astronomical": "0.3093956158",
              "lunar": "120.3548945462",
              "kilometers": "46284925.111018346",
              "miles": "28760118.8395553348"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2040-05-08",
            "close_approach_date_full": "2040-May-08 02:12",
            "epoch_date_close_approach": 2220055920000,
            "relative_velocity": {
              "kilometers_per_second": "18.930812328",
              "kilometers_per_hour": "68150.9243808479",
              "miles_per_hour": "42346.334096533"
            },
            "miss_distance": {
              "astronomical": "0.2817584433",
              "lunar": "109.6040344437",
              "kilometers": "42150462.972195771",
              "miles": "26191083.1942567998"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2045-11-10",
            "close_approach_date_full": "2045-Nov-10 19:00",
            "epoch_date_close_approach": 2393953200000,
            "relative_velocity": {
              "kilometers_per_second": "22.2462475398",
              "kilometers_per_hour": "80086.4911431436",
              "miles_per_hour": "49762.6311216938"
            },
            "miss_distance": {
              "astronomical": "0.123853209",
              "lunar": "48.178898301",
              "kilometers": "18528176.25906483",
              "miles": "11512874.868281454"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2045-12-04",
            "close_approach_date_full": "2045-Dec-04 19:19",
            "epoch_date_close_approach": 2396027940000,
            "relative_velocity": {
              "kilometers_per_second": "27.9954403998",
              "kilometers_per_hour": "100783.5854391274",
              "miles_per_hour": "62623.0006302178"
            },
            "miss_distance": {
              "astronomical": "0.3942414277",
              "lunar": "153.3599153753",
              "kilometers": "58977677.849678999",
              "miles": "36647029.6704442262"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2047-07-14",
            "close_approach_date_full": "2047-Jul-14 11:53",
            "epoch_date_close_approach": 2446717980000,
            "relative_velocity": {
              "kilometers_per_second": "18.8265252327",
              "kilometers_per_hour": "67775.4908378737",
              "miles_per_hour": "42113.0542931221"
            },
            "miss_distance": {
              "astronomical": "0.491720711",
              "lunar": "191.279356579",
              "kilometers": "73560371.00048557",
              "miles": "45708295.017898066"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2054-08-26",
            "close_approach_date_full": "2054-Aug-26 16:31",
            "epoch_date_close_approach": 2671374660000,
            "relative_velocity": {
              "kilometers_per_second": "24.455641371",
              "kilometers_per_hour": "88040.308935586",
              "miles_per_hour": "54704.8241827812"
            },
            "miss_distance": {
              "astronomical": "0.4752074043",
              "lunar": "184.8556802727",
              "kilometers": "71090015.491508841",
              "miles": "44173287.2838743658"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2061-10-04",
            "close_approach_date_full": "2061-Oct-04 20:33",
            "epoch_date_close_approach": 2895683580000,
            "relative_velocity": {
              "kilometers_per_second": "22.4267406871",
              "kilometers_per_hour": "80736.2664734722",
              "miles_per_hour": "50166.3762429194"
            },
            "miss_distance": {
              "astronomical": "0.3819267231",
              "lunar": "148.5694952859",
              "kilometers": "57135424.271839797",
              "miles": "35502306.3786993186"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2063-04-29",
            "close_approach_date_full": "2063-Apr-29 13:32",
            "epoch_date_close_approach": 2945079120000,
            "relative_velocity": {
              "kilometers_per_second": "26.172135928",
              "kilometers_per_hour": "94219.6893406218",
              "miles_per_hour": "58544.4508572325"
            },
            "miss_distance": {
              "astronomical": "0.3299020299",
              "lunar": "128.3318896311",
              "kilometers": "49352640.981716313",
              "miles": "30666309.0903905994"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2068-11-14",
            "close_approach_date_full": "2068-Nov-14 11:48",
            "epoch_date_close_approach": 3120119280000,
            "relative_velocity": {
              "kilometers_per_second": "21.9534340403",
              "kilometers_per_hour": "79032.3625451236",
              "miles_per_hour": "49107.6366047741"
            },
            "miss_distance": {
              "astronomical": "0.3001722603",
              "lunar": "116.7670092567",
              "kilometers": "44905130.773965561",
              "miles": "27902754.3950283018"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2070-05-11",
            "close_approach_date_full": "2070-May-11 04:21",
            "epoch_date_close_approach": 3167007660000,
            "relative_velocity": {
              "kilometers_per_second": "16.2186612556",
              "kilometers_per_hour": "58387.1805200772",
              "miles_per_hour": "36279.5233626002"
            },
            "miss_distance": {
              "astronomical": "0.3331138595",
              "lunar": "129.5812913455",
              "kilometers": "49833123.848679265",
              "miles": "30964867.299593257"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2075-12-12",
            "close_approach_date_full": "2075-Dec-12 09:56",
            "epoch_date_close_approach": 3343370160000,
            "relative_velocity": {
              "kilometers_per_second": "31.1775764723",
              "kilometers_per_hour": "112239.2753001846",
              "miles_per_hour": "69741.1208108286"
            },
            "miss_distance": {
              "astronomical": "0.4728738868",
              "lunar": "183.9479419652",
              "kilometers": "70740926.243901116",
              "miles": "43956373.2838467608"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2077-07-28",
            "close_approach_date_full": "2077-Jul-28 10:46",
            "epoch_date_close_approach": 3394694760000,
            "relative_velocity": {
              "kilometers_per_second": "21.701495634",
              "kilometers_per_hour": "78125.3842822859",
              "miles_per_hour": "48544.0755836237"
            },
            "miss_distance": {
              "astronomical": "0.4993723867",
              "lunar": "194.2558584263",
              "kilometers": "74705045.387136329",
              "miles": "46419562.6998421802"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2084-09-06",
            "close_approach_date_full": "2084-Sep-06 08:19",
            "epoch_date_close_approach": 3619066740000,
            "relative_velocity": {
              "kilometers_per_second": "24.4016598001",
              "kilometers_per_hour": "87845.9752804651",
              "miles_per_hour": "54584.072806909"
            },
            "miss_distance": {
              "astronomical": "0.453613837",
              "lunar": "176.455782593",
              "kilometers": "67859663.81772719",
              "miles": "42166039.831087622"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2086-06-25",
            "close_approach_date_full": "2086-Jun-25 13:33",
            "epoch_date_close_approach": 3675850380000,
            "relative_velocity": {
              "kilometers_per_second": "24.0718530323",
              "kilometers_per_hour": "86658.6709161936",
              "miles_per_hour": "53846.3280478982"
            },
            "miss_distance": {
              "astronomical": "0.1477319126",
              "lunar": "57.4677140014",
              "kilometers": "22100379.455986162",
              "miles": "13732539.0076545556"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2091-10-17",
            "close_approach_date_full": "2091-Oct-17 10:03",
            "epoch_date_close_approach": 3843453780000,
            "relative_velocity": {
              "kilometers_per_second": "21.4397597613",
              "kilometers_per_hour": "77183.1351406174",
              "miles_per_hour": "47958.598610013"
            },
            "miss_distance": {
              "astronomical": "0.349536753",
              "lunar": "135.969796917",
              "kilometers": "52289953.73551611",
              "miles": "32491470.601737918"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2093-05-03",
            "close_approach_date_full": "2093-May-03 11:03",
            "epoch_date_close_approach": 3892186980000,
            "relative_velocity": {
              "kilometers_per_second": "23.1343794419",
              "kilometers_per_hour": "83283.7659909512",
              "miles_per_hour": "51749.2933736552"
            },
            "miss_distance": {
              "astronomical": "0.2855949334",
              "lunar": "111.0964290926",
              "kilometers": "42724393.719431858",
              "miles": "26547707.2237133204"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2098-11-24",
            "close_approach_date_full": "2098-Nov-24 14:13",
            "epoch_date_close_approach": 4067676780000,
            "relative_velocity": {
              "kilometers_per_second": "24.0942031969",
              "kilometers_per_hour": "86739.1315089541",
              "miles_per_hour": "53896.3231312165"
            },
            "miss_distance": {
              "astronomical": "0.3218542666",
              "lunar": "125.2013097074",
              "kilometers": "48148712.733772142",
              "miles": "29918222.7663418796"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2100-05-11",
            "close_approach_date_full": "2100-May-11 09:40",
            "epoch_date_close_approach": 4113711600000,
            "relative_velocity": {
              "kilometers_per_second": "14.3509942894",
              "kilometers_per_hour": "51663.5794419833",
              "miles_per_hour": "32101.7391260479"
            },
            "miss_distance": {
              "astronomical": "0.4076191386",
              "lunar": "158.5638449154",
              "kilometers": "60978954.905794782",
              "miles": "37890565.5695887116"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2100-08-05",
            "close_approach_date_full": "2100-Aug-05 06:42",
            "epoch_date_close_approach": 4121131320000,
            "relative_velocity": {
              "kilometers_per_second": "21.3823811541",
              "kilometers_per_hour": "76976.5721547168",
              "miles_per_hour": "47830.2484035794"
            },
            "miss_distance": {
              "astronomical": "0.1307974992",
              "lunar": "50.8802271888",
              "kilometers": "19567027.281646704",
              "miles": "12158386.9609203552"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2107-08-11",
            "close_approach_date_full": "2107-Aug-11 15:59",
            "epoch_date_close_approach": 4342521540000,
            "relative_velocity": {
              "kilometers_per_second": "23.4342507602",
              "kilometers_per_hour": "84363.3027365864",
              "miles_per_hour": "52420.0755254084"
            },
            "miss_distance": {
              "astronomical": "0.4946543654",
              "lunar": "192.4205481406",
              "kilometers": "73999239.450041698",
              "miles": "45980995.2271755124"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2114-09-19",
            "close_approach_date_full": "2114-Sep-19 12:26",
            "epoch_date_close_approach": 4566803160000,
            "relative_velocity": {
              "kilometers_per_second": "23.864140648",
              "kilometers_per_hour": "85910.9063328378",
              "miles_per_hour": "53381.6962155347"
            },
            "miss_distance": {
              "astronomical": "0.426309982",
              "lunar": "165.834582998",
              "kilometers": "63775065.26693834",
              "miles": "39627987.982655492"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2116-04-23",
            "close_approach_date_full": "2116-Apr-23 12:05",
            "epoch_date_close_approach": 4617086700000,
            "relative_velocity": {
              "kilometers_per_second": "30.8677504071",
              "kilometers_per_hour": "111123.901465578",
              "miles_per_hour": "69048.0708856532"
            },
            "miss_distance": {
              "astronomical": "0.4441121022",
              "lunar": "172.7596077558",
              "kilometers": "66438224.530342314",
              "miles": "41282798.4143553732"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2121-10-30",
            "close_approach_date_full": "2121-Oct-30 02:13",
            "epoch_date_close_approach": 4791233580000,
            "relative_velocity": {
              "kilometers_per_second": "20.8984488833",
              "kilometers_per_hour": "75234.4159799696",
              "miles_per_hour": "46747.7403071095"
            },
            "miss_distance": {
              "astronomical": "0.3208752838",
              "lunar": "124.8204853982",
              "kilometers": "48002258.992125506",
              "miles": "29827220.6311077428"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2123-05-08",
            "close_approach_date_full": "2123-May-08 23:33",
            "epoch_date_close_approach": 4839262380000,
            "relative_velocity": {
              "kilometers_per_second": "20.2025008103",
              "kilometers_per_hour": "72729.002917157",
              "miles_per_hour": "45190.9740626079"
            },
            "miss_distance": {
              "astronomical": "0.2774934481",
              "lunar": "107.9449513109",
              "kilometers": "41512428.774715547",
              "miles": "25794627.1278546686"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2128-12-02",
            "close_approach_date_full": "2128-Dec-02 18:20",
            "epoch_date_close_approach": 5015067600000,
            "relative_velocity": {
              "kilometers_per_second": "26.6435450684",
              "kilometers_per_hour": "95916.7622462249",
              "miles_per_hour": "59598.9459634946"
            },
            "miss_distance": {
              "astronomical": "0.3683778746",
              "lunar": "143.2989932194",
              "kilometers": "55108545.395287102",
              "miles": "34242862.2460099276"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2130-05-08",
            "close_approach_date_full": "2130-May-08 11:53",
            "epoch_date_close_approach": 5060145180000,
            "relative_velocity": {
              "kilometers_per_second": "13.7776592263",
              "kilometers_per_hour": "49599.5732146454",
              "miles_per_hour": "30819.245923289"
            },
            "miss_distance": {
              "astronomical": "0.4840606744",
              "lunar": "188.2996023416",
              "kilometers": "72414445.841003528",
              "miles": "44996250.1417555664"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2130-07-07",
            "close_approach_date_full": "2130-Jul-07 15:12",
            "epoch_date_close_approach": 5065341120000,
            "relative_velocity": {
              "kilometers_per_second": "16.8874636128",
              "kilometers_per_hour": "60794.8690062478",
              "miles_per_hour": "37775.5673555766"
            },
            "miss_distance": {
              "astronomical": "0.4813411752",
              "lunar": "187.2417171528",
              "kilometers": "72007614.553216824",
              "miles": "44743456.9017032112"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2137-08-22",
            "close_approach_date_full": "2137-Aug-22 09:45",
            "epoch_date_close_approach": 5290220700000,
            "relative_velocity": {
              "kilometers_per_second": "24.2788931884",
              "kilometers_per_hour": "87404.0154780827",
              "miles_per_hour": "54309.4561730342"
            },
            "miss_distance": {
              "astronomical": "0.4821100995",
              "lunar": "187.5408287055",
              "kilometers": "72122643.990688065",
              "miles": "44814932.879762697"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2141-03-20",
            "close_approach_date_full": "2141-Mar-20 05:41",
            "epoch_date_close_approach": 5403044460000,
            "relative_velocity": {
              "kilometers_per_second": "22.1299189558",
              "kilometers_per_hour": "79667.7082407932",
              "miles_per_hour": "49502.4157121751"
            },
            "miss_distance": {
              "astronomical": "0.1241598687",
              "lunar": "48.2981889243",
              "kilometers": "18574051.896999669",
              "miles": "11541380.6678626722"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2144-09-30",
            "close_approach_date_full": "2144-Sep-30 02:39",
            "epoch_date_close_approach": 5514489540000,
            "relative_velocity": {
              "kilometers_per_second": "23.0090823129",
              "kilometers_per_hour": "82832.6963265134",
              "miles_per_hour": "51469.0162257716"
            },
            "miss_distance": {
              "astronomical": "0.3975783062",
              "lunar": "154.6579611118",
              "kilometers": "59476867.765727794",
              "miles": "36957211.9009357972"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2146-04-28",
            "close_approach_date_full": "2146-Apr-28 15:05",
            "epoch_date_close_approach": 5564214300000,
            "relative_velocity": {
              "kilometers_per_second": "27.8255646192",
              "kilometers_per_hour": "100172.0326292082",
              "miles_per_hour": "62243.0054967433"
            },
            "miss_distance": {
              "astronomical": "0.3704652448",
              "lunar": "144.1109802272",
              "kilometers": "55420811.531108576",
              "miles": "34436895.4253713088"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2151-11-11",
            "close_approach_date_full": "2151-Nov-11 08:28",
            "epoch_date_close_approach": 5738977680000,
            "relative_velocity": {
              "kilometers_per_second": "21.3232922423",
              "kilometers_per_hour": "76763.8520723405",
              "miles_per_hour": "47698.0724168384"
            },
            "miss_distance": {
              "astronomical": "0.3039045256",
              "lunar": "118.2188604584",
              "kilometers": "45463469.713120472",
              "miles": "28249690.1241956336"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2153-05-11",
            "close_approach_date_full": "2153-May-11 16:06",
            "epoch_date_close_approach": 5786265960000,
            "relative_velocity": {
              "kilometers_per_second": "17.5027504644",
              "kilometers_per_hour": "63009.9016718904",
              "miles_per_hour": "39151.9025138477"
            },
            "miss_distance": {
              "astronomical": "0.3080725436",
              "lunar": "119.8402194604",
              "kilometers": "46086996.328042132",
              "miles": "28637131.5968081416"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2158-12-10",
            "close_approach_date_full": "2158-Dec-10 09:29",
            "epoch_date_close_approach": 5962411740000,
            "relative_velocity": {
              "kilometers_per_second": "29.567322562",
              "kilometers_per_hour": "106442.361223123",
              "miles_per_hour": "66139.1438388899"
            },
            "miss_distance": {
              "astronomical": "0.4366023667",
              "lunar": "169.8383206463",
              "kilometers": "65314784.095278929",
              "miles": "40584724.8981060602"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2160-07-22",
            "close_approach_date_full": "2160-Jul-22 21:53",
            "epoch_date_close_approach": 6013432380000,
            "relative_velocity": {
              "kilometers_per_second": "20.4644713353",
              "kilometers_per_hour": "73672.0968071164",
              "miles_per_hour": "45776.9759299552"
            },
            "miss_distance": {
              "astronomical": "0.4963401041",
              "lunar": "193.0763004949",
              "kilometers": "74251422.368938267",
              "miles": "46137694.4267394046"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2167-09-02",
            "close_approach_date_full": "2167-Sep-02 15:58",
            "epoch_date_close_approach": 6237878280000,
            "relative_velocity": {
              "kilometers_per_second": "24.5244596958",
              "kilometers_per_hour": "88288.0549048444",
              "miles_per_hour": "54858.7638935129"
            },
            "miss_distance": {
              "astronomical": "0.4640091026",
              "lunar": "180.4995409114",
              "kilometers": "69414773.409571462",
              "miles": "43132340.1235196956"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2174-10-11",
            "close_approach_date_full": "2174-Oct-11 21:27",
            "epoch_date_close_approach": 6462192420000,
            "relative_velocity": {
              "kilometers_per_second": "22.0613295489",
              "kilometers_per_hour": "79420.7863762139",
              "miles_per_hour": "49348.9880680425"
            },
            "miss_distance": {
              "astronomical": "0.3674446059",
              "lunar": "142.9359516951",
              "kilometers": "54968930.385629433",
              "miles": "34156109.5017868554"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2176-05-02",
            "close_approach_date_full": "2176-May-02 10:29",
            "epoch_date_close_approach": 6511314540000,
            "relative_velocity": {
              "kilometers_per_second": "24.9394946434",
              "kilometers_per_hour": "89782.1807162357",
              "miles_per_hour": "55787.1555678188"
            },
            "miss_distance": {
              "astronomical": "0.3152233276",
              "lunar": "122.6218744364",
              "kilometers": "47156738.383272212",
              "miles": "29301838.4870600456"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2181-10-31",
            "close_approach_date_full": "2181-Oct-31 23:07",
            "epoch_date_close_approach": 6684851220000,
            "relative_velocity": {
              "kilometers_per_second": "23.4363215419",
              "kilometers_per_hour": "84370.7575507064",
              "miles_per_hour": "52424.7076569931"
            },
            "miss_distance": {
              "astronomical": "0.1391489506",
              "lunar": "54.1289417834",
              "kilometers": "20816386.622495222",
              "miles": "12934702.8570771836"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2181-11-20",
            "close_approach_date_full": "2181-Nov-20 11:40",
            "epoch_date_close_approach": 6686538000000,
            "relative_velocity": {
              "kilometers_per_second": "22.7703611351",
              "kilometers_per_hour": "81973.3000865047",
              "miles_per_hour": "50935.0208231951"
            },
            "miss_distance": {
              "astronomical": "0.3094270514",
              "lunar": "120.3671229946",
              "kilometers": "46289627.809820518",
              "miles": "28763040.9610904284"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2183-05-13",
            "close_approach_date_full": "2183-May-13 14:49",
            "epoch_date_close_approach": 6733118940000,
            "relative_velocity": {
              "kilometers_per_second": "15.3165074658",
              "kilometers_per_hour": "55139.4268767734",
              "miles_per_hour": "34261.4955501818"
            },
            "miss_distance": {
              "astronomical": "0.3650243743",
              "lunar": "141.9944816027",
              "kilometers": "54606868.893362741",
              "miles": "33931134.9227021858"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2190-08-05",
            "close_approach_date_full": "2190-Aug-05 04:07",
            "epoch_date_close_approach": 6961262820000,
            "relative_velocity": {
              "kilometers_per_second": "22.6096289063",
              "kilometers_per_hour": "81394.6640627653",
              "miles_per_hour": "50575.4789005555"
            },
            "miss_distance": {
              "astronomical": "0.4970195538",
              "lunar": "193.3406064282",
              "kilometers": "74353066.596830406",
              "miles": "46200853.2212393628"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2195-12-11",
            "close_approach_date_full": "2195-Dec-11 06:13",
            "epoch_date_close_approach": 7130095980000,
            "relative_velocity": {
              "kilometers_per_second": "21.3340656943",
              "kilometers_per_hour": "76802.6364995776",
              "miles_per_hour": "47722.1715516403"
            },
            "miss_distance": {
              "astronomical": "0.1363072966",
              "lunar": "53.0235383774",
              "kilometers": "20391281.236818242",
              "miles": "12670554.6191340596"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2197-09-13",
            "close_approach_date_full": "2197-Sep-13 14:29",
            "epoch_date_close_approach": 7185594540000,
            "relative_velocity": {
              "kilometers_per_second": "24.2330737258",
              "kilometers_per_hour": "87239.0654128631",
              "miles_per_hour": "54206.9626172315"
            },
            "miss_distance": {
              "astronomical": "0.4397691174",
              "lunar": "171.0701866686",
              "kilometers": "65788523.254819938",
              "miles": "40879092.7618256244"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2199-04-22",
            "close_approach_date_full": "2199-Apr-22 06:44",
            "epoch_date_close_approach": 7236197040000,
            "relative_velocity": {
              "kilometers_per_second": "32.6984677988",
              "kilometers_per_hour": "117714.4840756296",
              "miles_per_hour": "73143.2026191044"
            },
            "miss_distance": {
              "astronomical": "0.4970209412",
              "lunar": "193.3411461268",
              "kilometers": "74353274.148915244",
              "miles": "46200982.1881246072"
            },
            "orbiting_body": "Earth"
          }
        ],
        "orbital_data": {
          "orbit_id": "728",
          "orbit_determination_date": "2024-09-24 06:21:31",
          "first_observation_date": "1971-03-24",
          "last_observation_date": "2024-09-23",
          "data_arc_in_days": 19542,
          "observations_used": 5961,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".269712",
          "jupiter_tisserand_invariant": "4.336",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".6142894587002734",
          "semi_major_axis": "1.461033919921487",
          "inclination": "22.21279566782816",
          "ascending_node_longitude": "6.612641552150852",
          "orbital_period": "645.0433095773557",
          "perihelion_distance": ".563536184110178",
          "perihelion_argument": "325.6617807786582",
          "aphelion_distance": "2.358531655732795",
          "perihelion_time": "2460539.086090379349",
          "mean_anomaly": "34.27522948485537",
          "mean_motion": ".5581020602103115",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "APO",
            "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
            "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
          }
        },
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2001865?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2001865",
        "neo_reference_id": "2001865",
        "name": "1865 Cerberus (1971 UA)",
        "name_limited": "Cerberus",
        "designation": "1865",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2001865",
        "absolute_magnitude_h": 16.79,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 1.1656145947,
            "estimated_diameter_max": 2.6063934693
          },
          "meters": {
            "estimated_diameter_min": 1165.6145946859,
            "estimated_diameter_max": 2606.3934692836
          },
          "miles": {
            "estimated_diameter_min": 0.7242791063,
            "estimated_diameter_max": 1.6195373164
          },
          "feet": {
            "estimated_diameter_min": 3824.1949868293,
            "estimated_diameter_max": 8551.1599497643
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "1900-05-20",
            "close_approach_date_full": "1900-May-20 10:57",
            "epoch_date_close_approach": -2196939780000,
            "relative_velocity": {
              "kilometers_per_second": "15.3278888303",
              "kilometers_per_hour": "55180.3997889263",
              "miles_per_hour": "34286.9545244026"
            },
            "miss_distance": {
              "astronomical": "0.3338747098",
              "lunar": "129.8772621122",
              "kilometers": "49946945.432948126",
              "miles": "31035592.7524750988"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1905-12-23",
            "close_approach_date_full": "1905-Dec-23 15:05",
            "epoch_date_close_approach": -2020409700000,
            "relative_velocity": {
              "kilometers_per_second": "20.573966335",
              "kilometers_per_hour": "74066.2788060832",
              "miles_per_hour": "46021.9052948132"
            },
            "miss_distance": {
              "astronomical": "0.1057464193",
              "lunar": "41.1353571077",
              "kilometers": "15819439.087406891",
              "miles": "9829743.6376454558"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1906-11-15",
            "close_approach_date_full": "1906-Nov-15 20:22",
            "epoch_date_close_approach": -1992137880000,
            "relative_velocity": {
              "kilometers_per_second": "24.3574297159",
              "kilometers_per_hour": "87686.7469771032",
              "miles_per_hour": "54485.1345314117"
            },
            "miss_distance": {
              "astronomical": "0.3398783141",
              "lunar": "132.2126641849",
              "kilometers": "50845071.848550967",
              "miles": "31593662.6290866646"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1907-11-06",
            "close_approach_date_full": "1907-Nov-06 00:33",
            "epoch_date_close_approach": -1961450820000,
            "relative_velocity": {
              "kilometers_per_second": "12.3056694271",
              "kilometers_per_hour": "44300.4099377054",
              "miles_per_hour": "27526.5519415704"
            },
            "miss_distance": {
              "astronomical": "0.3952062148",
              "lunar": "153.7352175572",
              "kilometers": "59122007.944842476",
              "miles": "36736712.2329431288"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1908-02-09",
            "close_approach_date_full": "1908-Feb-09 11:29",
            "epoch_date_close_approach": -1953203460000,
            "relative_velocity": {
              "kilometers_per_second": "15.4229418623",
              "kilometers_per_hour": "55522.5907042847",
              "miles_per_hour": "34499.5786517818"
            },
            "miss_distance": {
              "astronomical": "0.4244097434",
              "lunar": "165.0953901826",
              "kilometers": "63490793.619886558",
              "miles": "39451349.7720001804"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1909-05-04",
            "close_approach_date_full": "1909-May-04 06:53",
            "epoch_date_close_approach": -1914340020000,
            "relative_velocity": {
              "kilometers_per_second": "17.1997216957",
              "kilometers_per_hour": "61918.9981046842",
              "miles_per_hour": "38474.0574612133"
            },
            "miss_distance": {
              "astronomical": "0.3697168386",
              "lunar": "143.8198502154",
              "kilometers": "55308851.557693782",
              "miles": "34367326.7238349116"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1910-07-20",
            "close_approach_date_full": "1910-Jul-20 17:47",
            "epoch_date_close_approach": -1876111980000,
            "relative_velocity": {
              "kilometers_per_second": "23.9229112512",
              "kilometers_per_hour": "86122.4805043621",
              "miles_per_hour": "53513.1601778355"
            },
            "miss_distance": {
              "astronomical": "0.4050552875",
              "lunar": "157.5665068375",
              "kilometers": "60595408.242237625",
              "miles": "37652240.724124225"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1912-09-06",
            "close_approach_date_full": "1912-Sep-06 13:22",
            "epoch_date_close_approach": -1808822280000,
            "relative_velocity": {
              "kilometers_per_second": "16.4113772043",
              "kilometers_per_hour": "59080.9579356211",
              "miles_per_hour": "36710.6096683864"
            },
            "miss_distance": {
              "astronomical": "0.1454868288",
              "lunar": "56.5943764032",
              "kilometers": "21764519.701534656",
              "miles": "13523845.4334880128"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1915-11-11",
            "close_approach_date_full": "1915-Nov-11 02:22",
            "epoch_date_close_approach": -1708551480000,
            "relative_velocity": {
              "kilometers_per_second": "28.1197823301",
              "kilometers_per_hour": "101231.2163883236",
              "miles_per_hour": "62901.1410941781"
            },
            "miss_distance": {
              "astronomical": "0.4528911198",
              "lunar": "176.1746456022",
              "kilometers": "67751546.863994826",
              "miles": "42098859.0712515588"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1916-11-14",
            "close_approach_date_full": "1916-Nov-14 00:32",
            "epoch_date_close_approach": -1676676480000,
            "relative_velocity": {
              "kilometers_per_second": "11.88473333",
              "kilometers_per_hour": "42785.0399879186",
              "miles_per_hour": "26584.9599858264"
            },
            "miss_distance": {
              "astronomical": "0.3202540749",
              "lunar": "124.5788351361",
              "kilometers": "47909327.463860463",
              "miles": "29769475.6571138694"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1917-01-16",
            "close_approach_date_full": "1917-Jan-16 05:53",
            "epoch_date_close_approach": -1671214020000,
            "relative_velocity": {
              "kilometers_per_second": "10.2064368484",
              "kilometers_per_hour": "36743.1726542778",
              "miles_per_hour": "22830.7785862094"
            },
            "miss_distance": {
              "astronomical": "0.3857748737",
              "lunar": "150.0664258693",
              "kilometers": "57711099.405039019",
              "miles": "35860014.3193317022"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1918-04-19",
            "close_approach_date_full": "1918-Apr-19 22:35",
            "epoch_date_close_approach": -1631582700000,
            "relative_velocity": {
              "kilometers_per_second": "18.6507160152",
              "kilometers_per_hour": "67142.5776546361",
              "miles_per_hour": "41719.7866543488"
            },
            "miss_distance": {
              "astronomical": "0.3976509148",
              "lunar": "154.6862058572",
              "kilometers": "59487729.857631476",
              "miles": "36963961.2918713288"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1919-07-13",
            "close_approach_date_full": "1919-Jul-13 21:19",
            "epoch_date_close_approach": -1592707260000,
            "relative_velocity": {
              "kilometers_per_second": "20.3492679864",
              "kilometers_per_hour": "73257.364750865",
              "miles_per_hour": "45519.2775586694"
            },
            "miss_distance": {
              "astronomical": "0.3227921814",
              "lunar": "125.5661585646",
              "kilometers": "48289022.790093618",
              "miles": "30005407.3925352084"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1925-11-22",
            "close_approach_date_full": "1925-Nov-22 05:08",
            "epoch_date_close_approach": -1391971920000,
            "relative_velocity": {
              "kilometers_per_second": "12.1685619317",
              "kilometers_per_hour": "43806.8229542842",
              "miles_per_hour": "27219.8561851217"
            },
            "miss_distance": {
              "astronomical": "0.2360076353",
              "lunar": "91.8069701317",
              "kilometers": "35306239.544616811",
              "miles": "21938279.9614655518"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1927-04-06",
            "close_approach_date_full": "1927-Apr-06 14:31",
            "epoch_date_close_approach": -1348738140000,
            "relative_velocity": {
              "kilometers_per_second": "19.5511752559",
              "kilometers_per_hour": "70384.2309214099",
              "miles_per_hour": "43734.0239300283"
            },
            "miss_distance": {
              "astronomical": "0.4189038287",
              "lunar": "162.9535893643",
              "kilometers": "62667120.508364869",
              "miles": "38939543.0332944322"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1928-07-05",
            "close_approach_date_full": "1928-Jul-05 03:16",
            "epoch_date_close_approach": -1309380240000,
            "relative_velocity": {
              "kilometers_per_second": "17.0627236486",
              "kilometers_per_hour": "61425.805134848",
              "miles_per_hour": "38167.6065294838"
            },
            "miss_distance": {
              "astronomical": "0.2723052313",
              "lunar": "105.9267349757",
              "kilometers": "40736282.592337331",
              "miles": "25312352.2535079278"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1931-10-12",
            "close_approach_date_full": "1931-Oct-12 15:47",
            "epoch_date_close_approach": -1206173580000,
            "relative_velocity": {
              "kilometers_per_second": "16.813437104",
              "kilometers_per_hour": "60528.3735744202",
              "miles_per_hour": "37609.9774579501"
            },
            "miss_distance": {
              "astronomical": "0.0990044044",
              "lunar": "38.5127133116",
              "kilometers": "14810848.018858628",
              "miles": "9203034.2085519464"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1934-11-25",
            "close_approach_date_full": "1934-Nov-25 17:13",
            "epoch_date_close_approach": -1107672420000,
            "relative_velocity": {
              "kilometers_per_second": "14.0005099711",
              "kilometers_per_hour": "50401.8358959769",
              "miles_per_hour": "31317.7407543641"
            },
            "miss_distance": {
              "astronomical": "0.1686406729",
              "lunar": "65.6012217581",
              "kilometers": "25228285.461206723",
              "miles": "15676129.6738018574"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1936-03-24",
            "close_approach_date_full": "1936-Mar-24 03:37",
            "epoch_date_close_approach": -1065817380000,
            "relative_velocity": {
              "kilometers_per_second": "19.7965671297",
              "kilometers_per_hour": "71267.6416668638",
              "miles_per_hour": "44282.941012391"
            },
            "miss_distance": {
              "astronomical": "0.4327756166",
              "lunar": "168.3497148574",
              "kilometers": "64742310.431296642",
              "miles": "40229006.2581999796"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1937-06-24",
            "close_approach_date_full": "1937-Jun-24 12:05",
            "epoch_date_close_approach": -1026302100000,
            "relative_velocity": {
              "kilometers_per_second": "14.4554282911",
              "kilometers_per_hour": "52039.5418480334",
              "miles_per_hour": "32335.3475444072"
            },
            "miss_distance": {
              "astronomical": "0.2656277594",
              "lunar": "103.3291984066",
              "kilometers": "39737347.019112478",
              "miles": "24691642.4710010764"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1943-11-24",
            "close_approach_date_full": "1943-Nov-24 14:43",
            "epoch_date_close_approach": -823771020000,
            "relative_velocity": {
              "kilometers_per_second": "17.0142717314",
              "kilometers_per_hour": "61251.3782331156",
              "miles_per_hour": "38059.2244360156"
            },
            "miss_distance": {
              "astronomical": "0.1630577437",
              "lunar": "63.4294622993",
              "kilometers": "24393091.144525919",
              "miles": "15157163.9901749222"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1945-03-11",
            "close_approach_date_full": "1945-Mar-11 09:20",
            "epoch_date_close_approach": -782923200000,
            "relative_velocity": {
              "kilometers_per_second": "19.3668692566",
              "kilometers_per_hour": "69720.7293238388",
              "miles_per_hour": "43321.7498401375"
            },
            "miss_distance": {
              "astronomical": "0.4402308892",
              "lunar": "171.2498158988",
              "kilometers": "65857603.332526004",
              "miles": "40922017.1316826952"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1946-06-08",
            "close_approach_date_full": "1946-Jun-08 05:41",
            "epoch_date_close_approach": -743710740000,
            "relative_velocity": {
              "kilometers_per_second": "13.8501691993",
              "kilometers_per_hour": "49860.6091175272",
              "miles_per_hour": "30981.4434819435"
            },
            "miss_distance": {
              "astronomical": "0.295211106",
              "lunar": "114.837120234",
              "kilometers": "44162952.65794422",
              "miles": "27441586.298381436"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1949-05-09",
            "close_approach_date_full": "1949-May-09 12:07",
            "epoch_date_close_approach": -651585180000,
            "relative_velocity": {
              "kilometers_per_second": "13.9005262502",
              "kilometers_per_hour": "50041.8945006214",
              "miles_per_hour": "31094.0871690111"
            },
            "miss_distance": {
              "astronomical": "0.0599850678",
              "lunar": "23.3341913742",
              "kilometers": "8973638.374685586",
              "miles": "5575960.3253136468"
            },
            "orbiting_body": "Mars"
          },
          {
            "close_approach_date": "1950-11-15",
            "close_approach_date_full": "1950-Nov-15 06:35",
            "epoch_date_close_approach": -603653100000,
            "relative_velocity": {
              "kilometers_per_second": "18.3876416863",
              "kilometers_per_hour": "66195.5100707081",
              "miles_per_hour": "41131.3156881019"
            },
            "miss_distance": {
              "astronomical": "0.076093111",
              "lunar": "29.600220179",
              "kilometers": "11383367.32727357",
              "miles": "7073296.464052466"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1952-11-20",
            "close_approach_date_full": "1952-Nov-20 08:21",
            "epoch_date_close_approach": -540056340000,
            "relative_velocity": {
              "kilometers_per_second": "20.5118175739",
              "kilometers_per_hour": "73842.543265972",
              "miles_per_hour": "45882.8847310146"
            },
            "miss_distance": {
              "astronomical": "0.233719764",
              "lunar": "90.916988196",
              "kilometers": "34963978.87130268",
              "miles": "21725609.040749784"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1953-10-28",
            "close_approach_date_full": "1953-Oct-28 15:39",
            "epoch_date_close_approach": -510481260000,
            "relative_velocity": {
              "kilometers_per_second": "12.7727679904",
              "kilometers_per_hour": "45981.9647655174",
              "miles_per_hour": "28571.4047177739"
            },
            "miss_distance": {
              "astronomical": "0.4586040969",
              "lunar": "178.3969936941",
              "kilometers": "68606196.069513603",
              "miles": "42629913.4622416014"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1954-02-25",
            "close_approach_date_full": "1954-Feb-25 14:53",
            "epoch_date_close_approach": -500116020000,
            "relative_velocity": {
              "kilometers_per_second": "18.0426078171",
              "kilometers_per_hour": "64953.3881416396",
              "miles_per_hour": "40359.5094261204"
            },
            "miss_distance": {
              "astronomical": "0.4388579331",
              "lunar": "170.7157359759",
              "kilometers": "65652212.024362497",
              "miles": "40794392.8908045786"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1955-05-21",
            "close_approach_date_full": "1955-May-21 11:04",
            "epoch_date_close_approach": -461249760000,
            "relative_velocity": {
              "kilometers_per_second": "15.3278718911",
              "kilometers_per_hour": "55180.3388078153",
              "miles_per_hour": "34286.9166331117"
            },
            "miss_distance": {
              "astronomical": "0.334351671",
              "lunar": "130.062800019",
              "kilometers": "50018297.81254077",
              "miles": "31079929.065251826"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1961-11-15",
            "close_approach_date_full": "1961-Nov-15 20:54",
            "epoch_date_close_approach": -256446360000,
            "relative_velocity": {
              "kilometers_per_second": "24.3386166655",
              "kilometers_per_hour": "87619.0199959001",
              "miles_per_hour": "54443.0516191191"
            },
            "miss_distance": {
              "astronomical": "0.3405868728",
              "lunar": "132.4882935192",
              "kilometers": "50951070.720840936",
              "miles": "31659527.2741434768"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1962-11-06",
            "close_approach_date_full": "1962-Nov-06 01:48",
            "epoch_date_close_approach": -225756720000,
            "relative_velocity": {
              "kilometers_per_second": "12.2922614379",
              "kilometers_per_hour": "44252.1411765091",
              "miles_per_hour": "27496.5596104815"
            },
            "miss_distance": {
              "astronomical": "0.3948413132",
              "lunar": "153.5932708348",
              "kilometers": "59067419.442722884",
              "miles": "36702792.5106044392"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1963-02-09",
            "close_approach_date_full": "1963-Feb-09 10:37",
            "epoch_date_close_approach": -217516980000,
            "relative_velocity": {
              "kilometers_per_second": "15.4332503466",
              "kilometers_per_hour": "55559.7012478874",
              "miles_per_hour": "34522.6377003887"
            },
            "miss_distance": {
              "astronomical": "0.424179554",
              "lunar": "165.005846506",
              "kilometers": "63456357.77594998",
              "miles": "39429952.330790524"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1964-05-04",
            "close_approach_date_full": "1964-May-04 03:59",
            "epoch_date_close_approach": -178660860000,
            "relative_velocity": {
              "kilometers_per_second": "17.2215680853",
              "kilometers_per_hour": "61997.6451072298",
              "miles_per_hour": "38522.9256501006"
            },
            "miss_distance": {
              "astronomical": "0.3701436976",
              "lunar": "143.9858983664",
              "kilometers": "55372708.754884112",
              "miles": "34407005.7462282656"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1965-07-20",
            "close_approach_date_full": "1965-Jul-20 16:35",
            "epoch_date_close_approach": -140426700000,
            "relative_velocity": {
              "kilometers_per_second": "23.8282985611",
              "kilometers_per_hour": "85781.874819902",
              "miles_per_hour": "53301.5210512886"
            },
            "miss_distance": {
              "astronomical": "0.4036840557",
              "lunar": "157.0330976673",
              "kilometers": "60390274.885681359",
              "miles": "37524776.7669423942"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1969-12-15",
            "close_approach_date_full": "1969-Dec-15 22:46",
            "epoch_date_close_approach": -1386840000,
            "relative_velocity": {
              "kilometers_per_second": "20.3407825575",
              "kilometers_per_hour": "73226.8172069219",
              "miles_per_hour": "45500.2965028232"
            },
            "miss_distance": {
              "astronomical": "0.1021174688",
              "lunar": "39.7236953632",
              "kilometers": "15276555.822271456",
              "miles": "9492411.6189838528"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1970-11-10",
            "close_approach_date_full": "1970-Nov-10 23:28",
            "epoch_date_close_approach": 27127680000,
            "relative_velocity": {
              "kilometers_per_second": "28.2534198622",
              "kilometers_per_hour": "101712.3115038696",
              "miles_per_hour": "63200.0748897239"
            },
            "miss_distance": {
              "astronomical": "0.4579438747",
              "lunar": "178.1401672583",
              "kilometers": "68507428.234666889",
              "miles": "42568541.9755015082"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1971-11-15",
            "close_approach_date_full": "1971-Nov-15 08:00",
            "epoch_date_close_approach": 59040000000,
            "relative_velocity": {
              "kilometers_per_second": "11.8939005846",
              "kilometers_per_hour": "42818.0421046262",
              "miles_per_hour": "26605.4662177329"
            },
            "miss_distance": {
              "astronomical": "0.3174640675",
              "lunar": "123.4935222575",
              "kilometers": "47491948.299536225",
              "miles": "29510128.270500905"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1972-01-15",
            "close_approach_date_full": "1972-Jan-15 18:56",
            "epoch_date_close_approach": 64349760000,
            "relative_velocity": {
              "kilometers_per_second": "9.8200742133",
              "kilometers_per_hour": "35352.2671677078",
              "miles_per_hour": "21966.5240076238"
            },
            "miss_distance": {
              "astronomical": "0.3835348537",
              "lunar": "149.1950580893",
              "kilometers": "57375997.184281619",
              "miles": "35651791.4547755822"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1973-04-19",
            "close_approach_date_full": "1973-Apr-19 13:59",
            "epoch_date_close_approach": 104075940000,
            "relative_velocity": {
              "kilometers_per_second": "18.7039385479",
              "kilometers_per_hour": "67334.1787725829",
              "miles_per_hour": "41838.8401378863"
            },
            "miss_distance": {
              "astronomical": "0.3982811363",
              "lunar": "154.9313620207",
              "kilometers": "59582009.651659681",
              "miles": "37022544.0393623578"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1974-07-13",
            "close_approach_date_full": "1974-Jul-13 19:54",
            "epoch_date_close_approach": 142977240000,
            "relative_velocity": {
              "kilometers_per_second": "20.2546209146",
              "kilometers_per_hour": "72916.635292636",
              "miles_per_hour": "45307.5615239159"
            },
            "miss_distance": {
              "astronomical": "0.3217183139",
              "lunar": "125.1484241071",
              "kilometers": "48128374.499431393",
              "miles": "29905585.1735355034"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1976-08-29",
            "close_approach_date_full": "1976-Aug-29 19:37",
            "epoch_date_close_approach": 210195420000,
            "relative_velocity": {
              "kilometers_per_second": "16.4443411311",
              "kilometers_per_hour": "59199.6280718966",
              "miles_per_hour": "36784.3466761182"
            },
            "miss_distance": {
              "astronomical": "0.1475366337",
              "lunar": "57.3917505093",
              "kilometers": "22071166.148490219",
              "miles": "13714386.7001102622"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1980-11-22",
            "close_approach_date_full": "1980-Nov-22 08:09",
            "epoch_date_close_approach": 343728540000,
            "relative_velocity": {
              "kilometers_per_second": "12.1754005262",
              "kilometers_per_hour": "43831.4418942952",
              "miles_per_hour": "27235.1534370413"
            },
            "miss_distance": {
              "astronomical": "0.2358687542",
              "lunar": "91.7529453838",
              "kilometers": "35285463.227873554",
              "miles": "21925370.1568768852"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1982-04-06",
            "close_approach_date_full": "1982-Apr-06 11:44",
            "epoch_date_close_approach": 386941440000,
            "relative_velocity": {
              "kilometers_per_second": "19.5811385447",
              "kilometers_per_hour": "70492.098760753",
              "miles_per_hour": "43801.0488105356"
            },
            "miss_distance": {
              "astronomical": "0.4188403107",
              "lunar": "162.9288808623",
              "kilometers": "62657618.350858209",
              "miles": "38933638.6664089242"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1983-07-06",
            "close_approach_date_full": "1983-Jul-06 01:18",
            "epoch_date_close_approach": 426302280000,
            "relative_velocity": {
              "kilometers_per_second": "16.9890955201",
              "kilometers_per_hour": "61160.7438723665",
              "miles_per_hour": "38002.9077689157"
            },
            "miss_distance": {
              "astronomical": "0.2723666222",
              "lunar": "105.9506160358",
              "kilometers": "40745466.540214714",
              "miles": "25318058.8940984932"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1989-11-25",
            "close_approach_date_full": "1989-Nov-25 18:41",
            "epoch_date_close_approach": 628022460000,
            "relative_velocity": {
              "kilometers_per_second": "14.0471037341",
              "kilometers_per_hour": "50569.5734426682",
              "miles_per_hour": "31421.9663427512"
            },
            "miss_distance": {
              "astronomical": "0.1689301343",
              "lunar": "65.7138222427",
              "kilometers": "25271588.270093941",
              "miles": "15703036.7915447458"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1991-03-25",
            "close_approach_date_full": "1991-Mar-25 02:03",
            "epoch_date_close_approach": 669866580000,
            "relative_velocity": {
              "kilometers_per_second": "19.8224410815",
              "kilometers_per_hour": "71360.7878932762",
              "miles_per_hour": "44340.8184551304"
            },
            "miss_distance": {
              "astronomical": "0.4325541843",
              "lunar": "168.2635776927",
              "kilometers": "64709184.630867441",
              "miles": "40208422.8402790458"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1992-06-24",
            "close_approach_date_full": "1992-Jun-24 14:20",
            "epoch_date_close_approach": 709395600000,
            "relative_velocity": {
              "kilometers_per_second": "14.426311089",
              "kilometers_per_hour": "51934.7199204842",
              "miles_per_hour": "32270.2152750364"
            },
            "miss_distance": {
              "astronomical": "0.2664895059",
              "lunar": "103.6644177951",
              "kilometers": "39866262.459992433",
              "miles": "24771746.8114762554"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1995-10-06",
            "close_approach_date_full": "1995-Oct-06 06:27",
            "epoch_date_close_approach": 812960820000,
            "relative_velocity": {
              "kilometers_per_second": "16.9306165577",
              "kilometers_per_hour": "60950.2196077636",
              "miles_per_hour": "37872.0961779462"
            },
            "miss_distance": {
              "astronomical": "0.0950865359",
              "lunar": "36.9886624651",
              "kilometers": "14224743.236318533",
              "miles": "8838845.5843324354"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "1998-11-24",
            "close_approach_date_full": "1998-Nov-24 17:55",
            "epoch_date_close_approach": 911930100000,
            "relative_velocity": {
              "kilometers_per_second": "16.9096416616",
              "kilometers_per_hour": "60874.7099818903",
              "miles_per_hour": "37825.177432914"
            },
            "miss_distance": {
              "astronomical": "0.1634037724",
              "lunar": "63.5640674636",
              "kilometers": "24444856.301004788",
              "miles": "15189329.3668825544"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2000-03-11",
            "close_approach_date_full": "2000-Mar-11 19:05",
            "epoch_date_close_approach": 952801500000,
            "relative_velocity": {
              "kilometers_per_second": "19.4030916379",
              "kilometers_per_hour": "69851.12989657",
              "miles_per_hour": "43402.7756848993"
            },
            "miss_distance": {
              "astronomical": "0.43974833",
              "lunar": "171.06210037",
              "kilometers": "65785413.5040571",
              "miles": "40877160.45230398"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2001-06-08",
            "close_approach_date_full": "2001-Jun-08 15:39",
            "epoch_date_close_approach": 992014740000,
            "relative_velocity": {
              "kilometers_per_second": "13.8293661948",
              "kilometers_per_hour": "49785.7183012753",
              "miles_per_hour": "30934.9092411452"
            },
            "miss_distance": {
              "astronomical": "0.2948873278",
              "lunar": "114.7111705142",
              "kilometers": "44114516.128871786",
              "miles": "27411489.2348352068"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2007-11-21",
            "close_approach_date_full": "2007-Nov-21 10:00",
            "epoch_date_close_approach": 1195639200000,
            "relative_velocity": {
              "kilometers_per_second": "20.4767403526",
              "kilometers_per_hour": "73716.2652692459",
              "miles_per_hour": "45804.42049466"
            },
            "miss_distance": {
              "astronomical": "0.2340881088",
              "lunar": "91.0602743232",
              "kilometers": "35019082.468808256",
              "miles": "21759848.8285196928"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2008-10-28",
            "close_approach_date_full": "2008-Oct-28 14:08",
            "epoch_date_close_approach": 1225202880000,
            "relative_velocity": {
              "kilometers_per_second": "12.7924031989",
              "kilometers_per_hour": "46052.6515161635",
              "miles_per_hour": "28615.3267156961"
            },
            "miss_distance": {
              "astronomical": "0.4588266032",
              "lunar": "178.4835486448",
              "kilometers": "68639482.538055184",
              "miles": "42650596.7146981792"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2009-02-25",
            "close_approach_date_full": "2009-Feb-25 19:47",
            "epoch_date_close_approach": 1235591220000,
            "relative_velocity": {
              "kilometers_per_second": "18.0632502314",
              "kilometers_per_hour": "65027.7008330209",
              "miles_per_hour": "40405.6844426068"
            },
            "miss_distance": {
              "astronomical": "0.4386789672",
              "lunar": "170.6461182408",
              "kilometers": "65625439.106919864",
              "miles": "40777756.9713235632"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2010-05-21",
            "close_approach_date_full": "2010-May-21 14:08",
            "epoch_date_close_approach": 1274450880000,
            "relative_velocity": {
              "kilometers_per_second": "15.3413436113",
              "kilometers_per_hour": "55228.8370007675",
              "miles_per_hour": "34317.0515241713"
            },
            "miss_distance": {
              "astronomical": "0.3345998663",
              "lunar": "130.1593479907",
              "kilometers": "50055427.300764781",
              "miles": "31103000.2594087378"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2014-11-08",
            "close_approach_date_full": "2014-Nov-08 00:29",
            "epoch_date_close_approach": 1415406540000,
            "relative_velocity": {
              "kilometers_per_second": "18.386794983",
              "kilometers_per_hour": "66192.461938714",
              "miles_per_hour": "41129.4216974192"
            },
            "miss_distance": {
              "astronomical": "0.0768519185",
              "lunar": "29.8953962965",
              "kilometers": "11496883.313013595",
              "miles": "7143832.026813811"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2016-11-16",
            "close_approach_date_full": "2016-Nov-16 01:42",
            "epoch_date_close_approach": 1479260520000,
            "relative_velocity": {
              "kilometers_per_second": "24.2562113411",
              "kilometers_per_hour": "87322.360827803",
              "miles_per_hour": "54258.7191488091"
            },
            "miss_distance": {
              "astronomical": "0.3387578794",
              "lunar": "131.7768150866",
              "kilometers": "50677457.203956878",
              "miles": "31489511.7184777964"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2017-11-05",
            "close_approach_date_full": "2017-Nov-05 22:35",
            "epoch_date_close_approach": 1509921300000,
            "relative_velocity": {
              "kilometers_per_second": "12.3019475155",
              "kilometers_per_hour": "44287.01105566",
              "miles_per_hour": "27518.2263973349"
            },
            "miss_distance": {
              "astronomical": "0.3968270576",
              "lunar": "154.3657254064",
              "kilometers": "59364482.575327312",
              "miles": "36887378.9818164256"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2018-02-10",
            "close_approach_date_full": "2018-Feb-10 01:58",
            "epoch_date_close_approach": 1518227880000,
            "relative_velocity": {
              "kilometers_per_second": "15.5287357516",
              "kilometers_per_hour": "55903.4487059382",
              "miles_per_hour": "34736.2290028648"
            },
            "miss_distance": {
              "astronomical": "0.4246190597",
              "lunar": "165.1768142233",
              "kilometers": "63522106.892522839",
              "miles": "39470806.9373756182"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2018-12-11",
            "close_approach_date_full": "2018-Dec-11 17:52",
            "epoch_date_close_approach": 1544550720000,
            "relative_velocity": {
              "kilometers_per_second": "13.8248087203",
              "kilometers_per_hour": "49769.3113929094",
              "miles_per_hour": "30924.714626333"
            },
            "miss_distance": {
              "astronomical": "0.0550422478",
              "lunar": "21.4114343942",
              "kilometers": "8234203.030892186",
              "miles": "5116496.5083007268"
            },
            "orbiting_body": "Mars"
          },
          {
            "close_approach_date": "2019-05-05",
            "close_approach_date_full": "2019-May-05 18:25",
            "epoch_date_close_approach": 1557080700000,
            "relative_velocity": {
              "kilometers_per_second": "17.1548957356",
              "kilometers_per_hour": "61757.6246480653",
              "miles_per_hour": "38373.7862709048"
            },
            "miss_distance": {
              "astronomical": "0.3690093058",
              "lunar": "143.5446199562",
              "kilometers": "55203006.157858646",
              "miles": "34301557.4421394748"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2020-07-21",
            "close_approach_date_full": "2020-Jul-21 01:08",
            "epoch_date_close_approach": 1595293680000,
            "relative_velocity": {
              "kilometers_per_second": "23.9773966209",
              "kilometers_per_hour": "86318.6278353732",
              "miles_per_hour": "53635.038501374"
            },
            "miss_distance": {
              "astronomical": "0.4076926224",
              "lunar": "158.5924301136",
              "kilometers": "60989947.925754288",
              "miles": "37897396.3154456544"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2025-11-11",
            "close_approach_date_full": "2025-Nov-11 05:42",
            "epoch_date_close_approach": 1762839720000,
            "relative_velocity": {
              "kilometers_per_second": "28.1075533784",
              "kilometers_per_hour": "101187.1921622339",
              "miles_per_hour": "62873.7861521392"
            },
            "miss_distance": {
              "astronomical": "0.4537672617",
              "lunar": "176.5154648013",
              "kilometers": "67882615.826052579",
              "miles": "42180301.5477364302"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2026-11-14",
            "close_approach_date_full": "2026-Nov-14 23:14",
            "epoch_date_close_approach": 1794698040000,
            "relative_velocity": {
              "kilometers_per_second": "11.8977217549",
              "kilometers_per_hour": "42831.7983174931",
              "miles_per_hour": "26614.0137934445"
            },
            "miss_distance": {
              "astronomical": "0.3207414173",
              "lunar": "124.7684113297",
              "kilometers": "47982232.848861151",
              "miles": "29814776.9627038438"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2027-01-17",
            "close_approach_date_full": "2027-Jan-17 19:35",
            "epoch_date_close_approach": 1800214500000,
            "relative_velocity": {
              "kilometers_per_second": "10.3445541138",
              "kilometers_per_hour": "37240.3948095151",
              "miles_per_hour": "23139.7330970568"
            },
            "miss_distance": {
              "astronomical": "0.3860964028",
              "lunar": "150.1915006892",
              "kilometers": "57759199.473542036",
              "miles": "35889902.3159746568"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2028-04-20",
            "close_approach_date_full": "2028-Apr-20 02:09",
            "epoch_date_close_approach": 1839809340000,
            "relative_velocity": {
              "kilometers_per_second": "18.670018638",
              "kilometers_per_hour": "67212.0670967201",
              "miles_per_hour": "41762.9646912925"
            },
            "miss_distance": {
              "astronomical": "0.3975939307",
              "lunar": "154.6640390423",
              "kilometers": "59479205.157647609",
              "miles": "36958664.2889266442"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2029-07-14",
            "close_approach_date_full": "2029-Jul-14 03:35",
            "epoch_date_close_approach": 1878694500000,
            "relative_velocity": {
              "kilometers_per_second": "20.3409342913",
              "kilometers_per_hour": "73227.3634485576",
              "miles_per_hour": "45500.6359161329"
            },
            "miss_distance": {
              "astronomical": "0.3239549205",
              "lunar": "126.0184640745",
              "kilometers": "48462966.082819335",
              "miles": "30113490.742743423"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2033-12-08",
            "close_approach_date_full": "2033-Dec-08 22:34",
            "epoch_date_close_approach": 2017694040000,
            "relative_velocity": {
              "kilometers_per_second": "20.4408666675",
              "kilometers_per_hour": "73587.1200031544",
              "miles_per_hour": "45724.1746486267"
            },
            "miss_distance": {
              "astronomical": "0.1048128123",
              "lunar": "40.7721839847",
              "kilometers": "15679773.468789801",
              "miles": "9742959.4464732138"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2035-11-23",
            "close_approach_date_full": "2035-Nov-23 07:56",
            "epoch_date_close_approach": 2079417360000,
            "relative_velocity": {
              "kilometers_per_second": "12.1818923569",
              "kilometers_per_hour": "43854.812484854",
              "miles_per_hour": "27249.6750131583"
            },
            "miss_distance": {
              "astronomical": "0.2371875385",
              "lunar": "92.2659524765",
              "kilometers": "35482750.550142995",
              "miles": "22047958.814423531"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2037-04-06",
            "close_approach_date_full": "2037-Apr-06 18:08",
            "epoch_date_close_approach": 2122654080000,
            "relative_velocity": {
              "kilometers_per_second": "19.5701004103",
              "kilometers_per_hour": "70452.3614770148",
              "miles_per_hour": "43776.3576077596"
            },
            "miss_distance": {
              "astronomical": "0.4182545395",
              "lunar": "162.7010158655",
              "kilometers": "62569988.227030865",
              "miles": "38879187.832381337"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2038-07-06",
            "close_approach_date_full": "2038-Jul-06 08:43",
            "epoch_date_close_approach": 2162018580000,
            "relative_velocity": {
              "kilometers_per_second": "17.0548480653",
              "kilometers_per_hour": "61397.4530349763",
              "miles_per_hour": "38149.9896372051"
            },
            "miss_distance": {
              "astronomical": "0.2736085713",
              "lunar": "106.4337342357",
              "kilometers": "40931259.480223131",
              "miles": "25433505.2736999678"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2040-08-23",
            "close_approach_date_full": "2040-Aug-23 12:20",
            "epoch_date_close_approach": 2229337200000,
            "relative_velocity": {
              "kilometers_per_second": "16.4759420011",
              "kilometers_per_hour": "59313.3912040633",
              "miles_per_hour": "36855.0346623248"
            },
            "miss_distance": {
              "astronomical": "0.1430765549",
              "lunar": "55.6567798561",
              "kilometers": "21403947.859978063",
              "miles": "13299796.4804327494"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2044-11-25",
            "close_approach_date_full": "2044-Nov-25 18:55",
            "epoch_date_close_approach": 2363712900000,
            "relative_velocity": {
              "kilometers_per_second": "13.9708748011",
              "kilometers_per_hour": "50295.1492838743",
              "miles_per_hour": "31251.4498425274"
            },
            "miss_distance": {
              "astronomical": "0.1709271452",
              "lunar": "66.4906594828",
              "kilometers": "25570336.847100724",
              "miles": "15888670.5493450312"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2046-03-25",
            "close_approach_date_full": "2046-Mar-25 09:13",
            "epoch_date_close_approach": 2405581980000,
            "relative_velocity": {
              "kilometers_per_second": "19.8470059333",
              "kilometers_per_hour": "71449.2213598868",
              "miles_per_hour": "44395.767572203"
            },
            "miss_distance": {
              "astronomical": "0.4321797377",
              "lunar": "168.1179179653",
              "kilometers": "64653168.217078699",
              "miles": "40173615.8547720862"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2047-06-25",
            "close_approach_date_full": "2047-Jun-25 23:32",
            "epoch_date_close_approach": 2445118320000,
            "relative_velocity": {
              "kilometers_per_second": "14.4526386109",
              "kilometers_per_hour": "52029.4989992364",
              "miles_per_hour": "32329.10730872"
            },
            "miss_distance": {
              "astronomical": "0.2669709109",
              "lunar": "103.8516843401",
              "kilometers": "39938279.622599783",
              "miles": "24816496.2012636854"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2053-11-24",
            "close_approach_date_full": "2053-Nov-24 20:48",
            "epoch_date_close_approach": 2647630080000,
            "relative_velocity": {
              "kilometers_per_second": "16.8758109101",
              "kilometers_per_hour": "60752.9192761832",
              "miles_per_hour": "37749.5014246929"
            },
            "miss_distance": {
              "astronomical": "0.1644803791",
              "lunar": "63.9828674699",
              "kilometers": "24605914.370152517",
              "miles": "15289406.2104260546"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2055-03-13",
            "close_approach_date_full": "2055-Mar-13 00:47",
            "epoch_date_close_approach": 2688511620000,
            "relative_velocity": {
              "kilometers_per_second": "19.4345585448",
              "kilometers_per_hour": "69964.4107612476",
              "miles_per_hour": "43473.164008843"
            },
            "miss_distance": {
              "astronomical": "0.4392600844",
              "lunar": "170.8721728316",
              "kilometers": "65712373.002260228",
              "miles": "40831775.1890300264"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2056-06-09",
            "close_approach_date_full": "2056-Jun-09 01:44",
            "epoch_date_close_approach": 2727740640000,
            "relative_velocity": {
              "kilometers_per_second": "13.8004627127",
              "kilometers_per_hour": "49681.6657657524",
              "miles_per_hour": "30870.2550420588"
            },
            "miss_distance": {
              "astronomical": "0.2948178761",
              "lunar": "114.6841538029",
              "kilometers": "44104126.302483907",
              "miles": "27405033.2960836366"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2059-09-29",
            "close_approach_date_full": "2059-Sep-29 23:05",
            "epoch_date_close_approach": 2832102300000,
            "relative_velocity": {
              "kilometers_per_second": "17.0756331048",
              "kilometers_per_hour": "61472.2791772411",
              "miles_per_hour": "38196.483692103"
            },
            "miss_distance": {
              "astronomical": "0.0912623701",
              "lunar": "35.5010619689",
              "kilometers": "13652656.178111687",
              "miles": "8483367.1701158006"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2062-11-21",
            "close_approach_date_full": "2062-Nov-21 15:35",
            "epoch_date_close_approach": 2931348900000,
            "relative_velocity": {
              "kilometers_per_second": "20.3421573387",
              "kilometers_per_hour": "73231.7664192358",
              "miles_per_hour": "45503.3717508857"
            },
            "miss_distance": {
              "astronomical": "0.2312650238",
              "lunar": "89.9620942582",
              "kilometers": "34596754.965979306",
              "miles": "21497426.6869381828"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2063-10-29",
            "close_approach_date_full": "2063-Oct-29 07:30",
            "epoch_date_close_approach": 2960868600000,
            "relative_velocity": {
              "kilometers_per_second": "12.8022325051",
              "kilometers_per_hour": "46088.0370182768",
              "miles_per_hour": "28637.3138906065"
            },
            "miss_distance": {
              "astronomical": "0.4609237379",
              "lunar": "179.2993340431",
              "kilometers": "68953209.422278273",
              "miles": "42845537.5610272474"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2064-02-27",
            "close_approach_date_full": "2064-Feb-27 12:16",
            "epoch_date_close_approach": 2971340160000,
            "relative_velocity": {
              "kilometers_per_second": "18.1708531172",
              "kilometers_per_hour": "65415.071222095",
              "miles_per_hour": "40646.3813379734"
            },
            "miss_distance": {
              "astronomical": "0.4386757163",
              "lunar": "170.6448536407",
              "kilometers": "65624952.779204281",
              "miles": "40777454.7812938378"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2065-05-22",
            "close_approach_date_full": "2065-May-22 06:54",
            "epoch_date_close_approach": 3010200840000,
            "relative_velocity": {
              "kilometers_per_second": "15.2831244095",
              "kilometers_per_hour": "55019.2478741723",
              "miles_per_hour": "34186.8209915933"
            },
            "miss_distance": {
              "astronomical": "0.3334158313",
              "lunar": "129.6987583757",
              "kilometers": "49878298.186759331",
              "miles": "30992937.3316515278"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2071-11-17",
            "close_approach_date_full": "2071-Nov-17 05:46",
            "epoch_date_close_approach": 3214964760000,
            "relative_velocity": {
              "kilometers_per_second": "24.203623748",
              "kilometers_per_hour": "87133.045492886",
              "miles_per_hour": "54141.0859619547"
            },
            "miss_distance": {
              "astronomical": "0.337956435",
              "lunar": "131.465053215",
              "kilometers": "50557562.82879345",
              "miles": "31415012.80831161"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2072-11-05",
            "close_approach_date_full": "2072-Nov-05 20:52",
            "epoch_date_close_approach": 3245604720000,
            "relative_velocity": {
              "kilometers_per_second": "12.3285053581",
              "kilometers_per_hour": "44382.6192890639",
              "miles_per_hour": "27577.6336354742"
            },
            "miss_distance": {
              "astronomical": "0.397403361",
              "lunar": "154.589907429",
              "kilometers": "59450696.33644107",
              "miles": "36940949.728863966"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2073-02-10",
            "close_approach_date_full": "2073-Feb-10 09:43",
            "epoch_date_close_approach": 3253945380000,
            "relative_velocity": {
              "kilometers_per_second": "15.5815851988",
              "kilometers_per_hour": "56093.7067156922",
              "miles_per_hour": "34854.4479312033"
            },
            "miss_distance": {
              "astronomical": "0.4246662873",
              "lunar": "165.1951857597",
              "kilometers": "63529172.040888051",
              "miles": "39475197.0169990638"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2074-05-05",
            "close_approach_date_full": "2074-May-05 21:07",
            "epoch_date_close_approach": 3292780020000,
            "relative_velocity": {
              "kilometers_per_second": "17.1739033661",
              "kilometers_per_hour": "61826.0521180403",
              "miles_per_hour": "38416.304439679"
            },
            "miss_distance": {
              "astronomical": "0.3690029776",
              "lunar": "143.5421582864",
              "kilometers": "55202059.472617712",
              "miles": "34300969.1992079456"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2075-07-22",
            "close_approach_date_full": "2075-Jul-22 05:16",
            "epoch_date_close_approach": 3330998160000,
            "relative_velocity": {
              "kilometers_per_second": "23.9776055205",
              "kilometers_per_hour": "86319.379873813",
              "miles_per_hour": "53635.5057888145"
            },
            "miss_distance": {
              "astronomical": "0.4082789792",
              "lunar": "158.8205229088",
              "kilometers": "61077665.654094304",
              "miles": "37951901.5843932352"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2078-10-31",
            "close_approach_date_full": "2078-Oct-31 15:30",
            "epoch_date_close_approach": 3434455800000,
            "relative_velocity": {
              "kilometers_per_second": "18.3496249283",
              "kilometers_per_hour": "66058.6497417914",
              "miles_per_hour": "41046.2760020592"
            },
            "miss_distance": {
              "astronomical": "0.077524542",
              "lunar": "30.157046838",
              "kilometers": "11597506.35592554",
              "miles": "7206356.286390852"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2080-11-11",
            "close_approach_date_full": "2080-Nov-11 08:14",
            "epoch_date_close_approach": 3498538440000,
            "relative_velocity": {
              "kilometers_per_second": "28.0879035895",
              "kilometers_per_hour": "101116.4529223339",
              "miles_per_hour": "62829.8315394358"
            },
            "miss_distance": {
              "astronomical": "0.4538215241",
              "lunar": "176.5365728749",
              "kilometers": "67890733.365513667",
              "miles": "42185345.5528639246"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2081-11-14",
            "close_approach_date_full": "2081-Nov-14 22:33",
            "epoch_date_close_approach": 3530385180000,
            "relative_velocity": {
              "kilometers_per_second": "11.8913223656",
              "kilometers_per_hour": "42808.7605162954",
              "miles_per_hour": "26599.6989996947"
            },
            "miss_distance": {
              "astronomical": "0.3220744913",
              "lunar": "125.2869771157",
              "kilometers": "48181657.879813531",
              "miles": "29938693.9308314878"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2082-01-18",
            "close_approach_date_full": "2082-Jan-18 10:27",
            "epoch_date_close_approach": 3535957620000,
            "relative_velocity": {
              "kilometers_per_second": "10.4962515333",
              "kilometers_per_hour": "37786.5055199113",
              "miles_per_hour": "23479.0650548582"
            },
            "miss_distance": {
              "astronomical": "0.3869762897",
              "lunar": "150.5337766933",
              "kilometers": "57890828.679622939",
              "miles": "35971692.9119529982"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2083-04-21",
            "close_approach_date_full": "2083-Apr-21 09:47",
            "epoch_date_close_approach": 3575526420000,
            "relative_velocity": {
              "kilometers_per_second": "18.6529881765",
              "kilometers_per_hour": "67150.7574352362",
              "miles_per_hour": "41724.8692519111"
            },
            "miss_distance": {
              "astronomical": "0.3969438156",
              "lunar": "154.4111442684",
              "kilometers": "59381949.323432772",
              "miles": "36898232.3158133736"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2084-07-14",
            "close_approach_date_full": "2084-Jul-14 10:17",
            "epoch_date_close_approach": 3614408220000,
            "relative_velocity": {
              "kilometers_per_second": "20.4061389595",
              "kilometers_per_hour": "73462.1002540218",
              "miles_per_hour": "45646.4922383948"
            },
            "miss_distance": {
              "astronomical": "0.3260796461",
              "lunar": "126.8449823329",
              "kilometers": "48780820.506913807",
              "miles": "30310996.3234202566"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2088-07-14",
            "close_approach_date_full": "2088-Jul-14 22:18",
            "epoch_date_close_approach": 3740681880000,
            "relative_velocity": {
              "kilometers_per_second": "13.7648724724",
              "kilometers_per_hour": "49553.5409008171",
              "miles_per_hour": "30790.6432336216"
            },
            "miss_distance": {
              "astronomical": "0.0507034833",
              "lunar": "19.7236550037",
              "kilometers": "7585133.103260571",
              "miles": "4713183.1571590398"
            },
            "orbiting_body": "Mars"
          },
          {
            "close_approach_date": "2090-11-23",
            "close_approach_date_full": "2090-Nov-23 04:42",
            "epoch_date_close_approach": 3815095320000,
            "relative_velocity": {
              "kilometers_per_second": "12.1647823315",
              "kilometers_per_hour": "43793.216393233",
              "miles_per_hour": "27211.4015972286"
            },
            "miss_distance": {
              "astronomical": "0.2388895162",
              "lunar": "92.9280218018",
              "kilometers": "35737362.788850494",
              "miles": "22206167.5233210572"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2092-04-06",
            "close_approach_date_full": "2092-Apr-06 22:42",
            "epoch_date_close_approach": 3858360120000,
            "relative_velocity": {
              "kilometers_per_second": "19.5629628902",
              "kilometers_per_hour": "70426.6664048168",
              "miles_per_hour": "43760.3916891486"
            },
            "miss_distance": {
              "astronomical": "0.41792292",
              "lunar": "162.57201588",
              "kilometers": "62520378.6561804",
              "miles": "38848361.87447352"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2093-07-06",
            "close_approach_date_full": "2093-Jul-06 11:53",
            "epoch_date_close_approach": 3897719580000,
            "relative_velocity": {
              "kilometers_per_second": "17.0355758117",
              "kilometers_per_hour": "61328.0729220289",
              "miles_per_hour": "38106.8795331351"
            },
            "miss_distance": {
              "astronomical": "0.2742657971",
              "lunar": "106.6893950719",
              "kilometers": "41029579.060012177",
              "miles": "25494598.2276629626"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2097-12-02",
            "close_approach_date_full": "2097-Dec-02 03:45",
            "epoch_date_close_approach": 4036794300000,
            "relative_velocity": {
              "kilometers_per_second": "20.6501129751",
              "kilometers_per_hour": "74340.4067104424",
              "miles_per_hour": "46192.2377140524"
            },
            "miss_distance": {
              "astronomical": "0.1097129152",
              "lunar": "42.6783240128",
              "kilometers": "16412818.425410624",
              "miles": "10198452.4610256512"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2099-11-26",
            "close_approach_date_full": "2099-Nov-26 21:06",
            "epoch_date_close_approach": 4099410360000,
            "relative_velocity": {
              "kilometers_per_second": "13.9945719766",
              "kilometers_per_hour": "50380.4591157028",
              "miles_per_hour": "31304.458054421"
            },
            "miss_distance": {
              "astronomical": "0.1716848656",
              "lunar": "66.7854127184",
              "kilometers": "25683690.204996272",
              "miles": "15959105.0598496736"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2101-03-26",
            "close_approach_date_full": "2101-Mar-26 09:17",
            "epoch_date_close_approach": 4141271820000,
            "relative_velocity": {
              "kilometers_per_second": "19.8371585771",
              "kilometers_per_hour": "71413.7708776108",
              "miles_per_hour": "44373.7400211465"
            },
            "miss_distance": {
              "astronomical": "0.4319150431",
              "lunar": "168.0149517659",
              "kilometers": "64613570.468718197",
              "miles": "40149010.9548852386"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2102-06-27",
            "close_approach_date_full": "2102-Jun-27 00:10",
            "epoch_date_close_approach": 4180810200000,
            "relative_velocity": {
              "kilometers_per_second": "14.4349658877",
              "kilometers_per_hour": "51965.8771957564",
              "miles_per_hour": "32289.5751942187"
            },
            "miss_distance": {
              "astronomical": "0.2675910651",
              "lunar": "104.0929243239",
              "kilometers": "40031053.369991337",
              "miles": "24874143.1347689706"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2104-08-18",
            "close_approach_date_full": "2104-Aug-18 05:47",
            "epoch_date_close_approach": 4248481620000,
            "relative_velocity": {
              "kilometers_per_second": "16.5062382948",
              "kilometers_per_hour": "59422.4578614089",
              "miles_per_hour": "36922.8044417182"
            },
            "miss_distance": {
              "astronomical": "0.1383522853",
              "lunar": "53.8190389817",
              "kilometers": "20697207.190512311",
              "miles": "12860648.1920034518"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2108-11-25",
            "close_approach_date_full": "2108-Nov-25 21:13",
            "epoch_date_close_approach": 4383321180000,
            "relative_velocity": {
              "kilometers_per_second": "16.9238711252",
              "kilometers_per_hour": "60925.9360507178",
              "miles_per_hour": "37857.0073199585"
            },
            "miss_distance": {
              "astronomical": "0.1661367997",
              "lunar": "64.6272150833",
              "kilometers": "24853711.363736639",
              "miles": "15443380.1223740582"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2110-03-13",
            "close_approach_date_full": "2110-Mar-13 21:23",
            "epoch_date_close_approach": 4424188980000,
            "relative_velocity": {
              "kilometers_per_second": "19.4247024375",
              "kilometers_per_hour": "69928.9287749118",
              "miles_per_hour": "43451.1168823889"
            },
            "miss_distance": {
              "astronomical": "0.4391285597",
              "lunar": "170.8210097233",
              "kilometers": "65692697.187287839",
              "miles": "40819549.2045326182"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2111-06-10",
            "close_approach_date_full": "2111-Jun-10 19:30",
            "epoch_date_close_approach": 4463407800000,
            "relative_velocity": {
              "kilometers_per_second": "13.8146657811",
              "kilometers_per_hour": "49732.7968121245",
              "miles_per_hour": "30902.0258858448"
            },
            "miss_distance": {
              "astronomical": "0.2962158061",
              "lunar": "115.2279485729",
              "kilometers": "44313253.652893007",
              "miles": "27534979.0059652166"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2117-11-22",
            "close_approach_date_full": "2117-Nov-22 15:16",
            "epoch_date_close_approach": 4667037360000,
            "relative_velocity": {
              "kilometers_per_second": "20.4360823817",
              "kilometers_per_hour": "73569.896574057",
              "miles_per_hour": "45713.4726795856"
            },
            "miss_distance": {
              "astronomical": "0.2347917243",
              "lunar": "91.3339807527",
              "kilometers": "35124341.848907241",
              "miles": "21825253.9744362858"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2118-10-30",
            "close_approach_date_full": "2118-Oct-30 15:05",
            "epoch_date_close_approach": 4696585500000,
            "relative_velocity": {
              "kilometers_per_second": "12.783096307",
              "kilometers_per_hour": "46019.1467053364",
              "miles_per_hour": "28594.5081292131"
            },
            "miss_distance": {
              "astronomical": "0.4591624533",
              "lunar": "178.6141943337",
              "kilometers": "68689724.997654471",
              "miles": "42681815.9314388598"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2119-02-28",
            "close_approach_date_full": "2119-Feb-28 05:14",
            "epoch_date_close_approach": 4707004440000,
            "relative_velocity": {
              "kilometers_per_second": "18.1329504867",
              "kilometers_per_hour": "65278.6217520077",
              "miles_per_hour": "40561.5969436294"
            },
            "miss_distance": {
              "astronomical": "0.4380633614",
              "lunar": "170.4066475846",
              "kilometers": "65533345.790480218",
              "miles": "40720532.8380062884"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2120-05-22",
            "close_approach_date_full": "2120-May-22 23:14",
            "epoch_date_close_approach": 4745862840000,
            "relative_velocity": {
              "kilometers_per_second": "15.3140321304",
              "kilometers_per_hour": "55130.5156694072",
              "miles_per_hour": "34255.9584724714"
            },
            "miss_distance": {
              "astronomical": "0.3344973096",
              "lunar": "130.1194534344",
              "kilometers": "50040085.036890552",
              "miles": "31093467.0186995376"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2123-09-23",
            "close_approach_date_full": "2123-Sep-23 03:23",
            "epoch_date_close_approach": 4851112980000,
            "relative_velocity": {
              "kilometers_per_second": "17.0231178674",
              "kilometers_per_hour": "61283.2243225003",
              "miles_per_hour": "38079.0123575003"
            },
            "miss_distance": {
              "astronomical": "0.0942799331",
              "lunar": "36.6748939759",
              "kilometers": "14104077.175502497",
              "miles": "8763867.1709365786"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2126-11-18",
            "close_approach_date_full": "2126-Nov-18 05:31",
            "epoch_date_close_approach": 4950653460000,
            "relative_velocity": {
              "kilometers_per_second": "24.2409060955",
              "kilometers_per_hour": "87267.2619439292",
              "miles_per_hour": "54224.4828451043"
            },
            "miss_distance": {
              "astronomical": "0.3403273414",
              "lunar": "132.3873358046",
              "kilometers": "50912245.376202818",
              "miles": "31635402.3236741684"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2127-11-07",
            "close_approach_date_full": "2127-Nov-07 23:33",
            "epoch_date_close_approach": 4981303980000,
            "relative_velocity": {
              "kilometers_per_second": "12.32386287",
              "kilometers_per_hour": "44365.9063319273",
              "miles_per_hour": "27567.2488538578"
            },
            "miss_distance": {
              "astronomical": "0.3962371667",
              "lunar": "154.1362578463",
              "kilometers": "59276236.153154929",
              "miles": "36832545.1977548602"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2128-02-12",
            "close_approach_date_full": "2128-Feb-12 04:28",
            "epoch_date_close_approach": 4989616080000,
            "relative_velocity": {
              "kilometers_per_second": "15.5635498181",
              "kilometers_per_hour": "56028.7793451031",
              "miles_per_hour": "34814.1045880725"
            },
            "miss_distance": {
              "astronomical": "0.4241090508",
              "lunar": "164.9784207612",
              "kilometers": "63445810.647401796",
              "miles": "39423398.6490089448"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2129-05-06",
            "close_approach_date_full": "2129-May-06 15:05",
            "epoch_date_close_approach": 5028447900000,
            "relative_velocity": {
              "kilometers_per_second": "17.227517829",
              "kilometers_per_hour": "62019.0641842769",
              "miles_per_hour": "38536.2346316136"
            },
            "miss_distance": {
              "astronomical": "0.3698351456",
              "lunar": "143.8658716384",
              "kilometers": "55326550.032899872",
              "miles": "34378324.0463753536"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2130-07-23",
            "close_approach_date_full": "2130-Jul-23 05:28",
            "epoch_date_close_approach": 5066688480000,
            "relative_velocity": {
              "kilometers_per_second": "23.887185424",
              "kilometers_per_hour": "85993.8675264853",
              "miles_per_hour": "53433.2450749986"
            },
            "miss_distance": {
              "astronomical": "0.4071900769",
              "lunar": "158.3969399141",
              "kilometers": "60914768.189376203",
              "miles": "37850681.7934414814"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2135-11-13",
            "close_approach_date_full": "2135-Nov-13 05:16",
            "epoch_date_close_approach": 5234217360000,
            "relative_velocity": {
              "kilometers_per_second": "28.212778443",
              "kilometers_per_hour": "101566.0023949775",
              "miles_per_hour": "63109.164099257"
            },
            "miss_distance": {
              "astronomical": "0.4588826731",
              "lunar": "178.5053598359",
              "kilometers": "68647870.475666297",
              "miles": "42655808.7374450186"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2136-11-16",
            "close_approach_date_full": "2136-Nov-16 09:34",
            "epoch_date_close_approach": 5266114440000,
            "relative_velocity": {
              "kilometers_per_second": "11.8977969636",
              "kilometers_per_hour": "42832.0690691062",
              "miles_per_hour": "26614.1820279677"
            },
            "miss_distance": {
              "astronomical": "0.318510353",
              "lunar": "123.900527317",
              "kilometers": "47648470.38174811",
              "miles": "29607386.582459518"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2137-01-17",
            "close_approach_date_full": "2137-Jan-17 15:38",
            "epoch_date_close_approach": 5271493080000,
            "relative_velocity": {
              "kilometers_per_second": "10.0235333509",
              "kilometers_per_hour": "36084.7200633073",
              "miles_per_hour": "22421.64175267"
            },
            "miss_distance": {
              "astronomical": "0.3842208424",
              "lunar": "149.4619076936",
              "kilometers": "57478619.632645688",
              "miles": "35715558.0872909744"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2138-04-21",
            "close_approach_date_full": "2138-Apr-21 16:54",
            "epoch_date_close_approach": 5311155240000,
            "relative_velocity": {
              "kilometers_per_second": "18.736954765",
              "kilometers_per_hour": "67453.0371538693",
              "miles_per_hour": "41912.6941137473"
            },
            "miss_distance": {
              "astronomical": "0.3980575068",
              "lunar": "154.8443701452",
              "kilometers": "59548555.154790516",
              "miles": "37001756.3789444808"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2139-07-16",
            "close_approach_date_full": "2139-Jul-16 02:00",
            "epoch_date_close_approach": 5350068000000,
            "relative_velocity": {
              "kilometers_per_second": "20.1677787509",
              "kilometers_per_hour": "72604.0035033509",
              "miles_per_hour": "45113.3042879571"
            },
            "miss_distance": {
              "astronomical": "0.3223995057",
              "lunar": "125.4134077173",
              "kilometers": "48230279.341772859",
              "miles": "29968905.9063450942"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2142-10-24",
            "close_approach_date_full": "2142-Oct-24 13:36",
            "epoch_date_close_approach": 5453444160000,
            "relative_velocity": {
              "kilometers_per_second": "18.1221015466",
              "kilometers_per_hour": "65239.5655675994",
              "miles_per_hour": "40537.3289494898"
            },
            "miss_distance": {
              "astronomical": "0.0781059168",
              "lunar": "30.3832016352",
              "kilometers": "11684478.787677216",
              "miles": "7260398.4495129408"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2145-11-24",
            "close_approach_date_full": "2145-Nov-24 15:54",
            "epoch_date_close_approach": 5550825240000,
            "relative_velocity": {
              "kilometers_per_second": "12.2211493972",
              "kilometers_per_hour": "43996.1378297857",
              "miles_per_hour": "27337.4890865132"
            },
            "miss_distance": {
              "astronomical": "0.2340155315",
              "lunar": "91.0320417535",
              "kilometers": "35008225.059317905",
              "miles": "21753102.347100889"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2147-04-08",
            "close_approach_date_full": "2147-Apr-08 02:39",
            "epoch_date_close_approach": 5593977540000,
            "relative_velocity": {
              "kilometers_per_second": "19.6280295506",
              "kilometers_per_hour": "70660.9063820902",
              "miles_per_hour": "43905.9393016937"
            },
            "miss_distance": {
              "astronomical": "0.4189360791",
              "lunar": "162.9661347699",
              "kilometers": "62671945.099511517",
              "miles": "38942540.8952202546"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2148-07-06",
            "close_approach_date_full": "2148-Jul-06 23:49",
            "epoch_date_close_approach": 5633365740000,
            "relative_velocity": {
              "kilometers_per_second": "16.7982976861",
              "kilometers_per_hour": "60473.871669839",
              "miles_per_hour": "37576.1120939619"
            },
            "miss_distance": {
              "astronomical": "0.2729986132",
              "lunar": "106.1964605348",
              "kilometers": "40840011.047673884",
              "miles": "25376806.1268882392"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2154-11-27",
            "close_approach_date_full": "2154-Nov-27 22:50",
            "epoch_date_close_approach": 5835106200000,
            "relative_velocity": {
              "kilometers_per_second": "14.2406647165",
              "kilometers_per_hour": "51266.3929793226",
              "miles_per_hour": "31854.9429042908"
            },
            "miss_distance": {
              "astronomical": "0.1689727872",
              "lunar": "65.7304142208",
              "kilometers": "25277969.053083264",
              "miles": "15707001.6262424832"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2156-03-25",
            "close_approach_date_full": "2156-Mar-25 05:36",
            "epoch_date_close_approach": 5876861760000,
            "relative_velocity": {
              "kilometers_per_second": "19.8305796903",
              "kilometers_per_hour": "71390.0868850267",
              "miles_per_hour": "44359.023709199"
            },
            "miss_distance": {
              "astronomical": "0.4324908231",
              "lunar": "168.2389301859",
              "kilometers": "64699705.930306797",
              "miles": "40202533.0488639186"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2157-06-25",
            "close_approach_date_full": "2157-Jun-25 13:57",
            "epoch_date_close_approach": 5916376620000,
            "relative_velocity": {
              "kilometers_per_second": "14.2176230835",
              "kilometers_per_hour": "51183.4431007163",
              "miles_per_hour": "31803.4010755534"
            },
            "miss_distance": {
              "astronomical": "0.2700243985",
              "lunar": "105.0394910165",
              "kilometers": "40395074.863631195",
              "miles": "25100335.602232691"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2158-02-17",
            "close_approach_date_full": "2158-Feb-17 00:53",
            "epoch_date_close_approach": 5936806380000,
            "relative_velocity": {
              "kilometers_per_second": "13.7399910733",
              "kilometers_per_hour": "49463.9678638462",
              "miles_per_hour": "30734.9860318437"
            },
            "miss_distance": {
              "astronomical": "0.0476537404",
              "lunar": "18.5373050156",
              "kilometers": "7128898.061372948",
              "miles": "4429691.8477967624"
            },
            "orbiting_body": "Mars"
          },
          {
            "close_approach_date": "2161-11-25",
            "close_approach_date_full": "2161-Nov-25 10:11",
            "epoch_date_close_approach": 6055812660000,
            "relative_velocity": {
              "kilometers_per_second": "20.3932536098",
              "kilometers_per_hour": "73415.7129951799",
              "miles_per_hour": "45617.6689996994"
            },
            "miss_distance": {
              "astronomical": "0.1056585265",
              "lunar": "41.1011668085",
              "kilometers": "15806290.511738555",
              "miles": "9821573.491579859"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2163-11-26",
            "close_approach_date_full": "2163-Nov-26 14:02",
            "epoch_date_close_approach": 6118984920000,
            "relative_velocity": {
              "kilometers_per_second": "17.3289724644",
              "kilometers_per_hour": "62384.3008716683",
              "miles_per_hour": "38763.1785055097"
            },
            "miss_distance": {
              "astronomical": "0.1724569298",
              "lunar": "67.0857456922",
              "kilometers": "25799189.364819526",
              "miles": "16030872.9098444188"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2165-03-12",
            "close_approach_date_full": "2165-Mar-12 09:15",
            "epoch_date_close_approach": 6159748500000,
            "relative_velocity": {
              "kilometers_per_second": "19.3297940161",
              "kilometers_per_hour": "69587.2584578142",
              "miles_per_hour": "43238.8162345235"
            },
            "miss_distance": {
              "astronomical": "0.4393108843",
              "lunar": "170.8919339927",
              "kilometers": "65719972.559096441",
              "miles": "40836497.3346792458"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2166-06-08",
            "close_approach_date_full": "2166-Jun-08 17:26",
            "epoch_date_close_approach": 6198917160000,
            "relative_velocity": {
              "kilometers_per_second": "13.923041",
              "kilometers_per_hour": "50122.9476000598",
              "miles_per_hour": "31144.4504129371"
            },
            "miss_distance": {
              "astronomical": "0.3010389002",
              "lunar": "117.1041321778",
              "kilometers": "45034778.257062574",
              "miles": "27983313.6054445612"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2168-08-09",
            "close_approach_date_full": "2168-Aug-09 10:02",
            "epoch_date_close_approach": 6267405720000,
            "relative_velocity": {
              "kilometers_per_second": "16.5284776162",
              "kilometers_per_hour": "59502.5194181785",
              "miles_per_hour": "36972.5515795899"
            },
            "miss_distance": {
              "astronomical": "0.1453860847",
              "lunar": "56.5551869483",
              "kilometers": "21749448.598759589",
              "miles": "13514480.6844727682"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2172-11-22",
            "close_approach_date_full": "2172-Nov-22 03:09",
            "epoch_date_close_approach": 6402683340000,
            "relative_velocity": {
              "kilometers_per_second": "20.8978240158",
              "kilometers_per_hour": "75232.1664567594",
              "miles_per_hour": "46746.3425408681"
            },
            "miss_distance": {
              "astronomical": "0.248191553",
              "lunar": "96.546514117",
              "kilometers": "37128927.68079211",
              "miles": "23070845.851506718"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2173-10-31",
            "close_approach_date_full": "2173-Oct-31 16:33",
            "epoch_date_close_approach": 6432366780000,
            "relative_velocity": {
              "kilometers_per_second": "12.7446481473",
              "kilometers_per_hour": "45880.7333301018",
              "miles_per_hour": "28508.5034405846"
            },
            "miss_distance": {
              "astronomical": "0.4512221607",
              "lunar": "175.5254205123",
              "kilometers": "67501874.137517709",
              "miles": "41943719.6329300242"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2174-02-26",
            "close_approach_date_full": "2174-Feb-26 05:47",
            "epoch_date_close_approach": 6442523220000,
            "relative_velocity": {
              "kilometers_per_second": "17.8692645688",
              "kilometers_per_hour": "64329.3524478406",
              "miles_per_hour": "39971.7579140485"
            },
            "miss_distance": {
              "astronomical": "0.4368422924",
              "lunar": "169.9316517436",
              "kilometers": "65350676.468957188",
              "miles": "40607027.3849296744"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2175-05-21",
            "close_approach_date_full": "2175-May-21 14:15",
            "epoch_date_close_approach": 6481347300000,
            "relative_velocity": {
              "kilometers_per_second": "15.584988104",
              "kilometers_per_hour": "56105.9571744158",
              "miles_per_hour": "34862.0598898474"
            },
            "miss_distance": {
              "astronomical": "0.3401177474",
              "lunar": "132.3058037386",
              "kilometers": "50880890.560238038",
              "miles": "31615919.3444714044"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2176-07-28",
            "close_approach_date_full": "2176-Jul-28 18:44",
            "epoch_date_close_approach": 6518861040000,
            "relative_velocity": {
              "kilometers_per_second": "27.0669674223",
              "kilometers_per_hour": "97441.0827202364",
              "miles_per_hour": "60546.0994269158"
            },
            "miss_distance": {
              "astronomical": "0.4919016052",
              "lunar": "191.3497244228",
              "kilometers": "73587432.387500924",
              "miles": "45725110.1840597912"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2181-11-17",
            "close_approach_date_full": "2181-Nov-17 12:51",
            "epoch_date_close_approach": 6686283060000,
            "relative_velocity": {
              "kilometers_per_second": "24.8078224064",
              "kilometers_per_hour": "89308.1606630368",
              "miles_per_hour": "55492.6179408741"
            },
            "miss_distance": {
              "astronomical": "0.3578619871",
              "lunar": "139.2083129819",
              "kilometers": "53535391.024127477",
              "miles": "33265349.4476421026"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2182-11-09",
            "close_approach_date_full": "2182-Nov-09 07:48",
            "epoch_date_close_approach": 6717109680000,
            "relative_velocity": {
              "kilometers_per_second": "12.237709181",
              "kilometers_per_hour": "44055.7530517015",
              "miles_per_hour": "27374.531667042"
            },
            "miss_distance": {
              "astronomical": "0.3860727897",
              "lunar": "150.1823151933",
              "kilometers": "57755667.004077939",
              "miles": "35887707.3412319982"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2183-02-09",
            "close_approach_date_full": "2183-Feb-09 14:53",
            "epoch_date_close_approach": 6725083980000,
            "relative_velocity": {
              "kilometers_per_second": "15.0687512528",
              "kilometers_per_hour": "54247.5045101783",
              "miles_per_hour": "33707.2896774494"
            },
            "miss_distance": {
              "astronomical": "0.4203578855",
              "lunar": "163.5192174595",
              "kilometers": "62884644.308503885",
              "miles": "39074706.055108213"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2184-05-04",
            "close_approach_date_full": "2184-May-04 12:17",
            "epoch_date_close_approach": 6763954620000,
            "relative_velocity": {
              "kilometers_per_second": "17.4640822735",
              "kilometers_per_hour": "62870.6961846536",
              "miles_per_hour": "39065.4056376255"
            },
            "miss_distance": {
              "astronomical": "0.3742096512",
              "lunar": "145.5675543168",
              "kilometers": "55980966.752962944",
              "miles": "34784959.7402748672"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2185-07-22",
            "close_approach_date_full": "2185-Jul-22 08:36",
            "epoch_date_close_approach": 6802302960000,
            "relative_velocity": {
              "kilometers_per_second": "23.3705814386",
              "kilometers_per_hour": "84134.0931788059",
              "miles_per_hour": "52277.6536199086"
            },
            "miss_distance": {
              "astronomical": "0.3948536312",
              "lunar": "153.5980625368",
              "kilometers": "59069262.189285544",
              "miles": "36703937.5402227472"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2187-09-12",
            "close_approach_date_full": "2187-Sep-12 17:59",
            "epoch_date_close_approach": 6869901540000,
            "relative_velocity": {
              "kilometers_per_second": "16.7494761782",
              "kilometers_per_hour": "60298.1142414462",
              "miles_per_hour": "37466.9032629697"
            },
            "miss_distance": {
              "astronomical": "0.1092405786",
              "lunar": "42.4945850754",
              "kilometers": "16342157.876127582",
              "miles": "10154546.0316693516"
            },
            "orbiting_body": "Venus"
          },
          {
            "close_approach_date": "2190-11-12",
            "close_approach_date_full": "2190-Nov-12 14:11",
            "epoch_date_close_approach": 6969852660000,
            "relative_velocity": {
              "kilometers_per_second": "28.7199901923",
              "kilometers_per_hour": "103391.9646923664",
              "miles_per_hour": "64243.7460612096"
            },
            "miss_distance": {
              "astronomical": "0.4749861298",
              "lunar": "184.7696044922",
              "kilometers": "71056913.297623526",
              "miles": "44152718.5343796188"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2191-11-18",
            "close_approach_date_full": "2191-Nov-18 13:22",
            "epoch_date_close_approach": 7001904120000,
            "relative_velocity": {
              "kilometers_per_second": "11.8823931421",
              "kilometers_per_hour": "42776.6153114768",
              "miles_per_hour": "26579.7252195118"
            },
            "miss_distance": {
              "astronomical": "0.3075624216",
              "lunar": "119.6417820024",
              "kilometers": "46010683.163401992",
              "miles": "28589712.7951398096"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2193-04-19",
            "close_approach_date_full": "2193-Apr-19 19:35",
            "epoch_date_close_approach": 7046681700000,
            "relative_velocity": {
              "kilometers_per_second": "18.9121006513",
              "kilometers_per_hour": "68083.5623447408",
              "miles_per_hour": "42304.4779469308"
            },
            "miss_distance": {
              "astronomical": "0.4012677408",
              "lunar": "156.0931511712",
              "kilometers": "60028799.323392096",
              "miles": "37300166.2678630848"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2194-07-15",
            "close_approach_date_full": "2194-Jul-15 03:50",
            "epoch_date_close_approach": 7085677800000,
            "relative_velocity": {
              "kilometers_per_second": "19.6850706333",
              "kilometers_per_hour": "70866.2542799102",
              "miles_per_hour": "44033.5344996476"
            },
            "miss_distance": {
              "astronomical": "0.3139319392",
              "lunar": "122.1195243488",
              "kilometers": "46963549.429289504",
              "miles": "29181796.4374789952"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2200-11-26",
            "close_approach_date_full": "2200-Nov-26 13:44",
            "epoch_date_close_approach": 7286593440000,
            "relative_velocity": {
              "kilometers_per_second": "12.4196628346",
              "kilometers_per_hour": "44710.7862045593",
              "miles_per_hour": "27781.5437947163"
            },
            "miss_distance": {
              "astronomical": "0.2229227161",
              "lunar": "86.7169365629",
              "kilometers": "33348763.503174707",
              "miles": "20721960.7507846766"
            },
            "orbiting_body": "Earth"
          }
        ],
        "orbital_data": {
          "orbit_id": "359",
          "orbit_determination_date": "2024-01-21 00:05:09",
          "first_observation_date": "1971-11-10",
          "last_observation_date": "2021-10-23",
          "data_arc_in_days": 18245,
          "observations_used": 2354,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".156672",
          "jupiter_tisserand_invariant": "5.592",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".4668257515632528",
          "semi_major_axis": "1.079959701420605",
          "inclination": "16.10134163928203",
          "ascending_node_longitude": "212.887789067275",
          "orbital_period": "409.930046748083",
          "perihelion_distance": ".575806702146905",
          "perihelion_argument": "325.2922263848413",
          "aphelion_distance": "1.584112700694305",
          "perihelion_time": "2460636.496953738357",
          "mean_anomaly": "328.3875250213791",
          "mean_motion": ".8781986167050427",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "APO",
            "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
            "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
          }
        },
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2001866?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2001866",
        "neo_reference_id": "2001866",
        "name": "1866 Sisyphus (1972 XA)",
        "name_limited": "Sisyphus",
        "designation": "1866",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2001866",
        "absolute_magnitude_h": 12.52,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 8.3282734552,
            "estimated_diameter_max": 18.6225855811
          },
          "meters": {
            "estimated_diameter_min": 8328.2734552308,
            "estimated_diameter_max": 18622.5855811032
          },
          "miles": {
            "estimated_diameter_min": 5.1749476052,
            "estimated_diameter_max": 11.5715346251
          },
          "feet": {
            "estimated_diameter_min": 27323.7326828595,
            "estimated_diameter_max": 61097.7236779066
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "1912-12-09",
            "close_approach_date_full": "1912-Dec-09 05:41",
            "epoch_date_close_approach": -1800728340000,
            "relative_velocity": {
              "kilometers_per_second": "33.8145949875",
              "kilometers_per_hour": "121732.5419548679",
              "miles_per_hour": "75639.8675274567"
            },
            "miss_distance": {
              "astronomical": "0.4511362396",
              "lunar": "175.4919972044",
              "kilometers": "67489020.523969652",
              "miles": "41935732.7678271176"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1920-06-12",
            "close_approach_date_full": "1920-Jun-12 20:58",
            "epoch_date_close_approach": -1563764520000,
            "relative_velocity": {
              "kilometers_per_second": "24.6626514173",
              "kilometers_per_hour": "88785.5451023282",
              "miles_per_hour": "55167.8849553883"
            },
            "miss_distance": {
              "astronomical": "0.4448858716",
              "lunar": "173.0606040524",
              "kilometers": "66553978.784453492",
              "miles": "41354724.7725905096"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1933-06-15",
            "close_approach_date_full": "1933-Jun-15 06:29",
            "epoch_date_close_approach": -1153330260000,
            "relative_velocity": {
              "kilometers_per_second": "22.2803688994",
              "kilometers_per_hour": "80209.3280378994",
              "miles_per_hour": "49838.9571911048"
            },
            "miss_distance": {
              "astronomical": "0.442506861",
              "lunar": "172.135168929",
              "kilometers": "66198083.86598607",
              "miles": "41133581.924784966"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1946-06-16",
            "close_approach_date_full": "1946-Jun-16 00:15",
            "epoch_date_close_approach": -743039100000,
            "relative_velocity": {
              "kilometers_per_second": "20.695027152",
              "kilometers_per_hour": "74502.097747132",
              "miles_per_hour": "46292.7062362665"
            },
            "miss_distance": {
              "astronomical": "0.49153656",
              "lunar": "191.20772184",
              "kilometers": "73532822.4031272",
              "miles": "45691177.11326736"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1946-11-12",
            "close_approach_date_full": "1946-Nov-12 05:36",
            "epoch_date_close_approach": -730146240000,
            "relative_velocity": {
              "kilometers_per_second": "21.6421032579",
              "kilometers_per_hour": "77911.5717284879",
              "miles_per_hour": "48411.2207776263"
            },
            "miss_distance": {
              "astronomical": "0.350649131",
              "lunar": "136.402511959",
              "kilometers": "52456363.11495097",
              "miles": "32594872.595304586"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1959-11-17",
            "close_approach_date_full": "1959-Nov-17 08:31",
            "epoch_date_close_approach": -319476540000,
            "relative_velocity": {
              "kilometers_per_second": "23.0737679785",
              "kilometers_per_hour": "83065.56472242",
              "miles_per_hour": "51613.7115909948"
            },
            "miss_distance": {
              "astronomical": "0.1974231776",
              "lunar": "76.7976160864",
              "kilometers": "29534086.857591712",
              "miles": "18351630.5968891456"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1972-11-21",
            "close_approach_date_full": "1972-Nov-21 21:30",
            "epoch_date_close_approach": 91229400000,
            "relative_velocity": {
              "kilometers_per_second": "25.1545090527",
              "kilometers_per_hour": "90556.2325897081",
              "miles_per_hour": "56268.1212999772"
            },
            "miss_distance": {
              "astronomical": "0.1028837397",
              "lunar": "40.0217747433",
              "kilometers": "15391188.316754439",
              "miles": "9563640.9481076982"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1985-11-27",
            "close_approach_date_full": "1985-Nov-27 21:43",
            "epoch_date_close_approach": 501975780000,
            "relative_velocity": {
              "kilometers_per_second": "27.8281413975",
              "kilometers_per_hour": "100181.3090308708",
              "miles_per_hour": "62248.7694919874"
            },
            "miss_distance": {
              "astronomical": "0.1830713657",
              "lunar": "71.2147612573",
              "kilometers": "27387086.366711059",
              "miles": "17017546.3541642542"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1998-12-04",
            "close_approach_date_full": "1998-Dec-04 16:31",
            "epoch_date_close_approach": 912789060000,
            "relative_velocity": {
              "kilometers_per_second": "31.1800926943",
              "kilometers_per_hour": "112248.3336994055",
              "miles_per_hour": "69746.7493478334"
            },
            "miss_distance": {
              "astronomical": "0.3379467521",
              "lunar": "131.4612865669",
              "kilometers": "50556114.287578027",
              "miles": "31414112.7265376926"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2006-06-10",
            "close_approach_date_full": "2006-Jun-10 20:04",
            "epoch_date_close_approach": 1149969840000,
            "relative_velocity": {
              "kilometers_per_second": "26.8141025607",
              "kilometers_per_hour": "96530.7692184091",
              "miles_per_hour": "59980.4660179609"
            },
            "miss_distance": {
              "astronomical": "0.494839241",
              "lunar": "192.492464749",
              "kilometers": "74026896.44601667",
              "miles": "45998180.487583246"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2019-06-14",
            "close_approach_date_full": "2019-Jun-14 06:02",
            "epoch_date_close_approach": 1560492120000,
            "relative_velocity": {
              "kilometers_per_second": "23.9983355241",
              "kilometers_per_hour": "86394.007886872",
              "miles_per_hour": "53681.8767339289"
            },
            "miss_distance": {
              "astronomical": "0.4503740695",
              "lunar": "175.1955130355",
              "kilometers": "67375001.500431965",
              "miles": "41864884.631872517"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2032-06-15",
            "close_approach_date_full": "2032-Jun-15 03:21",
            "epoch_date_close_approach": 1970882460000,
            "relative_velocity": {
              "kilometers_per_second": "21.876354183",
              "kilometers_per_hour": "78754.875058724",
              "miles_per_hour": "48935.2166719055"
            },
            "miss_distance": {
              "astronomical": "0.4584634339",
              "lunar": "178.3422757871",
              "kilometers": "68585153.184325793",
              "miles": "42616838.0197022234"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2032-11-08",
            "close_approach_date_full": "2032-Nov-08 20:12",
            "epoch_date_close_approach": 1983557520000,
            "relative_velocity": {
              "kilometers_per_second": "21.1484080243",
              "kilometers_per_hour": "76134.2688874069",
              "miles_per_hour": "47306.8739095113"
            },
            "miss_distance": {
              "astronomical": "0.4694318531",
              "lunar": "182.6089908559",
              "kilometers": "70226005.333912897",
              "miles": "43636416.2669840986"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2045-11-13",
            "close_approach_date_full": "2045-Nov-13 05:48",
            "epoch_date_close_approach": 2394164880000,
            "relative_velocity": {
              "kilometers_per_second": "22.0426790117",
              "kilometers_per_hour": "79353.6444421859",
              "miles_per_hour": "49307.2686813127"
            },
            "miss_distance": {
              "astronomical": "0.3036960088",
              "lunar": "118.1377474232",
              "kilometers": "45432276.043981256",
              "miles": "28230307.2769870928"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2058-11-18",
            "close_approach_date_full": "2058-Nov-18 16:40",
            "epoch_date_close_approach": 2804863200000,
            "relative_velocity": {
              "kilometers_per_second": "23.7672007462",
              "kilometers_per_hour": "85561.9226861864",
              "miles_per_hour": "53164.8513490918"
            },
            "miss_distance": {
              "astronomical": "0.1532927511",
              "lunar": "59.6308801779",
              "kilometers": "22932269.051000157",
              "miles": "14249451.2324578866"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2071-11-24",
            "close_approach_date_full": "2071-Nov-24 07:51",
            "epoch_date_close_approach": 3215577060000,
            "relative_velocity": {
              "kilometers_per_second": "26.0224081115",
              "kilometers_per_hour": "93680.6692015616",
              "miles_per_hour": "58209.5247047148"
            },
            "miss_distance": {
              "astronomical": "0.1158124201",
              "lunar": "45.0510314189",
              "kilometers": "17325291.366505187",
              "miles": "10765436.8552061006"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2084-11-29",
            "close_approach_date_full": "2084-Nov-29 15:54",
            "epoch_date_close_approach": 3626351640000,
            "relative_velocity": {
              "kilometers_per_second": "28.9689761456",
              "kilometers_per_hour": "104288.3141243346",
              "miles_per_hour": "64800.7027402011"
            },
            "miss_distance": {
              "astronomical": "0.2401264161",
              "lunar": "93.4091758629",
              "kilometers": "35922400.379293707",
              "miles": "22321144.5504668766"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2097-12-06",
            "close_approach_date_full": "2097-Dec-06 16:54",
            "epoch_date_close_approach": 4037187240000,
            "relative_velocity": {
              "kilometers_per_second": "32.5562473619",
              "kilometers_per_hour": "117202.4905029833",
              "miles_per_hour": "72825.0697239231"
            },
            "miss_distance": {
              "astronomical": "0.405201041",
              "lunar": "157.623204949",
              "kilometers": "60617212.65538267",
              "miles": "37665789.358194046"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2105-06-12",
            "close_approach_date_full": "2105-Jun-12 18:59",
            "epoch_date_close_approach": 4274276340000,
            "relative_velocity": {
              "kilometers_per_second": "25.827259886",
              "kilometers_per_hour": "92978.1355895024",
              "miles_per_hour": "57772.9976389328"
            },
            "miss_distance": {
              "astronomical": "0.4845622275",
              "lunar": "188.4947064975",
              "kilometers": "72489477.116455425",
              "miles": "45042872.414417865"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2118-06-15",
            "close_approach_date_full": "2118-Jun-15 18:08",
            "epoch_date_close_approach": 4684759680000,
            "relative_velocity": {
              "kilometers_per_second": "23.1616527406",
              "kilometers_per_hour": "83381.9498662428",
              "miles_per_hour": "51810.3010154996"
            },
            "miss_distance": {
              "astronomical": "0.456948493",
              "lunar": "177.752963777",
              "kilometers": "68358521.25250991",
              "miles": "42476015.467300358"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2131-06-17",
            "close_approach_date_full": "2131-Jun-17 00:30",
            "epoch_date_close_approach": 5095096200000,
            "relative_velocity": {
              "kilometers_per_second": "21.3354286655",
              "kilometers_per_hour": "76807.5431956376",
              "miles_per_hour": "47725.2203817561"
            },
            "miss_distance": {
              "astronomical": "0.4818260824",
              "lunar": "187.4303460536",
              "kilometers": "72080155.637484488",
              "miles": "44788531.8413144144"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2131-11-12",
            "close_approach_date_full": "2131-Nov-12 06:41",
            "epoch_date_close_approach": 5107905660000,
            "relative_velocity": {
              "kilometers_per_second": "21.5119002619",
              "kilometers_per_hour": "77442.8409429646",
              "miles_per_hour": "48119.9696959215"
            },
            "miss_distance": {
              "astronomical": "0.3923421213",
              "lunar": "152.6210851857",
              "kilometers": "58693545.657761631",
              "miles": "36470478.1131912678"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2144-11-16",
            "close_approach_date_full": "2144-Nov-16 04:47",
            "epoch_date_close_approach": 5518558020000,
            "relative_velocity": {
              "kilometers_per_second": "22.7669144101",
              "kilometers_per_hour": "81960.8918762815",
              "miles_per_hour": "50927.3108439039"
            },
            "miss_distance": {
              "astronomical": "0.2299929648",
              "lunar": "89.4672633072",
              "kilometers": "34406457.649064976",
              "miles": "21379181.4173136288"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2157-11-21",
            "close_approach_date_full": "2157-Nov-21 17:04",
            "epoch_date_close_approach": 5929261440000,
            "relative_velocity": {
              "kilometers_per_second": "24.7413837003",
              "kilometers_per_hour": "89068.9813209785",
              "miles_per_hour": "55344.001199138"
            },
            "miss_distance": {
              "astronomical": "0.1145554011",
              "lunar": "44.5620510279",
              "kilometers": "17137244.001555657",
              "miles": "10648589.6409037866"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2170-11-27",
            "close_approach_date_full": "2170-Nov-27 11:23",
            "epoch_date_close_approach": 6339986580000,
            "relative_velocity": {
              "kilometers_per_second": "27.2477597214",
              "kilometers_per_hour": "98091.9349969928",
              "miles_per_hour": "60950.5137207704"
            },
            "miss_distance": {
              "astronomical": "0.1644897235",
              "lunar": "63.9865024415",
              "kilometers": "24607312.272488945",
              "miles": "15290274.826659641"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2183-12-04",
            "close_approach_date_full": "2183-Dec-04 06:30",
            "epoch_date_close_approach": 6750801000000,
            "relative_velocity": {
              "kilometers_per_second": "30.5733606454",
              "kilometers_per_hour": "110064.0983233799",
              "miles_per_hour": "68389.5504276579"
            },
            "miss_distance": {
              "astronomical": "0.3198081987",
              "lunar": "124.4053892943",
              "kilometers": "47842625.334056769",
              "miles": "29728028.8755666522"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2196-12-10",
            "close_approach_date_full": "2196-Dec-10 09:55",
            "epoch_date_close_approach": 7161645300000,
            "relative_velocity": {
              "kilometers_per_second": "34.3162168037",
              "kilometers_per_hour": "123538.3804934154",
              "miles_per_hour": "76761.9453682558"
            },
            "miss_distance": {
              "astronomical": "0.4886269601",
              "lunar": "190.0758874789",
              "kilometers": "73097552.455534987",
              "miles": "45420712.9094253406"
            },
            "orbiting_body": "Earth"
          }
        ],
        "orbital_data": {
          "orbit_id": "1031",
          "orbit_determination_date": "2024-09-27 06:21:17",
          "first_observation_date": "1955-01-26",
          "last_observation_date": "2024-09-25",
          "data_arc_in_days": 25445,
          "observations_used": 9077,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".104144",
          "jupiter_tisserand_invariant": "3.513",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".5380220468278326",
          "semi_major_axis": "1.8937088553932",
          "inclination": "41.20827048065575",
          "ascending_node_longitude": "63.45417000133106",
          "orbital_period": "951.8494031550451",
          "perihelion_distance": ".8748517409185582",
          "perihelion_argument": "293.1153759180343",
          "aphelion_distance": "2.912565969867841",
          "perihelion_time": "2460628.687640451144",
          "mean_anomaly": "349.3391217888291",
          "mean_motion": ".378211089702559",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "APO",
            "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
            "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
          }
        },
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2001915?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2001915",
        "neo_reference_id": "2001915",
        "name": "1915 Quetzalcoatl (1953 EA)",
        "name_limited": "Quetzalcoatl",
        "designation": "1915",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2001915",
        "absolute_magnitude_h": 18.38,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 0.5604733623,
            "estimated_diameter_max": 1.2532565376
          },
          "meters": {
            "estimated_diameter_min": 560.4733622523,
            "estimated_diameter_max": 1253.2565375739
          },
          "miles": {
            "estimated_diameter_min": 0.3482618936,
            "estimated_diameter_max": 0.778737268
          },
          "feet": {
            "estimated_diameter_min": 1838.8234258117,
            "estimated_diameter_max": 4111.7341787341
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "1906-03-06",
            "close_approach_date_full": "1906-Mar-06 00:36",
            "epoch_date_close_approach": -2014154640000,
            "relative_velocity": {
              "kilometers_per_second": "15.120986141",
              "kilometers_per_hour": "54435.5501077667",
              "miles_per_hour": "33824.1338989065"
            },
            "miss_distance": {
              "astronomical": "0.0253323011",
              "lunar": "9.8542651279",
              "kilometers": "3789658.286758657",
              "miles": "2354784.4665851866"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1927-05-03",
            "close_approach_date_full": "1927-May-03 18:59",
            "epoch_date_close_approach": -1346389260000,
            "relative_velocity": {
              "kilometers_per_second": "8.3236462823",
              "kilometers_per_hour": "29965.1266161162",
              "miles_per_hour": "18619.1643687751"
            },
            "miss_distance": {
              "astronomical": "1.9794103033",
              "lunar": "769.9906079837",
              "kilometers": "296115565.229733971",
              "miles": "183997680.1479559598"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "1939-03-02",
            "close_approach_date_full": "1939-Mar-02 11:12",
            "epoch_date_close_approach": -973082880000,
            "relative_velocity": {
              "kilometers_per_second": "7.5824124074",
              "kilometers_per_hour": "27296.6846667845",
              "miles_per_hour": "16961.0983142028"
            },
            "miss_distance": {
              "astronomical": "1.7835747615",
              "lunar": "693.8105822235",
              "kilometers": "266818985.306158005",
              "miles": "165793629.516490269"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "1949-03-18",
            "close_approach_date_full": "1949-Mar-18 14:44",
            "epoch_date_close_approach": -656068560000,
            "relative_velocity": {
              "kilometers_per_second": "16.3843605707",
              "kilometers_per_hour": "58983.6980544433",
              "miles_per_hour": "36650.1761605512"
            },
            "miss_distance": {
              "astronomical": "0.1817664847",
              "lunar": "70.7071625483",
              "kilometers": "27191878.948507589",
              "miles": "16896250.0890751682"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1951-01-10",
            "close_approach_date_full": "1951-Jan-10 05:45",
            "epoch_date_close_approach": -598817700000,
            "relative_velocity": {
              "kilometers_per_second": "7.4818675942",
              "kilometers_per_hour": "26934.723339183",
              "miles_per_hour": "16736.1896215051"
            },
            "miss_distance": {
              "astronomical": "1.7577685094",
              "lunar": "683.7719501566",
              "kilometers": "262958424.959314978",
              "miles": "163394788.5526955764"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "1953-03-04",
            "close_approach_date_full": "1953-Mar-04 06:06",
            "epoch_date_close_approach": -531078840000,
            "relative_velocity": {
              "kilometers_per_second": "13.9382090389",
              "kilometers_per_hour": "50177.5525399216",
              "miles_per_hour": "31178.3797990418"
            },
            "miss_distance": {
              "astronomical": "0.053299376",
              "lunar": "20.733457264",
              "kilometers": "7973473.12192912",
              "miles": "4954486.455377056"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1957-02-23",
            "close_approach_date_full": "1957-Feb-23 12:38",
            "epoch_date_close_approach": -405602520000,
            "relative_velocity": {
              "kilometers_per_second": "13.6629331127",
              "kilometers_per_hour": "49186.5592058233",
              "miles_per_hour": "30562.6150798628"
            },
            "miss_distance": {
              "astronomical": "0.0935777761",
              "lunar": "36.4017549029",
              "kilometers": "13999035.983896907",
              "miles": "8698597.6010630366"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1961-02-10",
            "close_approach_date_full": "1961-Feb-10 22:21",
            "epoch_date_close_approach": -280460340000,
            "relative_velocity": {
              "kilometers_per_second": "14.7353887224",
              "kilometers_per_hour": "53047.3994007743",
              "miles_per_hour": "32961.59103322"
            },
            "miss_distance": {
              "astronomical": "0.2274974634",
              "lunar": "88.4965132626",
              "kilometers": "34033135.955042958",
              "miles": "21147210.0733025004"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1962-12-07",
            "close_approach_date_full": "1962-Dec-07 01:54",
            "epoch_date_close_approach": -223077960000,
            "relative_velocity": {
              "kilometers_per_second": "7.9826190661",
              "kilometers_per_hour": "28737.4286380393",
              "miles_per_hour": "17856.3205890084"
            },
            "miss_distance": {
              "astronomical": "1.9196707949",
              "lunar": "746.7519392161",
              "kilometers": "287178662.018246863",
              "miles": "178444545.9945901894"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "1965-02-11",
            "close_approach_date_full": "1965-Feb-11 07:46",
            "epoch_date_close_approach": -154196040000,
            "relative_velocity": {
              "kilometers_per_second": "14.6513211868",
              "kilometers_per_hour": "52744.7562723439",
              "miles_per_hour": "32773.5403626684"
            },
            "miss_distance": {
              "astronomical": "0.2498661787",
              "lunar": "97.1979435143",
              "kilometers": "37379448.118559369",
              "miles": "23226512.0331985322"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1969-02-13",
            "close_approach_date_full": "1969-Feb-13 09:02",
            "epoch_date_close_approach": -27788280000,
            "relative_velocity": {
              "kilometers_per_second": "14.3345701942",
              "kilometers_per_hour": "51604.4526990797",
              "miles_per_hour": "32065.0000673809"
            },
            "miss_distance": {
              "astronomical": "0.2241718896",
              "lunar": "87.2028650544",
              "kilometers": "33535637.198035152",
              "miles": "20838078.6803110176"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1973-02-13",
            "close_approach_date_full": "1973-Feb-13 00:36",
            "epoch_date_close_approach": 98411760000,
            "relative_velocity": {
              "kilometers_per_second": "14.3685236688",
              "kilometers_per_hour": "51726.6852075155",
              "miles_per_hour": "32140.9505946365"
            },
            "miss_distance": {
              "astronomical": "0.2308526833",
              "lunar": "89.8016938037",
              "kilometers": "34535069.705464571",
              "miles": "21459097.2434142398"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1977-02-20",
            "close_approach_date_full": "1977-Feb-20 20:33",
            "epoch_date_close_approach": 225318780000,
            "relative_velocity": {
              "kilometers_per_second": "13.2873993505",
              "kilometers_per_hour": "47834.6376618716",
              "miles_per_hour": "29722.583607178"
            },
            "miss_distance": {
              "astronomical": "0.1553447705",
              "lunar": "60.4291157245",
              "kilometers": "23239246.782438835",
              "miles": "14440198.349712523"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1981-03-02",
            "close_approach_date_full": "1981-Mar-02 04:12",
            "epoch_date_close_approach": 352354320000,
            "relative_velocity": {
              "kilometers_per_second": "13.3078945217",
              "kilometers_per_hour": "47908.4202782838",
              "miles_per_hour": "29768.4292556925"
            },
            "miss_distance": {
              "astronomical": "0.0832061266",
              "lunar": "32.3671832474",
              "kilometers": "12447459.310310342",
              "miles": "7734492.5622410396"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1985-03-09",
            "close_approach_date_full": "1985-Mar-09 17:39",
            "epoch_date_close_approach": 479237940000,
            "relative_velocity": {
              "kilometers_per_second": "14.3769280624",
              "kilometers_per_hour": "51756.9410245208",
              "miles_per_hour": "32159.7503827085"
            },
            "miss_distance": {
              "astronomical": "0.1507448995",
              "lunar": "58.6397659055",
              "kilometers": "22551115.878564065",
              "miles": "14012613.633411497"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1989-03-20",
            "close_approach_date_full": "1989-Mar-20 22:14",
            "epoch_date_close_approach": 606435240000,
            "relative_velocity": {
              "kilometers_per_second": "17.7137217646",
              "kilometers_per_hour": "63769.3983524534",
              "miles_per_hour": "39623.8242151675"
            },
            "miss_distance": {
              "astronomical": "0.3461589178",
              "lunar": "134.6558190242",
              "kilometers": "51784636.784385086",
              "miles": "32177481.2081867468"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2058-02-07",
            "close_approach_date_full": "2058-Feb-07 18:16",
            "epoch_date_close_approach": 2780331360000,
            "relative_velocity": {
              "kilometers_per_second": "15.854021032",
              "kilometers_per_hour": "57074.4757152738",
              "miles_per_hour": "35463.8596465267"
            },
            "miss_distance": {
              "astronomical": "0.3647049278",
              "lunar": "141.8702169142",
              "kilometers": "54559080.377383786",
              "miles": "33901440.5158208068"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2062-02-24",
            "close_approach_date_full": "2062-Feb-24 00:46",
            "epoch_date_close_approach": 2907967560000,
            "relative_velocity": {
              "kilometers_per_second": "13.0147235164",
              "kilometers_per_hour": "46853.0046588982",
              "miles_per_hour": "29112.635033747"
            },
            "miss_distance": {
              "astronomical": "0.1339467108",
              "lunar": "52.1052705012",
              "kilometers": "20038142.629185996",
              "miles": "12451124.4634629048"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2066-03-12",
            "close_approach_date_full": "2066-Mar-12 02:54",
            "epoch_date_close_approach": 3035588040000,
            "relative_velocity": {
              "kilometers_per_second": "14.878563009",
              "kilometers_per_hour": "53562.8268323572",
              "miles_per_hour": "33281.8575948055"
            },
            "miss_distance": {
              "astronomical": "0.2002673644",
              "lunar": "77.9040047516",
              "kilometers": "29959571.144753828",
              "miles": "18616014.2732977064"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2070-03-26",
            "close_approach_date_full": "2070-Mar-26 14:17",
            "epoch_date_close_approach": 3163069020000,
            "relative_velocity": {
              "kilometers_per_second": "19.5199994152",
              "kilometers_per_hour": "70271.9978947574",
              "miles_per_hour": "43664.2866918841"
            },
            "miss_distance": {
              "astronomical": "0.4124342725",
              "lunar": "160.4369320025",
              "kilometers": "61699288.680999575",
              "miles": "38338160.222261135"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2092-09-17",
            "close_approach_date_full": "2092-Sep-17 11:56",
            "epoch_date_close_approach": 3872490960000,
            "relative_velocity": {
              "kilometers_per_second": "8.498139364",
              "kilometers_per_hour": "30593.3017103768",
              "miles_per_hour": "19009.4879433172"
            },
            "miss_distance": {
              "astronomical": "1.8909703473",
              "lunar": "735.5874650997",
              "kilometers": "282885136.189240251",
              "miles": "175776672.7553714238"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "2104-08-20",
            "close_approach_date_full": "2104-Aug-20 15:40",
            "epoch_date_close_approach": 4248690000000,
            "relative_velocity": {
              "kilometers_per_second": "8.0425536276",
              "kilometers_per_hour": "28953.1930593747",
              "miles_per_hour": "17990.3882095876"
            },
            "miss_distance": {
              "astronomical": "1.7424875717",
              "lunar": "677.8276653913",
              "kilometers": "260672429.227792279",
              "miles": "161974336.6723562902"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "2110-03-21",
            "close_approach_date_full": "2110-Mar-21 08:42",
            "epoch_date_close_approach": 4424834520000,
            "relative_velocity": {
              "kilometers_per_second": "16.8450834504",
              "kilometers_per_hour": "60642.3004215174",
              "miles_per_hour": "37680.7671702479"
            },
            "miss_distance": {
              "astronomical": "0.2165645638",
              "lunar": "84.2436153182",
              "kilometers": "32397597.461959106",
              "miles": "20130933.5790674228"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2114-02-25",
            "close_approach_date_full": "2114-Feb-25 11:35",
            "epoch_date_close_approach": 4549001700000,
            "relative_velocity": {
              "kilometers_per_second": "14.0848378122",
              "kilometers_per_hour": "50705.416124091",
              "miles_per_hour": "31506.3737022164"
            },
            "miss_distance": {
              "astronomical": "0.0778983246",
              "lunar": "30.3024482694",
              "kilometers": "11653423.436728602",
              "miles": "7241101.5492426276"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2116-07-03",
            "close_approach_date_full": "2116-Jul-03 07:01",
            "epoch_date_close_approach": 4623202860000,
            "relative_velocity": {
              "kilometers_per_second": "8.1051806335",
              "kilometers_per_hour": "29178.6502807463",
              "miles_per_hour": "18130.4785591671"
            },
            "miss_distance": {
              "astronomical": "1.7477823668",
              "lunar": "679.8873406852",
              "kilometers": "261464519.296838716",
              "miles": "162466518.6184816408"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "2118-01-24",
            "close_approach_date_full": "2118-Jan-24 14:20",
            "epoch_date_close_approach": 4672477200000,
            "relative_velocity": {
              "kilometers_per_second": "19.0293485102",
              "kilometers_per_hour": "68505.6546366786",
              "miles_per_hour": "42566.7496824407"
            },
            "miss_distance": {
              "astronomical": "0.39109179",
              "lunar": "152.13470631",
              "kilometers": "58506498.7584873",
              "miles": "36354252.55943274"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2128-04-24",
            "close_approach_date_full": "2128-Apr-24 06:58",
            "epoch_date_close_approach": 4995845880000,
            "relative_velocity": {
              "kilometers_per_second": "8.7682239219",
              "kilometers_per_hour": "31565.6061189954",
              "miles_per_hour": "19613.6400909947"
            },
            "miss_distance": {
              "astronomical": "1.9270951624",
              "lunar": "749.6400181736",
              "kilometers": "288289331.582344088",
              "miles": "179134684.0595928944"
            },
            "orbiting_body": "Juptr"
          },
          {
            "close_approach_date": "2153-03-14",
            "close_approach_date_full": "2153-Mar-14 22:17",
            "epoch_date_close_approach": 5781277020000,
            "relative_velocity": {
              "kilometers_per_second": "16.12586589",
              "kilometers_per_hour": "58053.1172041051",
              "miles_per_hour": "36071.9494094063"
            },
            "miss_distance": {
              "astronomical": "0.101257076",
              "lunar": "39.389002564",
              "kilometers": "15147842.89202812",
              "miles": "9412433.112783256"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2180-04-01",
            "close_approach_date_full": "2180-Apr-01 03:05",
            "epoch_date_close_approach": 6634839900000,
            "relative_velocity": {
              "kilometers_per_second": "19.2901073102",
              "kilometers_per_hour": "69444.3863167632",
              "miles_per_hour": "43150.0410422132"
            },
            "miss_distance": {
              "astronomical": "0.271991832",
              "lunar": "105.804822648",
              "kilometers": "40689398.72459784",
              "miles": "25283219.968976592"
            },
            "orbiting_body": "Earth"
          }
        ],
        "orbital_data": {
          "orbit_id": "13",
          "orbit_determination_date": "2024-03-01 04:49:33",
          "first_observation_date": "1953-03-09",
          "last_observation_date": "2020-10-25",
          "data_arc_in_days": 24702,
          "observations_used": 55,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".111054",
          "jupiter_tisserand_invariant": "3.122",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".5702508335758032",
          "semi_major_axis": "2.544305308822753",
          "inclination": "20.40111462081187",
          "ascending_node_longitude": "162.9346056607496",
          "orbital_period": "1482.355138039982",
          "perihelion_distance": "1.093413085595237",
          "perihelion_argument": "347.7658217146496",
          "aphelion_distance": "3.995197532050269",
          "perihelion_time": "2460911.482728300459",
          "mean_anomaly": "284.4757350548304",
          "mean_motion": ".2428567829406951",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "AMO",
            "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
            "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
          }
        },
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2001916?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2001916",
        "neo_reference_id": "2001916",
        "name": "1916 Boreas (1953 RA)",
        "name_limited": "Boreas",
        "designation": "1916",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2001916",
        "absolute_magnitude_h": 14.95,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 2.7199127735,
            "estimated_diameter_max": 6.0819098544
          },
          "meters": {
            "estimated_diameter_min": 2719.9127734822,
            "estimated_diameter_max": 6081.9098543763
          },
          "miles": {
            "estimated_diameter_min": 1.69007492,
            "estimated_diameter_max": 3.7791224081
          },
          "feet": {
            "estimated_diameter_min": 8923.5986237515,
            "estimated_diameter_max": 19953.7731266319
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "1905-08-25",
            "close_approach_date_full": "1905-Aug-25 21:49",
            "epoch_date_close_approach": -2030753460000,
            "relative_velocity": {
              "kilometers_per_second": "6.9573972766",
              "kilometers_per_hour": "25046.6301958486",
              "miles_per_hour": "15563.0019680816"
            },
            "miss_distance": {
              "astronomical": "0.3898549151",
              "lunar": "151.6535619739",
              "kilometers": "58321464.907990837",
              "miles": "36239277.8561820706"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1929-08-22",
            "close_approach_date_full": "1929-Aug-22 13:40",
            "epoch_date_close_approach": -1273659600000,
            "relative_velocity": {
              "kilometers_per_second": "6.9479843485",
              "kilometers_per_hour": "25012.7436545472",
              "miles_per_hour": "15541.9461891269"
            },
            "miss_distance": {
              "astronomical": "0.3360265405",
              "lunar": "130.7143242545",
              "kilometers": "50268854.722268735",
              "miles": "31235617.909569143"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1953-08-21",
            "close_approach_date_full": "1953-Aug-21 10:55",
            "epoch_date_close_approach": -516373500000,
            "relative_velocity": {
              "kilometers_per_second": "6.9701066236",
              "kilometers_per_hour": "25092.3838451337",
              "miles_per_hour": "15591.4315064388"
            },
            "miss_distance": {
              "astronomical": "0.3149704148",
              "lunar": "122.5234913572",
              "kilometers": "47118903.167096476",
              "miles": "29278328.7738883288"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1977-08-22",
            "close_approach_date_full": "1977-Aug-22 02:21",
            "epoch_date_close_approach": 241064460000,
            "relative_velocity": {
              "kilometers_per_second": "7.0255606095",
              "kilometers_per_hour": "25292.0181940401",
              "miles_per_hour": "15715.4765272912"
            },
            "miss_distance": {
              "astronomical": "0.3239027724",
              "lunar": "125.9981784636",
              "kilometers": "48455164.838134788",
              "miles": "30108643.2740765544"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2001-08-24",
            "close_approach_date_full": "2001-Aug-24 01:57",
            "epoch_date_close_approach": 998618220000,
            "relative_velocity": {
              "kilometers_per_second": "7.1023621946",
              "kilometers_per_hour": "25568.5039006913",
              "miles_per_hour": "15887.2739931823"
            },
            "miss_distance": {
              "astronomical": "0.3564175427",
              "lunar": "138.6464241103",
              "kilometers": "53319305.218554049",
              "miles": "33131079.9542179162"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2025-08-26",
            "close_approach_date_full": "2025-Aug-26 01:05",
            "epoch_date_close_approach": 1756170300000,
            "relative_velocity": {
              "kilometers_per_second": "7.1608135207",
              "kilometers_per_hour": "25778.9286745999",
              "miles_per_hour": "16018.0237645035"
            },
            "miss_distance": {
              "astronomical": "0.385315971",
              "lunar": "149.887912719",
              "kilometers": "57642448.53858177",
              "miles": "35817356.648977626"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2049-08-26",
            "close_approach_date_full": "2049-Aug-26 19:32",
            "epoch_date_close_approach": 2513619120000,
            "relative_velocity": {
              "kilometers_per_second": "7.1905179088",
              "kilometers_per_hour": "25885.8644716416",
              "miles_per_hour": "16084.4695101709"
            },
            "miss_distance": {
              "astronomical": "0.3938102423",
              "lunar": "153.1921842547",
              "kilometers": "58913173.432263901",
              "miles": "36606948.4840517938"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2073-08-26",
            "close_approach_date_full": "2073-Aug-26 22:05",
            "epoch_date_close_approach": 3271010700000,
            "relative_velocity": {
              "kilometers_per_second": "7.2226003116",
              "kilometers_per_hour": "26001.3611217108",
              "miles_per_hour": "16156.2346369874"
            },
            "miss_distance": {
              "astronomical": "0.3932714184",
              "lunar": "152.9825817576",
              "kilometers": "58832566.524518808",
              "miles": "36556861.6741352304"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2097-08-27",
            "close_approach_date_full": "2097-Aug-27 13:47",
            "epoch_date_close_approach": 4028449620000,
            "relative_velocity": {
              "kilometers_per_second": "7.2767883875",
              "kilometers_per_hour": "26196.4381951562",
              "miles_per_hour": "16277.4479440958"
            },
            "miss_distance": {
              "astronomical": "0.4029233215",
              "lunar": "156.7371720635",
              "kilometers": "60276470.669725205",
              "miles": "37454062.106229629"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2121-09-01",
            "close_approach_date_full": "2121-Sep-01 00:58",
            "epoch_date_close_approach": 4786131480000,
            "relative_velocity": {
              "kilometers_per_second": "7.2930863376",
              "kilometers_per_hour": "26255.1108153592",
              "miles_per_hour": "16313.9048285769"
            },
            "miss_distance": {
              "astronomical": "0.449825514",
              "lunar": "174.982124946",
              "kilometers": "67292938.76605518",
              "miles": "41813893.213234284"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2162-08-14",
            "close_approach_date_full": "2162-Aug-14 05:10",
            "epoch_date_close_approach": 6078431400000,
            "relative_velocity": {
              "kilometers_per_second": "9.4827401592",
              "kilometers_per_hour": "34137.8645730868",
              "miles_per_hour": "21211.9414620938"
            },
            "miss_distance": {
              "astronomical": "0.4343010219",
              "lunar": "168.9430975191",
              "kilometers": "64970507.815063353",
              "miles": "40370801.5373381514"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2186-08-16",
            "close_approach_date_full": "2186-Aug-16 01:42",
            "epoch_date_close_approach": 6835974120000,
            "relative_velocity": {
              "kilometers_per_second": "8.9230139806",
              "kilometers_per_hour": "32122.8503302698",
              "miles_per_hour": "19959.8899732723"
            },
            "miss_distance": {
              "astronomical": "0.3772728044",
              "lunar": "146.7591209116",
              "kilometers": "56439207.947166628",
              "miles": "35069697.6148823464"
            },
            "orbiting_body": "Earth"
          }
        ],
        "orbital_data": {
          "orbit_id": "342",
          "orbit_determination_date": "2024-05-16 06:05:42",
          "first_observation_date": "1953-09-01",
          "last_observation_date": "2024-05-03",
          "data_arc_in_days": 25812,
          "observations_used": 2339,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".253297",
          "jupiter_tisserand_invariant": "3.441",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".4493304609037367",
          "semi_major_axis": "2.272850096549046",
          "inclination": "12.87764466183529",
          "ascending_node_longitude": "340.6027142055207",
          "orbital_period": "1251.568478707175",
          "perihelion_distance": "1.251589315101561",
          "perihelion_argument": "335.8615245607147",
          "aphelion_distance": "3.294110877996532",
          "perihelion_time": "2460878.452808092292",
          "mean_anomaly": "280.0499112788567",
          "mean_motion": ".287639075387922",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "AMO",
            "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
            "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
          }
        },
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2001917?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2001917",
        "neo_reference_id": "2001917",
        "name": "1917 Cuyo (1968 AA)",
        "name_limited": "Cuyo",
        "designation": "1917",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2001917",
        "absolute_magnitude_h": 14.41,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 3.4878273316,
            "estimated_diameter_max": 7.7990190072
          },
          "meters": {
            "estimated_diameter_min": 3487.827331593,
            "estimated_diameter_max": 7799.0190072237
          },
          "miles": {
            "estimated_diameter_min": 2.1672347569,
            "estimated_diameter_max": 4.8460842395
          },
          "feet": {
            "estimated_diameter_min": 11443.0034225837,
            "estimated_diameter_max": 25587.3335196599
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "1907-10-29",
            "close_approach_date_full": "1907-Oct-29 03:13",
            "epoch_date_close_approach": -1962132420000,
            "relative_velocity": {
              "kilometers_per_second": "18.3975558824",
              "kilometers_per_hour": "66231.20117682",
              "miles_per_hour": "41153.4927534524"
            },
            "miss_distance": {
              "astronomical": "0.4497869396",
              "lunar": "174.9671195044",
              "kilometers": "67287168.117978652",
              "miles": "41810307.4987913176"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1926-09-28",
            "close_approach_date_full": "1926-Sep-28 02:47",
            "epoch_date_close_approach": -1365196380000,
            "relative_velocity": {
              "kilometers_per_second": "15.2344899865",
              "kilometers_per_hour": "54844.1639515123",
              "miles_per_hour": "34078.0306508716"
            },
            "miss_distance": {
              "astronomical": "0.1127839866",
              "lunar": "43.8729707874",
              "kilometers": "16872244.165468542",
              "miles": "10483926.3782961996"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1948-10-19",
            "close_approach_date_full": "1948-Oct-19 11:13",
            "epoch_date_close_approach": -669041220000,
            "relative_velocity": {
              "kilometers_per_second": "15.8794160405",
              "kilometers_per_hour": "57165.8977458796",
              "miles_per_hour": "35520.6657410439"
            },
            "miss_distance": {
              "astronomical": "0.3008963742",
              "lunar": "117.0486895638",
              "kilometers": "45013456.671042954",
              "miles": "27970064.9862386052"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1967-09-19",
            "close_approach_date_full": "1967-Sep-19 00:46",
            "epoch_date_close_approach": -72141240000,
            "relative_velocity": {
              "kilometers_per_second": "17.3963066576",
              "kilometers_per_hour": "62626.7039673409",
              "miles_per_hour": "38913.7983623736"
            },
            "miss_distance": {
              "astronomical": "0.2675685763",
              "lunar": "104.0841761807",
              "kilometers": "40027689.093412481",
              "miles": "24872052.6702389978"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1989-10-10",
            "close_approach_date_full": "1989-Oct-10 02:44",
            "epoch_date_close_approach": 623990640000,
            "relative_velocity": {
              "kilometers_per_second": "14.5233960707",
              "kilometers_per_hour": "52284.225854579",
              "miles_per_hour": "32487.3846705855"
            },
            "miss_distance": {
              "astronomical": "0.1428801075",
              "lunar": "55.5803618175",
              "kilometers": "21374559.747371025",
              "miles": "13281535.554029145"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2008-09-09",
            "close_approach_date_full": "2008-Sep-09 23:04",
            "epoch_date_close_approach": 1221001440000,
            "relative_velocity": {
              "kilometers_per_second": "20.2510224336",
              "kilometers_per_hour": "72903.6807610496",
              "miles_per_hour": "45299.5120817755"
            },
            "miss_distance": {
              "astronomical": "0.4139249999",
              "lunar": "161.0168249611",
              "kilometers": "61922298.324790213",
              "miles": "38476731.9892544194"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2030-10-06",
            "close_approach_date_full": "2030-Oct-06 07:09",
            "epoch_date_close_approach": 1917500940000,
            "relative_velocity": {
              "kilometers_per_second": "14.4472036009",
              "kilometers_per_hour": "52009.9329631039",
              "miles_per_hour": "32316.9497347687"
            },
            "miss_distance": {
              "astronomical": "0.0896649136",
              "lunar": "34.8796513904",
              "kilometers": "13413680.088294032",
              "miles": "8334874.3136083616"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2049-09-08",
            "close_approach_date_full": "2049-Sep-08 07:07",
            "epoch_date_close_approach": 2514697620000,
            "relative_velocity": {
              "kilometers_per_second": "21.0639165556",
              "kilometers_per_hour": "75830.0996000102",
              "miles_per_hour": "47117.8749431286"
            },
            "miss_distance": {
              "astronomical": "0.4478440201",
              "lunar": "174.2113238189",
              "kilometers": "66996511.499197187",
              "miles": "41629701.8506757006"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2071-10-07",
            "close_approach_date_full": "2071-Oct-07 22:28",
            "epoch_date_close_approach": 3211482480000,
            "relative_velocity": {
              "kilometers_per_second": "14.4168389405",
              "kilometers_per_hour": "51900.6201858763",
              "miles_per_hour": "32249.0270260519"
            },
            "miss_distance": {
              "astronomical": "0.1043887971",
              "lunar": "40.6072420719",
              "kilometers": "15616341.698022177",
              "miles": "9703544.7718009626"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2090-09-13",
            "close_approach_date_full": "2090-Sep-13 08:55",
            "epoch_date_close_approach": 3808976100000,
            "relative_velocity": {
              "kilometers_per_second": "19.3385623584",
              "kilometers_per_hour": "69618.8244902677",
              "miles_per_hour": "43258.4301395222"
            },
            "miss_distance": {
              "astronomical": "0.3606115376",
              "lunar": "140.2778881264",
              "kilometers": "53946717.922384912",
              "miles": "33520936.1305073056"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2112-10-18",
            "close_approach_date_full": "2112-Oct-18 18:04",
            "epoch_date_close_approach": 4506257040000,
            "relative_velocity": {
              "kilometers_per_second": "15.2232509461",
              "kilometers_per_hour": "54803.7034057832",
              "miles_per_hour": "34052.8900412213"
            },
            "miss_distance": {
              "astronomical": "0.2568280159",
              "lunar": "99.9060981851",
              "kilometers": "38420924.134966133",
              "miles": "23873655.2213653154"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2131-09-24",
            "close_approach_date_full": "2131-Sep-24 05:26",
            "epoch_date_close_approach": 5103667560000,
            "relative_velocity": {
              "kilometers_per_second": "16.4047875601",
              "kilometers_per_hour": "59057.2352163028",
              "miles_per_hour": "36695.8692931521"
            },
            "miss_distance": {
              "astronomical": "0.1892475447",
              "lunar": "73.6172948883",
              "kilometers": "28311029.589849789",
              "miles": "17591658.0511095282"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2153-10-27",
            "close_approach_date_full": "2153-Oct-27 19:47",
            "epoch_date_close_approach": 5800880820000,
            "relative_velocity": {
              "kilometers_per_second": "16.9871836118",
              "kilometers_per_hour": "61153.861002512",
              "miles_per_hour": "37998.6310212553"
            },
            "miss_distance": {
              "astronomical": "0.390622938",
              "lunar": "151.952322882",
              "kilometers": "58436359.49794206",
              "miles": "36310670.043878028"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2172-10-02",
            "close_approach_date_full": "2172-Oct-02 09:41",
            "epoch_date_close_approach": 6398300460000,
            "relative_velocity": {
              "kilometers_per_second": "14.7525244523",
              "kilometers_per_hour": "53109.0880283434",
              "miles_per_hour": "32999.9219473892"
            },
            "miss_distance": {
              "astronomical": "0.0729436022",
              "lunar": "28.3750612558",
              "kilometers": "10912207.519247314",
              "miles": "6780531.3350443732"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2194-11-02",
            "close_approach_date_full": "2194-Nov-02 20:21",
            "epoch_date_close_approach": 7095241260000,
            "relative_velocity": {
              "kilometers_per_second": "18.3253686905",
              "kilometers_per_hour": "65971.3272856657",
              "miles_per_hour": "40992.017223696"
            },
            "miss_distance": {
              "astronomical": "0.4616000366",
              "lunar": "179.5624142374",
              "kilometers": "69054382.267282042",
              "miles": "42908403.4517824996"
            },
            "orbiting_body": "Earth"
          }
        ],
        "orbital_data": {
          "orbit_id": "565",
          "orbit_determination_date": "2024-05-05 06:21:04",
          "first_observation_date": "1954-05-06",
          "last_observation_date": "2023-06-25",
          "data_arc_in_days": 25252,
          "observations_used": 3646,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".0718975",
          "jupiter_tisserand_invariant": "3.434",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".5056859272463654",
          "semi_major_axis": "2.149265501967769",
          "inclination": "23.96016754704923",
          "ascending_node_longitude": "188.276495647779",
          "orbital_period": "1150.889237108281",
          "perihelion_distance": "1.062412183706573",
          "perihelion_argument": "194.5632706968263",
          "aphelion_distance": "3.236118820228966",
          "perihelion_time": "2460488.869072421107",
          "mean_anomaly": "34.91833326148356",
          "mean_motion": ".3128016045267173",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "AMO",
            "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
            "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
          }
        },
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2001943?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2001943",
        "neo_reference_id": "2001943",
        "name": "1943 Anteros (1973 EC)",
        "name_limited": "Anteros",
        "designation": "1943",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2001943",
        "absolute_magnitude_h": 15.7,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 1.9255507819,
            "estimated_diameter_max": 4.3056624424
          },
          "meters": {
            "estimated_diameter_min": 1925.5507818793,
            "estimated_diameter_max": 4305.66244241
          },
          "miles": {
            "estimated_diameter_min": 1.1964814149,
            "estimated_diameter_max": 2.6754137775
          },
          "feet": {
            "estimated_diameter_min": 6317.424027221,
            "estimated_diameter_max": 14126.1895675566
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "1908-04-11",
            "close_approach_date_full": "1908-Apr-11 07:57",
            "epoch_date_close_approach": -1947859380000,
            "relative_velocity": {
              "kilometers_per_second": "13.2592023362",
              "kilometers_per_hour": "47733.1284101677",
              "miles_per_hour": "29659.5097057512"
            },
            "miss_distance": {
              "astronomical": "0.4125322669",
              "lunar": "160.4750518241",
              "kilometers": "61713948.434511503",
              "miles": "38347269.3706966214"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1908-07-19",
            "close_approach_date_full": "1908-Jul-19 12:17",
            "epoch_date_close_approach": -1939290180000,
            "relative_velocity": {
              "kilometers_per_second": "3.6799348183",
              "kilometers_per_hour": "13247.765345804",
              "miles_per_hour": "8231.646195008"
            },
            "miss_distance": {
              "astronomical": "0.4148569109",
              "lunar": "161.3793383401",
              "kilometers": "62061710.225419783",
              "miles": "38563358.5273796854"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1913-02-09",
            "close_approach_date_full": "1913-Feb-09 10:19",
            "epoch_date_close_approach": -1795354860000,
            "relative_velocity": {
              "kilometers_per_second": "4.9303874415",
              "kilometers_per_hour": "17749.3947894636",
              "miles_per_hour": "11028.7836679309"
            },
            "miss_distance": {
              "astronomical": "0.4334676146",
              "lunar": "168.6189020794",
              "kilometers": "64845831.858140902",
              "miles": "40293331.4900403676"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1913-06-16",
            "close_approach_date_full": "1913-Jun-16 14:26",
            "epoch_date_close_approach": -1784367240000,
            "relative_velocity": {
              "kilometers_per_second": "15.136815103",
              "kilometers_per_hour": "54492.5343707384",
              "miles_per_hour": "33859.5417038624"
            },
            "miss_distance": {
              "astronomical": "0.4243604439",
              "lunar": "165.0762126771",
              "kilometers": "63483418.519694493",
              "miles": "39446767.0972422834"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1925-06-07",
            "close_approach_date_full": "1925-Jun-07 05:42",
            "epoch_date_close_approach": -1406485080000,
            "relative_velocity": {
              "kilometers_per_second": "10.7103753253",
              "kilometers_per_hour": "38557.3511709515",
              "miles_per_hour": "23958.0385650837"
            },
            "miss_distance": {
              "astronomical": "0.2612567992",
              "lunar": "101.6288948888",
              "kilometers": "39083460.683337704",
              "miles": "24285336.3426161552"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1937-05-28",
            "close_approach_date_full": "1937-May-28 20:45",
            "epoch_date_close_approach": -1028603700000,
            "relative_velocity": {
              "kilometers_per_second": "7.2023027543",
              "kilometers_per_hour": "25928.2899153326",
              "miles_per_hour": "16110.8310310021"
            },
            "miss_distance": {
              "astronomical": "0.1232067585",
              "lunar": "47.9274290565",
              "kilometers": "18431468.641204395",
              "miles": "11452783.541014851"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1949-05-22",
            "close_approach_date_full": "1949-May-22 08:44",
            "epoch_date_close_approach": -650474160000,
            "relative_velocity": {
              "kilometers_per_second": "5.7378720959",
              "kilometers_per_hour": "20656.3395454065",
              "miles_per_hour": "12835.0460914222"
            },
            "miss_distance": {
              "astronomical": "0.0655647817",
              "lunar": "25.5047000813",
              "kilometers": "9808351.689334979",
              "miles": "6094627.1281375502"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1961-05-19",
            "close_approach_date_full": "1961-May-19 05:02",
            "epoch_date_close_approach": -272055480000,
            "relative_velocity": {
              "kilometers_per_second": "5.4200576266",
              "kilometers_per_hour": "19512.2074557785",
              "miles_per_hour": "12124.1269049531"
            },
            "miss_distance": {
              "astronomical": "0.0654705959",
              "lunar": "25.4680618051",
              "kilometers": "9794261.694270733",
              "miles": "6085872.0111847954"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1973-05-12",
            "close_approach_date_full": "1973-May-12 13:39",
            "epoch_date_close_approach": 106061940000,
            "relative_velocity": {
              "kilometers_per_second": "5.5534662604",
              "kilometers_per_hour": "19992.4785376094",
              "miles_per_hour": "12422.548677994"
            },
            "miss_distance": {
              "astronomical": "0.1088201229",
              "lunar": "42.3310278081",
              "kilometers": "16279258.598978223",
              "miles": "10115462.2331885574"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1985-04-28",
            "close_approach_date_full": "1985-Apr-28 05:48",
            "epoch_date_close_approach": 483515280000,
            "relative_velocity": {
              "kilometers_per_second": "8.1987270599",
              "kilometers_per_hour": "29515.4174157163",
              "miles_per_hour": "18339.7325603377"
            },
            "miss_distance": {
              "astronomical": "0.2357728598",
              "lunar": "91.7156424622",
              "kilometers": "35271117.629888626",
              "miles": "21916456.2156339988"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1997-04-14",
            "close_approach_date_full": "1997-Apr-14 00:13",
            "epoch_date_close_approach": 860976780000,
            "relative_velocity": {
              "kilometers_per_second": "12.8240477917",
              "kilometers_per_hour": "46166.5720499886",
              "miles_per_hour": "28686.1125051721"
            },
            "miss_distance": {
              "astronomical": "0.3973373128",
              "lunar": "154.5642146792",
              "kilometers": "59440815.666403736",
              "miles": "36934810.1651981168"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1997-07-17",
            "close_approach_date_full": "1997-Jul-17 09:05",
            "epoch_date_close_approach": 869130300000,
            "relative_velocity": {
              "kilometers_per_second": "3.5181730671",
              "kilometers_per_hour": "12665.4230416999",
              "miles_per_hour": "7869.8013338829"
            },
            "miss_distance": {
              "astronomical": "0.4054655001",
              "lunar": "157.7260795389",
              "kilometers": "60656775.173444787",
              "miles": "37690372.3669885806"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2002-02-09",
            "close_approach_date_full": "2002-Feb-09 10:15",
            "epoch_date_close_approach": 1013249700000,
            "relative_velocity": {
              "kilometers_per_second": "5.0916732195",
              "kilometers_per_hour": "18330.0235902222",
              "miles_per_hour": "11389.5638247133"
            },
            "miss_distance": {
              "astronomical": "0.4409028894",
              "lunar": "171.5112239766",
              "kilometers": "65958133.131085578",
              "miles": "40984483.4519058564"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2002-06-18",
            "close_approach_date_full": "2002-Jun-18 08:01",
            "epoch_date_close_approach": 1024387260000,
            "relative_velocity": {
              "kilometers_per_second": "15.5040724129",
              "kilometers_per_hour": "55814.6606863208",
              "miles_per_hour": "34681.059580342"
            },
            "miss_distance": {
              "astronomical": "0.4392583019",
              "lunar": "170.8714794391",
              "kilometers": "65712106.344056953",
              "miles": "40831609.4953058314"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2014-06-08",
            "close_approach_date_full": "2014-Jun-08 20:19",
            "epoch_date_close_approach": 1402258740000,
            "relative_velocity": {
              "kilometers_per_second": "11.0078691928",
              "kilometers_per_hour": "39628.3290941434",
              "miles_per_hour": "24623.5025974137"
            },
            "miss_distance": {
              "astronomical": "0.2739522556",
              "lunar": "106.5674274284",
              "kilometers": "40982673.919455572",
              "miles": "25465452.7248160136"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2026-05-30",
            "close_approach_date_full": "2026-May-30 08:25",
            "epoch_date_close_approach": 1780129500000,
            "relative_velocity": {
              "kilometers_per_second": "7.3908130851",
              "kilometers_per_hour": "26606.9271062251",
              "miles_per_hour": "16532.5097899764"
            },
            "miss_distance": {
              "astronomical": "0.1321633951",
              "lunar": "51.4115606939",
              "kilometers": "19771362.398928437",
              "miles": "12285354.9152169506"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2038-05-23",
            "close_approach_date_full": "2038-May-23 09:26",
            "epoch_date_close_approach": 2158219560000,
            "relative_velocity": {
              "kilometers_per_second": "5.7770350963",
              "kilometers_per_hour": "20797.3263465685",
              "miles_per_hour": "12922.6498068442"
            },
            "miss_distance": {
              "astronomical": "0.0664095371",
              "lunar": "25.8333099319",
              "kilometers": "9934725.297845977",
              "miles": "6173152.0472174026"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2050-05-20",
            "close_approach_date_full": "2050-May-20 09:34",
            "epoch_date_close_approach": 2536652040000,
            "relative_velocity": {
              "kilometers_per_second": "5.4511566188",
              "kilometers_per_hour": "19624.1638277647",
              "miles_per_hour": "12193.6922406464"
            },
            "miss_distance": {
              "astronomical": "0.0636292081",
              "lunar": "24.7517619509",
              "kilometers": "9518794.001546747",
              "miles": "5914704.3240772286"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2062-05-14",
            "close_approach_date_full": "2062-May-14 21:01",
            "epoch_date_close_approach": 2914866060000,
            "relative_velocity": {
              "kilometers_per_second": "5.468429542",
              "kilometers_per_hour": "19686.3463510386",
              "miles_per_hour": "12232.3300423995"
            },
            "miss_distance": {
              "astronomical": "0.0960103637",
              "lunar": "37.3480314793",
              "kilometers": "14362945.907445319",
              "miles": "8924720.7420866422"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2074-05-01",
            "close_approach_date_full": "2074-May-01 12:27",
            "epoch_date_close_approach": 3292403220000,
            "relative_velocity": {
              "kilometers_per_second": "7.7137586193",
              "kilometers_per_hour": "27769.5310295462",
              "miles_per_hour": "17254.9066555533"
            },
            "miss_distance": {
              "astronomical": "0.2150405511",
              "lunar": "83.6507743779",
              "kilometers": "32169608.408186157",
              "miles": "19989267.7501846866"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2086-04-17",
            "close_approach_date_full": "2086-Apr-17 03:36",
            "epoch_date_close_approach": 3669852960000,
            "relative_velocity": {
              "kilometers_per_second": "12.2326991302",
              "kilometers_per_hour": "44037.7168688384",
              "miles_per_hour": "27363.324684418"
            },
            "miss_distance": {
              "astronomical": "0.3763656465",
              "lunar": "146.4062364885",
              "kilometers": "56303499.057572955",
              "miles": "34985372.021118579"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2086-07-13",
            "close_approach_date_full": "2086-Jul-13 05:06",
            "epoch_date_close_approach": 3677375160000,
            "relative_velocity": {
              "kilometers_per_second": "3.4329070621",
              "kilometers_per_hour": "12358.4654235163",
              "miles_per_hour": "7679.0698071844"
            },
            "miss_distance": {
              "astronomical": "0.3914997382",
              "lunar": "152.2933981598",
              "kilometers": "58567526.940277634",
              "miles": "36392173.7131699892"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2091-02-08",
            "close_approach_date_full": "2091-Feb-08 22:30",
            "epoch_date_close_approach": 3821812200000,
            "relative_velocity": {
              "kilometers_per_second": "5.2965957672",
              "kilometers_per_hour": "19067.7447618918",
              "miles_per_hour": "11847.9550716322"
            },
            "miss_distance": {
              "astronomical": "0.4506305457",
              "lunar": "175.2952822773",
              "kilometers": "67413369.793657659",
              "miles": "41888725.5837633342"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2091-06-20",
            "close_approach_date_full": "2091-Jun-20 09:47",
            "epoch_date_close_approach": 3833171220000,
            "relative_velocity": {
              "kilometers_per_second": "15.9940958295",
              "kilometers_per_hour": "57578.7449863498",
              "miles_per_hour": "35777.1929611016"
            },
            "miss_distance": {
              "astronomical": "0.4586756224",
              "lunar": "178.4248171136",
              "kilometers": "68616896.131964288",
              "miles": "42636562.1727436544"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2098-08-11",
            "close_approach_date_full": "2098-Aug-11 14:32",
            "epoch_date_close_approach": 4058605920000,
            "relative_velocity": {
              "kilometers_per_second": "5.0873284985",
              "kilometers_per_hour": "18314.3825945645",
              "miles_per_hour": "11379.8451182726"
            },
            "miss_distance": {
              "astronomical": "0.4926462525",
              "lunar": "191.6393922225",
              "kilometers": "73698830.037482175",
              "miles": "45794329.474017015"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2103-06-11",
            "close_approach_date_full": "2103-Jun-11 17:04",
            "epoch_date_close_approach": 4211024640000,
            "relative_velocity": {
              "kilometers_per_second": "11.3793698499",
              "kilometers_per_hour": "40965.7314597948",
              "miles_per_hour": "25454.5124173375"
            },
            "miss_distance": {
              "astronomical": "0.2895007265",
              "lunar": "112.6157826085",
              "kilometers": "43308692.047852555",
              "miles": "26910773.369393059"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2115-06-01",
            "close_approach_date_full": "2115-Jun-01 17:52",
            "epoch_date_close_approach": 4588854720000,
            "relative_velocity": {
              "kilometers_per_second": "7.5421409086",
              "kilometers_per_hour": "27151.7072709532",
              "miles_per_hour": "16871.0149984431"
            },
            "miss_distance": {
              "astronomical": "0.139587661",
              "lunar": "54.299600129",
              "kilometers": "20882016.76388207",
              "miles": "12975483.535909766"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2127-05-24",
            "close_approach_date_full": "2127-May-24 21:51",
            "epoch_date_close_approach": 4966869060000,
            "relative_velocity": {
              "kilometers_per_second": "5.7506209723",
              "kilometers_per_hour": "20702.235500428",
              "miles_per_hour": "12863.5640530299"
            },
            "miss_distance": {
              "astronomical": "0.0650662995",
              "lunar": "25.3107905055",
              "kilometers": "9733779.813982065",
              "miles": "6048290.313459897"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2139-05-20",
            "close_approach_date_full": "2139-May-20 15:23",
            "epoch_date_close_approach": 5345191380000,
            "relative_velocity": {
              "kilometers_per_second": "5.4042131285",
              "kilometers_per_hour": "19455.167262718",
              "miles_per_hour": "12088.684347215"
            },
            "miss_distance": {
              "astronomical": "0.0683525088",
              "lunar": "26.5891259232",
              "kilometers": "10225389.725636256",
              "miles": "6353762.5476260928"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2151-05-10",
            "close_approach_date_full": "2151-May-10 11:55",
            "epoch_date_close_approach": 5723006100000,
            "relative_velocity": {
              "kilometers_per_second": "6.2680586808",
              "kilometers_per_hour": "22565.0112508682",
              "miles_per_hour": "14021.0204630742"
            },
            "miss_distance": {
              "astronomical": "0.1481642967",
              "lunar": "57.6359114163",
              "kilometers": "22165063.196368029",
              "miles": "13772731.6201716402"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2163-04-25",
            "close_approach_date_full": "2163-Apr-25 13:35",
            "epoch_date_close_approach": 6100407300000,
            "relative_velocity": {
              "kilometers_per_second": "10.0379555076",
              "kilometers_per_hour": "36136.6398274604",
              "miles_per_hour": "22453.9026750128"
            },
            "miss_distance": {
              "astronomical": "0.2978551285",
              "lunar": "115.8656449865",
              "kilometers": "44558492.792176295",
              "miles": "27687363.540951071"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2168-02-03",
            "close_approach_date_full": "2168-Feb-03 10:35",
            "epoch_date_close_approach": 6251164500000,
            "relative_velocity": {
              "kilometers_per_second": "6.2393638681",
              "kilometers_per_hour": "22461.7099251674",
              "miles_per_hour": "13956.8330365575"
            },
            "miss_distance": {
              "astronomical": "0.4867115119",
              "lunar": "189.3307781291",
              "kilometers": "72811005.484719653",
              "miles": "45242660.8781430914"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2175-04-12",
            "close_approach_date_full": "2175-Apr-12 16:50",
            "epoch_date_close_approach": 6477987000000,
            "relative_velocity": {
              "kilometers_per_second": "14.9808364181",
              "kilometers_per_hour": "53931.0111051636",
              "miles_per_hour": "33510.6329836501"
            },
            "miss_distance": {
              "astronomical": "0.4683915721",
              "lunar": "182.2043215469",
              "kilometers": "70070381.512111427",
              "miles": "43539716.1081626126"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2175-08-03",
            "close_approach_date_full": "2175-Aug-03 19:06",
            "epoch_date_close_approach": 6487758360000,
            "relative_velocity": {
              "kilometers_per_second": "4.185536687",
              "kilometers_per_hour": "15067.9320731868",
              "miles_per_hour": "9362.6270151421"
            },
            "miss_distance": {
              "astronomical": "0.4511330659",
              "lunar": "175.4907626351",
              "kilometers": "67488545.745209633",
              "miles": "41935437.7539856154"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2180-02-23",
            "close_approach_date_full": "2180-Feb-23 19:43",
            "epoch_date_close_approach": 6631616580000,
            "relative_velocity": {
              "kilometers_per_second": "3.671684452",
              "kilometers_per_hour": "13218.06402717",
              "miles_per_hour": "8213.1909506602"
            },
            "miss_distance": {
              "astronomical": "0.4035358886",
              "lunar": "156.9754606654",
              "kilometers": "60368109.403117282",
              "miles": "37511003.7747392116"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2180-06-16",
            "close_approach_date_full": "2180-Jun-16 03:59",
            "epoch_date_close_approach": 6641409540000,
            "relative_velocity": {
              "kilometers_per_second": "13.4145453162",
              "kilometers_per_hour": "48292.363138298",
              "miles_per_hour": "30006.9964177941"
            },
            "miss_distance": {
              "astronomical": "0.3669611826",
              "lunar": "142.7479000314",
              "kilometers": "54896611.289641062",
              "miles": "34111172.4992961756"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2192-06-06",
            "close_approach_date_full": "2192-Jun-06 01:59",
            "epoch_date_close_approach": 7019229540000,
            "relative_velocity": {
              "kilometers_per_second": "9.0785215085",
              "kilometers_per_hour": "32682.6774304402",
              "miles_per_hour": "20307.7447622644"
            },
            "miss_distance": {
              "astronomical": "0.203838334",
              "lunar": "79.293111926",
              "kilometers": "30493780.59074858",
              "miles": "18947956.630667204"
            },
            "orbiting_body": "Earth"
          }
        ],
        "orbital_data": {
          "orbit_id": "775",
          "orbit_determination_date": "2024-04-11 06:19:11",
          "first_observation_date": "1973-03-10",
          "last_observation_date": "2024-04-10",
          "data_arc_in_days": 18659,
          "observations_used": 5761,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".0637451",
          "jupiter_tisserand_invariant": "4.640",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".2561211105938557",
          "semi_major_axis": "1.430429373177625",
          "inclination": "8.708662579039903",
          "ascending_node_longitude": "246.2950687062965",
          "orbital_period": "624.8820596015659",
          "perihelion_distance": "1.064066213493299",
          "perihelion_argument": "338.4561585752549",
          "aphelion_distance": "1.796792532861952",
          "perihelion_time": "2460548.592807355109",
          "mean_anomaly": "29.90418602204014",
          "mean_motion": ".5761087143861058",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "AMO",
            "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
            "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
          }
        },
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2001980?api_key=GclS3bly2FvqUWjGUkj3h5pvYjWmFgWbfkjRcaXh"
        },
        "id": "2001980",
        "neo_reference_id": "2001980",
        "name": "1980 Tezcatlipoca (1950 LA)",
        "name_limited": "Tezcatlipoca",
        "designation": "1980",
        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2001980",
        "absolute_magnitude_h": 13.85,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 4.5139316282,
            "estimated_diameter_max": 10.0934579665
          },
          "meters": {
            "estimated_diameter_min": 4513.9316282433,
            "estimated_diameter_max": 10093.4579665384
          },
          "miles": {
            "estimated_diameter_min": 2.8048262098,
            "estimated_diameter_max": 6.2717820701
          },
          "feet": {
            "estimated_diameter_min": 14809.4874432058,
            "estimated_diameter_max": 33115.0206349377
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "1921-07-08",
            "close_approach_date_full": "1921-Jul-08 00:32",
            "epoch_date_close_approach": -1530055680000,
            "relative_velocity": {
              "kilometers_per_second": "12.9006036658",
              "kilometers_per_hour": "46442.1731970089",
              "miles_per_hour": "28857.3603401081"
            },
            "miss_distance": {
              "astronomical": "0.479008851",
              "lunar": "186.334443039",
              "kilometers": "71658703.82074737",
              "miles": "44526653.825838906"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1921-11-16",
            "close_approach_date_full": "1921-Nov-16 02:26",
            "epoch_date_close_approach": -1518730440000,
            "relative_velocity": {
              "kilometers_per_second": "16.7529309212",
              "kilometers_per_hour": "60310.551316293",
              "miles_per_hour": "37474.6311776155"
            },
            "miss_distance": {
              "astronomical": "0.2701653503",
              "lunar": "105.0943212667",
              "kilometers": "40416160.952683861",
              "miles": "25113437.8904088418"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1930-11-17",
            "close_approach_date_full": "1930-Nov-17 10:44",
            "epoch_date_close_approach": -1234617360000,
            "relative_velocity": {
              "kilometers_per_second": "13.8569935699",
              "kilometers_per_hour": "49885.1768516209",
              "miles_per_hour": "30996.7089164975"
            },
            "miss_distance": {
              "astronomical": "0.339166099",
              "lunar": "131.935612511",
              "kilometers": "50738525.98660913",
              "miles": "31527458.100420794"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1959-07-08",
            "close_approach_date_full": "1959-Jul-08 17:04",
            "epoch_date_close_approach": -330850560000,
            "relative_velocity": {
              "kilometers_per_second": "12.8672048258",
              "kilometers_per_hour": "46321.9373727554",
              "miles_per_hour": "28782.6504747546"
            },
            "miss_distance": {
              "astronomical": "0.4819694383",
              "lunar": "187.4861114987",
              "kilometers": "72101601.374776421",
              "miles": "44801857.6045437698"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1959-11-16",
            "close_approach_date_full": "1959-Nov-16 16:37",
            "epoch_date_close_approach": -319533780000,
            "relative_velocity": {
              "kilometers_per_second": "16.8143080892",
              "kilometers_per_hour": "60531.509121197",
              "miles_per_hour": "37611.9257647793"
            },
            "miss_distance": {
              "astronomical": "0.2726655942",
              "lunar": "106.0669161438",
              "kilometers": "40790192.114604354",
              "miles": "25345850.0773299252"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1968-11-16",
            "close_approach_date_full": "1968-Nov-16 22:23",
            "epoch_date_close_approach": -35429820000,
            "relative_velocity": {
              "kilometers_per_second": "13.8743387492",
              "kilometers_per_hour": "49947.6194972726",
              "miles_per_hour": "31035.5083481803"
            },
            "miss_distance": {
              "astronomical": "0.3369657929",
              "lunar": "131.0796934381",
              "kilometers": "50409364.880701123",
              "miles": "31322926.8734485774"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1997-07-08",
            "close_approach_date_full": "1997-Jul-08 05:19",
            "epoch_date_close_approach": 868339140000,
            "relative_velocity": {
              "kilometers_per_second": "12.844000659",
              "kilometers_per_hour": "46238.4023722632",
              "miles_per_hour": "28730.7450740321"
            },
            "miss_distance": {
              "astronomical": "0.4838779066",
              "lunar": "188.2285056674",
              "kilometers": "72387104.167418942",
              "miles": "44979260.8135957196"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "1997-11-16",
            "close_approach_date_full": "1997-Nov-16 07:56",
            "epoch_date_close_approach": 879666960000,
            "relative_velocity": {
              "kilometers_per_second": "16.8865755747",
              "kilometers_per_hour": "60791.6720688192",
              "miles_per_hour": "37773.5809029838"
            },
            "miss_distance": {
              "astronomical": "0.2742866209",
              "lunar": "106.6974955301",
              "kilometers": "41032694.256137483",
              "miles": "25496533.9207759454"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2006-11-17",
            "close_approach_date_full": "2006-Nov-17 07:34",
            "epoch_date_close_approach": 1163748840000,
            "relative_velocity": {
              "kilometers_per_second": "13.9179418889",
              "kilometers_per_hour": "50104.5908001149",
              "miles_per_hour": "31133.0442113269"
            },
            "miss_distance": {
              "astronomical": "0.3304057756",
              "lunar": "128.5278467084",
              "kilometers": "49428000.265457972",
              "miles": "30713135.1779531336"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2035-07-08",
            "close_approach_date_full": "2035-Jul-08 15:27",
            "epoch_date_close_approach": 2067521220000,
            "relative_velocity": {
              "kilometers_per_second": "12.8046675022",
              "kilometers_per_hour": "46096.8030078059",
              "miles_per_hour": "28642.7607356003"
            },
            "miss_distance": {
              "astronomical": "0.486948049",
              "lunar": "189.422791061",
              "kilometers": "72846390.93105563",
              "miles": "45264648.374922494"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2035-11-17",
            "close_approach_date_full": "2035-Nov-17 00:45",
            "epoch_date_close_approach": 2078873100000,
            "relative_velocity": {
              "kilometers_per_second": "17.0299239451",
              "kilometers_per_hour": "61307.7262024108",
              "miles_per_hour": "38094.2368728257"
            },
            "miss_distance": {
              "astronomical": "0.2784577354",
              "lunar": "108.3200590706",
              "kilometers": "41656684.100863598",
              "miles": "25884263.2310417324"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2044-11-16",
            "close_approach_date_full": "2044-Nov-16 18:05",
            "epoch_date_close_approach": 2362932300000,
            "relative_velocity": {
              "kilometers_per_second": "13.9487111383",
              "kilometers_per_hour": "50215.3600977536",
              "miles_per_hour": "31201.8719451848"
            },
            "miss_distance": {
              "astronomical": "0.3259072079",
              "lunar": "126.7779038731",
              "kilometers": "48755024.119487173",
              "miles": "30294967.1915540674"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2073-07-08",
            "close_approach_date_full": "2073-Jul-08 02:32",
            "epoch_date_close_approach": 3266706720000,
            "relative_velocity": {
              "kilometers_per_second": "12.7757300892",
              "kilometers_per_hour": "45992.6283210815",
              "miles_per_hour": "28578.0306365075"
            },
            "miss_distance": {
              "astronomical": "0.4895919982",
              "lunar": "190.4512872998",
              "kilometers": "73241920.099763834",
              "miles": "45510418.8038315492"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2073-11-16",
            "close_approach_date_full": "2073-Nov-16 16:09",
            "epoch_date_close_approach": 3278074140000,
            "relative_velocity": {
              "kilometers_per_second": "17.1490947905",
              "kilometers_per_hour": "61736.7412458662",
              "miles_per_hour": "38360.8101369106"
            },
            "miss_distance": {
              "astronomical": "0.2828994357",
              "lunar": "110.0478804873",
              "kilometers": "42321153.004921959",
              "miles": "26297145.0624386742"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2082-11-17",
            "close_approach_date_full": "2082-Nov-17 03:15",
            "epoch_date_close_approach": 3562110900000,
            "relative_velocity": {
              "kilometers_per_second": "13.9996671818",
              "kilometers_per_hour": "50398.8018544091",
              "miles_per_hour": "31315.8555189244"
            },
            "miss_distance": {
              "astronomical": "0.3182760905",
              "lunar": "123.8093992045",
              "kilometers": "47613425.210727235",
              "miles": "29585610.522956443"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2111-07-09",
            "close_approach_date_full": "2111-Jul-09 07:57",
            "epoch_date_close_approach": 4465871820000,
            "relative_velocity": {
              "kilometers_per_second": "12.7465202852",
              "kilometers_per_hour": "45887.4730267405",
              "miles_per_hour": "28512.6912259766"
            },
            "miss_distance": {
              "astronomical": "0.4926367892",
              "lunar": "191.6357109988",
              "kilometers": "73697414.347959004",
              "miles": "45793449.8053380952"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2111-11-18",
            "close_approach_date_full": "2111-Nov-18 10:05",
            "epoch_date_close_approach": 4477284300000,
            "relative_velocity": {
              "kilometers_per_second": "17.3358700743",
              "kilometers_per_hour": "62409.1322675153",
              "miles_per_hour": "38778.6077692236"
            },
            "miss_distance": {
              "astronomical": "0.2881642882",
              "lunar": "112.0959081098",
              "kilometers": "43108763.724786134",
              "miles": "26786543.6700472892"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2120-11-17",
            "close_approach_date_full": "2120-Nov-17 12:34",
            "epoch_date_close_approach": 4761290040000,
            "relative_velocity": {
              "kilometers_per_second": "14.0535054518",
              "kilometers_per_hour": "50592.6196265844",
              "miles_per_hour": "31436.2863451963"
            },
            "miss_distance": {
              "astronomical": "0.3109058256",
              "lunar": "120.9423661584",
              "kilometers": "46510849.280351472",
              "miles": "28900501.6087434336"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2149-07-08",
            "close_approach_date_full": "2149-Jul-08 14:56",
            "epoch_date_close_approach": 5665042560000,
            "relative_velocity": {
              "kilometers_per_second": "12.7121024455",
              "kilometers_per_hour": "45763.5688039433",
              "miles_per_hour": "28435.701960428"
            },
            "miss_distance": {
              "astronomical": "0.4966513458",
              "lunar": "193.1973735162",
              "kilometers": "74297983.464313446",
              "miles": "46166626.1498237148"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2149-11-18",
            "close_approach_date_full": "2149-Nov-18 03:26",
            "epoch_date_close_approach": 5676492360000,
            "relative_velocity": {
              "kilometers_per_second": "17.5471666761",
              "kilometers_per_hour": "63169.8000341184",
              "miles_per_hour": "39251.2571378665"
            },
            "miss_distance": {
              "astronomical": "0.2969570943",
              "lunar": "115.5163096827",
              "kilometers": "44424148.788669141",
              "miles": "27603886.0480745058"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2158-11-17",
            "close_approach_date_full": "2158-Nov-17 21:28",
            "epoch_date_close_approach": 5960467680000,
            "relative_velocity": {
              "kilometers_per_second": "14.1153620963",
              "kilometers_per_hour": "50815.3035467768",
              "miles_per_hour": "31574.6534732736"
            },
            "miss_distance": {
              "astronomical": "0.3029137649",
              "lunar": "117.8334545461",
              "kilometers": "45315254.022720763",
              "miles": "28157593.1647740094"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2187-07-08",
            "close_approach_date_full": "2187-Jul-08 20:39",
            "epoch_date_close_approach": 6864208740000,
            "relative_velocity": {
              "kilometers_per_second": "12.6971435015",
              "kilometers_per_hour": "45709.7166052294",
              "miles_per_hour": "28402.2402983993"
            },
            "miss_distance": {
              "astronomical": "0.4995149574",
              "lunar": "194.3113184286",
              "kilometers": "74726373.660180738",
              "miles": "46432815.4741726644"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2187-11-18",
            "close_approach_date_full": "2187-Nov-18 21:15",
            "epoch_date_close_approach": 6875702100000,
            "relative_velocity": {
              "kilometers_per_second": "17.7225700418",
              "kilometers_per_hour": "63801.2521504148",
              "miles_per_hour": "39643.6169264619"
            },
            "miss_distance": {
              "astronomical": "0.3028494434",
              "lunar": "117.8084334826",
              "kilometers": "45305631.663325558",
              "miles": "28151614.1078983804"
            },
            "orbiting_body": "Earth"
          },
          {
            "close_approach_date": "2196-11-17",
            "close_approach_date_full": "2196-Nov-17 06:40",
            "epoch_date_close_approach": 7159646400000,
            "relative_velocity": {
              "kilometers_per_second": "14.1957558728",
              "kilometers_per_hour": "51104.7211420318",
              "miles_per_hour": "31754.4863118363"
            },
            "miss_distance": {
              "astronomical": "0.2941984373",
              "lunar": "114.4431921097",
              "kilometers": "44011459.577408551",
              "miles": "27347452.8631619638"
            },
            "orbiting_body": "Earth"
          }
        ],
        "orbital_data": {
          "orbit_id": "797",
          "orbit_determination_date": "2024-09-25 06:24:51",
          "first_observation_date": "1950-06-19",
          "last_observation_date": "2024-09-24",
          "data_arc_in_days": 27126,
          "observations_used": 7494,
          "orbit_uncertainty": "0",
          "minimum_orbit_intersection": ".245309",
          "jupiter_tisserand_invariant": "3.996",
          "epoch_osculation": "2460600.5",
          "eccentricity": ".3646719380969484",
          "semi_major_axis": "1.709652145912937",
          "inclination": "26.87082083015787",
          "ascending_node_longitude": "246.5449690572766",
          "orbital_period": "816.5072784770053",
          "perihelion_distance": "1.08618998439126",
          "perihelion_argument": "115.509413237376",
          "aphelion_distance": "2.333114307434615",
          "perihelion_time": "2460520.990030821135",
          "mean_anomaly": "35.05613441411303",
          "mean_motion": ".4409023771000449",
          "equinox": "J2000",
          "orbit_class": {
            "orbit_class_type": "AMO",
            "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
            "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
          }
        },
        "is_sentry_object": false
      }
    ]
  }
const fetchData = null
export const data = fetchData || demoData