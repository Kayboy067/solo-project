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
    console.log('this is req.body', req.body);
    console.log('this is req.user', req.user.id);
    const sqlText = `
        INSERT INTO "transaction"
            ("receiver_id", "user_id", "converted_amount", "country", "amount", "date", "rate", receiving_method)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *` 

    const sqlParam = [
        req.body.receiver_id,
        req.user.id,
        req.body.convertedAmount,
        req.body.country,
        req.body.amount,
        req.body.date,
        req.body.rate,
        req.body.receivingMethod

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
        ON receiver.id = transaction.receiver_id
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

