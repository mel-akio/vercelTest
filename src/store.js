import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        muteNotif: false, // bouton mute
        actualPage: 1,
        selectedOrder: 0,
        orders: [{
            name: 'T.Clark',
            id: 'E8911',
            hourOfOrder: '17h15',
            timeElapsed: '14min',
            state: 0,
            items: [{
                mainCourse: 'Menu Cheeseburger',
                similarItems: 1,
                sideDish: 'Frites moyene',
                drink: 'Moyen Sprite',
                note: 'Pas de tomates'
            },
            {
                mainCourse: 'Sunday fraise',
                similarItems: 1,
            }]
        },
        {
            name: 'B.Nadine',
            id: 'E8912',
            hourOfOrder: '17h17',
            timeElapsed: '8min',
            state: 0,
            items: [{
                mainCourse: 'Menu mexico',
                similarItems: 2,
                sideDish: 'Frites grandes',
                drink: 'Grand Coca-Cola'
            }]
        },
        {
            name: 'R.Marc',
            id: 'E8913',
            hourOfOrder: '17h19',
            timeElapsed: '3min',
            state: 0,
            items: [{
                mainCourse: 'Menu New-York',
                similarItems: 1,
                sideDish: 'Frites grandes',
                drink: 'Grand Coca-Cola'
            },
            {
                mainCourse: 'Menu Mexico',
                similarItems: 2,
                sideDish: 'Frites grandes',
                drink: 'Grand Sprite'
            },
            {
                mainCourse: 'Giga Burger',
                similarItems: 1,
            }]
        }]

    },
    mutations: {

    },
    actions: {

    }
})