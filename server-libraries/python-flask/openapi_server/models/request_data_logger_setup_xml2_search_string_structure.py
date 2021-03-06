# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server.models.request_data_logger_setup_xml2_search_string_structure_split import RequestDataLoggerSetupXml2SearchStringStructureSplit
from openapi_server import util

from openapi_server.models.request_data_logger_setup_xml2_search_string_structure_split import RequestDataLoggerSetupXml2SearchStringStructureSplit  # noqa: E501

class RequestDataLoggerSetupXml2SearchStringStructure(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, key=None, is_string=None, perform_split=None):  # noqa: E501
        """RequestDataLoggerSetupXml2SearchStringStructure - a model defined in OpenAPI

        :param key: The key of this RequestDataLoggerSetupXml2SearchStringStructure.  # noqa: E501
        :type key: str
        :param is_string: The is_string of this RequestDataLoggerSetupXml2SearchStringStructure.  # noqa: E501
        :type is_string: bool
        :param perform_split: The perform_split of this RequestDataLoggerSetupXml2SearchStringStructure.  # noqa: E501
        :type perform_split: List[RequestDataLoggerSetupXml2SearchStringStructureSplit]
        """
        self.openapi_types = {
            'key': str,
            'is_string': bool,
            'perform_split': List[RequestDataLoggerSetupXml2SearchStringStructureSplit]
        }

        self.attribute_map = {
            'key': 'key',
            'is_string': 'isString',
            'perform_split': 'performSplit'
        }

        self._key = key
        self._is_string = is_string
        self._perform_split = perform_split

    @classmethod
    def from_dict(cls, dikt) -> 'RequestDataLoggerSetupXml2SearchStringStructure':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The RequestDataLoggerSetupXml2SearchStringStructure of this RequestDataLoggerSetupXml2SearchStringStructure.  # noqa: E501
        :rtype: RequestDataLoggerSetupXml2SearchStringStructure
        """
        return util.deserialize_model(dikt, cls)

    @property
    def key(self):
        """Gets the key of this RequestDataLoggerSetupXml2SearchStringStructure.

        XML key containing parent attribute  # noqa: E501

        :return: The key of this RequestDataLoggerSetupXml2SearchStringStructure.
        :rtype: str
        """
        return self._key

    @key.setter
    def key(self, key):
        """Sets the key of this RequestDataLoggerSetupXml2SearchStringStructure.

        XML key containing parent attribute  # noqa: E501

        :param key: The key of this RequestDataLoggerSetupXml2SearchStringStructure.
        :type key: str
        """
        if key is None:
            raise ValueError("Invalid value for `key`, must not be `None`")  # noqa: E501

        self._key = key

    @property
    def is_string(self):
        """Gets the is_string of this RequestDataLoggerSetupXml2SearchStringStructure.

        Flag for selecting if parent value is the entire string contained in the provided XML Key.  If set to true performSplit must be defined  # noqa: E501

        :return: The is_string of this RequestDataLoggerSetupXml2SearchStringStructure.
        :rtype: bool
        """
        return self._is_string

    @is_string.setter
    def is_string(self, is_string):
        """Sets the is_string of this RequestDataLoggerSetupXml2SearchStringStructure.

        Flag for selecting if parent value is the entire string contained in the provided XML Key.  If set to true performSplit must be defined  # noqa: E501

        :param is_string: The is_string of this RequestDataLoggerSetupXml2SearchStringStructure.
        :type is_string: bool
        """
        if is_string is None:
            raise ValueError("Invalid value for `is_string`, must not be `None`")  # noqa: E501

        self._is_string = is_string

    @property
    def perform_split(self):
        """Gets the perform_split of this RequestDataLoggerSetupXml2SearchStringStructure.


        :return: The perform_split of this RequestDataLoggerSetupXml2SearchStringStructure.
        :rtype: List[RequestDataLoggerSetupXml2SearchStringStructureSplit]
        """
        return self._perform_split

    @perform_split.setter
    def perform_split(self, perform_split):
        """Sets the perform_split of this RequestDataLoggerSetupXml2SearchStringStructure.


        :param perform_split: The perform_split of this RequestDataLoggerSetupXml2SearchStringStructure.
        :type perform_split: List[RequestDataLoggerSetupXml2SearchStringStructureSplit]
        """
        if perform_split is None:
            raise ValueError("Invalid value for `perform_split`, must not be `None`")  # noqa: E501

        self._perform_split = perform_split
