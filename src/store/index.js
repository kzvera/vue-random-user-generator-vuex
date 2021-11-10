import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      users: [],
      totalWealth: null
    }
  },
  mutations: {
    setRandomUser(state, payload) {
      if (state.users.length > 0) {
        state.users = [...state.users, ...payload];
      } else {
        state.users = payload;
      }
    },
    doubleMoney(state) {
      state.users = state.users.map(user => {
        return { ...user, money: user.money * 2 };
      });
    },
    sortByRichest(state) {
      state.users.sort((a, b) => b.money - a.money);
    },
    showMillionaires(state) {
      state.users = state.users.filter(user => user.money > 1000000);
    },
    calculateWealth(state) {
      state.totalWealth = state.users.reduce((acc, user) => (acc + user.money), 0);
    }
  },
  actions: {
    async setRandomUser(context, payload) {
      const results = payload ? `?results=${payload}` : '';
      const response = await fetch(`https://randomuser.me/api/${results}`);
      const data = await response.json();
      const users = [];

      for (const key in data.results) {
        const user = {
          name: `${data.results[key].name.first} ${data.results[key].name.last}`,
          money: Math.floor(Math.random() * 1000000)
        }

        users.push(user);
      }

      context.commit('setRandomUser', users);

      if (context.getters.totalWealth != null) {
        context.dispatch('calculateWealth');
      }
    },
    doubleMoney(context) {
      context.commit('doubleMoney');

      if (context.getters.totalWealth != null) {
        context.dispatch('calculateWealth');
      }
    },
    sortByRichest(context) {
      context.commit('sortByRichest');
    },
    showMillionaires(context) {
      context.commit('showMillionaires');

      if (context.getters.totalWealth != null) {
        context.dispatch('calculateWealth');
      }
    },
    calculateWealth(context) {
      context.commit('calculateWealth');
    }
  },
  getters: {
    users(state) {
      return state.users;
    },
    totalWealth(state) {
      return state.totalWealth;
    }
  }
})
