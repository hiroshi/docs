"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[3465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="8.5.1 Deploy with containerd",s={unversionedId:"deploy/oci-runtime/containerd",id:"deploy/oci-runtime/containerd",title:"8.5.1 Deploy with containerd",description:"Work in progress.",source:"@site/docs/deploy/oci-runtime/containerd.md",sourceDirName:"deploy/oci-runtime",slug:"/deploy/oci-runtime/containerd",permalink:"/book/docs/deploy/oci-runtime/containerd",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/deploy/oci-runtime/containerd.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Low level runtime support",permalink:"/book/docs/category/low-level-runtime-support"},next:{title:"8.5.2 Deploy with crun",permalink:"/book/docs/deploy/oci-runtime/crun"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run a simple Wasi app",id:"run-a-simple-wasi-app",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"851-deploy-with-containerd"},"8.5.1 Deploy with containerd"),(0,o.kt)("p",null,"Work in progress."),(0,o.kt)("p",null,"The containerd-shim ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containerd/runwasi/"},"runwasi")," project will support WasmEdge soon. This is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containerd/runwasi/pull/26"},"an ongoing PR")," to track the progress. But before this, we have ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/runwasi"},"a forked version")," that works well on the Docker platform."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Install Rust"),". That's because we need to compile the runwasi project.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install containerd"))),(0,o.kt)("p",null,"Use the following commands to install containerd on your system. Here I use Ubuntu 20.04 as the platform. For other platform, please refer to "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'export VERSION="1.5.7"\necho -e "Version: $VERSION"\necho -e "Installing libseccomp2 ..."\nsudo apt install -y libseccomp2\necho -e "Installing wget"\nsudo apt install -y wget\n\nwget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz\nwget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum\nsha256sum --check cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum\n\nsudo tar --no-overwrite-dir -C / -xzf cri-containerd-cni-${VERSION}-linux-amd64.tar.gz\nsudo systemctl daemon-reload\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Install WasmEdge")),(0,o.kt)("p",null,"Run the following command lines to install WasmEdge."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash\n$ sudo -E sh -c 'echo \"$HOME/.wasmedge/lib\" > /etc/ld.so.conf.d/libwasmedge.conf'\n$ sudo ldconfig\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Download the runwasi project and test\nAfter that, run the following command line to download the runwasi project and test.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git clone https://github.com/second-state/runwasi.git\n$ cd runwasi\n$ cargo test -- --nocapture\n# the output should be the following connent.\nrunning 3 tests\ntest instance::tests::test_maybe_open_stdio ... ok\ntest instance::wasitest::test_delete_after_create ... ok\ntest instance::wasitest::test_wasi ... ok\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Build the wasmedge-containerd-shim")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rustup default nightly\nmake build FEATURES=wasmedge\nsudo make install RUNTIME=wasmedge\n")),(0,o.kt)("h2",{id:"run-a-simple-wasi-app"},"Run a simple Wasi app"),(0,o.kt)("p",null,"WIP"))}u.isMDXComponent=!0}}]);