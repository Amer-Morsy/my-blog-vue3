export default class Post {
  constructor() {
    this.setInitialValue();
  }
  setInitialValue() {
    this.id = "";
    this.title = "";
    this.body = "";
    this.userId = "";
    this.tags = [];
    this.reactions = {
      likes: 0,
      dislikes: 0,
    };
    this.views = 0;
  }
  fillData(data) {
    this.title = data.title;
    this.body = data.body;
    this.userId = data.userId;
    this.tags = data.tags;
    this.reactions = data.reactions;
    this.views = data.views;
  }
}
