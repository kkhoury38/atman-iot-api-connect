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
require 'date'

# Unit tests for OpenapiClient::Token
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'Token' do
  before do
    # run before each test
    @instance = OpenapiClient::Token.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of Token' do
    it 'should create an instance of Token' do
      expect(@instance).to be_instance_of(OpenapiClient::Token)
    end
  end
  describe 'test attribute "token"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
