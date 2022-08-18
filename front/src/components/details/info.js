import Header from "./header";
import src from "./head.jpg";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ct from "countries-and-timezones";
function Info() {
  const { name: allData } = useParams();
  const name = allData.split("+")[0];
  const flagName = allData.split("+")[1];
  const timezones = ct.getAllCountries();
  const [timezone, setTimeZone] = useState({ timezones: [""] });
  useEffect(() => {
    Object.values(timezones).map((element) => {
      if (element.name.toLocaleLowerCase() === name.trim().toLocaleLowerCase())
        setTimeZone(element);
    });
  }, []);
  return (
    <div className="details_body">
      <Header flagName={flagName} timezone={timezone} />
      <div className="panel popular">
        <h4 className="header_panel">معلومات هامة قبل السفر</h4>
        <div className="onePanel_with_header ">
          <h5>نصائح قبل السفر</h5>
          <p>
            عند السفر في رحلة سياحية إلى المملكة العربية السعودية، عليك معرفة
            بعض النصائح ومنها إن الإنترنت للرقابة، حيث يتم حظر بعض المواقع
            وخدمات الإنترنت. لذا في حال رغبتك في استخدام الانترنت، فستحتاج إلى
            VPN ونحن نوصي بـ ExpressVPN، فهو الأسرع والأفضل للسعودية. هناك
            الكثير من الأمور عليك اكتشافها قبل سفرك.
          </p>
          <p style={{ marginTop: 10 }}>
            تذكر دائمًا السفر مع تأمين السفر المناسب ، خاصة في دول مثل المملكة
            العربية السعودية حيث يكون نظام الرعاية الصحية للأجانب مكلفًا للغاية.
          </p>
        </div>
        <div className="onePanel_with_header blue">
          <h5>شروط التأشيرة</h5>
          <p>
            عند التقدم للحصول على التأشيرة، ينبغي أن يكون جواز السفر ساريًا لمدة
            لا تقل عن 6 أشهر من تاريخ الدخول إلى المملكة العربية السعودية. -لا
            ترد المبالغ المدفوعة عند رفض الطلب، ورسوم التأشيرة غير قابلة
            للاسترداد. -رسوم الإقامة الإضافية: 100 ريال سعودي مقابل كل يوم إقامة
            إضافية. -لا توجد أي اشتراطات دينيّة على مقدم الطلب
          </p>
        </div>
      </div>
    </div>
  );
}
export default Info;
