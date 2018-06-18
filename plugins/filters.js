import Vue from 'vue';

Vue.filter('capitalize', function(value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter('formatDate', function(value) {
  if (!value) return '';
  return new Date(value).toLocaleString();
});
