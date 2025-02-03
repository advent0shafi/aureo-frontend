import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Navigation
          heroDescrptions:
            "Explore our exquisite collection of handcrafted jewelry, designed to celebrate the rich heritage of Qatar.",
          allHeroText: "Discover Timeless Gold & Jewelry",
          ShopNow: "Show Now",
          CustomDesign: " CustomDesign",
          FeaturedHeading: "Featured Collections",
          FeaturedDescriptions:
            "Discover our most prestigious pieces, carefully curated for those who appreciate fine craftsmanship and timeless elegance.",
          ExploreCollection: "Explore Collection",
          NewArrivals: "New Arrivals",
          DiscoverLatestCollection: "Discover our latest collection",
          RoyalCollection: "Royal Collection",
          ExclusivePieces: "Exclusive pieces for you",
          ShopCollection: "Shop Collection",
          allJewelry: "All Jewelry",
          necklaces: "Necklaces",
          rings: "Rings",
          earrings: "Earrings",
          search: "Search...",
          Related_Products: "Related Products",

          // Product Details
          AddToCart: "Add to Cart",
          specifications: "Specifications",

          // Cart
          shoppingCart: "Shopping Cart",
          cartEmpty: "Your cart is empty",
          continueShopping: "Continue Shopping",
          orderSummary: "Order Summary",
          subtotal: "Subtotal",
          shipping: "Shipping",
          total: "Total",
          free: "Free",
          proceedToCheckout: "Proceed to Checkout",

          personalizedLuxury: "Personalized Luxury",
          customDesignService: "Custom Design Service",
          customDesignDescription:
            "Create your perfect piece of jewelry with our expert craftsmen, bringing your vision to life with unparalleled attention to detail",
          designConsultation: "Design Consultation",
          designConsultationDesc:
            "Meet with our expert designers to discuss your vision and preferences",
          materialSelection: "Material Selection",
          materialSelectionDesc:
            "Choose from our premium selection of metals, gems, and diamonds",
          crafting: "Crafting",
          craftingDesc:
            "Watch your design come to life through our master craftsmen",
          recentCustomCreations: "Recent Custom Creations",
          customRingDesign: "Custom Ring Design",
          customNecklaceDesign: "Custom Necklace Design",
          customBraceletDesign: "Custom Bracelet Design",
          customJewelrySet: "Custom Jewelry Set",
          readyToCreate: "Ready to Create Your Dream Jewelry?",
          bookConsultationDesc:
            "Book a consultation with our expert designers and start your journey today",
          bookConsultation: "Book Consultation",
          learnMore: "Learn More",

          storeLocations: "Our Store Locations",
          storeLocationsDesc:
            "Visit our luxury showrooms to experience our exquisite jewelry collection in person",
          westBayStore: "West Bay Flagship Store",
          pearlQatarStore: "Pearl Qatar Boutique",
          mallOfQatarStore: "Mall of Qatar Store",
          addresss: "Gate Mall, West Bay, Doha, Qatar",
          address: {
            westBay: "Gate Mall, West Bay, Doha, Qatar",
            pearlQatar: "Porto Arabia, Pearl Qatar, Doha",
            mallOfQatar: "Mall of Qatar, Al Rayyan, Doha",
          },
          openingHours:
            "10:00 AM - 10:00 PM (Sat-Thu)\n2:00 PM - 10:00 PM (Fri)",
          getDirections: "Get Directions",
          vipLounge: "VIP Lounge",
          vipLoungeDesc: "Exclusive consultation area",
          freeParking: "Free Parking",
          freeParkingDesc: "Convenient access",
          expertStaff: "Expert Staff",
          expertStaffDesc: "Professional guidance",
          repairService: "Repair Service",
          repairServiceDesc: "In-store maintenance",
          bookAppointment: "Book an Appointment",

          companyName: "Qatarati Gold",
          companyDescription:
            "Experience luxury and elegance with Qatar's finest jewelry collection.",
          quickLinks: "Quick Links",
          aboutUs: "About Us",
          collections: "Collections",

          customDesign: "Custom Design",
          contactUs: "Contact Us",
          customerService: "Customer Service",
          faq: "FAQ",
          shippingPolicy: "Shipping Policy",
          returnsExchange: "Returns & Exchange",
          sizeGuide: "Size Guide",
          careInstructions: "Care Instructions",

          phone: "+974 4444 1234",
          email: "info@qataratigold.qa",
          subscribeNewsletter: "Subscribe to Our Newsletter",
          newsletterDescription:
            "Stay updated with our latest collections and exclusive offers",
          enterEmail: "Enter your email",
          subscribe: "Subscribe",
          allRightsReserved: "© 2024 Qatarati Gold. All rights reserved.",
          privacyPolicy: "Privacy Policy",
          termsOfService: "Terms of Service",
          language: "العربية",
          // header
          product: "Product",
          about: "About",
          contact: "Contact",
          profile: "Profile",
          logout: "Logout",
          login: "Login",
          signUp: "Sign Up",
          cart: "Cart",

          // prdduct listing
          searchPlaceholder: "Search by name, category, or material...",
          category: "Category",
          jewelry: "Jewelry",
          watches: "Watches",
          priceRange: "Price Range",
          material: "Material",
          addToCart: "Add to Cart",
          itemAddedToCart: "Item added to cart!",
          failedToAddItem: "Failed to add item to cart. Please try again.",
          under1000: "Under $1,000",
          "1000to5000": "$1,000 - $5,000",
          "5000to10000": "$5,000 - $10,000",
          above10000: "Above $10,000",

          quantity: "Quantity",
          addToWishlist: "Add to Wishlist",
          successAddToCart: "Successfully added to the cart!",
          failAddToCart: "Failed to add item to cart. Please try again.",
          reviews: "Reviews",
          verifiedPurchase: "Verified Purchase",
          outOf5: "out of 5",
          showMoreReviews: "Show More Reviews",

          // Newsletter
          stayUpdated: "Stay Updated",
          newsletterDesc:
            "Subscribe to our newsletter for exclusive offers and new arrivals.",

          // Features
          premiumQuality: "Premium Quality",
          premiumDesc:
            "Crafted with the finest materials and attention to detail",
          lifetimeWarranty: "Lifetime Warranty",
          warrantyDesc: "We stand behind the quality of our jewelry",
          certifiedAuthentic: "Certified Authentic",
          certifiedDesc: "Every piece comes with a certificate of authenticity",

          latestAdditions: "Latest Additions",
          newArrivals: "New Arrivals",
          discoverCollection:
            "Discover our latest collection of exquisite jewelry pieces, fresh from our master craftsmen.",
          royalCollection: "The Royal Collection 2024",
          exclusivePieces:
            "Exclusive pieces inspired by Qatari heritage and modern luxury",
          shopCollection: "Shop Collection",
          new: "New",

          // Testimonials
          testimonials: "What Our Clients Say",
          description:
            "Hear from our valued customers about their experience with our jewelry and service",
          testimonial_1_quote:
            "The craftsmanship of my engagement ring is absolutely stunning. The attention to detail and the quality of the diamonds exceeded my expectations.",
          testimonial_1_name: "Sarah Al-Thani",
          testimonial_1_role: "Engagement Ring Customer",
          testimonial_2_quote:
            "The custom design service was exceptional. They helped me create a unique piece that perfectly represents our family heritage.",
          testimonial_2_name: "Mohammed Al-Mahmoud",
          testimonial_2_role: "Custom Design Client",
          testimonial_3_quote:
            "Their Arabic calligraphy collection is breathtaking. Each piece tells a story and the quality is unmatched in Qatar.",
          testimonial_3_name: "Fatima Al-Sayed",
          testimonial_3_role: "Loyal Customer",
          trust_1_title: "Premium Quality",
          trust_1_description: "Certified diamonds and precious metals",
          trust_2_title: "Certified",
          trust_2_description: "International quality standards",
          trust_3_title: "Secure Shopping",
          trust_3_description: "100% secure transactions",
          trust_4_title: "Easy Returns",
          trust_4_description: "30-day return policy",
          call_to_action: "Share Your Experience",

          reviewItems: "Review your items before checkout",
          yourCartIsEmpty: "Your cart is empty",
          itemRemoved: "Item removed",
          quantityUpdated: "Quantity updated",
          failedToUpdateItem: "Failed to update item",
          failedToRemoveItem: "Failed to remove item",
          failedToLoadCart: "Failed to load cart",

          vat: "VAT (5%)",

          weAccept: "We accept",

          information: "Information",
          payment: "Payment",
          confirmation: "Confirmation",
          shippingInformation: "Shipping Information",
          firstName: "First Name",
          lastName: "Last Name",
          emailAddress: "Email Address",
          phoneNumber: "Phone Number",
          streetAddress: "Street Address",
          city: "City",
          area: "Area",
          buildingNo: "Building/Villa No.",
          deliveryInstructions: "Delivery Instructions (Optional)",
          paymentDetails: "Payment Details",
          cardNumber: "Card Number",
          expiryDate: "Expiry Date",
          cvv: "CVV",
          completePayment: "Complete Payment",
          orderConfirmed: "Order Confirmed!",
          thankYouMessage:
            "Thank you for your purchase. Your order has been confirmed.",
          orderDetails: "Order Details",
          orderNumber: "Order Number",
          estimatedDelivery: "Estimated Delivery",

          continueToPayment: "Continue to Payment",
          secureCheckout: "Secure Checkout",
          loginRequired: "Login Required",
          loginMessage: "Please login to continue with your purchase",

          password: "Password",

          continueAsGuest: "Continue as Guest",

          craftingTimeless: "Crafting Timeless",
          elegance: "Elegance",
          aboutDescription:
            "With over two decades of expertise in fine jewelry, we blend traditional craftsmanship with contemporary design to create pieces that tell your unique story.",
          heritage: "Heritage",
          heritageDescription:
            "Rooted in traditional craftsmanship passed down through generations.",
          quality: "Quality",
          qualityDescription:
            "Only the finest materials and most skilled artisans create our pieces.",
          innovation: "Innovation",
          innovationDescription:
            "Blending time-honored techniques with modern design sensibilities.",
          ourStory: "Our Story",
          storyDescription:
            "Founded with a passion for exceptional craftsmanship and design, our journey began in the heart of the jewelry district. Each piece we create is a testament to our commitment to quality and artistic excellence.",
          yearsOfExcellence: "Years of Excellence",
          happyCustomers: "Happy Customers",
          authenticMaterials: "Authentic Materials",
          experienceOurCraftsmanship: "Experience Our Craftsmanship",
          viewCollection: "View Collection",

          getInTouch: "Get in Touch",
          contactDescription:
            "We're here to help you find the perfect piece or create something uniquely yours.",
          visitUs: "Visit Us",
          callUs: "Call Us",
          emailUs: "Email Us",
          workingHours: "Sunday - Thursday: 10AM - 8PM",
          emailAddresses: "info@yourjewelry.com\nsupport@yourjewelry.com",
          sendUsMessage: "Send Us a Message",
          name: "Name",
      
          subject: "Subject",
          message: "Message",
          sendMessage: "Send Message",
          sending: "Sending...",
         
        },
      },
      ar: {
        translation: {
          // Navigation
          heroDescrptions:
            "استكشف مجموعتنا الرائعة من المجوهرات المصنوعة يدويًا، المصممة للاحتفال بالتراث الغني في قطر",
          CustomDesign: " تصميم مخصص",
          allHeroText: "اكتشف الذهب والمجوهرات الخالدة",
          ShopNow: "تسوق الآن",
          FeaturedHeading: "المميزة",
          FeaturedDescriptions:
            "اكتشف أبرز قطعنا، التي تم اختيارها بعناية لأولئك الذين يقدرون الحرفية الرفيعة والأناقة الخالدة.",
          ExploreCollection: "استكشف المجموعة",
          NewArrivals: "وصل حديثاً",
          DiscoverLatestCollection: "اكتشف أحدث مجموعاتنا",
          RoyalCollection: "المجموعة الملكية",
          ExclusivePieces: "قطع حصرية لك",
          ShopCollection: "تسوق المجموعة",

          personalizedLuxury: "الفخامة الشخصية",
          customDesignService: "خدمة التصميم المخصص",
          customDesignDescription:
            "قم بإنشاء قطعة المجوهرات المثالية الخاصة بك مع حرفيينا الخبراء، لتحويل رؤيتك إلى حقيقة مع اهتمام فائق بالتفاصيل",
          designConsultation: "استشارة التصميم",
          designConsultationDesc:
            "قابل مصممينا الخبراء لمناقشة رؤيتك وتفضيلاتك",
          materialSelection: "اختيار المواد",
          materialSelectionDesc:
            "اختر من مجموعتنا الممتازة من المعادن والأحجار الكريمة والماس",
          crafting: "الصناعة",
          craftingDesc: "شاهد تصميمك يتحول إلى حقيقة من خلال حرفيينا المهرة",
          recentCustomCreations: "الإبداعات المخصصة الحديثة",
          customRingDesign: "تصميم خاتم مخصص",
          customNecklaceDesign: "تصميم قلادة مخصصة",
          customBraceletDesign: "تصميم سوار مخصص",
          customJewelrySet: "طقم مجوهرات مخصص",
          readyToCreate: "هل أنت مستعد لإنشاء مجوهراتك الحلم؟",
          bookConsultationDesc:
            "احجز استشارة مع مصممينا الخبراء وابدأ رحلتك اليوم",
          bookConsultation: "حجز استشارة",
          learnMore: "اعرف المزيد",

          //product
          searchPlaceholder: "البحث بالاسم أو الفئة أو المادة...",
          category: "الفئة",
          jewelry: "مجوهرات",
          watches: "ساعات",
          priceRange: "نطاق السعر",
          material: "المادة",
          addToCart: "أضف إلى السلة",
          itemAddedToCart: "تمت إضافة العنصر إلى السلة!",
          failedToAddItem:
            "فشل في إضافة العنصر إلى السلة. يرجى المحاولة مرة أخرى.",
          under1000: "أقل من 1,000 دولار",
          "1000to5000": "1,000 - 5,000 دولار",
          "5000to10000": "5,000 - 10,000 دولار",
          above10000: "أكثر من 10,000 دولار",

          quantity: "الكمية",
          addToWishlist: "أضف إلى قائمة الرغبات",
          successAddToCart: "تمت الإضافة إلى السلة بنجاح!",
          failAddToCart:
            "فشل في إضافة العنصر إلى السلة. يرجى المحاولة مرة أخرى.",
          reviews: "التقييمات",
          verifiedPurchase: "شراء موثق",
          outOf5: "من 5",
          showMoreReviews: "عرض المزيد من التقييمات",
          companyName: "ذهب قطري",
          companyDescription:
            "استمتع بالفخامة والأناقة مع أرقى مجموعة مجوهرات في قطر.",
          quickLinks: "روابط سريعة",
          aboutUs: "من نحن",
          collections: "المجموعات",
          storeLocations: "مواقع المتاجر",
          customDesign: "تصميم مخصص",
          contactUs: "اتصل بنا",
          customerService: "خدمة العملاء",
          faq: "الأسئلة الشائعة",
          shippingPolicy: "سياسة الشحن",
          returnsExchange: "الإرجاع والاستبدال",
          sizeGuide: "دليل المقاسات",
          careInstructions: "تعليمات العناية",
          address: "جيت مول، الخليج الغربي\nالدوحة، قطر",
          phone: "+974 4444 1234",
          email: "info@qataratigold.qa",
          subscribeNewsletter: "اشترك في نشرتنا الإخبارية",
          newsletterDescription:
            "ابق على اطلاع بأحدث مجموعاتنا وعروضنا الحصرية",
          enterEmail: "أدخل بريدك الإلكتروني",
          subscribe: "اشترك",
          allRightsReserved: "© 2024 ذهب قطري. جميع الحقوق محفوظة.",
          privacyPolicy: "سياسة الخصوصية",
          termsOfService: "شروط الخدمة",
          language: "English",

          storeLocationsDesc:
            "قم بزيارة صالات العرض الفاخرة لدينا لتجربة مجموعة المجوهرات الرائعة شخصيًا",
          westBayStore: "متجر الخليج الغربي الرئيسي",
          pearlQatarStore: "بوتيك اللؤلؤة قطر",
          mallOfQatarStore: "متجر مول قطر",

          openingHours:
            "10:00 صباحًا - 10:00 مساءً (السبت-الخميس)\n2:00 مساءً - 10:00 مساءً (الجمعة)",
          getDirections: "احصل على الاتجاهات",
          vipLounge: "صالة كبار الشخصيات",
          vipLoungeDesc: "منطقة استشارة حصرية",
          freeParking: "موقف سيارات مجاني",
          freeParkingDesc: "وصول مريح",
          expertStaff: "طاقم خبير",
          expertStaffDesc: "توجيه احترافي",
          repairService: "خدمة الإصلاح",
          repairServiceDesc: "صيانة داخل المتجر",
          bookAppointment: "حجز موعد",

          allJewelry: "جميع المجوهرات",
          necklaces: "قلادات",
          rings: "خواتم",
          earrings: "أقراط",
          search: "بحث...",
          Related_Products: "المنتجات ذات الصلة",

          // Product Details
          AddToCart: "أضف إلى السلة",
          specifications: "المواصفات",

          // Cart
          shoppingCart: "عربة التسوق",
          cartEmpty: "عربة التسوق فارغة",
          continueShopping: "مواصلة التسوق",
          orderSummary: "ملخص الطلب",
          subtotal: "المجموع الفرعي",
          shipping: "الشحن",
          total: "المجموع",
          free: "مجاني",
          proceedToCheckout: "المتابعة للدفع",

          // Newsletter
          stayUpdated: "ابق على اطلاع",

          // header
          newsletterDesc:
            "اشترك في نشرتنا الإخبارية للحصول على عروض حصرية ومنتجات جديدة",

          product: "المنتجات",
          about: "من نحن",
          contact: "اتصل بنا",
          profile: "الملف الشخصي",
          logout: "تسجيل الخروج",
          login: "تسجيل الدخول",
          signUp: "إنشاء حساب",
          cart: "السلة",

          // Features
          premiumQuality: "جودة ممتازة",
          premiumDesc: "مصنوعة من أجود المواد مع الاهتمام بالتفاصيل",
          lifetimeWarranty: "ضمان مدى الحياة",
          warrantyDesc: "نحن نضمن جودة مجوهراتنا",
          certifiedAuthentic: "معتمدة وأصلية",
          certifiedDesc: "كل قطعة تأتي مع شهادة أصالة",

          // New Arrivals
          latestAdditions: "أحدث الإضافات",
          newArrivals: "الوصول الجديد",
          discoverCollection:
            "اكتشف أحدث مجموعاتنا من قطع المجوهرات الفاخرة، من صنع حرفيينا الماهرين.",
          royalCollection: "مجموعة 2024 الملكية",
          exclusivePieces:
            "قطع حصرية مستوحاة من التراث القطري والفخامة الحديثة",
          shopCollection: "تسوق المجموعة",
          new: "جديد",

          // Testimonials
          testimonials: "ماذا يقول عملاؤنا",
          description:
            "استمع إلى عملائنا الكرام حول تجربتهم مع مجوهراتنا وخدمتنا",
          testimonial_1_quote:
            "صنعة خاتم خطوبتي مذهلة للغاية. لقد تجاوزت جودة الألماس واهتمام التفاصيل توقعاتي.",
          testimonial_1_name: "سارة آل ثاني",
          testimonial_1_role: "عميلة خاتم الخطوبة",
          testimonial_2_quote:
            "كانت خدمة التصميم المخصص استثنائية. لقد ساعدوني في إنشاء قطعة فريدة تمثل تراث عائلتنا بشكل مثالي.",
          testimonial_2_name: "محمد آل محمود",
          testimonial_2_role: "عميل تصميم مخصص",
          testimonial_3_quote:
            "مجموعتهم من الخط العربي رائعة. كل قطعة تروي قصة والجودة لا مثيل لها في قطر.",
          testimonial_3_name: "فاطمة السيد",
          testimonial_3_role: "عميلة وفية",
          trust_1_title: "جودة ممتازة",
          trust_1_description: "ألماس ومعادن ثمينة معتمدة",
          trust_2_title: "معتمد",
          trust_2_description: "معايير الجودة الدولية",
          trust_3_title: "تسوق آمن",
          trust_3_description: "معاملات آمنة بنسبة 100%",
          trust_4_title: "إرجاع سهل",
          trust_4_description: "سياسة إرجاع لمدة 30 يومًا",
          call_to_action: "شارك تجربتك",

          reviewItems: "راجع العناصر الخاصة بك قبل الدفع",
          yourCartIsEmpty: "سلة التسوق فارغة",
          itemRemoved: "تمت إزالة العنصر",
          quantityUpdated: "تم تحديث الكمية",
          failedToUpdateItem: "فشل تحديث العنصر",
          failedToRemoveItem: "فشل إزالة العنصر",
          failedToLoadCart: "فشل تحميل سلة التسوق",
          vat: "ضريبة القيمة المضافة (5٪)",
          weAccept: "نحن نقبل",
          information: "المعلومات",
          payment: "الدفع",
          confirmation: "التأكيد",
          shippingInformation: "معلومات الشحن",
          firstName: "الاسم الأول",
          lastName: "اسم العائلة",
          emailAddress: "البريد الإلكتروني",
          phoneNumber: "رقم الهاتف",
          streetAddress: "عنوان الشارع",
          city: "المدينة",
          area: "المنطقة",
          buildingNo: "رقم المبنى/الفيلا",
          deliveryInstructions: "تعليمات التوصيل (اختياري)",
          paymentDetails: "تفاصيل الدفع",
          cardNumber: "رقم البطاقة",
          expiryDate: "تاريخ الانتهاء",
          cvv: "رمز التحقق",
          completePayment: "إتمام الدفع",
          orderConfirmed: "تم تأكيد الطلب!",
          thankYouMessage: "شكرا لشرائك. تم تأكيد طلبك.",
          orderDetails: "تفاصيل الطلب",
          orderNumber: "رقم الطلب",
          estimatedDelivery: "التسليم المتوقع",

          continueToPayment: "المتابعة إلى الدفع",
          secureCheckout: "دفع آمن",
          loginRequired: "تسجيل الدخول مطلوب",
          loginMessage: "يرجى تسجيل الدخول للمتابعة مع عملية الشراء",

          password: "كلمة المرور",

          continueAsGuest: "المتابعة كضيف",

          craftingTimeless: "صياغة الأناقة",
          elegance: "الخالدة",
          aboutDescription:
            "مع أكثر من عقدين من الخبرة في المجوهرات الراقية، نمزج بين الحرفية التقليدية والتصميم المعاصر لإنشاء قطع تروي قصتك الفريدة.",
          heritage: "التراث",
          heritageDescription:
            "متجذرة في الحرفية التقليدية المتوارثة عبر الأجيال.",
          quality: "الجودة",
          qualityDescription:
            "فقط أفضل المواد وأكثر الحرفيين مهارة يصنعون قطعنا.",
          innovation: "الابتكار",
          innovationDescription:
            "مزج التقنيات العريقة مع الحساسيات التصميمية الحديثة.",
          ourStory: "قصتنا",
          storyDescription:
            "تأسست بشغف للحرفية والتصميم الاستثنائي، بدأت رحلتنا في قلب حي المجوهرات. كل قطعة نصنعها هي شهادة على التزامنا بالجودة والتميز الفني.",
          yearsOfExcellence: "سنوات من التميز",
          happyCustomers: "عميل سعيد",
          authenticMaterials: "مواد أصلية",
          experienceOurCraftsmanship: "اختبر حرفيتنا",
          viewCollection: "عرض المجموعة",
          getInTouch: "تواصل معنا",
          contactDescription: "نحن هنا لمساعدتك في العثور على القطعة المثالية أو إنشاء شيء فريد خاص بك.",
          visitUs: "زورونا",
          callUs: "اتصل بنا",
          emailUs: "راسلنا",
        
          workingHours: "الأحد - الخميس: 10 صباحًا - 8 مساءً",
          emailAddresses: "info@yourjewelry.com\nsupport@yourjewelry.com",
          sendUsMessage: "أرسل لنا رسالة",
          name: "الاسم",
          subject: "الموضوع",
          message: "الرسالة",
          sendMessage: "إرسال الرسالة",
          sending: "جاري الإرسال...",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
