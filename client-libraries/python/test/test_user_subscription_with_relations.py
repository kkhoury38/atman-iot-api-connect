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
from openapi_client.models.user_subscription_with_relations import UserSubscriptionWithRelations  # noqa: E501
from openapi_client.rest import ApiException

class TestUserSubscriptionWithRelations(unittest.TestCase):
    """UserSubscriptionWithRelations unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test UserSubscriptionWithRelations
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.user_subscription_with_relations.UserSubscriptionWithRelations()  # noqa: E501
        if include_optional :
            return UserSubscriptionWithRelations(
                id = 1.337, 
                reference_code = '0', 
                email = '0', 
                discount = 1.337, 
                creation_timestamp = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                activation_timestamp = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                end_timestamp = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                has_registered = True, 
                subscription_id = 1.337, 
                subscription = openapi_client.models.subscription_with_relations.SubscriptionWithRelations(
                    id = 1.337, 
                    product = '0', 
                    type = '0', 
                    description = '0', 
                    duration = 1.337, 
                    monthly_price = 1.337, 
                    yearly_price = 1.337, 
                    active = True, 
                    user_subscriptions = [
                        openapi_client.models.user_subscription_with_relations.UserSubscriptionWithRelations(
                            id = 1.337, 
                            reference_code = '0', 
                            email = '0', 
                            discount = 1.337, 
                            creation_timestamp = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                            activation_timestamp = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                            end_timestamp = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                            has_registered = True, 
                            subscription_id = 1.337, )
                        ], )
            )
        else :
            return UserSubscriptionWithRelations(
                reference_code = '0',
                discount = 1.337,
                creation_timestamp = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                has_registered = True,
                subscription_id = 1.337,
        )

    def testUserSubscriptionWithRelations(self):
        """Test UserSubscriptionWithRelations"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
