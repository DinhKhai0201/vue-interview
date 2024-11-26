import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const counterModule = {
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state, payload) {
            state.counter = state.counter + payload.value;
        }
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit("increment", {value: 2})
            }, 2000);
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2
        }
    }
}

const store = createStore({
    modules: {
        numbers: counterModule
    }
})
const app = createApp(App);
app.use(store)
app.mount('#app');
