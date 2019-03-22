<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        fixed
        :clipped="$vuetify.breakpoint.mdAndUp"
        app
        v-model="drawer"
        width="250"
        class="deep-purple"
      >
        <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
        <v-list dense style="color: white;">
          <template v-for="item in items">
            <v-layout
              row
              v-if="item.heading"
              align-center
              :key="item.heading"
            >
              <v-flex xs6>
                <v-subheader v-if="item.heading">
                  {{ item.heading }}
                </v-subheader>
              </v-flex>
              <v-flex xs6 class="text-xs-center">
                <a href="#!" class="body-2 black--text">EDIT</a>
              </v-flex>
            </v-layout>
            <v-list-group
              v-else-if="item.children"
              v-model="item.model"
              :key="item.text"
              :prepend-icon="item.model ? item.icon : item['icon-alt']"
              append-icon=""
            >
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile
                v-for="(child, i) in item.children"
                :key="i"
                @click=""

              >
                <v-list-tile-action v-if="child.icon">
                  <v-icon >{{ child.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ child.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <v-list-tile v-else @click="" :key="item.text">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer>
        <v-toolbar
        color="purple darken-4"
        dark
        app
        :clipped-left="$vuetify.breakpoint.mdAndUp"
        fixed
        >
          <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <img src="../assets/golden_cat.png" alt="">
            <span class="hidden-sm-and-down">Golden Cat </span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="200"
          offset-x
          >
            <template v-slot:activator="{ on }">
              <v-btn
                color="indigo"
                dark
                v-on="on"
              >
                Perfil  <v-icon>perm_identity</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-list>
                <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <img src="../assets/golden_cat.png" alt="">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>Administrador</v-list-tile-title>
                    <v-list-tile-sub-title>Michaell Sanchez</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>

                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
              <v-divider></v-divider>
              <v-list>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-switch v-model="message" color="purple"></v-switch>
                  </v-list-tile-action>
                  <v-list-tile-title>Mensajes activos</v-list-tile-title>
                </v-list-tile>

              </v-list>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat @click="menu = false">Cancelar</v-btn>
                <v-btn color="primary" flat @click="menu = false">Guardar</v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
          <v-btn icon>
            <v-icon>power_settings_new</v-icon>
          </v-btn>
        </v-toolbar>
      <v-content>
        <v-container fill-height>
          <v-layout justify-center >
            <router-view></router-view>
          </v-layout>
        </v-container>
      </v-content>
      <v-dialog v-model="dialog" width="800px">
        <v-card>
          <v-card-title
            class="grey lighten-4 py-4 title"
          >
            Create contact
          </v-card-title>
          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>
              <v-flex xs12 align-center justify-space-between>
                <v-layout align-center>
                  <v-avatar size="40px" class="mr-3">
                    <img
                      src="logo"
                      alt=""
                    >
                  </v-avatar>
                  <v-text-field
                    placeholder="Name"
                  ></v-text-field>
                </v-layout>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  prepend-icon="business"
                  placeholder="Company"
                ></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  placeholder="Job title"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  prepend-icon="mail"
                  placeholder="Email"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  type="tel"
                  prepend-icon="phone"
                  placeholder="(000) 000 - 0000"
                  mask="phone"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  prepend-icon="notes"
                  placeholder="Notes"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-btn flat color="primary">More</v-btn>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
            <v-btn flat @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app>
  </div>
</template>
<script>

export default {
  name: 'reservas',
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
    dialog: false,
    drawer: null,
    items: [
      { icon: 'mode_edit', text: 'Reservas' },
      { icon: 'view_module', text: 'Habitaciones' },
      { icon: 'supervisor_account', text: 'Administrar usuarios' },
      {
        icon: 'contact_phone',
        'icon-alt': 'contact_phone',
        text: 'Atención al cliente',
        model: false,
        children: [
          { icon: 'gmail', text: 'Gmail' },
          { icon: 'gmail', text: 'Hangoust' },
          { icon: 'gmail', text: 'Outlook' },
          { icon: 'gmail', text: 'Yahoo' },
          { icon: 'web', text: 'Facebook' },
          { icon: 'web', text: 'Instagram' },
          { icon: 'web', text: 'Whatshap' },
          { icon: 'web', text: 'Messenger' }
        ] },
      { icon: 'settings', text: 'Configuración' },
      { icon: 'spellcheck', text: 'Realizar reserva' }
    ]
  })
}

</script>

<style scoped >
    .v-toolbar__content{
        background-color: rgb(88, 22, 150);
    }
    img{
      height: 70px;
      width: 40px;
      margin: -17px 0px;
      padding-top: 20px;
    }
        .v-content{
      background-image: url('../assets/fondo golden.jpg');
      background-size: cover;
    }
</style>
