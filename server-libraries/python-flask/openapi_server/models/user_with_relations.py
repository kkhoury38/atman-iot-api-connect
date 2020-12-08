# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server.models.user_credentials_with_relations import UserCredentialsWithRelations
from openapi_server import util

from openapi_server.models.user_credentials_with_relations import UserCredentialsWithRelations  # noqa: E501

class UserWithRelations(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, id=None, username=None, passwd=None, email=None, roles=None, is_virtual=None, subscription_reference_code=None, user_credentials=None):  # noqa: E501
        """UserWithRelations - a model defined in OpenAPI

        :param id: The id of this UserWithRelations.  # noqa: E501
        :type id: float
        :param username: The username of this UserWithRelations.  # noqa: E501
        :type username: str
        :param passwd: The passwd of this UserWithRelations.  # noqa: E501
        :type passwd: str
        :param email: The email of this UserWithRelations.  # noqa: E501
        :type email: str
        :param roles: The roles of this UserWithRelations.  # noqa: E501
        :type roles: List[str]
        :param is_virtual: The is_virtual of this UserWithRelations.  # noqa: E501
        :type is_virtual: bool
        :param subscription_reference_code: The subscription_reference_code of this UserWithRelations.  # noqa: E501
        :type subscription_reference_code: str
        :param user_credentials: The user_credentials of this UserWithRelations.  # noqa: E501
        :type user_credentials: UserCredentialsWithRelations
        """
        self.openapi_types = {
            'id': float,
            'username': str,
            'passwd': str,
            'email': str,
            'roles': List[str],
            'is_virtual': bool,
            'subscription_reference_code': str,
            'user_credentials': UserCredentialsWithRelations
        }

        self.attribute_map = {
            'id': 'id',
            'username': 'username',
            'passwd': 'passwd',
            'email': 'email',
            'roles': 'roles',
            'is_virtual': 'isVirtual',
            'subscription_reference_code': 'subscriptionReferenceCode',
            'user_credentials': 'userCredentials'
        }

        self._id = id
        self._username = username
        self._passwd = passwd
        self._email = email
        self._roles = roles
        self._is_virtual = is_virtual
        self._subscription_reference_code = subscription_reference_code
        self._user_credentials = user_credentials

    @classmethod
    def from_dict(cls, dikt) -> 'UserWithRelations':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The UserWithRelations of this UserWithRelations.  # noqa: E501
        :rtype: UserWithRelations
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self):
        """Gets the id of this UserWithRelations.

        Automatically generated ID  # noqa: E501

        :return: The id of this UserWithRelations.
        :rtype: float
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this UserWithRelations.

        Automatically generated ID  # noqa: E501

        :param id: The id of this UserWithRelations.
        :type id: float
        """

        self._id = id

    @property
    def username(self):
        """Gets the username of this UserWithRelations.

        Username  # noqa: E501

        :return: The username of this UserWithRelations.
        :rtype: str
        """
        return self._username

    @username.setter
    def username(self, username):
        """Sets the username of this UserWithRelations.

        Username  # noqa: E501

        :param username: The username of this UserWithRelations.
        :type username: str
        """
        if username is None:
            raise ValueError("Invalid value for `username`, must not be `None`")  # noqa: E501

        self._username = username

    @property
    def passwd(self):
        """Gets the passwd of this UserWithRelations.

        Password  # noqa: E501

        :return: The passwd of this UserWithRelations.
        :rtype: str
        """
        return self._passwd

    @passwd.setter
    def passwd(self, passwd):
        """Sets the passwd of this UserWithRelations.

        Password  # noqa: E501

        :param passwd: The passwd of this UserWithRelations.
        :type passwd: str
        """

        self._passwd = passwd

    @property
    def email(self):
        """Gets the email of this UserWithRelations.

        Email  # noqa: E501

        :return: The email of this UserWithRelations.
        :rtype: str
        """
        return self._email

    @email.setter
    def email(self, email):
        """Sets the email of this UserWithRelations.

        Email  # noqa: E501

        :param email: The email of this UserWithRelations.
        :type email: str
        """
        if email is None:
            raise ValueError("Invalid value for `email`, must not be `None`")  # noqa: E501

        self._email = email

    @property
    def roles(self):
        """Gets the roles of this UserWithRelations.


        :return: The roles of this UserWithRelations.
        :rtype: List[str]
        """
        return self._roles

    @roles.setter
    def roles(self, roles):
        """Sets the roles of this UserWithRelations.


        :param roles: The roles of this UserWithRelations.
        :type roles: List[str]
        """

        self._roles = roles

    @property
    def is_virtual(self):
        """Gets the is_virtual of this UserWithRelations.

        Automatically assigned flag to select if User is virtual or not  # noqa: E501

        :return: The is_virtual of this UserWithRelations.
        :rtype: bool
        """
        return self._is_virtual

    @is_virtual.setter
    def is_virtual(self, is_virtual):
        """Sets the is_virtual of this UserWithRelations.

        Automatically assigned flag to select if User is virtual or not  # noqa: E501

        :param is_virtual: The is_virtual of this UserWithRelations.
        :type is_virtual: bool
        """
        if is_virtual is None:
            raise ValueError("Invalid value for `is_virtual`, must not be `None`")  # noqa: E501

        self._is_virtual = is_virtual

    @property
    def subscription_reference_code(self):
        """Gets the subscription_reference_code of this UserWithRelations.


        :return: The subscription_reference_code of this UserWithRelations.
        :rtype: str
        """
        return self._subscription_reference_code

    @subscription_reference_code.setter
    def subscription_reference_code(self, subscription_reference_code):
        """Sets the subscription_reference_code of this UserWithRelations.


        :param subscription_reference_code: The subscription_reference_code of this UserWithRelations.
        :type subscription_reference_code: str
        """

        self._subscription_reference_code = subscription_reference_code

    @property
    def user_credentials(self):
        """Gets the user_credentials of this UserWithRelations.


        :return: The user_credentials of this UserWithRelations.
        :rtype: UserCredentialsWithRelations
        """
        return self._user_credentials

    @user_credentials.setter
    def user_credentials(self, user_credentials):
        """Sets the user_credentials of this UserWithRelations.


        :param user_credentials: The user_credentials of this UserWithRelations.
        :type user_credentials: UserCredentialsWithRelations
        """

        self._user_credentials = user_credentials
