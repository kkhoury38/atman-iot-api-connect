import connexion
import six

from openapi_server.models.channel_type import ChannelType  # noqa: E501
from openapi_server.models.channel_type_excluding_id_device_type_id import ChannelTypeExcludingIdDeviceTypeId  # noqa: E501
from openapi_server.models.channel_type_excluding_id_name_device_type_id import ChannelTypeExcludingIdNameDeviceTypeId  # noqa: E501
from openapi_server.models.channel_type_excluding_name_description_unit_channel_type_device_type_id import ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId  # noqa: E501
from openapi_server.models.loopback_count import LoopbackCount  # noqa: E501
from openapi_server import util


def device_type_channel_type_controller_count(device_type_id):  # noqa: E501
    """device_type_channel_type_controller_count

     # noqa: E501

    :param device_type_id: 
    :type device_type_id: 

    :rtype: LoopbackCount
    """
    return 'do some magic!'


def device_type_channel_type_controller_create(device_type_id, channel_type_excluding_id_device_type_id=None):  # noqa: E501
    """device_type_channel_type_controller_create

     # noqa: E501

    :param device_type_id: 
    :type device_type_id: 
    :param channel_type_excluding_id_device_type_id: 
    :type channel_type_excluding_id_device_type_id: dict | bytes

    :rtype: ChannelType
    """
    if connexion.request.is_json:
        channel_type_excluding_id_device_type_id = ChannelTypeExcludingIdDeviceTypeId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def device_type_channel_type_controller_device_type_channel_categories(device_type_id):  # noqa: E501
    """device_type_channel_type_controller_device_type_channel_categories

     # noqa: E501

    :param device_type_id: 
    :type device_type_id: 

    :rtype: List[ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId]
    """
    return 'do some magic!'


def device_type_channel_type_controller_find(device_type_id, page, count):  # noqa: E501
    """device_type_channel_type_controller_find

     # noqa: E501

    :param device_type_id: 
    :type device_type_id: 
    :param page: 
    :type page: 
    :param count: 
    :type count: 

    :rtype: List[ChannelType]
    """
    return 'do some magic!'


def device_type_channel_type_controller_update_by_id(channel_type_id, channel_type_excluding_id_name_device_type_id=None):  # noqa: E501
    """device_type_channel_type_controller_update_by_id

     # noqa: E501

    :param channel_type_id: 
    :type channel_type_id: 
    :param channel_type_excluding_id_name_device_type_id: 
    :type channel_type_excluding_id_name_device_type_id: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        channel_type_excluding_id_name_device_type_id = ChannelTypeExcludingIdNameDeviceTypeId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
