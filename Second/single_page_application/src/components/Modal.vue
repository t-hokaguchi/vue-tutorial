<template>
  <div id="overlay">
    <div id="content">
      <p>これがモーダルウィンドウです。</p>
      <button @click="selectCity">都市名</button><br/>
      <button @click="closeModal">Close</button>
      <ResultModal v-show="showResultModal" v-on:from-child="closeResultModal" :cityInfo="cityInfo"/>
    </div>
  </div>
</template>

<script>
import ResultModal from './ResultModal'
export default {
  name: 'Modal',
  components: {
    ResultModal
  },
  data () {
    return {
      showResultModal: false,
      cityInfo: {
        cityId: String,
        cityName: String
      }
    }
  },
  methods: {
    closeModal () {
      this.$emit('from-child')
    },
    selectCity (cityInfo) {
      console.log('selectCity')
      this.showResultModal = true
      this.cityInfo.cityId = '100000'
      this.cityInfo.cityName = '京都市'
    },
    closeResultModal () {
      this.showResultModal = false
      this.cityInfo.cityId = ''
      this.cityInfo.cityName = ''
    }
  }

}
</script>

<style>
#overlay{
  /* 要素を重ねた時の順番 */
  z-index:1;

  /* 画面全体を覆う設定 */
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

  /* 画面の中央に要素を表示させる設定 */
  display: flex;
  align-items: center;
  justify-content: center;

}
#content{
  z-index:2;
  width:50%;
  padding: 1em;
  background:#fff;
}
</style>
