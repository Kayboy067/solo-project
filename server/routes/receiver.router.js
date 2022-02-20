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
        ORDER BY id DESC
        LIMIT 1
    `
    pool.query(sqlText)
        .then( result => {
            res.send(result.rows[0])
        })
        .catch(err => {
            console.log('Error fetching receiver', err);
            res.sendStatus(500);
        })
})

router.put('/receiver', rejectUnauthenticated, (req,res) => {
    console.log('this is req.body in put', req.body);
    console.log('this is req.user in put', req.user);
    const sqlText = `
        UPDATE receiver
        SET
            "first_name" = $1,
            "last_name" = $2,
            "phone_no" = $3,
            "address" = $4
        WHERE
            "id" = $5
    `;

    const sqlParams = [
        req.body.first_name,
        req.body.last_name,
        req.body.phone_no,
        req.body.address,
        req.body.id
    ];

    pool.query(sqlText, sqlParams)
        .then((result) => {
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log('Error making database query', error);
            res.sendStatus(500)
        })
})


module.exports = router