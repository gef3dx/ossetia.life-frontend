<template>
  <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
      <div v-if="!isPostsLoading" class="page-wrapper">
          <div class="blog-title-area text-center">
              <ol class="breadcrumb hidden-xs-down">
                  <li class="breadcrumb-item"><router-link to="/">Главная</router-link></li>
                  <li class="breadcrumb-item"><a href="#">{{items.category}}</a></li>
                  <li class="breadcrumb-item active">{{items.title}}</li>
              </ol>

              <span class="color-orange"><a href="#" title="">{{items.category}}</a></span>

              <h1>{{ items.title }}</h1>

              <div class="blog-meta big-meta">
                  <small>{{ items.date }}</small>
              </div><!-- end meta -->

              <div class="post-sharing">
                  <ul class="list-inline">
                      <li>
                          <a target="_blank" :href="'https://vk.com/share.php?url=https://ossetia.life/post/'+this.items.id" class="fb-button btn btn-primary">
                            <i class="fa fa-vk"></i> 
                            <span class="down-mobile">Поделиться</span>
                         </a>
                    </li>
                      <li><a target="_blank" :href="'https://telegram.me/share/url?url=https://ossetia.life/post/'+this.items.id+'&text='+this.items.title" class="tw-button btn btn-primary"><i class="fa fa-telegram"></i> <span class="down-mobile">Отправить</span></a></li>
                  </ul>
              </div><!-- end post-sharing -->
          </div><!-- end title -->

          <div class="single-post-media">
                  <div v-if="isVideo" v-html="items.video"></div>
                  <img v-else :src="items.img" :alt="items.title" class="img-fluid">
          </div><!-- end media -->

          <div class="blog-content">  
              <div class="pp">
                  <p v-html="items.content"></p>
                  <span>ИСТОЧНИК: <a :href="this.items.urla" title="ВГТРК Алания">ВГТРК Алания</a></span>
              </div><!-- end pp -->
          </div><!-- end content -->



          <div class="row">
              <div class="col-lg-12">
                  <div class="banner-spot clearfix">
                      <div class="banner-img">
                          <img src="/upload/banner_01.jpg" alt="" class="img-fluid">
                      </div><!-- end banner-img -->
                  </div><!-- end banner -->
              </div><!-- end col -->
          </div><!-- end row -->

          <hr class="invis1">

      </div><!-- end page-wrapper -->
      <div v-else class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  </div>
  
</template>

<script>
import axios from "axios";

export default {
name: "post",

data() {
    return {
          items: [],
          errors: [],
          isPostsLoading: false,
          isMoreLoading: true,
          page: 1,
          page_size: 5,
          isVideo: false,
          url: 'https://api.ossetia.life/api/v1/post/' + this.$route.params.id,
    }
},

methods: {
    scrollTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    async singlePost(url) {
        this.isPostsLoading = true;
        try {
            const response = await axios.get(url);
            this.items = response.data;
            if (this.items.video === "False") {
                this.isVideo = false;
            } else {
                this.isVideo = true;
            }
            this.items.img = 'https://api.ossetia.life/' + this.items.img;
        }
        catch (e) {
            console.log(e);
        }
        finally {
            this.isPostsLoading = false;
        }
    }
},

mounted() {
    this.singlePost(this.url);
},

created() {
    this.scrollTop();
    
  }
}
</script>
