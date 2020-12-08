import connexion
import six

from openapi_server.models.device_type import DeviceType  # noqa: E501
from openapi_server.models.device_type_excluding_id_model_manufacturer import DeviceTypeExcludingIdModelManufacturer  # noqa: E501
from openapi_server.models.device_type_excluding_model_description_manufacturer import DeviceTypeExcludingModelDescriptionManufacturer  # noqa: E501
from openapi_server.models.loopback_count import LoopbackCount  # noqa: E501
from openapi_server import util


def device_type_controller_count():  # noqa: E501
    """device_type_controller_count

     # noqa: E501


    :rtype: LoopbackCount
    """
    return 'do some magic!'


def device_type_controller_create(device_type=None):  # noqa: E501
    """device_type_controller_create

     # noqa: E501

    :param device_type: 
    :type device_type: dict | bytes

    :rtype: DeviceType
    """
    if connexion.request.is_json:
        device_type = DeviceType.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def device_type_controller_find(page, count):  # noqa: E501
    """device_type_controller_find

     # noqa: E501

    :param page: 
    :type page: 
    :param count: 
    :type count: 

    :rtype: List[DeviceType]
    """
    return 'do some magic!'


def device_type_controller_get_asset_device_categories(asset_id):  # noqa: E501
    """device_type_controller_get_asset_device_categories

     # noqa: E501

    :param asset_id: 
    :type asset_id: 

    :rtype: List[DeviceTypeExcludingModelDescriptionManufacturer]
    """
    return 'do some magic!'


def device_type_controller_update_by_id(id, device_type_excluding_id_model_manufacturer=None):  # noqa: E501
    """device_type_controller_update_by_id

     # noqa: E501

    :param id: 
    :type id: 
    :param device_type_excluding_id_model_manufacturer: 
    :type device_type_excluding_id_model_manufacturer: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        device_type_excluding_id_model_manufacturer = DeviceTypeExcludingIdModelManufacturer.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
