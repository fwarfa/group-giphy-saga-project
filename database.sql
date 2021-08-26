CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (100) NOT NULL,
    "categoryId" INT REFERENCES "category"
);

DROP TABLE "favorites";

INSERT INTO "favorites" ("url", "categoryId")
VALUES ('www.google.com', 1);