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
from openapi_client.models.response_data_logger_setup_step2 import ResponseDataLoggerSetupStep2  # noqa: E501
from openapi_client.rest import ApiException

class TestResponseDataLoggerSetupStep2(unittest.TestCase):
    """ResponseDataLoggerSetupStep2 unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test ResponseDataLoggerSetupStep2
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.response_data_logger_setup_step2.ResponseDataLoggerSetupStep2()  # noqa: E501
        if include_optional :
            return ResponseDataLoggerSetupStep2(
                device_types = [
                    openapi_client.models.device_type_extended.DeviceTypeExtended(
                        id = 1.337, 
                        model = '0', 
                        description = '0', 
                        manufacturer = '0', 
                        category = '0', 
                        error = True, 
                        channel_types = [
                            openapi_client.models.channel_type_extended.ChannelTypeExtended(
                                id = 1.337, 
                                name = '0', 
                                category = '0', 
                                description = '0', 
                                unit = '0', 
                                channel_type = '0', 
                                device_type_id = 1.337, 
                                error = True, )
                            ], )
                    ], 
                devices = [
                    openapi_client.models.device.Device(
                        id = 1.337, 
                        description = '0', 
                        serial_no = '0', 
                        data_logger_id = 1.337, 
                        device_type_id = 1.337, )
                    ], 
                sample = openapi_client.models.measurement_sample.MeasurementSample(
                    value = openapi_client.models.value.value(), 
                    period = 1.337, 
                    timestamp = openapi_client.models.timestamp.Timestamp(
                        value = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                        format = '0', 
                        timezone = '0', ), 
                    scope = '0', ), 
                error_count = 1.337, 
                errors = [
                    '0'
                    ]
            )
        else :
            return ResponseDataLoggerSetupStep2(
                device_types = [
                    openapi_client.models.device_type_extended.DeviceTypeExtended(
                        id = 1.337, 
                        model = '0', 
                        description = '0', 
                        manufacturer = '0', 
                        category = '0', 
                        error = True, 
                        channel_types = [
                            openapi_client.models.channel_type_extended.ChannelTypeExtended(
                                id = 1.337, 
                                name = '0', 
                                category = '0', 
                                description = '0', 
                                unit = '0', 
                                channel_type = '0', 
                                device_type_id = 1.337, 
                                error = True, )
                            ], )
                    ],
                devices = [
                    openapi_client.models.device.Device(
                        id = 1.337, 
                        description = '0', 
                        serial_no = '0', 
                        data_logger_id = 1.337, 
                        device_type_id = 1.337, )
                    ],
                error_count = 1.337,
        )

    def testResponseDataLoggerSetupStep2(self):
        """Test ResponseDataLoggerSetupStep2"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
