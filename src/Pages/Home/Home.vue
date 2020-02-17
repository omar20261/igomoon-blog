<template>
  <div class="container text-center mt-5 posts">
    <h2>Posts List</h2>
    <post-template v-for="(PostItem, i) in PostsItems" :key="PostItem.id" :PostItem="PostItem" :index="i"/>
  </div>
</template>

<script>
import postTemp from './postTemp'
import API from '../../services/API.service';

export default {
  name: 'home-page',
  mounted(){
    this.getPosts();
  }, 
  components: {
    'post-template':postTemp,
  },
  data () {
    return {
      PostsItems: [],
    }
  },
  methods:{
    getPosts:function() {
      API.callFun({method:'get',url:'/wp-json/wp/v2/posts'}).then((d)=>{
        console.log(d.body)
        if(d&&d.body){this.PostsItems=d.body}
      })
    }
  }
}
</script>

<style scoped>

.posts{border-right: 2px solid rgba(0,0,0,0.2);
border-left: 2px solid rgba(0,0,0,0.2);}
</style>