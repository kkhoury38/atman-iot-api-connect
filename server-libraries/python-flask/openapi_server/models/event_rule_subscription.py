# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server import util


class EventRuleSubscription(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, id=None, execution_period=None, last_exec_timestamp=None, asset_id=None, event_rule_id=None, rule_activated=None):  # noqa: E501
        """EventRuleSubscription - a model defined in OpenAPI

        :param id: The id of this EventRuleSubscription.  # noqa: E501
        :type id: float
        :param execution_period: The execution_period of this EventRuleSubscription.  # noqa: E501
        :type execution_period: float
        :param last_exec_timestamp: The last_exec_timestamp of this EventRuleSubscription.  # noqa: E501
        :type last_exec_timestamp: str
        :param asset_id: The asset_id of this EventRuleSubscription.  # noqa: E501
        :type asset_id: float
        :param event_rule_id: The event_rule_id of this EventRuleSubscription.  # noqa: E501
        :type event_rule_id: float
        :param rule_activated: The rule_activated of this EventRuleSubscription.  # noqa: E501
        :type rule_activated: bool
        """
        self.openapi_types = {
            'id': float,
            'execution_period': float,
            'last_exec_timestamp': str,
            'asset_id': float,
            'event_rule_id': float,
            'rule_activated': bool
        }

        self.attribute_map = {
            'id': 'id',
            'execution_period': 'executionPeriod',
            'last_exec_timestamp': 'lastExecTimestamp',
            'asset_id': 'assetId',
            'event_rule_id': 'eventRuleId',
            'rule_activated': 'ruleActivated'
        }

        self._id = id
        self._execution_period = execution_period
        self._last_exec_timestamp = last_exec_timestamp
        self._asset_id = asset_id
        self._event_rule_id = event_rule_id
        self._rule_activated = rule_activated

    @classmethod
    def from_dict(cls, dikt) -> 'EventRuleSubscription':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The EventRuleSubscription of this EventRuleSubscription.  # noqa: E501
        :rtype: EventRuleSubscription
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self):
        """Gets the id of this EventRuleSubscription.

        Automatically generated ID  # noqa: E501

        :return: The id of this EventRuleSubscription.
        :rtype: float
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this EventRuleSubscription.

        Automatically generated ID  # noqa: E501

        :param id: The id of this EventRuleSubscription.
        :type id: float
        """

        self._id = id

    @property
    def execution_period(self):
        """Gets the execution_period of this EventRuleSubscription.

        EventRule execution period - seconds  # noqa: E501

        :return: The execution_period of this EventRuleSubscription.
        :rtype: float
        """
        return self._execution_period

    @execution_period.setter
    def execution_period(self, execution_period):
        """Sets the execution_period of this EventRuleSubscription.

        EventRule execution period - seconds  # noqa: E501

        :param execution_period: The execution_period of this EventRuleSubscription.
        :type execution_period: float
        """
        if execution_period is None:
            raise ValueError("Invalid value for `execution_period`, must not be `None`")  # noqa: E501

        self._execution_period = execution_period

    @property
    def last_exec_timestamp(self):
        """Gets the last_exec_timestamp of this EventRuleSubscription.

        Last execution timestamp  # noqa: E501

        :return: The last_exec_timestamp of this EventRuleSubscription.
        :rtype: str
        """
        return self._last_exec_timestamp

    @last_exec_timestamp.setter
    def last_exec_timestamp(self, last_exec_timestamp):
        """Sets the last_exec_timestamp of this EventRuleSubscription.

        Last execution timestamp  # noqa: E501

        :param last_exec_timestamp: The last_exec_timestamp of this EventRuleSubscription.
        :type last_exec_timestamp: str
        """

        self._last_exec_timestamp = last_exec_timestamp

    @property
    def asset_id(self):
        """Gets the asset_id of this EventRuleSubscription.

        ID of Asset subscribed to EventRule  # noqa: E501

        :return: The asset_id of this EventRuleSubscription.
        :rtype: float
        """
        return self._asset_id

    @asset_id.setter
    def asset_id(self, asset_id):
        """Sets the asset_id of this EventRuleSubscription.

        ID of Asset subscribed to EventRule  # noqa: E501

        :param asset_id: The asset_id of this EventRuleSubscription.
        :type asset_id: float
        """
        if asset_id is None:
            raise ValueError("Invalid value for `asset_id`, must not be `None`")  # noqa: E501

        self._asset_id = asset_id

    @property
    def event_rule_id(self):
        """Gets the event_rule_id of this EventRuleSubscription.

        ID of associated EventRule  # noqa: E501

        :return: The event_rule_id of this EventRuleSubscription.
        :rtype: float
        """
        return self._event_rule_id

    @event_rule_id.setter
    def event_rule_id(self, event_rule_id):
        """Sets the event_rule_id of this EventRuleSubscription.

        ID of associated EventRule  # noqa: E501

        :param event_rule_id: The event_rule_id of this EventRuleSubscription.
        :type event_rule_id: float
        """
        if event_rule_id is None:
            raise ValueError("Invalid value for `event_rule_id`, must not be `None`")  # noqa: E501

        self._event_rule_id = event_rule_id

    @property
    def rule_activated(self):
        """Gets the rule_activated of this EventRuleSubscription.

        Is set to true when EventRule has been activated  # noqa: E501

        :return: The rule_activated of this EventRuleSubscription.
        :rtype: bool
        """
        return self._rule_activated

    @rule_activated.setter
    def rule_activated(self, rule_activated):
        """Sets the rule_activated of this EventRuleSubscription.

        Is set to true when EventRule has been activated  # noqa: E501

        :param rule_activated: The rule_activated of this EventRuleSubscription.
        :type rule_activated: bool
        """
        if rule_activated is None:
            raise ValueError("Invalid value for `rule_activated`, must not be `None`")  # noqa: E501

        self._rule_activated = rule_activated
