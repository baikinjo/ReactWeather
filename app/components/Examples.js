import React from 'react';
import {Link} from 'react-router';

export var Examples = (props) => {
	return(
      <div>
      	<h1 className="text-center page-title">Examples</h1>
      	<p>Here are a few example locations to try out:</p>
      	<ol>
      		<li>
      			<Link to='/?location=Vancouver'>Vancouver, BC</Link>
      		</li>
      		<li>
      			<Link to='/?location=Seoul'>Seoul, South Korea</Link>
      		</li>
      	</ol>
      </div>
    );
}

module.exports = Examples;
