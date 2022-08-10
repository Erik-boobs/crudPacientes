use master 
go

create database prueba431

use prueba431
go

create table paciente 
{
    _id int (11),
    nombre varchar (20),
    apellido varchar(30),
    cama int (11),
    fecha_ingreso date,
    diagnostico varchar (200)

    constraint pk_id primary key (_id)
}

insert into paciente (_id,nombre,apellido,cama,fecha_ingreso,diagnostico) values ('Daniel', 'Mendez',1,'2022-07-01','Tiene gripe')