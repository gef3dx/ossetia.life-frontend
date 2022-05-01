<template>
  <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <router-link class="navbar-brand" to="/"><img src="/images/version/tech-logo.png" alt="Ossetia.Life"></router-link>
    <div class="collapse navbar-collapse" id="navbarCollapse" aria-expanded="false" style="">
        <ul class="navbar-nav mr-auto">
                <li v-on:click="NavLink" class="nav-item"><router-link class="nav-link" to="/">Главная</router-link></li>
                <li v-on:click="NavLink" class="nav-item"><router-link class="nav-link" to="/news">Новости</router-link></li>
                <li v-on:click="NavLink" class="nav-item"><router-link class="nav-link" to="/movies">Фильмы</router-link></li>       
        </ul>
        <ul class="navbar-nav mr-2">
            <li class="nav-item">
                <a class="nav-link" href="https://t.me/ossetia_life"><i class="fa fa-telegram"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.instagram.com/ossetia.life_original/"><i class="fa fa-instagram"></i></a>
            </li>
        </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    NavLink() {
      document.getElementById("navbarCollapse").classList.remove('show');
    }
  }
}
</script>
<style>
  
</style>