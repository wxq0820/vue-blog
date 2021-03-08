import { mapActions } from 'vuex';

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'register', //also supports payload `this.nameOfAction(amount)` 
    ]),
    onRegister () {
      this.register({ username: this.username, password: this.password })
        .then(() => {
          this.$router.push({ path: '/' })
        })
    }
  },
};
