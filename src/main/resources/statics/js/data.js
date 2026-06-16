// 商家数据（6城8类，共48家商家）
const shopData = [
    // ==================== 北京 ====================
    {name:"老北京铜锅涮肉",score:4.8,tags:["火锅","老字号"],address:"北京市朝阳区建国路88号",category:"美食",city:"北京",img:"../../images/beijing/lbjtgsr.jpg"},
    {name:"北京烤鸭旗舰店",score:4.9,tags:["烤鸭","特色菜"],address:"北京市东城区王府井大街",category:"美食",city:"北京",img:"../../images/beijing/bjkyqjd.jpg"},
    {name:"北京国际酒店",score:4.8,tags:["五星酒店","商务"],address:"北京市朝阳区建国门外大街",category:"酒店",city:"北京",img:"../../images/beijing/gjjd.jpg"},
    {name:"星光影城",score:4.6,tags:["电影","IMAX"],address:"北京市海淀区中关村大街",category:"休闲娱乐",city:"北京",img:"../../images/beijing/xgyc.jpg"},
    {name:"京城美容会所",score:4.7,tags:["美容","护肤"],address:"北京市西城区金融街",category:"丽人",city:"北京",img:"../../images/beijing/mrhs.jpg"},
    {name:"爱车坊汽车服务",score:4.5,tags:["洗车","保养"],address:"北京市丰台区西站南路",category:"汽车",city:"北京",img:"../../images/beijing/qcfw.jpg"},
    {name:"力健健身中心",score:4.7,tags:["健身","瑜伽"],address:"北京市朝阳区三里屯",category:"运动健身",city:"北京",img:"../../images/beijing/jsf.jpg"},

    // ==================== 上海 ====================
    {name:"上海本帮菜餐厅",score:4.7,tags:["本帮菜","特色"],address:"上海市黄浦区南京东路123号",category:"美食",city:"上海",img:"../../images/shanghai/bbc.jpg"},
    {name:"小杨生煎总店",score:4.8,tags:["生煎","小吃"],address:"上海市静安区南京西路",category:"美食",city:"上海",img:"../../images/shanghai/shengjian.jpg"},
    {name:"上海外滩酒店",score:4.9,tags:["江景房","高端"],address:"上海市黄浦区外滩",category:"酒店",city:"上海",img:"../../images/shanghai/waitan.jpg"},
    {name:"上海迪士尼乐园",score:4.9,tags:["主题乐园","游玩"],address:"上海市浦东新区迪士尼度假区",category:"休闲娱乐",city:"上海",img:"../../images/shanghai/dsn.jpg"},
    {name:"魔都美甲美睫",score:4.6,tags:["美甲","美睫"],address:"上海市徐汇区淮海路",category:"丽人",city:"上海",img:"../../images/shanghai/meijia.jpg"},
    {name:"上海车享家",score:4.5,tags:["维修","美容"],address:"上海市闵行区虹莘路",category:"汽车",city:"上海",img:"../../images/shanghai/qc.jpg"},
    {name:"宝贝王国亲子馆",score:4.7,tags:["亲子","早教"],address:"上海市宝山区万达广场",category:"亲子",city:"上海",img:"../../images/shanghai/qzhd.jpg"},
    {name:"上海瑜伽生活馆",score:4.8,tags:["瑜伽","普拉提"],address:"上海市长宁区古北新区",category:"运动健身",city:"上海",img:"../../images/shanghai/yujia.jpg"},

    // ==================== 广州 ====================
    {name:"广州早茶茶楼",score:4.8,tags:["早茶","点心"],address:"广州市荔湾区上下九",category:"美食",city:"广州",img:"../../images/guangzhou/zaocha.jpg"},
    {name:"粤式烧腊餐厅",score:4.7,tags:["烧鹅","粤菜"],address:"广州市天河区天河路",category:"美食",city:"广州",img:"../../images/guangzhou/sahola.jpg"},
    {name:"广州长隆酒店",score:4.8,tags:["亲子酒店","乐园"],address:"广州市番禺区香江大道",category:"酒店",city:"广州",img:"../../images/guangzhou/cahnglong.jpg"},
    {name:"广州塔观光层",score:4.9,tags:["观光","夜景"],address:"广州市海珠区广州塔",category:"休闲娱乐",city:"广州",img:"../../images/guangzhou/ta.jpg"},
    {name:"羊城美容SPA",score:4.6,tags:["SPA","护肤"],address:"广州市越秀区北京路",category:"丽人",city:"广州",img:"../../images/guangzhou/spa.jpg"},
    {name:"广州汽车养护中心",score:4.5,tags:["洗车","改装"],address:"广州市白云区机场路",category:"汽车",city:"广州",img:"../../images/guangzhou/qc.jpg"},
    {name:"童乐世界亲子乐园",score:4.8,tags:["亲子","淘气堡"],address:"广州市花都区融创茂",category:"亲子",city:"广州",img:"../../images/guangzhou/tl.jpg"},
    {name:"广州活力健身",score:4.7,tags:["健身","舞蹈"],address:"广州市黄埔区科学城",category:"运动健身",city:"广州",img:"../../images/guangzhou/jianshen.jpg"},

    // ==================== 深圳 ====================
    {name:"深圳海鲜大排档",score:4.7,tags:["海鲜","夜宵"],address:"深圳市南山区蛇口老街",category:"美食",city:"深圳",img:"../../images/shenzhen/haixian.jpg"},
    {name:"粤式茶餐厅",score:4.6,tags:["奶茶","菠萝油"],address:"深圳市福田区华强北",category:"美食",city:"深圳",img:"../../images/shenzhen/cct.jpg"},
    {name:"深圳海景酒店",score:4.8,tags:["海景","商务"],address:"深圳市盐田区大梅沙",category:"酒店",city:"深圳",img:"../../images/shenzhen/hjjd.jpg"},
    {name:"深圳欢乐谷",score:4.8,tags:["游乐园","刺激"],address:"深圳市南山区华侨城",category:"休闲娱乐",city:"深圳",img:"../../images/shenzhen/hlg.jpg"},
    {name:"深圳美甲沙龙",score:4.7,tags:["美甲","造型"],address:"深圳市罗湖区东门老街",category:"丽人",city:"深圳",img:"../../images/shenzhen/mj.jpg"},
    {name:"深圳车博士",score:4.6,tags:["维修","贴膜"],address:"深圳市宝安区宝安大道",category:"汽车",city:"深圳",img:"../../images/shenzhen/qc.jpg"},
    {name:"宝贝趣玩亲子馆",score:4.8,tags:["亲子","手工"],address:"深圳市龙岗区万科广场",category:"亲子",city:"深圳",img:"../../images/shenzhen/bb.jpg"},
    {name:"深圳健身工坊",score:4.7,tags:["健身","私教"],address:"深圳市龙华区红山6979",category:"运动健身",city:"深圳",img:"../../images/shenzhen/js.jpg"},

    // ==================== 成都 ====================
    {name:"成都蜀香火锅",score:4.9,tags:["川味火锅","网红"],address:"成都市锦江区春熙路88号",category:"美食",city:"成都",img:"../../images/chengdu/hg.jpg"},
    {name:"成都串串香总店",score:4.8,tags:["串串","麻辣"],address:"成都市青羊区宽窄巷子",category:"美食",city:"成都",img:"../../images/chengdu/ccx.jpg"},
    {name:"成都宽窄酒店",score:4.7,tags:["民宿风","古色"],address:"成都市金牛区宽窄巷子附近",category:"酒店",city:"成都",img:"../../images/chengdu/kz.jpg"},
    {name:"成都锦里古街",score:4.8,tags:["古街","小吃"],address:"成都市武侯区锦里",category:"休闲娱乐",city:"成都",img:"../../images/chengdu/jl.jpg"},
    {name:"蓉城美容馆",score:4.6,tags:["美容","纹绣"],address:"成都市成华区建设路",category:"丽人",city:"成都",img:"../../images/chengdu/mr.jpg"},
    {name:"成都汽车服务中心",score:4.5,tags:["保养","清洗"],address:"成都市高新区天府大道",category:"汽车",city:"成都",img:"../../images/chengdu/qc.jpg"},
    {name:"童趣亲子城堡",score:4.8,tags:["亲子","乐园"],address:"成都市温江区国色天乡",category:"亲子",city:"成都",img:"../../images/chengdu/qz.jpg"},
    {name:"成都瑜伽小院",score:4.7,tags:["瑜伽","冥想"],address:"成都市郫都区犀浦",category:"运动健身",city:"成都",img:"../../images/chengdu/yj.jpg"},

    // ==================== 杭州 ====================
    {name:"杭州杭帮菜餐厅",score:4.8,tags:["杭帮菜","清淡"],address:"杭州市西湖区西湖边",category:"美食",city:"杭州",img:"../../images/hangzhou/hbc.jpg"},
    {name:"杭州小笼包总店",score:4.7,tags:["小笼包","点心"],address:"杭州市上城区河坊街",category:"美食",city:"杭州",img:"../../images/hangzhou/xlb.jpg"},
    {name:"杭州西湖酒店",score:4.9,tags:["湖景","雅致"],address:"杭州市西湖区西湖风景区",category:"酒店",city:"杭州",img:"../../images/hangzhou/jd.jpg"},
    {name:"杭州宋城景区",score:4.8,tags:["演出","古文化"],address:"杭州市之江路148号",category:"休闲娱乐",city:"杭州",img:"../../images/hangzhou/jq.jpg"},
    {name:"杭州美容养生会所",score:4.6,tags:["SPA","养生"],address:"杭州市下城区武林路",category:"丽人",city:"杭州",img:"../../images/hangzhou/hs.jpg"},
    {name:"杭州车养护",score:4.5,tags:["洗车","维修"],address:"杭州市余杭区良渚",category:"汽车",city:"杭州",img:"../../images/hangzhou/qc.jpg"},
    {name:"宝贝成长亲子园",score:4.8,tags:["亲子","早教"],address:"杭州市萧山区钱江世纪城",category:"亲子",city:"杭州",img:"../../images/hangzhou/bb.jpg"},
    {name:"杭州禅意瑜伽馆",score:4.7,tags:["瑜伽","修身"],address:"杭州市富阳区东洲岛",category:"运动健身",city:"杭州",img:"../../images/hangzhou/sy.jpg"}
];
