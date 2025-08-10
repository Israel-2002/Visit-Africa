const express = require("express");
const fs = require("fs");
const path = require("path");
const vite = require("vite");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "src", "views", "pages"));

let manifest = {};

if (process.env.NODE_ENV === "development") {
    const createDevServer = async () => {
        const viteServer = await vite.createServer({
            server: {
                middlewareMode: true,
            },
            appType: "custom",
        });

        app.use(viteServer.middlewares);
    };

    createDevServer();
} else {
    const manifestPath = path.join(
        __dirname,
        "dist",
        "assets",
        "manifest.json",
    );

    if (fs.existsSync(manifestPath)) {
        app.use(
            "/assets",
            express.static(path.join(__dirname, "dist", "assets")),
        );

        manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    }
}

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    res.locals.manifest = manifest;
    res.locals.environment = process.env.NODE_ENV;
    next();
});

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
