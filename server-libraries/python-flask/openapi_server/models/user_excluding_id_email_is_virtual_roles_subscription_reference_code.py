# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server import util


class UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, username=None, passwd=None):  # noqa: E501
        """UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode - a model defined in OpenAPI

        :param username: The username of this UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode.  # noqa: E501
        :type username: str
        :param passwd: The passwd of this UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode.  # noqa: E501
        :type passwd: str
        """
        self.openapi_types = {
            'username': str,
            'passwd': str
        }

        self.attribute_map = {
            'username': 'username',
            'passwd': 'passwd'
        }

        self._username = username
        self._passwd = passwd

    @classmethod
    def from_dict(cls, dikt) -> 'UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The UserExcluding_id-email-isVirtual-roles-subscriptionReferenceCode_ of this UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode.  # noqa: E501
        :rtype: UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode
        """
        return util.deserialize_model(dikt, cls)

    @property
    def username(self):
        """Gets the username of this UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode.

        Username  # noqa: E501

        :return: The username of this UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode.
        :rtype: str
        """
        return self._username

    @username.setter
    def username(self, username):
        """Sets the username of this UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode.

        Username  # noqa: E501

        :param username: The username of this UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode.
        :type username: str
        """
        if username is None:
            raise ValueError("Invalid value for `username`, must not be `None`")  # noqa: E501

        self._username = username

    @property
    def passwd(self):
        """Gets the passwd of this UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode.

        Password  # noqa: E501

        :return: The passwd of this UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode.
        :rtype: str
        """
        return self._passwd

    @passwd.setter
    def passwd(self, passwd):
        """Sets the passwd of this UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode.

        Password  # noqa: E501

        :param passwd: The passwd of this UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode.
        :type passwd: str
        """

        self._passwd = passwd
