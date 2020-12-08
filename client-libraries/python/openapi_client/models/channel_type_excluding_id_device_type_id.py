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


class ChannelTypeExcludingIdDeviceTypeId(object):
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
        'name': 'str',
        'category': 'str',
        'description': 'str',
        'unit': 'str',
        'channel_type': 'str'
    }

    attribute_map = {
        'name': 'name',
        'category': 'category',
        'description': 'description',
        'unit': 'unit',
        'channel_type': 'channelType'
    }

    def __init__(self, name=None, category=None, description=None, unit=None, channel_type=None, local_vars_configuration=None):  # noqa: E501
        """ChannelTypeExcludingIdDeviceTypeId - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._name = None
        self._category = None
        self._description = None
        self._unit = None
        self._channel_type = None
        self.discriminator = None

        self.name = name
        if category is not None:
            self.category = category
        if description is not None:
            self.description = description
        if unit is not None:
            self.unit = unit
        self.channel_type = channel_type

    @property
    def name(self):
        """Gets the name of this ChannelTypeExcludingIdDeviceTypeId.  # noqa: E501

        ChannelType name  # noqa: E501

        :return: The name of this ChannelTypeExcludingIdDeviceTypeId.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this ChannelTypeExcludingIdDeviceTypeId.

        ChannelType name  # noqa: E501

        :param name: The name of this ChannelTypeExcludingIdDeviceTypeId.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and name is None:  # noqa: E501
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def category(self):
        """Gets the category of this ChannelTypeExcludingIdDeviceTypeId.  # noqa: E501

        ChannelType category  # noqa: E501

        :return: The category of this ChannelTypeExcludingIdDeviceTypeId.  # noqa: E501
        :rtype: str
        """
        return self._category

    @category.setter
    def category(self, category):
        """Sets the category of this ChannelTypeExcludingIdDeviceTypeId.

        ChannelType category  # noqa: E501

        :param category: The category of this ChannelTypeExcludingIdDeviceTypeId.  # noqa: E501
        :type: str
        """

        self._category = category

    @property
    def description(self):
        """Gets the description of this ChannelTypeExcludingIdDeviceTypeId.  # noqa: E501

        ChannelType description  # noqa: E501

        :return: The description of this ChannelTypeExcludingIdDeviceTypeId.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this ChannelTypeExcludingIdDeviceTypeId.

        ChannelType description  # noqa: E501

        :param description: The description of this ChannelTypeExcludingIdDeviceTypeId.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def unit(self):
        """Gets the unit of this ChannelTypeExcludingIdDeviceTypeId.  # noqa: E501

        Unit of measurement  # noqa: E501

        :return: The unit of this ChannelTypeExcludingIdDeviceTypeId.  # noqa: E501
        :rtype: str
        """
        return self._unit

    @unit.setter
    def unit(self, unit):
        """Sets the unit of this ChannelTypeExcludingIdDeviceTypeId.

        Unit of measurement  # noqa: E501

        :param unit: The unit of this ChannelTypeExcludingIdDeviceTypeId.  # noqa: E501
        :type: str
        """

        self._unit = unit

    @property
    def channel_type(self):
        """Gets the channel_type of this ChannelTypeExcludingIdDeviceTypeId.  # noqa: E501

        Type of data: UNDEFINED / SPOT_VALUE / COUNTER / TEXT  # noqa: E501

        :return: The channel_type of this ChannelTypeExcludingIdDeviceTypeId.  # noqa: E501
        :rtype: str
        """
        return self._channel_type

    @channel_type.setter
    def channel_type(self, channel_type):
        """Sets the channel_type of this ChannelTypeExcludingIdDeviceTypeId.

        Type of data: UNDEFINED / SPOT_VALUE / COUNTER / TEXT  # noqa: E501

        :param channel_type: The channel_type of this ChannelTypeExcludingIdDeviceTypeId.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and channel_type is None:  # noqa: E501
            raise ValueError("Invalid value for `channel_type`, must not be `None`")  # noqa: E501

        self._channel_type = channel_type

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
        if not isinstance(other, ChannelTypeExcludingIdDeviceTypeId):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ChannelTypeExcludingIdDeviceTypeId):
            return True

        return self.to_dict() != other.to_dict()
