function translate(input) {
  switch (input) {
    default:
      return input;
    // console.log(input);
    case "Meal, Inexpensive Restaurant ":
      return "وجبة بمطعم رخيص";
    case "Meal for 2 People, Mid-range Restaurant, Three-course ":
      return "وجبة لشخصان ";
    case "McMeal at McDonalds (or Equivalent Combo Meal) ":
      return "وجبة من ماكدونالدز";
    case "Domestic Beer (0.5 liter draught) ":
      return "جعة لكل 0.5 لتر";
    case "Imported Beer (0.33 liter bottle) ":
      return "جعة  لكل0.33 لتر";
    case "Cappuccino (regular) ":
      return "كابتشينو";
    case "Coke/Pepsi (0.33 liter bottle) ":
      return "كوكا/ بيبسي لكل 0.33 لتر";
    case "Water (0.33 liter bottle)  ":
      return "مياه لكل 0.33 لتر";
    case "Milk (regular), (1 liter) ":
      return "لبن 1 لتر";
    case "Loaf of Fresh White Bread (500g) ":
      return "رغيف  500 جرام";
    case "Rice (white), (1kg) ":
      return "الارز الابيض 1 كيلو";
    case "Eggs (regular) (12) ":
      return "12 بيضة";
    case "Local Cheese (1kg) ":
      return " جبنة 1 كيلو ";
    case "Chicken Fillets (1kg) ":
      return "فيليه الدجاج 1 كيلو";
    case "Beef Round (1kg) (or Equivalent Back Leg Red Meat) ":
      return "قطعة لحمة 1 كيلو";
    case "Apples (1kg) ":
      return "تفاح 1 كيلو";
    case "Banana (1kg) ":
      return "موز 1 كيلو";
    case "Oranges (1kg) ":
      return "برتقال 1 كيلو";
    case "Tomato (1kg) ":
      return "طماطم 1 كيلو";
    case "Potato (1kg) ":
      return "بطاطا 1 كيلو";
    case "Onion (1kg) ":
      return "بصل 1 كيلو";
    case "Lettuce (1 head) ":
      return "خس 1 كيلو";
    case "Water (1.5 liter bottle) ":
      return "زجاجة ماء 1.5 لتر";
    case "Bottle of Non-Alcoholic Wine (Mid-Range) ":
      return "زجاجة نبيذ لا كحولى ";
    case "Domestic Non-Alcoholic Beer (0.5 liter bottle) ":
      return "جعة  لا كحولية 0.5 لتر";
    case "Imported Non-Alcoholic Beer (0.33 liter bottle) ":
      return "جعة  لا كحولية 0.5 لتر";
    case "Cigarettes 20 Pack (Marlboro) ":
      return "20 لفة سجائر مارلبورو";
    case "Very Low":
      return "منخفض جدا";
    case "Moderate":
      return "متوسط";
    case "Very High":
      return "عالي جدا";
    case "High":
      return "عالي";
    case "Low":
      return "منخفض";
    case "One-way Ticket (Local Transport) ":
      return "تذكرة اتجاه واحد مواصلات ";
    case "Monthly Pass (Regular Price) ":
      return "اشتراك شهرى";
    case "Taxi Start (Normal Tariff) ":
      return "الاجرة الاولية للتاكسي";
    case "Taxi 1km (Normal Tariff) ":
      return "الاجرة لكل 1كم للتاكسي";
    case "Taxi 1hour Waiting (Normal Tariff) ":
      return "اجرة الانتظار ساعة للتاكسي";
    case "Gasoline (1 liter) ":
      return "البنزين 1لتر";
    case "Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car) ":
      return "فولكس فاجن جولف ";
    case "Toyota Corolla Sedan 1.6l 97kW Comfort (Or Equivalent New Car) ":
      return "تويوتا كرولا سيدان ";
    case "Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment ":
      return "مصاريف  لشقة";
    case "1 min. of Prepaid Mobile Tariff Local (No Discounts or Plans) ":
      return "دقيقة الهاتف مسبق الدفع";
    case "Internet (60 Mbps or More, Unlimited Data, Cable/ADSL) ":
      return "الانترنت 60 ميجا ";
    case "Fitness Club, Monthly Fee for 1 Adult ":
      return "شهر في نادى رياضي";
    case "Tennis Court Rent (1 Hour on Weekend) ":
      return "ايجار ملعب تنس لساعة";
    case "Cinema, International Release, 1 Seat ":
      return "مقعد في السينما";
    case "Preschool (or Kindergarten), Full Day, Private, Monthly for 1 Child ":
      return "مصاريف شهرية للحضانة";
    case "International Primary School, Yearly for 1 Child ":
      return "مدرسة اعدادي انترناشونال";
    case "1 Pair of Jeans (Levis 501 Or Similar) ":
      return "بنطلون جينز";
    case "1 Summer Dress in a Chain Store (Zara, H&M, ...) ":
      return "فستان صيفي ماركة";
    case "1 Pair of Nike Running Shoes (Mid-Range) ":
      return "حزاء نايك الرياضي";
    case "1 Pair of Men Leather Business Shoes ":
      return "جاكت جلد رجالي";
    case "Apartment (1 bedroom) in City Centre ":
      return "شقة فردية في المدينة";
    case "Apartment (1 bedroom) Outside of Centre ":
      return "شقة فردية خارج المدينة";
    case "Apartment (3 bedrooms) in City Centre ":
      return "شقة  في المدينة";
    case "Apartment (3 bedrooms) Outside of Centre ":
      return "شقة  خارج المدينة";
    case "Price per Square Meter to Buy Apartment in City Centre ":
      return "سعر المتر لشقة في المدينة";
    case "Price per Square Meter to Buy Apartment Outside of Centre ":
      return "سعر المتر لشقة خارج المدينة";
    case "Average Monthly Net Salary (After Tax) ":
      return "متوسط المرتبات";
    case "Mortgage Interest Rate in Percentages (%), Yearly, for 20 Years Fixed-Rate ":
      return "معدل الفائدة على الرهن العقارى";
    case "Level of crime":
      return "معدل الجريمة";
    case "Crime increasing in the past 3 years":
      return "زيادة الجريمة باخر 3 اعوام";
    case "Worries home broken and things stolen":
      return "اقتحام وسرقة المنازل";
    case "Worries being mugged or robbed":
      return "نشل الاشخاص";
    case "Worries car stolen":
      return "سرقة السيارات";
    case "Worries things from car stolen":
      return "سرقة قطع من السيارات";
    case "Worries attacked":
      return "التهجم";
    case "Worries being insulted":
      return "التعرض للاهانة";
    case "Worries being subject to a physical attack because of your skin color, ethnic origin, gender or religion":
      return "الاذي الجسدي نتيجة للعنصرية";
    case "Problem people using or dealing drugs":
      return "مشكلات تجار ومتعاطي المخدرات";
    case "Problem property crimes such as vandalism and theft":
      return "تخريب وسرقة الممتلكات";
    case "Problem violent crimes such as assault and armed robbery":
      return "جرائم العنف";
    case "Problem corruption and bribery":
      return "الفساد والرشوة";
    case "Safety walking alone during daylight":
      return "خطورة التجول نهارا";
    case "Safety walking alone during night":
      return "خطورة التجول ليلا";
    case "Skill and competency of medical staff":
      return "مهارة الطاقم الطبي";
    case "Speed in completing examination and reports":
      return "سرعة الفحص والتقارير";
    case "Equipment for modern diagnosis and treatment":
      return "الادوات الحديثة للتشخيص";
    case "Accuracy and completeness in filling out reports":
      return "دقة واكمال التقارير";
    case "Friendliness and courtesy of the staff":
      return "ودية وتواضع طافم العمل";
    case "Satisfaction with responsiveness (waitings) in medical institutions":
      return "سرعة استجابة المنشأة الطبية";
    case "Satisfaction with cost to you":
      return "الرضا بالتكلفة";
    case "Convenience of location for you":
      return "ملائمة الموقع";
    case "Apartment (1 bedroom) in City Centre":
      return "شقة فردية في المدينة";
    case "Apartment (1 bedroom) Outside of Centre":
      return "شقة فردية خارج المدينة";
    case "Apartment (3 bedrooms) in City Centre":
      return "شقة لثلاث اشخاص في المدينة";
    case "Apartment (3 bedrooms) Outside of Centre":
      return "شقة لثلاث اشخاص خارج المدينة";
    case "Price per Square Meter to Buy Apartment in City Centre":
      return "سعر المتر لشقة في المدينة";
    case "Price per Square Meter to Buy Apartment Outside of Centre":
      return "سعر المتر لشقة خارج المدينة";
    case "Average Monthly Net Salary (After Tax)":
      return "متوسط المرتبات ";
    case "Mortgage Interest Rate in Percentages (%), Yearly, for 20 Years Fixed-Rate":
      return "معدل الفائدة على الرهن العقارى";
    case "Working from Home":
      return "العمل من المنزل";
    case "Walking":
      return "التمشية";
    case "Car":
      return "السيارة";
    case "Bike":
      return "الدراجة";
    case "Motorbike":
      return "الدراجة النارية";
    case "Bus/Trolleybus":
      return "الاوتوبيس";
    case "Tram/Streetcar":
      return "الترام";
    case "Train/Metro":
      return "القطار/المترو";
    case "Distance":
      return "المسافة";
    case "Walking":
      return "التمشية";
    case "Waiting":
      return "الانتظار";
    case "Driving Car":
      return "قيادة سيارة";
    case "Bike":
      return "الدراجة";
    case "Motor Bike":
      return "الدراجة النارية";
    case "Bus/Trolleybus Ride":
      return "الاوتوبيس";
    case "Tram/Streetcat Ride":
      return "الترام";
    case "Train/Metro Ride":
      return "القطار/المترو";
    case "Overall":
      return "الاجمالي";
    case "Distance":
      return "المسافة";
    case "Walking":
      return "التمشية";
    case "Waiting":
      return "الانتظار";
    case "Driving Car":
      return "قيادة سيارة";
    case "Air Pollution":
      return "التلوث الهوائي";
    case "Drinking Water Pollution and Inaccessibility":
      return "شرب الماء الملوث";
    case "Dissatisfaction with Garbage Disposal":
      return "عدم الرضا بصرف النفايات";
    case "Dirty and Untidy":
      return "الاتساخ";
    case "Noise and Light Pollution":
      return "التلوث السمعي والبصري";
    case "Water Pollution":
      return "التلوث المائي";
    case "Dissatisfaction to Spend Time in the City":
      return "عدم الرضا عن البقاء بالمدينة";
    case "Dissatisfaction with Green and Parks in the City":
      return "عدم الرضا عن المنتزهات";
    case "Air quality":
      return "جودة الهواء";
    case "Drinking Water Quality and Accessibility":
      return "جودة شرب المياه";
    case "Garbage Disposal Satisfaction":
      return "الرضا عن صرف النفايات";
    case "Clean and Tidy":
      return "النظافة";
    case "Quiet and No Problem with Night Lights":
      return "الهدوء";
    case "Water Quality":
      return "جودة المياه";
    case "Comfortable to Spend Time in the City":
      return "الراحة فالتواجد بالمدينة";
    case "Quality of Green and Parks":
      return "جودة المنتزهات";
  }
}
export default translate;
