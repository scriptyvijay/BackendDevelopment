const express = require("express");
const port = 8000;
const path = require("path");
const app = express();
const db = require("./config/mongoose");
const Contact = require("./modules/Contact");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.listen(port, (err) => {
	if (err) {
		console.log("error in server");
	}

	console.log("Yup! My express server is running on port", port);
});

app.get("/", (req, res) => {
	return res.render("home", { title: "RAW Academy", contact_list: contactList });
});

app.post("/create-contact", (req, res) => {
	Contact.create(
		{
			name: req.body.name,
			phone: req.body.phone,
		},
		(err, newContact) => {
			if (err) {
				console.error("error");
				return;
			}
			console.log(newContact);
			return res.redirect("back");
		}
	);

	return res.redirect("back");
});
