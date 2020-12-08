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
from openapi_client.models.event_rule import EventRule  # noqa: E501
from openapi_client.rest import ApiException

class TestEventRule(unittest.TestCase):
    """EventRule unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test EventRule
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.event_rule.EventRule()  # noqa: E501
        if include_optional :
            return EventRule(
                id = 1.337, 
                description = '0', 
                scope = '0', 
                algorithm = '0', 
                action = '0', 
                action_parameters = '0', 
                rule = '0', 
                execution_period = 1.337, 
                last_exec_timestamp = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                activated = True, 
                in_progress = True
            )
        else :
            return EventRule(
                scope = '0',
                action = '0',
        )

    def testEventRule(self):
        """Test EventRule"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
