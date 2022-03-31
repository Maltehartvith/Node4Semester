import db from "./createConnection.js"

const isInDeleteMode = true;

if (isInDeleteMode){
    db.exec(`DROP TABLE IF EXISTS players;`);
}

db.exec(`
    CREATE TABLE IF NOT EXISTS players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(70)
    );`
);

//For seeding (creating dummy data)
if (isInDeleteMode){
    db.run("INSERT INTO players (name) VALUES ('Messy');")
    db.run("INSERT INTO players (name) VALUES ('Fodbold');")
}

db.close();
