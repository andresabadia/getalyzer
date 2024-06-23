CREATE TABLE `requests` (
	`createt_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`user_agent` text DEFAULT '' NOT NULL,
	`headers` text DEFAULT '{}' NOT NULL,
	`query` text DEFAULT '{}' NOT NULL,
	`params` text DEFAULT '' NOT NULL
);
