<template>
  <div>
    <p>Welcome to Vue SPA!</p>
    <router-link to="/">Go back Home</router-link><br>
    <button @click="openModal">Open modal</button>
    <Modal v-show="showModal" v-on:from-child="closeModal" />
    <!-- <div id="overlay" v-show="showModal">
      <div id="content">
        <p>これがモーダルウィンドウです。</p>
        <button v-on:click="closeModal">Close</button>
      </div>
    </div> -->
  </div>
</template>

<script>
import Modal from './Modal'
export default {
  name: 'Welcome',
  components: { Modal },
  data () {
    return {
      showModal: false
    }
  },

  methods: {
    openModal () {
      this.showModal = true
    },
    closeModal () {
      this.showModal = false
    }
  }

}
</script>
