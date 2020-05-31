<template>
  <div id="overlay">
    <div id="content">
      <p>{{cityInfo.cityName}}の天気予報</p>
      <span>ここに天気予報結果を表示</span><br/>
      <button @click="closeResultModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultModal',
  props: {
    cityInfo: Object
  },
  mounted () {
    this.$axios
      .get('http://weather.livedoor.com/forecast/webservice/json/v1?city=400040')
      .then(response => {
        console.log(response)
      })
  },
  methods: {
    closeResultModal () {
      this.$emit('from-child')
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
