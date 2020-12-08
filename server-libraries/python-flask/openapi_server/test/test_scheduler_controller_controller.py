# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.test import BaseTestCase


class TestSchedulerControllerController(BaseTestCase):
    """SchedulerControllerController integration test stubs"""

    def test_scheduler_controller_process_events(self):
        """Test case for scheduler_controller_process_events

        
        """
        headers = { 
        }
        response = self.client.open(
            '/api/scheduler/process/events/{attempt}/{server_key}'.format(attempt=3.4, server_key='server_key_example'),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_scheduler_controller_process_ftp_rejected(self):
        """Test case for scheduler_controller_process_ftp_rejected

        
        """
        headers = { 
        }
        response = self.client.open(
            '/api/scheduler/process/ftp-rejected/{server_key}'.format(server_key='server_key_example'),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
