currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Before request
//// [/user/username/projects/myproject/playground/tsconfig.json]
{}

//// [/user/username/projects/myproject/playground/tests.ts]
export function foo() {}

//// [/user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts]
export function bar() { }

//// [/user/username/projects/myproject/playground/tsconfig-json/tsconfig.json]
{
  "include": [
    "./src"
  ]
}

//// [/user/username/projects/myproject/playground/tsconfig-json/src/src.ts]
export function foobar() { }

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/playground/tests.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/playground
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/playground/tests.ts :: Config file name: /user/username/projects/myproject/playground/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/playground/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/user/username/projects/myproject/playground/tsconfig.json",
        "reason": "Creating possible configured project for /user/username/projects/myproject/playground/tests.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/playground/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/playground/tests.ts",
  "/user/username/projects/myproject/playground/tsconfig-json/src/src.ts",
  "/user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts"
 ],
 "options": {
  "configFilePath": "/user/username/projects/myproject/playground/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground 1 undefined Config: /user/username/projects/myproject/playground/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground 1 undefined Config: /user/username/projects/myproject/playground/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/src/src.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/playground/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/package.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/package.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/src/package.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/package.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/tests/package.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/playground/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/playground/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/playground/tests.ts SVC-1-0 "export function foo() {}"
	/user/username/projects/myproject/playground/tsconfig-json/src/src.ts Text-1 "export function foobar() { }"
	/user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts Text-1 "export function bar() { }"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	tests.ts
	  Matched by default include pattern '**/*'
	tsconfig-json/src/src.ts
	  Matched by default include pattern '**/*'
	tsconfig-json/tests/spec.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/user/username/projects/myproject/playground/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "49e8bcb2c25435ceccf5817ae243e3b0839f0c801e274f09af7164ee4615c6d5",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 3,
            "tsSize": 77,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 1,
            "dtsSize": 334,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {},
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": false,
          "include": false,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "tsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/user/username/projects/myproject/playground/tests.ts",
        "configFile": "/user/username/projects/myproject/playground/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/playground/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/playground/tests.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/playground/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/playground/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/playground/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/playground/tsconfig-json/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/playground/tsconfig-json/src/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/playground/tsconfig-json/tests/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/username/projects/myproject/playground/tsconfig-json/src/src.ts: *new*
  {}
/user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts: *new*
  {}
/user/username/projects/myproject/playground/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject/playground: *new*
  {}

Projects::
/user/username/projects/myproject/playground/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/lib/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/playground/tsconfig.json
/user/username/projects/myproject/playground/tests.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/playground/tsconfig.json *default*
/user/username/projects/myproject/playground/tsconfig-json/src/src.ts *new*
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/playground/tsconfig.json
/user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts *new*
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/playground/tsconfig.json

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/user/username/projects/myproject/playground/tests.ts"
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tests.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/playground/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/playground/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/playground/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/playground/tsconfig-json/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/playground/tsconfig-json/src/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/playground/tsconfig-json/tests/package.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/playground/tests.ts: *new*
  {}
/user/username/projects/myproject/playground/tsconfig-json/src/src.ts:
  {}
/user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts:
  {}
/user/username/projects/myproject/playground/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/playground:
  {}

Projects::
/user/username/projects/myproject/playground/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/playground/tsconfig.json
/user/username/projects/myproject/playground/tests.ts *changed*
    open: false *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/playground/tsconfig.json
/user/username/projects/myproject/playground/tsconfig-json/src/src.ts
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/playground/tsconfig.json
/user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/playground/tsconfig.json

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts"
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Search path: /user/username/projects/myproject/playground/tsconfig-json/tests
Info seq  [hh:mm:ss:mss] For info: /user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts :: Config file name: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/user/username/projects/myproject/playground/tsconfig-json/tsconfig.json",
        "reason": "Creating possible configured project for /user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/playground/tsconfig-json/src/src.ts"
 ],
 "options": {
  "configFilePath": "/user/username/projects/myproject/playground/tsconfig-json/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/src 1 undefined Config: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/src 1 undefined Config: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/src/package.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/package.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/package.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/package.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/playground/tsconfig-json/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/playground/tsconfig-json/src/src.ts Text-1 "export function foobar() { }"


	../../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	src/src.ts
	  Matched by include pattern './src' in 'tsconfig.json'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/user/username/projects/myproject/playground/tsconfig-json/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "b5b5eb60eb609750ff98810d798bb98be4cd87ad0940ee8cfccd393eca0a8cab",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 1,
            "tsSize": 28,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 1,
            "dtsSize": 334,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {},
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": false,
          "include": true,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "tsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/playground/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts
	/user/username/projects/myproject/playground/tests.ts
	/user/username/projects/myproject/playground/tsconfig-json/src/src.ts
	/user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	tests.ts
	  Matched by default include pattern '**/*'
	tsconfig-json/src/src.ts
	  Matched by default include pattern '**/*'
	tsconfig-json/tests/spec.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/playground 1 undefined Config: /user/username/projects/myproject/playground/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/playground 1 undefined Config: /user/username/projects/myproject/playground/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/playground/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/playground/package.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/package.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/src/package.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/package.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/tests/package.json 2000 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/playground/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/playground/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/playground/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/playground/tests.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/playground/tsconfig-json/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: 
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/playground/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/playground/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/playground/tsconfig-json/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/playground/tsconfig-json/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/playground/tsconfig-json/src/package.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/package.json:
  {"pollingInterval":2000}

PolledWatches *deleted*::
/user/username/projects/myproject/playground/tsconfig-json/tests/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/playground/tsconfig-json/src/src.ts:
  {}
/user/username/projects/myproject/playground/tsconfig-json/tsconfig.json: *new*
  {}

FsWatches *deleted*::
/user/username/projects/myproject/playground/tests.ts:
  {}
/user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts:
  {}
/user/username/projects/myproject/playground/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/playground/tsconfig-json/src: *new*
  {}

FsWatchesRecursive *deleted*::
/user/username/projects/myproject/playground:
  {}

Projects::
/user/username/projects/myproject/playground/tsconfig-json/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true
/user/username/projects/myproject/playground/tsconfig.json (Configured) *deleted*
    projectStateVersion: 1
    projectProgramVersion: 1
    isClosed: true *changed*
    noOpenRef: true

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 1 *changed*
        /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json *new*
        /user/username/projects/myproject/playground/tsconfig.json *deleted*
/user/username/projects/myproject/playground/tests.ts *deleted*
    version: SVC-1-0
    containingProjects: 0 *changed*
        /user/username/projects/myproject/playground/tsconfig.json *deleted*
/user/username/projects/myproject/playground/tsconfig-json/src/src.ts *changed*
    version: Text-1
    containingProjects: 1 *changed*
        /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json *new*
        /user/username/projects/myproject/playground/tsconfig.json *deleted*
/user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts (Open) *changed*
    open: true *changed*
    version: Text-1
    containingProjects: 0 *changed*
        /user/username/projects/myproject/playground/tsconfig.json *deleted*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "getOutliningSpans",
      "arguments": {
        "file": "/user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts"
      },
      "seq": 4,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/playground/tsconfig-json/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: 
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/tests/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/tests/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/tests/package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/tests/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/tests/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/tsconfig-json/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/playground/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts Text-1 "export function bar() { }"


	../../../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	spec.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/playground/tsconfig-json/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] response:
    {
      "response": [
        {
          "textSpan": {
            "start": {
              "line": 1,
              "offset": 22
            },
            "end": {
              "line": 1,
              "offset": 26
            }
          },
          "hintSpan": {
            "start": {
              "line": 1,
              "offset": 1
            },
            "end": {
              "line": 1,
              "offset": 26
            }
          },
          "bannerText": "...",
          "autoCollapse": true,
          "kind": "code"
        }
      ],
      "responseRequired": true
    }
After request

PolledWatches::
/user/username/projects/myproject/jsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/playground/jsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/playground/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/playground/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/playground/tsconfig-json/jsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/playground/tsconfig-json/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/playground/tsconfig-json/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/playground/tsconfig-json/src/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/playground/tsconfig-json/tests/jsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/playground/tsconfig-json/tests/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/playground/tsconfig-json/tests/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/playground/tsconfig-json/tests/tsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/tsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/playground/tsconfig-json/src/src.ts:
  {}
/user/username/projects/myproject/playground/tsconfig-json/tsconfig.json:
  {}
/user/username/projects/myproject/playground/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject/playground/tsconfig-json/src:
  {}

Projects::
/dev/null/inferredProject1* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/playground/tsconfig-json/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json
        /dev/null/inferredProject1* *new*
/user/username/projects/myproject/playground/tsconfig-json/src/src.ts
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/playground/tsconfig-json/tsconfig.json
/user/username/projects/myproject/playground/tsconfig-json/tests/spec.ts (Open) *changed*
    version: Text-1
    containingProjects: 1 *changed*
        /dev/null/inferredProject1* *default* *new*
