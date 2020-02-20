import Vue from 'vue';
import {store} from '../config/store'

class API{

  constructor(){

  }

  callFun(params){
    let headers = { 'Content-Type': 'application/json;charset=utf-8' },HttpFun;
    if(!params.noToken && localStorage.getItem("token")) { headers['Authorization'] = localStorage.getItem("token") }
    if(params.method){params.method=params.method.toLowerCase();}
    if(params.method=='put'||params.method=='post'){ HttpFun = Vue.http[params.method](store.state.API_ENDPOINT+params.url,params.data,{headers})
    }else{HttpFun = Vue.http[params.method](store.state.API_ENDPOINT+params.url,{headers}) }
    if(!params.noloading){store.state.G_loading=true;}
    return HttpFun.catch((d)=>{
      if(!params.noloading){store.state.G_loading=false;}
      console.error(`status: ${d.status} - ${d.statusText} , ${JSON.stringify(d.body)}`, ' http error')
    }).then((v)=>{
      if(!params.noloading){store.state.G_loading=false;}
      if(v&&v.body&&v.body.success==false){console.error(JSON.stringify(v.body.msg	))};
      return v;
    });
  }

}

export default new API({})
