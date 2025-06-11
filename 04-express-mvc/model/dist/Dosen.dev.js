"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var lecturers = [{
  nik: "000001",
  name: "John Doe",
  email: "John.doe@email.com",
  birth_date: "1997-05-08"
}, {
  nik: "000002",
  name: "Susan Bones",
  email: "superbones@email.com",
  birth_date: "1992-11-12"
}];

var Dosen =
/*#__PURE__*/
function () {
  function Dosen() {
    _classCallCheck(this, Dosen);
  }

  _createClass(Dosen, [{
    key: "all",
    value: function all() {
      return lecturers;
    }
  }, {
    key: "save",
    value: function save(lecturer) {
      lecturers.push(lecturer);
    }
  }]);

  return Dosen;
}();

module.exports = Dosen;