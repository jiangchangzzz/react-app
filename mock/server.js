const fs=require('fs');
const Koa=require('koa');
const Router=require('koa-router');
const KoaBody=require('koa-body');

const app=new Koa();
const router=new Router();
const koaBody=new KoaBody();

router.get('/',async (context)=>{
    let html='<h1>Home</h1>'
    context.body=html;
});

router.get('/about',async (context)=>{
    let html='<h1>About</h1>';
    context.body=html;
});

router.post('/api/post',koaBody,async (context)=>{
    console.log(context.request.body);
    context.body=JSON.stringify(context.request.body);
});

//获取主页广告数据
router.get('/api/ad',async (context)=>{
    const data=require('./home/ad.js');
    context.body=data;
});

//获取主页列表数据
router.get('/api/list/:city/:page',async (context)=>{
    console.log(context.params.city);
    console.log(context.params.page);

    const data=require('./home/list.js');
    context.body=data;
});

//获取搜索页列表数据
router.get('/api/search/:keyword/:page',async (context)=>{
    console.log(`search ${context.params.keyword} ${context.params.page}`);

    const data=require('./search/list.js');
    context.body=data;
});

//获取详情页店铺信息
router.get('/api/detail/info/:id',async (context)=>{
    console.log(`detail info ${context.params.id}`);

    const data=require('./detail/info.js');
    context.body=data;
});

//获取详情页评论数据
router.get('/api/detail/comment/:id',async (context)=>{
    console.log(`detail comment ${context.params.id}`);

    const data=require('./detail/comment.js');
    context.body=data;
});

router.post('/api/login',koaBody,async (context)=>{
    console.log(`login ${context.request.body}`);

    const data=require('./login/user.js');
    context.body=data;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);