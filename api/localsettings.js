/*
 * This is a sample configuration file.
 *
 * Copy this file to localsettings.js and edit that file to fit your needs.
 *
 * Also see the file server.js for more information.
 */
"use strict";

exports.setup = function( parsoidConfig ) {
	// The URL of your MediaWiki API endpoint. Optionally, you can also pass
	// in a proxy specific to this prefix (overrides defaultAPIProxyURI), or
	// null to disable proxying for this end point.
	parsoidConfig.setInterwiki( 'localhost', 'http://localhost/w/api.php' );

	// We pre-define wikipedias as 'enwiki', 'dewiki' etc. Similarly
	// for other projects: 'enwiktionary', 'enwikiquote', 'enwikibooks',
	// 'enwikivoyage' etc. (default true)
	//parsoidConfig.loadWMF = false;

	// A default proxy to connect to the API endpoints. Default: undefined
	// (no proxying). Overridden by per-wiki proxy config in setInterwiki.
	//parsoidConfig.defaultAPIProxyURI = 'http://proxy.example.org:8080';

	// Enable debug mode (prints extra debugging messages)
	//parsoidConfig.debug = true;

	// Use the PHP preprocessor to expand templates via the MW API (default true)
	//parsoidConfig.usePHPPreProcessor = false;

	// Use selective serialization (default false)
	parsoidConfig.useSelser = true;

	// Allow cross-domain requests to the API (default '*')
	// Sets Access-Control-Allow-Origin header
	// disable:
	//parsoidConfig.allowCORS = false;
	// restrict:
	//parsoidConfig.allowCORS = 'some.domain.org';

	// Set to true for Performance timing
	//parsoidConfig.useDefaultPerformanceTimer = true;
	// Peformance timing options
	//parsoidConfig.txstatsdHost = 'statsd.eqiad.wmnet';
	//parsoidConfig.txstatsdPort = 8125;

	// Allow override of port/interface:
	parsoidConfig.serverPort = 8080;
	parsoidConfig.serverInterface = '0.0.0.0';

	// The URL of your LintBridge API endpoint
	//parsoidConfig.linterAPI = 'http://lintbridge.wmflabs.org/add';

	// Require SSL certificates to be valid (default true)
	// Set to false when using self-signed SSL certificates
	//parsoidConfig.strictSSL = false;

	// Use a different server for CSS style modules.
	// Set to true to use bits.wikimedia.org, or to a string with the URI.
	// Leaving it undefined (the default) will use the same URI as the MW API,
	// changing api.php for load.php.
	//parsoidConfig.modulesLoadURI = true;
};
