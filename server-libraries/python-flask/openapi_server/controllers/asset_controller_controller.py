import connexion
import six

from openapi_server.models.asset import Asset  # noqa: E501
from openapi_server.models.asset_excluding_id import AssetExcludingId  # noqa: E501
from openapi_server.models.asset_excluding_id_asset_group_id import AssetExcludingIdAssetGroupId  # noqa: E501
from openapi_server import util


def asset_controller_create(asset_excluding_id=None):  # noqa: E501
    """asset_controller_create

    Used for creating a new &lt;b&gt;Asset&lt;/b&gt;, by an authorized &lt;b&gt;User&lt;/b&gt;, identified by the provided &lt;i&gt;token&lt;/i&gt;. An &lt;b&gt;Asset&lt;/b&gt; is a way of logical grouping of &lt;b&gt;Devices&lt;/b&gt;. One &lt;b&gt;Asset&lt;/b&gt; can contain many &lt;b&gt;Devices&lt;/b&gt; and can belong to one &lt;b&gt;AssetGroup&lt;/b&gt;. &lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-assetgroupcontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetGroupController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsasset\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetModel&lt;/a&gt;&lt;/i&gt; # noqa: E501

    :param asset_excluding_id: 
    :type asset_excluding_id: dict | bytes

    :rtype: Asset
    """
    if connexion.request.is_json:
        asset_excluding_id = AssetExcludingId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def asset_controller_delete_by_id(id):  # noqa: E501
    """asset_controller_delete_by_id

    Used for deleting an &lt;b&gt;Asset&lt;/b&gt;, identified by &lt;i&gt;id&lt;/i&gt; by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;. &lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsasset\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetModel&lt;/a&gt;&lt;/i&gt; # noqa: E501

    :param id: 
    :type id: 

    :rtype: None
    """
    return 'do some magic!'


def asset_controller_find(asset_group_id):  # noqa: E501
    """asset_controller_find

    Used for getting the &lt;b&gt;Assets&lt;/b&gt; belonging to an &lt;b&gt;AssetGroup&lt;/b&gt;, in turn belonging to an authorized &lt;b&gt;User&lt;/b&gt; or &lt;b&gt;Virtual User&lt;/b&gt;.  An &lt;b&gt;Asset&lt;/b&gt; is a way of logical grouping of &lt;b&gt;Devices&lt;/b&gt;. One &lt;b&gt;Asset&lt;/b&gt; can contain many &lt;b&gt;Devices&lt;/b&gt; and can belong to the &lt;b&gt;AssetGroup&lt;/b&gt; with the provided &lt;i&gt;assetGroupId&lt;/i&gt;. An &lt;b&gt;AssetGroup&lt;/b&gt; can have many &lt;b&gt;Assets&lt;/b&gt;. &lt;i&gt;&lt;b&gt;. &lt;br&gt;&lt;br&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-assetgroupcontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetGroupController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsasset\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetModel&lt;/a&gt;&lt;/i&gt; # noqa: E501

    :param asset_group_id: 
    :type asset_group_id: 

    :rtype: List[Asset]
    """
    return 'do some magic!'


def asset_controller_find_by_name(asset_name):  # noqa: E501
    """asset_controller_find_by_name

    Used for getting the &lt;b&gt;Asset&lt;/b&gt; identified by &lt;i&gt;assetName&lt;/i&gt;, by an authorized &lt;b&gt;User&lt;/b&gt; or &lt;b&gt;Virtual User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;. An &lt;b&gt;Asset&lt;/b&gt; is a way of logical grouping of &lt;b&gt;Devices&lt;/b&gt;. One &lt;b&gt;Asset&lt;/b&gt; can contain many &lt;b&gt;Devices&lt;/b&gt; and can belong to one &lt;b&gt;AssetGroup&lt;/b&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-assetgroupcontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetGroupController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsasset\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetModel&lt;/a&gt;&lt;/i&gt; # noqa: E501

    :param asset_name: 
    :type asset_name: str

    :rtype: Asset
    """
    return 'do some magic!'


def asset_controller_find_by_user_id(user_id):  # noqa: E501
    """asset_controller_find_by_user_id

    Used for getting the &lt;b&gt;Assets&lt;/b&gt; of an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;userId&lt;/i&gt;, by an authorized &lt;b&gt;Admin&lt;/b&gt;. An &lt;b&gt;Asset&lt;/b&gt; is a way of logical grouping of &lt;b&gt;Devices&lt;/b&gt;. One &lt;b&gt;Asset&lt;/b&gt; can contain many &lt;b&gt;Devices&lt;/b&gt; and can belong to one &lt;b&gt;AssetGroup&lt;/b&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-assetgroupcontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetGroupController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsasset\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetModel&lt;/a&gt;&lt;/i&gt; # noqa: E501

    :param user_id: 
    :type user_id: 

    :rtype: List[Asset]
    """
    return 'do some magic!'


def asset_controller_update_by_id(id, asset_excluding_id_asset_group_id=None):  # noqa: E501
    """asset_controller_update_by_id

    Edit (Patch) Asset by Id # noqa: E501

    :param id: 
    :type id: 
    :param asset_excluding_id_asset_group_id: 
    :type asset_excluding_id_asset_group_id: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        asset_excluding_id_asset_group_id = AssetExcludingIdAssetGroupId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
