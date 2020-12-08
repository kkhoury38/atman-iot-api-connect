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


class EventRuleSubscription(object):
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
        'execution_period': 'float',
        'last_exec_timestamp': 'str',
        'asset_id': 'float',
        'event_rule_id': 'float',
        'rule_activated': 'bool'
    }

    attribute_map = {
        'id': 'id',
        'execution_period': 'executionPeriod',
        'last_exec_timestamp': 'lastExecTimestamp',
        'asset_id': 'assetId',
        'event_rule_id': 'eventRuleId',
        'rule_activated': 'ruleActivated'
    }

    def __init__(self, id=None, execution_period=None, last_exec_timestamp=None, asset_id=None, event_rule_id=None, rule_activated=None, local_vars_configuration=None):  # noqa: E501
        """EventRuleSubscription - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._id = None
        self._execution_period = None
        self._last_exec_timestamp = None
        self._asset_id = None
        self._event_rule_id = None
        self._rule_activated = None
        self.discriminator = None

        if id is not None:
            self.id = id
        self.execution_period = execution_period
        if last_exec_timestamp is not None:
            self.last_exec_timestamp = last_exec_timestamp
        self.asset_id = asset_id
        self.event_rule_id = event_rule_id
        self.rule_activated = rule_activated

    @property
    def id(self):
        """Gets the id of this EventRuleSubscription.  # noqa: E501

        Automatically generated ID  # noqa: E501

        :return: The id of this EventRuleSubscription.  # noqa: E501
        :rtype: float
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this EventRuleSubscription.

        Automatically generated ID  # noqa: E501

        :param id: The id of this EventRuleSubscription.  # noqa: E501
        :type: float
        """

        self._id = id

    @property
    def execution_period(self):
        """Gets the execution_period of this EventRuleSubscription.  # noqa: E501

        EventRule execution period - seconds  # noqa: E501

        :return: The execution_period of this EventRuleSubscription.  # noqa: E501
        :rtype: float
        """
        return self._execution_period

    @execution_period.setter
    def execution_period(self, execution_period):
        """Sets the execution_period of this EventRuleSubscription.

        EventRule execution period - seconds  # noqa: E501

        :param execution_period: The execution_period of this EventRuleSubscription.  # noqa: E501
        :type: float
        """
        if self.local_vars_configuration.client_side_validation and execution_period is None:  # noqa: E501
            raise ValueError("Invalid value for `execution_period`, must not be `None`")  # noqa: E501

        self._execution_period = execution_period

    @property
    def last_exec_timestamp(self):
        """Gets the last_exec_timestamp of this EventRuleSubscription.  # noqa: E501

        Last execution timestamp  # noqa: E501

        :return: The last_exec_timestamp of this EventRuleSubscription.  # noqa: E501
        :rtype: str
        """
        return self._last_exec_timestamp

    @last_exec_timestamp.setter
    def last_exec_timestamp(self, last_exec_timestamp):
        """Sets the last_exec_timestamp of this EventRuleSubscription.

        Last execution timestamp  # noqa: E501

        :param last_exec_timestamp: The last_exec_timestamp of this EventRuleSubscription.  # noqa: E501
        :type: str
        """

        self._last_exec_timestamp = last_exec_timestamp

    @property
    def asset_id(self):
        """Gets the asset_id of this EventRuleSubscription.  # noqa: E501

        ID of Asset subscribed to EventRule  # noqa: E501

        :return: The asset_id of this EventRuleSubscription.  # noqa: E501
        :rtype: float
        """
        return self._asset_id

    @asset_id.setter
    def asset_id(self, asset_id):
        """Sets the asset_id of this EventRuleSubscription.

        ID of Asset subscribed to EventRule  # noqa: E501

        :param asset_id: The asset_id of this EventRuleSubscription.  # noqa: E501
        :type: float
        """
        if self.local_vars_configuration.client_side_validation and asset_id is None:  # noqa: E501
            raise ValueError("Invalid value for `asset_id`, must not be `None`")  # noqa: E501

        self._asset_id = asset_id

    @property
    def event_rule_id(self):
        """Gets the event_rule_id of this EventRuleSubscription.  # noqa: E501

        ID of associated EventRule  # noqa: E501

        :return: The event_rule_id of this EventRuleSubscription.  # noqa: E501
        :rtype: float
        """
        return self._event_rule_id

    @event_rule_id.setter
    def event_rule_id(self, event_rule_id):
        """Sets the event_rule_id of this EventRuleSubscription.

        ID of associated EventRule  # noqa: E501

        :param event_rule_id: The event_rule_id of this EventRuleSubscription.  # noqa: E501
        :type: float
        """
        if self.local_vars_configuration.client_side_validation and event_rule_id is None:  # noqa: E501
            raise ValueError("Invalid value for `event_rule_id`, must not be `None`")  # noqa: E501

        self._event_rule_id = event_rule_id

    @property
    def rule_activated(self):
        """Gets the rule_activated of this EventRuleSubscription.  # noqa: E501

        Is set to true when EventRule has been activated  # noqa: E501

        :return: The rule_activated of this EventRuleSubscription.  # noqa: E501
        :rtype: bool
        """
        return self._rule_activated

    @rule_activated.setter
    def rule_activated(self, rule_activated):
        """Sets the rule_activated of this EventRuleSubscription.

        Is set to true when EventRule has been activated  # noqa: E501

        :param rule_activated: The rule_activated of this EventRuleSubscription.  # noqa: E501
        :type: bool
        """
        if self.local_vars_configuration.client_side_validation and rule_activated is None:  # noqa: E501
            raise ValueError("Invalid value for `rule_activated`, must not be `None`")  # noqa: E501

        self._rule_activated = rule_activated

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
        if not isinstance(other, EventRuleSubscription):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, EventRuleSubscription):
            return True

        return self.to_dict() != other.to_dict()
