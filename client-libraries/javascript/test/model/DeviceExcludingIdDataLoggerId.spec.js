/**
 * Atman IoT
 * Atman IoT Server
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: k.khoury@k-ren.gr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AtmanIoT);
  }
}(this, function(expect, AtmanIoT) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AtmanIoT.DeviceExcludingIdDataLoggerId();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DeviceExcludingIdDataLoggerId', function() {
    it('should create an instance of DeviceExcludingIdDataLoggerId', function() {
      // uncomment below and update the code to test DeviceExcludingIdDataLoggerId
      //var instane = new AtmanIoT.DeviceExcludingIdDataLoggerId();
      //expect(instance).to.be.a(AtmanIoT.DeviceExcludingIdDataLoggerId);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new AtmanIoT.DeviceExcludingIdDataLoggerId();
      //expect(instance).to.be();
    });

    it('should have the property serialNo (base name: "serialNo")', function() {
      // uncomment below and update the code to test the property serialNo
      //var instane = new AtmanIoT.DeviceExcludingIdDataLoggerId();
      //expect(instance).to.be();
    });

    it('should have the property deviceTypeId (base name: "deviceTypeId")', function() {
      // uncomment below and update the code to test the property deviceTypeId
      //var instane = new AtmanIoT.DeviceExcludingIdDataLoggerId();
      //expect(instance).to.be();
    });

  });

}));
