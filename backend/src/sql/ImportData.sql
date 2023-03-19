use travel_app_v1;

/* SET DEFAULT VIETNAME TIMEZONE BEFORE INSERT DATA */
set global time_zone = 'Asia/Saigon';

insert into users (username, email, password, admin)
values ('thangphan', 'thangjenny2002@gmail.com', '1', false);
insert into users (username, email, password, admin)
values ('bichphan', 'bich@gmail.com', '1', true);
