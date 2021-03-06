# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server.models.event import Event
from openapi_server.models.event_related_device import EventRelatedDevice
from openapi_server import util

from openapi_server.models.event import Event  # noqa: E501
from openapi_server.models.event_related_device import EventRelatedDevice  # noqa: E501

class ResponseEventAssetEvents(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, event=None, event_related_device=None):  # noqa: E501
        """ResponseEventAssetEvents - a model defined in OpenAPI

        :param event: The event of this ResponseEventAssetEvents.  # noqa: E501
        :type event: Event
        :param event_related_device: The event_related_device of this ResponseEventAssetEvents.  # noqa: E501
        :type event_related_device: List[EventRelatedDevice]
        """
        self.openapi_types = {
            'event': Event,
            'event_related_device': List[EventRelatedDevice]
        }

        self.attribute_map = {
            'event': 'event',
            'event_related_device': 'eventRelatedDevice'
        }

        self._event = event
        self._event_related_device = event_related_device

    @classmethod
    def from_dict(cls, dikt) -> 'ResponseEventAssetEvents':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The ResponseEventAssetEvents of this ResponseEventAssetEvents.  # noqa: E501
        :rtype: ResponseEventAssetEvents
        """
        return util.deserialize_model(dikt, cls)

    @property
    def event(self):
        """Gets the event of this ResponseEventAssetEvents.


        :return: The event of this ResponseEventAssetEvents.
        :rtype: Event
        """
        return self._event

    @event.setter
    def event(self, event):
        """Sets the event of this ResponseEventAssetEvents.


        :param event: The event of this ResponseEventAssetEvents.
        :type event: Event
        """
        if event is None:
            raise ValueError("Invalid value for `event`, must not be `None`")  # noqa: E501

        self._event = event

    @property
    def event_related_device(self):
        """Gets the event_related_device of this ResponseEventAssetEvents.


        :return: The event_related_device of this ResponseEventAssetEvents.
        :rtype: List[EventRelatedDevice]
        """
        return self._event_related_device

    @event_related_device.setter
    def event_related_device(self, event_related_device):
        """Sets the event_related_device of this ResponseEventAssetEvents.


        :param event_related_device: The event_related_device of this ResponseEventAssetEvents.
        :type event_related_device: List[EventRelatedDevice]
        """
        if event_related_device is None:
            raise ValueError("Invalid value for `event_related_device`, must not be `None`")  # noqa: E501

        self._event_related_device = event_related_device
