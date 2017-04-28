Vue.component('cheese', {
    props:['food'],
    template:`
    <div>
        <h1>I am a component</h1>
        <p>{{food}}</p>
    </div>
    `
})

new Vue({
    el:'#noob',
    data:{
        message: 'Vue Stuff',
        swap: 'Change me',
        drink:''
    },
    methods:{
        changeMe: function(){
            this.swap = 'Jim'
        }
    },
})