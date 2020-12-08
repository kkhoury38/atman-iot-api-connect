<?php
/**
 * DataLogger
 */
namespace app\Models;

/**
 * DataLogger
 */
class DataLogger {

    /** @var float $id Automatically generated ID*/
    private $id;

    /** @var string $description Datalogger description*/
    private $description;

    /** @var string $connectionType Method used by DataLogger to send data to the system. At present only FTP implemented*/
    private $connectionType;

    /** @var string $fileFormat Format of the files uploaded to the system DataLogger. At present system supports CSV and XML formats*/
    private $fileFormat;

    /** @var string $username Username of system FTP account, where the DataLogger sends the data (if applicable)*/
    private $username;

    /** @var string $passwd Password of system FTP account, where the DataLogger sends the data (if applicable)*/
    private $passwd;

    /** @var string $authToken Authentication token of DataLogger*/
    private $authToken;

    /** @var string $config JSON configuration file for DataLogger*/
    private $config;

    /** @var bool $autoInit Flag for selecting if DataLogger is to be initiated automatically from preexisting configuration*/
    private $autoInit;

    /** @var bool $dataCompressed Flag for selecting if DataLogger sends compressed files*/
    private $dataCompressed;

    /** @var float $userId ID of User that DataLogger belongs to*/
    private $userId;

}
