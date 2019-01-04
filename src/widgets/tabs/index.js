import  React from 'react';
        import {Anchor,Grid} from '@lugia/lugia-web';
        import EditTables from '../../edit-table'; 
         import TABPANE from '@lugia/lugia-web/dist/tabs/lugia.tabpane.zh-CN.json'; import TABCONTENT from '@lugia/lugia-web/dist/tabs/lugia.tabcontent.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BaseTabs =  require('./BaseTabs').default;  const PositionTabs =  require('./PositionTabs').default;  const TypeTabs =  require('./TypeTabs').default;  const PagedTypeTabs =  require('./PagedTypeTabs').default;  const OrderTabs =  require('./OrderTabs').default;  const ChangeTabs =  require('./ChangeTabs').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
        export default class ComDemo extends React.Component {
            render(){
                return(
                    <Row>
                        <Col span={20}>
                            <Title title={'标签页'} subTitle={'Tabs'} desc={'选项卡切换组件'} />
                            <Demo title={'基本使用'} titleID={'tabs-0'} code={<code>{ `/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Theme, tabs } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst TabPane = tabs.TabPane;\nconst Tabs = tabs.Tabs;\n\nconst Wrapper = styled.div\`\n  text-align: left;\n  margin-top: 50px;\n  margin-left: 100px;\n  display: inline-block;\n\`;\nconst children = [\n  <TabPane title={\'1111\'} content={\'11111\'} activityKey={\'0\'} />,\n  <TabPane title={\'2222\'} content={<div>2222</div>} activityKey={\'1\'} />,\n  <TabPane\n    title={\'3333\'}\n    content={\n      <div>\n        <div>\n          <div>3333</div>\n        </div>\n      </div>\n    }\n    activityKey={\'2\'}\n  />,\n  <TabPane\n    title={\'4444\'}\n    content={\n      <div>\n        <div>\n          <div>44444</div>\n        </div>\n      </div>\n    }\n    activityKey={\'3\'}\n  />,\n  <TabPane\n    title={\'555555\'}\n    content={\n      <div>\n        <div>\n          <div>55555</div>\n        </div>\n      </div>\n    }\n    activityKey={\'4\'}\n  />,\n  <TabPane\n    title={\'666666\'}\n    content={\n      <div>\n        <div>\n          <div>66666</div>\n        </div>\n      </div>\n    }\n    activityKey={\'5\'}\n  />\n];\nconst defaultData = [\n  {\n    icon: \'lugia-icon-financial_archive\',\n    title: 1111111111,\n    content: 1111\n  },\n  {\n    icon: \'lugia-icon-financial_archive\',\n    title: 22222222222,\n    content: 22222\n  },\n  {\n    icon: \'lugia-icon-financial_archive\',\n    title: 3333333,\n    content: 333\n  },\n  {\n    icon: \'lugia-icon-financial_archive\',\n    title: 44444444,\n    content: 4444444\n  },\n  {\n    icon: \'lugia-icon-financial_archive\',\n    title: 55555,\n    content: 555555\n  },\n  {\n    icon: \'lugia-icon-financial_archive\',\n    title: 666666,\n    content: 66666\n  },\n  {\n    icon: \'lugia-icon-financial_archive\',\n    title: 7777777,\n    content: 777777\n  },\n  {\n    icon: \'lugia-icon-financial_archive\',\n    title: 88888,\n    content: 888888\n  }\n];\nexport default class BaseTabs extends React.Component<any, any> {\n  render() {\n    const view = {\n      [Widget.Tabs]: {\n        width: 500,\n        height: 200\n      }\n    };\n\n    const onPreClick = e => {};\n    const onNextClick = e => {};\n\n    return (\n      <Theme config={view}>\n        <Wrapper>\n          <p>基本使用 配置data</p>\n          <Tabs\n            titleType={\'line\'}\n            tabPosition={\'top\'}\n            onPreClick={onPreClick}\n            onNextClick={onNextClick}\n            data={defaultData}\n          />\n        </Wrapper>\n        <Wrapper>\n          <p>基本使用 配置children</p>\n          <Tabs\n            titleType={\'line\'}\n            tabPosition={\'top\'}\n            onPreClick={onPreClick}\n            onNextClick={onNextClick}\n            children={children}\n          />\n        </Wrapper>\n      </Theme>\n    );\n  }\n}\n`}</code>} desc={'标签页基本使用 配置data,或者children,同时配置以data 优先显示'}  demo={<BaseTabs />}></Demo><Demo title={'位置'} titleID={'tabs-1'} code={<code>{ `/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Theme, tabs, Select } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst TabPane = tabs.TabPane;\nconst Tabs = tabs.Tabs;\n\nconst Wrapper = styled.div\`\n  text-align: left;\n  margin-top: 50px;\n  margin-left: 100px;\n  display: inline-block;\n\`;\nconst defaultData = [\n  {\n    icon: \'lugia-icon-financial_archive\',\n    title: 1111111111,\n    content: 1111\n  },\n  {\n    icon: \'lugia-icon-financial_archive\',\n    title: 22222222222,\n    content: 22222\n  },\n  {\n    icon: \'lugia-icon-financial_archive\',\n    title: 3333333,\n    content: 333\n  },\n  {\n    icon: \'lugia-icon-financial_archive\',\n    title: 44444444,\n    content: 4444444\n  },\n  {\n    icon: \'lugia-icon-financial_archive\',\n    title: 55555,\n    content: 555555\n  },\n  {\n    icon: \'lugia-icon-financial_archive\',\n    title: 666666,\n    content: 66666\n  },\n  {\n    icon: \'lugia-icon-financial_archive\',\n    title: 7777777,\n    content: 777777\n  },\n  {\n    icon: \'lugia-icon-financial_archive\',\n    title: 88888,\n    content: 888888\n  }\n];\nexport default class PositionTabs extends React.Component<any, any> {\n  state = {\n    tabPosition: \'top\'\n  };\n  render() {\n    const view = {\n      [Widget.Tabs]: {\n        width: 500,\n        height: 200\n      }\n    };\n\n    const onPreClick = e => {};\n    const onNextClick = e => {};\n    const data = [\n      { label: \'top\', value: \'top\' },\n      { label: \'bottom\', value: \'bottom\' },\n      { label: \'left\', value: \'left\' },\n      { label: \'right\', value: \'right\' }\n    ];\n\n    const handleSelect = obj => {\n\n      const { newValue } = obj;\n      this.setState({ tabPosition: newValue.toString() });\n    };\n    return (\n      <Theme config={view}>\n        <Wrapper>\n          <Select displayField={\'label\'} data={data} onSelect={handleSelect} />\n          <Tabs\n            titleType={\'line\'}\n            tabPosition={this.state.tabPosition}\n            onPreClick={onPreClick}\n            onNextClick={onNextClick}\n            data={defaultData}\n          />\n        </Wrapper>\n      </Theme>\n    );\n  }\n}\n`}</code>} desc={'可以配置标签页显示位置,上,下,左,右四个方向'}  demo={<PositionTabs />}></Demo><Demo title={'风格'} titleID={'tabs-2'} code={<code>{ `/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Theme, tabs, Select } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst TabPane = tabs.TabPane;\nconst Tabs = tabs.Tabs;\n\nconst Wrapper = styled.div\`\n  text-align: left;\n  margin-top: 50px;\n  margin-left: 100px;\n  display: inline-block;\n\`;\nexport const hasActivityKeyData = [\n  {\n    title: 1111,\n    content: <div>1111111</div>,\n    activityKey: \'0\'\n  },\n  {\n    title: 222222,\n    content: (\n      <div>\n        <div>222222</div>\n      </div>\n    ),\n    activityKey: \'1\'\n  },\n  {\n    activityKey: \'2\',\n    title: 3333,\n    content: (\n      <div>\n        <div>\n          <div>33333</div>\n        </div>\n      </div>\n    )\n  },\n  {\n    activityKey: \'3\',\n    title: 44444,\n    content: (\n      <div>\n        <div>\n          <div>44444</div>\n          <div>44444</div>\n        </div>\n      </div>\n    )\n  },\n  {\n    activityKey: \'4\',\n    title: 55555,\n    content: 55555\n  },\n  {\n    activityKey: \'5\',\n    title: 66666,\n    content: 66666\n  },\n  {\n    activityKey: \'6\',\n    title: 777777,\n    content: 77777\n  },\n  {\n    activityKey: \'7\',\n    title: 888888,\n    content: 888888\n  }\n];\nexport default class TypeTabs extends React.Component<any, any> {\n  render() {\n    const view = {\n      [Widget.Tabs]: {\n        width: 500,\n        height: 200\n      }\n    };\n\n    const onPreClick = e => {};\n    const onNextClick = e => {};\n    const onDelClick = e => {};\n\n    const onAddClick = e => {\n      const newTabs = {\n        title: \'new Tabs\',\n        content: \'new Tabs content\'\n      };\n      return newTabs;\n    };\n    return (\n      <Theme config={view}>\n        <Wrapper>\n          <br />\n          <Wrapper>\n            <p>卡片风格</p>\n            <Tabs\n              tabType={\'card\'}\n              pagedType={\'single\'}\n              data={hasActivityKeyData}\n              onPreClick={onPreClick}\n              onNextClick={onNextClick}\n              onDelClick={onDelClick}\n              onAddClick={onAddClick}\n            />\n          </Wrapper>\n          <br />\n          <br />\n          <Wrapper>\n            <p>窗口风格</p>\n            <Tabs\n              tabType={\'window\'}\n              pagedType={\'page\'}\n              data={hasActivityKeyData}\n              onPreClick={onPreClick}\n              onNextClick={onNextClick}\n              onDelClick={onDelClick}\n              onAddClick={onAddClick}\n            />\n          </Wrapper>\n        </Wrapper>\n      </Theme>\n    );\n  }\n}\n`}</code>} desc={'可以配置标签页风格,默认是线性, 可以选择 卡片风格,窗口风格'}  demo={<TypeTabs />}></Demo><Demo title={'翻页类型'} titleID={'tabs-3'} code={<code>{ `/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Theme, tabs, Select } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst TabPane = tabs.TabPane;\nconst Tabs = tabs.Tabs;\n\nconst Wrapper = styled.div\`\n  text-align: left;\n  margin-top: 50px;\n  margin-left: 100px;\n  display: inline-block;\n\`;\nexport const hasActivityKeyData = [\n  {\n    title: 1111,\n    content: <div>1111111</div>,\n    activityKey: \'0\'\n  },\n  {\n    title: 222222,\n    content: (\n      <div>\n        <div>222222</div>\n      </div>\n    ),\n    activityKey: \'1\'\n  },\n  {\n    activityKey: \'2\',\n    title: 3333,\n    content: (\n      <div>\n        <div>\n          <div>33333</div>\n        </div>\n      </div>\n    )\n  },\n  {\n    activityKey: \'3\',\n    title: 44444,\n    content: (\n      <div>\n        <div>\n          <div>44444</div>\n          <div>44444</div>\n        </div>\n      </div>\n    )\n  },\n  {\n    activityKey: \'4\',\n    title: 55555,\n    content: 55555\n  },\n  {\n    activityKey: \'5\',\n    title: 66666,\n    content: 66666\n  },\n  {\n    activityKey: \'6\',\n    title: 777777,\n    content: 77777\n  },\n  {\n    activityKey: \'7\',\n    title: 888888,\n    content: 888888\n  }\n];\nexport default class PagedTypeTabs extends React.Component<any, any> {\n  render() {\n    const view = {\n      [Widget.Tabs]: {\n        width: 500,\n        height: 200\n      }\n    };\n\n    const onPreClick = e => {};\n    const onNextClick = e => {};\n    return (\n      <Theme config={view}>\n          <Wrapper>\n            <p>翻单个标签页</p>\n            <Tabs\n              tabType={\'card\'}\n              pagedType={\'single\'}\n              data={hasActivityKeyData}\n              onPreClick={onPreClick}\n              onNextClick={onNextClick}\n            />\n          </Wrapper>\n          <br />\n          <Wrapper>\n            <p>翻整页</p>\n            <Tabs\n              tabType={\'card\'}\n              pagedType={\'page\'}\n              data={hasActivityKeyData}\n              onPreClick={onPreClick}\n              onNextClick={onNextClick}\n            />\n        </Wrapper>\n      </Theme>\n    );\n  }\n}\n`}</code>} desc={'可以配置标签页翻页类型,默认是单个, 可以设置为整页'}  demo={<PagedTypeTabs />}></Demo><Demo title={'自定义标签页'} titleID={'tabs-4'} code={<code>{ `/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Theme, tabs } from \'@lugia/lugia-web\';\n\nconst TabPane = tabs.TabPane;\nconst Tabs = tabs.Tabs;\nexport const hasActivityKeyData = [\n  {\n    title: 1111,\n    content: <div>1111111</div>,\n    activityKey: \'0\'\n  },\n  {\n    title: 222222,\n    content: (\n      <div>\n        <div>222222</div>\n      </div>\n    ),\n    activityKey: \'1\'\n  },\n  {\n    activityKey: \'2\',\n    title: 3333,\n    content: (\n      <div>\n        <div>\n          <div>33333</div>\n        </div>\n      </div>\n    )\n  },\n  {\n    activityKey: \'3\',\n    title: 44444,\n    content: (\n      <div>\n        <div>\n          <div>44444</div>\n          <div>44444</div>\n        </div>\n      </div>\n    )\n  },\n  {\n    activityKey: \'4\',\n    title: 55555,\n    content: 55555\n  },\n  {\n    activityKey: \'5\',\n    title: 66666,\n    content: 66666\n  },\n  {\n    activityKey: \'6\',\n    title: 777777,\n    content: 77777\n  },\n  {\n    activityKey: \'7\',\n    title: 888888,\n    content: 888888\n  }\n];\nexport default class OrderTabs extends React.Component<any, any> {\n  state = {\n    data: hasActivityKeyData,\n    activeKey: \'0\'\n  };\n  onAddClick = () => {\n    const activityKey = \`newTab\${this.state.data.length++}\`;\n    const item = {\n      title: \'New Tab\',\n      content: \'Content of new Tab\',\n      activityKey\n    };\n    return item;\n  };\n  onDeleteClick = (activityKey: string) => {};\n  render() {\n    return (\n      <div>\n        <p>自定义卡片</p>\n        <Tabs\n          tabType={\'card\'}\n          pagedType={\'single\'}\n          onAddClick={this.onAddClick}\n          onDeleteClick={this.onDeleteClick}\n        />\n      </div>\n    );\n  }\n}\n`}</code>} desc={'卡片风格和窗口风格,可以自定义增加,删除标签页'}  demo={<OrderTabs />}></Demo><Demo title={'自定义标签页'} titleID={'tabs-5'} code={<code>{ `/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Theme, tabs } from \'@lugia/lugia-web\';\n\nconst TabPane = tabs.TabPane;\nconst Tabs = tabs.Tabs;\nexport const hasActivityKeyData = [\n  {\n    title: 1111,\n    content: <div>1111111</div>,\n    activityKey: \'0\'\n  },\n  {\n    title: 222222,\n    content: (\n      <div>\n        <div>222222</div>\n      </div>\n    ),\n    activityKey: \'1\'\n  },\n  {\n    activityKey: \'2\',\n    title: 3333,\n    content: (\n      <div>\n        <div>\n          <div>33333</div>\n        </div>\n      </div>\n    )\n  },\n  {\n    activityKey: \'3\',\n    title: 44444,\n    content: (\n      <div>\n        <div>\n          <div>44444</div>\n          <div>44444</div>\n        </div>\n      </div>\n    )\n  },\n  {\n    activityKey: \'4\',\n    title: 55555,\n    content: 55555\n  },\n  {\n    activityKey: \'5\',\n    title: 66666,\n    content: 66666\n  },\n  {\n    activityKey: \'6\',\n    title: 777777,\n    content: 77777\n  },\n  {\n    activityKey: \'7\',\n    title: 888888,\n    content: 888888\n  }\n];\nexport default class ChangeTabs extends React.Component<any, any> {\n  state = {\n    data: hasActivityKeyData,\n    activeKey: \'0\'\n  };\n  change = (e: Object) => {\n    hasActivityKeyData[0] = {\n      title: 1000000000000,\n      content: 1000000000,\n      activityKey: \'-1\'\n    };\n    this.setState({ data: hasActivityKeyData });\n  };\n  onAddClick = () => {\n    const data = this.state.data;\n    const activityKey = \`newTab\${this.state.data.length++}\`;\n    data.push({\n      title: \'New Tab\',\n      content: \'Content of new Tab\',\n      activityKey\n    });\n    this.setState({ data });\n  };\n\n  onDeleteClick = (activityKey: string) => {\n    const { data } = this.state;\n    let newdata = [];\n    if (data.length > 1) {\n      newdata = data.filter(child => {\n        return child.activityKey !== activityKey;\n      });\n    }\n    this.setState({ data: newdata });\n  };\n  render() {\n    const { data } = this.state;\n    return (\n      <div>\n        <button style={{ width: 200 }} onClick={this.change}>\n          {\'点击修改data内容\'}\n        </button>\n        <Tabs\n          tabType={\'card\'}\n          pagedType={\'single\'}\n          data={data}\n          onAddClick={this.onAddClick}\n          onDeleteClick={this.onDeleteClick}\n        />\n      </div>\n    );\n  }\n}\n`}</code>} desc={'卡片风格和窗口风格,可以自定义增加,删除标签页'}  demo={<ChangeTabs />}></Demo>
                            <EditTables dataSource={TABPANE} /><EditTables dataSource={TABCONTENT} />
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本使用'} href={'#tabs-0'} /><Link title={'位置'} href={'#tabs-1'} /><Link title={'风格'} href={'#tabs-2'} /><Link title={'翻页类型'} href={'#tabs-3'} /><Link title={'自定义标签页'} href={'#tabs-4'} /><Link title={'自定义标签页'} href={'#tabs-5'} />
                            </Anchor>
                        </Col>
                    </Row>
                );
            }
         }   
        
