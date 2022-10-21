-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 21, 2022 at 11:05 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cielocrm`
--

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(9, '2014_10_12_100000_create_password_resets_table', 1),
(10, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(11, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(12, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(13, '2016_06_01_000004_create_oauth_clients_table', 1),
(14, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(16, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(17, '2021_12_04_014853_create_notifications_table', 2),
(37, '2022_06_14_023329_update_user_table', 21),
(39, '2022_09_22_065636_update_users_table', 22);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` bigint(20) UNSIGNED NOT NULL,
  `data` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('0ccf79d37297a7ccb5b9f35fd0a0d98a1b406b5e2a5bb76573911bfa7715681d76f63211311a7fdb', 52, '9571556e-51fa-41f1-a907-f0c4d8654ea3', 'Obsession Password Grant', '[]', 0, '2022-10-22 03:58:55', '2022-10-22 03:58:55', '2023-04-21 20:58:55');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
('9571556e-51fa-41f1-a907-f0c4d8654ea3', NULL, 'Obsession Digital Radio Api Personal Access Client', 'MmkS21q5fisiqbLV3gtIUJoEvxrI4kNkO6lUrKTb', NULL, 'http://localhost', 1, 0, 0, '2022-01-25 19:46:11', '2022-01-25 19:46:11'),
('9571556e-5c62-49b3-b079-fe6292e97ee5', NULL, 'Obsession Digital Radio Api Password Grant Client', 'KI6rGT2tq4XeNH0knSHdaBbGZO9IFiYZh3BoGehQ', 'users', 'http://localhost', 0, 1, 0, '2022-01-25 19:46:11', '2022-01-25 19:46:11');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(2, '9571556e-51fa-41f1-a907-f0c4d8654ea3', '2022-01-25 19:46:11', '2022-01-25 19:46:11');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `title`, `updated_at`, `created_at`) VALUES
(1, 'users-list', 'Users Listing', '2022-01-25 19:17:41', '2021-10-12 12:36:14'),
(2, 'users-create', 'Users Create', '2022-01-25 19:17:47', '2021-10-12 12:36:14'),
(3, 'users-edit', 'Users Edit', '2022-01-25 19:17:53', '2021-10-12 12:36:38'),
(4, 'users-delete', 'Users Delete', '2022-01-25 19:17:58', '2021-10-12 12:36:38'),
(5, 'users-view', 'Users View', '2022-01-25 19:18:03', '2021-10-12 12:36:59'),
(56, 'role-list', 'Role List', '2022-01-25 21:33:06', '2022-01-25 21:33:06'),
(57, 'role-create', 'Role Create', '2022-01-25 21:33:12', '2022-01-25 21:33:09'),
(58, 'role-edit', 'Role Edit', '2022-01-25 21:33:18', '2022-01-25 21:33:15'),
(59, 'role-delete', 'Role Delete', '2022-01-25 21:33:26', '2022-01-25 21:33:22'),
(60, 'role-view', 'Role View', '2022-01-25 21:33:33', '2022-01-25 21:33:30'),
(61, 'permission-list', 'Permission List', '2022-01-25 23:02:08', '2022-01-25 23:02:08'),
(62, 'permission-create', 'Permission Create', '2022-01-25 23:02:20', '2022-01-25 23:02:12'),
(63, 'permission-edit', 'Permission Edit', '2022-01-25 23:02:27', '2022-01-25 23:02:23'),
(64, 'permission-delete', 'Permission Delete', '2022-01-25 23:02:34', '2022-01-25 23:02:29'),
(65, 'permission-view', 'Permission View', '2022-01-25 23:30:13', '2022-01-25 23:02:36'),
(118, 'brand-list', 'Brand List', '2022-09-21 21:35:47', '2022-09-21 21:35:47'),
(119, 'brand-create', 'Brand Create', '2022-09-21 21:35:56', '2022-09-21 21:35:56'),
(120, 'brand-edit', 'Brand Edit', '2022-09-21 21:36:00', '2022-09-21 21:36:00'),
(121, 'brand-delete', 'Brand Delete', '2022-09-21 21:36:06', '2022-09-21 21:36:06'),
(122, 'brand-view', 'Brand View', '2022-09-21 21:36:13', '2022-09-21 21:36:13'),
(123, 'itemtype-listing', 'Item Type Listing', '2022-09-23 00:41:35', '2022-09-23 00:41:35'),
(124, 'itemtype-view', 'Item Type View', '2022-09-23 00:41:35', '2022-09-23 00:41:35'),
(125, 'itemtype-create', 'Item Type Create', '2022-09-23 00:41:35', '2022-09-23 00:41:35'),
(126, 'itemtype-edit', 'Item Type Edit', '2022-09-23 00:41:35', '2022-09-23 00:41:35'),
(127, 'itemtype-delete', 'Item Type Delete', '2022-09-23 00:41:35', '2022-09-23 00:41:35'),
(128, 'commonissues-listing', 'Common Issues Listing', '2022-09-23 00:41:35', '2022-09-23 00:41:35'),
(129, 'commonissues-view', 'Common Issues View', '2022-09-23 00:41:35', '2022-09-23 00:41:35'),
(130, 'commonissues-create', 'Common Issues Create', '2022-09-23 00:41:36', '2022-09-23 00:41:36'),
(131, 'commonissues-edit', 'Common Issues Edit', '2022-09-23 00:41:36', '2022-09-23 00:41:36'),
(132, 'commonissues-delete', 'Common Issues Delete', '2022-09-23 00:41:36', '2022-09-23 00:41:36'),
(133, 'products-listing', 'Products Listing', '2022-09-23 02:30:10', '2022-09-23 02:30:10'),
(134, 'products-view', 'Products View', '2022-09-23 02:30:10', '2022-09-23 02:30:10'),
(135, 'products-create', 'Products Create', '2022-09-23 02:30:10', '2022-09-23 02:30:10'),
(136, 'products-edit', 'Products Edit', '2022-09-23 02:30:10', '2022-09-23 02:30:10'),
(137, 'products-delete', 'Products Delete', '2022-09-23 02:30:10', '2022-09-23 02:30:10'),
(138, 'product-upload-bulk', 'Product Upload Bulk', '2022-09-24 02:49:01', '2022-09-24 02:49:01'),
(139, 'product-export-excel', 'Can Product Export Excel', '2022-09-24 02:49:01', '2022-09-24 02:49:01'),
(140, 'brands-export', 'Brands Export', '2022-09-24 03:20:19', '2022-09-24 03:20:19'),
(141, 'itemtypes-export', 'Item Types Export', '2022-09-24 03:20:19', '2022-09-24 03:20:19'),
(142, 'users-export', 'Users Export', '2022-09-24 03:20:19', '2022-09-24 03:20:19'),
(143, 'tickets-listing', 'Tickets Listing', '2022-09-27 02:12:27', '2022-09-27 02:12:27'),
(144, 'tickets-view', 'Tickets View', '2022-09-27 02:12:27', '2022-09-27 02:12:27'),
(145, 'tickets-create', 'Tickets Create', '2022-09-27 02:12:27', '2022-09-27 02:12:27'),
(146, 'tickets-edit', 'Tickets Edit', '2022-09-27 02:12:27', '2022-09-27 02:12:27'),
(147, 'tickets-delete', 'Tickets Delete', '2022-09-27 02:12:27', '2022-09-27 02:12:27'),
(148, 'template-listing', 'Template Listing', '2022-10-12 02:52:27', '2022-10-12 02:52:27'),
(149, 'template-view', 'Template View', '2022-10-12 02:52:27', '2022-10-12 02:52:27'),
(150, 'template-create', 'Template Create', '2022-10-12 02:52:27', '2022-10-12 02:52:27'),
(151, 'template-edit', 'Template Edit', '2022-10-12 02:52:27', '2022-10-12 02:52:27'),
(152, 'template-delete', 'Template Delete', '2022-10-12 02:52:27', '2022-10-12 02:52:27'),
(153, 'asc-listing', 'ASC Listing', '2022-10-13 03:31:46', '2022-10-13 03:31:46'),
(154, 'asc-view', 'ASC View', '2022-10-13 03:31:46', '2022-10-13 03:31:46'),
(155, 'asc-create', 'ASC Create', '2022-10-12 19:32:43', '2022-10-13 03:31:46'),
(156, 'asc-edit', 'ASC Edit', '2022-10-13 03:31:46', '2022-10-13 03:31:46'),
(157, 'asc-delete', 'ASC Delete', '2022-10-13 03:31:46', '2022-10-13 03:31:46');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `title`, `created_at`, `updated_at`) VALUES
(1, 'superadmin', 'Super Admin', '2021-10-12 12:35:14', '2021-10-12 12:35:14'),
(2, 'Customer', 'Customer', '2021-10-12 12:35:14', '2022-01-25 19:16:09'),
(13, 'agent', 'Agent', '2022-09-28 16:53:12', '2022-09-28 16:53:12'),
(14, 'cf-warranty-claim', 'CF - Warranty Claim', '2022-09-29 00:59:28', '2022-09-28 17:01:07'),
(17, 'warehouse', 'Warehouse', '2022-10-03 17:02:15', '2022-10-03 17:02:15'),
(18, 'replacement', 'Replacement', '2022-10-05 00:43:35', '2022-10-05 00:43:35'),
(19, 'refund', 'Refund', '2022-10-05 00:43:35', '2022-10-05 00:43:35'),
(20, 'asc', 'ASC', '2022-10-05 00:43:35', '2022-10-05 00:43:35'),
(23, 'resource', 'Resource', '2022-10-05 00:43:35', '2022-10-04 16:45:45'),
(25, 'tech-support', 'Tech Support', '2022-10-06 04:45:59', '2022-10-06 04:45:59'),
(26, 'parts', 'Parts', '2022-10-18 07:52:12', '2022-10-17 23:52:26');

-- --------------------------------------------------------

--
-- Table structure for table `roles_permissions`
--

CREATE TABLE `roles_permissions` (
  `id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles_permissions`
--

INSERT INTO `roles_permissions` (`id`, `role_id`, `permission_id`, `created_at`, `updated_at`) VALUES
(1139, 1, 1, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1140, 1, 2, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1141, 1, 3, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1142, 1, 4, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1143, 1, 5, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1144, 1, 56, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1145, 1, 57, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1146, 1, 58, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1147, 1, 59, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1148, 1, 60, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1149, 1, 61, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1150, 1, 62, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1151, 1, 63, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1152, 1, 64, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1153, 1, 65, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1154, 1, 118, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1155, 1, 119, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1156, 1, 120, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1157, 1, 121, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1158, 1, 122, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1159, 1, 132, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1160, 1, 131, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1161, 1, 130, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1162, 1, 129, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1163, 1, 127, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1164, 1, 126, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1165, 1, 125, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1166, 1, 124, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1167, 1, 123, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1168, 1, 128, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1169, 1, 134, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1170, 1, 133, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1171, 1, 135, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1172, 1, 136, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1173, 1, 137, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1174, 1, 138, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1175, 1, 141, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1176, 1, 140, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1177, 1, 139, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1178, 1, 142, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1179, 1, 143, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1180, 1, 144, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1181, 1, 145, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1182, 1, 146, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1183, 1, 147, '2022-09-27 02:12:50', '2022-09-27 02:12:50'),
(1184, 14, 143, '2022-09-28 18:53:41', '2022-09-28 18:53:41'),
(1185, 14, 144, '2022-09-28 18:53:48', '2022-09-28 18:53:48'),
(1186, 2, 143, '2022-09-30 18:44:40', '2022-09-30 18:44:40'),
(1187, 2, 144, '2022-09-30 18:44:42', '2022-09-30 18:44:42'),
(1188, 14, 1, '2022-10-03 21:09:46', '2022-10-03 21:09:46'),
(1189, 17, 143, '2022-10-03 21:32:22', '2022-10-03 21:32:22'),
(1190, 17, 144, '2022-10-03 21:32:26', '2022-10-03 21:32:26'),
(1191, 25, 143, '2022-10-05 21:19:37', '2022-10-05 21:19:37'),
(1192, 25, 144, '2022-10-05 21:19:41', '2022-10-05 21:19:41'),
(1194, 1, 148, '2022-10-11 19:46:33', '2022-10-11 19:46:33'),
(1195, 1, 149, '2022-10-11 19:46:36', '2022-10-11 19:46:36'),
(1196, 1, 150, '2022-10-11 19:46:41', '2022-10-11 19:46:41'),
(1197, 1, 151, '2022-10-11 19:46:43', '2022-10-11 19:46:43'),
(1198, 1, 152, '2022-10-11 19:46:47', '2022-10-11 19:46:47'),
(1199, 18, 144, '2022-10-11 22:08:09', '2022-10-11 22:08:09'),
(1200, 18, 143, '2022-10-11 22:08:13', '2022-10-11 22:08:13'),
(1201, 19, 144, '2022-10-11 23:49:51', '2022-10-11 23:49:51'),
(1202, 19, 143, '2022-10-11 23:49:54', '2022-10-11 23:49:54'),
(1205, 1, 153, '2022-10-12 19:32:50', '2022-10-12 19:32:50'),
(1206, 1, 154, '2022-10-12 19:32:53', '2022-10-12 19:32:53'),
(1207, 1, 155, '2022-10-12 19:32:55', '2022-10-12 19:32:55'),
(1208, 1, 156, '2022-10-12 19:32:58', '2022-10-12 19:32:58'),
(1209, 1, 157, '2022-10-12 19:33:00', '2022-10-12 19:33:00'),
(1210, 14, 153, '2022-10-12 20:20:29', '2022-10-12 20:20:29'),
(1211, 20, 143, '2022-10-12 20:46:39', '2022-10-12 20:46:39'),
(1212, 20, 144, '2022-10-12 20:46:41', '2022-10-12 20:46:41'),
(1213, 20, 153, '2022-10-13 17:08:08', '2022-10-13 17:08:08'),
(1214, 26, 143, '2022-10-18 00:06:31', '2022-10-18 00:06:31'),
(1215, 26, 144, '2022-10-18 00:06:34', '2022-10-18 00:06:34');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `role_id` int(11) NOT NULL DEFAULT 0,
  `remember_token` varchar(255) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `address` varchar(555) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `zip_code` varchar(10) DEFAULT NULL,
  `latitude` varchar(100) NOT NULL,
  `longitude` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`, `role_id`, `remember_token`, `email_verified_at`, `address`, `city`, `zip_code`, `latitude`, `longitude`) VALUES
(52, 'Admin', 'admin@project.com', '$2y$10$ciRzvjIOmC3bf9ZcmIw1JuVb286SxZbAJDvqe8jnsgpEWDLanacSa', '2022-01-25 19:15:07', '2022-08-19 19:04:13', 1, NULL, '2022-01-25 19:15:06', NULL, NULL, NULL, '', NULL),
(53, 'S Admin', 'sadmin@project.com', '$2y$10$ciRzvjIOmC3bf9ZcmIw1JuVb286SxZbAJDvqe8jnsgpEWDLanacSa', '2022-01-25 22:48:58', '2022-08-19 19:04:16', 1, NULL, NULL, NULL, NULL, NULL, '', NULL),
(56, 'warranty', 'warranty@project.com', '$2y$10$ciRzvjIOmC3bf9ZcmIw1JuVb286SxZbAJDvqe8jnsgpEWDLanacSa', '2022-09-29 01:03:38', '2022-09-28 18:49:41', 14, NULL, NULL, NULL, NULL, NULL, '', NULL),
(57, 'test test', 'yruxwork@gmail.com', '$2y$10$ndAZvA3Lu1LISyZ8wt6CP.rvHIPizypdWGFoez.LRgatDL3/.yKP6', '2022-09-29 02:34:37', '2022-09-29 02:34:37', 2, NULL, NULL, NULL, NULL, NULL, '', NULL),
(58, 'test test', 'yruxwor1k@gmail.com', '$2y$10$67lX5GVtMejtBK/1FA891uE4x4HV1cqpVNjB2UpYyQdAmS.tbrnu.', '2022-09-29 02:42:34', '2022-09-29 02:42:34', 2, NULL, NULL, NULL, NULL, NULL, '', NULL),
(59, 'test test', 'webnhub@gmail.com', '$2y$10$xlClt7gac1RunMLe.qXzsOMXY1CSG87XkYXDNgWAjiUHxmp2Ti30.', '2022-09-29 02:42:48', '2022-09-29 02:42:48', 2, NULL, NULL, NULL, NULL, NULL, '', NULL),
(60, 'test test', 'webnhub1@gmail.com', '$2y$10$zOA.mnYu2oDzNjAnAAmHBu2t/LZk2Hx6zlJmt4nSwe1N6Hw1MlEAi', '2022-09-29 02:46:35', '2022-09-29 02:46:35', 2, NULL, NULL, NULL, NULL, NULL, '', NULL),
(62, 'US Warehouse', 'uswarehouse@gmail.com', '$2y$10$YCP3UFRUbE14jqkhoeOVNOQpXnad/wGwxVRgatfrVCAYVIBP.oxW6', '2022-10-03 17:04:23', '2022-10-03 17:04:23', 17, NULL, NULL, NULL, NULL, NULL, '', NULL),
(63, 'CA Warehouse', 'cawarehouse@gmail.com', '$2y$10$sRgN0AlG/zdRygh1hCfB6e75kdUN0KnSz6alf450MhhDx3VjbQN6O', '2022-10-03 17:04:43', '2022-10-03 17:04:43', 17, NULL, NULL, NULL, NULL, NULL, '', NULL),
(64, 'Tech 1', 'tech1@gmail.com', '$2y$10$sRgN0AlG/zdRygh1hCfB6e75kdUN0KnSz6alf450MhhDx3VjbQN6O', '2022-10-03 17:04:43', '2022-10-03 17:04:43', 25, NULL, NULL, NULL, NULL, NULL, '', NULL),
(65, 'Tech 2', 'tech2@gmail.com', '$2y$10$sRgN0AlG/zdRygh1hCfB6e75kdUN0KnSz6alf450MhhDx3VjbQN6O', '2022-10-03 17:04:43', '2022-10-03 17:04:43', 25, NULL, NULL, NULL, NULL, NULL, '', NULL),
(68, 'replacement', 'replacement@gmail.com', '$2y$10$sRgN0AlG/zdRygh1hCfB6e75kdUN0KnSz6alf450MhhDx3VjbQN6O', '2022-10-03 17:04:43', '2022-10-11 21:14:57', 18, NULL, NULL, NULL, NULL, NULL, '', NULL),
(69, 'refund', 'refund@gmail.com', '$2y$10$sRgN0AlG/zdRygh1hCfB6e75kdUN0KnSz6alf450MhhDx3VjbQN6O', '2022-10-03 17:04:43', '2022-10-11 21:14:57', 19, NULL, NULL, NULL, NULL, NULL, '', NULL),
(70, 'asc', 'asc@gmail.com', '$2y$10$sRgN0AlG/zdRygh1hCfB6e75kdUN0KnSz6alf450MhhDx3VjbQN6O', '2022-10-03 17:04:43', '2022-10-11 21:14:57', 20, NULL, NULL, NULL, NULL, NULL, '', NULL),
(71, 'parts', 'parts@gmail.com', '$2y$10$sRgN0AlG/zdRygh1hCfB6e75kdUN0KnSz6alf450MhhDx3VjbQN6O', '2022-10-03 17:04:43', '2022-10-11 21:14:57', 26, NULL, NULL, NULL, NULL, NULL, '', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles_permissions`
--
ALTER TABLE `roles_permissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rp_permission_id` (`permission_id`),
  ADD KEY `rp_role_id` (`role_id`) USING BTREE;

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_role_id_index` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=158;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `roles_permissions`
--
ALTER TABLE `roles_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1216;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `roles_permissions`
--
ALTER TABLE `roles_permissions`
  ADD CONSTRAINT `roles_permissions_ibfk_1` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`),
  ADD CONSTRAINT `roles_permissions_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
