# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server import util


class RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, first_item_row=None, set_manually=None, manual_value=None):  # noqa: E501
        """RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber - a model defined in OpenAPI

        :param first_item_row: The first_item_row of this RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber.  # noqa: E501
        :type first_item_row: float
        :param set_manually: The set_manually of this RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber.  # noqa: E501
        :type set_manually: bool
        :param manual_value: The manual_value of this RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber.  # noqa: E501
        :type manual_value: float
        """
        self.openapi_types = {
            'first_item_row': float,
            'set_manually': bool,
            'manual_value': float
        }

        self.attribute_map = {
            'first_item_row': 'firstItemRow',
            'set_manually': 'setManually',
            'manual_value': 'manualValue'
        }

        self._first_item_row = first_item_row
        self._set_manually = set_manually
        self._manual_value = manual_value

    @classmethod
    def from_dict(cls, dikt) -> 'RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The RequestDataLoggerSetupCsv2DataHeaderLocationKeys_Number of this RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber.  # noqa: E501
        :rtype: RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber
        """
        return util.deserialize_model(dikt, cls)

    @property
    def first_item_row(self):
        """Gets the first_item_row of this RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber.

        First row containing parent  # noqa: E501

        :return: The first_item_row of this RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber.
        :rtype: float
        """
        return self._first_item_row

    @first_item_row.setter
    def first_item_row(self, first_item_row):
        """Sets the first_item_row of this RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber.

        First row containing parent  # noqa: E501

        :param first_item_row: The first_item_row of this RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber.
        :type first_item_row: float
        """
        if first_item_row is None:
            raise ValueError("Invalid value for `first_item_row`, must not be `None`")  # noqa: E501

        self._first_item_row = first_item_row

    @property
    def set_manually(self):
        """Gets the set_manually of this RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber.

        Flag to enable setting parent manually  # noqa: E501

        :return: The set_manually of this RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber.
        :rtype: bool
        """
        return self._set_manually

    @set_manually.setter
    def set_manually(self, set_manually):
        """Sets the set_manually of this RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber.

        Flag to enable setting parent manually  # noqa: E501

        :param set_manually: The set_manually of this RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber.
        :type set_manually: bool
        """

        self._set_manually = set_manually

    @property
    def manual_value(self):
        """Gets the manual_value of this RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber.

        Manual value for parent (number)  # noqa: E501

        :return: The manual_value of this RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber.
        :rtype: float
        """
        return self._manual_value

    @manual_value.setter
    def manual_value(self, manual_value):
        """Sets the manual_value of this RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber.

        Manual value for parent (number)  # noqa: E501

        :param manual_value: The manual_value of this RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber.
        :type manual_value: float
        """

        self._manual_value = manual_value
