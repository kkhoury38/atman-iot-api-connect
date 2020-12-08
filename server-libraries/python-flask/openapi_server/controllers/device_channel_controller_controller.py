import connexion
import six

from openapi_server.models.response_device_channel_data import ResponseDeviceChannelData  # noqa: E501
java.sql.Timestamp  # noqa: E501
from openapi_server import util


def device_channel_controller_find_by_period(device_id, channel_id, from_ts, to_ts, page, count, group_by, operation):  # noqa: E501
    """device_channel_controller_find_by_period

     # noqa: E501

    :param device_id: 
    :type device_id: 
    :param channel_id: 
    :type channel_id: 
    :param from_ts: 
    :type from_ts: str
    :param to_ts: 
    :type to_ts: str
    :param page: 
    :type page: 
    :param count: 
    :type count: 
    :param group_by: 
    :type group_by: str
    :param operation: 
    :type operation: str

    :rtype: ResponseDeviceChannelData
    """
    return 'do some magic!'


def device_channel_controller_find_device_all_last_recorded_ts(device_id):  # noqa: E501
    """device_channel_controller_find_device_all_last_recorded_ts

     # noqa: E501

    :param device_id: 
    :type device_id: 

    :rtype: Timestamp
    """
    return 'do some magic!'


def device_channel_controller_find_device_all_last_ts(device_id):  # noqa: E501
    """device_channel_controller_find_device_all_last_ts

     # noqa: E501

    :param device_id: 
    :type device_id: 

    :rtype: List[ResponseDeviceChannelData]
    """
    return 'do some magic!'


def device_channel_controller_find_device_channel_last_ts(device_id, channel_id):  # noqa: E501
    """device_channel_controller_find_device_channel_last_ts

     # noqa: E501

    :param device_id: 
    :type device_id: 
    :param channel_id: 
    :type channel_id: 

    :rtype: ResponseDeviceChannelData
    """
    return 'do some magic!'


def device_channel_controller_find_device_channel_last_ts_sn_ch_name(serial_no, channel_name):  # noqa: E501
    """device_channel_controller_find_device_channel_last_ts_sn_ch_name

     # noqa: E501

    :param serial_no: 
    :type serial_no: str
    :param channel_name: 
    :type channel_name: str

    :rtype: ResponseDeviceChannelData
    """
    return 'do some magic!'
