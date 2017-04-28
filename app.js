Vue.component('cheese', {
    props:['food'],
    template:`
    <div>
        <h1>I am a component</h1>
        <p>{{food}}</p>
    </div>
    `
})

Vue.component('button-counter', {
  template: '<button v-on:click="increment">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function () { //this is just to fire the $emit
      this.$emit('rice') //this is the event on the parent fires event on the upper level named what you give here
    }
  },
})

new Vue({
    el:'#noob',
    data:{
        message: 'Vue Stuff',
        swap: 'Change me',
        drink:'this is dynamic value of props',
        total: 0
    },
    methods:{
        changeMe: function(){
            this.swap = 'Jim'
        },
        incrementTotal: function () {
            this.total += 1
        }
    },
})