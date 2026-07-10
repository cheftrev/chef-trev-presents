CREATE TABLE `inquiries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`eventType` varchar(255) NOT NULL,
	`guestCount` varchar(100),
	`location` varchar(500),
	`budget` varchar(100),
	`date` varchar(255),
	`message` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `inquiries_id` PRIMARY KEY(`id`)
);
