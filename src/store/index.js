import Vue from 'vue'
import Vuex from 'vuex'
import car from './car'
import discover from './discover'
import search from './search'
import detail from './detail'
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		car,
		discover,
		search,
		detail
	}
})
