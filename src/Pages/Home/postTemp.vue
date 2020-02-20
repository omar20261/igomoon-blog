<template>
  <a class="col-md-8 mb-3 p-3 d-inline-block blog-post" :href="PostItem.guid.rendered" target="_blank">
    <h4>{{PostItem.title.rendered}}</h4>
    <img :src="image" alt="">
    <p v-html="PostItem.excerpt.rendered">  </p>
    <p class="date"> {{PostItem.date_gmt | moment("YYYY-MM-DD hh:mm A")}} </p>
  </a>
</template>

<script>
import API from '../../services/API.service';

export default {
  name: 'post-template',
  mounted(){
    this.getFMedia(this.PostItem.featured_media)
  },
  props: ['PostItem',"index"],
  data () {
    return {
      image: '/dist/default-img.png',
    }
  },
  methods:{
    getFMedia:function(id) {
      if(!id || id == 0){return;}
      let url = '/wp-json/wp/v2/media/'+id;
      API.callFun({method:'get',url:url,noloading:true}).then((d)=>{
        if(d&&d.body&&d.body.source_url){this.image=d.body.source_url}
      })
    }
  }
}
</script>

<style>
.blog-post{
  border: 1px solid rgba(0,0,0,0.11);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
}
.blog-post:hover {
  -webkit-transform: scale(1.1, 1.1);
  transform: scale(1.1, 1.1);
  background-color: #E3E3E3;;
  z-index: 1;
}
.date{
  float: left;
  font-size: 15px;
  color:rgb(115, 115, 115);
}
.blog-post img{
  max-width: 700px;
  width: 100%;
}
</style>