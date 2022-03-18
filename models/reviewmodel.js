class ReviewModel {
  constructor(id, ratings, comment, name, date, likes, unlikes) {
    this.id = id;
    this.ratings = ratings;
    this.comment = comment;
    this.name = name;
    this.date = date;
    this.likes = likes;
    this.unlikes = unlikes;
  }
}

export default ReviewModel;
