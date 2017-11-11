
Thuisbezorgd-scraper
====================

About
-----
Thuisbezorgd-scraper scrapes the Thuisbezorgd.nl / Takeaway.com restaurant website to get all current orders. 
The resulting list of orders is returned in JSON format. 

Intended for restaurant owners.

Usage
-----
To list all current orders, execute <code>thuisbezorgd-scraper</code> with respectively the username and password. 
Optionally add the <code>--verbose</code> flag to see extra logging during execution.

    $ thuisbezorgd-scraper <username> <password> [--verbose]

Example output of the command above:

	{
		"orders": [
			{
				"id": "O3NQN1105O",
				"orderCode": "E0NQVH",
				"status": "Confirmed",
				"time": "2017-11-11T18:55:00.000Z",
				"timeDelivery": "2017-11-11T19:55:00.000Z",
				"amount": 1755,
				"city": "Nijverdal",
				"address": "7443LC, Dille 99",
				"distance": "3.2km",
				"delivery": "Delivery",
				"paid": "Paid electronically",
				"name": "Jan Jansen",
				"phoneNumber": "0548 612345",
				"products": [
					"1 [Combi boxen] Combibox starter € 13,95",
					"1 [Maki] Maki kappa € 2,10 + 4 stuks",
					"Delivery costs € 1,50",
					"€ 17,55"
				]
			},
			{
				"id": "ON3NRNPROO",
				"orderCode": "1T4UPU",
				"status": "Delivery",
				"time": "2017-11-11T14:16:00.000Z",
				"timeDelivery": "2017-11-11T15:45:00.000Z",
				"amount": 12365,
				"city": "Nijverdal",
				"address": "7443BT, Grotestraat 222",
				"distance": "3.2km",
				"delivery": "Delivery",
				"paid": "Paid electronically",
				"name": "Jan van Veen",
				"phoneNumber": "0612345678",
				"products": [
					"4 [Poke bowl] Poké bowl Ossenhaas € 35,80",
					"2 [Combi boxen] Combibox rolls € 65,00 + 2 persoons",
					"2 [Sashimi] Wakame 100 gr € 9,90",
					"1 [Uramaki] Uramaki ebi tempura € 11,45 + 8 stuks",
					"Delivery costs € 1,50",
					"€ 123,65"
				]
			}
		]
	}


Development
===========

Code style 
----------
https://github.com/standard/standard
