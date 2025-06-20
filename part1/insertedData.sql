INSERT INTO Users (username, email, password_hash, role) VALUES
('alice123','alice@example.com','hashed123','owner'),
('bobwalker','bob@example.com','hashed456', 'walker'),
('carol123','carol@example.com','hashed789','owner'),
('Lebronjames','lemail@example.com','LeHashed','owner'),
('Gabenewell','gaben@example.com','NumberAfter2','owner');

INSERT INTO Dogs (name, size, owner_id) VALUES
('Max','medium',(SELECT id FROM Users WHERE username = 'alice123')),
('Bella','small',(SELECT id FROM Users WHERE username = 'carol123')),
('Ledog','medium',(SELECT id FROM Users WHERE username = 'Lebronjames')),
('Alyx','large',(SELECT id FROM Users WHERE username = 'Gabenewell')),
('Speed','small',(SELECT id FROM Users WHERE username = 'carol123'));

INSERT INTO WalkRequests (dog_id, requested_time, duration_minutes, location, status) VALUES
((SELECT dog_id FROM Dogs WHERE name = 'Max'), '2025-06-10 08:00:00', 30, 'Parklands', 'open'),
((SELECT dog_idid FROM Dogs WHERE name = 'Bella'), '2025-06-10 09:30:00', 45, 'Beachside Ave', 'accepted'),
((SELECT dog_idid FROM Dogs WHERE name = 'Ledog'), '2025-08-11 10:00:00', 60, 'Hindley St', 'open'),
((SELECT dog_idid FROM Dogs WHERE name = 'Alyx'), '2025-08-12 11:00:00', 15, 'Torrens River', 'accepted'),
((SELECT dog_idid FROM Dogs WHERE name = 'Speed'), '2025-08-13 12:00:00',25, 'Gotham City', 'open');





