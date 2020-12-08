# coding: utf-8

"""
    Atman IoT

    Atman IoT Server  # noqa: E501

    The version of the OpenAPI document: 3.0.1
    Contact: k.khoury@k-ren.gr
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest
import datetime

import openapi_client
from openapi_client.models.event_rule_subscription_excluding_id_last_exec_timestamp import EventRuleSubscriptionExcludingIdLastExecTimestamp  # noqa: E501
from openapi_client.rest import ApiException

class TestEventRuleSubscriptionExcludingIdLastExecTimestamp(unittest.TestCase):
    """EventRuleSubscriptionExcludingIdLastExecTimestamp unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test EventRuleSubscriptionExcludingIdLastExecTimestamp
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.event_rule_subscription_excluding_id_last_exec_timestamp.EventRuleSubscriptionExcludingIdLastExecTimestamp()  # noqa: E501
        if include_optional :
            return EventRuleSubscriptionExcludingIdLastExecTimestamp(
                execution_period = 1.337, 
                asset_id = 1.337, 
                event_rule_id = 1.337, 
                rule_activated = True
            )
        else :
            return EventRuleSubscriptionExcludingIdLastExecTimestamp(
                execution_period = 1.337,
                asset_id = 1.337,
                event_rule_id = 1.337,
                rule_activated = True,
        )

    def testEventRuleSubscriptionExcludingIdLastExecTimestamp(self):
        """Test EventRuleSubscriptionExcludingIdLastExecTimestamp"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
