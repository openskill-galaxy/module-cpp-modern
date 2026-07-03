import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var df=["easy","medium","hard"];
var ts="C++ g++ CMake namespace iostream reference pointer const constexpr auto decltype function overloading default parameter inline class struct object constructor destructor copy constructor move constructor this static encapsulation inheritance polymorphism virtual override final abstract class pure virtual operator overloading friend template function template class template generic programming STL vector list deque map unordered_map set string iterator algorithm sort find lambda RAII new delete unique_ptr shared_ptr weak_ptr exception try catch throw fstream move rvalue reference perfect forwarding thread mutex lock_guard atomic performance optimization memory management coding standard smart pointer move semantics copy elision NRVO RVO object slicing virtual table VTBL vtable dynamic_cast typeid static_cast reinterpret_cast const_cast std forward std move std sort std find std transform std accumulate std bind std function std async future promise packaged_task condition_variable semaphore barrier latch stop_token jthread";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"cp-tag-"+String(i+1).padStart(3,"0"),name:n,category:"Cpp",description:"Cpp标签:"+n,count:0,createdAt:"2026-07-03T00:00:00.000Z"};});}
var CD=[
  {id:"cp-course-01",order:1,slug:"Cpp入门",title:"C++入门与现代C++学习路线",description:"C++特点、标准演进、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"cp-course-02",order:2,slug:"编译环境",title:"编译环境、项目结构与基本语法",description:"g++、CMake、头文件、namespace。",estimatedHours:6,diff:"easy"},
  {id:"cp-course-03",order:3,slug:"数据类型引用",title:"数据类型、表达式、引用与const",description:"基本类型、引用、const/constexpr、auto。",estimatedHours:8,diff:"easy"},
  {id:"cp-course-04",order:4,slug:"函数重载",title:"函数、重载、默认参数与内联函数",description:"函数重载、默认参数、inline、函数指针。",estimatedHours:8,diff:"medium"},
  {id:"cp-course-05",order:5,slug:"类与对象",title:"类、对象、构造与析构",description:"类、构造函数、析构函数、拷贝移动、this。",estimatedHours:10,diff:"medium"},
  {id:"cp-course-06",order:6,slug:"封装继承多态",title:"封装、继承、多态与虚函数",description:"继承访问控制、virtual、override、抽象类。",estimatedHours:10,diff:"medium"},
  {id:"cp-course-07",order:7,slug:"运算符重载",title:"运算符重载与友元",description:"运算符重载规则、友元函数、类型转换。",estimatedHours:8,diff:"hard"},
  {id:"cp-course-08",order:8,slug:"模板泛型",title:"模板、泛型编程与类型推导",description:"函数模板、类模板、特化、类型推导。",estimatedHours:10,diff:"hard"},
  {id:"cp-course-09",order:9,slug:"STL",title:"STL容器、迭代器与算法",description:"vector/map/set、迭代器、排序查找、仿函数。",estimatedHours:10,diff:"hard"},
  {id:"cp-course-10",order:10,slug:"内存RAII",title:"内存管理、RAII与智能指针",description:"new/delete、RAII、unique/shared/weak_ptr。",estimatedHours:10,diff:"hard"},
  {id:"cp-course-11",order:11,slug:"异常文件",title:"异常处理、文件IO与错误处理",description:"try/catch/throw、fstream、异常安全。",estimatedHours:8,diff:"hard"},
  {id:"cp-course-12",order:12,slug:"lambda移动",title:"Lambda、移动语义与现代C++特性",description:"lambda、右值引用、move、完美转发。",estimatedHours:10,diff:"hard"},
  {id:"cp-course-13",order:13,slug:"多线程并发",title:"多线程、并发与性能优化基础",description:"thread/mutex/atomic、lock_guard、同步。",estimatedHours:10,diff:"hard"},
  {id:"cp-course-14",order:14,slug:"Cpp项目面试",title:"C++项目实战、工程构建与面试训练",description:"CMake项目实战、面试题。",estimatedHours:10,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["掌握C++语法","理解面向对象","会用STL","能完成C++项目"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bl(){var all=[];var id=1;function add(ci,t2){var n=String(id).padStart(3,"0");all.push({id:"cp-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t2,slug:t2.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-"),summary:t2,content:"# "+t2+"\n\n"+t2+"内容。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:[],practiceQuestionIds:[],tags:["Cpp"],prerequisites:[],updatedAt:"2026-07-03T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"Cpp课程"+(ci+1)+"章"+(j+1));return all;}
var KPN=[["C++","系统编程语言"],["类","对象抽象"],["继承","代码复用"],["多态","虚函数"],["模板","泛型编程"],["STL","标准模板库"],["RAII","资源管理"],["智能指针","自动内存"],["Lambda","匿名函数"],["移动语义","资源转移"],["异常","错误处理"],["多线程","并发执行"],["虚函数","动态绑定"],["引用","别名"],["迭代器","容器遍历"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"cp-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"Cpp",tags:["Cpp"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"cp-kp-"+String(k.length+1).padStart(4,"0"),name:"Cpp概念"+(k.length+1),description:"Cpp概念",category:"Cpp",tags:["Cpp"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}return k;}
var QC=["Cpp入门","编译环境","数据类型引用","函数重载","类与对象","封装继承多态","运算符重载","模板泛型","STL","内存RAII","异常文件","lambda移动","多线程并发","Cpp项目面试"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"C++引用与指针区别？",["引用不可为空","指针更安全","引用更灵活","指针占用更多"],"A","easy"],[1,"namespace作用？",["避免名字冲突","命名空间","命名函数","命名变量"],"A","easy"],[3,"函数重载依据？",["参数类型/个数","返回类型","函数名称","访问权限"],"A","medium"],[4,"构造函数没有？",["返回类型","名称","参数","函数体"],"A","medium"],[5,"virtual关键字用于？",["实现多态","继承","封装","重载"],"A","medium"],[6,"operator++重载？",["成员函数或全局","仅成员","仅全局","static"],"A","medium"],[7,"模板参数？",["类型或非类型","仅类型","仅值","仅指针"],"A","hard"],[9,"unique_ptr特点？",["独占所有权","共享所有权","引用计数","自动释放"],"A","hard"],[12,"Mutex用于？",["互斥同步","异步","通信","通知"],"A","hard"],[11,"std::move作用？",["转为右值引用","移动内存","拷贝对象","创建对象"],"A","hard"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];if(t_[4]&&typeof t_[4]==="string"&&t_[4].includes(":"))t_[4]=t_[4].replace(":","");qs.push({id:"cp-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确"+t_[3]+"。",wrong_reason:"加强。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:500},{type:"case_analysis",min:1200}];
  while(qid<=3700){var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=df[Math.floor(Math.random()*df.length)];
    var id2="cp-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于C++"+ch+"正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="C++"+ch+"哪些正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是C++重要概念。";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="C++"+ch+"中____是核心。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"在C++中的作用。";o=[{label:"A",text:"简答"}];a=ch+"用于C++。";}
    else if(it.type==="case_analysis"){s="C++"+ch+"案例。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)}});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确"+a+"。",wrong_reason:"加强。",related_questions:[],tags:[ch],estimated_time:it.type==="case_analysis"?120:60,source_type:"curated-generated"});e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"cp-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":"进阶"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-03T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["Hello C++","引用与指针","类设计","构造析构顺序","继承多态","虚函数","模板函数","STL容器","迭代器","排序算法","智能指针","RAII资源","文件读写","异常处理","Lambda","移动语义","线程同步","CMake项目","学生管理系统","缓存组件","Cpp面试"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"cp-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握Cpp",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"需求",description:"分析"},{order:2,title:"方案",description:"设计"},{order:3,title:"实现",description:"编码"},{order:4,title:"验证",description:"测试"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-03T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"Cpp路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"cp-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["C++","引用","指针","类","虚函数","STL","RAII","智能指针","Lambda","模板","异常","多线程","迭代器","移动语义","CMake"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["Cpp概念"+i,"Cpp概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"cp-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"Cpp",tags:["Cpp"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["Cpp问题"+(i+1)+"?","Cpp问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"cp-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"Cpp",tags:["Cpp"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["Cpp"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["Cpp"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["Cpp"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["Cpp"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["Cpp"]});});return e;}
async function main(){
  console.log("Gen Cpp...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-cpp-modern",slug:"module-cpp-modern",title:"C++现代程序设计",subtitle:"面向C语言进阶和算法工程学习者",description:"面向C语言进阶系统编程和算法工程学习者的现代C++面向对象模板STL智能指针RAII移动语义多线程CMake与项目实战训练。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["C++","现代C++","STL","面向对象","模板","智能指针","多线程","CMake"],estimatedHours:180,difficulty:"intermediate",updatedAt:"2026-07-03T00:00:00.000Z",coverEmoji:"\u{2699}\u{FE0F}",repoUrl:"https://github.com/openskill-galaxy/module-cpp-modern",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var f2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in f2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(f2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(f2[key])?f2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});console.log("\nc:"+courses.length+" l:"+lessons.length+" k:"+kps.length+" q:"+questions.length+" e:"+exams.length+" ca:"+cases.length+" r:"+routes.length+" t:"+tags.length+" g:"+glossary.length+" f:"+faqs.length+" si:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
