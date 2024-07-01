-- DROP SCHEMA public;

CREATE SCHEMA public AUTHORIZATION pg_database_owner;
-- DROP SCHEMA public;

-- Si deseas eliminar el esquema public, ten cuidado ya que eliminará todas las tablas y objetos asociados.

-- Crear el esquema public
CREATE SCHEMA IF NOT EXISTS public AUTHORIZATION pg_database_owner;

-- public.calendar definition
CREATE TABLE calendar (
    id_cal SERIAL PRIMARY KEY,
    end_cal timestamp NOT NULL,
    start_cal timestamp NOT NULL,
    title text NOT NULL
);

-- public.drop_data definition
CREATE TABLE drop_data (
    id_drop_data SERIAL PRIMARY KEY,
    title text NOT NULL,
    exist bool NOT NULL,
    font_size_title int4 NOT NULL
);

-- public.info_data definition
CREATE TABLE info_data (
    id_info_data SERIAL PRIMARY KEY,
    exist bool NOT NULL,
    info text NOT NULL,
    font_size int4 NOT NULL
);

-- public.link_data definition
CREATE TABLE link_data (
    id_link_data SERIAL PRIMARY KEY,
    "text" text NOT NULL,
    url text NOT NULL
);

-- public.multimedia_data definition
CREATE TABLE multimedia_data (
    id_multimedia SERIAL PRIMARY KEY,
    url_content text NOT NULL,
    is_img bool NOT NULL,
    exist bool NOT NULL,
    a_link text NOT NULL
);

-- public.sub_drop definition
CREATE TABLE sub_drop (
    id_sub_drop SERIAL PRIMARY KEY,
    is_img bool NOT NULL,
    font_size_data int4 NOT NULL,
    url_image text NOT NULL,
    info text NOT NULL,
    a_link text NOT NULL
);

-- public.title_data definition
CREATE TABLE title_data (
    id_title SERIAL PRIMARY KEY,
    exist bool NOT NULL,
    info_title text NOT NULL,
    f_size int4 NOT NULL
);

-- public.usuario definition
CREATE TABLE usuario (
    id_user SERIAL PRIMARY KEY,
    mail varchar(255) NOT NULL,
    pass varchar(100) NOT NULL
);

-- public.data_template definition
CREATE TABLE data_template (
    id_data_template SERIAL PRIMARY KEY,
    "type" int4 NOT NULL,
    title text NULL,
    image text NULL,
    title_1_id int4 NULL,
    title_2_id int4 NULL,
    information_1_id int4 NULL,
    information_2_id int4 NULL,
    banner_1_id int4 NULL,
    banner_2_id int4 NULL,
    multimedia_1_id int4 NULL,
    multimedia_2_id int4 NULL
);

-- public.drop_sub definition
CREATE TABLE drop_sub (
    id_drop_data int4 NULL,
    id_sub_drop int4 NULL
);

-- public.drop_template definition
CREATE TABLE drop_template (
    id_drop_template SERIAL PRIMARY KEY,
    "type" int4 NOT NULL,
    title_1_id int4 NULL,
    title_2_id int4 NULL,
    information_1_id int4 NULL,
    information_2_id int4 NULL,
    banner_1_id int4 NULL,
    banner_2_id int4 NULL,
    multimedia_1_id int4 NULL
);

-- public.info_link definition
CREATE TABLE info_link (
    info_data_id int4 NULL,
    id_link_data int4 NULL
);

-- public.template_drop_data_1 definition
CREATE TABLE template_drop_data_1 (
    id_drop_template int4 NULL,
    id_drop_data int4 NULL
);

-- public.template_drop_data_2 definition
CREATE TABLE template_drop_data_2 (
    id_drop_template int4 NULL,
    id_drop_data int4 NULL
);