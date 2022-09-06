// body안에 있는 내용을 읽고 난 후 실행해!
$(function(){
    $('.accordion .content').eq(0).show() // 젤 처음 content를 열어두는 코드 펼치고 싶은  content의 인덱스를 eq에 넣으면 됨
    $('.accordion .title').click(function(){
        // content 슬라이드 코드
        $(this).siblings('.accordion .content').slideUp()
        $(this).next().stop().slideToggle()

        // title 클릭시 title 색상 바뀌는 코드
        $(this).addClass('active')  
        $(this).siblings('.accordion .title').removeClass('active')
    })
})