# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server.models.dashboard_element import DashboardElement
from openapi_server import util

from openapi_server.models.dashboard_element import DashboardElement  # noqa: E501

class DashboardElementWithScope(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, dashboard_element=None, scope=None):  # noqa: E501
        """DashboardElementWithScope - a model defined in OpenAPI

        :param dashboard_element: The dashboard_element of this DashboardElementWithScope.  # noqa: E501
        :type dashboard_element: DashboardElement
        :param scope: The scope of this DashboardElementWithScope.  # noqa: E501
        :type scope: List[object]
        """
        self.openapi_types = {
            'dashboard_element': DashboardElement,
            'scope': List[object]
        }

        self.attribute_map = {
            'dashboard_element': 'dashboardElement',
            'scope': 'scope'
        }

        self._dashboard_element = dashboard_element
        self._scope = scope

    @classmethod
    def from_dict(cls, dikt) -> 'DashboardElementWithScope':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The DashboardElementWithScope of this DashboardElementWithScope.  # noqa: E501
        :rtype: DashboardElementWithScope
        """
        return util.deserialize_model(dikt, cls)

    @property
    def dashboard_element(self):
        """Gets the dashboard_element of this DashboardElementWithScope.


        :return: The dashboard_element of this DashboardElementWithScope.
        :rtype: DashboardElement
        """
        return self._dashboard_element

    @dashboard_element.setter
    def dashboard_element(self, dashboard_element):
        """Sets the dashboard_element of this DashboardElementWithScope.


        :param dashboard_element: The dashboard_element of this DashboardElementWithScope.
        :type dashboard_element: DashboardElement
        """
        if dashboard_element is None:
            raise ValueError("Invalid value for `dashboard_element`, must not be `None`")  # noqa: E501

        self._dashboard_element = dashboard_element

    @property
    def scope(self):
        """Gets the scope of this DashboardElementWithScope.


        :return: The scope of this DashboardElementWithScope.
        :rtype: List[object]
        """
        return self._scope

    @scope.setter
    def scope(self, scope):
        """Sets the scope of this DashboardElementWithScope.


        :param scope: The scope of this DashboardElementWithScope.
        :type scope: List[object]
        """
        if scope is None:
            raise ValueError("Invalid value for `scope`, must not be `None`")  # noqa: E501

        self._scope = scope
