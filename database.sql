
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR (255),
    "last_name" VARCHAR (255)
);

CREATE TABLE "transaction" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT,
	"receiver_fname" VARCHAR(255),
	"receiver_lname" VARCHAR(255),
	"phone_number" INT,
	"country" VARCHAR(255),
	"amount" FLOAT,
	"address" VARCHAR(255),
	"date" DATE,
	"rate" FLOAT,
	"reference_number" INT
);

CREATE TABLE "payment" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT,
	"card_name" VARCHAR(255),
	"card_number" INT,
	"card_type" VARCHAR(255),
	"address" VARCHAR(255),
	"expire_date" DATE,
	"cvv" INT
);
