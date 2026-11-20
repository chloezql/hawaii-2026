/* 行程来源：2026/11/16 完整排班表；往返航班及欧胡酒店依据用户提供的预订截图更新。
   仅 confirmed 标记的项目已预订。截图未显示的航班号与到达时间不作推断。
   公开数据不包含姓名、订单号、预订确认号或原始截图。 */
window.TRIP = {
  updated: '2026-11-19',
  flights: [
    {date:'2026-12-23',name:'飞往欧胡',airline:'Alaska Airlines',confirmed:true,cabin:'经济舱',from:'SFO',to:'HNL',depart:'07:20',arrive:null,depZone:'旧金山 PST',arrZone:'檀香山 HST',note:'已预订经济舱。航班号、到达时间、航站楼与行李额度待补充。抵达后打车去 Waikiki。'},
    {date:'2026-12-28',name:'欧胡 → 大岛',airline:'岛间航班 · 航司待定',from:'HNL',to:'ITO',depart:'09:31',arrive:'10:28',depZone:'檀香山 HST',arrZone:'Hilo HST',note:'候选时段。先在 HNL 还车，到 ITO 后另取租车。须与观星团接送衔接。'},
    {date:'2027-01-01',name:'回到旧金山',airline:'Alaska Airlines',confirmed:true,cabin:'经济舱',from:'KOA',to:'SFO',depart:'16:53',arrive:null,depZone:'Kona HST',arrZone:'旧金山 PST',note:'已预订经济舱。航班号、到达时间、航站楼与行李额度待补充。暂按 14:00 左右还车，再接驳去航站楼。'}
  ],
  hotels: [
    {id:'halepuna',name:'Halepuna Waikiki by Halekulani',confirmed:true,area:'Waikiki · 欧胡',in:'2026-12-23',out:'2026-12-28',nights:5,checkin:'15:00',checkout:'12:00',address:'2233 Helumoa Road, Honolulu, HI 96815',phone:'+1 808-921-7272',query:'Halepuna Waikiki by Halekulani 2233 Helumoa Road Honolulu HI 96815',note:'本次预订注明无度假村费。若入住当天 21:00 后抵达，须直接联系酒店，以免预订被取消。27 日停车安排待确认。'},
    {id:'naniloa',name:'Grand Naniloa',area:'Hilo · 大岛东岸',in:'2026-12-28',out:'2026-12-30',nights:2,query:'Grand Naniloa Hotel Hilo Hawaii',note:'暂定住宿。28 日先寄存行李，观星团拟从这里接送，须以团方确认为准。'},
    {id:'kona',name:'Kona 酒店待选',area:'Kailua-Kona · 大岛西岸',in:'2026-12-30',out:'2027-01-01',nights:2,query:null,note:'当前按住 Kailua-Kona 镇附近排。若改住 Waikoloa，1/1 上午改在 A-Bay／度假区活动，避免折返。'}
  ],
  rentals: [
    {title:'欧胡 · 短租一段',start:'12/27 上午 · 取车地点待定',end:'12/28 早上 · HNL 还车',note:'植物园 → 古兰尼 → 北岸；23–26 日不连续租车。是否按一天计费，以实际取还时间与订单为准。'},
    {title:'大岛 · 东进西出',start:'12/28 · ITO 机场取车',end:'1/1 约 14:00 · KOA 机场还车',note:'预订时选异地还车。30 日带行李从 Hilo 向西岸移动，骑马场的具体位置和行车时间待核对。'}
  ],
  days: [
    {
      date:'2026-12-23',area:'欧胡',region:'oahu',title:'落地，切换海岛时间',english:'Hello, island time.',intro:'第一天留给海风。到 Waikiki 安顿下来，散步，吃一顿海鲜。',hotel:'halepuna',transport:'机场打车 · Waikiki 步行',route:['SFO','HNL','Waikiki','福缘'],tags:['抵达日','海边散步'],
      meals:{breakfast:'出发前或机上安排',lunch:'落地后随胃口简单吃',dinner:'福缘 Fook Yuen · 海鲜'},
      todo:['补充去程航班号、到达时间与行李额度','补充 Halepuna 房型、取消条款与行李寄存安排','核对福缘营业时间并决定是否订位'],
      events:[
        {time:'07:20 起飞',type:'交通',title:'从旧金山飞往檀香山',text:'Alaska Airlines 经济舱已预订。07:20 从 SFO 起飞，使用旧金山当地时间。',flight:0,notes:['到达时间和航班号尚未提供，补充后再细化当天安排。','抵达后取行李、打车前往 Waikiki；不在机场取租车。']},
        {time:'抵达后',type:'住宿',title:'在 Waikiki 安顿下来',text:'Halepuna Waikiki by Halekulani 已预订，12/23–12/28，共住 5 晚。',hotel:'halepuna',place:'Halepuna Waikiki by Halekulani 2233 Helumoa Road Honolulu HI 96815',notes:['入住及退房时间均为夏威夷当地时间。房型、取消条款和提早抵达时的行李寄存安排待补充。','本次预订注明无度假村费。','若入住当天 21:00 后抵达，须直接联系酒店，以免预订被取消。']},
        {time:'下午',type:'散步',title:'Waikiki，先去看海',text:'在酒店附近和海边随意走走，不安排需要赶时间的项目。',place:'Waikiki Beach Honolulu',notes:['按落地状态决定散步长度，累了就回酒店休息。']},
        {time:'晚餐',type:'餐饮',title:'福缘 · Fook Yuen',text:'用一顿海鲜开启假期。龙虾或其他海鲜，搭配青菜和面饭。',place:'Fook Yuen Seafood Restaurant Honolulu',notes:['海鲜先问时价，再按食量点菜。','营业、菜单与订位仍待确认。']}
      ]
    },
    {
      date:'2026-12-24',area:'欧胡',region:'oahu',title:'把一整天交给波利尼西亚',english:'Stories of the Pacific.',intro:'今天只玩 PCC。文化村、晚餐和 HĀ 大秀，用往返接送串起来。',hotel:'halepuna',transport:'PCC 往返大巴接送',route:['Waikiki','PCC','Waikiki'],tags:['文化体验','接送省心'],
      meals:{breakfast:'Island Vintage Coffee',lunch:'PCC 园内简餐',dinner:'PCC 套餐晚餐'},todo:['选择 PCC 套餐并确认 12/24 场次','确认大巴集合点、接送时间及返程','核对套餐含餐和 HĀ 大秀座位'],
      events:[
        {time:'早餐',type:'餐饮',title:'Island Vintage Coffee',text:'一份 açaí bowl，加一份咸口早餐，两个人分着吃。',place:'Island Vintage Coffee Royal Hawaiian Center',notes:['出发前吃好早餐，午饭在园内简单解决。']},
        {time:'约 10:00',type:'交通',title:'坐上 PCC 接送大巴',text:'按预订后的指定地点集合，往返接送一起安排。',notes:['10 点为目前的规划时间，实际集合时间以 PCC 凭证为准。','集合地点待补；不要直接把酒店当作接客点。']},
        {time:'中午 → 下午',type:'体验',title:'Polynesian Cultural Center',text:'文化村落、互动活动和表演，给这里留足一整天。',place:'Polynesian Cultural Center Laie Hawaii',notes:['入园及各活动时间在选定套餐后补充。','当天不叠加北岸或其他景点。']},
        {time:'晚间',type:'体验',title:'套餐晚餐 + HĀ 大秀',text:'吃完套餐晚餐，留下来看晚间大秀，结束后坐大巴返回。',place:'Polynesian Cultural Center Laie Hawaii',notes:['餐食内容、晚餐时间和大秀座位以最终套餐为准。','回 Waikiki 的准确时间待团方确认。']}
      ]
    },
    {
      date:'2026-12-25',area:'欧胡',region:'oahu',title:'海上观鲸，沿岸兜风',english:'A Christmas by the sea.',intro:'吃好早餐再出海。午间用饭团轻轻垫一下，下午坐蓝线看海岸。',hotel:'halepuna',transport:'观鲸接送／打车 · Trolley',route:['Waikiki','观鲸码头','蓝线环线','烤肉','Hilton'],tags:['海岛圣诞','观鲸','蓝线环游'],
      meals:{breakfast:'酒店或附近 · 鸡蛋、吐司／三明治',lunch:'两个人先买两个饭团，饿了再补',dinner:'17:30 Han no Daidokoro 烤肉'},todo:['确认 10:00 观鲸场次、码头与接送','核对蓝线圣诞班表及候车地点','确认烤肉节日营业与 17:30 订位','核对 12/25 Hilton 是否燃放烟花'],
      events:[
        {time:'早餐',type:'餐饮',title:'先吃一顿扎实的早餐',text:'鸡蛋、吐司或三明治。今天午饭较轻，早餐不用省。',notes:['在酒店或附近解决，给前往码头留好时间。']},
        {time:'10:00–11:30',type:'体验',title:'出海，寻找鲸鱼',text:'目标为纯观鲸船团，具体运营商和集合码头待定。',notes:['时段为计划，未订船团。','是否含接送、准确报到时间和天气取消政策，订前一起确认。']},
        {time:'中午',type:'餐饮',title:'两个饭团，轻轻垫一下',text:'不安排正式午餐。两人先买两个饭团，饿了再补。',notes:['饭团在上 Trolley 前吃完。','17:30 吃烤肉，午间按胃口安排即可。']},
        {time:'约 13:00 · 2 小时车程预算',type:'体验',title:'Ocean View 蓝线，坐一圈',text:'沿东南海岸看风景，以坐完整个 loop 为主，不专门进 Sea Life Park。',place:'Waikiki Shopping Plaza Royal Hawaiian Avenue',notes:['圣诞当天是否运行与发车时间待确认。','规划从 Waikiki Shopping Plaza 的 Royal Hawaiian Avenue 一侧上车，具体候车点按运营方指示。','建议提前约 20 分钟到始发站候车。两小时是车程预算，排队候车另外留余量。','坐完回酒店休息；若班表不合适，就在 Waikiki 放松。']},
        {time:'17:30',type:'餐饮',title:'Han no Daidokoro 烤肉',text:'宫崎牛、Washu 牛混合点，配蔬菜和米饭。',place:'Han no Daidokoro Honolulu',notes:['目标用餐时间，尚未确认订位。','核对圣诞营业时间和节日菜单。']},
        {time:'19:45 · 待核实',type:'散步',title:'如果有烟花，就去海边',text:'Hilton 烟花作为可选安排，须先确认当天是否燃放。',place:'Hilton Hawaiian Village Waikiki',optional:true,notes:['不把常规周五烟花时间视为圣诞当天的保证。','未燃放或太累时，直接在附近散步、回酒店。']}
      ]
    },
    {
      date:'2026-12-26',area:'欧胡',region:'oahu',title:'市集早餐，山顶看海',english:'A little climb, a big blue.',intro:'KCC 吃早餐、买水果，回酒店放好东西，11 点再去爬钻石山。',hotel:'halepuna',transport:'打车为主',route:['KCC','酒店放东西','钻石山','Ala Moana'],tags:['周六市集','钻石山','购物'],
      meals:{breakfast:'KCC 市集 · 熟食、水果、咖啡',lunch:'下山后简餐，不订卡时间的午餐',dinner:'Katsumidori Sushi Tokyo'},todo:['核对 KCC 圣诞周末的开放安排','预约钻石山 11:00 入园时段','核对 Katsumidori 营业及订位方式'],
      events:[
        {time:'08:00–09:00',type:'餐饮',title:'KCC Farmers’ Market',text:'边逛边吃早餐，买些水果和咖啡。结束后先回酒店放东西。',place:'KCC Farmers Market Honolulu',notes:['此处为目标到访时间，实际市集开放情况须确认。','水果与采购品先放回酒店，不带着去爬山。']},
        {time:'11:00–13:00',type:'徒步',title:'钻石山 · Diamond Head',text:'保留已经讨论好的 11 点时段。登高看海，按体力慢慢走。',place:'Diamond Head State Monument Hawaii',notes:['入园时段和门票未确认，须提前核对预约要求。','带水、防晒和适合步行的鞋；中午按天气与体感决定节奏。']},
        {time:'下山后',type:'休息',title:'午饭、洗澡，回酒店歇一歇',text:'午餐选简餐，不安排需要赶最后点餐时间的正式餐厅。',notes:['下午购物前留出恢复时间。']},
        {time:'约 15:00',type:'购物',title:'Ala Moana，随意逛逛',text:'把下午留给购物，走累了就坐下来。',place:'Ala Moana Center Honolulu',notes:['节日营业时间待核对。']},
        {time:'晚餐',type:'餐饮',title:'Katsumidori Sushi Tokyo',text:'握寿司组合，再加当天喜欢的单贯。',place:'Katsumidori Sushi Tokyo Honolulu',notes:['具体用餐时间与订位待确认。']}
      ]
    },
    {
      date:'2026-12-27',area:'欧胡',region:'oahu',title:'开进山谷，再沿海向北',english:'The scenic way around.',intro:'今天开始短租车。古兰尼中午档是路线的锚点，北岸按剩余时间安排。',hotel:'halepuna',transport:'全天自驾 · 今天取车',route:['取车','植物园','烤鸡','古兰尼','北岸','Waikiki'],tags:['自驾日','古兰尼','北岸'],
      meals:{breakfast:'取车前简单吃',lunch:'Yummy Huli Huli Chicken · 半鸡 + 蒜香虾饭',dinner:'回 Waikiki 简餐，可考虑银座梅林'},todo:['确定租车公司、取车点及酒店停车','优先确认古兰尼 12:30 左右场次与项目','核对植物园及烤鸡摊营业安排'],
      events:[
        {time:'早上',type:'交通',title:'取车，开启一天自驾',text:'今天取车，明天早上到 HNL 还车；取车地点待定。',notes:['确认取车点开放时间、停车和实际计费时长。','只租这一段，23–26 日不连续承担停车费。']},
        {time:'09:00–10:00',type:'自然',title:'Hoʻomaluhia 植物园',text:'先看山谷和绿意，按古兰尼的最终场次调整停留。',place:'Hoomaluhia Botanical Garden Kaneohe',notes:['到访时段为规划，开放与节日安排待确认。']},
        {time:'约 11:00',type:'餐饮',title:'Yummy Huli Huli Chicken',text:'半鸡套餐加蒜香虾饭，两个人分着吃。',place:'Yummy Huli Huli Chicken Kaneohe',notes:['摊位位置、营业时间与当天出摊情况待核对。','若等餐影响古兰尼报到，改为附近快餐。']},
        {time:'目标 12:30–14:30',type:'体验',title:'古兰尼 · UTV / Ride-Along',text:'中午档优先；具体项目、场次与报到时间待预订确认。',place:'Kualoa Ranch Oahu Hawaii',notes:['这是全天路线最需要优先确认的一项。','若只能订更晚场次，减少北岸停靠，不压缩报到时间。','驾驶资格、乘员要求和取消政策按所选项目确认。']},
        {time:'下午 → 傍晚',type:'散步',title:'沿海到北岸，逛 Haleʻiwa',text:'看海岸风景、在小镇短停，停靠多少由当天节奏决定。',place:'Haleiwa Oahu Hawaii',notes:['不为打卡塞满北岸景点。','约 19 点回 Waikiki 为目标，实际看路况。']},
        {time:'约 19:00 后',type:'餐饮',title:'回 Waikiki，轻松吃晚饭',text:'选附近简餐，银座梅林可以作为候选。',place:'Ginza Bairin Waikiki',notes:['回程时间不确定，不订不可取消的固定时间套餐。']}
      ]
    },
    {
      date:'2026-12-28',area:'Hilo',region:'hilo',title:'换一座岛，去云海上等日落',english:'From ocean blue to starlight.',intro:'上午飞到大岛东岸，下午交给观星团。从 Grand Naniloa 接送是当前方案。',hotel:'naniloa',checkout:'halepuna',transport:'HNL 还车 · ITO 取车 · 团车',route:['HNL','ITO','Grand Naniloa','Suisan','观星团'],tags:['岛间飞行','日落观星'],
      meals:{breakfast:'退房前或机场简餐',lunch:'Suisan · poke',dinner:'视观星团是否含餐安排'},todo:['确认 HNL → ITO 航班及早上还车衔接','确定 ITO 取车、KOA 异地还车订单','确认 Grand Naniloa 住宿','确认观星团酒店接送、含餐及结束时间'],
      events:[
        {time:'早上',type:'交通',title:'退房，去 HNL 还车',text:'带齐行李，先还租车，再前往航站楼。',place:'Daniel K Inouye International Airport Honolulu',notes:['须按租车接驳、航空公司要求和最终航班倒推酒店出发时间。']},
        {time:'09:31 → 10:28',type:'交通',title:'欧胡 → Hilo',text:'岛间航班候选时段，两端都用夏威夷时间。',flight:1,notes:['具体航司、航班号与时刻待确认。']},
        {time:'抵达后',type:'住宿',title:'ITO 取车，去酒店寄存行李',text:'Grand Naniloa 暂定；到达较早，先按寄存行李安排。',place:'Grand Naniloa Hotel Hilo Hawaii',notes:['岛上用车从 ITO 取、KOA 还，预订时选择异地还车。','酒店入住与接团集合位置待确认。']},
        {time:'午餐',type:'餐饮',title:'Suisan，来一碗 poke',text:'先吃午饭，再回酒店等观星团接送。',place:'Suisan Fish Market Hilo',notes:['核对当天营业和团方接送时间，若冲突就改简餐。']},
        {time:'下午 → 晚间 · 接送时间待定',type:'体验',title:'云海、日落，然后满天星星',text:'计划参加观星团，从 Grand Naniloa 接送。路线与观景地点以所选团为准。',notes:['具体运营商、接送时间、结束时间与是否含晚餐都未确定。','集合前回酒店等候，不自行开租车追赶团车。','装备、海拔与参加要求按团方说明核对。']}
      ]
    },
    {
      date:'2026-12-29',area:'Hilo',region:'hilo',title:'走进火山留下的风景',english:'A day on another planet.',intro:'火山口、熔岩隧道、一路开向海岸。给火山国家公园留出完整一天。',hotel:'naniloa',transport:'全天自驾 · Hilo 往返',route:['Hilo','火山口','Nāhuku','Chain of Craters','Hilo'],tags:['火山国家公园','熔岩海岸'],
      meals:{breakfast:'酒店或 Hilo 简餐',lunch:'简餐／野餐，提前准备',dinner:'Pineapples · Hilo'},todo:['出发前核对国家公园道路与步道开放状态','核对 Nāhuku 开放情况并准备午餐','核对 Pineapples 营业与用餐安排'],
      events:[
        {time:'约 08:00',type:'交通',title:'吃完早餐，从 Hilo 出发',text:'带上午餐、水和当天用品，今天以火山国家公园为主。',notes:['路况、天气与园区公告决定当天的实际路线。']},
        {time:'上午',type:'自然',title:'Hawaiʻi Volcanoes National Park',text:'先看火山口景观，具体观景点按当日开放情况选择。',place:'Hawaii Volcanoes National Park',notes:['行程不承诺看到熔岩喷发。','在出发前核对官方道路与步道状态，不进入关闭区域。']},
        {time:'中午',type:'餐饮',title:'简餐或野餐，歇一歇',text:'午餐提前准备，按当天路线找合适的休息点。',notes:['不用为了午饭来回赶路。']},
        {time:'下午',type:'自然',title:'Nāhuku 熔岩隧道',text:'如果当天开放，步行看熔岩流留下的隧道。',place:'Nahuku Thurston Lava Tube Hawaii',notes:['开放情况和现场指引优先。']},
        {time:'下午',type:'自然',title:'Chain of Craters Road，一路到海岸',text:'沿途看熔岩地貌，在开放的海岸观景区域停留。',place:'Chain of Craters Road Hawaii Volcanoes National Park',notes:['折返时间按路况、体力和光照安排。','不把海岸步行或某一具体点位设成必须完成的任务。']},
        {time:'晚餐',type:'餐饮',title:'回 Hilo，吃 Pineapples',text:'结束火山日，回到小镇吃晚饭。',place:'Pineapples Island Fresh Cuisine Hilo',notes:['营业与用餐时间待确认。']}
      ]
    },
    {
      date:'2026-12-30',area:'Hilo → Kona',region:'kona',title:'骑过牧场，慢慢去西岸',english:'Through the green highlands.',intro:'带上行李离开 Hilo。骑马之后经过 Honokaʻa 和 Waimea，傍晚在西岸安顿。',hotel:'kona',checkout:'naniloa',transport:'自驾换酒店 · 行李随车',route:['Hilo','骑马','Honokaʻa','Waipiʻo 观景台','Waimea','Kona'],tags:['骑马','高地牧场','换酒店'],
      meals:{breakfast:'出发前简单吃',lunch:'Honokaʻa 午餐',dinner:'西岸酒店附近'},todo:['确定骑马运营商、地址、场次与参加要求','按骑马场实际地址核对早上车程','确定 Kona 酒店与入住时间','核对 Waipiʻo 观景台开放及停车安排'],
      events:[
        {time:'07:30',type:'交通',title:'退房，带全部行李出发',text:'今天不再回 Hilo，朝大岛西岸移动。',notes:['行李全部随车；停车时将物品收好，避免外露。','7:30 是目前的出发目标，须按骑马场地址重新核对。']},
        {time:'09:00 报到 · 目标 09:30',type:'体验',title:'在牧场骑马',text:'骑马运营商和具体位置待定，目标上午场，约中午结束。',notes:['项目时长、报到地点、着装与参加限制待所选运营商确认。','不能仅按“骑马”搜索结果导航，预订后补准确集合点。']},
        {time:'午餐',type:'餐饮',title:'Honokaʻa 小镇午饭',text:'骑马后在小镇吃午饭，具体餐厅待选。',place:'Honokaa Hawaii',notes:['按实际结束时间挑营业的餐厅。']},
        {time:'下午',type:'自然',title:'Waipiʻo 观景台',text:'只按观景台短停安排，开放与停车须提前核对。',place:'Waipio Valley Lookout Hawaii',notes:['本行程不包含开车或徒步下谷。','若观景台关闭或时间不合适，直接继续去 Waimea。']},
        {time:'下午',type:'散步',title:'Waimea 高地，咖啡点心短停',text:'经过高地牧场风景，找个地方坐坐，慢慢去西岸。',place:'Waimea Hawaii Island',notes:['停车点和咖啡店待选，不预设不可变的到访时间。']},
        {time:'约 17:00',type:'住宿',title:'抵达 Kona，住下来',text:'当前按 Kailua-Kona 镇附近住宿安排，晚饭在附近解决。',notes:['酒店尚未选定，到达时间随最终住宿位置调整。']}
      ]
    },
    {
      date:'2026-12-31',area:'Kona',region:'kona',title:'咖啡香里，等新的一年',english:'One last sunset of the year.',intro:'南 Kona 的咖啡农场与海岸历史，晚上留给一顿跨年晚饭。',hotel:'kona',transport:'自驾 · 南 Kona 往返',route:['Kona','Greenwell Farms','Hōnaunau','酒店','Huggo’s'],tags:['咖啡农场','海岸历史','跨年'],
      meals:{breakfast:'酒店或 Kona 附近',lunch:'南 Kona 午饭，餐厅待选',dinner:'Huggo’s · 跨年晚饭暂定'},todo:['核对 Greenwell Farms 节日导览安排','核对历史公园开放信息','确认 Huggo’s 跨年营业、菜单与订位','留意当地公布的跨年活动'],
      events:[
        {time:'上午',type:'体验',title:'Greenwell Farms 咖啡农场',text:'导览、试喝，挑一些咖啡豆带回家。',place:'Greenwell Farms Kona Hawaii',notes:['导览时间、是否预约与节日营业安排待核对。']},
        {time:'中午',type:'餐饮',title:'在南 Kona 吃午饭',text:'按农场参观结束时间选附近简餐。',notes:['具体餐厅待选，不安排需要折返的固定午餐。']},
        {time:'下午',type:'文化',title:'Puʻuhonua o Hōnaunau',text:'在国家历史公园看海岸与历史景观，之后回酒店休息。',place:'Puuhonua o Honaunau National Historical Park Hawaii',notes:['参观时间、开放信息与现场要求出发前确认。']},
        {time:'晚餐',type:'餐饮',title:'Huggo’s，跨年晚饭',text:'暂定在海边吃最后一顿年度晚餐，时间和菜单待确认。',place:'Huggos Kailua Kona Hawaii',notes:['尚未订位，跨年菜单和取消政策要单独核对。']},
        {time:'晚间',type:'散步',title:'用海岛的节奏迎接新年',text:'按当地届时公布的活动决定如何跨年，也可以海边散步。',optional:true,notes:['目前没有确认具体倒数活动或烟花安排。']}
      ]
    },
    {
      date:'2027-01-01',area:'Kona',region:'kona',title:'新年第一天，把海风带回家',english:'Until the next island.',intro:'最后半天不赶路。海滨散步、Umekes 午饭，再去机场还车回家。',hotel:null,checkout:'kona',transport:'自驾 · KOA 还车 · 飞 SFO',route:['Kona 海滨','Umekes','KOA','SFO'],tags:['新年','返程日'],
      meals:{breakfast:'酒店或附近早餐',lunch:'11:00 Umekes',dinner:'机场或机上安排'},todo:['补充回程航班号、到达时间与行李额度，确认还车时间','核对 Umekes 元旦营业','按最终酒店位置调整上午路线'],
      events:[
        {time:'早餐后',type:'住宿',title:'退房，再看一会儿海',text:'行李装好，去 Kona 海滨散步，最后半天留得轻松一些。',place:'Kailua Kona Waterfront Hawaii',notes:['此安排基于住 Kona 镇附近。','如果住 Hilton Waikoloa Village，上午改为 A-Bay／度假区附近活动，不往镇上折返。']},
        {time:'11:00',type:'餐饮',title:'Umekes，新年第一顿午饭',text:'候选午餐，元旦营业和到店时间待确认。',place:'Umekes Fish Market Bar and Grill Kailua Kona',notes:['若最终住 Waikoloa，需连同机场路线一起重新安排，不能为这顿饭折返赶路。']},
        {time:'午后',type:'交通',title:'短停、加油，往机场走',text:'不再安排新的大项目，给还车和接驳留出余量。',notes:['加油要求、还车位置与接驳方式按租车订单确认。']},
        {time:'约 14:00',type:'交通',title:'KOA 还车，前往航站楼',text:'目标 14 点左右还车，再接驳去机场办理值机。',place:'Kona International Airport Hawaii',notes:['按最终航班、租车还车及航空公司要求核对时间。']},
        {time:'16:53 起飞',type:'交通',title:'Kona → 旧金山',text:'Alaska Airlines 经济舱已预订。16:53 从 KOA 起飞，使用夏威夷当地时间。',flight:2,notes:['航班号、到达时间、航站楼与行李额度待补充。']}
      ]
    }
  ]
};
