<template>
  <div class="container text-center my-5 posts">
    <h2>Posts List</h2>
    <post-template v-for="(PostItem, i) in PostsItems" :key="PostItem.id" :PostItem="PostItem" :index="i"/>
    <div class="my-5 py-5" @click="MorePosts();" v-if="getMore&&!$store.state.G_loading">
      <button class="btn btn-lg btn-primary col-md-5"> More </button>
    </div>
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
      per_page:10,
      currentPage:1,
      getMore:false
    }
  },
  methods:{
    getPosts:function() {
      let url = '/wp-json/wp/v2/posts?per_page='+this.per_page+'&offset='+(this.currentPage-1)*this.per_page;
      API.callFun({method:'get',url:url}).then((d)=>{
        if(d&&d.body){
          this.getMore=d.body.length==this.per_page?true:false;
          this.PostsItems=this.PostsItems.length?this.PostsItems.concat(d.body):d.body;
        }
      })
    },
    MorePosts:function(){
       this.currentPage++;
       this.getPosts();
    }
  }
}
</script>

<style scoped>

.posts{border-right: 2px solid rgba(0,0,0,0.2);
border-left: 2px solid rgba(0,0,0,0.2);}
</style>