<template>
  <div class="col-md-8 mb-3 p-3 d-inline-block blog-filter">
    
  </div>
</template>

<script>
/*after= */
/* before=  */
export default {
  name: 'Filter-template',
  mounted(){

  },
  props: ['PostItem',"index"],
  data () {
    return {

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
  -webkit-transform: scale(1.25, 1.25);
  transform: scale(1.25, 1.25);
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
}
</style>