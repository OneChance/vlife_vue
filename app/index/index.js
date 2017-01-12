import Vue from 'Vue'
import Index from '../components/Index.vue'
window.onload = function() {
	new Vue({
		el: '#app',
		components: {
			'my-component': Index
		}
	});
}

require('../css/bootstrap.min.css');
require('../css/vlife.css');
require('../css/styles.css');
require('../css/font-awesome-4.1.0/css/font-awesome.min.css');