(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45c92f62"],{"00e0":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"rolling-paper"},[e("div",{staticClass:"navigation app-header"},[e("div",{staticClass:"nav-div"},[e("nav",{staticClass:"nav-menu",attrs:{role:"navigation"}},[e("router-link",{staticClass:"logo title",attrs:{to:"/"}},[t._v("인편단심")]),e("span",{staticStyle:{margin:"0 0.7rem"}},[t._v("|")]),e("span",[t._v("편지 전송")])],1),e("div",{staticClass:"nav-send",on:{click:t.handleSend}},[e("span",[t._v("보내기")])])])]),t.haveRoll?e("div",{staticClass:"rolling-content"},[e("div",{staticClass:"box header-wrapper"},[t._m(0),e("div",{staticClass:"subtitle"},[t._m(1),t._m(2),e("button",{staticClass:"btn notice-badge",attrs:{type:"button"}},[t._v(" 작성 "),e("span",{staticClass:"badge badge-light"},[t._v(t._s(t.listCount)+" 명")])]),t._m(3)])]),e("div",{staticClass:"hr"}),e("main",{staticClass:"chat-screen"},[e("ul",{staticClass:"chat__messages"},t._l(t.relayList,(function(a,s){return e("li",{key:s,staticClass:"message"},[e("div",{staticClass:"message__content"},[e("span",{staticClass:"message__author"},[t._v(t._s(a.name))]),e("span",{staticClass:"message__bubble"},[t._v(" "+t._s(a.comment)+" ")])])])})),0)]),e("div",{staticClass:"chat__write--container"},[e("div",{staticClass:"top-wrap"},[e("div",{staticClass:"input-group"},[t._m(4),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newAuthor.name,expression:"newAuthor.name"}],staticClass:"chat__write chat-writer form-control",attrs:{type:"text",placeholder:"이름을 적어주세요","aria-label":"Username","aria-describedby":"basic-addon1"},domProps:{value:t.newAuthor.name},on:{input:function(a){a.target.composing||t.$set(t.newAuthor,"name",a.target.value)}}})]),e("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.addComment}},[e("i",{staticClass:"fas fa-arrow-up"})])]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newAuthor.comment,expression:"newAuthor.comment"}],staticClass:"chat__write chat-comment input-group input-group-lg",attrs:{type:"text",placeholder:"응원 메시지"},domProps:{value:t.newAuthor.comment},on:{input:function(a){a.target.composing||t.$set(t.newAuthor,"comment",a.target.value)}}}),e("div",{staticClass:"chat__icon-right chat__icon"})])]):e("div",[t._v(" rolling paper page 새로 만드는 롤링페이퍼부분 헤더부분 작성부분 보내기 저장하기 "),t._m(5)])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title-wrapper"},[e("h1",{staticClass:"title"},[t._v(" to. 홍길동 훈련병 "),e("span",{staticClass:"badge badge-info"},[t._v("D - 4 !")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[t._v(" 열심히 훈련받고 있는 우리 길동이에게 "),e("br"),t._v(" 응원의 한마디 부탁드려요!! 😸 ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[t._v(" 짧은 내용이어도 여러분들의 한마디가 "),e("br"),t._v(" 길동이에게 큰 힘이 될 거에요💪 ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"btn btn-link share-button",attrs:{type:"button"}},[t._v(" 링크로 초대하기 "),e("i",{staticClass:"far fa-share-square "})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[e("i",{staticClass:"far fa-smile-wink"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"box header-content"},[t._v(" 훈련병 정보입력부분 필수 이름: 필수 훈련소: 선택 추가하기 sns공유하기: ㅇㅇㅇ에게 응원의 한마디 부탁해요! ")]),e("div",{staticClass:"box share-content"},[t._v(" 공유하기 ")]),e("div",{staticClass:"box rolling-content"},[t._v(" 훈련병에게 보내는 응원메세지들 ")])])}],i=(e("b0c0"),3),r={data:function(){return{pageNumber:0,people:i,haveRoll:!0,listCount:4,newAuthor:{name:"",comment:""},relayList:[{name:"태윤이가",comment:" 길동아 훈련 많이 힘들지 ㅎㅎ 몸 조심하고 수료하면 보자. 파이팅!"},{name:"지우석",comment:"  D-10 !! 이제 한자리네 ㅋㅋ 생각보다 금방이지?"},{name:"정호",comment:" 으악 인편 못써줘서 미안해. 대신 롤링페이퍼에라도 응원메시지 남길게. 파이팅!"},{name:"은상",comment:" 길동아 수료까지 얼마 안남았네? 조금만 더 힘내!"}]}},methods:{toggleNext:function(){this.pageNumber=!this.pageNumber},addComment:function(){""!==this.newAuthor.name&&""!==this.newAuthor.comment&&(this.relayList.push({name:this.newAuthor.name,comment:this.newAuthor.comment}),this.newAuthor.name="",this.newAuthor.comment="",this.listCount++)},handleSend:function(){this.$router.push({path:"/write/send",params:{mailText:this.mailText}})}}},c=r,o=(e("c0fc"),e("2877")),l=Object(o["a"])(c,s,n,!1,null,"283eea94",null);a["default"]=l.exports},"5edb":function(t,a,e){},c0fc:function(t,a,e){"use strict";var s=e("5edb"),n=e.n(s);n.a}}]);
//# sourceMappingURL=chunk-45c92f62.272bf165.js.map