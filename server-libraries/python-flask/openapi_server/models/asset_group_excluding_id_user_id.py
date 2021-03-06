# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server import util


class AssetGroupExcludingIdUserId(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, name=None, description=None):  # noqa: E501
        """AssetGroupExcludingIdUserId - a model defined in OpenAPI

        :param name: The name of this AssetGroupExcludingIdUserId.  # noqa: E501
        :type name: str
        :param description: The description of this AssetGroupExcludingIdUserId.  # noqa: E501
        :type description: str
        """
        self.openapi_types = {
            'name': str,
            'description': str
        }

        self.attribute_map = {
            'name': 'name',
            'description': 'description'
        }

        self._name = name
        self._description = description

    @classmethod
    def from_dict(cls, dikt) -> 'AssetGroupExcludingIdUserId':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The AssetGroupExcluding_id-userId_ of this AssetGroupExcludingIdUserId.  # noqa: E501
        :rtype: AssetGroupExcludingIdUserId
        """
        return util.deserialize_model(dikt, cls)

    @property
    def name(self):
        """Gets the name of this AssetGroupExcludingIdUserId.

        AssetGroup name  # noqa: E501

        :return: The name of this AssetGroupExcludingIdUserId.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this AssetGroupExcludingIdUserId.

        AssetGroup name  # noqa: E501

        :param name: The name of this AssetGroupExcludingIdUserId.
        :type name: str
        """

        self._name = name

    @property
    def description(self):
        """Gets the description of this AssetGroupExcludingIdUserId.

        AssetGroup description  # noqa: E501

        :return: The description of this AssetGroupExcludingIdUserId.
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this AssetGroupExcludingIdUserId.

        AssetGroup description  # noqa: E501

        :param description: The description of this AssetGroupExcludingIdUserId.
        :type description: str
        """

        self._description = description
