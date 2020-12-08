# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.device_type import DeviceType  # noqa: E501
from openapi_server.models.device_type_excluding_id_model_manufacturer import DeviceTypeExcludingIdModelManufacturer  # noqa: E501
from openapi_server.models.device_type_excluding_model_description_manufacturer import DeviceTypeExcludingModelDescriptionManufacturer  # noqa: E501
from openapi_server.models.loopback_count import LoopbackCount  # noqa: E501
from openapi_server.test import BaseTestCase


class TestDeviceTypeControllerController(BaseTestCase):
    """DeviceTypeControllerController integration test stubs"""

    def test_device_type_controller_count(self):
        """Test case for device_type_controller_count

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-type/count',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_type_controller_create(self):
        """Test case for device_type_controller_create

        
        """
        device_type = {
  "description" : "description",
  "model" : "model",
  "id" : 0.8008281904610115,
  "category" : "category",
  "manufacturer" : "manufacturer"
}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-type',
            method='POST',
            headers=headers,
            data=json.dumps(device_type),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_type_controller_find(self):
        """Test case for device_type_controller_find

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-type/get-all/page/{page}/count/{count}'.format(page=3.4, count=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_type_controller_get_asset_device_categories(self):
        """Test case for device_type_controller_get_asset_device_categories

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-type/device-categories-in-asset/{asset_id}'.format(asset_id=3.4),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_device_type_controller_update_by_id(self):
        """Test case for device_type_controller_update_by_id

        
        """
        device_type_excluding_id_model_manufacturer = {}
        headers = { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/device-type/{id}'.format(id=3.4),
            method='PATCH',
            headers=headers,
            data=json.dumps(device_type_excluding_id_model_manufacturer),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
