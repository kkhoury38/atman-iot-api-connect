# coding: utf-8

"""
    Atman IoT

    Atman IoT Server  # noqa: E501

    The version of the OpenAPI document: 3.0.1
    Contact: k.khoury@k-ren.gr
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from openapi_client.configuration import Configuration


class SubscriptionWithRelations(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'id': 'float',
        'product': 'str',
        'type': 'str',
        'description': 'str',
        'duration': 'float',
        'monthly_price': 'float',
        'yearly_price': 'float',
        'active': 'bool',
        'user_subscriptions': 'list[UserSubscriptionWithRelations]'
    }

    attribute_map = {
        'id': 'id',
        'product': 'product',
        'type': 'type',
        'description': 'description',
        'duration': 'duration',
        'monthly_price': 'monthlyPrice',
        'yearly_price': 'yearlyPrice',
        'active': 'active',
        'user_subscriptions': 'userSubscriptions'
    }

    def __init__(self, id=None, product=None, type=None, description=None, duration=None, monthly_price=None, yearly_price=None, active=None, user_subscriptions=None, local_vars_configuration=None):  # noqa: E501
        """SubscriptionWithRelations - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._id = None
        self._product = None
        self._type = None
        self._description = None
        self._duration = None
        self._monthly_price = None
        self._yearly_price = None
        self._active = None
        self._user_subscriptions = None
        self.discriminator = None

        if id is not None:
            self.id = id
        self.product = product
        if type is not None:
            self.type = type
        self.description = description
        self.duration = duration
        self.monthly_price = monthly_price
        self.yearly_price = yearly_price
        self.active = active
        if user_subscriptions is not None:
            self.user_subscriptions = user_subscriptions

    @property
    def id(self):
        """Gets the id of this SubscriptionWithRelations.  # noqa: E501


        :return: The id of this SubscriptionWithRelations.  # noqa: E501
        :rtype: float
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this SubscriptionWithRelations.


        :param id: The id of this SubscriptionWithRelations.  # noqa: E501
        :type: float
        """

        self._id = id

    @property
    def product(self):
        """Gets the product of this SubscriptionWithRelations.  # noqa: E501


        :return: The product of this SubscriptionWithRelations.  # noqa: E501
        :rtype: str
        """
        return self._product

    @product.setter
    def product(self, product):
        """Sets the product of this SubscriptionWithRelations.


        :param product: The product of this SubscriptionWithRelations.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and product is None:  # noqa: E501
            raise ValueError("Invalid value for `product`, must not be `None`")  # noqa: E501

        self._product = product

    @property
    def type(self):
        """Gets the type of this SubscriptionWithRelations.  # noqa: E501


        :return: The type of this SubscriptionWithRelations.  # noqa: E501
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this SubscriptionWithRelations.


        :param type: The type of this SubscriptionWithRelations.  # noqa: E501
        :type: str
        """

        self._type = type

    @property
    def description(self):
        """Gets the description of this SubscriptionWithRelations.  # noqa: E501


        :return: The description of this SubscriptionWithRelations.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this SubscriptionWithRelations.


        :param description: The description of this SubscriptionWithRelations.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and description is None:  # noqa: E501
            raise ValueError("Invalid value for `description`, must not be `None`")  # noqa: E501

        self._description = description

    @property
    def duration(self):
        """Gets the duration of this SubscriptionWithRelations.  # noqa: E501


        :return: The duration of this SubscriptionWithRelations.  # noqa: E501
        :rtype: float
        """
        return self._duration

    @duration.setter
    def duration(self, duration):
        """Sets the duration of this SubscriptionWithRelations.


        :param duration: The duration of this SubscriptionWithRelations.  # noqa: E501
        :type: float
        """
        if self.local_vars_configuration.client_side_validation and duration is None:  # noqa: E501
            raise ValueError("Invalid value for `duration`, must not be `None`")  # noqa: E501

        self._duration = duration

    @property
    def monthly_price(self):
        """Gets the monthly_price of this SubscriptionWithRelations.  # noqa: E501


        :return: The monthly_price of this SubscriptionWithRelations.  # noqa: E501
        :rtype: float
        """
        return self._monthly_price

    @monthly_price.setter
    def monthly_price(self, monthly_price):
        """Sets the monthly_price of this SubscriptionWithRelations.


        :param monthly_price: The monthly_price of this SubscriptionWithRelations.  # noqa: E501
        :type: float
        """
        if self.local_vars_configuration.client_side_validation and monthly_price is None:  # noqa: E501
            raise ValueError("Invalid value for `monthly_price`, must not be `None`")  # noqa: E501

        self._monthly_price = monthly_price

    @property
    def yearly_price(self):
        """Gets the yearly_price of this SubscriptionWithRelations.  # noqa: E501


        :return: The yearly_price of this SubscriptionWithRelations.  # noqa: E501
        :rtype: float
        """
        return self._yearly_price

    @yearly_price.setter
    def yearly_price(self, yearly_price):
        """Sets the yearly_price of this SubscriptionWithRelations.


        :param yearly_price: The yearly_price of this SubscriptionWithRelations.  # noqa: E501
        :type: float
        """
        if self.local_vars_configuration.client_side_validation and yearly_price is None:  # noqa: E501
            raise ValueError("Invalid value for `yearly_price`, must not be `None`")  # noqa: E501

        self._yearly_price = yearly_price

    @property
    def active(self):
        """Gets the active of this SubscriptionWithRelations.  # noqa: E501


        :return: The active of this SubscriptionWithRelations.  # noqa: E501
        :rtype: bool
        """
        return self._active

    @active.setter
    def active(self, active):
        """Sets the active of this SubscriptionWithRelations.


        :param active: The active of this SubscriptionWithRelations.  # noqa: E501
        :type: bool
        """
        if self.local_vars_configuration.client_side_validation and active is None:  # noqa: E501
            raise ValueError("Invalid value for `active`, must not be `None`")  # noqa: E501

        self._active = active

    @property
    def user_subscriptions(self):
        """Gets the user_subscriptions of this SubscriptionWithRelations.  # noqa: E501


        :return: The user_subscriptions of this SubscriptionWithRelations.  # noqa: E501
        :rtype: list[UserSubscriptionWithRelations]
        """
        return self._user_subscriptions

    @user_subscriptions.setter
    def user_subscriptions(self, user_subscriptions):
        """Sets the user_subscriptions of this SubscriptionWithRelations.


        :param user_subscriptions: The user_subscriptions of this SubscriptionWithRelations.  # noqa: E501
        :type: list[UserSubscriptionWithRelations]
        """

        self._user_subscriptions = user_subscriptions

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, SubscriptionWithRelations):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, SubscriptionWithRelations):
            return True

        return self.to_dict() != other.to_dict()
