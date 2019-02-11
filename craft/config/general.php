<?php
return array(
  '*' => array(
    'omitScriptNameInUrls' => true//,
    //'defaultImageQuality' => 100//,
    //'cacheDuration' => 'P1W'
  ),

  'localhost' => array(
    'environmentVariables' => array(
      'sitePath' => '/Users/Matt/Developer/cadence-partners-website/',
      'baseUrl'  => 'http://localhost:8888/cadence-partners-website/',
      'devMode' => true,
      'testToEmailAddress'  => 'me@matt-gibbs.com'
    )
  ),

  '.local' => array(
    'environmentVariables' => array(
      'basePath' => '/Users/Matt/Developer/cadence-partners-website/',
      'baseUrl'  => 'http://localhost:8888/cadence-partners-website/',
      'devMode' => true,
      'testToEmailAddress'  => 'me@matt-gibbs.com'
    )
  ),

  'clients.' => array(
    'environmentVariables' => array(
      'basePath' => '/public_html/clients/cadence-partners/',
      'baseUrl'  => 'https://clients.matt-gibbs.com/cadence-partners/',
      'devMode' => true,
      'cacheDuration' => 'P1W'
    )
  ),

  'cadencepartners.co.uk' => array(
    'environmentVariables' => array(
      'basePath' => '/',
      'baseUrl'  => 'http://www.cadencepartners.co.uk/',
    )
  ),
);
