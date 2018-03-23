import React from 'react';

export var About = (props) => {
	return(
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>
				This is a weather application built on React.
			</p>
			<p>
				Here are some of the tools I used:
			</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
				</li>
				<li>
					<a href="http://openweathermap.org">Open Weather Map</a> - Open Weather Map api to search for weather data.
				</li>
				<li>
					<a href="http://www.heroku.com">Heroku</a> - Deploying the live server.
				</li>
			</ul>
			<p>
				Here is the <a href="https://github.com/baikinjo/ReactWeather">Source Code</a>
			</p>
			<p>
				Check my <a href="http://injobaik.ca">Portfolio</a> site!
			</p>

		</div>

    )
};

module.exports = About;
