/* Magic Mirror Config Sample
*
* By Michael Teeuw http://michaelteeuw.nl
* MIT Licensed.
*/
var config = {
	"port": 8080,
	"language": "en",
	"timeFormat": 12,
	"units": "imperial",
	"modules": [
		{
			"module": "MMM-PlexSlideshow",
			"header": "",
			"position": "fullscreen_below",
			"config": {
				"plex": {
					"hostname": "192.168.2.200",
					"port": 32400,
					"authToken": "nGxjfcjwHgWWbymnaiVf"
				},
				"transitionImages": true
			}
		},
		{
			"module": "MMM-Admin-Interface"
		},
		{
			"module": "MMM-Carousel",
			"position": "bottom_bar",
			"config": {
				"transitionInterval": 0,
				"ignoreModules": [
					"clock",
					"MMM-PlexSlideshow"
				],
				"mode": "slides",
				"showPageIndicators": true,
				"showPageControls": true,
				"slides": {
					"slide-1": [
						"calendar"
					],
					"slide-2": [
						"weather"
					],
					"slide-3": [
						"newsfeed"
					]
				}
			},
			"header": ""
		},
		{
			"module": "MMM-BurnIn",
			"position": "bottom_bar",
			"config": {
				"updateInterval": 15,
				"invertDuration": 5
			}
		},
		{
			"module": "clock",
			"position": "top_left"
		},
		{
			"module": "calendar",
			"header": "US Holidays",
			"position": "top_left",
			"config": {
				"calendars": [
					{
						"symbol": "calendar-check",
						"url": "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					}
				]
			}
		},
		{
			"module": "weather",
			"position": "top_right",
			"config": {
				"location": "",
				"locationID": "4718711",
				"apiKey": "8eb55f48be4b44523ece4eda078a7d04",
				"type": "forecast"
			},
			"header": "Weather Forecast"
		},
		{
			"module": "newsfeed",
			"position": "bottom_left",
			"config": {
				"feeds": [
					{
						"title": "New York Times",
						"url": "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				"showSourceTitle": true,
				"showPublishDate": true,
				"broadcastNewsFeeds": true,
				"broadcastNewsUpdates": true
			}
		}
	],
	"address": "0.0.0.0",
	"ipWhitelist": [],
	"useHttps": false,
	"httpsPrivateKey": "",
	"httpsCertificate": "",
	"serverOnly": "true"
};
/*************** DO NOT EDIT THE LINE BELOW ***************/ 
if (typeof module !== 'undefined') {module.exports = config;}