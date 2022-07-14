const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/contact_list_db");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error in connecting db"));

db.once("open", () => {
	console.log("connected");
});
