const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const _ = require("lodash");

const app = express();

// enable file upload
app.use(fileUpload({
    createParentPath: true
}));

// add other middleware
app.use(cors());
app.use(bodyParser.json());
app.unsubscribe(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));

// make the uploaded files publicly accessible 
// (i.e. http://localhost:3000/programmer.png)
app.use(express.static("uploads"))


// start app
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`App is listening on port ${port}.`);
});

app.post("/single-file", async (req, res) => {
    try {
        if(!req.files){
            res.send({
                status: false,
                message: "No file uploaded"
            })
        } else {
            // Use the name of the input field
            // to retrieve the uploaded file
            let file = req.files.file;
            // Use the mv() method to place the file
            // in upload directory
            file.mv("./uploads/" + file.name);

            // Send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: file.name,
                    mimetype: file.mimetype,
                    size: file.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});
