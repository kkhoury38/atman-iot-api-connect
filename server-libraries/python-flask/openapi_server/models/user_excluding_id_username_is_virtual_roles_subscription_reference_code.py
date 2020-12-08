# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server import util


class UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, passwd=None, email=None):  # noqa: E501
        """UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode - a model defined in OpenAPI

        :param passwd: The passwd of this UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.  # noqa: E501
        :type passwd: str
        :param email: The email of this UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.  # noqa: E501
        :type email: str
        """
        self.openapi_types = {
            'passwd': str,
            'email': str
        }

        self.attribute_map = {
            'passwd': 'passwd',
            'email': 'email'
        }

        self._passwd = passwd
        self._email = email

    @classmethod
    def from_dict(cls, dikt) -> 'UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The UserExcluding_id-username-isVirtual-roles-subscriptionReferenceCode_ of this UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.  # noqa: E501
        :rtype: UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode
        """
        return util.deserialize_model(dikt, cls)

    @property
    def passwd(self):
        """Gets the passwd of this UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.

        Password  # noqa: E501

        :return: The passwd of this UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.
        :rtype: str
        """
        return self._passwd

    @passwd.setter
    def passwd(self, passwd):
        """Sets the passwd of this UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.

        Password  # noqa: E501

        :param passwd: The passwd of this UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.
        :type passwd: str
        """

        self._passwd = passwd

    @property
    def email(self):
        """Gets the email of this UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.

        Email  # noqa: E501

        :return: The email of this UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.
        :rtype: str
        """
        return self._email

    @email.setter
    def email(self, email):
        """Sets the email of this UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.

        Email  # noqa: E501

        :param email: The email of this UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.
        :type email: str
        """
        if email is None:
            raise ValueError("Invalid value for `email`, must not be `None`")  # noqa: E501

        self._email = email
