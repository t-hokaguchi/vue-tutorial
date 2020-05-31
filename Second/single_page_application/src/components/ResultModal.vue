<template>
  <div id="overlay">
    <div id="content">
      <h2>{{weatherForecast.title}}</h2>
      <div>
        <ul>
          <li v-for="(forecast) in weatherForecast.forecasts" :key="forecast.date">
            <span>{{forecast.dateLabel}}の天気</span>
            <span>{{forecast.telop}}</span>
          </li>
        </ul>
      </div>
      <div>
        <h2>天気概要</h2>
        <span style="white-space:pre-wrap; word-wrap:break-word;">
        {{weatherForecast.description.text}}
        </span>
      </div>
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
  data () {
    return {
      weatherForecast: Object
    }
  },
  mounted () {
    this.$axios
      .get('http://weather.livedoor.com/forecast/webservice/json/v1?city=' + this.cityInfo.cityId)
      .then(response => {
        console.log(response)
        this.weatherForecast = response.data
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
  #overlay {
    /* 要素を重ねた時の順番 */
    z-index: 1;

    /* 画面全体を覆う設定 */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    /* 画面の中央に要素を表示させる設定 */
    display: flex;
    align-items: center;
    justify-content: center;

  }

  #content {
    z-index: 2;
    width: 50%;
    padding: 1em;
    background: #fff;
  }
</style>
