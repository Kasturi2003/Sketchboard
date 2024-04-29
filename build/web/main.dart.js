// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const framework = flutter_sdk.src__widgets__framework;
  const colors = flutter_sdk.src__material__colors;
  const scaffold = flutter_sdk.src__material__scaffold;
  const basic = flutter_sdk.src__widgets__basic;
  const gesture_detector = flutter_sdk.src__widgets__gesture_detector;
  const drag_details = flutter_sdk.src__gestures__drag_details;
  const container = flutter_sdk.src__widgets__container;
  const media_query = flutter_sdk.src__widgets__media_query;
  const slider = flutter_sdk.src__material__slider;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  const icon = flutter_sdk.src__widgets__icon;
  const icons = flutter_sdk.src__material__icons;
  const text = flutter_sdk.src__widgets__text;
  const bottom_app_bar = flutter_sdk.src__material__bottom_app_bar;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const flex = flutter_sdk.src__rendering__flex;
  const box_decoration = flutter_sdk.src__painting__box_decoration;
  const box_border = flutter_sdk.src__painting__box_border;
  const custom_paint = flutter_sdk.src__rendering__custom_paint;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  var $add = dartx.add;
  var $clear = dartx.clear;
  var $length = dartx.length;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    JSArrayOfDrawingPoint: () => (T.JSArrayOfDrawingPoint = dart.constFn(_interceptors.JSArray$(main.DrawingPoint)))(),
    JSArrayOfColor: () => (T.JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))(),
    DragStartDetailsTovoid: () => (T.DragStartDetailsTovoid = dart.constFn(dart.fnType(dart.void, [drag_details.DragStartDetails])))(),
    DragUpdateDetailsTovoid: () => (T.DragUpdateDetailsTovoid = dart.constFn(dart.fnType(dart.void, [drag_details.DragUpdateDetails])))(),
    DragEndDetailsTovoid: () => (T.DragEndDetailsTovoid = dart.constFn(dart.fnType(dart.void, [drag_details.DragEndDetails])))(),
    doubleTovoid: () => (T.doubleTovoid = dart.constFn(dart.fnType(dart.void, [core.double])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    ListOfWidget: () => (T.ListOfWidget = dart.constFn(core.List$(framework.Widget)))(),
    intToWidget: () => (T.intToWidget = dart.constFn(dart.fnType(framework.Widget, [core.int])))(),
    JSArrayOfOffset: () => (T.JSArrayOfOffset = dart.constFn(_interceptors.JSArray$(ui.Offset)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    }
  }, false);
  var C = [void 0];
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.EduElite = class EduElite extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({debugShowCheckedModeBanner: false, home: new main.DrawingBoard.new()});
    }
    static ['_#new#tearOff']() {
      return new main.EduElite.new();
    }
  };
  (main.EduElite.new = function() {
    main.EduElite.__proto__.new.call(this);
    ;
  }).prototype = main.EduElite.prototype;
  dart.addTypeTests(main.EduElite);
  dart.addTypeCaches(main.EduElite);
  dart.setMethodSignature(main.EduElite, () => ({
    __proto__: dart.getMethods(main.EduElite.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.EduElite, I[0]);
  main.DrawingBoard = class DrawingBoard extends framework.StatefulWidget {
    createState() {
      return new main._DrawingBoardState.new();
    }
    static ['_#new#tearOff']() {
      return new main.DrawingBoard.new();
    }
  };
  (main.DrawingBoard.new = function() {
    main.DrawingBoard.__proto__.new.call(this);
    ;
  }).prototype = main.DrawingBoard.prototype;
  dart.addTypeTests(main.DrawingBoard);
  dart.addTypeCaches(main.DrawingBoard);
  dart.setMethodSignature(main.DrawingBoard, () => ({
    __proto__: dart.getMethods(main.DrawingBoard.__proto__),
    createState: dart.fnType(main._DrawingBoardState, [])
  }));
  dart.setLibraryUri(main.DrawingBoard, I[0]);
  var _buildColorChoice = dart.privateName(main, "_buildColorChoice");
  main._DrawingBoardState = class _DrawingBoardState extends framework.State$(main.DrawingBoard) {
    build(context) {
      return new scaffold.Scaffold.new({body: new basic.Stack.new({children: T.JSArrayOfWidget().of([new gesture_detector.GestureDetector.new({onPanStart: dart.fn(details => {
                this.setState(dart.fn(() => {
                  let t0;
                  this.drawingPoints[$add](new main.DrawingPoint.new({offset: details.localPosition, paint: (t0 = ui.Paint.new(), (() => {
                      t0.color = this.selectedColor;
                      t0.isAntiAlias = true;
                      t0.strokeWidth = this.strokeWidth;
                      t0.strokeCap = ui.StrokeCap.round;
                      return t0;
                    })()), isStroke: false}));
                }, T.VoidTovoid()));
              }, T.DragStartDetailsTovoid()), onPanUpdate: dart.fn(details => {
                this.setState(dart.fn(() => {
                  let t0;
                  this.drawingPoints[$add](new main.DrawingPoint.new({offset: details.localPosition, paint: (t0 = ui.Paint.new(), (() => {
                      t0.color = this.selectedColor;
                      t0.isAntiAlias = true;
                      t0.strokeWidth = this.strokeWidth;
                      t0.strokeCap = ui.StrokeCap.round;
                      return t0;
                    })()), isStroke: true}));
                }, T.VoidTovoid()));
              }, T.DragUpdateDetailsTovoid()), onPanEnd: dart.fn(details => {
                this.setState(dart.fn(() => {
                  this.drawingPoints[$add](new main.DrawingPoint.new({offset: null, paint: ui.Paint.new(), isStroke: false}));
                }, T.VoidTovoid()));
              }, T.DragEndDetailsTovoid()), child: new basic.CustomPaint.new({painter: new main._DrawingPainter.new(this.drawingPoints), child: new container.Container.new({height: media_query.MediaQuery.of(context).size.height, width: media_query.MediaQuery.of(context).size.width})})}), new basic.Positioned.new({top: 40, right: 30, child: new basic.Row.new({children: T.JSArrayOfWidget().of([new slider.Slider.new({value: this.strokeWidth, onChanged: dart.fn(val => this.setState(dart.fn(() => this.strokeWidth = val, T.VoidTovoid())), T.doubleTovoid()), min: 1, max: 10}), new elevated_button._ElevatedButtonWithIcon.new({onPressed: dart.fn(() => this.setState(dart.fn(() => this.drawingPoints[$clear](), T.VoidTovoid())), T.VoidTovoid()), icon: new icon.Icon.new(icons.Icons.clear), label: new text.Text.new("Clear Board")})])})})])}), bottomNavigationBar: new bottom_app_bar.BottomAppBar.new({child: new container.Container.new({color: colors.Colors.grey._get(300), padding: new edge_insets.EdgeInsets.all(10), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: T.ListOfWidget().generate(this.colors[$length], dart.fn(index => this[_buildColorChoice](this.colors[$_get](index)), T.intToWidget()))})})})});
    }
    [_buildColorChoice](color) {
      let isSelected = this.selectedColor._equals(color);
      return new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
          this.setState(dart.fn(() => {
            this.selectedColor = color;
          }, T.VoidTovoid()));
        }, T.VoidTovoid()), child: new container.Container.new({height: isSelected ? 47 : 40, width: isSelected ? 47 : 40, decoration: new box_decoration.BoxDecoration.new({color: color, shape: box_border.BoxShape.circle, border: isSelected ? box_border.Border.all({color: colors.Colors.white, width: 3}) : null})})});
    }
    static ['_#new#tearOff']() {
      return new main._DrawingBoardState.new();
    }
  };
  (main._DrawingBoardState.new = function() {
    this.selectedColor = colors.Colors.black;
    this.strokeWidth = 5;
    this.drawingPoints = T.JSArrayOfDrawingPoint().of([]);
    this.colors = T.JSArrayOfColor().of([colors.Colors.pink, colors.Colors.red, colors.Colors.black, colors.Colors.yellow, colors.Colors.amberAccent, colors.Colors.green, colors.Colors.purple, colors.Colors.blue]);
    main._DrawingBoardState.__proto__.new.call(this);
    ;
  }).prototype = main._DrawingBoardState.prototype;
  dart.addTypeTests(main._DrawingBoardState);
  dart.addTypeCaches(main._DrawingBoardState);
  dart.setMethodSignature(main._DrawingBoardState, () => ({
    __proto__: dart.getMethods(main._DrawingBoardState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildColorChoice]: dart.fnType(framework.Widget, [ui.Color])
  }));
  dart.setLibraryUri(main._DrawingBoardState, I[0]);
  dart.setFieldSignature(main._DrawingBoardState, () => ({
    __proto__: dart.getFields(main._DrawingBoardState.__proto__),
    selectedColor: dart.fieldType(ui.Color),
    strokeWidth: dart.fieldType(core.double),
    drawingPoints: dart.fieldType(core.List$(main.DrawingPoint)),
    colors: dart.fieldType(core.List$(ui.Color))
  }));
  main._DrawingPainter = class _DrawingPainter extends custom_paint.CustomPainter {
    static ['_#new#tearOff'](drawingPoints) {
      return new main._DrawingPainter.new(drawingPoints);
    }
    paint(canvas, size) {
      let offsetsList = T.JSArrayOfOffset().of([]);
      for (let i = 0; i < this.drawingPoints[$length] - 1; i = i + 1) {
        if (!this.drawingPoints[$_get](i).isStroke) {
          offsetsList[$clear]();
        } else if (this.drawingPoints[$_get](i).offset != null && this.drawingPoints[$_get](i + 1).offset != null) {
          canvas.drawLine(dart.nullCheck(this.drawingPoints[$_get](i).offset), dart.nullCheck(this.drawingPoints[$_get](i + 1).offset), this.drawingPoints[$_get](i).paint);
        } else if (this.drawingPoints[$_get](i).offset != null && this.drawingPoints[$_get](i + 1).offset == null) {
          offsetsList[$add](dart.nullCheck(this.drawingPoints[$_get](i).offset));
          canvas.drawPoints(ui.PointMode.points, offsetsList, this.drawingPoints[$_get](i).paint);
        }
      }
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter.as(oldDelegate);
      return true;
    }
  };
  (main._DrawingPainter.new = function(drawingPoints) {
    this.drawingPoints = drawingPoints;
    main._DrawingPainter.__proto__.new.call(this);
    ;
  }).prototype = main._DrawingPainter.prototype;
  dart.addTypeTests(main._DrawingPainter);
  dart.addTypeCaches(main._DrawingPainter);
  dart.setMethodSignature(main._DrawingPainter, () => ({
    __proto__: dart.getMethods(main._DrawingPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(main._DrawingPainter, I[0]);
  dart.setFieldSignature(main._DrawingPainter, () => ({
    __proto__: dart.getFields(main._DrawingPainter.__proto__),
    drawingPoints: dart.finalFieldType(core.List$(main.DrawingPoint))
  }));
  var offset$ = dart.privateName(main, "DrawingPoint.offset");
  var paint$ = dart.privateName(main, "DrawingPoint.paint");
  var isStroke$ = dart.privateName(main, "DrawingPoint.isStroke");
  main.DrawingPoint = class DrawingPoint extends core.Object {
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      this[offset$] = value;
    }
    get paint() {
      return this[paint$];
    }
    set paint(value) {
      this[paint$] = value;
    }
    get isStroke() {
      return this[isStroke$];
    }
    set isStroke(value) {
      this[isStroke$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let paint = opts && 'paint' in opts ? opts.paint : null;
      let isStroke = opts && 'isStroke' in opts ? opts.isStroke : null;
      return new main.DrawingPoint.new({offset: offset, paint: paint, isStroke: isStroke});
    }
  };
  (main.DrawingPoint.new = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let paint = opts && 'paint' in opts ? opts.paint : null;
    let isStroke = opts && 'isStroke' in opts ? opts.isStroke : null;
    this[offset$] = offset;
    this[paint$] = paint;
    this[isStroke$] = isStroke;
    ;
  }).prototype = main.DrawingPoint.prototype;
  dart.addTypeTests(main.DrawingPoint);
  dart.addTypeCaches(main.DrawingPoint);
  dart.setLibraryUri(main.DrawingPoint, I[0]);
  dart.setFieldSignature(main.DrawingPoint, () => ({
    __proto__: dart.getFields(main.DrawingPoint.__proto__),
    offset: dart.fieldType(dart.nullable(ui.Offset)),
    paint: dart.fieldType(ui.Paint),
    isStroke: dart.fieldType(core.bool)
  }));
  main.main = function main$0() {
    return binding.runApp(new main.EduElite.new());
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":"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","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=main.js.map
