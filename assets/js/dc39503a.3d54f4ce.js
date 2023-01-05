"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[3171],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(a),c=r,g=u["".concat(s,".").concat(c)]||u[c]||p[c]||l;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9211:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:3},i="1.3 Using WasmEdge in Docker",o={unversionedId:"quick-start/use_docker",id:"quick-start/use_docker",title:"1.3 Using WasmEdge in Docker",description:"WasmEdge DockerSlim",source:"@site/docs/quick-start/use_docker.md",sourceDirName:"quick-start",slug:"/quick-start/use_docker",permalink:"/book/docs/quick-start/use_docker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quick-start/use_docker.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"1.2 Running simple apps",permalink:"/book/docs/quick-start/run"},next:{title:"What is WasmEdge",permalink:"/book/docs/category/what-is-wasmedge"}},s={},m=[{value:"WasmEdge DockerSlim",id:"wasmedge-dockerslim",level:2},{value:"Examples",id:"examples",level:3},{value:"Docker Images for Building WasmEdge",id:"docker-images-for-building-wasmedge",level:2}],d={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"13-using-wasmedge-in-docker"},"1.3 Using WasmEdge in Docker"),(0,r.kt)("h2",{id:"wasmedge-dockerslim"},"WasmEdge DockerSlim"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge/slim:{version}")," Docker images provide a slim WasmEdge images built with ",(0,r.kt)("a",{parentName:"p",href:"https://dockersl.im"},"DockerSlim")," every releases."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Image ",(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge/slim-runtime:{version}")," includes only WasmEdge runtime with ",(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge")," command."),(0,r.kt)("li",{parentName:"ul"},"Image ",(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge/slim:{version}")," includes the following command line utilities:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedgec")))),(0,r.kt)("li",{parentName:"ul"},"Image ",(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge/slim-tf:{version}")," includes the following command line utilities:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedgec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge-tensorflow-lite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wasmedge-tensorflow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"show-tflite-tensor")))),(0,r.kt)("li",{parentName:"ul"},"The working directory of the release docker image is ",(0,r.kt)("inlineCode",{parentName:"li"},"/app"),".")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Afer pulling the docker iamge successfully, you could use ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedgec")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge")," to aot compile the wasm file and run the wasm app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker pull wasmedge/slim:{{ wasmedge_version }}\n\n$ docker run -it --rm -v $PWD:/app wasmedge/slim:{{ wasmedge_version }} wasmedgec hello.wasm hello.aot.wasm\n[2022-07-07 08:15:49.154] [info] compile start\n[2022-07-07 08:15:49.163] [info] verify start\n[2022-07-07 08:15:49.169] [info] optimize start\n[2022-07-07 08:15:49.808] [info] codegen start\n[2022-07-07 08:15:50.419] [info] output start\n[2022-07-07 08:15:50.421] [info] compile done\n[2022-07-07 08:15:50.422] [info] output start\n\n$ docker run -it --rm -v $PWD:/app wasmedge/slim:{{ wasmedge_version }} wasmedge hello.aot.wasm world\nhello\nworld\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmedge-tensorflow-lite")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/tree/master/examples/js"},"link"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker pull wasmedge/slim-tf:{{ wasmedge_version }}\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/aiy_food_V1_labelmap.txt\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/food.jpg\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/lite-model_aiy_vision_classifier_food_V1_1.tflite\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/main.js\n\n$ docker run -it --rm -v $PWD:/app wasmedge/slim-tf:{{ wasmedge_version }} wasmedge-tensorflow-lite --dir .:. qjs_tf.wasm main.js\nlabel:\nHot dog\nconfidence:\n0.8941176470588236\n")),(0,r.kt)("h2",{id:"docker-images-for-building-wasmedge"},"Docker Images for Building WasmEdge"),(0,r.kt)("p",null,"WasmEdge supports a wide range of Linux distributions dated back to 2014. The official release contains statically linked binaries and libraries for older Linux systems.\nThe table below shows build targets in WasmEdge's official release packages."),(0,r.kt)("p",null,"Developers can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker pull wasmedge/wasmedge:{tag_name}")," command to pull the docker image for WasmEdge building."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"tag name"),(0,r.kt)("th",{parentName:"tr",align:null},"arch"),(0,r.kt)("th",{parentName:"tr",align:null},"based operating system"),(0,r.kt)("th",{parentName:"tr",align:null},"LLVM version"),(0,r.kt)("th",{parentName:"tr",align:null},"ENVs"),(0,r.kt)("th",{parentName:"tr",align:null},"compatibility"),(0,r.kt)("th",{parentName:"tr",align:null},"comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"latest")),(0,r.kt)("td",{parentName:"tr",align:null},"x86_64"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04 LTS"),(0,r.kt)("td",{parentName:"tr",align:null},"12.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"CC=clang, CXX=clang++"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04+"),(0,r.kt)("td",{parentName:"tr",align:null},"This is for CI, will always use the latest Ubuntu LTS release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu-build-gcc")),(0,r.kt)("td",{parentName:"tr",align:null},"x86_64"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04 LTS"),(0,r.kt)("td",{parentName:"tr",align:null},"12.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"CC=gcc, CXX=g++"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04+"),(0,r.kt)("td",{parentName:"tr",align:null},"This is for CI, will always use the latest Ubuntu LTS release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu-build-clang")),(0,r.kt)("td",{parentName:"tr",align:null},"x86_64"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04 LTS"),(0,r.kt)("td",{parentName:"tr",align:null},"12.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"CC=clang, CXX=clang++"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04+"),(0,r.kt)("td",{parentName:"tr",align:null},"This is for CI, will always use the latest Ubuntu LTS release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu2004_x86_64")),(0,r.kt)("td",{parentName:"tr",align:null},"x86_64"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04 LTS"),(0,r.kt)("td",{parentName:"tr",align:null},"10.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"CC=gcc, CXX=g++"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04+"),(0,r.kt)("td",{parentName:"tr",align:null},"This is for developers who familiar with Ubuntu 20.04 LTS release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ubuntu2104_armv7l")),(0,r.kt)("td",{parentName:"tr",align:null},"armhf"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 21.04"),(0,r.kt)("td",{parentName:"tr",align:null},"12.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"CC=gcc, CXX=g++"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 21.04+"),(0,r.kt)("td",{parentName:"tr",align:null},"This is for armhf release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014_x86_64")),(0,r.kt)("td",{parentName:"tr",align:null},"x86_64"),(0,r.kt)("td",{parentName:"tr",align:null},"CentOS 7, 7.9.2009"),(0,r.kt)("td",{parentName:"tr",align:null},"12.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"CC=gcc, CXX=g++"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 16.04+, CentOS 7+"),(0,r.kt)("td",{parentName:"tr",align:null},"This is for developers who familiar with CentOS on x86_64 architecture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manylinux2014_aarch64")),(0,r.kt)("td",{parentName:"tr",align:null},"aarch64"),(0,r.kt)("td",{parentName:"tr",align:null},"CentOS 7, 7.9.2009"),(0,r.kt)("td",{parentName:"tr",align:null},"12.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"CC=gcc, CXX=g++"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 16.04+, CentOS 7+"),(0,r.kt)("td",{parentName:"tr",align:null},"This is for developers who familiar with CentOS on aarch64 architecture")))))}u.isMDXComponent=!0}}]);