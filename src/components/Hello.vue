
<template>
   <div>
     {{hello}}
     {{numberToDo}} <!--只支持驼峰式写法-->

     {{myValue}}
   </div>
</template>
<script>
  export default {
//      props:['number'],
    props:{
      "number-to-do": [Number,String,Object],
      "my-value":[String]
    },
    data(){
          return {
              hello :"i am component hello "
          }
    }
  }

</script>



