<template>
<!-- eslint-disable  -->
  <h1>App component</h1>
  <!-- text-binding / mustache syntax -->
  <h2>{{ track }}</h2>
  <h2 v-text="dept"></h2>
  <p v-html="branch"></p>
  <!-- <h2 v-bind:id="headid">welcome</h2>
  <h2 v-bind:class="headclass">welcome</h2>
  <h2 v-bind:style="{ fontSize: '50px' }">welcome</h2>
  <h2 v-bind:style="styleObj">welcome</h2>
  <button v-on:click="flag = !flag">change style</button>
  <p v-bind:style="flag ? oldstyle : newstyle">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur id
    provident nihil dolor mollitia et a soluta aut, perferendis autem minima
    officiis excepturi fugiat expedita, impedit ut eum consequatur nisi.
  </p> -->
  <h2 :id="headid">welcome</h2>
  <h2 :class="headclass">welcome</h2>
  <h2 :style="{ fontSize: '50px' }">welcome</h2>
  <h2 :style="styleObj">welcome</h2>
  <button @click="flag = !flag">change style</button>
  <p :style="flag ? oldstyle : newstyle">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur id
    provident nihil dolor mollitia et a soluta aut, perferendis autem minima
    officiis excepturi fugiat expedita, impedit ut eum consequatur nisi.
  </p>
  <hr />
  <h1>conditional rendering</h1>
  <!-- <button @click="++num">inc</button>
  <button @click="--num">dec</button> -->
  <button @click="inc">inc</button>
  <button @click="dec">dec</button>
  <h2>{{ num }}</h2>
  <div v-if="num === 0">the num is zero</div>
  <div v-else-if="num > 0">num is positive</div>
  <div v-else-if="num < 0">num is negative</div>
  <div v-else>it's not a num</div>
  <div v-show="num === 0">the num is zero with v-show</div>
  <hr />
  <h1>list rendering</h1>
  <h3 v-for="name in names" :key="name">
    {{ name }}
  </h3>
  <h3>{{ myinf.id }} -- {{ myinf.name }} --{{ myinf.address }}</h3>
  <template v-for="(value, key) in myinf" :key="key">
    <h3>{{ key }} : {{ value }}</h3>
  </template>
  <!-- <template v-for="d in data" :key="d.id"> -->
    <div v-if="d.salary > 2000">

    <h3>{{ d.id }} / {{ d.name }} / {{ d.salary }}</h3>
    </div>
  </template>
  <div v-for="d in filterData" :key="d.id">
    <h2>{{ d.id }} -- {{ d.name }} -- {{ d.salary }}</h2>
  </div>
  <template v-for="actor in actors" :key="actor.id">
    <h2>
      {{ actor.id }} -- {{ actor.name }}
      <template v-for="movie in actor.movies" :key="movie">
        <h3>
          {{ movie }}
        </h3>
      </template>
    </h2>
    <!-- <h3 v-once>{{ name }}</h3> -->
    <h3 v-pre>{{ name }}</h3>
    <button @click="name = 'ui'">change name</button>
  </template>
  <hr />
  <h2>form handling</h2>
  <h2>{{ JSON.stringify(formValue) }}</h2>
  <form action="" @submit.prevent="formHandling">
    name : <input type="text" v-model.trim.lazy="formValue.name" /> age :
    <input type="text" v-model.lazy.number="formValue.age" />
    <button>submit</button>
  </form>
  <hr>
  {{ method() }} {{ comput }}
  <hr>
  <parentProps/>
  <hr>
  <parentProvide id="heading"/>
</template>

<script>
import parentProps from './components/props/parent.vue';
import parentProvide from './components/provideInject/parentprovide.vue'
export default {
  name: "App",
  components:{
    parentProps,
    parentProvide
  },
  data() {
    return {
      track: "UI",
      dept: "SD",
      branch: "<h1>smart</h1>",
      headid: "headId",
      headclass: "headClass",
      styleObj: {
        fontSize: "50px",
        "background-color": "red",
      },
      flag: true,
      oldstyle: {
        padding: "10px",
        background: "cyan",
      },
      newstyle: {
        padding: "10px",
        background: "blue",
        color: "white",
      },
      num: 0,
      names: ["ui", "mobile", "pd", "swa"],
      myinf: {
        id: 1,
        name: "ryhab",
        address: "cairo",
      },
      data: [
        {
          id: 1,
          name: "ali",
          salary:2000
        },
        {
          id: 2,
          name: "mhmod",
          salary:20000
        },
        {
          id: 3,
          name: "ashraf",
          salary:50000
        },
      ],
      actors: [
        {
          id: 100,
          name: "a7med helmy",
          movies: ["x-large", "3sal eswd"],
        },
        {
          id: 200,
          name: "a7med ezz",
          movies: ["awlad rez21", "awlad rez22", "malaky alex"],
        },
      ],
      name: "mobile",
      formValue: {
        name: "",
        age: "",
      },
    };
  },
  methods: {
    inc() {
      return ++this.num;
    },
    dec() {
      return --this.num;
    },
    formHandling() {
      // e.preventDefault();
      console.log(this.formValue);
    },
    method(){
      console.log("method")
    }
  },
  computed:{
    comput(){
      return console.log("comput")
    },
    filterData(){
      return this.data.filter((d)=> d.salary > 2000)
    }
  },
  watch:{
    num(newValue,oldValue){
      if(newValue > oldValue && newValue > 4){
        alert("dangerous ......")
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#headId {
  background-color: pink;
}
.headClass {
  background-color: purple;
  color: white;
}
#heading{
  background-color: purple;
  color: white;
}
</style>
