import News from "../models/News";

export default {
  render(newView: News) {
    return {
      id: newView.id,
      title: newView.title,
      description: newView.description,
      createAt: newView.createdAt,
    };
  },

  renderAll(newsView: News[]) {
    return newsView.map((newW) => this.render(newW));
  },
};
