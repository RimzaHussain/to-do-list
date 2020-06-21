-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Jun 21, 2020 at 11:39 AM
-- Server version: 8.0.18
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todolist`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbllist`
--

DROP TABLE IF EXISTS `tbllist`;
CREATE TABLE IF NOT EXISTS `tbllist` (
  `inId` int(11) NOT NULL AUTO_INCREMENT,
  `inUserId` int(11) NOT NULL DEFAULT '0',
  `stTitle` varchar(124) NOT NULL DEFAULT 'na',
  `stDesc` varchar(1024) NOT NULL DEFAULT 'na',
  `daCreated` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`inId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblusers`
--

DROP TABLE IF EXISTS `tblusers`;
CREATE TABLE IF NOT EXISTS `tblusers` (
  `inId` int(11) NOT NULL AUTO_INCREMENT,
  `stUserName` varchar(124) NOT NULL DEFAULT 'na',
  `stEmail` varchar(45) NOT NULL DEFAULT 'na',
  `stPassword` varchar(256) NOT NULL DEFAULT 'na',
  `daUserCreated` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`inId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
