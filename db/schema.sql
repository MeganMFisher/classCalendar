CREATE TABLE events(
 title varchar,
 description varchar,
 start_time date,
 end_time date
)


INSERT INTO events(title, description, start_time, end_time) values ('movie marathon', 'awesomeness', '2017-07-18T20:50:03-06:00', '2017-07-18T20:58:02-06:00')


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