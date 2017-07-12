<template>
  <div id="app" v-bind:title="da">
    <img src="./assets/logo.png">
    <hello></hello>
    <p v-html="da"></p>
    {{num + 1}}
    <ul>
      <li v-for="(item ,index) in list" :class="{odd:index%2}" >
        {{item.name}}=>{{item.age}}  =>{{index}}
      </li>
    </ul>
    <ul>
      <li v-for="(value ,key) in list2" >
        {{key +value}}
      </li>
    </ul>

  </div>
</template>

<script>
  import Hello from './components/Hello'

  export default {
//  name: 'app',
    components: {
      Hello
    },
    data(){
      return {
        da: 'lalaa',
        num: 1,
        list: [
          {
            name: "zhangsan",
            age: 26

          },
          {
            name: "lisi",
            age: 23

          }],
        list2:{
            name:'apple',
            price:34,
            color:'red',
            weight:4

        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
