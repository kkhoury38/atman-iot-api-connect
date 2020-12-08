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


class ResponseEventAssetEvents(object):
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
        'event': 'Event',
        'event_related_device': 'list[EventRelatedDevice]'
    }

    attribute_map = {
        'event': 'event',
        'event_related_device': 'eventRelatedDevice'
    }

    def __init__(self, event=None, event_related_device=None, local_vars_configuration=None):  # noqa: E501
        """ResponseEventAssetEvents - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._event = None
        self._event_related_device = None
        self.discriminator = None

        self.event = event
        self.event_related_device = event_related_device

    @property
    def event(self):
        """Gets the event of this ResponseEventAssetEvents.  # noqa: E501


        :return: The event of this ResponseEventAssetEvents.  # noqa: E501
        :rtype: Event
        """
        return self._event

    @event.setter
    def event(self, event):
        """Sets the event of this ResponseEventAssetEvents.


        :param event: The event of this ResponseEventAssetEvents.  # noqa: E501
        :type: Event
        """
        if self.local_vars_configuration.client_side_validation and event is None:  # noqa: E501
            raise ValueError("Invalid value for `event`, must not be `None`")  # noqa: E501

        self._event = event

    @property
    def event_related_device(self):
        """Gets the event_related_device of this ResponseEventAssetEvents.  # noqa: E501


        :return: The event_related_device of this ResponseEventAssetEvents.  # noqa: E501
        :rtype: list[EventRelatedDevice]
        """
        return self._event_related_device

    @event_related_device.setter
    def event_related_device(self, event_related_device):
        """Sets the event_related_device of this ResponseEventAssetEvents.


        :param event_related_device: The event_related_device of this ResponseEventAssetEvents.  # noqa: E501
        :type: list[EventRelatedDevice]
        """
        if self.local_vars_configuration.client_side_validation and event_related_device is None:  # noqa: E501
            raise ValueError("Invalid value for `event_related_device`, must not be `None`")  # noqa: E501

        self._event_related_device = event_related_device

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
        if not isinstance(other, ResponseEventAssetEvents):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResponseEventAssetEvents):
            return True

        return self.to_dict() != other.to_dict()
