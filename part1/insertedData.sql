INSERT INTO users (username, email. password_hash, role) VALUES
('alice123','alice@example.com','hased123','owner'),
('bobwalker','bob@example..com','hashed456', 'walker'),
('carol123','carol@example.com','hashed789','owner'),
('Lebronjames','lemail@example.com','LeHashed','owner'),
('Gabenewell','gaben@example.com','NumberAfter2','owner')

INSERT INTO dogs (name, size, owner_id) VALUES
('Max','medium',(SELECT id FROM users WHERE username = 'alice123')),
('Bella','small',(SELECT id FROM users WHERE username = 'carol123')),
('Ledog','medium',(SELECT id FROM users WHERE username = 'Lebronjames')),
('Alyx','large',(SELECT id FROM users WHERE username = 'Gabenewell')),
('Speed','small',(SELECT id FROM users WHERE username = 'carol123'))

INSERT INTO WalkRequests(dog_id, requested_time, duration_minutes, location, status) VALUES

/*
sers:
A user with the username alice123,
email alice@example.com,
password hash hashed123, and role owner.
A user with the username bobwalker,
email bob@example.com,
password hash hashed456,and role walker.
A user with the username carol123, email carol@example.com, password hash hashed789, and role owner.
Two more users with details of your choosing.
