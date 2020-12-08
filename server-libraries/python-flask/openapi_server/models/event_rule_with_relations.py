# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server import util


class EventRuleWithRelations(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, id=None, description=None, scope=None, algorithm=None, action=None, action_parameters=None, rule=None, execution_period=None, last_exec_timestamp=None, activated=None, in_progress=None):  # noqa: E501
        """EventRuleWithRelations - a model defined in OpenAPI

        :param id: The id of this EventRuleWithRelations.  # noqa: E501
        :type id: float
        :param description: The description of this EventRuleWithRelations.  # noqa: E501
        :type description: str
        :param scope: The scope of this EventRuleWithRelations.  # noqa: E501
        :type scope: str
        :param algorithm: The algorithm of this EventRuleWithRelations.  # noqa: E501
        :type algorithm: str
        :param action: The action of this EventRuleWithRelations.  # noqa: E501
        :type action: str
        :param action_parameters: The action_parameters of this EventRuleWithRelations.  # noqa: E501
        :type action_parameters: str
        :param rule: The rule of this EventRuleWithRelations.  # noqa: E501
        :type rule: str
        :param execution_period: The execution_period of this EventRuleWithRelations.  # noqa: E501
        :type execution_period: float
        :param last_exec_timestamp: The last_exec_timestamp of this EventRuleWithRelations.  # noqa: E501
        :type last_exec_timestamp: datetime
        :param activated: The activated of this EventRuleWithRelations.  # noqa: E501
        :type activated: bool
        :param in_progress: The in_progress of this EventRuleWithRelations.  # noqa: E501
        :type in_progress: bool
        """
        self.openapi_types = {
            'id': float,
            'description': str,
            'scope': str,
            'algorithm': str,
            'action': str,
            'action_parameters': str,
            'rule': str,
            'execution_period': float,
            'last_exec_timestamp': datetime,
            'activated': bool,
            'in_progress': bool
        }

        self.attribute_map = {
            'id': 'id',
            'description': 'description',
            'scope': 'scope',
            'algorithm': 'algorithm',
            'action': 'action',
            'action_parameters': 'actionParameters',
            'rule': 'rule',
            'execution_period': 'executionPeriod',
            'last_exec_timestamp': 'lastExecTimestamp',
            'activated': 'activated',
            'in_progress': 'inProgress'
        }

        self._id = id
        self._description = description
        self._scope = scope
        self._algorithm = algorithm
        self._action = action
        self._action_parameters = action_parameters
        self._rule = rule
        self._execution_period = execution_period
        self._last_exec_timestamp = last_exec_timestamp
        self._activated = activated
        self._in_progress = in_progress

    @classmethod
    def from_dict(cls, dikt) -> 'EventRuleWithRelations':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The EventRuleWithRelations of this EventRuleWithRelations.  # noqa: E501
        :rtype: EventRuleWithRelations
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self):
        """Gets the id of this EventRuleWithRelations.

        Automatically generated ID  # noqa: E501

        :return: The id of this EventRuleWithRelations.
        :rtype: float
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this EventRuleWithRelations.

        Automatically generated ID  # noqa: E501

        :param id: The id of this EventRuleWithRelations.
        :type id: float
        """

        self._id = id

    @property
    def description(self):
        """Gets the description of this EventRuleWithRelations.

        Rule description  # noqa: E501

        :return: The description of this EventRuleWithRelations.
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this EventRuleWithRelations.

        Rule description  # noqa: E501

        :param description: The description of this EventRuleWithRelations.
        :type description: str
        """

        self._description = description

    @property
    def scope(self):
        """Gets the scope of this EventRuleWithRelations.

        Rule scope  # noqa: E501

        :return: The scope of this EventRuleWithRelations.
        :rtype: str
        """
        return self._scope

    @scope.setter
    def scope(self, scope):
        """Sets the scope of this EventRuleWithRelations.

        Rule scope  # noqa: E501

        :param scope: The scope of this EventRuleWithRelations.
        :type scope: str
        """
        if scope is None:
            raise ValueError("Invalid value for `scope`, must not be `None`")  # noqa: E501

        self._scope = scope

    @property
    def algorithm(self):
        """Gets the algorithm of this EventRuleWithRelations.

        Event Detection Algorithm  # noqa: E501

        :return: The algorithm of this EventRuleWithRelations.
        :rtype: str
        """
        return self._algorithm

    @algorithm.setter
    def algorithm(self, algorithm):
        """Sets the algorithm of this EventRuleWithRelations.

        Event Detection Algorithm  # noqa: E501

        :param algorithm: The algorithm of this EventRuleWithRelations.
        :type algorithm: str
        """

        self._algorithm = algorithm

    @property
    def action(self):
        """Gets the action of this EventRuleWithRelations.

        Rule action  # noqa: E501

        :return: The action of this EventRuleWithRelations.
        :rtype: str
        """
        return self._action

    @action.setter
    def action(self, action):
        """Sets the action of this EventRuleWithRelations.

        Rule action  # noqa: E501

        :param action: The action of this EventRuleWithRelations.
        :type action: str
        """
        if action is None:
            raise ValueError("Invalid value for `action`, must not be `None`")  # noqa: E501

        self._action = action

    @property
    def action_parameters(self):
        """Gets the action_parameters of this EventRuleWithRelations.

        Rule action parameters  # noqa: E501

        :return: The action_parameters of this EventRuleWithRelations.
        :rtype: str
        """
        return self._action_parameters

    @action_parameters.setter
    def action_parameters(self, action_parameters):
        """Sets the action_parameters of this EventRuleWithRelations.

        Rule action parameters  # noqa: E501

        :param action_parameters: The action_parameters of this EventRuleWithRelations.
        :type action_parameters: str
        """

        self._action_parameters = action_parameters

    @property
    def rule(self):
        """Gets the rule of this EventRuleWithRelations.

        JSON Rule  # noqa: E501

        :return: The rule of this EventRuleWithRelations.
        :rtype: str
        """
        return self._rule

    @rule.setter
    def rule(self, rule):
        """Sets the rule of this EventRuleWithRelations.

        JSON Rule  # noqa: E501

        :param rule: The rule of this EventRuleWithRelations.
        :type rule: str
        """

        self._rule = rule

    @property
    def execution_period(self):
        """Gets the execution_period of this EventRuleWithRelations.

        EventRule execution period - seconds  # noqa: E501

        :return: The execution_period of this EventRuleWithRelations.
        :rtype: float
        """
        return self._execution_period

    @execution_period.setter
    def execution_period(self, execution_period):
        """Sets the execution_period of this EventRuleWithRelations.

        EventRule execution period - seconds  # noqa: E501

        :param execution_period: The execution_period of this EventRuleWithRelations.
        :type execution_period: float
        """

        self._execution_period = execution_period

    @property
    def last_exec_timestamp(self):
        """Gets the last_exec_timestamp of this EventRuleWithRelations.

        Last execution timestamp  # noqa: E501

        :return: The last_exec_timestamp of this EventRuleWithRelations.
        :rtype: datetime
        """
        return self._last_exec_timestamp

    @last_exec_timestamp.setter
    def last_exec_timestamp(self, last_exec_timestamp):
        """Sets the last_exec_timestamp of this EventRuleWithRelations.

        Last execution timestamp  # noqa: E501

        :param last_exec_timestamp: The last_exec_timestamp of this EventRuleWithRelations.
        :type last_exec_timestamp: datetime
        """

        self._last_exec_timestamp = last_exec_timestamp

    @property
    def activated(self):
        """Gets the activated of this EventRuleWithRelations.

        Is set to true when EventRule has been activated  # noqa: E501

        :return: The activated of this EventRuleWithRelations.
        :rtype: bool
        """
        return self._activated

    @activated.setter
    def activated(self, activated):
        """Sets the activated of this EventRuleWithRelations.

        Is set to true when EventRule has been activated  # noqa: E501

        :param activated: The activated of this EventRuleWithRelations.
        :type activated: bool
        """

        self._activated = activated

    @property
    def in_progress(self):
        """Gets the in_progress of this EventRuleWithRelations.

        Is automaticaly set to true when EventRule is being processed  # noqa: E501

        :return: The in_progress of this EventRuleWithRelations.
        :rtype: bool
        """
        return self._in_progress

    @in_progress.setter
    def in_progress(self, in_progress):
        """Sets the in_progress of this EventRuleWithRelations.

        Is automaticaly set to true when EventRule is being processed  # noqa: E501

        :param in_progress: The in_progress of this EventRuleWithRelations.
        :type in_progress: bool
        """

        self._in_progress = in_progress
