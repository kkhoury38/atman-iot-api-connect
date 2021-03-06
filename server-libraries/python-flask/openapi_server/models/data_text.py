# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server import util


class DataText(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, id=None, period=None, measurement=None, timestamp=None, channel_id=None):  # noqa: E501
        """DataText - a model defined in OpenAPI

        :param id: The id of this DataText.  # noqa: E501
        :type id: float
        :param period: The period of this DataText.  # noqa: E501
        :type period: float
        :param measurement: The measurement of this DataText.  # noqa: E501
        :type measurement: str
        :param timestamp: The timestamp of this DataText.  # noqa: E501
        :type timestamp: datetime
        :param channel_id: The channel_id of this DataText.  # noqa: E501
        :type channel_id: float
        """
        self.openapi_types = {
            'id': float,
            'period': float,
            'measurement': str,
            'timestamp': datetime,
            'channel_id': float
        }

        self.attribute_map = {
            'id': 'id',
            'period': 'period',
            'measurement': 'measurement',
            'timestamp': 'timestamp',
            'channel_id': 'channelId'
        }

        self._id = id
        self._period = period
        self._measurement = measurement
        self._timestamp = timestamp
        self._channel_id = channel_id

    @classmethod
    def from_dict(cls, dikt) -> 'DataText':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The DataText of this DataText.  # noqa: E501
        :rtype: DataText
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self):
        """Gets the id of this DataText.

        Automatically generated ID  # noqa: E501

        :return: The id of this DataText.
        :rtype: float
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this DataText.

        Automatically generated ID  # noqa: E501

        :param id: The id of this DataText.
        :type id: float
        """

        self._id = id

    @property
    def period(self):
        """Gets the period of this DataText.

        Recording period - seconds  # noqa: E501

        :return: The period of this DataText.
        :rtype: float
        """
        return self._period

    @period.setter
    def period(self, period):
        """Sets the period of this DataText.

        Recording period - seconds  # noqa: E501

        :param period: The period of this DataText.
        :type period: float
        """
        if period is None:
            raise ValueError("Invalid value for `period`, must not be `None`")  # noqa: E501

        self._period = period

    @property
    def measurement(self):
        """Gets the measurement of this DataText.

        Recorded data  # noqa: E501

        :return: The measurement of this DataText.
        :rtype: str
        """
        return self._measurement

    @measurement.setter
    def measurement(self, measurement):
        """Sets the measurement of this DataText.

        Recorded data  # noqa: E501

        :param measurement: The measurement of this DataText.
        :type measurement: str
        """
        if measurement is None:
            raise ValueError("Invalid value for `measurement`, must not be `None`")  # noqa: E501

        self._measurement = measurement

    @property
    def timestamp(self):
        """Gets the timestamp of this DataText.

        Timestamp  # noqa: E501

        :return: The timestamp of this DataText.
        :rtype: datetime
        """
        return self._timestamp

    @timestamp.setter
    def timestamp(self, timestamp):
        """Sets the timestamp of this DataText.

        Timestamp  # noqa: E501

        :param timestamp: The timestamp of this DataText.
        :type timestamp: datetime
        """
        if timestamp is None:
            raise ValueError("Invalid value for `timestamp`, must not be `None`")  # noqa: E501

        self._timestamp = timestamp

    @property
    def channel_id(self):
        """Gets the channel_id of this DataText.

        ID of Channel that DataFloat belongs to  # noqa: E501

        :return: The channel_id of this DataText.
        :rtype: float
        """
        return self._channel_id

    @channel_id.setter
    def channel_id(self, channel_id):
        """Sets the channel_id of this DataText.

        ID of Channel that DataFloat belongs to  # noqa: E501

        :param channel_id: The channel_id of this DataText.
        :type channel_id: float
        """
        if channel_id is None:
            raise ValueError("Invalid value for `channel_id`, must not be `None`")  # noqa: E501

        self._channel_id = channel_id
