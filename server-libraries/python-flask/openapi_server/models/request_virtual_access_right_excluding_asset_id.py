# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server import util


class RequestVirtualAccessRightExcludingAssetId(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, user_id=None, asset_group_id=None):  # noqa: E501
        """RequestVirtualAccessRightExcludingAssetId - a model defined in OpenAPI

        :param user_id: The user_id of this RequestVirtualAccessRightExcludingAssetId.  # noqa: E501
        :type user_id: float
        :param asset_group_id: The asset_group_id of this RequestVirtualAccessRightExcludingAssetId.  # noqa: E501
        :type asset_group_id: float
        """
        self.openapi_types = {
            'user_id': float,
            'asset_group_id': float
        }

        self.attribute_map = {
            'user_id': 'userId',
            'asset_group_id': 'assetGroupId'
        }

        self._user_id = user_id
        self._asset_group_id = asset_group_id

    @classmethod
    def from_dict(cls, dikt) -> 'RequestVirtualAccessRightExcludingAssetId':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The RequestVirtualAccessRightExcluding_assetId_ of this RequestVirtualAccessRightExcludingAssetId.  # noqa: E501
        :rtype: RequestVirtualAccessRightExcludingAssetId
        """
        return util.deserialize_model(dikt, cls)

    @property
    def user_id(self):
        """Gets the user_id of this RequestVirtualAccessRightExcludingAssetId.

        Id of user to grant access to asset  # noqa: E501

        :return: The user_id of this RequestVirtualAccessRightExcludingAssetId.
        :rtype: float
        """
        return self._user_id

    @user_id.setter
    def user_id(self, user_id):
        """Sets the user_id of this RequestVirtualAccessRightExcludingAssetId.

        Id of user to grant access to asset  # noqa: E501

        :param user_id: The user_id of this RequestVirtualAccessRightExcludingAssetId.
        :type user_id: float
        """
        if user_id is None:
            raise ValueError("Invalid value for `user_id`, must not be `None`")  # noqa: E501

        self._user_id = user_id

    @property
    def asset_group_id(self):
        """Gets the asset_group_id of this RequestVirtualAccessRightExcludingAssetId.

        Id of asset group  # noqa: E501

        :return: The asset_group_id of this RequestVirtualAccessRightExcludingAssetId.
        :rtype: float
        """
        return self._asset_group_id

    @asset_group_id.setter
    def asset_group_id(self, asset_group_id):
        """Sets the asset_group_id of this RequestVirtualAccessRightExcludingAssetId.

        Id of asset group  # noqa: E501

        :param asset_group_id: The asset_group_id of this RequestVirtualAccessRightExcludingAssetId.
        :type asset_group_id: float
        """

        self._asset_group_id = asset_group_id
