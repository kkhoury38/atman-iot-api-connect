# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.models.data_logger import DataLogger  # noqa: E501
from openapi_server.models.data_logger_excluding_id_auth_token_config_user_id import DataLoggerExcludingIdAuthTokenConfigUserId  # noqa: E501
from openapi_server.models.request_data_logger_setup_csv2_excluding_file_format import RequestDataLoggerSetupCsv2ExcludingFileFormat  # noqa: E501
from openapi_server.models.request_data_logger_setup_xml2_excluding_file_format import RequestDataLoggerSetupXml2ExcludingFileFormat  # noqa: E501
from openapi_server.models.response_data_logger_setup_step2 import ResponseDataLoggerSetupStep2  # noqa: E501
from openapi_server.test import BaseTestCase


class TestDataLoggerControllerController(BaseTestCase):
    """DataLoggerControllerController integration test stubs"""

    def test_data_logger_controller_create(self):
        """Test case for data_logger_controller_create

        
        """
        data_logger_excluding_id_auth_token_config_user_id = {}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/data-logger',
            method='POST',
            headers=headers,
            data=json.dumps(data_logger_excluding_id_auth_token_config_user_id),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_data_logger_controller_delete_by_id(self):
        """Test case for data_logger_controller_delete_by_id

        
        """
        headers = { 
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/data-logger/{id}'.format(id=3.4),
            method='DELETE',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_data_logger_controller_find(self):
        """Test case for data_logger_controller_find

        
        """
        headers = { 
            'Accept': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/data-loggers',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    @unittest.skip("multipart/form-data not supported by Connexion")
    def test_data_logger_controller_setup_from_ftp1(self):
        """Test case for data_logger_controller_setup_from_ftp1

        
        """
        headers = { 
            'Content-Type': 'multipart/form-data',
        }
        response = self.client.open(
            '/api/data-logger/setup-ftp/step1/{id}/{data_logger_token}'.format(id=3.4, data_logger_token='data_logger_token_example'),
            method='POST',
            headers=headers,
            content_type='multipart/form-data')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_data_logger_controller_setup_from_ftp3(self):
        """Test case for data_logger_controller_setup_from_ftp3

        
        """
        response_data_logger_setup_step2 = {
  "deviceTypes" : [ {
    "channelTypes" : [ {
      "unit" : "unit",
      "deviceTypeId" : 1.4658129805029452,
      "name" : "name",
      "description" : "description",
      "channelType" : "channelType",
      "id" : 6.027456183070403,
      "category" : "category",
      "error" : true
    }, {
      "unit" : "unit",
      "deviceTypeId" : 1.4658129805029452,
      "name" : "name",
      "description" : "description",
      "channelType" : "channelType",
      "id" : 6.027456183070403,
      "category" : "category",
      "error" : true
    } ],
    "description" : "description",
    "model" : "model",
    "id" : 0.8008281904610115,
    "category" : "category",
    "error" : true,
    "manufacturer" : "manufacturer"
  }, {
    "channelTypes" : [ {
      "unit" : "unit",
      "deviceTypeId" : 1.4658129805029452,
      "name" : "name",
      "description" : "description",
      "channelType" : "channelType",
      "id" : 6.027456183070403,
      "category" : "category",
      "error" : true
    }, {
      "unit" : "unit",
      "deviceTypeId" : 1.4658129805029452,
      "name" : "name",
      "description" : "description",
      "channelType" : "channelType",
      "id" : 6.027456183070403,
      "category" : "category",
      "error" : true
    } ],
    "description" : "description",
    "model" : "model",
    "id" : 0.8008281904610115,
    "category" : "category",
    "error" : true,
    "manufacturer" : "manufacturer"
  } ],
  "devices" : [ {
    "deviceTypeId" : 2.3021358869347655,
    "description" : "description",
    "dataLoggerId" : 5.637376656633329,
    "id" : 5.962133916683182,
    "serialNo" : "serialNo"
  }, {
    "deviceTypeId" : 2.3021358869347655,
    "description" : "description",
    "dataLoggerId" : 5.637376656633329,
    "id" : 5.962133916683182,
    "serialNo" : "serialNo"
  } ],
  "sample" : {
    "period" : 7.061401241503109,
    "scope" : "scope",
    "value" : "{}",
    "timestamp" : {
      "timezone" : "timezone",
      "format" : "format",
      "value" : "2000-01-23T04:56:07.000+00:00"
    }
  },
  "errorCount" : 9.301444243932576,
  "errors" : [ "errors", "errors" ]
}
        headers = { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/data-logger/setup-ftp/step3/{id}'.format(id=3.4),
            method='POST',
            headers=headers,
            data=json.dumps(response_data_logger_setup_step2),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_data_logger_controller_setup_from_ftp_csv2(self):
        """Test case for data_logger_controller_setup_from_ftp_csv2

        
        """
        request_data_logger_setup_csv2_excluding_file_format = {}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/data-logger/setup-ftp/step2/csv/{id}'.format(id=3.4),
            method='POST',
            headers=headers,
            data=json.dumps(request_data_logger_setup_csv2_excluding_file_format),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_data_logger_controller_setup_from_ftp_xml2(self):
        """Test case for data_logger_controller_setup_from_ftp_xml2

        
        """
        request_data_logger_setup_xml2_excluding_file_format = {}
        headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer special-key',
        }
        response = self.client.open(
            '/api/data-logger/setup-ftp/step2/xml/{id}'.format(id=3.4),
            method='POST',
            headers=headers,
            data=json.dumps(request_data_logger_setup_xml2_excluding_file_format),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    @unittest.skip("multipart/form-data not supported by Connexion")
    def test_data_logger_controller_upload_data_from_csv(self):
        """Test case for data_logger_controller_upload_data_from_csv

        
        """
        headers = { 
            'Content-Type': 'multipart/form-data',
        }
        response = self.client.open(
            '/api/data-logger/data-from-csv/{id}/{data_logger_token}'.format(id=3.4, data_logger_token='data_logger_token_example'),
            method='POST',
            headers=headers,
            content_type='multipart/form-data')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    @unittest.skip("multipart/form-data not supported by Connexion")
    def test_data_logger_controller_upload_data_from_xml(self):
        """Test case for data_logger_controller_upload_data_from_xml

        
        """
        headers = { 
            'Content-Type': 'multipart/form-data',
        }
        response = self.client.open(
            '/api/data-logger/data-from-xml/{id}/{data_logger_token}'.format(id=3.4, data_logger_token='data_logger_token_example'),
            method='POST',
            headers=headers,
            content_type='multipart/form-data')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
