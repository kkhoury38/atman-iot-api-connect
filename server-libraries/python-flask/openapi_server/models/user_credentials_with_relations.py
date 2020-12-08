# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server import util


class UserCredentialsWithRelations(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, id=None, passwd=None, user_id=None):  # noqa: E501
        """UserCredentialsWithRelations - a model defined in OpenAPI

        :param id: The id of this UserCredentialsWithRelations.  # noqa: E501
        :type id: float
        :param passwd: The passwd of this UserCredentialsWithRelations.  # noqa: E501
        :type passwd: str
        :param user_id: The user_id of this UserCredentialsWithRelations.  # noqa: E501
        :type user_id: float
        """
        self.openapi_types = {
            'id': float,
            'passwd': str,
            'user_id': float
        }

        self.attribute_map = {
            'id': 'id',
            'passwd': 'passwd',
            'user_id': 'userId'
        }

        self._id = id
        self._passwd = passwd
        self._user_id = user_id

    @classmethod
    def from_dict(cls, dikt) -> 'UserCredentialsWithRelations':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The UserCredentialsWithRelations of this UserCredentialsWithRelations.  # noqa: E501
        :rtype: UserCredentialsWithRelations
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self):
        """Gets the id of this UserCredentialsWithRelations.


        :return: The id of this UserCredentialsWithRelations.
        :rtype: float
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this UserCredentialsWithRelations.


        :param id: The id of this UserCredentialsWithRelations.
        :type id: float
        """

        self._id = id

    @property
    def passwd(self):
        """Gets the passwd of this UserCredentialsWithRelations.


        :return: The passwd of this UserCredentialsWithRelations.
        :rtype: str
        """
        return self._passwd

    @passwd.setter
    def passwd(self, passwd):
        """Sets the passwd of this UserCredentialsWithRelations.


        :param passwd: The passwd of this UserCredentialsWithRelations.
        :type passwd: str
        """
        if passwd is None:
            raise ValueError("Invalid value for `passwd`, must not be `None`")  # noqa: E501

        self._passwd = passwd

    @property
    def user_id(self):
        """Gets the user_id of this UserCredentialsWithRelations.


        :return: The user_id of this UserCredentialsWithRelations.
        :rtype: float
        """
        return self._user_id

    @user_id.setter
    def user_id(self, user_id):
        """Sets the user_id of this UserCredentialsWithRelations.


        :param user_id: The user_id of this UserCredentialsWithRelations.
        :type user_id: float
        """
        if user_id is None:
            raise ValueError("Invalid value for `user_id`, must not be `None`")  # noqa: E501

        self._user_id = user_id
