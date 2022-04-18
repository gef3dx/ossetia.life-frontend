<template>
  <div id="wrapper">
      <header class="tech-header header">
        <div class="container-fluid">
           <Navbar/>
        </div><!-- end container-fluid -->
      </header><!-- end market-header -->
      <section class="section">
        <div class="container">
          <div class="row">
            <router-view/>
            <Sidebar/>
          </div><!-- end row -->
        </div><!-- end container -->
      </section>
      <Footer/>
  <div class="dmtop">Scroll to Top</div>         
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Sidebar,
    Footer
  }
}
</script>

<style>

</style>
