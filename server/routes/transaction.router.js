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



//POST a new payment
router.post('/transaction', (req, res, next) =>{
    const sqlText = `
        INSERT INTO "transaction"
            ("receiver_id", "converted_amount", "phone_number", "country", "amount", "date", "rate")
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *` 

    const sqlParam = [
        req.receiver.id,
        req.body.convertedAmount,
        req.body.phoneNumber,
        req.body.country,
        req.body.amount,
        req.body.date,
        req.body.rate

    ]
    pool.query(sqlText, sqlParam)
        .then((result) => {
            console.log('this is the result', result.rows[0]);
            res.send(result.rows [0])})
        .catch( (err) => {
            console.log('Create receiver info failed', err);
            res.sendStatus(500);
        })

}) // end router.post

// GET all the payment belonging to this user
router.get('/transaction', (req, res) =>{
    const sqlText = `
        SELECT * FROM "transaction"
        JOIN "receiver"
    `
    pool.query(sqlText)
        .then(result =>{
            res.send(result.rows)
        })
        .catch(err =>{
            console.log('Error fetching transaction', err);
            res.sendStatus(500)
        })

})

module.exports = router

