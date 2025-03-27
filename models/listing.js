const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  image: {
    type: String,
    default:
      "https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.jpg?s=2048x2048&w=is&k=20&c=nPpRdzk05LLKeZ_X-pTd9bduckCffPB2MzrTREjrEOc=",
    set: (v) =>
      v === " "
        ? "https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.jpg?s=2048x2048&w=is&k=20&c=nPpRdzk05LLKeZ_X-pTd9bduckCffPB2MzrTREjrEOc="
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
