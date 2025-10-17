#!/usr/bin/env node

import dotenv from "dotenv";
import { Client } from "pg";

dotenv.config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  added TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  text VARCHAR(255),
  author VARCHAR(255)
);

INSERT INTO messages (added, text, author) VALUES
('2025-10-01T09:12:00', 'Hi there!', 'Amando'),
('2025-09-28T14:30:00', 'Hello World!', 'Charles'),
('2025-09-30T08:45:00', 'Good morning!', 'Ben'),
('2025-10-02T11:22:00', 'How are you?', 'Diana'),
('2025-10-03T16:10:00', 'Nice to meet you!', 'Eva'),
('2025-09-29T19:05:00', 'Have a great day!', 'Frank'),
('2025-10-04T21:40:00', 'See you later!', 'Grace'),
('2025-09-27T10:50:00', 'Take care!', 'Hannah'),
('2025-10-05T13:18:00', 'Welcome aboard!', 'Ian'),
('2025-10-06T07:05:00', 'Let''s get started!', 'Jack'),
('2025-09-25T15:42:00', 'Keep up the good work!', 'Karen'),
('2025-09-26T17:33:00', 'Long time no see!', 'Liam'),
('2025-10-01T20:20:00', 'Happy coding!', 'Mia'),
('2025-10-02T09:55:00', 'Stay positive!', 'Noah'),
('2025-09-30T12:00:00', 'Enjoy your day!', 'Olivia'),
('2025-09-29T18:47:00', 'Let''s grab coffee!', 'Paul')
ON CONFLICT DO NOTHING;
`;

await (async () => {
  console.log("Seeding...");
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done!");
})();
