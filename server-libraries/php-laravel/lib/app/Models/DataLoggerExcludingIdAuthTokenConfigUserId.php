<?php
/**
 * DataLoggerExcludingIdAuthTokenConfigUserId
 */
namespace app\Models;

/**
 * DataLoggerExcludingIdAuthTokenConfigUserId
 */
class DataLoggerExcludingIdAuthTokenConfigUserId {

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

    /** @var bool $autoInit Flag for selecting if DataLogger is to be initiated automatically from preexisting configuration*/
    private $autoInit;

    /** @var bool $dataCompressed Flag for selecting if DataLogger sends compressed files*/
    private $dataCompressed;

}
