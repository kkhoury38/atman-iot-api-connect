# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server import util


class DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, id=None):  # noqa: E501
        """DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId - a model defined in OpenAPI

        :param id: The id of this DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId.  # noqa: E501
        :type id: float
        """
        self.openapi_types = {
            'id': float
        }

        self.attribute_map = {
            'id': 'id'
        }

        self._id = id

    @classmethod
    def from_dict(cls, dikt) -> 'DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The DeviceExcluding_description-serialNo-dataLoggerId-deviceTypeId_ of this DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId.  # noqa: E501
        :rtype: DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self):
        """Gets the id of this DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId.

        Automatically generated ID  # noqa: E501

        :return: The id of this DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId.
        :rtype: float
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId.

        Automatically generated ID  # noqa: E501

        :param id: The id of this DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId.
        :type id: float
        """

        self._id = id
