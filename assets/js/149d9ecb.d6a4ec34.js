"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[2975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=u(n),c=o,g=p["".concat(s,".").concat(c)]||p[c]||m[c]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:o,i[1]=r;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const l={sidebar_position:8},i="2.2.8 Build on seL4 RTOS",r={unversionedId:"contribute-guide/source/os/sel4",id:"contribute-guide/source/os/sel4",title:"2.2.8 Build on seL4 RTOS",description:"Video demo | Build logs | Build artifact",source:"@site/docs/contribute-guide/source/os/sel4.md",sourceDirName:"contribute-guide/source/os",slug:"/contribute-guide/source/os/sel4",permalink:"/book/docs/contribute-guide/source/os/sel4",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/contribute-guide/source/os/sel4.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"contributeSidebar",previous:{title:"2.2.7 Build on OpenHarmony",permalink:"/book/docs/contribute-guide/source/os/openharmony"},next:{title:"2.2.9 Build on Raspberry Pi",permalink:"/book/docs/contribute-guide/source/os/raspberrypi"}},s={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"System requirements",id:"system-requirements",level:3},{value:"Automatic installation: all-in-one script",id:"automatic-installation-all-in-one-script",level:3},{value:"Manual installation: managing memory usage",id:"manual-installation-managing-memory-usage",level:3},{value:"Boot wasmedge-seL4",id:"boot-wasmedge-sel4",level:3},{value:"Login on guest linux",id:"login-on-guest-linux",level:3},{value:"Execute wasm examples",id:"execute-wasm-examples",level:3},{value:"Example A: nbody-c.wasm",id:"example-a-nbody-cwasm",level:4},{value:"Example B: hello.wasm",id:"example-b-hellowasm",level:4}],d={toc:u};function p(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"228-build-on-sel4-rtos"},"2.2.8 Build on seL4 RTOS"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/2Qu-Trtkspk"},"Video demo")," | ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-seL4/runs/3982081148?check_suite_focus=true"},"Build logs")," | ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-seL4/actions/runs/1374510169"},"Build artifact")),(0,o.kt)("p",null,"In this article, we demonstrate how to run WasmEdge on the seL4 RTOS, there are two parts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Guest Linux OS on seL4: This is the controller of WasmEdge runtime, which will send wasm program to WasmEdge runner that is a agent on seL4 to execute."),(0,o.kt)("li",{parentName:"ol"},"WasmEdge runner on seL4: This is the wasm program runtime, which will execute the given wasm program from Guest Linux OS.")),(0,o.kt)("p",null,"The figure below illustrates the architecture of the system."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"wasmedge-sel4",src:n(4357).Z,width:"717",height:"485"})),(0,o.kt)("p",null,"This demo is based on the seL4 simulator on Linux."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h3",{id:"system-requirements"},"System requirements"),(0,o.kt)("p",null,"Hardware:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"at least 4GB of RAM"),(0,o.kt)("li",{parentName:"ul"},"at least 20GB of disk storage (the wasmedge_sel4 directory will contain over 11 GB of data after the following installation completes)")),(0,o.kt)("p",null,"Software: Ubuntu 20.04 with dev tools packages (ep. Python) installed. We recommend the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu2004-README.md"},"GitHub Actions Ubuntu 20.04 VM")," (See a list of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu2004-README.md#installed-apt-packages"},"installed apt packages"),"). Or, you could use our Docker image (see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-seL4/blob/main/docs/Dockerfile.sel4_build"},"Dockerfile"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker pull wasmedge/sel4_build\n$ docker run --rm -v $(pwd):/app -it wasmedge/sel4_build\n(docker) root#\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you do not want to build the seL4 system simulator yourself, you can download the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-seL4/actions/runs/1374510169"},"build artifact")," from our GitHub Actions, and skip directly to ",(0,o.kt)("a",{parentName:"p",href:"#boot-wasmedge-sel4"},"Boot wasmedge-seL4"))),(0,o.kt)("h3",{id:"automatic-installation-all-in-one-script"},"Automatic installation: all-in-one script"),(0,o.kt)("p",null,"Use our all-in-one build script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/second-state/wasmedge-seL4/main/build.sh | bash\n")),(0,o.kt)("p",null,"And this will clone and build our wasmedge on seL4 to an image."),(0,o.kt)("p",null,"After finishing the build script, you will have a folder ",(0,o.kt)("inlineCode",{parentName:"p"},"sel4_wasmedge"),"."),(0,o.kt)("p",null,"If this automatic installation completed successfully, skip over the manual installation information and proceed to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-seL4#boot-wasmedge-sel4"},"boot wasmedge-sel4")),(0,o.kt)("h3",{id:"manual-installation-managing-memory-usage"},"Manual installation: managing memory usage"),(0,o.kt)("p",null,"The above all-in-one script will work in most cases. However, if your system resources were stressed and you encountered an error such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ninja: build stopped: subcommand failed")," please note that you can decrease the parallelization of the install by explicitly passing in a ",(0,o.kt)("inlineCode",{parentName:"p"},"-j")," parameter to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ninja")," command (on the last line of the ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sh")," file). You see, Ninja runs the most amount of parallel processes by default and so the following procedure is a way to explicitly set/reduce parallelization."),(0,o.kt)("p",null,"Manually fetch the `wasmedge-sel4 repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~\ngit clone https://github.com/second-state/wasmedge-seL4.git\ncd wasmedge-seL4\n")),(0,o.kt)("p",null,"Manually edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sh")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vi build.sh\n")),(0,o.kt)("p",null,"Add the following ",(0,o.kt)("inlineCode",{parentName:"p"},"-j")," parameter to the last line of the file i.e."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ninja -j 2\n")),(0,o.kt)("p",null,"Make the ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sh")," file executable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chmod a+x build.sh\n")),(0,o.kt)("p",null,"Run the edited `build.sh file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./build.sh\n")),(0,o.kt)("p",null,"Once this manual installation is complete, follow along with the following steps; boot wasmedge-sel4"),(0,o.kt)("h3",{id:"boot-wasmedge-sel4"},"Boot wasmedge-seL4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd sel4_wasmedge/build\n./simulate\n")),(0,o.kt)("p",null,"Expected output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./simulate: qemu-system-aarch64 -machine virt,virtualization=on,highmem=off,secure=off -cpu cortex-a53 -nographic  -m size=2048  -kernel images/capdl-loader-image-arm-qemu-arm-virt\nELF-loader started on CPU: ARM Ltd. Cortex-A53 r0p4\n  paddr=[6abd8000..750cf0af]\nNo DTB passed in from boot loader.\nLooking for DTB in CPIO archive...found at 6ad18f58.\nLoaded DTB from 6ad18f58.\n   paddr=[60243000..60244fff]\nELF-loading image 'kernel' to 60000000\n  paddr=[60000000..60242fff]\n  vaddr=[ff8060000000..ff8060242fff]\n  virt_entry=ff8060000000\nELF-loading image 'capdl-loader' to 60245000\n  paddr=[60245000..6a7ddfff]\n  vaddr=[400000..a998fff]\n  virt_entry=408f38\nEnabling hypervisor MMU and paging\nJumping to kernel-image entry point...\n\nBootstrapping kernel\nWarning: Could not infer GIC interrupt target ID, assuming 0.\nBooting all finished, dropped to user space\n<<seL4(CPU 0) [decodeUntypedInvocation/205 T0xff80bf85d400 \"rootserver\" @4006f8]: Untyped Retype: Insufficient memory (1 * 2097152 bytes needed, 0 bytes available).>>\nLoading Linux: 'linux' dtb: 'linux-dtb'\n\n...(omitted)...\n\nStarting syslogd: OK\nStarting klogd: OK\nRunning sysctl: OK\nInitializing random number generator... [    3.512482] random: dd: uninitialized urandom read (512 bytes read)\ndone.\nStarting network: OK\n[    4.086059] connection: loading out-of-tree module taints kernel.\n[    4.114686] Event Bar (dev-0) initalised\n[    4.123771] 2 Dataports (dev-0) initalised\n[    4.130626] Event Bar (dev-1) initalised\n[    4.136096] 2 Dataports (dev-1) initalised\n\nWelcome to Buildroot\nbuildroot login:\n")),(0,o.kt)("h3",{id:"login-on-guest-linux"},"Login on guest linux"),(0,o.kt)("p",null,"Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," to login"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"buildroot login: root\n")),(0,o.kt)("p",null,"Expected output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"buildroot login: root\n#\n")),(0,o.kt)("h3",{id:"execute-wasm-examples"},"Execute wasm examples"),(0,o.kt)("h4",{id:"example-a-nbody-cwasm"},"Example A: nbody-c.wasm"),(0,o.kt)("p",null,"Run nbody simulation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge_emit /usr/bin/nbody-c.wasm 10\n")),(0,o.kt)("p",null,"Expected output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[1900-01-00 00:00:00.000] [info] executing wasm file\n-0.169075164\n-0.169073022\n[1900-01-00 00:00:00.000] [info] execution success, exit code:0\n")),(0,o.kt)("h4",{id:"example-b-hellowasm"},"Example B: hello.wasm"),(0,o.kt)("p",null,"Run an easy application to print ",(0,o.kt)("inlineCode",{parentName:"p"},"hello, sel4")," and a simple calculation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge_emit /usr/bin/hello.wasm\n")),(0,o.kt)("p",null,"Expected output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[1900-01-00 00:00:00.000] [info] executing wasm file\nhello, sel4\n1+2-3*4 = -9\n[1900-01-00 00:00:00.000] [info] execution success, exit code:0\n")))}p.isMDXComponent=!0},4357:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wasmedge-sel4-66922c42f0767adda74e377b38ae9763.png"}}]);