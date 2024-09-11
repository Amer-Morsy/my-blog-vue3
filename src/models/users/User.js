export default class User {
  constructor() {
    this.setInitialValue();
  }
  setInitialValue() {
    this.name = "amer";
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
  }
  fillData(data) {
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.confirmPassword = data.confirmPassword;
  }
}
