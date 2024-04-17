// Core modules
const path = require("path");

// NPM modules
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Other variables
let access_token;

// Setup EJS engine and views location
app.set("view engine", "ejs");
app.set("views", viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

module.exports = app;
/**========================================================================
 *                           CODE START
 *========================================================================**/

/**============================================
 *                   ROUTING
 *=============================================**/

app.get("", (req, res) => {
    res.render("index", {
        href: `/login`,
        btn_text: `Get started`,
    });
});

app.listen(port, async () => {
    console.log(`Server running on port ${port}.`);
});
