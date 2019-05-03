var rootapi = 'http://127.0.0.1:4000'

//定义全部数据变量
var total = 0
//定义页面展示数据条数变量
var pageSize = 5
//定义全部页数变量
var allPage = 0
//定义目标页数变量
var targetPage = 1
//定义页数变量
var nowPage = 1
//定义商品分类类型变量
var Classify = ''
//定义模糊查询变量
var fuzzySearch = ''

//切换页面
$(function() {
	$(".tabs").slide({ trigger: "click" });
});

//图片上传自定义事件
function uploadImg(){
    //通过FormData构造函数创建一个空对象
    let formData = new FormData()

    //可以通过append()方法来追加数据(末尾处追加)
    formData.append( "test", $("#imageFile")[0].files[0] )
    console.log($("#imageFile")[0].files[0])

    //通过get方法对值进行读取
    console.log(formData.get("test"))

	$.ajax({
		type:"post",
		url:rootapi + "/api/upload/img",
		async:true,
		data:formData,
		cache:false,
		contentType:false,
		processData:false,
		success:function(data){
            console.log(data)
			if(data.err == 0){
                //attr() 方法设置或返回被选元素的属性值。
                // $('#image').attr('src','http://127.0.0.1:4000/' + data.path)
                $('#image').attr('src', data.path)
			}
		},						
		error:function(jqXHR, textStatus, errorThrown){
         	alert("失败");
        }						
	});

}

//上传图片框显示
$('#uploadImg').on('click', function(){
    $('#image').css('display','block').attr('src','');
})

//添加商品事件
$('#addgoods').on('click', function(){
    // console.log('商品id:',$('#goodsId').val())
    // console.log('商品名称:',$('#goodsName').val())
    // console.log('商品描述:',$('#simpleDesc').val())
    // console.log('商品价格:',$('#shopPrice').val())
    // console.log('商品分类:',$('#classify').val())
    // console.log('商品图片',$('#image').attr('src').split('/')[3] + '/' + $('#image').attr('src').split('/')[4])
    // console.log($('#image').attr('src'))

    let goodsId = $('#goodsId').val()
    let goodsName = $('#goodsName').val()
    let simpleDesc = $('#simpleDesc').val()
    let shopPrice = $('#shopPrice').val()
    let classify = $('#classify').val()
    let listPicture = $('#image').attr('src')

    let showid = false
    let showname = false
    let showdesc = false
    let showprice = false
    let showclass = false
    let showlist = false

    if(goodsId == ''){
        showid
    }else{
        showid = true
    }

    if(goodsName == ''){
        showname
    }else{
        showname = true
    }

    if(simpleDesc == ''){
        showdesc
    }else{
        showdesc = true
    }

    if(shopPrice == ''){
        showprice
    }else{
        showprice = true
    }

    if(classify == ''){
        showclass
    }else{
        showclass = true
    }

    if(listPicture == ''){
        showlist
    }else{
        showlist = true
    }

    // console.log(showid)
    // console.log(showname)
    // console.log(showdesc)
    // console.log(showprice)
    // console.log(showclass)
    // console.log(showlist)

    let goodsData = {
        goods_id: goodsId,
        goods_name: goodsName,
        simple_desc: simpleDesc,
        shop_price: shopPrice,
        list_picture: listPicture,
        classify: classify,
    }

    if( showid == true && showname == true && showdesc == true && showprice == true && showclass == true && showlist == true ){       
        // console.log('发起请求')
        $.post(rootapi + '/api/inDescribe/describe', goodsData, function(res){
            // console.log('发送成功')
            // console.log(res)
            if(res.err == 0){
                alert('添加商品成功')
                window.location.href = 'http://127.0.0.1:4000/html/index.html';
                window.location.reload()
            }else{
                alert('添加商品失败')
            }
        })

    }else{
        alert('请填写完所有项')
    }



})

//分页处理事件
function goPage(type){
    
    console.log(type)

    switch(type) {
        
        //首页
        case 'first':
            targetPage = 1
            break;
        
        //尾页
        case 'last':
			targetPage = allPage
            break;
            
        //上一页
        case 'prev':
			targetPage = nowPage > 1?nowPage - 1 : 1
            break;
            
        //下一页
        case 'next':
			targetPage = nowPage < allPage?nowPage + 1 : allPage
            break;
            
        //去到某一页
        case 'jump':
            targetPage = $('#jump').val()
            if( targetPage > allPage ){
                targetPage == allPage
                console.log('没有更多数据了')
            }else{
                targetPage
            }
            break;
    }

    nowPage = targetPage

    goodsData(targetPage,Classify,fuzzySearch)
}

goodsData(nowPage,Classify,fuzzySearch)

//获取商品数据
function goodsData(targetpage,Classify,fuzzySearch){
    console.log(targetpage)
    let goodsdata = {
        targetpage:targetpage,
        pagesize:pageSize,
        Classify:Classify,
        fuzzySearch:fuzzySearch
    }
    $.post( rootapi + '/api/inDescribe/chaDescribe', goodsdata, function(res){
        console.log(res.data)
        console.log(res.data.data)
        console.log(res.data.total)
        if(res.err == 0){
            loadingTbody(res.data.data);
            total = res.data.total
            //ceil向上取整
            allPage = Math.ceil(total / pageSize)
            $('#page').text(`${nowPage}/${allPage}页`)
        }else{
            console.log(res.msg)
        }
    },'json')   
}

//根据数据渲染列表
function loadingTbody(data){
    console.log(data)  
	let html = ''
	$('#tbody').html('')
	for (var i = 0;i < data.length; i++) {
        // console.log(data[i].list_picture)
		html = `
			<tr>
				<td>${data[i].goods_id}</td>
				<td>${data[i].goods_name}</td>
				<td>${data[i].simple_desc}</td>
				<td>
					<img id="tupian" src="${data[i].list_picture}"/>
                </td>
                <td>${data[i].shop_price}</td>
                <td>${data[i].classify}</td>
				<td class="edit"><button onclick="btn_edit('describeUpdate.html','${data[i].goods_id}')"><i class="icon-edit bigger-120"></i>编辑</button></td>
				<td class="delete"><button onclick="btn_delete('${data[i].goods_id}')"><i class="icon-trash bigger-120"></i>删除</button></td>
			</tr>
			`
		$('#tbody').append(html)
	}
								
}

//分类查询
$('#fltype').change(function(){
	Classify = $('#fltype option:selected').text()
	console.log(Classify)
	goodsData(nowPage,Classify,fuzzySearch)		
})
				
//模糊查询
$('#flbtn').click(function(){
	fuzzySearch = $('#chaxun').val();
	console.log(fuzzySearch)
    goodsData(nowPage,Classify,fuzzySearch)
    $('#chaxun').val("");
})

//删除函数				
var btn_delete = function(id) {
    $.jq_Confirm({
    message: "您确定要删除吗?",
    btnOkClick: function() {
        console.log(id)
        $.ajax({
        type: "post",
        url: rootapi + '/api/inDescribe/delone',
        data: {goods_id:id},
        success: function(res) {
            console.log(res)
            if(res.err == 0) {
                $.jq_Alert({
                message: "删除成功",
                });
                window.location.href = 'http://127.0.0.1:4000/html/index.html';
                window.location.reload()
            }else{
                $.jq_Alert({
                message: "删除失败",
                });
            }
                                                        
        }
        });
    }
    });
}

//修改商品数据的id
var btn_edit = function(url,goodsid) {
    // console.log(url)
    console.log(goodsid)                       
    //存储修改的商品编号
    window.localStorage.setItem('updateid',goodsid)
    //跳转到修改页面
    window.location.href = url;                  
} 