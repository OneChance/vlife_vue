import Vue from 'Vue'
import Index from '../components/Index.vue'
window.onload = function(){
	new Vue({
		el:'#app',
		components:{
			'my-component':Index
		}
	});
}