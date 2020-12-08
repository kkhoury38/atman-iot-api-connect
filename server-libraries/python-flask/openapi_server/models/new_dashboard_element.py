# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server import util


class NewDashboardElement(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, asset_id=None, user_id=None, device_category=None, channel_category=None, element_type=None, location=None, time_window=None, operation=None, group_by=None, title=None, x_label=None, y_label=None):  # noqa: E501
        """NewDashboardElement - a model defined in OpenAPI

        :param asset_id: The asset_id of this NewDashboardElement.  # noqa: E501
        :type asset_id: float
        :param user_id: The user_id of this NewDashboardElement.  # noqa: E501
        :type user_id: float
        :param device_category: The device_category of this NewDashboardElement.  # noqa: E501
        :type device_category: str
        :param channel_category: The channel_category of this NewDashboardElement.  # noqa: E501
        :type channel_category: str
        :param element_type: The element_type of this NewDashboardElement.  # noqa: E501
        :type element_type: str
        :param location: The location of this NewDashboardElement.  # noqa: E501
        :type location: str
        :param time_window: The time_window of this NewDashboardElement.  # noqa: E501
        :type time_window: float
        :param operation: The operation of this NewDashboardElement.  # noqa: E501
        :type operation: str
        :param group_by: The group_by of this NewDashboardElement.  # noqa: E501
        :type group_by: str
        :param title: The title of this NewDashboardElement.  # noqa: E501
        :type title: str
        :param x_label: The x_label of this NewDashboardElement.  # noqa: E501
        :type x_label: str
        :param y_label: The y_label of this NewDashboardElement.  # noqa: E501
        :type y_label: str
        """
        self.openapi_types = {
            'asset_id': float,
            'user_id': float,
            'device_category': str,
            'channel_category': str,
            'element_type': str,
            'location': str,
            'time_window': float,
            'operation': str,
            'group_by': str,
            'title': str,
            'x_label': str,
            'y_label': str
        }

        self.attribute_map = {
            'asset_id': 'assetId',
            'user_id': 'userId',
            'device_category': 'deviceCategory',
            'channel_category': 'channelCategory',
            'element_type': 'elementType',
            'location': 'location',
            'time_window': 'timeWindow',
            'operation': 'operation',
            'group_by': 'groupBy',
            'title': 'title',
            'x_label': 'xLabel',
            'y_label': 'yLabel'
        }

        self._asset_id = asset_id
        self._user_id = user_id
        self._device_category = device_category
        self._channel_category = channel_category
        self._element_type = element_type
        self._location = location
        self._time_window = time_window
        self._operation = operation
        self._group_by = group_by
        self._title = title
        self._x_label = x_label
        self._y_label = y_label

    @classmethod
    def from_dict(cls, dikt) -> 'NewDashboardElement':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The NewDashboardElement of this NewDashboardElement.  # noqa: E501
        :rtype: NewDashboardElement
        """
        return util.deserialize_model(dikt, cls)

    @property
    def asset_id(self):
        """Gets the asset_id of this NewDashboardElement.

        ID of Asset that Dashboard Element belongs to  # noqa: E501

        :return: The asset_id of this NewDashboardElement.
        :rtype: float
        """
        return self._asset_id

    @asset_id.setter
    def asset_id(self, asset_id):
        """Sets the asset_id of this NewDashboardElement.

        ID of Asset that Dashboard Element belongs to  # noqa: E501

        :param asset_id: The asset_id of this NewDashboardElement.
        :type asset_id: float
        """
        if asset_id is None:
            raise ValueError("Invalid value for `asset_id`, must not be `None`")  # noqa: E501

        self._asset_id = asset_id

    @property
    def user_id(self):
        """Gets the user_id of this NewDashboardElement.

        ID of User that Dashboard Element belongs to  # noqa: E501

        :return: The user_id of this NewDashboardElement.
        :rtype: float
        """
        return self._user_id

    @user_id.setter
    def user_id(self, user_id):
        """Sets the user_id of this NewDashboardElement.

        ID of User that Dashboard Element belongs to  # noqa: E501

        :param user_id: The user_id of this NewDashboardElement.
        :type user_id: float
        """
        if user_id is None:
            raise ValueError("Invalid value for `user_id`, must not be `None`")  # noqa: E501

        self._user_id = user_id

    @property
    def device_category(self):
        """Gets the device_category of this NewDashboardElement.

        Device Category  # noqa: E501

        :return: The device_category of this NewDashboardElement.
        :rtype: str
        """
        return self._device_category

    @device_category.setter
    def device_category(self, device_category):
        """Sets the device_category of this NewDashboardElement.

        Device Category  # noqa: E501

        :param device_category: The device_category of this NewDashboardElement.
        :type device_category: str
        """
        if device_category is None:
            raise ValueError("Invalid value for `device_category`, must not be `None`")  # noqa: E501

        self._device_category = device_category

    @property
    def channel_category(self):
        """Gets the channel_category of this NewDashboardElement.

        Channel Category  # noqa: E501

        :return: The channel_category of this NewDashboardElement.
        :rtype: str
        """
        return self._channel_category

    @channel_category.setter
    def channel_category(self, channel_category):
        """Sets the channel_category of this NewDashboardElement.

        Channel Category  # noqa: E501

        :param channel_category: The channel_category of this NewDashboardElement.
        :type channel_category: str
        """
        if channel_category is None:
            raise ValueError("Invalid value for `channel_category`, must not be `None`")  # noqa: E501

        self._channel_category = channel_category

    @property
    def element_type(self):
        """Gets the element_type of this NewDashboardElement.

        Element Type  # noqa: E501

        :return: The element_type of this NewDashboardElement.
        :rtype: str
        """
        return self._element_type

    @element_type.setter
    def element_type(self, element_type):
        """Sets the element_type of this NewDashboardElement.

        Element Type  # noqa: E501

        :param element_type: The element_type of this NewDashboardElement.
        :type element_type: str
        """
        if element_type is None:
            raise ValueError("Invalid value for `element_type`, must not be `None`")  # noqa: E501

        self._element_type = element_type

    @property
    def location(self):
        """Gets the location of this NewDashboardElement.

        Element Location: mainDashboard / assetDashboard  # noqa: E501

        :return: The location of this NewDashboardElement.
        :rtype: str
        """
        return self._location

    @location.setter
    def location(self, location):
        """Sets the location of this NewDashboardElement.

        Element Location: mainDashboard / assetDashboard  # noqa: E501

        :param location: The location of this NewDashboardElement.
        :type location: str
        """
        if location is None:
            raise ValueError("Invalid value for `location`, must not be `None`")  # noqa: E501

        self._location = location

    @property
    def time_window(self):
        """Gets the time_window of this NewDashboardElement.

        Time Window  # noqa: E501

        :return: The time_window of this NewDashboardElement.
        :rtype: float
        """
        return self._time_window

    @time_window.setter
    def time_window(self, time_window):
        """Sets the time_window of this NewDashboardElement.

        Time Window  # noqa: E501

        :param time_window: The time_window of this NewDashboardElement.
        :type time_window: float
        """
        if time_window is None:
            raise ValueError("Invalid value for `time_window`, must not be `None`")  # noqa: E501

        self._time_window = time_window

    @property
    def operation(self):
        """Gets the operation of this NewDashboardElement.

        Data Operation  # noqa: E501

        :return: The operation of this NewDashboardElement.
        :rtype: str
        """
        return self._operation

    @operation.setter
    def operation(self, operation):
        """Sets the operation of this NewDashboardElement.

        Data Operation  # noqa: E501

        :param operation: The operation of this NewDashboardElement.
        :type operation: str
        """
        if operation is None:
            raise ValueError("Invalid value for `operation`, must not be `None`")  # noqa: E501

        self._operation = operation

    @property
    def group_by(self):
        """Gets the group_by of this NewDashboardElement.

        Data group by  # noqa: E501

        :return: The group_by of this NewDashboardElement.
        :rtype: str
        """
        return self._group_by

    @group_by.setter
    def group_by(self, group_by):
        """Sets the group_by of this NewDashboardElement.

        Data group by  # noqa: E501

        :param group_by: The group_by of this NewDashboardElement.
        :type group_by: str
        """
        if group_by is None:
            raise ValueError("Invalid value for `group_by`, must not be `None`")  # noqa: E501

        self._group_by = group_by

    @property
    def title(self):
        """Gets the title of this NewDashboardElement.

        Element Title  # noqa: E501

        :return: The title of this NewDashboardElement.
        :rtype: str
        """
        return self._title

    @title.setter
    def title(self, title):
        """Sets the title of this NewDashboardElement.

        Element Title  # noqa: E501

        :param title: The title of this NewDashboardElement.
        :type title: str
        """

        self._title = title

    @property
    def x_label(self):
        """Gets the x_label of this NewDashboardElement.

        Element X Label  # noqa: E501

        :return: The x_label of this NewDashboardElement.
        :rtype: str
        """
        return self._x_label

    @x_label.setter
    def x_label(self, x_label):
        """Sets the x_label of this NewDashboardElement.

        Element X Label  # noqa: E501

        :param x_label: The x_label of this NewDashboardElement.
        :type x_label: str
        """

        self._x_label = x_label

    @property
    def y_label(self):
        """Gets the y_label of this NewDashboardElement.

        Element Y Label  # noqa: E501

        :return: The y_label of this NewDashboardElement.
        :rtype: str
        """
        return self._y_label

    @y_label.setter
    def y_label(self, y_label):
        """Sets the y_label of this NewDashboardElement.

        Element Y Label  # noqa: E501

        :param y_label: The y_label of this NewDashboardElement.
        :type y_label: str
        """

        self._y_label = y_label
