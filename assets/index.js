'use strict';

// HTML の先頭で index.js を読み込んでいるので、
// Vue.js の初期化タイミングをページの準備が完了したとき (≒ DOMContentLoaded) にあわせる
document.addEventListener('DOMContentLoaded', () => {
  Vue.createApp({
    components: {
      TodoList,
      TodoInput,
    },
  }).mount('#vue');
});
