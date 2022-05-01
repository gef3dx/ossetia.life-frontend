<template>
  <div id="wrapper">
      <header class="tech-header header">
        <div class="container-fluid">
           <navbar/>
        </div><!-- end container-fluid -->
      </header><!-- end market-header -->
      <section class="section">
        <div class="container">
          <div class="row">
            <router-view/>
            <sidebar/>
          </div><!-- end row -->
        </div><!-- end container -->
      </section>
      <footerr/>
  <div v-on:click="scrollTop" class="dmtop">Scroll to Top</div>         
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import sidebar from '@/components/sidebar'
import footerr from '@/components/footer'

export default {
  components: {
    navbar,
    sidebar,
    footerr
  },
  methods: {
    scrollTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
  }

}
</script>

<style>

</style>
