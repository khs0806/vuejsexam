import Vue from 'vue'

new Vue({
  el: '#app',
  data: {
    list: {food: ['둥지닭볶음탕','이대포 사골부대찌개','스아게K','댉갤비', '와인식탁', '담택', '북녘식당친친', '야끼토리지중', '릴린', '멕시칸식당베르데', '포가', '음공' , '다이닝야경', '얄라차분보남보', '지로우라멘', '비스트로주라']},
    message: {
      value: '상추의 16가지 여행모험',
    },
    show: '?',
    num: 1
  },
  methods: {
    handleClick: function(e){
      // alert(this.list[Math.floor( Math.random() * this.list.length )])
      this.show = this.list.food[Math.floor( Math.random() * this.list.food.length )]
    }
  },
})
