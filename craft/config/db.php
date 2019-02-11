<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(
  '*' => array(
    'tablePrefix' => 'craft'
  ),
  'localhost' => array(
    'server' => 'localhost',
    'user' => 'root',
    'password' => 'root',
    'database' => 'cadence-partners-craft',
    'port' => '8889'
  ),
  'clients.' => array(
    'server' => 'localhost',
    'user' => 'mattdwip_dev',
    'password' => 'V1s10n31',
    'database' => 'mattdwip_cadence_partners',
    'port' => '3306'
  ),
  'matt-gibbs.com' => array(
    'server' => 'localhost',
    'user' => 'mattdwip_dev',
    'password' => 'V1s10n31',
    'database' => 'mattdwip_cadence_partners',
    'port' => '3306'
  ),
  'cadencepartners.co.uk' => array(
    'server' => 'localhost',
    'user' => 'testtest',
    'password' => 'testtest',
    'database' => 'cadence_partners_craft',
    'port' => '3306',
  ),
);
