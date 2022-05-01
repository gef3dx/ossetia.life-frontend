<template>
<div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
      <div class="page-wrapper">
          <div class="blog-top clearfix">
              <h1 class="pull-left">Новости<i class="fa fa-newspaper-o"></i></h1>
          </div><!-- end blog-top -->
          <!--<div class="row">
                  <div class="col-lg-10 offset-lg-1">
                      <div class="banner-spot clearfix">
                          <div class="banner-img">
                              <img src="/upload/banner_02.jpg" alt="" class="img-fluid">
                          </div>
                      </div>
                  </div>
          </div> 
          -->
          <div class="blog-list clearfix">
            <posts url="https://api.ossetia.life/api/v1/category/news"/>
          </div><!-- end blog-list -->
      </div><!-- end page-wrapper -->
      <hr class="invis">
  </div><!-- end col -->
</template>

<script>
import posts from '@/components/posts'

export default {
  components: {
    posts,
  }
}
</script>
