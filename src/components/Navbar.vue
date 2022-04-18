<template>
  <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/"><img src="/images/version/tech-logo.png" alt=""></a>
    <div class="collapse navbar-collapse" id="navbarCollapse" aria-expanded="false" style="">
        <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Главная</router-link>
                    <router-link class="nav-link" to="/films">Фильмы</router-link>
                    <router-link class="nav-link" to="/about">О нас</router-link>
                </li>
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
}
</script>
<style>
  
</style>