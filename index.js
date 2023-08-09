import express from "express";

const app = express();

app.get("/", (req,res) => {
    const data = {
        title: "EJS Practice",
        seconds: new Date().getSeconds(),
        items: ["apple", "mango", "banana"],
        htmlContent: "<em>Hello User</em>"
    };
    res.render("index.ejs", data);
});


app.listen(3006,() => {
    console.log("server started at 3006");
})