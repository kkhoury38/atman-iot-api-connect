# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server import util


class AssetExcludingId(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, name=None, description=None, asset_group_id=None):  # noqa: E501
        """AssetExcludingId - a model defined in OpenAPI

        :param name: The name of this AssetExcludingId.  # noqa: E501
        :type name: str
        :param description: The description of this AssetExcludingId.  # noqa: E501
        :type description: str
        :param asset_group_id: The asset_group_id of this AssetExcludingId.  # noqa: E501
        :type asset_group_id: float
        """
        self.openapi_types = {
            'name': str,
            'description': str,
            'asset_group_id': float
        }

        self.attribute_map = {
            'name': 'name',
            'description': 'description',
            'asset_group_id': 'assetGroupId'
        }

        self._name = name
        self._description = description
        self._asset_group_id = asset_group_id

    @classmethod
    def from_dict(cls, dikt) -> 'AssetExcludingId':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The AssetExcluding_id_ of this AssetExcludingId.  # noqa: E501
        :rtype: AssetExcludingId
        """
        return util.deserialize_model(dikt, cls)

    @property
    def name(self):
        """Gets the name of this AssetExcludingId.

        Asset name  # noqa: E501

        :return: The name of this AssetExcludingId.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this AssetExcludingId.

        Asset name  # noqa: E501

        :param name: The name of this AssetExcludingId.
        :type name: str
        """

        self._name = name

    @property
    def description(self):
        """Gets the description of this AssetExcludingId.

        Asset description  # noqa: E501

        :return: The description of this AssetExcludingId.
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this AssetExcludingId.

        Asset description  # noqa: E501

        :param description: The description of this AssetExcludingId.
        :type description: str
        """

        self._description = description

    @property
    def asset_group_id(self):
        """Gets the asset_group_id of this AssetExcludingId.

        ID of AssetGroup that Asset belongs to  # noqa: E501

        :return: The asset_group_id of this AssetExcludingId.
        :rtype: float
        """
        return self._asset_group_id

    @asset_group_id.setter
    def asset_group_id(self, asset_group_id):
        """Sets the asset_group_id of this AssetExcludingId.

        ID of AssetGroup that Asset belongs to  # noqa: E501

        :param asset_group_id: The asset_group_id of this AssetExcludingId.
        :type asset_group_id: float
        """
        if asset_group_id is None:
            raise ValueError("Invalid value for `asset_group_id`, must not be `None`")  # noqa: E501

        self._asset_group_id = asset_group_id
