import { createApp } from 'vue';
import {createRouter} from 'vue-router'
import App from './App.vue';
import { createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/teams',
            component: TeamsList
        },
        {
            path: '/user',
            component: UsersList
        },
     
        {
            path: '/teams/:teamId',
            component: TeamMembers,
            props: true
        },
    ]
})
app.use(router);

app.mount('#app');
