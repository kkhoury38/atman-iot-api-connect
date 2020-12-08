import connexion
import six

from openapi_server.models.channel import Channel  # noqa: E501
from openapi_server.models.channel_excluding_id_device_id import ChannelExcludingIdDeviceId  # noqa: E501
from openapi_server.models.channel_type import ChannelType  # noqa: E501
from openapi_server.models.device import Device  # noqa: E501
from openapi_server.models.device_excluding_description_serial_no_data_logger_id_device_type_id import DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId  # noqa: E501
from openapi_server.models.device_excluding_id_data_logger_id import DeviceExcludingIdDataLoggerId  # noqa: E501
from openapi_server.models.device_excluding_id_serial_no_data_logger_id_device_type_id import DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId  # noqa: E501
from openapi_server.models.device_with_type import DeviceWithType  # noqa: E501
from openapi_server import util


def device_controller_create(data_logger_id, device_excluding_id_data_logger_id=None):  # noqa: E501
    """device_controller_create

    Used for creating a new &lt;b&gt;Device&lt;/b&gt;, belonging to a &lt;b&gt;DataLogger&lt;/b&gt; with id &lt;i&gt;dataLoggerId&lt;/i&gt; by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-dataloggercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt; # noqa: E501

    :param data_logger_id: 
    :type data_logger_id: 
    :param device_excluding_id_data_logger_id: 
    :type device_excluding_id_data_logger_id: dict | bytes

    :rtype: Device
    """
    if connexion.request.is_json:
        device_excluding_id_data_logger_id = DeviceExcludingIdDataLoggerId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def device_controller_create_channel(device_id, channel_excluding_id_device_id=None):  # noqa: E501
    """device_controller_create_channel

    Used for creating a new &lt;b&gt;Channel&lt;/b&gt;, belonging to a &lt;b&gt;Device&lt;/b&gt; with id &lt;i&gt;deviceId&lt;/i&gt; by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt; # noqa: E501

    :param device_id: 
    :type device_id: 
    :param channel_excluding_id_device_id: 
    :type channel_excluding_id_device_id: dict | bytes

    :rtype: Channel
    """
    if connexion.request.is_json:
        channel_excluding_id_device_id = ChannelExcludingIdDeviceId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def device_controller_disable_channel_monitoring(device_id, channel_id, all):  # noqa: E501
    """device_controller_disable_channel_monitoring

    Disable monitoring of &lt;b&gt;Channel&lt;/b&gt; identified by &lt;i&gt;channelId&lt;/i&gt;, in &lt;b&gt;Device&lt;/b&gt; identified by &lt;i&gt;deviceId&lt;/i&gt;, owned by &lt;b&gt;User&lt;/b&gt; authorized by &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt; # noqa: E501

    :param device_id: 
    :type device_id: 
    :param channel_id: 
    :type channel_id: 
    :param all: 
    :type all: bool

    :rtype: None
    """
    return 'do some magic!'


def device_controller_enable_channel_monitoring(device_id, channel_id, all):  # noqa: E501
    """device_controller_enable_channel_monitoring

    Enable monitoring of &lt;b&gt;Channel&lt;/b&gt; identified by &lt;i&gt;channelId&lt;/i&gt;, in &lt;b&gt;Device&lt;/b&gt; identified by &lt;i&gt;deviceId&lt;/i&gt;, owned by &lt;b&gt;User&lt;/b&gt; authorized by &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt; # noqa: E501

    :param device_id: 
    :type device_id: 
    :param channel_id: 
    :type channel_id: 
    :param all: 
    :type all: bool

    :rtype: None
    """
    return 'do some magic!'


def device_controller_find(data_logger_id):  # noqa: E501
    """device_controller_find

    Used for getting the &lt;b&gt;Devices&lt;/b&gt;, belonging to a &lt;b&gt;DataLogger&lt;/b&gt; with id &lt;i&gt;dataLoggerId&lt;/i&gt; by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-dataloggercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt; # noqa: E501

    :param data_logger_id: 
    :type data_logger_id: 

    :rtype: List[Device]
    """
    return 'do some magic!'


def device_controller_find_channel_types(device_id):  # noqa: E501
    """device_controller_find_channel_types

    Used for getting the  &lt;b&gt;Channel&lt;/b&gt;&lt;b&gt;Types&lt;/b&gt; of &lt;b&gt;Channels&lt;/b&gt; belonging to a &lt;b&gt;Device&lt;/b&gt; with id &lt;i&gt;deviceId&lt;/i&gt;, by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschanneltype\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelTypeModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt; # noqa: E501

    :param device_id: 
    :type device_id: 

    :rtype: List[ChannelType]
    """
    return 'do some magic!'


def device_controller_find_channels(device_id):  # noqa: E501
    """device_controller_find_channels

    Used for getting &lt;b&gt;Channel&lt;/b&gt;&lt;b&gt;s&lt;/b&gt;, belonging to a &lt;b&gt;Device&lt;/b&gt; with id &lt;i&gt;deviceId&lt;/i&gt;, by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt; # noqa: E501

    :param device_id: 
    :type device_id: 

    :rtype: List[Channel]
    """
    return 'do some magic!'


def device_controller_get_devices_with_type(device_excluding_description_serial_no_data_logger_id_device_type_id=None):  # noqa: E501
    """device_controller_get_devices_with_type

    Returns array of devices with their device types # noqa: E501

    :param device_excluding_description_serial_no_data_logger_id_device_type_id: 
    :type device_excluding_description_serial_no_data_logger_id_device_type_id: list | bytes

    :rtype: List[DeviceWithType]
    """
    if connexion.request.is_json:
        device_excluding_description_serial_no_data_logger_id_device_type_id = [DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId.from_dict(d) for d in connexion.request.get_json()]  # noqa: E501
    return 'do some magic!'


def device_controller_update_by_id(id, device_excluding_id_serial_no_data_logger_id_device_type_id=None):  # noqa: E501
    """device_controller_update_by_id

     # noqa: E501

    :param id: 
    :type id: 
    :param device_excluding_id_serial_no_data_logger_id_device_type_id: 
    :type device_excluding_id_serial_no_data_logger_id_device_type_id: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        device_excluding_id_serial_no_data_logger_id_device_type_id = DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
