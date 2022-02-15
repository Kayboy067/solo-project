
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "transaction" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT,
	FOREIGN KEY ("user_id") REFERENCES "user"("id"), 
	"receiver_fname" VARCHAR(255),
	"receiver_lname" VARCHAR(255),
	"phone_number" VARCHAR (1000) NOT NULL,
	"country" VARCHAR(255),
	"amount" FLOAT,
	"address" VARCHAR(255),
	"date" DATE,
	"rate" FLOAT
);

CREATE TABLE "payment" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT,
	FOREIGN KEY ("user_id") REFERENCES "user"("id"), 
	"card_name" VARCHAR(255),
	"card_number" VARCHAR (1000) NOT NULL,
	"card_type" VARCHAR(255),
	"address" VARCHAR (1000),
	"expiration" varchar(255) NOT NULL,
	"cvv" VARCHAR (1000) NOT NULL
);


CREATE TABLE "receiver"(
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR (255) NOT NULL,
	"middle_name" VARCHAR (255),
	"last_name" VARCHAR (255) NOT NULL,
	"address" VARCHAR(255) NOT NULL,
	"phone_no" INT NOT NULL,
	"user_id" INT REFERENCES "user"(id));
	
SELECT * FROM "receiver";