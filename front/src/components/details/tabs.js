import Economy from "../panels/economy";
import Statics from "../panels/statics";
import Weather from "../panels/weather";
import Tourism from "../panels/tourism";
import Quality from "../panels/quality";
import Purchase from "../panels/purchase";
import { Tabs } from "antd";

function Tab() {
  const { TabPane } = Tabs;
  const onChange = (key) => {};
  return (
    <section className="details_tabs">
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        centered
        direction="rtl"
        tabBarStyle={{ fontWeight: "bold" }}
      >
        <TabPane tab="الاقتصاد" key="1">
          <Economy />
        </TabPane>
        <TabPane tab="احصائيات" key="2">
          <Statics />
        </TabPane>
        <TabPane tab="المناخ والطبيعة" key="3">
          <Weather />
        </TabPane>
        <TabPane tab="السياحة" key="4">
          <Tourism />
        </TabPane>
        <TabPane tab="جودة الحياة" key="5">
          <Quality />
        </TabPane>
        <TabPane tab="القوة الشرائية" key="6">
          <Purchase />
        </TabPane>
      </Tabs>
    </section>
  );
}
export default Tab;
