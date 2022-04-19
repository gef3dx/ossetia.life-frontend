<template>
<div v-if="!isPostsLoading" v-for="item of items" :key="item.id">
  <div class="blog-box row" >
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
<div v-else class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
<div ref="observer" class="observer"></div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Posts',
  data() {
    return {
      items: [],
      errors: [],
      isPostsLoading: false,
      page: 1,
      page_size: 5,
    };
  },
  methods: {

    async fetchPost() {
      this.isPostsLoading = true;
      try {
          const response = await axios.get(`https://ossetia.life/api/v1/all`);
          this.items = response.data.results;
      }
      catch (e) {
        console.log(e);
      }
      finally {
        this.isPostsLoading = false;
      }
    },

    async loadMorePosts() {
      this.page += 1;
      try {
          const response = await axios.get(`https://ossetia.life/api/v1/all`, {
            params: {
              page: this.page,
              page_size: this.page_size
            }
          });
          this.items = [...this.items, ...response.data.results];
      }
      catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchPost();
    const options = {
    rootMargin: '0px',
    threshold: 1.0
    }
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting){
        this.loadMorePosts();
      }
        
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  }
}
</script>
<style>
  
</style>