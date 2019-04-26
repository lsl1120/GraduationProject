var rootapi = 'http://127.0.0.1:4000'

getInfo()

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

//获取当前id的商品数据事件
function getInfo(){
	let goodsid = window.localStorage.getItem('updateid')
	console.log(goodsid)
	$.post(rootapi + '/api/inDescribe/getById',{goodsid:goodsid},function(res){
		// console.log(res.data[0])
		$('#goodsId').val(res.data[0].goods_id)
		$('#goodsName').val(res.data[0].goods_name)
		$('#simpleDesc').val(res.data[0].simple_desc)
		$('#shopPrice').val(res.data[0].shop_price)
		$('#classify').val(res.data[0].classify)
		$('#image').attr('src',res.data[0].list_picture)								
	})
}

//修改当前商品信息事件
$('#describe').on('click',function(){
	let url = '/api/inDescribe/upById'
	console.log('商品id:',$('#goodsId').val())
    console.log('商品名称:',$('#goodsName').val())
    console.log('商品描述:',$('#simpleDesc').val())
    console.log('商品价格:',$('#shopPrice').val())
    console.log('商品分类:',$('#classify').val())
    // console.log('商品图片',$('#image').attr('src').split('/')[3] + '/' + $('#image').attr('src').split('/')[4])
    console.log($('#image').attr('src'))
	
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

    if(listPicture == 'undefined/undefined'){
        showlist
    }else{
        showlist = true
	}
	
	console.log(showid)
    console.log(showname)
    console.log(showdesc)
    console.log(showprice)
    console.log(showclass)
	console.log(showlist)
	
	let goodsInsetData = {
        goods_id: goodsId,
        goods_name: goodsName,
        simple_desc: simpleDesc,
        shop_price: shopPrice,
        list_picture: listPicture,
        classify: classify,
	}
	
	if( showid == true && showname == true && showdesc == true && showprice == true && showclass == true && showlist == true ){       
        console.log('发起请求')
        $.post(rootapi + '/api/inDescribe/upById', goodsInsetData, function(res){
            console.log('发送成功')
            console.log(res)
            if(res.err == 0){
                alert('修改商品信息成功')
                // window.location.href = 'http://127.0.0.1:4000/html/index.html';
                window.location.reload()
            }else{
                console.log('修改商品信息失败')
            }
        })

    }else{
        console.log('请填写完所有项')
    }
	
})