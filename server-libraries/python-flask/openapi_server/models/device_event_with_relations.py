# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server.models.channel_with_relations import ChannelWithRelations
from openapi_server.models.device_with_relations import DeviceWithRelations
from openapi_server.models.event_rule_with_relations import EventRuleWithRelations
from openapi_server import util

from openapi_server.models.channel_with_relations import ChannelWithRelations  # noqa: E501
from openapi_server.models.device_with_relations import DeviceWithRelations  # noqa: E501
from openapi_server.models.event_rule_with_relations import EventRuleWithRelations  # noqa: E501

class DeviceEventWithRelations(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, id=None, device_id=None, channel_id=None, event_rule_id=None, severity=None, description=None, resolved=None, viewed_by=None, timestamp=None, resolution_timestamp=None, device=None, channel=None, event_rule=None):  # noqa: E501
        """DeviceEventWithRelations - a model defined in OpenAPI

        :param id: The id of this DeviceEventWithRelations.  # noqa: E501
        :type id: float
        :param device_id: The device_id of this DeviceEventWithRelations.  # noqa: E501
        :type device_id: float
        :param channel_id: The channel_id of this DeviceEventWithRelations.  # noqa: E501
        :type channel_id: float
        :param event_rule_id: The event_rule_id of this DeviceEventWithRelations.  # noqa: E501
        :type event_rule_id: float
        :param severity: The severity of this DeviceEventWithRelations.  # noqa: E501
        :type severity: str
        :param description: The description of this DeviceEventWithRelations.  # noqa: E501
        :type description: str
        :param resolved: The resolved of this DeviceEventWithRelations.  # noqa: E501
        :type resolved: bool
        :param viewed_by: The viewed_by of this DeviceEventWithRelations.  # noqa: E501
        :type viewed_by: str
        :param timestamp: The timestamp of this DeviceEventWithRelations.  # noqa: E501
        :type timestamp: datetime
        :param resolution_timestamp: The resolution_timestamp of this DeviceEventWithRelations.  # noqa: E501
        :type resolution_timestamp: datetime
        :param device: The device of this DeviceEventWithRelations.  # noqa: E501
        :type device: DeviceWithRelations
        :param channel: The channel of this DeviceEventWithRelations.  # noqa: E501
        :type channel: ChannelWithRelations
        :param event_rule: The event_rule of this DeviceEventWithRelations.  # noqa: E501
        :type event_rule: EventRuleWithRelations
        """
        self.openapi_types = {
            'id': float,
            'device_id': float,
            'channel_id': float,
            'event_rule_id': float,
            'severity': str,
            'description': str,
            'resolved': bool,
            'viewed_by': str,
            'timestamp': datetime,
            'resolution_timestamp': datetime,
            'device': DeviceWithRelations,
            'channel': ChannelWithRelations,
            'event_rule': EventRuleWithRelations
        }

        self.attribute_map = {
            'id': 'id',
            'device_id': 'deviceId',
            'channel_id': 'channelId',
            'event_rule_id': 'eventRuleId',
            'severity': 'severity',
            'description': 'description',
            'resolved': 'resolved',
            'viewed_by': 'viewedBy',
            'timestamp': 'timestamp',
            'resolution_timestamp': 'resolutionTimestamp',
            'device': 'device',
            'channel': 'channel',
            'event_rule': 'eventRule'
        }

        self._id = id
        self._device_id = device_id
        self._channel_id = channel_id
        self._event_rule_id = event_rule_id
        self._severity = severity
        self._description = description
        self._resolved = resolved
        self._viewed_by = viewed_by
        self._timestamp = timestamp
        self._resolution_timestamp = resolution_timestamp
        self._device = device
        self._channel = channel
        self._event_rule = event_rule

    @classmethod
    def from_dict(cls, dikt) -> 'DeviceEventWithRelations':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The DeviceEventWithRelations of this DeviceEventWithRelations.  # noqa: E501
        :rtype: DeviceEventWithRelations
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self):
        """Gets the id of this DeviceEventWithRelations.

        Automatically generated ID  # noqa: E501

        :return: The id of this DeviceEventWithRelations.
        :rtype: float
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this DeviceEventWithRelations.

        Automatically generated ID  # noqa: E501

        :param id: The id of this DeviceEventWithRelations.
        :type id: float
        """

        self._id = id

    @property
    def device_id(self):
        """Gets the device_id of this DeviceEventWithRelations.

        ID of Device associated with Event  # noqa: E501

        :return: The device_id of this DeviceEventWithRelations.
        :rtype: float
        """
        return self._device_id

    @device_id.setter
    def device_id(self, device_id):
        """Sets the device_id of this DeviceEventWithRelations.

        ID of Device associated with Event  # noqa: E501

        :param device_id: The device_id of this DeviceEventWithRelations.
        :type device_id: float
        """
        if device_id is None:
            raise ValueError("Invalid value for `device_id`, must not be `None`")  # noqa: E501

        self._device_id = device_id

    @property
    def channel_id(self):
        """Gets the channel_id of this DeviceEventWithRelations.

        ID of Device associated with Event  # noqa: E501

        :return: The channel_id of this DeviceEventWithRelations.
        :rtype: float
        """
        return self._channel_id

    @channel_id.setter
    def channel_id(self, channel_id):
        """Sets the channel_id of this DeviceEventWithRelations.

        ID of Device associated with Event  # noqa: E501

        :param channel_id: The channel_id of this DeviceEventWithRelations.
        :type channel_id: float
        """
        if channel_id is None:
            raise ValueError("Invalid value for `channel_id`, must not be `None`")  # noqa: E501

        self._channel_id = channel_id

    @property
    def event_rule_id(self):
        """Gets the event_rule_id of this DeviceEventWithRelations.

        ID of EventRule triggered  # noqa: E501

        :return: The event_rule_id of this DeviceEventWithRelations.
        :rtype: float
        """
        return self._event_rule_id

    @event_rule_id.setter
    def event_rule_id(self, event_rule_id):
        """Sets the event_rule_id of this DeviceEventWithRelations.

        ID of EventRule triggered  # noqa: E501

        :param event_rule_id: The event_rule_id of this DeviceEventWithRelations.
        :type event_rule_id: float
        """
        if event_rule_id is None:
            raise ValueError("Invalid value for `event_rule_id`, must not be `None`")  # noqa: E501

        self._event_rule_id = event_rule_id

    @property
    def severity(self):
        """Gets the severity of this DeviceEventWithRelations.

        Event severity - Can be  LOW / MEDIUM / HIGH  # noqa: E501

        :return: The severity of this DeviceEventWithRelations.
        :rtype: str
        """
        return self._severity

    @severity.setter
    def severity(self, severity):
        """Sets the severity of this DeviceEventWithRelations.

        Event severity - Can be  LOW / MEDIUM / HIGH  # noqa: E501

        :param severity: The severity of this DeviceEventWithRelations.
        :type severity: str
        """
        if severity is None:
            raise ValueError("Invalid value for `severity`, must not be `None`")  # noqa: E501

        self._severity = severity

    @property
    def description(self):
        """Gets the description of this DeviceEventWithRelations.

        Event description  # noqa: E501

        :return: The description of this DeviceEventWithRelations.
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this DeviceEventWithRelations.

        Event description  # noqa: E501

        :param description: The description of this DeviceEventWithRelations.
        :type description: str
        """

        self._description = description

    @property
    def resolved(self):
        """Gets the resolved of this DeviceEventWithRelations.

        Set to true if Event has been resolved  # noqa: E501

        :return: The resolved of this DeviceEventWithRelations.
        :rtype: bool
        """
        return self._resolved

    @resolved.setter
    def resolved(self, resolved):
        """Sets the resolved of this DeviceEventWithRelations.

        Set to true if Event has been resolved  # noqa: E501

        :param resolved: The resolved of this DeviceEventWithRelations.
        :type resolved: bool
        """
        if resolved is None:
            raise ValueError("Invalid value for `resolved`, must not be `None`")  # noqa: E501

        self._resolved = resolved

    @property
    def viewed_by(self):
        """Gets the viewed_by of this DeviceEventWithRelations.

        Set to true if Event has been resolved  # noqa: E501

        :return: The viewed_by of this DeviceEventWithRelations.
        :rtype: str
        """
        return self._viewed_by

    @viewed_by.setter
    def viewed_by(self, viewed_by):
        """Sets the viewed_by of this DeviceEventWithRelations.

        Set to true if Event has been resolved  # noqa: E501

        :param viewed_by: The viewed_by of this DeviceEventWithRelations.
        :type viewed_by: str
        """
        if viewed_by is None:
            raise ValueError("Invalid value for `viewed_by`, must not be `None`")  # noqa: E501

        self._viewed_by = viewed_by

    @property
    def timestamp(self):
        """Gets the timestamp of this DeviceEventWithRelations.

        Event creation timestamp  # noqa: E501

        :return: The timestamp of this DeviceEventWithRelations.
        :rtype: datetime
        """
        return self._timestamp

    @timestamp.setter
    def timestamp(self, timestamp):
        """Sets the timestamp of this DeviceEventWithRelations.

        Event creation timestamp  # noqa: E501

        :param timestamp: The timestamp of this DeviceEventWithRelations.
        :type timestamp: datetime
        """
        if timestamp is None:
            raise ValueError("Invalid value for `timestamp`, must not be `None`")  # noqa: E501

        self._timestamp = timestamp

    @property
    def resolution_timestamp(self):
        """Gets the resolution_timestamp of this DeviceEventWithRelations.

        Event resolution timestamp  # noqa: E501

        :return: The resolution_timestamp of this DeviceEventWithRelations.
        :rtype: datetime
        """
        return self._resolution_timestamp

    @resolution_timestamp.setter
    def resolution_timestamp(self, resolution_timestamp):
        """Sets the resolution_timestamp of this DeviceEventWithRelations.

        Event resolution timestamp  # noqa: E501

        :param resolution_timestamp: The resolution_timestamp of this DeviceEventWithRelations.
        :type resolution_timestamp: datetime
        """

        self._resolution_timestamp = resolution_timestamp

    @property
    def device(self):
        """Gets the device of this DeviceEventWithRelations.


        :return: The device of this DeviceEventWithRelations.
        :rtype: DeviceWithRelations
        """
        return self._device

    @device.setter
    def device(self, device):
        """Sets the device of this DeviceEventWithRelations.


        :param device: The device of this DeviceEventWithRelations.
        :type device: DeviceWithRelations
        """

        self._device = device

    @property
    def channel(self):
        """Gets the channel of this DeviceEventWithRelations.


        :return: The channel of this DeviceEventWithRelations.
        :rtype: ChannelWithRelations
        """
        return self._channel

    @channel.setter
    def channel(self, channel):
        """Sets the channel of this DeviceEventWithRelations.


        :param channel: The channel of this DeviceEventWithRelations.
        :type channel: ChannelWithRelations
        """

        self._channel = channel

    @property
    def event_rule(self):
        """Gets the event_rule of this DeviceEventWithRelations.


        :return: The event_rule of this DeviceEventWithRelations.
        :rtype: EventRuleWithRelations
        """
        return self._event_rule

    @event_rule.setter
    def event_rule(self, event_rule):
        """Sets the event_rule of this DeviceEventWithRelations.


        :param event_rule: The event_rule of this DeviceEventWithRelations.
        :type event_rule: EventRuleWithRelations
        """

        self._event_rule = event_rule
