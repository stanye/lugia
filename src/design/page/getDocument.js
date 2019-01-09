module.exports = param => {
  const {
    introduce,
    Alignment,
    Repeat,
    Proximity,
    Hierarchy,
    Feedback,
    Guide,
    Accessibility,
    Reduceskip,
    coreimg1,
    coreimg2,
    AlignmentImg,
    alignImg1,
    alignImg2,
    alignImg3,
    alignImg4,
    alignImg5,
    alignImg6,
    RepeatImg,
    repeatImg1,
    repeatImg2,
    repeatImg3,
    repeatImg4,
    proximityImg,
    proximityImg1,
    proximityImg2,
    proximityImg3,
    proximityImg4,
    proximityImg5,
    proximityImg6,
    hierarchyImg,
    hierarchyImg1,
    hierarchyImg2,
    hierarchyImg3,
    feedbackImg,
    feedbackImg1,
    feedbackImg2,
    feedbackImg3,
    feedbackImg4,
    feedbackImg5,
    feedbackImg6,
    feedbackImg7,
    feedbackImg8,
    guideImg,
    guideImg1,
    guideImg2,
    guideImg3,
    guideImg4,
    guideImg5,
    guideImg6,
    guideImg7,
    accessibilityImg,
    accessibilityImg1,
    accessibilityImg2,
    accessibilityImg3,
    accessibilityImg4,
    accessibilityImg5,
    accessibilityImg6,
    accessibilityImg7,
    accessibilityImg8,
    reduceskipImg,
    reduceskipImg1,
    reduceskipImg2,
    reduceskipImg3,
    reduceskipImg4,
    reduceskipImg5,
    reduceskipImg6,
    reduceskipImg7,
    reduceskipImg8,
    layoutImg,
    layoutImg1,
    layoutImg2,
    layoutImg3,
    layoutImg4,
    layoutImg5,
    patternImg,
    patternImg1,
    patternImg2,
    patternImg3,
    patternImg4,
    patternImg5,
    colorImg,
    imgAlice,
    imgThemeAlice,
    imgDream,
    imgThemeDream,
    imgBinghan,
    imgThemeBinghan,
    imgBingjing,
    imgThemeBingjing,
    imgBinghuo,
    imgThemeBinghuo,
    imgGuangxian,
    imgThemeGuangxian,
    imgHengxing,
    imgThemeHengxing,
    imgHuixing,
    imgThemeHuixing,
    imgHuorong,
    imgThemeHuorong,
    imgJiguang,
    imgThemeJiguang,
    imgKejilan,
    imgThemeKejilan,
    imgScience,
    imgThemeScience,
    imgRongxue,
    imgThemeRongxue,
    imgTaixian,
    imgThemeTaixian,
    imgWarm,
    imgThemeWarm,
    imgLucky,
    imgThemeLucky,
    imgYinyun,
    imgThemeYinyun,
    imgManor,
    imgThemeManor,
    imgViolet,
    imgThemeViolet,
    imgNature,
    imgThemeNature,
    fontImg,
    PingFangSC,
    hiaginosans,
    yahei,
    helveticaneue,
    helvetica,
    arial,
    fontImg1,
    fontImg2,
    fontImg3,
    iconImg,
    iconImg1,
    iconImg2,
    iconImg3,
    iconImg4,
    iconImg5
  } = param;
  const DesignDocument = {
    introduce: {
      title: '',
      content: [{ text: 'Lugia Design', margin: '0 0 0 30px', size: '24px', weight: 600 }],
      img: [{ url: introduce }],
      imgPosition: 'bottom',
      children: [
        {
          content: [
            { text: 'Lugia Design 是一套适合于金融后台前端应用使用的设计语言。' },
            { text: '其实我们认为页面的形式并不需要将重点放在：”色彩单一，线条应用，分割等等这些单一视觉方面。“', margin: '20px  0 0' },
            { text: '因为对于宏观的金融行业来讲，页面的重点应该在形式上的优美和科学上的简洁，在解决用户需求行为时要大胆，敢于创新，敢于解决当今金融市场软件市场上的刚性需求点。而在实际用户应用时要化繁为简，让用户不需学习，就可直接上手应用。' },
            { text: '因此在Lugia Design是从视觉交互和体验交互两方面分别总结出四个设计原则：', margin: '20px 0 30px' },
          ],

        },
        {
          title: '视觉交互',
          card: [
            { text: '对齐原则', desc: 'Alignment', url: Alignment },
            { text: '重复原则', desc: 'Repeat', url: Repeat },
            { text: '组织性原则', desc: 'Proximity', url: Proximity },
            { text: '层级性原则', desc: 'Hierarchy', url: Hierarchy }
          ]
        },
        {
          title: '体验交互',
          card: [
            { text: '反馈原则', desc: 'Feedback', url: Feedback },
            { text: '引导原则', desc: 'Guide', url: Guide },
            { text: '易用性原则', desc: 'Accessibility', url: Accessibility },
            { text: '减少跳转原则', desc: 'Reduce skip', url: Reduceskip }
          ]
        },

      ]
    },
    core: {
      title: '知性',
      content: [{ text: '知性一词，原本是德国古典哲学常用的术语。康德认为知性是介于感性和理性之间的一种认知能力。对于设计来说，知性可以同时定义为“形式上的优美和极致”和“科学上的精确和简洁”，我们相信知性的设计，实现了二者的完美契合。' }],
      children: [
        {
          title: '形式上的优美和极致',
          content: ['优秀设计的经典要素之一是形式的简约，以简驭繁。', 'Lugia对于界面设计，就是用最少的屏幕与器件来完成任务。与此同时我们把简约适用于行为，在视觉设计中给予用户最简单的工具，即运用最少的视觉区别明确传达想要表达的意思。', '优秀的设计让人感觉是一个整体，各部分平衡和谐。Lugia设计形式上遵循自然，利用人类对自然的感知，提炼自然界中的客观规律并运用到界面设计中，从而创造出有层次、有艺术感的设计语言。'],
          img: [{ url: coreimg1 }],
          imgPosition: 'top',
        },
        {
          title: '科学上的精确和简洁',
          content: ['用户可能会因为悦目而又兴趣尝试使用，但是使用的体验如果不好，他一样会离开。 lugia解决了产品的可用性、易用性问题，让用户在使用这些产品的过程中感觉更加方便容易，有效完成任务，达成预期目标。因此Lugia致力于消除阻碍用户使用的障碍，如歧义的文字，迷惑性的按钮，出错的页面，违背用户习惯的操作。', 'Lugia对用户群体有清晰的了解和划分，能做到业务使用的共同感。我们把一个复杂信息架构产品，分角色，划场景，可以让用户对产品目的了解更深刻，全局把握更强，精简页面层级，提升用户的使用效率和舒适度。'],
          img: [{ url: coreimg2 }],
          imgPosition: 'top',
        }
      ]
    },
    alignment: {
      title: '对齐',
      desc: 'Alignment',
      img: [{ url: AlignmentImg }],
      imgPosition: 'left',
      content: [
        { text: '人类发展历史中，整齐是人类的心理的一种信号。例如生活中：把到处都是的衣服挂好，把书桌整理好，把桌椅对齐摆好。这事我们通过视觉感受反馈给人脑的一种信号，生活如此，荧幕上也亦如此。' },
        {
          text: '在人类知觉过程中人们往往倾向于使知觉对象的直线继续成为直线，使曲线继续成为曲线。在页面设计中，将原色进行整齐对齐，既符合用户的认知特性，也能引导视觉流向。让用户更流畅地接收信息-摘自：“格式塔学派”中的连续性（law of Contunuity）',
          size: '12px',
          color: '#999',
          margin: '10px 0 0 '
        },
      ],
      children: [
        {
          title: '段落对齐',
          content: [{ text: '在文章段落遇到较短、较散时，需要确定一个统一的视觉起点。在整段文字保持左、中、右三个对齐原则。' }],
          img: [{ url: alignImg1, desc: '段落对齐示例' }],
          imgPosition: 'right',
        },
        {
          title: '布局形状对齐',
          content: [{ text: '为了统一整体布局摆放，增强布局可视性，在整个数据表中，所有布局形块保持左、右对齐方式。' }],
          img: [{ url: alignImg2, desc: '布局形状对齐示例' }],
          imgPosition: 'right',
        },
        {
          title: '层级关系对齐',
          content: [{ text: '在操作列表数据时候，会出现很多的层级关系，为了避免层级混乱，要在层级级别以退字符并左对齐形式，进行区分。' }],
          img: [{ url: alignImg3, desc: '层级关系对齐示例' }],
          imgPosition: 'right',
        },
        {
          title: '表单类对齐',
          content: [
            { text: '1.在表单类，保持语句一致，字体在左侧以“冒号”统一右对齐。' },
            { text: '2.数据表内文案，可根据数据需求，进行左、中、右对齐。' },
            { text: '3.input框根据实际需求，保持左、右对齐。' },
            { text: '顶对齐：', size: '12px', color: '#999', weight: '600', margin: '20px 0 0' },
            { text: '适用于简易表单，让用户快速预览完成。', size: '12px', color: '#ccc' },
            { text: '左对齐：', size: '12px', color: '#999', weight: '600' },
            { text: '适用于填写布局复杂、有陌生数据、需谨填写；。', size: '12px', color: '#ccc' },
            { text: '右对齐：', size: '12px', color: '#999', weight: '600' },
            { text: '适用于稍复杂的表单。网页高度有限的情况。', size: '12px', color: '#ccc' },
          ],
          img: [{ url: alignImg4, desc: '表单类对齐' }],
          imgPosition: 'right',
        },
        {
          title: '数据类对齐',
          content: [
            { text: '在后台数据系统中：', weight: '600' },
            { text: '数据时最直观反应页面概况的方式。所以在数据设计中，要遵循信息明确，易查看，易适用原则。' },
            { text: '文字类：', weight: '600' },
            { text: '采用文字左对齐；数字用右对齐；表头遵循数字对齐的原则。且不能用居中对齐。' },
          ],
          img: [{ url: alignImg5, desc: '文字类对齐示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '数字类：', weight: '600' },
            { text: '采用无衬线等高表列数字（高度一样，垂直对齐）。' },
          ],
          img: [{ url: alignImg6, desc: '数字类对齐示例' }],
          imgPosition: 'right',
        },

      ]
    },
    repeat: {
      title: '重复',
      content: [{ text: '在页面规划中，不免有很多（功能、级别、种类）相同的元素，在这些相同元素中采用重复的设计原理，减少用户的学习时间。让用户单次记忆即可知道这些元素的使用环境。' }],
      desc: 'Repeat',
      img: [{ url: RepeatImg }],
      imgPosition: 'left',
      children: [
        {
          title: '图表重复',
          content: [{ text: '相同级别的图表类型，采用形状重复的原则，保持数据可查看性。' }],
          img: [{ url: repeatImg1, desc: '在需要数据对照时候，第一个使用饼图，则其他同级别数据也使用饼图' }],
          imgPosition: 'right',
        },
        {
          title: 'ICONS重复',
          content: [{ text: '在相同的数据下，icons元素保持统一。' }],
          img: [{ url: repeatImg2, desc: '例如：使用搜索icons时，无论当前页面成为几级页面，搜索icons保持统一。' }],
          imgPosition: 'right',
        },
        {
          title: '文案格式重复',
          content: [{ text: '为了方便阅读，同级别文案段落，以重复形式展示。' }],
          img: [{ url: repeatImg3, desc: '文案格式重复示例' }],
          imgPosition: 'right',
        },
        {
          title: '形状重复',
          content: [{ text: '同级显示区域，线框保持形状重复，以让内容保持统一。' }],
          img: [{ url: repeatImg4, desc: '形状重复示例' }],
          imgPosition: 'right',
        }
      ]
    },
    proximity: {
      title: '组织性',
      content: [{ text: '根据格式塔（Gestalt）心理学：当对象离得太近的时候，意识会认为它们是相关的。因此物体之间的相对距离会影响我们感知它们是否以及如何在一起。' }],
      desc: 'Proximity',
      img: [{ url: proximityImg }],
      imgPosition: 'left',
      children: [
        {
          title: '间距组织',
          content: [{
            text: '【布局】',
            weight: 600
          }, { text: '纵向上通过8px（小型间距）、16px（中型间距）、24px（大型间距）三种规格来划分信息层次，在三种规格不适用的情况下，可以通过加减8px的倍数来拉开信息层次' }, { text: '横向上为了适用不同尺寸的屏幕，采用栅格布局来排布组件，从而保证布局的灵活性。' }],
          img: [{ url: proximityImg1 }],
          imgPosition: 'right',
        },
        {
          content: [{ text: '【组件】', weight: 600 }, { text: '在各个组件内部，元素的横纵向间距也应该有所区分' }],
          img: [{ url: proximityImg2, desc: '复选框排列' }],
          imgPosition: 'right',
        },
        {
          title: '形式组织',
          content: [{ text: '【形状】', weight: 600 }, { text: '如果其它因素相同，那么相似的物体看起来归属于一组。因此在同一组织的信息中，文字以及图标大小都应统一。' }],
          img: [{ url: proximityImg3, desc: '形式组织示例' }],
          imgPosition: 'right',
        },
        {
          content: [{ text: '【颜色】', weight: 600 }, { text: '在形状大小相同时，颜色的统一也会影响信息的组织性，并且颜色权重大于形状。' }],
          img: [{ url: proximityImg4, desc: '颜色组织示例' }],
          imgPosition: 'right',
        },
        {
          title: '视觉分割',
          content: [{ text: '【元素】', weight: 600 }, { text: '增加元素来拉开信息层次。' }],
          img: [{ url: proximityImg5, desc: '元素分割示例' }],
          imgPosition: 'right',
        },
        {
          content: [{ text: '【卡片式】', weight: 600 }, { text: '信息卡片化，卡片边界就是天然的分割线。' }],
          img: [{ url: proximityImg6, desc: '卡片式示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '【留白】', weight: 600 },
            { text: '使界面更吸引人、更简洁。更有呼吸感，让内容主体更突出。' },
            { text: '【颜色界定】', weight: 600 },
            { text: '利用颜色的不同来界定界面范围。' }
          ],

        },

      ]
    },
    hierarchy: {
      title: '层级性',
      content: [{ text: '在不同元素之间建立一种层次结构，可以帮助用户更好的理解接受界面信息，这种层次性可以通过增强元素之间的对比来实现。' }],
      desc: 'Hierarchy',
      img: [{ url: hierarchyImg }],
      imgPosition: 'left',
      children: [
        {
          title: '大小区分',
          content: [{ text: '通过调整区块和元素排版、大小等方式来突出层次感，提高页面的易读性和节奏感。' }],
          img: [{ url: hierarchyImg1, desc: '在整体布局中，通过卡片大小的变化，来区分信息传达的重点。' }],
          imgPosition: 'right',
        },
        {
          title: '加强对比',
          content: [{ text: '加强对比效果，强化重点项或者弱化其他项，让用户能在操作上快速判断出重要信息。' }, {
            text: '注：在一些需要用户慎重决策的场景中，也可以通过适当加入对比，使得用户可以第一时间接收分辨信息。',
            size: '12px',
            color: '#999',
            margin: '10px 0 0 '
          }],
          img: [{ url: hierarchyImg2, desc: '例如，表格筛选时，筛选选中项就要区分其他选项' }],
          imgPosition: 'right',
        },
        {
          title: '状态区分',
          content: [
            { text: '下拉状态，示意用户下步操作。' },
            { text: '【静态区分】', weight: 600 },
            { text: '通过对元素形状、颜色的改变等方法来实现状态层级的区分。' },
            { text: '【动态区分】', margin: '10px 0 0', weight: 600 },
            { text: '可以通过加入动效效果，以便用户更好的了解自己处于何种状态。' }
          ],
          img: [{ url: hierarchyImg3, desc: '静态下，用不同颜色点区分信息状态；光标悬停时，该项出现' }],
          imgPosition: 'right',
        },

      ]
    },
    feedback: {
      title: '反馈',
      content: [{ text: '在用户与界面发生交互行为时，页面要给予用户即使的反馈。避免让使用者进行没有必要的思考。以及让使用者有明确的方向感。' },
        {
          text: '方向感：让用户无须思考就能得到一下信息：“我在页面的什么位置，这个页面上的重要信息是什么。我可以随时找回刚才的数据，我明确下一步要做什么。”',
          size: '12px',
          color: '#999',
          margin: '10px 0 0 '
        }
      ],
      desc: 'Feedback',
      img: [{ url: feedbackImg }],
      imgPosition: 'left',
      children: [
        {
          title: 'Button',
          content: [
            { text: '1.如果某个操作非常重要，就应该把它放在界面中，并实时可见。' },
            { text: '2.当用户与Button发生交互行为，button要给予相应的反馈。' },
            { text: '3.每个页面仅使用一种主要按钮。不能同时使用多个，除非有一个很好的理由。比如：强调某一种功能。' },
            { text: '常规状态：设计要点，常规状态下的按钮，务必要看起来也像个按钮。', size: '12px', color: '#999', margin: '10px 0 0 ' },
            {
              text: '焦点状态：提供一个感觉良好的视觉反馈。可以尝试一些视觉愉悦的状态切换动效。按下状态：可以加一些有实质用途的动效，同时达到令人愉悦的效果。',
              size: '12px',
              color: '#999'
            },
            { text: '不激活状态：分两种：直接隐藏。或以不可点形式展示。各有利弊，按需选择。', size: '12px', color: '#999' },
          ],
          img: [{ url: feedbackImg1 }],
          imgPosition: 'right',
        },
        {
          title: '弹窗',
          content: [
            { text: '1.当用户与软件发生行为时，部分可视区域可用弹窗形式给予反馈，在需要弹窗提示交互行为时候，应在设计上减轻弹窗比例。如果页面内容多到需要滚动，则改为跳转。' },
            { text: '2.弹窗的关闭方式应该是多元的，而不仅仅是右上角的关闭。比如：点击任意弹窗外空间，都可进行关闭。' },
            { text: '3.弹窗里不可有链接，不可进行页面跳转。' }
          ],
          img: [{ url: feedbackImg2, desc: '点击任意弹窗外空间，都可进行关闭。' }],
          imgPosition: 'right',
        },
        {
          title: '可视区域 ≠ 可点击区域',
          content: [
            { text: '在使用Table时，文字链的点击范围受到文字长短影响，可以设置整个单元格为热区，以便用户触发。' },
            { text: '当需要增强按钮的响应性时，可以通过增加用户点击热区的范围，而不是增大按钮形状，从而增强响应性，又不缺失美感。' },
          ],
          img: [{ url: feedbackImg3, desc: '增加热区示例' }],
          imgPosition: 'right',
        },
        {
          title: 'Tooltip（文字提示）',
          content: [
            { text: '提示文字很少时。如果一个按钮、标签、icon没什么必要为其写上说明文字，只需要简短说明一下即可。那么tooltip合适。' },
            { text: '只用于提供辅助文字。不可用于必要文字、主要任务。如果该段文字是必须要有的，那直接写上去，别让用户可哪找。' },
            { text: '谨慎使用在极少使用的功能上。为了不打断主要用户操作流程。也以防用的频率太少了，用户会忘记咋回事。' },
          ],
          img: [{ url: feedbackImg4 }],
          imgPosition: 'right',
        },
        {
          title: '表格反馈',
          content: [
            { text: '增加对象：在列表/表格中，新增了一个对象。在新增对象后，有几秒的高亮提示，告知用户这是新增项。' },
            { text: '新增一条对象时，该字段“高亮”告知用户该新增项，几秒后高亮消失。', size: '12px', color: '#999', margin: '10px 0 0' },
          ],
          img: [{ url: feedbackImg5, desc: '对象添加示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '删除对象：在列表/表格中，删除对象同时有几秒的过渡效果，给用户接受信息删除的反馈时间。' },
            { text: '删除一条对象，以从左到右擦出动画删除该字段。', size: '12px', color: '#999', margin: '10px 0 0' },
          ],
          img: [{ url: feedbackImg6, desc: '对象删除示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '更改对象：在列表/表格中，更改了一个对象的同时出现了高亮提示，表明该对象发生了修改。' },
            {
              text: '在用户点击更改字段时，该字段给予显示框提示，更改完成后，给予数据几秒钟高亮显示，点击任意地点可确认更改项。',
              size: '12px',
              color: '#999',
              margin: '10px 0 0'
            },
          ],
          img: [{ url: feedbackImg7, desc: '对象更改示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '呼出对象：点击页面中元素，呼出一个新对象。' },
            { text: '呼出地方多以弹窗样式展示。', size: '12px', color: '#999', margin: '10px 0 0' },
          ],
          img: [{ url: feedbackImg8, desc: '呼出对象示例' }],
          imgPosition: 'right',
        },

      ]
    },
    guide: {
      title: '引导',
      content: [{ text: '引导就是用户进入下一个交互层次的提醒和暗示，利用这些提示方式可以使用户在短时间内理解计算机可进行的交互性行为，使人机交互过程更佳自然、顺畅。' },
        {
          text: '当用户对界面进行交互行为时，会有很多的功能不易于发现（或不易于适用），所以利用界面引导来解决交互功能布局问题。',
          size: '12px',
          color: '#999',
          margin: '10px 0 0 '
        }
      ],
      desc: 'Guide',
      img: [{ url: guideImg }],
      imgPosition: 'left',
      children: [
        {
          title: '静态引导',
          content: [
            { text: '指通过可视化技术在页面上提供引导交互的邀请。' },
            { text: '文字引导，告知用户接下来要做的事情。' },
          ],
          img: [{ url: guideImg1, desc: '文本引导示例' }],
          imgPosition: 'right',
        },
        {

          content: [
            { text: '利用图片引导，让用户感知接下来要进行的行为。' },
          ],
          img: [{ url: guideImg2, desc: '图片类示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '当录入信息时，给予与信息的引导提醒，避免反馈。' },
          ],
          img: [{ url: guideImg3, desc: '信息提示性引导示例' }],
          imgPosition: 'right',
        },
        {

          content: [
            { text: '利用录入框的尺寸，让用户感知自己所录入信息的数量。' },
          ],
          img: [{ url: guideImg4, desc: '窗口引导示例' }],
          imgPosition: 'right',
        },
        {
          title: '动态引导',
          content: [
            { text: '指通过可视化技术在页面上提供引导交互的邀请。' },
            { text: '鼠标悬停提示，让用户感知到计算机能读懂你所发生的行为。' },
          ],
          img: [{ url: guideImg5, desc: '鼠标悬停示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '用户与计算机产生交互动作时，计算机需要判断用户接下来的行为。常用于登陆注册引导性' },
          ],
          img: [{ url: guideImg6, desc: '预见性引导示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '当用户停留到当前页面，如果有后续页面，用户有需要知道的权利。' },
          ],
          img: [{ url: guideImg7, desc: '后续内容引导示例' }],
          imgPosition: 'right',
        },

      ]
    },
    accessibility: {
      title: '易用性',
      content: [{ text: '“不用思考，因为我都帮你想好了”这是lugia设计原则的重要原则之一。尽可能事先排除一切不必要的干扰和噪声，让用户能够专注、有效率地达成他们使用产品的目的，进而得到一个愉快的使用体验。' }
      ],
      desc: 'Accessibility',
      img: [{ url: accessibilityImg }],
      imgPosition: 'left',
      children: [
        {
          title: '减少肢体性',
          content: [
            { text: '【热键操作】', weight: 600 },
            { text: '让使用者以最少的按钮操作，就能快速找到需要的信息' },
            { text: '【减少距离】', weight: 600 },
            { text: '尽量把相关的选项放在接近的位置，以减少光标移动的距离。' },
          ],
          img: [{ url: accessibilityImg1, desc: '减少距离示例' }],
          imgPosition: 'right',
        },
        {

          content: [
            { text: '【减少操作情况】', weight: 600 },
            { text: '减少可能出现的操作情况。' },
            { text: '副选单维持开放的条件：', margin: '10px 0 0 ' },
            { text: '其一是使用者的游标，必须朝着副选单的方向行进；', size: '12px', color: '#999' },
            { text: '其二是游标速度，必须维持在特定的最低限速之上。；', size: '12px', color: '#999' },
          ],
          img: [{ url: accessibilityImg2 }],
          imgPosition: 'right',
        },
        {
          title: '提高理解性',
          content: [
            { text: '【文案理解】', weight: 600 },
            { text: '尽量选择熟悉的词汇，避免让用户做没必要的思考。' },
          ],
          img: [{ url: accessibilityImg3, desc: '文案理解示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '【折叠窗口】', weight: 600 },
            { text: '在视图切换时，有助于保持信息的连贯性，同时也能拓展虚拟空间。' },
          ],
          img: [{ url: accessibilityImg4, desc: '折叠窗口示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '【形成组块】', weight: 600 },
            { text: '“形成组块”是一种提升短期和长期记忆效能的技巧，也就是把一长串的资讯分成小组，借此方便使用者辨识与记忆，对页面结构和信息层次一目了然。' },
          ],
          img: [{ url: accessibilityImg5, desc: '形成组块示例' }],
          imgPosition: 'right',
        },
        {
          title: '直接拖放',
          content: [
            { text: '【制定常用功能】', weight: 600 },
            { text: '板块顺序是可以根据自身喜好自定义的，包括定义常用的应用、排序、删除、新增等等；这样用户可以根据自己的习惯定制自己适合的板块分布方式。' },
            { text: '注：此功能在区块之间、区块内部组件之间可以拖放，区块组件内部与区块组件内部之间不可调换位置。', size: '12px', color: '#999', margin: '10px 0 0' },
          ],
          img: [{ url: accessibilityImg6, desc: '移动版块示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '【组件内部拖放】', weight: 600 },
            { text: '列表拖放，限一个维度（上/下或者左/右）进行拖放。' },
          ],
          img: [{ url: accessibilityImg7, desc: '组件内部拖放示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '【拖拽与button结合】', weight: 600 },
            { text: '常用于空间较少，页面设计简洁，但重点相对较弱的时候。' },
          ],
          img: [{ url: accessibilityImg8, desc: '拖拽与button结合示例' }],
          imgPosition: 'right',
        },

      ]
    },
    reduceskip: {
      title: '减少跳转',
      content: [{ text: '当页面跳转时候，容易打断用户注意力，引起视觉盲视，因此能在一个页面上解决的问题，就在一个页面上面解决，从而减少页面跳转的频率。' }
      ],
      desc: 'Reduce skip',
      img: [{ url: reduceskipImg }],
      imgPosition: 'left',
      children: [
        {
          title: '防呆装置',
          content: [
            { text: '防呆装置（Fool-proofing）是一种预防矫正的行为约束手段，运用避免产生错误的限制方法。' },
            { text: '【撤销/重做】', weight: 600, margin: '10px 0 0' },
            { text: '允许用户犯错，采用悬浮层方式避免打断用户心流。' },
          ],
          img: [{ url: reduceskipImg1, desc: '撤销示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '【再次确认】', weight: 600, margin: '20px 0 0' },
            { text: '在无法实现撤销操作时，增加操作步骤，减少失误发生的可能性。' },
            { text: '注意悬浮层错开需要删除的选项，使上下文连贯。', size: '12px', color: '#999', margin: '10px 0 0' },
          ],
          img: [{ url: reduceskipImg2, desc: '再次确认示例' }],
          imgPosition: 'right',
        },

        {
          title: '补充说明',
          content: [
            { text: '【详情悬浮态】', weight: 600 },
            { text: '一般在列表中，通过用户『悬停』/『点击』某个区块，在当前页加载该条列表项的更多详情信息。' },
          ],
          img: [{ url: reduceskipImg3, desc: '详情悬浮示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '【列表下拉态】', weight: 600 },
            { text: '在列表中，显示某条列表项的详情信息，保持上下文不中断。' },
          ],
          img: [{ url: reduceskipImg4, desc: '列表下拉示例' }],
          imgPosition: 'right',
        },
        {
          title: '输入编辑',
          content: [
            { text: '【单字段行内编辑】', weight: 600 },
            { text: '当『读取』远比『编辑』重要时，可以使用『单击编辑』。' },
          ],
          img: [{ url: reduceskipImg5, desc: '单击编辑示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '当『读取』为主，同时又要突出『编辑』操作时，可使用『文字链/图标编辑』。' },
          ],
          img: [{ url: reduceskipImg6, desc: '文字链/图标示例' }],
          imgPosition: 'right',
        },
        {
          title: '输入编辑',
          content: [
            { text: '【多字段行内编辑】', weight: 600 },
            { text: '扩大空间来进行多行编辑。' },
          ],
          img: [{ url: reduceskipImg7, desc: '多字段行内示例' }],
          imgPosition: 'right',
        },
        {
          content: [
            { text: '【输入覆盖层】', weight: 600 },
            { text: '在覆盖层上，让用户直接进行少量字段的输入。' },
          ],
          img: [{ url: reduceskipImg8, desc: '输入覆盖层示例' }],
          imgPosition: 'right',
        },

      ]
    },
    layout: {
      title: '布局',
      content: [{ text: '空间布局是体系化视觉设计的起点和传统的平面设计不同之处在于。UI界面的布局空间要基于“动态、体系化”的角度出发展开。' },
        { text: 'Lugia受到建筑界大师柯布西耶的模度思想的启发，基于“秩序之美”的原则，探索UI设计中的动态空间秩序，形成了Lugia的界面布局方式，为设计者构筑具备理性之美的布局空间创造了条件。' }
      ],
      desc: 'Layout',
      img: [{ url: layoutImg }],
      imgPosition: 'left',
      children: [
        {
          title: '左右布局的适配',
          content: [
            { text: '左右布局用于导航架构信息逻辑强的设计方案中，常见的做法是将左边的导航栏固定，对右边的工作区域进行动态缩放。' },
          ],
          img: [{ url: layoutImg1 }],
          imgPosition: 'right',
        },
        {
          title: '上下布局的适配',
          content: [
            { text: '上下布局常用于页面出现多个图表信息，需要以图表为主要目标查看时，做法是将左边导航栏固定，对右边的工作区域进行动态缩放。' },
          ],
          img: [{ url: layoutImg2 }],
          imgPosition: 'right',
        },

        {
          title: '左中右布局的适配方案',
          content: [
            { text: '左中右布局常用于多个功能栏状态时布局。做法是将左、右两边的导航栏固定，对中间的工作区域进行动态缩放' },
          ],
          img: [{ url: layoutImg3 }],
          imgPosition: 'right',
        },
        {
          title: '分屏布局适配方案',
          content: [
            { text: '分屏布局常用于对主要信息页面进行对比查看分析时，做法是将顶部导航栏进行固定，对中间两个工作区域进行动态缩放。' },
          ],
          img: [{ url: layoutImg4 }],
          imgPosition: 'right',
        },
        {
          title: '关于栅格',
          content: [
            { text: '依据金融后台业务信息量大、信息分组较多、单个盒子内信息体积较小的中后台页面设计特点；Lugia采用24栅格体系，相对12栅格系统，24栅格系统变化更加灵活，更适合内容比较多样复杂的场景。' },
          ],
          img: [{ url: layoutImg5 }],
          imgPosition: 'bottom',
        },
        {
          title: '可以被8整除',
          content: [
            { text: '对于目前市场桌面设备屏幕而言，4是整除率最高的一个原子，接下来依次是8、10、6、12。但4作为基本原子实在过于小了，太小的步进单位将导致决策成本的增加，因为将元素间距增加4px或者减小4px视觉感受到的差异并不明显， 而在剩下的6、8、10、12四个单位中，8的整除率最高（80%），以8像素作为一个步进单位的变化，视觉上也可以感受到较为明显的差异，因此Lugia选取整除率最高的8做为栅格系统的原子单位。' },
          ],

        },

      ]
    },
    pattern: {
      title: '样式',
      content: [{ text: '样式决定了页面的品质。' },
        { text: '要达到视觉性的精致，重点在于编辑样式，也就是在设计的过程中，要不断地挑战每一个视觉元素的正常性和必要性。lugia在视觉上制定了一套统一的样式规范。', margin: '20px 0 0' }
      ],
      desc: 'Pattern',
      img: [{ url: patternImg }],
      imgPosition: 'left',
      children: [
        {
          title: '色彩规律',
          content: [
            { text: 'Lugia的设计团队倾向于采用 HSB 色彩模型进行统一色彩规律的制定。' },
            { text: '注：主题色建议选取“S”值和“B”均大于等于20%的颜色。', size: '12px', color: '#999', margin: '20px 0 0' },
          ],
          img: [{ url: patternImg1 }],
          imgPosition: 'right',
        },
        {
          title: '色彩类别',
          content: [
            { text: 'Lugia选取一种主题色，其他为辅色，功能上建议划分为5种颜色：' },
            { text: '·Primary Color(主题色)', size: '12px', color: '#999', margin: '20px 0 0' },
            { text: '·Success Color(成功色)', size: '12px', color: '#999' },
            { text: '·Warning Color(警示色)', size: '12px', color: '#999' },
            { text: '·Danger Color(危险色)', size: '12px', color: '#999' },
            { text: '·Black Color(黑色)', size: '12px', color: '#999' },
          ],
          img: [{ url: patternImg2 }],
          imgPosition: 'right',
        },
        {
          title: '中性色',
          content: [
            { text: '基于页面颜色丰富程度的同时，还需要增加中性色的体现。因为合理的选择中性色能够令页面信息具备良好的主次关系，助力阅读体验。Lugia为用户设定的中性色效果体验如下：' },
            { text: '·背景灰：用作底色背景。', size: '12px', color: '#999', margin: '20px 0 0' },
            { text: '·辅助灰：用作分割线/边界线/斜线等。', size: '12px', color: '#999' },
            { text: '·浅灰：用作辅助性文字、阴影。', size: '12px', color: '#999' },
            { text: '·中灰：用作次标题、正文。', size: '12px', color: '#999' },
            { text: '·深灰：用作主标题、深色背景。', size: '12px', color: '#999' },
          ],
          img: [{ url: patternImg3 }],
          imgPosition: 'right',
        },
        {
          title: '阴影',
          content: [
            { text: 'Lugia遵循半扁平化风格，统一模块化阴影效果。在阴影上设计效果如下：' },
            { text: '·微弱：表示一些交互组件Z轴升高，增加可用性。', size: '12px', color: '#999', margin: '20px 0 0' },
            { text: '·明显：表示组件的hover状态。', size: '12px', color: '#999' },
            { text: '·远处阴影：用于弹窗。', size: '12px', color: '#999' },
          ],
          img: [{ url: patternImg4 }],
          imgPosition: 'right',
        },
        {
          title: '圆角',
          content: [
            { text: '基于人类视网膜对大自然形体的认知。巴罗（Barrow）神经学研究所完成的关于“角（corners）“的科学研究发现。”角的突显性感知与角的度数的线性变化，锐角比顿角产生更强的虚幻的突显性”' },
            { text: 'Lugia基于人类的生态特征，将圆角的规整运用到模块中。', margin: '20px 0 0' },
            { text: '·4px：通用组件中。', size: '12px', color: '#999', margin: '20px 0 0' },
            { text: '·全圆角：特殊组件情况。', size: '12px', color: '#999' },
          ],
          img: [{ url: patternImg5 }],
          imgPosition: 'right',
        },


      ]
    },
    color: {
      title: '字体',
      content: [{ text: 'Lugia色彩上相对于其他的组件风格，为了让用户能够最直观的感受颜色变化，使用者可以直接选取模块进行操作。' },
        { text: '而在配色方案中，我们追求自然的美，将自然界中变化运用到组件的配色中。', margin: '20px 0 0' },
      ],
      desc: 'Color',
      img: [{ url: colorImg }],
      imgPosition: 'left',
      children: [
        {
          colorTheme: [
            {
              name: '爱丽丝',
              pantone: imgAlice,
              theme: imgThemeAlice
            },
            {
              name: '白日梦',
              pantone: imgDream,
              theme: imgThemeDream
            },
            {
              name: '冰寒',
              pantone: imgBinghan,
              theme: imgThemeBinghan
            },
            {
              name: '冰晶',
              pantone: imgBingjing,
              theme: imgThemeBingjing
            },
            {
              name: '冰与火',
              pantone: imgBinghuo,
              theme: imgThemeBinghuo
            },
            {
              name: '光纤',
              pantone: imgGuangxian,
              theme: imgThemeGuangxian
            },
            {
              name: '恒星',
              pantone: imgHengxing,
              theme: imgThemeHengxing
            },
            {
              name: '彗星',
              pantone: imgHuixing,
              theme: imgThemeHuixing
            },
            {
              name: '火绒',
              pantone: imgHuorong,
              theme: imgThemeHuorong
            },
            {
              name: '极光',
              pantone: imgJiguang,
              theme: imgThemeJiguang
            },
            {
              name: '科技蓝',
              pantone: imgKejilan,
              theme: imgThemeKejilan
            },
            {
              name: '科学',
              pantone: imgScience,
              theme: imgThemeScience
            },
            {
              name: '融雪',
              pantone: imgRongxue,
              theme: imgThemeRongxue
            },
            {
              name: '苔藓',
              pantone: imgTaixian,
              theme: imgThemeTaixian
            },
            {
              name: '温暖',
              pantone: imgWarm,
              theme: imgThemeWarm
            },
            {
              name: '幸运红',
              pantone: imgLucky,
              theme: imgThemeLucky
            },
            {
              name: '氤氲',
              pantone: imgYinyun,
              theme: imgThemeYinyun
            },
            {
              name: '庄园',
              pantone: imgManor,
              theme: imgThemeManor
            },
            {
              name: '紫罗兰',
              pantone: imgViolet,
              theme: imgThemeViolet
            },
            {
              name: '自然',
              pantone: imgNature,
              theme: imgThemeNature
            },

          ],
        },

      ]
    },
    font: {
      title: '字体',
      content: [{ text: '字体是界面设计中最基本的构成元素之一。Lugia字体方案，是根据人眼阅读习惯，清晰页面的视觉层次，我们建议所选字体要满足以下三个方面：' },
        { text: '·合理的使用不同的字重、字号和颜色；' },
        { text: '·尽量使用统一字体；' },
        { text: '·遵循 WCAG 2.0 标准，字体在使用时与背景颜色的对比值满足无障碍阅读的最低标准。' },
      ],
      desc: 'Font',
      img: [{ url: fontImg }],
      imgPosition: 'left',
      children: [
        {
          title: '字体使用建议',
          content: [
            { text: '中文字体优先级：PingFang SC、Hiragino Sans GB 、Microsoft YaHei' },
          ],
          img: [{ url: PingFangSC }, { url: hiaginosans }, { url: yahei }],
          imgPosition: 'bottom',
        },
        {
          content: [
            { text: '英文字体优先级：Helvetica Neue、Helvetica、Arialc', margin: '20px 0 0' },
          ],
          img: [{ url: helveticaneue }, { url: helvetica }, { url: arial }],
          imgPosition: 'bottom',
        },
        {
          title: '字号',
          content: [
            { text: '文字的大小规范，关系着整个界面的统一性、协调性。在Lugia的视觉体系中，我们建议的主要字号为14px。其余的字号的选择可根据具体情况进行自由的定义。建议在一个系统设计中（展示型页面除外），字阶的选择尽量控制在 3-5 种之间。' },
          ],
          img: [{ url: fontImg1 }],
          imgPosition: 'bottom',
        },
        {
          title: '行高',
          content: [
            { text: '行高也是影响用户阅读体验的重要因素之一，查阅资料得知西文的基本行高通常是字号的 1.2em 左右，而中文因为字符复杂，所以中文行高需要更大。现在公认1.5em 至 1.8em 之间会有一个比较好的视觉阅读效果，根据金融行业数据信息量过大的特点，lugia选择了1.5em行距' },
            { text: 'LUGIA行高计算公式：行高值=字号 x 1.5。例如：12 号字体的行高为 18px，14 号字体的行高为 22px。' },

          ],
          img: [{ url: fontImg2, desc: '注：因适配开发的原因，字号和行高只能定为偶数。' }],
          imgPosition: 'bottom',
        },
        {
          title: '字重',
          content: [
            { text: '字重的选择同样基于易读、稳定、克制的原则。多数情况下，只出现 regular 以及 medium 的两种字体重量，分别对应代码中的 300 和 500。' },
            { text: '在英文字体加粗的情况下会采用 semibold 的字体重量，对应代码中的 600。', margin: '20px 0 0' },
          ],

        },
        {
          title: '颜色比例',
          content: [
            { text: '文本颜色如果和背景颜色太接近就会难以阅读。考虑到无障碍设计的需求，我们参考   遵循 WCAG 2.0 标准（标准详情见 https://www.w3.org/Translations/WCAG20-zh/#visual-audio-contrast），将正文文本、标题和背景色之间保持在了 7:1 以上的 AAA 级对比度。' },
          ],
          img: [{ url: fontImg3 }],
          imgPosition: 'bottom',
        },

      ]
    },
    icon: {
      title: '图标',
      content: [{ text: '图标是一种抽象的、跨语言的符号，随着信息传播速度和载体的快速增长，图标代替或辅助文字信息向用户更一致、高效、具象地理解信息。' },
        { text: 'Lugia的图标在设计和使用时遵循以下三个原则点：' },
        { text: '表意清晰;', margin: '0 0 0 10px' },
        { text: '一致性强;', margin: '0 0 0 10px' },
        { text: '易于扩展。', margin: '0 0 0 10px' },
      ],
      desc: 'Icon',
      img: [{ url: iconImg }],
      imgPosition: 'left',
      children: [
        {
          title: '表意清晰',
          content: [
            { text: '在设计图标时，不仅要针对单个图标思考，更要把图标作为界面中的一部分，结合当前场景进行考虑，在当前场景/界面中，图标是否满足清晰表义的要求。' },
            { text: '特殊的情景下，图标可能还需要结合文字，作为一种辅助信息，目的都是帮助信息更清晰地传达给用户。' },
          ],
          img: [{ url: iconImg1, desc: '不同的颜色对图标含义的影响' }],
          imgPosition: 'right',
        },
        {
          title: '一致性强',
          content: [
            { text: '界面中的图标一般是成系列的设计，除了视觉风格和特征保持一致以外，在同一产品内，同样的功能和信息图标应也保持一致的形态，避免用户产生疑惑。' },
          ],
          img: [{ url: iconImg2, desc: 'Lugia方向图标' }],
          imgPosition: 'right',
        },
        {
          title: '易于扩展',
          content: [
            {
              text: '随着业务和功能的变化，在产品发展过程中很可能需要扩展图标库，这就要求我们在最初设计图标时应定义好视觉特征与延展规则，让图标易于在原有设计上进行扩展，使得设计可延续。',
              margin: '0 0 26px '
            },

          ],
        },
        {

          content: [
            { text: '·制定尺寸规范', weight: 600 },
            {
              text: '这套参考线是根据1024*1024尺寸绘制。方形和圆形采用同样的尺寸，由于方形的面积比圆形大，在视觉上，方形会比圆形显大，为了达到视觉上的统一，相对缩小图标方形尺寸的面积。',
              url: iconImg3,
              margin: '0 0 26px'
            },
          ],
          img: [{ url: iconImg4, desc: '网格和关键轮廓线' }],
          imgPosition: 'right',
        },
        {

          content: [
            { text: '·统一粗细/圆角', weight: 600, margin: '26px 0 0' },
            { text: 'Lugia采用统一的标准，线条粗细为72px。外轮廓线统一半径为 72px 的圆角，icon 内部空间的边角保持直角，笔画的终端为圆角。' },
          ],
          img: [{ url: iconImg5, desc: '统一粗细/圆角' }],
          imgPosition: 'right',
        },

      ]
    },
  };
  return DesignDocument;
};
