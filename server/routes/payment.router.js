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
router.post('/payment', (req, res, next) =>{
console.log('payment detail ******* req.body', req.body);
    const sqlText = `
        INSERT INTO "payment"
        ("user_id", "card_name", "card_number", "card_type", "address", "expiration", "cvv")
        VALUES ($1, $2, $3, $4, $5, $6, $7)`

    const sqlParam = [
        req.user.id,
        req.body.cardName,
        req.body.cardNumber,
        req.body.cardType,
        req.body.billingAddress,
        req.body.expiration,
        req.body.cvv
    ]

    pool.query(sqlText, sqlParam)
        .then(() => res.sendStatus(201))
        .catch((err) =>{
            console.log('Create payment failed', err);
            res.sendStatus(500);
        })
})

// GET all the payment belonging to this user
router.get('/payment', (req, res) =>{
    const sqlText = `
        SELECT * FROM "payment"`
    pool.query(sqlText)
        .then(result =>{
            res.send(result.rows)
        })
        .catch(err =>{
            console.log('Error fetching payment', err);
            res.sendStatus(500);
        })
})

module.exports = router