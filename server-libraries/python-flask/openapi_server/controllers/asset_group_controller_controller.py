import connexion
import six

from openapi_server.models.asset_group import AssetGroup  # noqa: E501
from openapi_server.models.asset_group_excluding_id_user_id import AssetGroupExcludingIdUserId  # noqa: E501
from openapi_server import util


def asset_group_controller_create_asset_group(asset_group_excluding_id_user_id=None):  # noqa: E501
    """asset_group_controller_create_asset_group

     # noqa: E501

    :param asset_group_excluding_id_user_id: 
    :type asset_group_excluding_id_user_id: dict | bytes

    :rtype: AssetGroup
    """
    if connexion.request.is_json:
        asset_group_excluding_id_user_id = AssetGroupExcludingIdUserId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def asset_group_controller_delete_by_id(id):  # noqa: E501
    """asset_group_controller_delete_by_id

     # noqa: E501

    :param id: 
    :type id: 

    :rtype: None
    """
    return 'do some magic!'


def asset_group_controller_find_user_asset_groups():  # noqa: E501
    """asset_group_controller_find_user_asset_groups

     # noqa: E501


    :rtype: List[AssetGroup]
    """
    return 'do some magic!'


def asset_group_controller_update_by_id(id, asset_group_excluding_id_user_id=None):  # noqa: E501
    """asset_group_controller_update_by_id

    Edit (PATCH) AssetGroup # noqa: E501

    :param id: 
    :type id: 
    :param asset_group_excluding_id_user_id: 
    :type asset_group_excluding_id_user_id: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        asset_group_excluding_id_user_id = AssetGroupExcludingIdUserId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
