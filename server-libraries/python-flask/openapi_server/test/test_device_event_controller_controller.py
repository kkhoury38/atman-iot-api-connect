# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.device_event_with_relations import DeviceEventWithRelations  # noqa: E501
from openapi_server.models.loopback_count import LoopbackCount  # noqa: E501
from openapi_server.test import BaseTestCase


class TestDeviceEventControllerController(BaseTestCase):
    """DeviceEventControllerController integration test stubs"""

    def test_device_event_controller_count_not_viewed(self):
        """Test case for device_event_controller_count_not_viewed

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-events/by-asset/count-not-viewed/{asset_id}'.format(asset_id=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_event_controller_find(self):
        """Test case for device_event_controller_find

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-events/assetId/{asset_id}/page/{page}/count/{count}'.format(asset_id=3.4, page=3.4, count=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_event_controller_update_viewed_by(self):
        """Test case for device_event_controller_update_viewed_by

        
        """
        headers = { 
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-events/mark-read/{event_id}'.format(event_id=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
