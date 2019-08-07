'use strict';

// Config Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCfUCM93A6itbYUrv-jhMyY6pvK9tlveV4",
    authDomain: "nysl-cap-webapp.firebaseapp.com",
    databaseURL: "https://nysl-cap-webapp.firebaseio.com",
    projectId: "nysl-cap-webapp",
    storageBucket: "",
    messagingSenderId: "44674422756",
    appId: "1:44674422756:web:fbb1d5df703b8944"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// Materialize init
document.addEventListener('DOMContentLoaded', () => { M.AutoInit() });

Vue.component('navbar', {
  template: `
  <div>
    <div class="navbar-fixed">
      <nav class="blue darken-4">
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo"><slot></slot></a>
          <a href="#" data-target="menu-hamburguesa" class="sidenav-trigger">
            <i class="material-icons show-on-large">menu</i>
          </a>

          <ul class="right hide-on-med-and-down">
            <li><a href="#" @click="comunicarCambio('calendar')">Calendar</a></li>
            <li><a href="#" @click="comunicarCambio('about')">About Us</a></li>
            <li><a href="#" @click="comunicarCambio('contact')">Contact</a></li>
          </ul>
        </div>    
      </nav>
    </div>

    <ul id="menu-hamburguesa" class="sidenav show-on-medium-and-down grey lighten-4">
      <li class="sidenav-close"><a href="#" @click="comunicarCambio('calendar')">
        <i class="material-icons">event</i>Calendar</a>
      </li>
      <li class="sidenav-close">
        <a href="#" @click="comunicarCambio('about')"><i class="material-icons">contact_support</i>About Us</a>
      </li>
      <li class="sidenav-close">
        <a href="#" @click="comunicarCambio('contact')"><i class="material-icons">message</i>Contact</a>
      </li>
    </ul>
  </div>
  `,

  methods: {
    comunicarCambio(nombreComponentePresionado) {
      this.$emit("cambia-componente", nombreComponentePresionado);
    }
  }
});

Vue.component('error', {
  template: `
  <div class="row">
    <div class="col s12">
      <div class="card-panel red lighten-2">
        <span class="black-text">
          <slot></slot>
          <i class="material-icons right">
            error_outline
          </i>
        </span>
      </div>
    </div>
  </div>
  `
});

//dataComentario.displayName dataComentario.photoURL dataComentario.mensaje

Vue.component('comentario', {
  props: ['dataComentario'],
  template: `
  <div class="row center-align">
    <div class="col s12">
      <div class="card-panel teal">
        <h6>{{ dataComentario.displayName }}</h6>
        <span>{{ dataComentario.mensaje }}</span>
      </div>
    </div>
  </div>
  `
});

Vue.component('messages-container', {
  props: ['partido'],
  template: `
    <div class="row">
      <div class="col s12">
        <div class="card-panel">

          <!-- MARCO VENTANA -->
          <div class="row valign-wrapper">
            <div class="col s10">
              <h6>{{ partido.equipo1 }} vs {{ partido.equipo2 }} comments</h6>
            </div>
            <div class="col s2 right-align">
              <i class="small material-icons" @click="emitirEventoCerrarForo">close</i>
            </div>
          </div>
          
          <!-- VISTA USUARIO SIN LOGUEAR -->
          <span v-if="!usuarioActivo">
            <div class="row center-align">
              <h6>Loggin to your acount</h6>
              <button class="btn-small red" @click="iniciarSesion()">
                Sign in with Google
              </button>
            </div>
          </span>

          <!-- VISTA USUARIO LOGUEADO -->
          <span v-else>
            <div class="row">
              <textarea v-model="textoAComentar"></textarea>
              <button @click="crearComentario">send</button>
              <comentario
                v-for="comentario in listadoMensajes(partido.comentarios)"
                :dataComentario="comentario"
              ></comentario>
            </div>
          </span>

        </div>
      </div>
    </div>
  `,

  data() {
    return {
      textoAComentar: '',
      usuarioActivo: null,
    }
  },

  methods: {
    emitirEventoCerrarForo() {
      this.$root.$emit('cerrarForo');
    },

    iniciarSesion() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },

    cerrarSesion() {
      firebase.auth().signOut();
    },

    listadoMensajes(objetoMensajes) {
      let mensajes = [];
      for(let key in objetoMensajes) {
        mensajes.push({
          mensaje: objetoMensajes[key].mensaje,
          displayName: objetoMensajes[key].dataEmisor.displayName,
          photoURL: objetoMensajes[key].dataEmisor.photoURL,
        });
      }
      return mensajes;
    },

    hayComentarios() {
      return this.partido.comentarios;
    },

    crearComentario() {
      database
        .ref(`/partidos/${this.partido.key}/comentarios`)
        .push({ 
          mensaje: this.textoAComentar, 
          dataEmisor: {
              displayName: this.usuarioActivo.displayName,
              photoURL: this.usuarioActivo.photoURL,
          }
        })
        .then(() => {this.textoAComentar = ''});
    },
  },

  created() {
    this.usuarioActivo = firebase.auth().currentUser;

    firebase.auth().onAuthStateChanged((user) => {
      this.usuarioActivo = firebase.auth().currentUser;
    });
  },
});

Vue.component('map-container', {
  props: ['estadio'],
  template: `
      <div class="col s12">
        <div class="card-panel">
          <div class="row center-align"><h5>{{ estadio.nombre }}</h5></div>
          <div class="row">
            <iframe id="iframe-mapa" class="col s12" :src="estadio.iframeUrl"></iframe>
          </div>
          <div class="row center-align">{{ estadio.direccion }}</div>
        </div>
      </div>
  `
});

Vue.component('month', {
  props: ['juegosDelMes'],
  template: `
    <div class="col s12">
      <div class="card-panel">
        <ul class="collection with-header">
          <li class="collection-header center-align">
            <h5>{{ juegosDelMes[0].mes }}</h5>
          </li>
          <li
            v-for="juego in juegosDelMes"
            @click="emitirEventoJuegoPresionado(juego)"
          >
          <div class="row center-align">
            <div class="col s4">{{ juego.equipo1 }}</div>
            <div class="col s4">
              <div class="row">
                <div class="col s12">{{ juego.fecha }}</div>
                <div class="col s12">{{ juego.horario }}</div>
                <div class="col s12">
                  <a :href="juego.estadio.mapUrl" class="blue-text text-darken-4">{{ juego.estadio.nombre }}</a>
                </div>
                <div>
                  <a href="#" class="blue-text text-darken-4" @click="emitirEventoActivarForo(juego)">Messages</a>
                </div>
              </div>
            </div>
            <div class="col s4">{{ juego.equipo2 }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,

  methods: {
    emitirEventoJuegoPresionado(juegoPresionado) {
      this.$root.$emit('juegoPresionado', juegoPresionado);
    },

    emitirEventoActivarForo(juego) {
      this.$root.$emit('activarForo', juego);
    },
  }
});

Vue.component('filtro', {
  props: ['partidos'],
  template: `
  <ul class="collapsible">
    <li>
      <div class="collapsible-header"><i class="material-icons">settings</i>Filters</div>
      <div class="collapsible-body white">
        <div class="row">
          <div class="input-field col s12">
            <select multiple v-model="equiposSeleccionados" @change="emitirEventoFiltro()">
              <option 
                v-for="equipo in equiposTotales"
                :key="equipo"
                :value="equipo"
                v-text="equipo"
              >
              </option>
            </select>
            <label>Teams</label>
          </div>

          <div class="input-field col s12">
            <select multiple v-model="estadiosSeleccionados" @change="emitirEventoFiltro()">
              <option 
                v-for="ubicacion in estadiosTotales"
                :key="ubicacion"
                :value="ubicacion"
                v-text="ubicacion"
              >
              </option>
            </select>
            <label>Locations</label>
          </div>
        </div>
      </div>
    </li>
  </ul>
  `,

  data() {
    return {
      equiposTotales: [],
      estadiosTotales: [],
      equiposSeleccionados: [],
      estadiosSeleccionados: [],
    }
  },

  methods: {
    emitirEventoFiltro() {
      let partidosFiltrados = this.partidos
          .filter(partido => this.equiposSeleccionados.includes(partido.equipo1) ||
                             this.equiposSeleccionados.includes(partido.equipo2))
          .filter(partido => this.estadiosSeleccionados.includes(partido.estadio.nombre));

      this.$root.$emit('partidos-filtrados', partidosFiltrados);
    },
  },

  // harcodeado hasta encontrar una solucion al select
  created() {
    this.equiposTotales = ['U1','U2','U3','U4','U5','U6'];
    this.estadiosTotales = ['AJ Katzenmaier','Greenbay','Howard A Yeager','Marjorie P Hart','North','South'];
    this.equiposSeleccionados = this.equiposTotales;
    this.estadiosSeleccionados = this.estadiosTotales;
  }
})

Vue.component('calendar', {
  template: `
    <div class="row">
      <span v-show="!foro.mostrar">
        <div class="col s12">
          <filtro :partidos="listadoPartidos"></filtro>
        </div>

        <span v-show="partidosFiltrados.length > 0">
          <div class="col s12 m6">
            <month 
              v-for="mes in mesesConPartidos"
              :juegosDelMes="partidosFiltradosPorMes(mes)"
            ></month>
          </div>
          <div class="col m6 hide-on-small-only flotante-top">
            <map-container :estadio="estadioEnMapa"></map-container>
          </div>
        </span>

        <span v-show="partidosFiltrados.length === 0">
          <error>There is no results to show.</error>
        </span>
      </span>

      <span v-if="foro.mostrar">
        <messages-container :partido="foro.juegoAMostrar"></messages-container>
      </span>
    </div>
  `,

  data() {
    return {
      listadoPartidos: [],
      listadoEstadios: [], 
      partidosFiltrados: [],
      estadioEnMapa: {},
      foro: {
        mostrar: false,
        juegoAMostrar: null
      },
    }
  },

  created() {
    this.pullBaseDeDatosInicial();
    this.$root.$on('juegoPresionado', (juego) => { this.estadioEnMapa = juego.estadio });
    this.$root.$on('partidos-filtrados', (partidos) => { this.partidosFiltrados = partidos });
    this.$root.$on('activarForo', (juego) => { this.setearJuegoEnForo(juego) });
    this.$root.$on('cerrarForo', () => { this.foro.mostrar = false });
  },

  computed: {
    mesesConPartidos() {
      return [...new Set(this.listadoPartidos.map(partido => partido.mes))];
    }
  },

  methods: {
    pullBaseDeDatosInicial() {
      database.ref('/').on('value', snapshot => {
        this.cargarEstadiosEnListado(snapshot.val().estadios);
        this.cargarPartidosEnListado(snapshot.val().partidos);
        this.partidosFiltrados = this.listadoPartidos;
        this.estadioEnMapa = this.partidosFiltrados[0].estadio;
      });
    },

    setearJuegoEnForo(juego) {
      this.foro.juegoAMostrar = juego; 
      this.foro.mostrar = true;
    },

    cargarEstadiosEnListado(objetoEstadios) {
      let estadios = [];
      
      for(let key in objetoEstadios) {
        estadios.push({
          key: key,
          nombre: objetoEstadios[key].nombre,
          direccion: objetoEstadios[key].direccion,
          mapUrl: objetoEstadios[key].mapUrl,
          iframeUrl: objetoEstadios[key].iframeUrl,
          imagen: objetoEstadios[key].imagen
        });
      }

      this.listadoEstadios = estadios;
    },

    cargarPartidosEnListado(objetoPartidos) {
      let partidos = [];

      for(let key in objetoPartidos) {
        partidos.push({
          key: key,
          equipo1: objetoPartidos[key].equipo1,
          equipo2: objetoPartidos[key].equipo2,
          horario: objetoPartidos[key].horario,
          fecha: objetoPartidos[key].fecha,
          mes: objetoPartidos[key].mes,
          comentarios: objetoPartidos[key].comentarios,
          estadio: this.estadioSegunNombre(objetoPartidos[key].estadio),
        });
      }

      this.listadoPartidos = partidos;
    },

    estadioSegunNombre(nombreEstadio) {
      return this.listadoEstadios.find(estadio => estadio.nombre === nombreEstadio);
    },

    partidosFiltradosPorMes(mes) {
      return this.partidosFiltrados.filter(partido => partido.mes === mes );
    },
  }
});

Vue.component('contact', {
  template: `
  <div class="row">
    <div class="col s12">
      <div class="card-panel">

      <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="first_name" type="text" class="validate">
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s12">
            <input id="last_name" type="text" class="validate">
            <label for="last_name">Last Name</label>
          </div>
          <div class="input-field col s12">
            <input id="email" type="text" class="validate">
            <label for="email">Email</label>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <textarea id="textarea1" class="materialize-textarea"></textarea>
              <label for="textarea1">Message</label>
            </div>
          </div>
        </div>
        <button class="btn-small waves-effect waves-light right blue darken-4" type="submit" name="action">Submit
        </button>
      </form>
    </div>
      </div>
    </div>
  </div>
  `
});

Vue.component('about', {
  template: `
      <div class="row">
        <div class="col s12">
          <div class="card">
            <div class="card-content">
              <h5>Mission</h5>
              <p>
              To support young athletes living in Chicago's northside neighborhoods, who have an interest in learning and playing soccer, with opportunities to learn and practice skills related to the game of soccer, specifically those skills around team cooperation and good sportsmanship.
              </p>
              <h5>Vision</h5>
              <p>The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes through the building of character, self-discipline, and leadership</p>
              <h5>General Information</h5>
              <p>The Northside Youth Soccer League was established in 1996 to provide
                 athletes resinding in Chicago's northside neighborhoods an environment
                 in which to learn and play soccer. To be a member of NYSL, you must be
                 between th ages of 4-12 and reside in a Chicago northside
                 neighborhood. NYSL is a ran by small full-time staff, and relies on
                 the generous volunteer time of parents and previous league members.</p>
            </div>
          </div>
        </div>
      </div>
  `
});

new Vue({
  el: '#app',

  data: {
    componenteActivo: 'calendar',
  },

  methods: {
    activarComponente(nombreComponente) {
      this.componenteActivo = nombreComponente;
    },

    estaActivoComponente(nombreComponente) {
      return this.componenteActivo === nombreComponente;
    }
  }
});













