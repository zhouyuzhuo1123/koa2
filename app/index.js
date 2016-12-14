
import koa from 'koa'
import convert from 'koa-convert'
import creatStatic from 'koa-static'
var app = new koa()

const _use = app.use
app.use = x => _use.call(app, convert(x))

app.use(creatStatic('./static'))





app.listen(3000)
console.log('listen:3000')