-- DROP TABLE if exists events

CREATE TABLE basic(
    name varchar
)

CREATE TABLE advanced(
    name varchar
)

CREATE TABLE events(
 title varchar,
 description varchar,
 start_time timestamp,
 end_time timestamp
)


INSERT INTO events(title, description, start_time, end_time) values ('Blow Bubbles', 'awesomeness', '2017-07-12T20:50:03-06:00', '2017-07-12T20:58:02-08:00'),
('Build Fort', 'awesomeness', '2017-07-17T20:50:03-07:00', '2017-07-17T20:58:02-09:00'),
('movie marathon', 'awesomeness', '2017-07-18T20:50:03-06:00', '2017-07-18T20:58:02-08:00'),
('Eat Pie', 'awesomeness', '2017-07-24T20:50:03-06:00', '2017-07-24T20:58:02-08:00')


CREATE TABLE todo(
    mentorID integer, 
    todo varchar,
    completed varchar,
    dateCompleted timestamp
)

INSERT INTO todo(mentorID, todo) VALUES(1, 'Finish Website')

CREATE TABLE goals(
    mentorID integer, 
    goal varchar,
    completed varchar,
    dateCompleted timestamp
)

INSERT INTO goals(mentorID, goal) VALUES(1, 'Finish Website')