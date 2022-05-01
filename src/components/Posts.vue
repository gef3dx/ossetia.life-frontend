<template>
<div v-if="!isPostsLoading" >
  <div v-for="item of items" :key="item.id" class="blog-box row" >
      <div class="col-md-4">
          <div class="post-media">
              <router-link :to="'/post/'+item.id" :title="item.title">
                  <img :src="item.img" :alt="item.title" class="img-fluid">
                  <div class="hovereffect"></div>
              </router-link>
          </div><!-- end media -->
      </div><!-- end col -->
      <div class="blog-meta big-meta col-md-8">
          <h4><router-link :to="'/post/'+item.id" :title="item.title">{{ item.title }}</router-link></h4>
          <p v-html="item.content.substring(0, item.content.substring(0, 210).lastIndexOf(' ')) + ' ...'"></p>
          <small class="firstsmall"><a class="bg-orange" href="/category/" title="">{{ item.category }}</a></small>
          <small>{{ item.date }}</small>
      </div><!-- end meta -->
  </div><!-- end blog-box -->
  <hr class="invis">
</div>

<div v-else >
        <div class="blog-box row" >
            <div class="col-md-4">
                <div class="post-media-s">
                </div><!-- end media -->
            </div><!-- end col -->
            <div class="blog-meta big-meta col-md-8">
                <h4 class="title-skelet"></h4>
                <p class="p-skelet-1"></p>
                <p class="p-skelet-2"></p>
                <p class="p-skelet-3"></p>
                <p class="p-skelet-4"></p>
                <p class="p-skelet-5"></p>
            </div><!-- end meta -->
        </div><!-- end blog-box -->
        <hr class="invis">

      <div class="blog-box row" >
            <div class="col-md-4">
                <div class="post-media-s">
                </div><!-- end media -->
            </div><!-- end col -->
            <div class="blog-meta big-meta col-md-8">
                <h4 class="title-skelet"></h4>
                <p class="p-skelet-1"></p>
                <p class="p-skelet-2"></p>
                <p class="p-skelet-3"></p>
                <p class="p-skelet-4"></p>
                <p class="p-skelet-5"></p>
            </div><!-- end meta -->
        </div><!-- end blog-box -->
        <hr class="invis">

        <div class="blog-box row" >
            <div class="col-md-4">
                <div class="post-media-s">
                </div><!-- end media -->
            </div><!-- end col -->
            <div class="blog-meta big-meta col-md-8">
                <h4 class="title-skelet"></h4>
                <p class="p-skelet-1"></p>
                <p class="p-skelet-2"></p>
                <p class="p-skelet-3"></p>
                <p class="p-skelet-4"></p>
                <p class="p-skelet-5"></p>
            </div><!-- end meta -->
        </div><!-- end blog-box -->
        <hr class="invis">

        <div class="blog-box row" >
            <div class="col-md-4">
                <div class="post-media-s">
                </div><!-- end media -->
            </div><!-- end col -->
            <div class="blog-meta big-meta col-md-8">
                <h4 class="title-skelet"></h4>
                <p class="p-skelet-1"></p>
                <p class="p-skelet-2"></p>
                <p class="p-skelet-3"></p>
                <p class="p-skelet-4"></p>
                <p class="p-skelet-5"></p>
            </div><!-- end meta -->
        </div><!-- end blog-box -->
        <hr class="invis">

      <div class="blog-box row" >
            <div class="col-md-4">
                <div class="post-media-s">
                </div><!-- end media -->
            </div><!-- end col -->
            <div class="blog-meta big-meta col-md-8">
                <h4 class="title-skelet"></h4>
                <p class="p-skelet-1"></p>
                <p class="p-skelet-2"></p>
                <p class="p-skelet-3"></p>
                <p class="p-skelet-4"></p>
                <p class="p-skelet-5"></p>
            </div><!-- end meta -->
        </div><!-- end blog-box -->
        <hr class="invis">
        
</div>
<!-- <div v-else class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> -->
<div ref="observer" class="observer"></div>
</template>

<script>
import loadPosts from "@/mixins/loadPosts";
import fetchPost from "@/mixins/fetchPosts"

export default {
  name: 'Posts',
  data() {
    return {
      //url: "https://ossetia.life/api/v1/all",
    };
  },
  props: ['url'],
  mixins: [loadPosts, fetchPost],
  mounted() {
    this.fetchPost(this.url);
    const options = {
    rootMargin: '0px',
    threshold: 1.0
    }
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting){
        this.loadPosts(this.url);
      }
        
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
}
</script>
<style scoped>
.post-media-s {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    animation: puls-bg 1s infinite;
    height: 150px;
}
.title-skelet {
        animation: puls-bg 1s infinite;
        width: 500px;
        height: 20px;
        border: 6px solid #fff;
        border-radius: 15px;
}
.p-skelet-1 {
    animation: puls-bg 1s infinite;
    height: 10px;
    width: 100%;
    margin-top: 10px;
    border-radius: 15px;
}
.p-skelet-2 {
    animation: puls-bg 1s infinite;
    height: 10px;
    width: 80%;
    margin-top: 10px;
    border-radius: 15px;
}
.p-skelet-3 {
    animation: puls-bg 1s infinite;
    height: 10px;
    width: 90%;
    margin-top: 10px;
    border-radius: 15px;
}
.p-skelet-4 {
    animation: puls-bg 1s infinite;
    height: 10px;
    width: 90%;
    margin-top: 10px;
    border-radius: 15px;
}
.p-skelet-5 {
    animation: puls-bg 1s infinite;
    height: 10px;
    width: 40%;
    margin-top: 10px;
    border-radius: 15px;
}

@keyframes puls-bg {
    0% {
        background-color: #f6f7f8;
    }
    50% {
        background-color: #e2e2e2;
    }
    100% {
        background-color: #f6f7f8;
    }
}
</style>