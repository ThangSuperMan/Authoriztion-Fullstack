/* show databases; */
use travel_app_v1;

create table if not exists users (
  id          varchar(50) not null default uuid(),
  username    varchar(50) not null,
  email       varchar(50) default null,
  password    varchar(100) not null,
  created_at  datetime DEFAULT current_timestamp(),
  updated_at  datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  admin       bool default false
);
