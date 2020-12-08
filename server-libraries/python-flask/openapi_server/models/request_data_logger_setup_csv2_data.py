# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server.models.request_data_logger_setup_csv2_data_header_location import RequestDataLoggerSetupCsv2DataHeaderLocation
from openapi_server.models.request_data_logger_setup_csv2_data_value_location import RequestDataLoggerSetupCsv2DataValueLocation
from openapi_server import util

from openapi_server.models.request_data_logger_setup_csv2_data_header_location import RequestDataLoggerSetupCsv2DataHeaderLocation  # noqa: E501
from openapi_server.models.request_data_logger_setup_csv2_data_value_location import RequestDataLoggerSetupCsv2DataValueLocation  # noqa: E501

class RequestDataLoggerSetupCsv2Data(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, header=None, value=None):  # noqa: E501
        """RequestDataLoggerSetupCsv2Data - a model defined in OpenAPI

        :param header: The header of this RequestDataLoggerSetupCsv2Data.  # noqa: E501
        :type header: RequestDataLoggerSetupCsv2DataHeaderLocation
        :param value: The value of this RequestDataLoggerSetupCsv2Data.  # noqa: E501
        :type value: RequestDataLoggerSetupCsv2DataValueLocation
        """
        self.openapi_types = {
            'header': RequestDataLoggerSetupCsv2DataHeaderLocation,
            'value': RequestDataLoggerSetupCsv2DataValueLocation
        }

        self.attribute_map = {
            'header': 'header',
            'value': 'value'
        }

        self._header = header
        self._value = value

    @classmethod
    def from_dict(cls, dikt) -> 'RequestDataLoggerSetupCsv2Data':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The RequestDataLoggerSetupCsv2Data of this RequestDataLoggerSetupCsv2Data.  # noqa: E501
        :rtype: RequestDataLoggerSetupCsv2Data
        """
        return util.deserialize_model(dikt, cls)

    @property
    def header(self):
        """Gets the header of this RequestDataLoggerSetupCsv2Data.


        :return: The header of this RequestDataLoggerSetupCsv2Data.
        :rtype: RequestDataLoggerSetupCsv2DataHeaderLocation
        """
        return self._header

    @header.setter
    def header(self, header):
        """Sets the header of this RequestDataLoggerSetupCsv2Data.


        :param header: The header of this RequestDataLoggerSetupCsv2Data.
        :type header: RequestDataLoggerSetupCsv2DataHeaderLocation
        """
        if header is None:
            raise ValueError("Invalid value for `header`, must not be `None`")  # noqa: E501

        self._header = header

    @property
    def value(self):
        """Gets the value of this RequestDataLoggerSetupCsv2Data.


        :return: The value of this RequestDataLoggerSetupCsv2Data.
        :rtype: RequestDataLoggerSetupCsv2DataValueLocation
        """
        return self._value

    @value.setter
    def value(self, value):
        """Sets the value of this RequestDataLoggerSetupCsv2Data.


        :param value: The value of this RequestDataLoggerSetupCsv2Data.
        :type value: RequestDataLoggerSetupCsv2DataValueLocation
        """
        if value is None:
            raise ValueError("Invalid value for `value`, must not be `None`")  # noqa: E501

        self._value = value
