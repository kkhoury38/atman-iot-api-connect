# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.response_device_channel_data import ResponseDeviceChannelData  # noqa: E501
java.sql.Timestamp  # noqa: E501
from openapi_server.test import BaseTestCase


class TestDeviceChannelControllerController(BaseTestCase):
    """DeviceChannelControllerController integration test stubs"""

    def test_device_channel_controller_find_by_period(self):
        """Test case for device_channel_controller_find_by_period

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-channel/data-by-period/{device_id}/{channel_id}/from/{from_ts}/to/{to_ts}/page/{page}/count/{count}/groupBy/{group_by}/operation/{operation}'.format(device_id=3.4, channel_id=3.4, from_ts='from_ts_example', to_ts='to_ts_example', page=3.4, count=3.4, group_by='group_by_example', operation='operation_example'),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_channel_controller_find_device_all_last_recorded_ts(self):
        """Test case for device_channel_controller_find_device_all_last_recorded_ts

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-channel/last-timestamp-in-device/{device_id}'.format(device_id=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_channel_controller_find_device_all_last_ts(self):
        """Test case for device_channel_controller_find_device_all_last_ts

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-channel/data-last-timestamp/all-channels/{device_id}'.format(device_id=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_channel_controller_find_device_channel_last_ts(self):
        """Test case for device_channel_controller_find_device_channel_last_ts

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-channel/data-last-timestamp/{device_id}/{channel_id}'.format(device_id=3.4, channel_id=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_channel_controller_find_device_channel_last_ts_sn_ch_name(self):
        """Test case for device_channel_controller_find_device_channel_last_ts_sn_ch_name

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-channel/data-last-timestamp-by-name/{serial_no}/{channel_name}'.format(serial_no='serial_no_example', channel_name='channel_name_example'),
            method='POST',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
