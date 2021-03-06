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
    instance = new AtmanIoT.EventRule();
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

  describe('EventRule', function() {
    it('should create an instance of EventRule', function() {
      // uncomment below and update the code to test EventRule
      //var instane = new AtmanIoT.EventRule();
      //expect(instance).to.be.a(AtmanIoT.EventRule);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new AtmanIoT.EventRule();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new AtmanIoT.EventRule();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instane = new AtmanIoT.EventRule();
      //expect(instance).to.be();
    });

    it('should have the property algorithm (base name: "algorithm")', function() {
      // uncomment below and update the code to test the property algorithm
      //var instane = new AtmanIoT.EventRule();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instane = new AtmanIoT.EventRule();
      //expect(instance).to.be();
    });

    it('should have the property actionParameters (base name: "actionParameters")', function() {
      // uncomment below and update the code to test the property actionParameters
      //var instane = new AtmanIoT.EventRule();
      //expect(instance).to.be();
    });

    it('should have the property rule (base name: "rule")', function() {
      // uncomment below and update the code to test the property rule
      //var instane = new AtmanIoT.EventRule();
      //expect(instance).to.be();
    });

    it('should have the property executionPeriod (base name: "executionPeriod")', function() {
      // uncomment below and update the code to test the property executionPeriod
      //var instane = new AtmanIoT.EventRule();
      //expect(instance).to.be();
    });

    it('should have the property lastExecTimestamp (base name: "lastExecTimestamp")', function() {
      // uncomment below and update the code to test the property lastExecTimestamp
      //var instane = new AtmanIoT.EventRule();
      //expect(instance).to.be();
    });

    it('should have the property activated (base name: "activated")', function() {
      // uncomment below and update the code to test the property activated
      //var instane = new AtmanIoT.EventRule();
      //expect(instance).to.be();
    });

    it('should have the property inProgress (base name: "inProgress")', function() {
      // uncomment below and update the code to test the property inProgress
      //var instane = new AtmanIoT.EventRule();
      //expect(instance).to.be();
    });

  });

}));
