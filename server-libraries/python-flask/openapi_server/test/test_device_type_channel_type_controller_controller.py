# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.channel_type import ChannelType  # noqa: E501
from openapi_server.models.channel_type_excluding_id_device_type_id import ChannelTypeExcludingIdDeviceTypeId  # noqa: E501
from openapi_server.models.channel_type_excluding_id_name_device_type_id import ChannelTypeExcludingIdNameDeviceTypeId  # noqa: E501
from openapi_server.models.channel_type_excluding_name_description_unit_channel_type_device_type_id import ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId  # noqa: E501
from openapi_server.models.loopback_count import LoopbackCount  # noqa: E501
from openapi_server.test import BaseTestCase


class TestDeviceTypeChannelTypeControllerController(BaseTestCase):
    """DeviceTypeChannelTypeControllerController integration test stubs"""

    def test_device_type_channel_type_controller_count(self):
        """Test case for device_type_channel_type_controller_count

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-type-channel-type/{device_type_id}/count'.format(device_type_id=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_type_channel_type_controller_create(self):
        """Test case for device_type_channel_type_controller_create

        
        """
        channel_type_excluding_id_device_type_id = {}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-type-channel-type/{device_type_id}'.format(device_type_id=3.4),
            method='POST',
            headers=headers,
            data=json.dumps(channel_type_excluding_id_device_type_id),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_type_channel_type_controller_device_type_channel_categories(self):
        """Test case for device_type_channel_type_controller_device_type_channel_categories

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-type-channel-type/{device_type_id}/channel-categories'.format(device_type_id=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_type_channel_type_controller_find(self):
        """Test case for device_type_channel_type_controller_find

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-type-channel-type/{device_type_id}/page/{page}/count/{count}'.format(device_type_id=3.4, page=3.4, count=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_type_channel_type_controller_update_by_id(self):
        """Test case for device_type_channel_type_controller_update_by_id

        
        """
        channel_type_excluding_id_name_device_type_id = {}
        headers = { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-type-channel-type/channel-type/{channel_type_id}'.format(channel_type_id=3.4),
            method='PATCH',
            headers=headers,
            data=json.dumps(channel_type_excluding_id_name_device_type_id),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
