/* 行程来源：2026/11/16 完整排班表；航班、酒店和 12/24 PCC 依据用户提供的预订截图更新。
   仅 confirmed 标记的项目已预订。补充的公开航班时刻注明来源，与订单确认信息区分。
   公开数据不包含姓名、订单号、预订确认号或原始截图。 */
window.TRIP = {
  updated: '2026-11-22',
  flights: [
    {date:'2026-12-23',name:'飞往欧胡',airline:'Alaska Airlines',confirmed:true,cabin:'经济舱',from:'SFO',to:'HNL',depart:'07:20',arrive:'11:10',depZone:'旧金山 PST',arrZone:'檀香山 HST',scheduleSource:'https://public.alaskacargo.com/getmedia/e35baf10-59a4-4cd6-90a0-eda1ce157f62/cargoschedule-202612-all#page=10',note:'按 12/23 航线与 07:20 起飞时间匹配 AS811；11:10 计划抵达，飞行 5 小时 50 分。到达时刻来自 Alaska 官方 12 月时刻表（11/10 版本），以航司后续更新为准。航班号尚未与完整订单核对；行李额度按订单确认。'},
    {date:'2026-12-28',name:'欧胡 → 大岛',airline:'Alaska Airlines',confirmed:true,cabin:'经济舱',from:'HNL',to:'ITO',depart:'09:31',arrive:null,depZone:'檀香山 HST',arrZone:'Hilo HST',note:'已预订经济舱，09:31 从 HNL 起飞。航班号、到达时间、航站楼与行李额度待补充。先在 HNL 还车，到 ITO 后另取租车，并与观星团集合安排衔接。'},
    {date:'2027-01-01',name:'回到旧金山',airline:'Alaska Airlines',confirmed:true,cabin:'经济舱',from:'KOA',to:'SFO',depart:'16:53',arrive:null,depZone:'Kona HST',arrZone:'旧金山 PST',note:'已预订经济舱。航班号、到达时间、航站楼与行李额度待补充。暂按 14:00 左右还车，再接驳去航站楼。'}
  ],
  hotels: [
    {id:'halepuna',name:'Halepuna Waikiki by Halekulani',confirmed:true,area:'Waikiki · 欧胡',in:'2026-12-23',out:'2026-12-28',nights:5,checkin:'15:00',checkout:'12:00',address:'2233 Helumoa Road, Honolulu, HI 96815',phone:'+1 808-921-7272',query:'Halepuna Waikiki by Halekulani 2233 Helumoa Road Honolulu HI 96815',note:'本次预订注明无度假村费。若入住当天 21:00 后抵达，须直接联系酒店，以免预订被取消。27 日停车安排待确认。'},
    {id:'hilo-hawaiian',name:'Hilo Hawaiian Hotel',confirmed:true,area:'Hilo · 大岛东岸',in:'2026-12-28',out:'2026-12-30',nights:2,checkin:'15:00',checkout:'12:00',query:'Hilo Hawaiian Hotel Trademark Collection by Wyndham Hilo Hawaii',note:'预订注明免费自行停车和免费 Wi-Fi。房型、取消条款和行李寄存安排待补充；观星团能否到这家酒店接送、具体集合地点与时间须向团方确认。'},
    {id:'kona',name:'Kona Coast Resort',confirmed:true,area:'Keauhou · 大岛西岸',in:'2026-12-30',out:'2027-01-01',nights:2,checkin:'16:00',checkout:'10:00',room:'One bedroom Villa Honu（一卧室别墅）',address:'78-6842 Alii Drive, Kailua-Kona, HI 96740',phone:'+1 808-324-1721',official:'https://www.shellvacationsclub.com/club/resorts/kona_coast/index.page',query:'Kona Coast Resort 78-6842 Alii Drive Kailua-Kona HI 96740',note:'预订注明免费自行停车和免费 Wi-Fi。1/1 须在 10:00 前退房；取消条款与具体入住手续待补充。酒店地址与电话已按官网核对。'}
  ],
  rentals: [
    {title:'欧胡 · 短租一段',start:'12/27 上午 · 取车地点待定',end:'12/28 早上 · HNL 还车',note:'植物园 → 古兰尼 → 北岸；23–26 日不连续租车。是否按一天计费，以实际取还时间与订单为准。'},
    {title:'大岛 · 东进西出',start:'12/28 · ITO 机场取车',end:'1/1 约 14:00 · KOA 机场还车',note:'预订时选异地还车。30 日带行李从 Hilo 向西岸移动，骑马场的具体位置和行车时间待核对。'}
  ],
  days: [
    {
      date:'2026-12-23',area:'欧胡',region:'oahu',title:'落地，切换海岛时间',english:'Hello, island time.',intro:'11:10 计划抵达，先去酒店寄存行李，13 点左右吃银座梅林，15 点后入住休息。',hotel:'halepuna',transport:'HNL 打车到 Halepuna · Waikiki 步行；落地后均为夏威夷时间',route:['SFO','HNL','Halepuna 寄存','银座梅林','Waikiki','Halepuna 入住','福缘'],tags:['抵达日','海边散步'],
      meals:{breakfast:'出发前或机上安排',lunch:'目标 13:00 银座梅林 · 未订位，迟到或久候则改附近简餐',dinner:'目标 18:30 福缘 Fook Yuen · 海鲜，未订位'},
      todo:['将公开时刻表匹配的 AS811 与完整订单核对，确认行李额度','确认 Halepuna 提前寄存行李，补充房型与取消条款','决定是否订银座梅林 13:00；若 walk-in，接受排队或改餐厅','核对福缘营业时间并决定是否订位'],
      events:[
        {time:'07:20 PST',type:'交通',title:'飞往檀香山 · 11:10 HST 抵达',text:'07:20 旧金山时间出发，11:10 夏威夷时间计划抵达。飞行 5 小时 50 分，夏威夷比旧金山慢 2 小时。',flight:0,notes:['起飞时间来自订单；到达时间来自按日期、航线和起飞时间匹配的 AS811 官方时刻表。','下面按正常抵达安排，交通与等候时间是规划预留。若延误，先缩短散步，并按午餐截止方案调整。']},
        {time:'11:10–12:00',type:'交通',title:'下机、取行李，走到乘车点',text:'预留约 50 分钟办理抵达后的事项，目标 12 点左右出发去酒店。',place:'Daniel K Inouye International Airport Honolulu',notes:['这是下机、行李提取和找车的时间预算，实际按当天情况调整。','SFO → HNL 为美国国内航班；当天不取租车。']},
        {time:'12:00–12:45',type:'交通',title:'打车到 Halepuna，先寄存行李',text:'从 HNL 直接去 Halepuna Waikiki by Halekulani，预留约 45 分钟乘车及寄存。',place:'Halepuna Waikiki by Halekulani 2233 Helumoa Road Honolulu HI 96815',notes:['45 分钟是交通与办理寄存的合计预算，车程随路况变化。','提前向酒店确认行李寄存；不要把中午到店当成已获准提前入住。','若 13:15 后才准备好离开酒店，午餐改附近简餐，不赶银座梅林。']},
        {time:'约 13:00',type:'餐饮',title:'银座梅林 · Ginza Bairin 午餐',text:'寄存后步行到 255 Beach Walk。目标 13 点用餐，安排炸猪排午饭；目前未订位。',place:'Ginza Bairin 255 Beach Walk Honolulu HI 96815',notes:['官网午餐每日 11:00–14:00，最后入座 14:00；这不代表到店一定有座位。','如果这顿一定要吃，优先查看 Yelp 的 13:00 订位；若选 walk-in，到店先问预计入座时间。','若预计要等超过 30 分钟，或无法在 14:00 前入座，就改附近简餐。30 分钟是我们设定的等待上限，并非餐厅预计排队时间。','航班明显延误时，及时调整已有订位；不把午餐设成必须赶到的项目。']},
        {time:'约 14:00',type:'散步',title:'Waikiki 海边，轻松走一会儿',text:'午饭后在酒店附近和海边随意走走，15 点回酒店。',place:'Waikiki Beach Honolulu',notes:['这段作为可压缩的缓冲。午饭较晚或累了，就先回酒店休息。']},
        {time:'15:00 后',type:'住宿',title:'Halepuna 入住，洗澡休息',text:'12/23–12/28 五晚已预订。15:00 后办理入住，下午留给休息。',hotel:'halepuna',place:'Halepuna Waikiki by Halekulani 2233 Helumoa Road Honolulu HI 96815',notes:['入住时间为夏威夷当地时间，提前入住取决于酒店当天房态。','本次预订注明无度假村费；房型与取消条款待补充。','若行程变化至 21:00 后才抵达，须直接联系酒店。']},
        {time:'约 18:30',type:'餐饮',title:'福缘 · Fook Yuen 晚餐',text:'休息好再出门吃海鲜，龙虾或其他海鲜搭配青菜和面饭。',place:'Fook Yuen Seafood Restaurant Honolulu',notes:['18:30 为用餐目标，营业、菜单与订位仍待确认。','海鲜先问时价，再按食量点菜。']}
      ]
    },
    {
      date:'2026-12-24',area:'欧胡',region:'oahu',title:'把一整天交给波利尼西亚',english:'Stories of the Pacific.',intro:'PCC Aliʻi Lūʻau 与往返大巴已订。09:55 前在 Ross 集合，10:05 出发，16:30 到 Hale Ohana 吃晚餐。',hotel:'halepuna',bookingLabel:'PCC 及接送',transport:'已订 Motor Coach 往返 · Ross / Seaside Avenue · 09:55 前到场，10:05 发车；均为夏威夷时间',route:['早餐','Ross 集合','PCC 文化村','Hale Ohana 晚餐','HĀ 大秀','Waikiki'],tags:['文化体验','接送已订'],
      meals:{breakfast:'目标 08:30–09:15 · Island Vintage Coffee',lunch:'PCC 园内简餐，另购；16:30 已有晚餐',dinner:'已订 16:30 Aliʻi Lūʻau · Hale Ohana'},todo:['保存电子票，核对 HĀ 大秀票券上的场次与具体座位','上车时向司机确认晚间返程集合点与发车时间'],
      events:[
        {time:'08:30–09:15',type:'餐饮',title:'Island Vintage Coffee 早餐',text:'一份 açaí bowl，加一份咸口早餐，两个人分着吃。',place:'Island Vintage Coffee Royal Hawaiian Center',notes:['这是早餐时间预算，给前往 Ross 集合留好余量；队伍太长就改快餐。','午饭在 PCC 园内简单解决，16:30 已有套餐晚餐。']},
        {time:'09:55 前',type:'交通',title:'Ross 店旁集合 · Seaside Avenue',text:'在 ROSS Dress for Less Waikiki 附近、Seaside Avenue 一侧的人行道等车，至少提前 10 分钟到场。',place:'ROSS Dress for Less 333 Seaside Avenue Honolulu HI 96815',notes:['集合点与提前到场要求来自已付款的接送凭证。','不是在 Halepuna 酒店门口接客；按 Seaside Avenue 一侧的人行道找车。','准备好电子票，上车时确认当晚回程的集合地点和发车时间。']},
        {time:'10:05',type:'交通',title:'乘 PCC Motor Coach 出发',text:'两位成人的 Motor Coach 往返接送已付款，Ross 站 10:05 发车。',confirmed:true,notes:['已订标准往返接送，不含 Circle Island 环岛观光。','10:05 为凭证列明的发车时间，全部使用夏威夷当地时间。','下车后按司机指示报到；大巴实际到达时间随路况变化。']},
        {time:'票面 11:45',type:'体验',title:'PCC 文化村 · 抵达后报到',text:'12/24 两位成人的 Islands of Polynesia 已订，票面列明 11:45 HST。抵达后先报到，再按现场班表逛文化村。',confirmed:true,place:'Polynesian Cultural Center Laie Hawaii',notes:['11:45 是票面列出的时间，不是大巴保证抵达的时刻；按接送安排前往，不自行倒推更早出发。','Aliʻi Lūʻau 套餐官网包含六个文化村的团体导览；报到后确认导览集合点和当天活动安排。','午餐另购，简单吃即可。16:30 到 Hale Ohana，不把下午活动排到晚餐时段。','准备电子确认函、有效照片证件及购票所用信用卡，按官方报到要求携带；这些资料不上传网站。']},
        {time:'16:30',type:'餐饮',title:'Aliʻi Lūʻau 晚餐 · Hale Ohana',text:'12/24 两位成人已付款。票面场地为 Hale Ohana，16:30 到场入座，享用套餐自助晚餐与现场表演。',confirmed:true,place:'Hale Ohana Polynesian Cultural Center Laie Hawaii',notes:['日期、场地与 16:30 时间以预订截图为依据，均为夏威夷当地时间。','16:30 为入座时间；晚餐及节目按现场流程进行，不将它理解为另一个晚间大秀的开演时间。']},
        {time:'19:15 · 官网参考',type:'体验',title:'HĀ: Breath of Life 大秀',text:'Aliʻi Lūʻau 套餐官网包含 HĀ 大秀及 Gold 区座位。官方参考场次为 19:15–20:35，具体以电子票与当天通知为准。',confirmed:true,place:'Pacific Theater Polynesian Cultural Center Laie Hawaii',notes:['套餐内容及参考时间已按 PCC 官方套餐页核对；截图没有展示大秀票券与具体排次座号，保存完整电子票后再核对。','按现场指示提前进场，散场后去司机确认的地点集合。']},
        {time:'大秀结束后',type:'交通',title:'乘已订大巴回 Waikiki',text:'看完大秀后乘常规返程接送；官方预计约 22:30 回到 Waikiki，实际随散场和路况变化。',confirmed:true,notes:['凭证已确认往返接送，晚间具体发车时刻与集合点向司机核对。','不要乘 18:30 的 Early Return Shuttle，那班会早于晚间大秀离开。','回到 Waikiki 后步行回 Halepuna，不再安排其他项目。']}
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
      date:'2026-12-28',area:'Hilo',region:'hilo',title:'换一座岛，去云海上等日落',english:'From ocean blue to starlight.',intro:'上午飞到大岛东岸，下午交给观星团。接送或集合地点待团方确认。',hotel:'hilo-hawaiian',checkout:'halepuna',transport:'HNL 还车 · ITO 取车 · 团车',route:['HNL','ITO','Hilo Hawaiian Hotel','Suisan','观星团'],tags:['岛间飞行','日落观星'],
      meals:{breakfast:'退房前或机场简餐',lunch:'Suisan · poke',dinner:'视观星团是否含餐安排'},todo:['补充岛间航班号、到达时间与行李额度，核对早上还车衔接','确定 ITO 取车、KOA 异地还车订单','补充 Hilo Hawaiian Hotel 房型、取消条款与行李寄存安排','向观星团确认 Hilo Hawaiian Hotel 的接送或集合地点、时间、含餐及结束时间'],
      events:[
        {time:'早上',type:'交通',title:'退房，去 HNL 还车',text:'带齐行李，先还租车，再前往航站楼。',place:'Daniel K Inouye International Airport Honolulu',notes:['须按租车接驳、航空公司要求和最终航班倒推酒店出发时间。']},
        {time:'09:31 起飞',type:'交通',title:'欧胡 → Hilo',text:'Alaska Airlines 经济舱已预订。09:31 从 HNL 起飞，两端均使用夏威夷当地时间。',flight:1,notes:['航班号、到达时间、航站楼与行李额度待补充。','按 09:31 起飞时间核对酒店退房、HNL 还车与接驳安排，并向观星团确认集合衔接。']},
        {time:'抵达后',type:'住宿',title:'ITO 取车，前往酒店',text:'Hilo Hawaiian Hotel 已预订，12/28–12/30，共 2 晚。提前抵达时的行李寄存安排待向酒店确认。',hotel:'hilo-hawaiian',place:'Hilo Hawaiian Hotel Trademark Collection by Wyndham Hilo Hawaii',notes:['岛上用车从 ITO 取、KOA 还，预订时选择异地还车。','入住及退房时间均为夏威夷当地时间。预订注明免费自行停车和免费 Wi-Fi。','酒店房型、取消条款和观星团接送或集合地点待补充或确认。']},
        {time:'午餐',type:'餐饮',title:'Suisan，来一碗 poke',text:'先吃午饭，再按团方确认的地点和时间集合。',place:'Suisan Fish Market Hilo',notes:['核对当天营业和团方集合时间，若冲突就改简餐。']},
        {time:'下午 → 晚间 · 接送时间待定',type:'体验',title:'云海、日落，然后满天星星',text:'计划参加观星团。能否到 Hilo Hawaiian Hotel 接送、具体集合地点与时间须由团方确认。路线与观景地点以所选团为准。',notes:['具体运营商、接送或集合时间、结束时间与是否含晚餐都未确定。','按团方确认的地点集合，不自行开租车追赶团车。','装备、海拔与参加要求按团方说明核对。']}
      ]
    },
    {
      date:'2026-12-29',area:'Hilo',region:'hilo',title:'走进火山留下的风景',english:'A day on another planet.',intro:'火山口、熔岩隧道、一路开向海岸。给火山国家公园留出完整一天。',hotel:'hilo-hawaiian',transport:'全天自驾 · Hilo 往返',route:['Hilo','火山口','Nāhuku','Chain of Craters','Hilo'],tags:['火山国家公园','熔岩海岸'],
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
      date:'2026-12-30',area:'Hilo → Kona',region:'kona',title:'骑过牧场，慢慢去西岸',english:'Through the green highlands.',intro:'带上行李离开 Hilo。骑马之后经过 Honokaʻa 和 Waimea，傍晚在 Kona Coast Resort 安顿。',hotel:'kona',checkout:'hilo-hawaiian',transport:'自驾换酒店 · 行李随车',route:['Hilo','骑马','Honokaʻa','Waipiʻo 观景台','Waimea','Kona Coast Resort'],tags:['骑马','高地牧场','换酒店'],
      meals:{breakfast:'出发前简单吃',lunch:'Honokaʻa 午餐',dinner:'Kona Coast Resort 附近简餐'},todo:['确定骑马运营商、地址、场次与参加要求','按骑马场实际地址核对早上车程','补充 Kona Coast Resort 取消条款与具体入住手续','核对 Waipiʻo 观景台开放及停车安排'],
      events:[
        {time:'07:30',type:'交通',title:'退房，带全部行李出发',text:'今天不再回 Hilo，朝大岛西岸移动。',notes:['行李全部随车；停车时将物品收好，避免外露。','7:30 是目前的出发目标，须按骑马场地址重新核对。']},
        {time:'09:00 报到 · 目标 09:30',type:'体验',title:'在牧场骑马',text:'骑马运营商和具体位置待定，目标上午场，约中午结束。',notes:['项目时长、报到地点、着装与参加限制待所选运营商确认。','不能仅按“骑马”搜索结果导航，预订后补准确集合点。']},
        {time:'午餐',type:'餐饮',title:'Honokaʻa 小镇午饭',text:'骑马后在小镇吃午饭，具体餐厅待选。',place:'Honokaa Hawaii',notes:['按实际结束时间挑营业的餐厅。']},
        {time:'下午',type:'自然',title:'Waipiʻo 观景台',text:'只按观景台短停安排，开放与停车须提前核对。',place:'Waipio Valley Lookout Hawaii',notes:['本行程不包含开车或徒步下谷。','若观景台关闭或时间不合适，直接继续去 Waimea。']},
        {time:'下午',type:'散步',title:'Waimea 高地，咖啡点心短停',text:'经过高地牧场风景，找个地方坐坐，慢慢去西岸。',place:'Waimea Hawaii Island',notes:['停车点和咖啡店待选，不预设不可变的到访时间。']},
        {time:'约 17:00',type:'住宿',title:'抵达 Kona Coast Resort',text:'12/30–1/1 两晚已预订。傍晚抵达后入住，晚饭在附近简单解决；到达时间随当天行程与路况调整。',hotel:'kona',place:'Kona Coast Resort 78-6842 Alii Drive Kailua-Kona HI 96740',notes:['16:00 后入住；One bedroom Villa Honu（一卧室别墅）。','预订注明免费自行停车和免费 Wi-Fi。','入住手续与取消条款待补充，1/1 须在 10:00 前退房。']}
      ]
    },
    {
      date:'2026-12-31',area:'Kona',region:'kona',title:'咖啡香里，等新的一年',english:'One last sunset of the year.',intro:'从 Kona Coast Resort 出发，走南 Kona 的咖啡农场与海岸历史，晚上留给一顿跨年晚饭。',hotel:'kona',transport:'自驾 · 南 Kona 往返',route:['Kona Coast Resort','Greenwell Farms','Hōnaunau','酒店','Huggo’s'],tags:['咖啡农场','海岸历史','跨年'],
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
      date:'2027-01-01',area:'Kona',region:'kona',title:'新年第一天，把海风带回家',english:'Until the next island.',intro:'10:00 前从 Kona Coast Resort 退房，再去海滨散步、吃 Umekes 午饭，之后还车回家。',hotel:null,checkout:'kona',transport:'自驾 · KOA 还车 · 飞 SFO',route:['Kona Coast Resort','Kona 海滨','Umekes','KOA','SFO'],tags:['新年','返程日'],
      meals:{breakfast:'酒店内或附近自行安排，10:00 前退房',lunch:'11:00 Umekes',dinner:'机场或机上安排'},todo:['补充回程航班号、到达时间与行李额度，确认还车时间','核对 Umekes 元旦营业','按路况核对退房后前往海滨、午餐与机场的衔接'],
      events:[
        {time:'10:00 前',type:'住宿',title:'Kona Coast Resort 退房',text:'早餐后整理全部行李，10:00 前办好退房，再继续当天行程。',hotel:'kona',place:'Kona Coast Resort 78-6842 Alii Drive Kailua-Kona HI 96740',notes:['退房时间按已确认的预订执行，均为夏威夷当地时间。','退房后带齐行李，不再安排返回酒店取行李。']},
        {time:'退房后',type:'散步',title:'Kona 海滨，再看一会儿海',text:'从酒店出发去 Kona 海滨走走，之后吃午饭，再去机场；停留长短按路况与体力安排。',place:'Kailua Kona Waterfront Hawaii',notes:['路线按 Kona Coast Resort → Kona 海滨 → Umekes → KOA 的顺序衔接，预留还车、接驳和机场办理手续的时间。']},
        {time:'11:00',type:'餐饮',title:'Umekes，新年第一顿午饭',text:'候选午餐，元旦营业和到店时间待确认。',place:'Umekes Fish Market Bar and Grill Kailua Kona',notes:['午饭后继续去机场方向，不安排返回酒店；若营业时间或路况不合适，就改简餐。']},
        {time:'午后',type:'交通',title:'短停、加油，往机场走',text:'不再安排新的大项目，给还车和接驳留出余量。',notes:['加油要求、还车位置与接驳方式按租车订单确认。']},
        {time:'约 14:00',type:'交通',title:'KOA 还车，前往航站楼',text:'目标 14 点左右还车，再接驳去机场办理值机。',place:'Kona International Airport Hawaii',notes:['按最终航班、租车还车及航空公司要求核对时间。']},
        {time:'16:53 起飞',type:'交通',title:'Kona → 旧金山',text:'Alaska Airlines 经济舱已预订。16:53 从 KOA 起飞，使用夏威夷当地时间。',flight:2,notes:['航班号、到达时间、航站楼与行李额度待补充。']}
      ]
    }
  ]
};
