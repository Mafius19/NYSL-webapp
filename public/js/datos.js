let data = {
  estadios: [
    {
      nombre: "AJ Katzenmaier",
      direccion: "24 W. Walton St., Chicago, IL 60610",
      mapUrl: "https://www.google.com/maps?ll=41.900292,-87.62905&z=15&t=m&hl=es-AR&gl=AR&mapclient=embed&q=24+W+Walton+St+Chicago,+IL+60610+EE.+UU.",
      imagen: "https://geo1.ggpht.com/cbk?panoid=m1wWbSnUkT56pYKk0-lN8A&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=240&yaw=36.838936&pitch=0&thumbfov=100",
      iframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6540604261604!2d-87.63123908508629!3d41.90029637200477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1553138763808"
    },
    {
      nombre: "Greenbay",
      direccion: "1734 N. Orleans St., Chicago, IL 60614",
      mapUrl: "https://www.google.com/maps?ll=41.913802,-87.637839&z=15&t=m&hl=es-AR&gl=AR&mapclient=embed&q=1734+N+Orleans+St+Chicago,+IL+60614+EE.+UU.",
      imagen: "https://geo0.ggpht.com/cbk?panoid=mCXdhZTTspBL2g65jbsVGQ&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=240&yaw=243.31946&pitch=0&thumbfov=100",
      iframeUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0258843688616!2d-87.64002798455778!3d41.91380227921926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734+N+Orleans+St%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1553178372307"
    },
    {
      nombre: "Howard A Yeager",
      direccion: "2245 N. Southport Ave., Chicago, IL 60614",
      mapUrl: "https://www.google.com/maps?ll=41.923265,-87.662926&z=15&t=m&hl=es-AR&gl=AR&mapclient=embed&q=2245+N+Southport+Ave+Chicago,+IL+60614+EE.+UU.",
      imagen: "https://geo3.ggpht.com/cbk?panoid=MltFUi3kcxUqV8JckPzjAA&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=240&yaw=89.94208&pitch=0&thumbfov=100",
      iframeUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846813!2d-87.6651145850855!3d41.92326857056622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1553179493257"
    },
    {
      nombre: "Marjorie P Hart",
      direccion: "2625 N. Orchard St., Chicago, IL 60614",
      mapUrl: "https://www.google.com/maps/place/2625+N+Orchard+St,+Chicago,+IL+60614,+EE.+UU./@41.929578,-87.645898,15z/data=!4m5!3m4!1s0x880fd30f2630e551:0x3e719e44a5cef714!8m2!3d41.9295783!4d-87.6458976?hl=es-AR",
      imagen: "https://geo0.ggpht.com/cbk?panoid=JwVss_e32UmUDYlWr-54wQ&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=240&yaw=233.39021&pitch=0&thumbfov=100",
      iframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.2917289530865!2d-87.64808628508527!3d41.929582270170734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625+N+Orchard+St%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1553179562450"
    },
    {
      nombre: "North",
      direccion: "1409 N. Ogden Ave., Chicago, IL 60610",
      mapUrl: "https://www.google.com/maps?ll=41.907145,-87.646123&z=15&t=m&hl=es-AR&gl=AR&mapclient=embed&cid=6284463419999939682",
      imagen: "https://geo1.ggpht.com/cbk?panoid=w5hXPU0kuRPMOvVfCKw8hg&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=240&yaw=187.8707&pitch=0&thumbfov=100",
      iframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2099.6294150299022!2d-87.64667522093178!3d41.90738469161368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5736e62f19086c62!2sNorth+Elementary!5e0!3m2!1ses-419!2sar!4v1553387134252"
    },
    {
      nombre: "South",
      direccion: "2101 N. Fremont St., Chicago, IL 60614",
      mapUrl: "https://www.google.com/maps?ll=41.919777,-87.651367&z=15&t=m&hl=es-AR&gl=AR&mapclient=embed&q=2101+N+Fremont+St+Chicago,+IL+60614+EE.+UU.",
      imagen: "https://geo1.ggpht.com/cbk?panoid=mAn6F_PotiOJ-EhPDNTuAw&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=240&yaw=259.78152&pitch=0&thumbfov=100",
      iframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.747764826565!2d-87.65355538508562!3d41.91978077078474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101+N+Fremont+St%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1553179787348"
    }
  ],
  partidos: [
    {
      id: 0,
      equipo1: "U1",
      equipo1Img: "./img/u1_logo.png",
      equipo2Img: "./img/u1_logo.png",
      equipo2: "U4",
      horario: "9:30",
      estadio: "AJ Katzenmaier",
      mes: "September",
      fecha: "9/01"
    },
    {
      id: 1,
      equipo1: "U3",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U2",
      horario: "13:00",
      estadio: "Greenbay",
      mes: "September",
      fecha: "9/01"
    },
    {
      id: 2,
      equipo1: "U5",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U6",
      horario: "9:30",
      estadio: "Howard A Yeager",
      mes: "September",
      fecha: "9/08"
    },
    {
      id: 3,
      equipo1: "U6",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U1",
      horario: "13:00",
      estadio: "Marjorie P Hart",
      mes: "September",
      fecha: "9/08"
    },
    {
      id: 4,
      equipo1: "U2",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U4",
      horario: "9:30",
      estadio: "North",
      mes: "September",
      fecha: "9/15"
    },
    {
      id: 5,
      equipo1: "U3",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U5",
      horario: "13:00",
      estadio: "AJ Katzenmaier",
      mes: "September",
      fecha: "9/15"
    },
    {
      id: 6,
      equipo1: "U1",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U3",
      horario: "13:00",
      estadio: "South",
      mes: "September",
      fecha: "9/22"
    },
    {
      id: 7,
      equipo1: "U2",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U6",
      horario: "13:00",
      estadio: "Howard A Yeager",
      mes: "September",
      fecha: "9/22"
    },
    {
      id: 8,
      equipo1: "U4",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U5",
      horario: "13:00",
      estadio: "Greenbay",
      mes: "September",
      fecha: "9/29"
    },
    {
      id: 9,
      equipo1: "U2",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U6",
      horario: "13:00",
      estadio: "Howard A Yeager",
      mes: "September",
      fecha: "9/29"
    },
    {
      id: 10,
      equipo1: "U2",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U5",
      horario: "9:30",
      estadio: "Marjorie P Hart",
      mes: "October",
      fecha: "10/06"
    },
    {
      id: 11,
      equipo1: "U1",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U6",
      horario: "13:00",
      estadio: "South",
      mes: "October",
      fecha: "10/06"
    },
    {
      id: 12,
      equipo1: "U3",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U4",
      horario: "9:30",
      estadio: "Howard A Yeager",
      mes: "October",
      fecha: "10/08"
    },
    {
      id: 13,
      equipo1: "U6",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U3",
      horario: "13:00",
      estadio: "North",
      mes: "October",
      fecha: "10/08"
    },
    {
      id: 14,
      equipo1: "U2",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U4",
      horario: "9:30",
      estadio: "Marjorie P Hart",
      mes: "October",
      fecha: "10/20"
    },
    {
      id: 15,
      equipo1: "U3",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U1",
      horario: "13:00",
      estadio: "AJ Katzenmaier",
      mes: "October",
      fecha: "10/20"
    },
    {
      id: 16,
      equipo1: "U5",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U6",
      horario: "9:30",
      estadio: "Howard A Yeager",
      mes: "October",
      fecha: "10/27"
    },
    {
      id: 17,
      equipo1: "U1",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U4",
      horario: "9:30",
      estadio: "AJ Katzenmaier",
      mes: "November",
      fecha: "9/01"
    },
    {
      id: 18,
      equipo1: "U3",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U2",
      horario: "13:00",
      estadio: "Greenbay",
      mes: "November",
      fecha: "9/01"
    },
    {
      id: 19,
      equipo1: "U5",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U6",
      horario: "9:30",
      estadio: "Howard A Yeager",
      mes: "November",
      fecha: "9/08"
    },
    {
      id: 20,
      equipo1: "U6",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U1",
      horario: "13:00",
      estadio: "Marjorie P Hart",
      mes: "November",
      fecha: "9/08"
    },
    {
      id: 21,
      equipo1: "U2",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U4",
      horario: "9:30",
      estadio: "North",
      mes: "November",
      fecha: "9/15"
    },
    {
      id: 22,
      equipo1: "U3",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U5",
      horario: "13:00",
      estadio: "AJ Katzenmaier",
      mes: "November",
      fecha: "9/15"
    },
    {
      id: 23,
      equipo1: "U1",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U3",
      horario: "13:00",
      estadio: "South",
      mes: "November",
      fecha: "9/22"
    },
    {
      id: 24,
      equipo1: "U2",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U6",
      horario: "13:00",
      estadio: "Howard A Yeager",
      mes: "November",
      fecha: "9/22"
    },
    {
      id: 25,
      equipo1: "U4",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U5",
      horario: "13:00",
      estadio: "Greenbay",
      mes: "November",
      fecha: "9/29"
    },
    {
      id: 26,
      equipo1: "U2",
      equipo1Img: "img/u1_logo.png",
      equipo2Img: "img/u1_logo.png",
      equipo2: "U6",
      horario: "13:00",
      estadio: "Howard A Yeager",
      mes: "November",
      fecha: "9/29"
    }
  ]
};