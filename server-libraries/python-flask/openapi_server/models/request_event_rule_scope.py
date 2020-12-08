# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server import util


class RequestEventRuleScope(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, device_type_category=None, channel_type_category=None):  # noqa: E501
        """RequestEventRuleScope - a model defined in OpenAPI

        :param device_type_category: The device_type_category of this RequestEventRuleScope.  # noqa: E501
        :type device_type_category: str
        :param channel_type_category: The channel_type_category of this RequestEventRuleScope.  # noqa: E501
        :type channel_type_category: str
        """
        self.openapi_types = {
            'device_type_category': str,
            'channel_type_category': str
        }

        self.attribute_map = {
            'device_type_category': 'deviceTypeCategory',
            'channel_type_category': 'channelTypeCategory'
        }

        self._device_type_category = device_type_category
        self._channel_type_category = channel_type_category

    @classmethod
    def from_dict(cls, dikt) -> 'RequestEventRuleScope':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The RequestEventRuleScope of this RequestEventRuleScope.  # noqa: E501
        :rtype: RequestEventRuleScope
        """
        return util.deserialize_model(dikt, cls)

    @property
    def device_type_category(self):
        """Gets the device_type_category of this RequestEventRuleScope.

        deviceType.Category that rule aplies to  # noqa: E501

        :return: The device_type_category of this RequestEventRuleScope.
        :rtype: str
        """
        return self._device_type_category

    @device_type_category.setter
    def device_type_category(self, device_type_category):
        """Sets the device_type_category of this RequestEventRuleScope.

        deviceType.Category that rule aplies to  # noqa: E501

        :param device_type_category: The device_type_category of this RequestEventRuleScope.
        :type device_type_category: str
        """
        if device_type_category is None:
            raise ValueError("Invalid value for `device_type_category`, must not be `None`")  # noqa: E501

        self._device_type_category = device_type_category

    @property
    def channel_type_category(self):
        """Gets the channel_type_category of this RequestEventRuleScope.

        channelType.Categoy that rule aplies to  # noqa: E501

        :return: The channel_type_category of this RequestEventRuleScope.
        :rtype: str
        """
        return self._channel_type_category

    @channel_type_category.setter
    def channel_type_category(self, channel_type_category):
        """Sets the channel_type_category of this RequestEventRuleScope.

        channelType.Categoy that rule aplies to  # noqa: E501

        :param channel_type_category: The channel_type_category of this RequestEventRuleScope.
        :type channel_type_category: str
        """
        if channel_type_category is None:
            raise ValueError("Invalid value for `channel_type_category`, must not be `None`")  # noqa: E501

        self._channel_type_category = channel_type_category
