CREATE TABLE events(
 title varchar,
 description varchar,
 start_time varchar,
 end_time varchar
)

INSERT INTO events(title, description, start_time, end_time) values ('movie marathon', 'awesomeness', '10-11-17', '10-13-17')



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