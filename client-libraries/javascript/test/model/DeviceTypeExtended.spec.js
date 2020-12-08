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
    instance = new AtmanIoT.DeviceTypeExtended();
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

  describe('DeviceTypeExtended', function() {
    it('should create an instance of DeviceTypeExtended', function() {
      // uncomment below and update the code to test DeviceTypeExtended
      //var instane = new AtmanIoT.DeviceTypeExtended();
      //expect(instance).to.be.a(AtmanIoT.DeviceTypeExtended);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new AtmanIoT.DeviceTypeExtended();
      //expect(instance).to.be();
    });

    it('should have the property model (base name: "model")', function() {
      // uncomment below and update the code to test the property model
      //var instane = new AtmanIoT.DeviceTypeExtended();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new AtmanIoT.DeviceTypeExtended();
      //expect(instance).to.be();
    });

    it('should have the property manufacturer (base name: "manufacturer")', function() {
      // uncomment below and update the code to test the property manufacturer
      //var instane = new AtmanIoT.DeviceTypeExtended();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new AtmanIoT.DeviceTypeExtended();
      //expect(instance).to.be();
    });

    it('should have the property error (base name: "error")', function() {
      // uncomment below and update the code to test the property error
      //var instane = new AtmanIoT.DeviceTypeExtended();
      //expect(instance).to.be();
    });

    it('should have the property channelTypes (base name: "channelTypes")', function() {
      // uncomment below and update the code to test the property channelTypes
      //var instane = new AtmanIoT.DeviceTypeExtended();
      //expect(instance).to.be();
    });

  });

}));
