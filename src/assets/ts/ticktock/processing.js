var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import state from "./state";
export var cbChangeStartValue = function (key, val, prev) {
    if (val === true) {
        var timeout_1 = 1000;
        var startIntervalID = setInterval(function () {
            var detail = getValueTimeAngle();
            var eventInitTicktock = new CustomEvent("ticktock-" + timeout_1, { detail: detail });
            window.dispatchEvent(eventInitTicktock);
        }, timeout_1);
        state.set('startIntervalID', startIntervalID);
    }
    else {
        if (!state.get('startIntervalID'))
            return;
        clearInterval(state.get('startIntervalID'));
    }
};
export var adjustMillisecond = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _interval;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _interval = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var msec, millisecond, threshold;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1); })];
                            case 1:
                                _a.sent();
                                msec = Date.now();
                                millisecond = 1000;
                                threshold = 100;
                                if (!!(msec % millisecond < threshold)) return [3 /*break*/, 3];
                                return [4 /*yield*/, _interval()];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                return [4 /*yield*/, _interval()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var getValueTimeAngle = function () {
    var datetime = new Date();
    var hour = datetime.getHours();
    var min = datetime.getMinutes();
    var sec = datetime.getSeconds();
    var time = { hour: hour, min: min, sec: sec };
    var angle = getAngle(hour, min, sec);
    return {
        time: time,
        angle: angle
    };
};
var getAngle = function (hour, min, sec) {
    var hourInClock = 12;
    var minInClock = 60;
    var secInClock = 60;
    var anglePerHour = 360 / hourInClock;
    var anglePerMin = 360 / minInClock;
    var anglePerSec = 360 / secInClock;
    var angleMinAtAngleHour = anglePerHour / minInClock;
    var angleSecAtAngleMin = anglePerMin / secInClock;
    var degHour = (hour * anglePerHour) + (min * angleMinAtAngleHour);
    var degMinute = (min * anglePerMin) + (sec * angleSecAtAngleMin);
    var degSecond = sec * anglePerSec;
    return {
        hour: degHour,
        min: degMinute,
        sec: degSecond
    };
};
//# sourceMappingURL=processing.js.map