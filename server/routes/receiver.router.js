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

// down to business

router.post('/receiver', (req, res, next) => {

    const sqlText = `
        INSERT INTO "receiver"
        ("first_name", "middle_name", "last_name", "address", 
        "phone_no", "user_id")
        VALUES
            ($1, $2, $3, $4, $5, $6)
    `

    const sqlParam = [
        req.body.firstName,
        req.body.middleName,
        req.body.lastName,
        req.body.address,
        Number(req.body.phoneNumber),
        req.body.userId
    ]

    pool.query(sqlText, sqlParam)
        .then(() => res.sendStatus(201))
        .catch( (err) => {
            console.log('Create receiver info failed', err);
            res.sendStatus(500);
        })
})


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