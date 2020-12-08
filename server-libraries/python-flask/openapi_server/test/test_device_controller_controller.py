# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.channel import Channel  # noqa: E501
from openapi_server.models.channel_excluding_id_device_id import ChannelExcludingIdDeviceId  # noqa: E501
from openapi_server.models.channel_type import ChannelType  # noqa: E501
from openapi_server.models.device import Device  # noqa: E501
from openapi_server.models.device_excluding_description_serial_no_data_logger_id_device_type_id import DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId  # noqa: E501
from openapi_server.models.device_excluding_id_data_logger_id import DeviceExcludingIdDataLoggerId  # noqa: E501
from openapi_server.models.device_excluding_id_serial_no_data_logger_id_device_type_id import DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId  # noqa: E501
from openapi_server.models.device_with_type import DeviceWithType  # noqa: E501
from openapi_server.test import BaseTestCase


class TestDeviceControllerController(BaseTestCase):
    """DeviceControllerController integration test stubs"""

    def test_device_controller_create(self):
        """Test case for device_controller_create

        
        """
        device_excluding_id_data_logger_id = {}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device/{data_logger_id}'.format(data_logger_id=3.4),
            method='POST',
            headers=headers,
            data=json.dumps(device_excluding_id_data_logger_id),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_controller_create_channel(self):
        """Test case for device_controller_create_channel

        
        """
        channel_excluding_id_device_id = {}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device/{device_id}/channel'.format(device_id=3.4),
            method='POST',
            headers=headers,
            data=json.dumps(channel_excluding_id_device_id),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_controller_disable_channel_monitoring(self):
        """Test case for device_controller_disable_channel_monitoring

        
        """
        headers = { 
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device/{device_id}/channel/{channel_id}/disable-monitoring/all/{all}'.format(device_id=3.4, channel_id=3.4, all=True),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_controller_enable_channel_monitoring(self):
        """Test case for device_controller_enable_channel_monitoring

        
        """
        headers = { 
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device/{device_id}/channel/{channel_id}/enable-monitoring/all/{all}'.format(device_id=3.4, channel_id=3.4, all=True),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_controller_find(self):
        """Test case for device_controller_find

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/devices/{data_logger_id}'.format(data_logger_id=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_controller_find_channel_types(self):
        """Test case for device_controller_find_channel_types

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device/{device_id}/channelTypes'.format(device_id=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_controller_find_channels(self):
        """Test case for device_controller_find_channels

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device/{device_id}/channels'.format(device_id=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_controller_get_devices_with_type(self):
        """Test case for device_controller_get_devices_with_type

        
        """
        device_excluding_description_serial_no_data_logger_id_device_type_id = [{}]
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/devices/with-device-type',
            method='POST',
            headers=headers,
            data=json.dumps(device_excluding_description_serial_no_data_logger_id_device_type_id),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_controller_update_by_id(self):
        """Test case for device_controller_update_by_id

        
        """
        device_excluding_id_serial_no_data_logger_id_device_type_id = {}
        headers = { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device/{id}'.format(id=3.4),
            method='PATCH',
            headers=headers,
            data=json.dumps(device_excluding_id_serial_no_data_logger_id_device_type_id),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
