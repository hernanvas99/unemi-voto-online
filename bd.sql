/*
SQLyog Ultimate v10.42 
MySQL - 5.7.36 : Database - votaciones
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`votaciones` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `votaciones`;

/*Table structure for table `aperturas` */

DROP TABLE IF EXISTS `aperturas`;

CREATE TABLE `aperturas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `periodo_id` int(10) unsigned NOT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  `lugar_votacion` varchar(300) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `hora_inicio` time DEFAULT NULL,
  `hora_fin` time DEFAULT NULL,
  `observacion` varchar(300) DEFAULT NULL,
  `estado` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `apertura_periodos` (`periodo_id`),
  CONSTRAINT `apertura_periodos` FOREIGN KEY (`periodo_id`) REFERENCES `periodos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

/*Data for the table `aperturas` */

insert  into `aperturas`(`id`,`periodo_id`,`descripcion`,`lugar_votacion`,`fecha_inicio`,`hora_inicio`,`hora_fin`,`observacion`,`estado`) values (4,4,'ELECCIONES 2024','EN EL CAMPUS BABAHOYO','2023-03-19','08:30:00','21:30:00','sin observaciones\n',1),(5,3,'ELECCIONES 2023','BABAHOYO PARQUE CENTRAL','2023-03-06','08:30:00','16:30:00','test',0);

/*Table structure for table `candidatos` */

DROP TABLE IF EXISTS `candidatos`;

CREATE TABLE `candidatos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `estudiante_id` int(10) unsigned NOT NULL,
  `dignidad_id` int(10) unsigned NOT NULL,
  `presidente_id` int(10) unsigned NOT NULL,
  `fecha_registro` date DEFAULT NULL,
  `estado` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `candidato_estudiante` (`estudiante_id`),
  KEY `candidato_dignidad` (`dignidad_id`),
  KEY `candidato_presidente` (`presidente_id`),
  CONSTRAINT `candidato_dignidad` FOREIGN KEY (`dignidad_id`) REFERENCES `dignidades` (`id`),
  CONSTRAINT `candidato_estudiante` FOREIGN KEY (`estudiante_id`) REFERENCES `estudiantes` (`id`),
  CONSTRAINT `candidato_presidente` FOREIGN KEY (`presidente_id`) REFERENCES `presidentes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4;

/*Data for the table `candidatos` */

insert  into `candidatos`(`id`,`estudiante_id`,`dignidad_id`,`presidente_id`,`fecha_registro`,`estado`) values (55,35,2,34,'2023-03-11',1),(56,37,7,34,'2023-03-11',1),(72,21,2,38,'2023-03-14',1),(73,26,7,38,'2023-03-14',1),(74,12,2,36,'2023-03-14',1),(75,30,3,35,'2023-03-14',1),(76,27,7,35,'2023-03-14',1),(77,23,2,37,'2023-03-14',1),(78,34,5,37,'2023-03-14',1),(79,19,7,39,'2023-03-14',1),(80,18,3,39,'2023-03-14',1),(81,28,2,39,'2023-03-14',1);

/*Table structure for table `dignidades` */

DROP TABLE IF EXISTS `dignidades`;

CREATE TABLE `dignidades` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

/*Data for the table `dignidades` */

insert  into `dignidades`(`id`,`nombre`) values (2,'TESORERO'),(3,'VICEPRESIDENTE'),(5,'VOCAL 1'),(7,'SECRETARIO'),(8,'VOCAL 2');

/*Table structure for table `especialidades` */

DROP TABLE IF EXISTS `especialidades`;

CREATE TABLE `especialidades` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `estado` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

/*Data for the table `especialidades` */

insert  into `especialidades`(`id`,`nombre`,`estado`) values (2,'CIENCIAS INFORMATICAS',1),(6,'CONTABILIDAD',1),(7,'CIENCIAS',1),(8,'SALUD',1);

/*Table structure for table `estudiantes` */

DROP TABLE IF EXISTS `estudiantes`;

CREATE TABLE `estudiantes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `especialidad_id` int(10) unsigned NOT NULL,
  `nombres` varchar(100) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `cedula` varchar(10) DEFAULT NULL,
  `celular` varchar(10) DEFAULT NULL,
  `curso` varchar(100) DEFAULT NULL,
  `paralelo` char(1) DEFAULT NULL,
  `seccion` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT '$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',
  `estado` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `estudiante_especialidad` (`especialidad_id`),
  CONSTRAINT `estudiante_especialidad` FOREIGN KEY (`especialidad_id`) REFERENCES `especialidades` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;

/*Data for the table `estudiantes` */

insert  into `estudiantes`(`id`,`especialidad_id`,`nombres`,`apellidos`,`cedula`,`celular`,`curso`,`paralelo`,`seccion`,`email`,`password`,`estado`) values (3,2,'ALEXANDER ANDRES','MOSQUERA GAROFALO','1204995734','0912857469','3','D','NOCTURNO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(4,6,'HELEN ALEJANDRA','ARREGA COELLO','1207486638','0912746637','5','D','MATUTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(5,8,'CARLOS JAVIER','RAMOS SALAZAR','1209466378','0912748837','3','A','VESPERTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',0),(6,6,'BYRON FRANCISCO','AYALA MURILLO','1204773864','0918266478','4','D','VESPERTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(7,2,'KEVIN JOSUE','MONTOYA CABALLERO','0936477182','0946473891','5','G','MATUTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(8,7,'FIDEL JOEL','AREVALO ZUNIGA','0938477598','1204995867','5','D','MATUTINO',NULL,'$2a$10$D457GL575miGp7Op6gUkg.99P32aNjobKTmGDcUfM6FuQykybbXfS',1),(9,8,'BRIAN FEDERICO','BAJANA CARBO','0947388172','0293775647','6','D','MATUTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(10,2,'KATHERINE JULISA','BAJANA DIAZ','1204667389','0912548391','2','B','MATUTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(11,7,'JOSE ARMANDO','BALSECA ARMERO','0946663728','0924411293','3','C','VESPERTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(12,7,'ROBERTO ALEXANDER','BANOS ROBALLO','0994666357','0935661823','4','B','NOCTURNO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(13,7,'NATHALY MAYUSBEL','BENAVIDEZ BARBERA','0012874637','0925463748','4','D','MATUTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(14,8,'EDINSON MAXIMILIANO','BRAVO ALAVA','0256478391','0912648836','6','C','VESPERTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(15,7,'ISAAC ADONIS','BURGOS VERA','0354672891','0912647387','5','B','MATUTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(16,8,'SHIRLEY ALEJANDRA','CACERES SORIANO','0949958712','0129466378','2','C','VESPERTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(17,8,'SANDY JOSELYN','CALAURANO MUNOZ','0946577382','0912746637','3','D','MATUTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(18,8,'ERICK JOEL','CARRERA HERRERA','1204657894','0124657839','2','B','MATUTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(19,7,'GIOCONDA ELIZABETH','CASTILLO BERNITA','1204558390','0126574893','4','C','VESPERTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(20,6,'PAULO SISNEY','CEREZO TOMALA','0346277189','1204637856','3','C','VESPERTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(21,6,'KAROLEY DANE','CHOEZ BAQUERIZO','0947588123','0935466371','3','C','VESPERTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(22,6,'MARIA JESUS','CORDERO MORA','0495883678','0935478123','5','B','NOCTURNO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(23,6,'NATHALY DANIELA','DIAZ CEPEDA','0495738837','0936588123','2','F','NOCTURNO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(24,6,'KATTY ROCIO','EGUEZ MELENDEZ','0112356748','0195774865','7','E','VESPERTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(25,6,'WILMER RUBEN','ESPINOZA CASTRO','0956748351','0129467893','4','C','MATUTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(26,7,'NAHIN ISMAEL','FIGUEROA BURGOS','1294658839','0987654321','3','C','VESPERTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(27,2,'ERICKA MICHELL','FLORES CRIOLLO','0927584965','0946378294','4','C','VESPERTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(28,7,'MANUEL ANDRES','FRANCO MANZABA','1204657849','0956374891','8','G','MATUTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(29,2,'NICOLE CONCEPCION','GAIBOR LEON','1204657894','0956472819','5','E','VESPERTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(30,6,'BIANCA POLETTE','GONZALEZ SALAZAR','1205647894','0935461283','6','D','NOCTURNO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(31,6,'HELEN MARY','GUERRA RODRIGUEZ','1204657389','0846377284','4','D','VESPERTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(32,7,'LISETH MARIA','IBARRA BAJANA','1204657893','0946738234','6','E','MATUTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(33,6,'JORDY ALEXANDER','JERVIS HERRERA','1204657849','0946378291','3','C','MATUTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(34,7,'ANGEL JOSE','LANDAZURI VEGA','1204657849','0936475893','7','C','MATUTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(35,6,'ESTEFANIA PAOLA','ORTEGA DECIMAVILLA','1204957738','0946378495','6','C','MATUTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(36,8,'NEISER CRISTOBAL','OYATO MANOBANDA','1205948574','0946578342','7','D','NOCTURNO','test@gmail.com','$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(37,8,'JURLIAN ANIBAL','RIVERA CERCADO','1205748956','0945367823','8','E','MATUTINO','test@gmail.com','$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(38,7,'EMELY MARIETH','RODRIGUEZ ARANA','1204657849','0946378192','5','C','MATUTINO',NULL,'$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(40,7,'JUAN FERNANDO','SAA AYALA','1201111111','0946578493','4','D','MATUTINO','juan96saa@gmail.com','$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1);

/*Table structure for table `listas` */

DROP TABLE IF EXISTS `listas`;

CREATE TABLE `listas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `periodo_id` int(11) unsigned NOT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  `siglas` varchar(15) DEFAULT NULL,
  `representante_legal` varchar(150) DEFAULT NULL,
  `estado` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `lista_periodo` (`periodo_id`),
  CONSTRAINT `lista_periodo` FOREIGN KEY (`periodo_id`) REFERENCES `periodos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;

/*Data for the table `listas` */

insert  into `listas`(`id`,`periodo_id`,`descripcion`,`siglas`,`representante_legal`,`estado`) values (1,3,'LISTA A','ACA','JOSEFINA',1),(4,3,'LISTA B','LB','CRISTIANO ALVAREZ',1),(5,3,'LISTA C','LC','JESUS CAICEDO',1),(6,3,'LISTA D','LD','PEDRO FERNANDEZ',1),(7,4,'LISTA E','LE','JUAN PEREZ',1),(8,4,'LISTA F','LF','ANGUS YOUNG',1),(9,4,'LISTA G','POR EL CAMBIO','KARLA SANCHEZ',1),(10,4,'LISTA H','LH','KETTY TROYA',1),(11,4,'LISTA M','LM','JAIME ROMERO',1),(12,3,'LISTA N','LN','ROBERT DUNW',1),(13,3,'LISTA P','LP','SIN REPRESENTANTE',1),(14,4,'LISTA N','LN','TEST',1);

/*Table structure for table `periodos` */

DROP TABLE IF EXISTS `periodos`;

CREATE TABLE `periodos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `estado` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `periodos` */

insert  into `periodos`(`id`,`nombre`,`estado`) values (3,'PERIODO 2022 - 2023',1),(4,'PERIODO 2023 -2024',1),(5,'PERIODO 2024 - 2025',1);

/*Table structure for table `permisos` */

DROP TABLE IF EXISTS `permisos`;

CREATE TABLE `permisos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `permisos` */

insert  into `permisos`(`id`,`nombre`,`slug`) values (1,'Ver Dashboard','dashboard.index'),(2,'Ver Usuarios','usuario.index'),(3,'Agregar Usuario','usuario.create'),(4,'Editar Usuario','usuario.edit'),(5,'Inactivar Usuario','usuario.inactivar'),(6,'Activar Usuario','usuario.activar'),(7,'Eliminar Usuario','usuario.delete'),(8,'Ver Roles','rol.index'),(9,'Agregar Rol','rol.create'),(10,'Editar Rol','rol.edit'),(11,'Eliminar Rol','rol.delete'),(12,'Ver Dignidades','dignidad.index'),(13,'Agregar Dignidad','dignidad.create'),(14,'Editar Dignidad','dignidad.edit'),(15,'Eliminar Dignidad','dignidad.delete'),(16,'Ver Especialidades','especialidad.index'),(17,'Agregar Especialidad','especialidad.create'),(18,'Editar Especialidad','especialidad.edit'),(19,'Activar Especialidad','especialidad.active'),(20,'Inactivar Especialidad','especialidad.inactive'),(21,'Eliminar Especialidad','especialidad.delete'),(22,'Ver Estudiantes','estudiante.index'),(23,'Agregar Estudiante','estudiante.create'),(24,'Editar Estudiante','estudiante.edit'),(25,'Activar Estudiante','estudiante.active'),(26,'Inactivar Estudiante','estudiante.inactive'),(27,'Eliminar Estudiante','estudiante.delete'),(28,'Ver Periodos','periodo.index'),(29,'Agregar Periodo','periodo.create'),(30,'Editar Periodo','periodo.edit'),(31,'Activar Periodo','periodo.active'),(32,'Inactivar Periodo','periodo.inactive'),(33,'Eliminar Periodo','periodo.delete'),(34,'Ver Aperturas','apertura.index'),(35,'Agregar Apertura','apertura.create'),(36,'Editar Apertura','apertura.edit'),(37,'Activar Apertura','apertura.active'),(38,'Inactivar Apertura','apertura.inactive'),(39,'Eliminar Apertura','apertura.delete'),(40,'Ver Listas','lista.index'),(41,'Agregar Lista','lista.create'),(42,'Editar Lista','lista.edit'),(43,'Activar Lista','lista.active'),(44,'Inactivar Lista','lista.inactive'),(45,'Eliminar Lista','lista.delete'),(46,'Ver Presidentes','presidente.index'),(47,'Agregar Presidente','presidente.create'),(48,'Editar Presidente','presidente.edit'),(49,'Activar Presidente','presidente.active'),(50,'Inactivar Presidente','presidente.inactive'),(51,'Eliminar Presidente','presidente.delete'),(52,'Ver Resultados','resultado.index');

/*Table structure for table `presidentes` */

DROP TABLE IF EXISTS `presidentes`;

CREATE TABLE `presidentes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `apertura_id` int(10) unsigned NOT NULL,
  `estudiante_id` int(10) unsigned NOT NULL,
  `lista_id` int(10) unsigned NOT NULL,
  `participaciones` varchar(35) NOT NULL,
  `ruta_foto` varchar(300) DEFAULT NULL,
  `estado` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `presidente_apertura` (`apertura_id`),
  KEY `presidente_lista` (`lista_id`),
  KEY `apertura_estudiante` (`estudiante_id`),
  CONSTRAINT `apertura_estudiante` FOREIGN KEY (`estudiante_id`) REFERENCES `estudiantes` (`id`),
  CONSTRAINT `presidente_apertura` FOREIGN KEY (`apertura_id`) REFERENCES `aperturas` (`id`),
  CONSTRAINT `presidente_lista` FOREIGN KEY (`lista_id`) REFERENCES `listas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4;

/*Data for the table `presidentes` */

insert  into `presidentes`(`id`,`apertura_id`,`estudiante_id`,`lista_id`,`participaciones`,`ruta_foto`,`estado`) values (34,4,38,7,'Primera Vez','default.jpg',1),(35,4,32,9,'Reelección','924f1c19-7a91-4299-990f-0c0026e9a5cf.jpg',1),(36,4,31,8,'Primera Vez','3bb17a02-acc2-4a52-b6d3-2b8ec209c48c.jpg',1),(37,4,29,10,'Primera Vez','781db78b-25f1-4191-a061-4f50b6ccb518.jpg',1),(38,4,33,11,'Primera Vez','1e8bb0ff-b53a-4ce4-8497-dac14e720077.jpeg',1),(39,4,36,14,'Reelección','9191f534-687c-4a40-bf5f-19ada71100d3.jpg',1);

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `roles` */

insert  into `roles`(`id`,`nombre`) values (1,'ADMINISTRADOR'),(2,'SUPER-ADMINISTRADOR'),(3,'TEST');

/*Table structure for table `roles_permisos` */

DROP TABLE IF EXISTS `roles_permisos`;

CREATE TABLE `roles_permisos` (
  `rol_id` int(10) unsigned NOT NULL,
  `permiso_id` int(10) unsigned NOT NULL,
  KEY `rp_rol` (`rol_id`),
  KEY `rp_permiso` (`permiso_id`),
  CONSTRAINT `rp_permiso` FOREIGN KEY (`permiso_id`) REFERENCES `permisos` (`id`),
  CONSTRAINT `rp_rol` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `roles_permisos` */

insert  into `roles_permisos`(`rol_id`,`permiso_id`) values (1,19),(1,31),(1,6),(1,13),(1,17),(1,23),(1,29),(1,3),(1,14),(1,18),(1,30),(1,15),(1,21),(1,33),(1,7),(1,20),(1,26),(1,32),(1,12),(1,16),(1,22),(1,28),(1,2),(1,34),(1,36),(1,38),(2,37),(2,19),(2,25),(2,43),(2,31),(2,49),(2,6),(2,35),(2,13),(2,17),(2,23),(2,41),(2,29),(2,47),(2,9),(2,3),(2,36),(2,14),(2,18),(2,24),(2,42),(2,30),(2,48),(2,10),(2,4),(2,39),(2,15),(2,21),(2,27),(2,45),(2,33),(2,51),(2,11),(2,7),(2,38),(2,20),(2,26),(2,44),(2,32),(2,50),(2,5),(2,34),(2,12),(2,16),(2,22),(2,40),(2,28),(2,46),(2,8),(2,2),(2,52);

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `rol_id` int(10) unsigned NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `cedula` varchar(10) DEFAULT NULL,
  `celular` varchar(10) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `EMAIL` (`email`),
  KEY `usuario_rol` (`rol_id`),
  CONSTRAINT `usuario_rol` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `usuarios` */

insert  into `usuarios`(`id`,`rol_id`,`nombres`,`apellidos`,`cedula`,`celular`,`email`,`password`,`estado`) values (3,2,'STEEVEN','SOTO SALAZAR','1209488376','0912837765','juan@gmail.com','$2a$10$KVGFFqkjgK/9Chs/zHXixu0iBL3kOV0ftSnQ7zSXBjzhN3QDnz8o6',1),(4,1,'JORGE ','ROMERO CAICEDO','1204657894','0129465783','jorge@gmail.com','$2a$10$RVoiqzF1Ss9c8nIYmagbwO1aJYpryO.Utjcd0LB0ccLWEm02Wh206',1);

/*Table structure for table `votaciones` */

DROP TABLE IF EXISTS `votaciones`;

CREATE TABLE `votaciones` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `presidente_id` int(10) unsigned NOT NULL,
  `votante_id` int(10) unsigned NOT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `estado` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `votaciones_presidente` (`presidente_id`),
  KEY `votaciones_votante` (`votante_id`),
  CONSTRAINT `votaciones_presidente` FOREIGN KEY (`presidente_id`) REFERENCES `presidentes` (`id`),
  CONSTRAINT `votaciones_votante` FOREIGN KEY (`votante_id`) REFERENCES `estudiantes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4;

/*Data for the table `votaciones` */

insert  into `votaciones`(`id`,`presidente_id`,`votante_id`,`fecha`,`hora`,`estado`) values (53,35,4,'2023-03-14','22:08:50',1),(54,35,7,'2023-03-14','22:09:36',1),(55,34,9,'2023-03-14','22:10:08',1),(56,36,10,'2023-03-14','22:10:27',1),(57,38,11,'2023-03-14','22:10:44',1),(58,39,12,'2023-03-14','22:11:13',1),(59,37,13,'2023-03-14','22:11:43',1),(67,35,30,'2023-03-17','17:15:05',1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
