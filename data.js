var APP_DATA = {
  "scenes": [
    {
      "id": "0-front",
      "name": "front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.02876354965750494,
        "pitch": 0.1159800169983285,
        "fov": 1.0093660704207812
      },
      "linkHotspots": [
        {
          "yaw": -0.622935468011077,
          "pitch": 0.358647668543016,
          "rotation": 0,
          "target": "1-front_left_side"
        },
        {
          "yaw": 0.46328152538654876,
          "pitch": 0.4073882263004016,
          "rotation": 0,
          "target": "2-front_right_side"
        },
        {
          "yaw": -0.06665116193304677,
          "pitch": 0.066968123557551,
          "rotation": 0,
          "target": "8-front_open"
        },
        // {
        //   "yaw": 0.39869004237339745,
        //   "pitch": -0.2547358294832751,
        //   "rotation": 0,
        //   "target": "12-front_interior"
        // }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-front_left_side",
      "name": "front_left_side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 0.02137137859585536,
        "pitch": 0.16565812546588177,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -0.6020827392041426,
          "pitch": 0.354327563063487,
          "rotation": 0,
          "target": "3-left_side"
        },
        {
          "yaw": 0.6417007488733866,
          "pitch": 0.5927653287194836,
          "rotation": 0,
          "target": "0-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-front_right_side",
      "name": "front_right_side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5873482444462041,
          "pitch": 0.5079000396877387,
          "rotation": 0,
          "target": "0-front"
        },
        {
          "yaw": 0.5954684671971968,
          "pitch": 0.3846538704394469,
          "rotation": 0,
          "target": "7-right_side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-left_side",
      "name": "left_side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.1050759447629197,
        "pitch": 0.03214262135905699,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -0.8412503485409601,
          "pitch": 0.4143489188249738,
          "rotation": 0,
          "target": "4-back_left_side"
        },
        {
          "yaw": 0.6394682874564772,
          "pitch": 0.4190666913410137,
          "rotation": 0,
          "target": "1-front_left_side"
        },
        {
          "yaw": -0.1139398955853661,
          "pitch": 0.11150414230893269,
          "rotation": 0,
          "target": "9-left_side_open"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-back_left_side",
      "name": "back_left_side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5057459498247869,
          "pitch": 0.39984565115068627,
          "rotation": 0,
          "target": "3-left_side"
        },
        {
          "yaw": -0.6404567684333227,
          "pitch": 0.39798285196996197,
          "rotation": 0,
          "target": "5-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-back",
      "name": "back",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6270692986665942,
          "pitch": 0.4015099815995171,
          "rotation": 0,
          "target": "4-back_left_side"
        },
        {
          "yaw": -0.8077417689220354,
          "pitch": 0.39536922403258856,
          "rotation": 0,
          "target": "6-back_right_side"
        },
        {
          "yaw": -0.09106313543692579,
          "pitch": -7.514654853935099e-8,
          "rotation": 0,
          "target": "10-back_open"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-back_right_side",
      "name": "back_right_side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5367533399972064,
          "pitch": 0.4254492938172163,
          "rotation": 0,
          "target": "5-back"
        },
        {
          "yaw": -0.5893864313210724,
          "pitch": 0.347681533105888,
          "rotation": 0,
          "target": "7-right_side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-right_side",
      "name": "right_side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6808450002201063,
          "pitch": 0.42930435460260696,
          "rotation": 0,
          "target": "6-back_right_side"
        },
        {
          "yaw": -0.775762814887889,
          "pitch": 0.36000813904151485,
          "rotation": 0,
          "target": "2-front_right_side"
        },
        {
          "yaw": -0.020616692525027958,
          "pitch": 0.0029450202783056767,
          "rotation": 0,
          "target": "11-right_side_open"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-front_open",
      "name": "front_open",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        // {
        //   "yaw": -0.050034652216350395,
        //   "pitch": 0.05290612344230894,
        //   "rotation": 0,
        //   "target": "0-front"
        // },
        {
          "yaw": -0.6826216191100976,
          "pitch": 0.3526038417970039,
          "rotation": 0,
          "target": "1-front_left_side"
        },
        {
          "yaw": 0.44284057182811587,
          "pitch": 0.4358872925863686,
          "rotation": 0,
          "target": "2-front_right_side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-left_side_open",
      "name": "left_side_open",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7495915812580662,
          "pitch": 0.39983682286654343,
          "rotation": 0,
          "target": "4-back_left_side"
        },
        {
          "yaw": 0.5791394383709996,
          "pitch": 0.4114555602341827,
          "rotation": 0,
          "target": "1-front_left_side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-back_open",
      "name": "back_open",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7792359084287988,
          "pitch": 0.3795001255144168,
          "rotation": 0,
          "target": "6-back_right_side"
        },
        {
          "yaw": 0.7019471822107892,
          "pitch": 0.39141633583020763,
          "rotation": 0,
          "target": "2-front_right_side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-right_side_open",
      "name": "right_side_open",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7742584157302623,
          "pitch": 0.35865037055887505,
          "rotation": 0,
          "target": "2-front_right_side"
        },
        {
          "yaw": 0.6700811653816068,
          "pitch": 0.4191754299477033,
          "rotation": 0,
          "target": "6-back_right_side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-front_interior",
      "name": "front_interior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.14996710180108508,
        "pitch": 0.3531672268740209,
        "fov": 1.2618400982144773
      },
      "linkHotspots": [
        {
          "yaw": -1.383769229122274,
          "pitch": 0.5552842013864083,
          "rotation": 0,
          "target": "14-side_interior"
        },
        {
          "yaw": -2.361850696653965,
          "pitch": 0.205490159807578,
          "rotation": 0,
          "target": "13-back_interior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-back_interior",
      "name": "back_interior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 0.06767603222018792,
        "pitch": 0.4045011605163342,
        "fov": 1.2618400982144773
      },
      "linkHotspots": [
        {
          "yaw": -0.017572955425780634,
          "pitch": 0.4332981413679242,
          "rotation": 0,
          "target": "12-front_interior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-side_interior",
      "name": "side_interior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 0.8441831482186544,
        "pitch": 0.5596871403370631,
        "fov": 1.2618400982144773
      },
      "linkHotspots": [
        {
          "yaw": 1.3921238816790495,
          "pitch": 0.7092470102920672,
          "rotation": 0,
          "target": "12-front_interior"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
