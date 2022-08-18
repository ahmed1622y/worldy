function Weather() {
  return (
    <div className="panel">
      {" "}
      <div className="one_panel_two_item ">
        <p>الكوارث الطبيعية</p>
        <p>منخفض</p>
      </div>
      <div className="one_panel_two_item blue">
        <p>معدل الأمطار</p>
        <p>متوسط ٣٠٠ ملم </p>
      </div>
      <div className="onePanel_with_header ">
        <h5>المناخ</h5>
        <p>
          مناخ المملكة قاري حار صيفاً بارد شتاءاً وأمطارها شتوية ويعتدل المناخ
          على المرتفعات الغربية والجنوبية الغربية، اما المناطق الوسطى فصيفها حار
          وجاف وشتاؤها بارد وجاف. وترتفع على السواحل درجة الحرارة والرطوبة .
        </p>
      </div>
    </div>
  );
}
export default Weather;
