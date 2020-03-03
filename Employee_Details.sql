-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 03, 2020 at 12:47 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Tolearn`
--

-- --------------------------------------------------------

--
-- Table structure for table `Employee Details`
--

CREATE TABLE `Employee Details` (
  `id` int(11) NOT NULL,
  `Employee name` varchar(50) NOT NULL,
  `designation` varchar(50) NOT NULL,
  `joining` date NOT NULL,
  `contact` int(20) NOT NULL,
  `status` int(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Employee Details`
--

INSERT INTO `Employee Details` (`id`, `Employee name`, `designation`, `joining`, `contact`, `status`) VALUES
(16, 'Sowmiya M', 'Developer', '2020-03-02', 12345678, 1),
(17, 'Poongundran SR', 'Accounts&Finance', '2020-03-02', 12345678, 1),
(18, 'reshma', 'Developer', '2020-03-02', 1122334455, 0),
(19, 'roshni', 'Developer', '2020-03-02', 1122334455, 0),
(20, 'sss', 'ss', '2020-03-11', 1122334455, 1),
(21, 'new', 'testing', '2020-03-19', 99000998, 1),
(22, 'sowmipoo', 'kk', '2020-03-13', 1122334455, 1),
(23, 'newemp', 'cleaner', '2020-03-18', 1122334455, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Employee Details`
--
ALTER TABLE `Employee Details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Employee Details`
--
ALTER TABLE `Employee Details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
