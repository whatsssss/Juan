/**
 * @파일명 : MO_ADDRESS_1000.js
 * @메뉴명 : 주소 찾기 팝업
 * @author KDC
 * @since 2021.02.20
 */ 
 var global = {
    tagId : MData.param('tagId'),
};

var pageInit = function() {
   setEvent();

   sample3_execDaumPostcode();
};

var setEvent = function() {

};


// 우편번호 찾기 찾기 화면을 넣을 element
var element_wrap = document.getElementById('wrap');

function foldDaumPostcode() {
    // iframe을 넣은 element를 안보이게 한다.
    element_wrap.style.display = 'none';
}

function sample3_execDaumPostcode() {
    // 현재 scroll 위치를 저장해놓는다.
    var currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    new daum.Postcode({
        oncomplete: function(data) {
            // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
            console.log(data);

            var addr = '';      //주소
            var zoneCode = ""   //우편번호

            zoneCode = data.zonecode;

            //사용자가 선택한 주소 타입(도로명 R, 지번)에 따라 해당 주소 값을 가져온다.
            addr = data.address;    //data.userSelectedType === 'R' ? data.roadAddress : data.jibunAddress;

            // iframe을 넣은 element를 안보이게 한다.
            // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
            element_wrap.style.display = 'none';

            MPage.back({
                param : {
                    address : addr,
                    admsBuildingNm : data.bname+" "+data.buildingName,
                    zoneCode : zoneCode,
                    tagId : global.tagId,
                    buildingNM : data.buildingName,
                    buildingCode : data.buildingCode,
                }
            })
        },
        // 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
        onresize : function(size) {
            element_wrap.style.height = size.height+'px';
        },
        width : '100%',
        height : '100%'
    }).embed(element_wrap);

    // iframe을 넣은 element를 보이게 한다.
    element_wrap.style.display = 'block';
}


var MStatus = {
      onReady: function() {
         pageInit();
      },
      
      onHide: function(){
         
      },
      
      onRestore: function() {
      },
      
      onResume: function() {
         pageFn.pageBack();
      },
      
      onDestroy: function() {
      },
      
//      onBack: function() {
//          pageFn.pageBack();
//      },
};