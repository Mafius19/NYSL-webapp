
Vue.component("navbar", {
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
      <li class="sidenav-close"><a href="#" @click="comunicarCambio('calendar')"><i class="material-icons">event</i>Calendar</a></li>
      <li class="sidenav-close"><a href="#" @click="comunicarCambio('about')"><i class="material-icons">contact_support</i>About Us</a></li>
      <li class="sidenav-close"><a href="#" @click="comunicarCambio('contact')"><i class="material-icons">message</i>Contact</a></li>
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
})

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
        <li class="collection-headder center-align">
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
    }
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
            <select multiple id="select-teams" @change="emitirEventoFiltro()">
              <option 
                v-for="equipo in equiposTotales"
                :value="equipo"
                v-text="equipo"
                selected
              >
              </option>
            </select>
            <label>Teams</label>
          </div>

          <div class="input-field col s12">
            <select multiple id="select-locations" @change="emitirEventoFiltro()">
              <option 
                v-for="ubicacion in ubicacionesTotales"
                :value="ubicacion"
                v-text="ubicacion"
                selected
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
  computed: {
    equiposTotales() {
      let equipos = [];
      this.partidos.forEach(partido => {
        equipos.push(partido.equipo1);
        equipos.push(partido.equipo2);
      });
      equipos.sort();
      return [...new Set(equipos)];
    },
    ubicacionesTotales() {
      let ubicaciones = [];
      this.partidos.forEach(partido => {
        if (!ubicaciones.includes(partido.estadio.nombre)) {
          ubicaciones.push(partido.estadio.nombre);
        }
      });
      ubicaciones.sort();
      return ubicaciones;
    }
  },
  methods: {
    emitirEventoFiltro() {
      let equiposDOM = document.querySelectorAll('#select-teams option:checked');
      let ubicacionesDOM = document.querySelectorAll('#select-locations option:checked');
      let equiposValues = Array.from(equiposDOM).map((equipo) => equipo.value);
      let ubicacionesValues = Array.from(ubicacionesDOM).map((ubicacion) => ubicacion.value);

      let partidosFiltrados = this.partidos
          .filter(partido => equiposValues.includes(partido.equipo1) || equiposValues.includes(partido.equipo2))
          .filter(partido => ubicacionesValues.includes(partido.estadio.nombre));

      this.$root.$emit('partidos-filtrados', partidosFiltrados);
    }
  }
})

Vue.component('calendar', {
  template: `
    <div class="row">
      <div class="col s12">
        <filtro :partidos="listadoPartidos.map((partido) => partidoFormateado(partido))"></filtro>
      </div>
      <span v-if="partidosFiltrados.length > 0">
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
      <error v-else>There is no results to show</error>
      
    </div>
  `,
  data() {
    return {
      listadoPartidos: [],
      listadoEstadios: [],
      partidosFiltrados: [],
      estadioEnMapa: {},     
    }
  },
  mounted() {
    this.listadoPartidos = data.partidos;
    this.listadoEstadios = data.estadios;
    this.partidosFiltrados = this.listadoPartidos.map(partido => this.partidoFormateado(partido));
    this.estadioEnMapa = this.estadioSegunPartido(this.listadoPartidos[0]);
    
    this.$root.$on('juegoPresionado', (juego) => {
      this.estadioEnMapa = juego.estadio;
    });

    this.$root.$on('partidos-filtrados', (partidos) => {
      this.partidosFiltrados = partidos;
    });
  },
  computed: {
    mesesConPartidos() {
      return [...new Set(this.listadoPartidos.map(partido => partido.mes))];
    }
  },
  methods: {
    partidoFormateado(partido) {
      let estadioBuscado = this.listadoEstadios.find(estadio => estadio.nombre === partido.estadio);
      return {
        equipo1: partido.equipo1,
        equipo2: partido.equipo2,
        horario: partido.horario,
        fecha: partido.fecha,
        mes: partido.mes,
        estadio: estadioBuscado,
      }
    },
    estadioSegunPartido(partido) {
      return this.listadoEstadios.find(estadio => estadio.nombre === partido.estadio);
    },
    partidosFiltradosPorMes(mes) {
      return this.partidosFiltrados.filter(partido => partido.mes === mes);
    }
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

//inicializa todos los componentes de materialize
document.addEventListener('DOMContentLoaded', () => {
  M.AutoInit();
});