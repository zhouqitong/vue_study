<template>
  <div id="app" v-bind:title="title">
    <img src="./assets/logo.png">

    <p v-html="title"></p>
    {{num + 1}}
    <ul>
      <li v-for="(item ,index) in list" :class="{odd:index%2}">
        {{item.name}}=>{{item.age}}  =>{{index}}
      </li>
    </ul>
    <ul>
      <li v-for="(value ,key) in list2">
        {{key + value}}
      </li>
    </ul>

    <hello v-for="(value ,key) in list2"></hello>  <!--标签不区分大小写-->
    <!--推荐将驼峰命名 CompA改成 comp-a 这种-->
    <!--双向绑定-->
    <!--<button v-on:click="setValue">additem</button>-->
    <button v-on:click="setValue2">additem</button>

    <a v-bind:href="link">link</a>

    <a :href="link">v-bind缩写</a>
    <p v-bind:class="classStr" class="weight">class</p>

    <p :class=[classA,classB] class="weight">[classA,classB]</p>
    <!--数组和对象混用-->
    <p :class="[classA,{'red-font':hasError}]" class="weight">hasError</p>
    <!--css-->
    <p :style="linkCss">css</p>
    <!--v-if和v-show的区别-->


    <p v-if="showPartA">PartA-1</p>
    <p v-else="showPartA">no-data</p>

    <p v-show="!showPartA">PartB-1</p>
    <button v-on:click="toggle">toggle</button>

    <!--根据变量动态渲染组件-->
    <p :is="comToRender"></p>

    <!--父子组件通信-->
    <hello number="5"></hello>
    <!--指定接收类型-->
    <hello number-to-do="15"></hello>

    <!--动态传递属性-->
    <input type="text" v-model="myVal">
    <Hello :my-value="myVal"></Hello>
    <!--制定输入的类型-->
    <input type="text" v-model.number="myVal">

  </div>
</template>

<script>
  import Hello from './components/Hello'
  import Vue from "vue";

  export default {
//  name: 'app',
    components: {
      Hello
    },

  data()
  {
    return {
      myVal:" ",
      comToRender:Hello,
      link:"http://www.baidu.com",
      title: "i'm a title",
      num: 1,
      showPartA:true,
      classStr:{
        'red-font':true,
        'blue-font':true
      },
      classA:"A",
      classB:"B",
      hasError:true,
      linkCss:{
          "font-size":"35px",
          "color":"red"
      },
      list: [
        {
          name: "zhangsan",
          age: 26

        },
        {
          name: "lisi",
          age: 23

        }],
      list2: {
        name: 'apple',
        price: 34,
        color: 'red',
        weight: 4

      }
    }
  }
  ,methods: {
      additem(){
        this.list.push({
          name: "newone",
          age: "100"
        })
      },
      /*直接为某项赋值 以及修改数组的长度 不会触发视图的更新*/
      setValue(){
        this.list[1] = {
          name: "changevalue",
          age: 0
        }
      },
      /*需要使用set方法*/
      setValue2(){
        Vue.set(this.list, 1, {
          name: "changevalue",
          age: 0
        })
      },

      toggle(){
        console.log(this.showPartA);
        this.showPartA  = !this.showPartA
      }
    },
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
