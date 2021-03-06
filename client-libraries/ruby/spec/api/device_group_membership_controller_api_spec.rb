=begin
#Atman IoT

#Atman IoT Server

The version of the OpenAPI document: 3.0.1
Contact: k.khoury@k-ren.gr
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 4.3.1

=end

require 'spec_helper'
require 'json'

# Unit tests for OpenapiClient::DeviceGroupMembershipControllerApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'DeviceGroupMembershipControllerApi' do
  before do
    # run before each test
    @api_instance = OpenapiClient::DeviceGroupMembershipControllerApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of DeviceGroupMembershipControllerApi' do
    it 'should create an instance of DeviceGroupMembershipControllerApi' do
      expect(@api_instance).to be_instance_of(OpenapiClient::DeviceGroupMembershipControllerApi)
    end
  end

  # unit tests for device_group_membership_controller_create
  # @param [Hash] opts the optional parameters
  # @option opts [DeviceGroupMembershipExcludingId] :device_group_membership_excluding_id 
  # @return [DeviceGroupMembership]
  describe 'device_group_membership_controller_create test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for device_group_membership_controller_delete_by_id
  # @param id 
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'device_group_membership_controller_delete_by_id test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for device_group_membership_controller_find_by_asset_id
  # @param asset_id 
  # @param [Hash] opts the optional parameters
  # @return [Array<DeviceGroupMembership>]
  describe 'device_group_membership_controller_find_by_asset_id test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for device_group_membership_controller_find_by_device_id
  # @param device_id 
  # @param [Hash] opts the optional parameters
  # @return [Array<DeviceGroupMembership>]
  describe 'device_group_membership_controller_find_by_device_id test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
