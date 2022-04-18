<template>
<div v-for="item of items" :key="item.id">
  <div class="blog-box row" >
      <div class="col-md-4">
          <div class="post-media">
              <a :href="'/post/'+item.id" :title="item.title">
                  <img :src="item.img" :alt="item.title" class="img-fluid">
                  <div class="hovereffect"></div>
              </a>
          </div><!-- end media -->
      </div><!-- end col -->
      <div class="blog-meta big-meta col-md-8">
          <h4><a  :href="'/post/'+item.id" :title="item.title">{{ item.title }}</a></h4>
          <p v-html="item.content"></p>
          <small class="firstsmall"><a class="bg-orange" href="/category/" title="">{{ item.category }}</a></small>
          <small>{{ item.date }}</small>
      </div><!-- end meta -->
  </div><!-- end blog-box -->
  <hr class="invis">
</div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Posts',
  data() {
    return {
      items: [],
      errors: [],
    };
  },
  created() {
    axios.get(`https://ossetia.life/api/v1/all`)
      .then(response => {
        this.items = response.data.results
      })
      .catch(e => {
        this.error.push(e)
      })

  }
}
</script>
<style>
  
</style>