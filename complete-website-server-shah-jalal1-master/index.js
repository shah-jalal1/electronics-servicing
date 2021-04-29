const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const app = express()
const cors = require('cors');
const boyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const ObjectId = require('mongodb').ObjectID;
// const fs = require('fs-extra');
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.owenr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const port = 5000
app.use(cors());
app.use(boyParser.json());
app.use(fileUpload());

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const serviceCollection = client.db("electronicsServicing").collection("service");
    const adminCollection = client.db("electronicsServicing").collection("admin");
    const bookingCollection = client.db("electronicsServicing").collection("bookings");
    const reviewCollection = client.db("electronicsServicing").collection("review");
    console.log("database connected");

    app.post('/addAService', (req, res) => {
        const file = req.files.file;
        const name = req.body.name;
        const price = req.body.price;
        const desc = req.body.desc;
        const newImg = file.data;
        const encImg = newImg.toString('base64');

        var image = {
            contentType: file.mimetype,
            size: file.size,
            img: Buffer.from(encImg, 'base64')
        };

        serviceCollection.insertOne({ name, price, desc, image })
            .then(result => {
                res.send(result.insertedCount > 0);
            })
    })

    app.post('/addAReview', (req, res) => {
        const file = req.files.file;
        const name = req.body.name;
        const designation = req.body.designation;
        const desc = req.body.desc;
        const newImg = file.data;
        const encImg = newImg.toString('base64');

        var image = {
            contentType: file.mimetype,
            size: file.size,
            img: Buffer.from(encImg, 'base64')
        };

        reviewCollection.insertOne({ name, designation, desc, image })
            .then(result => {
                res.send(result.insertedCount > 0);
            })
    })

    app.get('/services', (req, res) => {
        serviceCollection.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    });

    app.get('/services/:id', (req, res) => {
        // console.log(req.params.id);
        serviceCollection.find({ _id: ObjectId(req.params.id) })
            .toArray((err, documents) => {
                res.send(documents[0]);
            })

    })

    app.get('/admin', (req, res) => {
        adminCollection.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    });

    app.post('/isAdmin', (req, res) => {
        const email = req.body.email;
        // console.log(req.body.email);
        adminCollection.find({ email: email })
            .toArray((err, admin) => {
                res.send(admin.length > 0);
            })
    })

    app.post('/createAdmin', (req, res) => {
        const email = req.body.email;
        console.log(email);

        adminCollection.insertOne({ email })
            .then(result => {
                res.send(result.insertedCount > 0);
            })
    })



    app.delete('/delete/:id', (req, res) => {
        console.log(req.params.id);
        serviceCollection.deleteOne({ _id: ObjectId(req.params.id) })
            .then((result) => {
                console.log(result);
                res.send(result.deletedCount > 0)
            })
    })

    app.patch('/updateOrder/:id', (req, res) => {
        console.log(req.body.value);
        bookingCollection.updateOne({_id: ObjectId(req.params.id)},
        {
            $set: {status: req.body}
        })
        .then(result => {
            // console.log(result);
            res.send(result.modifiedCount > 0)
        })
    })

    app.post('/addBooking', (req, res) => {
        const data = req.body;
        console.log(data);

        bookingCollection.insertOne(data)
            .then(result => {
                res.send(result.insertedCount > 0);
            })
    })

    app.get('/bookings', (req, res) => {
        bookingCollection.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    });

    app.get('/review', (req, res) => {
        reviewCollection.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    });

    // email: req.query.email
    app.get('/bookingEmail', (req, res) => {
        const email = req.query.email;
        console.log(email);
        bookingCollection.find({ email: email })
            .toArray((err, items) => {
                res.send(items)
            })
    })



});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT || port);