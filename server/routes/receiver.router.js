const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});


// POST a new receiver to that receiver table
router.post('/receiver', (req, res, next) => {
    console.log('******** req.body', req.body);
    const sqlText = `
        INSERT INTO "receiver"
        ("first_name", "last_name", "address", "phone_no")
        VALUES
            ($1, $2, $3, $4) RETURNING * 
    `

    const sqlParam = [
        req.body.firstName,
        req.body.lastName,
        req.body.address,
        req.body.phoneNumber
    ]

    pool.query(sqlText, sqlParam)
        .then((result) => {
            console.log('this is the result', result.rows[0]);
            res.send(result.rows [0])})
        .catch( (err) => {
            console.log('Create receiver info failed', err);
            res.sendStatus(500);
        })
})

// GET all the receiver belonging to this user
router.get('/receiver', (req, res) => {
    const sqlText = `
        SELECT *
        FROM "receiver"
    `
    pool.query(sqlText)
        .then( result => {
            res.send(result.rows)
        })
        .catch(err => {
            console.log('Error fetching receiver', err);
            res.sendStatus(500);
        })
})


module.exports = router