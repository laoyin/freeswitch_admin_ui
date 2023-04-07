<template>
  <div id="app">
    <router-view />
    <!-- <DragBox
      v-if="this.$store.state.user.token"
                 :leftDistance='leftDistance'
                 :topDistance='topDistance'>
            <floatCall />
        </DragBox> -->
  </div>
</template>

<script>
// import DragBox from '@/components/dragBox.vue'
// import floatCall from '@/components/floatCall.vue'

export default {
  name: 'App',
  components:{
    // DragBox,
    // floatCall
  },
  data(){
    return{
      leftDistance: 820,
      topDistance: 500
    }
  },
  mounted(){
    console.log(this.$store.state)
  }
}
</script>
