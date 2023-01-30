"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[5618],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},l="2.2.1 Build on Linux",i={unversionedId:"contribute-guide/source/os/linux",id:"contribute-guide/source/os/linux",title:"2.2.1 Build on Linux",description:"Get the Source Code",source:"@site/docs/contribute-guide/source/os/linux.md",sourceDirName:"contribute-guide/source/os",slug:"/contribute-guide/source/os/linux",permalink:"/book/docs/contribute-guide/source/os/linux",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/contribute-guide/source/os/linux.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"contributeSidebar",previous:{title:"Build WasmEdge",permalink:"/book/docs/category/build-wasmedge"},next:{title:"2.2.2 Build on macOS",permalink:"/book/docs/contribute-guide/source/os/macos"}},s={},u=[{value:"Get the Source Code",id:"get-the-source-code",level:2},{value:"Prepare the Environment",id:"prepare-the-environment",level:2},{value:"Docker Images",id:"docker-images",level:3},{value:"Install Dependencies on Ubuntu 20.04 Manually",id:"install-dependencies-on-ubuntu-2004-manually",level:3},{value:"Support for Legacy Operating Systems",id:"support-for-legacy-operating-systems",level:3},{value:"Build WasmEdge",id:"build-wasmedge",level:2},{value:"Run Tests",id:"run-tests",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"221-build-on-linux"},"2.2.1 Build on Linux"),(0,a.kt)("h2",{id:"get-the-source-code"},"Get the Source Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/WasmEdge/WasmEdge.git\ncd WasmEdge\n")),(0,a.kt)("h2",{id:"prepare-the-environment"},"Prepare the Environment"),(0,a.kt)("h3",{id:"docker-images"},"Docker Images"),(0,a.kt)("p",null,"The easiest way to setup the environment is using the WasmEdge docker images."),(0,a.kt)("p",null,"You can use the following commands to get our latest docker image ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/search?q=wasmedge"},"from dockerhub"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull wasmedge/wasmedge # Pulls the latest - wasmedge/wasmedge:latest\n")),(0,a.kt)("p",null,"Or you can pull with the ","[available tags]","."),(0,a.kt)("h3",{id:"install-dependencies-on-ubuntu-2004-manually"},"Install Dependencies on Ubuntu 20.04 Manually"),(0,a.kt)("p",null,"For the developers who don't want to use docker, they can setup the environment on Ubuntu Manually."),(0,a.kt)("p",null,"Please check that these dependencies are satisfied."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LLVM 12.0.0 (>= 10.0.0)"),(0,a.kt)("li",{parentName:"ul"},"GCC 11.1.0 (>= 9.4.0)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Tools and libraries\nsudo apt install -y \\\n   software-properties-common \\\n   cmake \\\n   libboost-all-dev\n\n# And you will need to install llvm for the AOT runtime\nsudo apt install -y \\\n   llvm-12-dev \\\n   liblld-12-dev\n\n# WasmEdge supports both clang++ and g++ compilers.\n# You can choose one of them to build this project.\n# If you prefer GCC, then:\nsudo apt install -y gcc g++\n# Or if you prefer clang, then:\nsudo apt install -y clang-12\n")),(0,a.kt)("h3",{id:"support-for-legacy-operating-systems"},"Support for Legacy Operating Systems"),(0,a.kt)("p",null,"Our development environment requires ",(0,a.kt)("inlineCode",{parentName:"p"},"libLLVM-12")," and ",(0,a.kt)("inlineCode",{parentName:"p"},">=GLIBCXX_3.4.33"),"."),(0,a.kt)("p",null,"If users are using operating systems older than Ubuntu 20.04, please use our special docker image to build WasmEdge.\nIf you are looking for the pre-built binaries for the older operating system, we also provide several pre-built binaries based on ",(0,a.kt)("inlineCode",{parentName:"p"},"manylinux*")," distributions."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Docker Image"),(0,a.kt)("th",{parentName:"tr",align:null},"Base Image"),(0,a.kt)("th",{parentName:"tr",align:null},"Provided Requirements"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wasmedge/wasmedge:manylinux2014_x86_64"),(0,a.kt)("td",{parentName:"tr",align:null},"CentOS 7.9"),(0,a.kt)("td",{parentName:"tr",align:null},"GLIBC <= 2.17, CXXABI <= 1.3.7, GLIBCXX <= 3.4.19, GCC <= 4.8.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wasmedge/wasmedge:manylinux2014_aarch64"),(0,a.kt)("td",{parentName:"tr",align:null},"CentOS 7.9"),(0,a.kt)("td",{parentName:"tr",align:null},"GLIBC <= 2.17, CXXABI <= 1.3.7, GLIBCXX <= 3.4.19, GCC <= 4.8.0")))),(0,a.kt)("h2",{id:"build-wasmedge"},"Build WasmEdge"),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"../build_from_src#cmake-building-options"},"here")," for the descriptions of all CMake options."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# After pulling our wasmedge docker image\ndocker run -it --rm \\\n    -v <path/to/your/wasmedge/source/folder>:/root/wasmedge \\\n    wasmedge/wasmedge:latest\n# In docker\ncd /root/wasmedge\n# If you don't use docker then you need to run only the following commands in the cloned repository root\nmkdir -p build && cd build\ncmake -DCMAKE_BUILD_TYPE=Release -DWASMEDGE_BUILD_TESTS=ON .. && make -j\n")),(0,a.kt)("h2",{id:"run-tests"},"Run Tests"),(0,a.kt)("p",null,"The following tests are available only when the build option ",(0,a.kt)("inlineCode",{parentName:"p"},"WASMEDGE_BUILD_TESTS")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"ON"),"."),(0,a.kt)("p",null,"Users can use these tests to verify the correctness of WasmEdge binaries."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# In docker\ncd <path/to/wasmedge/build_folder>\nLD_LIBRARY_PATH=$(pwd)/lib/api ctest\n")))}p.isMDXComponent=!0}}]);