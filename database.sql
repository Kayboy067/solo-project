
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
	"amount" FLOAT,
	"rate" FLOAT,
	"converted_amount" FLOAT,
	"country" VARCHAR(255),
	"date" DATE,
    "receiving_method" VARCHAR (255),
	"user_id" INT REFERENCES "user"(id), 
	"receiver_id" INT REFERENCES "receiver"(id)
);

CREATE TABLE "payment" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT,
	FOREIGN KEY ("user_id") REFERENCES "user"("id"), 
	"card_name" VARCHAR(255),
	"card_number" VARCHAR (255),
	"card_type" VARCHAR(255),
	"address" VARCHAR (1000),
	"expiration" varchar(255),
	"cvv" VARCHAR (1000)
);
INSERT INTO "payment"
            ("user_id", "card_name", "card_number", "card_type", "address", "expiration", "cvv")
VALUES ('1', 'Victor John', '	2222420000001113', 'Debit Card', '507 Village Dr Marshall MN', '05/2022', '419');




CREATE TABLE "receiver"(
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR (255) NOT NULL,
	--"middle_name" VARCHAR (255),
	"last_name" VARCHAR (255) NOT NULL,
	"address" VARCHAR(255) ,
	"phone_no" VARCHAR(255));
	--"user_id" INT REFERENCES "user"(id));
	
SELECT * FROM "receiver";


SELECT *
FROM "transaction"
WHERE
	"transaction"."user_id";;