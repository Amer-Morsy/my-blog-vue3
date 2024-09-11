<script>
import User from "@/models/users/User";
import { mapActions } from "vuex";

export default {
  name: "LoginSignup",
  data() {
    return {
      user: new User(),
    };
  },
  methods: {
    ...mapActions(["updateUserLogined"]),
    signup() {
      console.log(this.user);
      this.updateUserLogined(true);
      this.$router.push("/");
    },
    login() {
      console.log(this.user);
      this.updateUserLogined(true);
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div class="page login-signup">
    <div class="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div class="signup">
        <form @submit.prevent="signup">
          <label for="chk" aria-hidden="true">Sign up</label>
          <input
            type="text"
            name="txt"
            v-model="user.name"
            placeholder="User name"
            required=""
          />
          <input
            type="email"
            name="email"
            v-model="user.email"
            placeholder="Email"
            required=""
          />
          <input
            type="password"
            name="pswd"
            v-model="user.password"
            placeholder="Password"
            required=""
          />
          <input
            type="password"
            name="pswd"
            v-model="user.confirmPassword"
            placeholder="Password confirmation"
            required=""
          />
          <button type="submit">Sign up</button>
        </form>
      </div>

      <div class="login">
        <form @submit.prevent="login">
          <label for="chk" aria-hidden="true">Login</label>
          <input
            type="email"
            name="email"
            v-model="user.email"
            placeholder="Email"
            required=""
          />
          <input
            type="password"
            name="pswd"
            v-model="user.password"
            placeholder="Password"
            required=""
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-signup {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  // font-family: "Jost", sans-serif;
}
.main {
  width: 350px;
  height: 500px;
  // background: red;
  overflow: hidden;
  background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
  // background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38")
  // no-repeat center/ cover;
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
}
#chk {
  display: none;
}
.signup {
  position: relative;
  width: 100%;
  height: 100%;
}
label {
  color: #fff;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
input {
  width: 60%;
  height: 10px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 12px;
  border: none;
  outline: none;
  border-radius: 5px;
}
button {
  width: 60%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  background: #573b8a;
  font-size: 1em;
  font-weight: bold;
  margin-top: 30px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
}
button:hover {
  background: #6d44b8;
}
.login {
  height: 460px;
  background: #eee;
  border-radius: 60% / 10%;
  transform: translateY(-180px);
  transition: 0.8s ease-in-out;
}
.login label {
  color: #573b8a;
  transform: scale(0.6);
}

#chk:checked ~ .login {
  transform: translateY(-500px);
}
#chk:checked ~ .login label {
  transform: scale(1);
}
#chk:checked ~ .signup label {
  transform: scale(0.6);
}
</style>
