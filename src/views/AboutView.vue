<template>
<div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
      <div class="page-wrapper">
          <div class="blog-top clearfix">
              <h1 class="pull-left">О нас<i class="fa fa-rss"></i></h1>
          </div><!-- end blog-top -->
          <div class="row">
                  <div class="col-lg-10 offset-lg-1">
                      <div class="banner-spot clearfix">
                          <div class="banner-img">
                              <img src="/upload/banner_02.jpg" alt="" class="img-fluid">
                          </div><!-- end banner-img -->
                      </div><!-- end banner -->
                  </div><!-- end col -->
          </div>
          <div class="blog-list clearfix">
            <Posts/>
          </div><!-- end blog-list -->
      </div><!-- end page-wrapper -->
      <hr class="invis">
      pagination
  </div><!-- end col -->
</template>

<script>
import Posts from '@/components/Posts.vue'

export default {
  components: {
    Posts,
  }
}
</script>
