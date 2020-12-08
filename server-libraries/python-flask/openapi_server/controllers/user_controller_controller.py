import connexion
import six

from openapi_server.models.token import Token  # noqa: E501
from openapi_server.models.user import User  # noqa: E501
from openapi_server.models.user_excluding_id_email_is_virtual_roles_subscription_reference_code import UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode  # noqa: E501
from openapi_server.models.user_excluding_id_username_is_virtual_roles_subscription_reference_code import UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode  # noqa: E501
from openapi_server.models.user_excluding_passwd_email_roles_is_virtual_subscription_reference_code import UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode  # noqa: E501
from openapi_server import util


def user_controller_create(reference_code, user_excluding_id_username_is_virtual_roles_subscription_reference_code=None):  # noqa: E501
    """user_controller_create

    Used for registering a new &lt;b&gt;User&lt;/b&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#tocsuser\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserModel&lt;/a&gt;&lt;/i&gt; # noqa: E501

    :param reference_code: 
    :type reference_code: str
    :param user_excluding_id_username_is_virtual_roles_subscription_reference_code: 
    :type user_excluding_id_username_is_virtual_roles_subscription_reference_code: dict | bytes

    :rtype: User
    """
    if connexion.request.is_json:
        user_excluding_id_username_is_virtual_roles_subscription_reference_code = UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def user_controller_create_virtual(user_excluding_id_username_is_virtual_roles_subscription_reference_code=None):  # noqa: E501
    """user_controller_create_virtual

    Used for registering a new &lt;b&gt;Virtual User&lt;/b&gt; by a &lt;b&gt;User&lt;/b&gt;, identified by the provided &lt;i&gt;token.&lt;/i&gt;&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#tocsuser\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserModel&lt;/a&gt;&lt;/i&gt; # noqa: E501

    :param user_excluding_id_username_is_virtual_roles_subscription_reference_code: 
    :type user_excluding_id_username_is_virtual_roles_subscription_reference_code: dict | bytes

    :rtype: User
    """
    if connexion.request.is_json:
        user_excluding_id_username_is_virtual_roles_subscription_reference_code = UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def user_controller_delete_virtual_user_by_id(id):  # noqa: E501
    """user_controller_delete_virtual_user_by_id

    Deletes Virtual User by Id # noqa: E501

    :param id: 
    :type id: 

    :rtype: None
    """
    return 'do some magic!'


def user_controller_get_virtual_users():  # noqa: E501
    """user_controller_get_virtual_users

    Returns users under administrator account # noqa: E501


    :rtype: List[UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode]
    """
    return 'do some magic!'


def user_controller_login(user_excluding_id_email_is_virtual_roles_subscription_reference_code=None):  # noqa: E501
    """user_controller_login

    Used for &lt;b&gt;User&lt;/b&gt; and &lt;b&gt;Virtual User&lt;/b&gt; login. Exchanges &lt;i&gt;username/password&lt;/i&gt; with an authorization &lt;i&gt;token&lt;/i&gt;. Please enter the email provided durring registration in the username field.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#tocsuser\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserModel&lt;/a&gt;&lt;/i&gt; # noqa: E501

    :param user_excluding_id_email_is_virtual_roles_subscription_reference_code: 
    :type user_excluding_id_email_is_virtual_roles_subscription_reference_code: dict | bytes

    :rtype: Token
    """
    if connexion.request.is_json:
        user_excluding_id_email_is_virtual_roles_subscription_reference_code = UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
