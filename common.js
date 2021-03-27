const news = [
  {
    id: '356412',
  title: '新冠肺炎来袭 ',
  poster: 'https://bkimg.cdn.bcebos.com/pic/203fb80e7bec54e723987344b6389b504fc26a77?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg',
  add_date: '2020 - 02 - 11',
  content: ' 2020年2月11日，世界卫生组织总干事谭德塞在瑞士日内瓦宣布，将新型冠状病毒感染的肺炎命名为“COVID-19”。2月22日，国家卫生健康委发布通知，“新型冠状病毒肺炎”英文名称修订为“COVID-19”。'

  },
  {
    id: '546734',
  title: '警惕诺如病毒',
  poster: 'https://th.bing.com/th/id/R1299468ac08bdde2022179c3ae8f077c?rik=hbSfgSlr%2bzmZCw&riu=http%3a%2f%2fimg.gzcdc.org.cn%2fUploadFiles%2feducation%2f2015%2f11%2f20151120154450372131485.jpg&ehk=egKnjaGokmzAweXN7KwJ5XWclVbtMARArROJMC3stDA%3d&risl=&pid=ImgRaw',
  add_date: '2020 - 10 - 05',
  content: 
  '   诺如病毒感染性腹泻,是由诺如病毒属病毒引起的腹泻，具有发病急、传播速度快、涉及范围广等特点，是引起非细菌性腹泻暴发的主要病因。诺如病毒感染性强，以肠道传播为主，可通过污染的水源、食物、物品、空气等传播，常在社区、学校、餐馆、医院、托儿所、孤老院及军队等处引起集体暴发。诺如病毒遗传高度变异，在同一时期和同一社区内可能存在遗传特性不同的毒株流行。诺如病毒抗体没有显著的保护作用，尤其是没有长期免疫保护作用，极易造成反复感染，诺如病毒感染性腹泻在全世界范围内均有流行，全年均可发生感染，感染对象主要是成人和学龄儿童，寒冷季节呈现高发。诺如病毒感染主要引起胃肠炎。胃肠炎的症状是恶心、呕吐、腹泻等，部分人主诉有头痛、发热、寒战、肌肉疼痛。症状通常持续1-2天。普遍感到病情严重，一日多次剧烈呕吐。症状一般摄入病毒后24-48小时出现，但是暴露后12小时也可能出现症状。没有证据表明感染者能成为长期病毒携带者，但是从发病到康复后2周感染者的粪便和呕吐物中可以检出病毒。'
  },
  {
    id: '239875',
  title: '春季养身',
  poster: 'http://img.99.com.cn/uploads/202103/449_101316_1.jpg',
  add_date: '2021 - 02- 29',
  content: '　1、防止春寒雨天的时候，气温会降低。虽然说春季的气温没有冬季那么低，但是下雨之后，气温会快速下降。为了应对这样的情况，平日里不能过早换上春装，要跟着天气变化，增减衣服。春季下雨天的时候，人体会感到寒冷，尤其是双脚。建议外出过程中，需要穿防水的鞋子，避免行走途中导致双脚浸湿。双脚弄湿了，就容易导致寒湿之气从脚底侵入人体，对人体健康不利。同时，下雨天的时候，往往会有风，外出时建议穿大衣，能够更好地遮挡身体，帮助身体防风。让身体获得更好地保暖措施，将体内的寒湿之气赶走。2、预防炎症春天雨水天气多，加上病毒和细菌比较活跃，所以人体很容易诱发炎症。建议日常生活中，人们要提前预防炎症，避免被滴虫、真菌、支原体等微生物侵入身体。一旦侵入体内，则诱发炎症。3、认真祛湿春季雨水多，加上气温比较低，人体很容易侵入寒湿之气。人体内湿气重，将会影响气血流通，导致身体环境失衡。所以说，春季的时候人们需要认真祛湿。'
  }
]

//获取新闻列表
function getNewList()
{
  let list = [];
  for( var i = 0; i < news.length; i++){
    let obj = {};
    obj.id = news[i].id;
    obj.poster = news[i].poster;
    obj.content = news[i].content;
    obj.add_date = news[i].add_date;
    obj.title = news[i].title;
    list.push(obj);
  }
  return list;
}

//获取新闻内容
function getNewsDetail(newsID)
{
  let message = {
    code:'404',
    news:{}
  };
  for( var i = 0; i < news.length; i++){
    if( newsID == news[i].id ){
      message.code = '200',
      message.news = news[i];
      break;
    }
  }
  return message;
}

module.exports = {
  getNewList:getNewList,
  getNewsDetail:getNewsDetail
}