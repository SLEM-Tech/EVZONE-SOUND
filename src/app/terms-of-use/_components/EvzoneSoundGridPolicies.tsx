import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// EVZONE SOUND GRID COM. LTD - Digital Goodsâ€”audiovisual Media Including Books, Movies
const EvzoneSoundGridPolicies = () => {
  const searchParams = useSearchParams().toString();
  const search = searchParams.replace(/=$/, "");
  const [activeTab, setActiveTab] = useState<string>("termsOfUse");

  useEffect(() => {
    if (search === "terms-of-use") {
      setActiveTab("termsOfUse");
    } else if (search === "privacy-policy") {
      setActiveTab("privacyPolicy");
    } else if (search === "delivery-return") {
      setActiveTab("deliveryReturn");
    } else if (search === "refund-policy") {
      setActiveTab("refundPolicy");
    }
  }, [search]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main className="bg-background mx-auto pt-32 pb-24">
      <section className="flex w-full flex-col items-center pt-8 xl:pt-16 gap-2 sm:gap-3 px-2 sm:px-8 md:px-16 text-center">
        <h4 className="text-black text-base sm:text-xl font-semibold leading-[120%]">
          Our Policies
        </h4>
        <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl leading-[150%]">
          Evzone Sound Grid Com. Ltd Policies
        </h3>
        <span className="text-xs sm:text-sm xl:text-base leading-[150%] text-gray-400 sm:max-w-3xl slg:max-w-2xl">
          Evzone Sound Grid Com. Ltd, we specialize in premium women&apos;s fashion,
          offering a curated selection of clothing, accessories, and lifestyle
          apparel. Our collection features high-quality fabrics, trend-forward
          designs, and versatile pieces to elevate every wardrobe with style,
          comfort, and sophistication.
        </span>
        <div className="flex gap-2 mt-3 xl:mt-8 text-[10px] xs:text-xs sm:text-sm slg:text-base leading-[140%] bg-[#F5F5F5] p-1 rounded-md transition">
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "termsOfUse"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("termsOfUse")}
          >
            Terms of use
          </button>
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "privacyPolicy"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("privacyPolicy")}
          >
            Privacy Policy
          </button>
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "deliveryReturn"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("deliveryReturn")}
          >
            Delivery & Return
          </button>
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "refundPolicy"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("refundPolicy")}
          >
            Refund Policy
          </button>
        </div>
      </section>

      <div className="flex mx-auto w-full mt-4 md:mt-8 text-base leading-[155%] px-2 sm:px-0 sm:max-w-xl slg:max-w-2xl pb-20">
        {activeTab === "termsOfUse" && (
          <div id="termsOfUse" className="text-[#667085]">
            <h4 className="text-base sm:text-xl xl:text-2xl font-semibold text-black capitalize">
              Terms of Use - Evzone Sound Grid Com. Ltd
            </h4>

            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              By purchasing and accessing any fashion products from Evzone Sound
              Grid Com. Ltd — including women&apos;s clothing, accessories, and
              related style merchandise — you agree to the following terms:
            </p>

            <ul className="list-disc pl-5 mt-2 space-y-2 text-xs md:text-sm xl:text-base">
              {/* Premium Fashion Collection */}
              <li>
                <span className="font-medium">Premium Fashion Collection:</span>{" "}
                Evzone Sound Grid specializes in premium women&apos;s fashion,
                offering a curated selection of stylish clothing, elegant
                accessories, and trend-forward pieces designed to elevate the
                modern woman&apos;s wardrobe. Our collection blends quality,
                comfort, and contemporary design to meet everyday lifestyle
                needs.
              </li>

              {/* Fashion & Styling Essentials */}
              <li>
                <span className="font-medium">
                  Fashion & Styling Essentials:
                </span>{" "}
                Our offerings include dresses, tops, skirts, outerwear,
                activewear, and complementary accessories such as handbags,
                jewelry, and footwear — all curated to enhance personal style
                and confidence.
              </li>

              {/* Clothing & Accessories Catalog */}
              <li>
                <span className="font-medium">
                  Clothing & Accessories Catalog:
                </span>{" "}
                Explore an extensive collection featuring dresses, tops, skirts,
                pants, activewear, handbags, jewelry, footwear, and seasonal
                fashion essentials — updated regularly with new arrivals.
              </li>

              {/* Ethically-Sourced & Affordable Fashion */}
              <li>
                <span className="font-medium">
                  Ethically-Sourced & Affordable Fashion:
                </span>{" "}
                Our products are sourced from trusted manufacturers with
                transparent quality standards. We offer fair pricing,
                promotions, and frequent discounts to make stylish fashion
                accessible to all.
              </li>

              {/* Style Grid Collection System */}
              <li>
                <span className="font-medium">
                  Style Grid Collection System:
                </span>{" "}
                Our curated “style grid” helps customers discover outfits based
                on trends, body type, occasions, and personal style preferences
                — pairing tops, bottoms, dresses, and accessories for complete
                looks.
              </li>

              {/* Personal Styling */}
              <li>
                <span className="font-medium">
                  Personal Styling & Outfit Inspiration:
                </span>{" "}
                Access seasonal lookbooks, curated outfit suggestions, and style
                guides to help you build fashionable ensembles effortlessly.
                Save favorites and create personalized style boards.
              </li>

              {/* Premium Shopping Experience */}
              <li>
                <span className="font-medium">
                  Premium Shopping Experience:
                </span>{" "}
                Enjoy a seamless shopping experience with detailed product
                images, accurate size guides, fabric descriptions, and intuitive
                navigation designed to help you shop confidently.
              </li>
            </ul>

            {/* Additional text */}
            <p className="mt-4 leading-[1.8] text-xs md:text-sm xl:text-base">
              <span className="font-medium">Style & Wardrobe Integration:</span>{" "}
              Our platform provides curated outfit combinations that help
              customers pair clothing and accessories to create complete,
              fashionable looks for any occasion.
            </p>

            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              <span className="font-medium">Quality Assurance Guarantee:</span>{" "}
              Every clothing item and accessory undergoes strict quality checks
              to ensure excellent fabric durability, stitching integrity, and
              overall finish. All products meet our standards of comfort, style,
              and long-lasting wear.
            </p>
          </div>
        )}

        {activeTab === "privacyPolicy" && (
          <div id="privacyPolicy" className="text-[#667085]">
            <h4 className="text-sm sm:text-xl xl:text-2xl font-semibold text-black">
              PRIVACY POLICY - EVZONE SOUND GRID COM. LTD
            </h4>

            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              Evzone Sound Grid Com. Ltd is committed to protecting the privacy
              of our customers while providing premium women&apos;s fashion,
              clothing, and accessory products. This policy explains our data
              practices for our online fashion store.
            </p>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              CUSTOMER DATA COLLECTION
            </h4>

            <ul className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-decimal pl-4">
              <li>
                Customer information (name, contact details, shipping address,
                payment details)
              </li>
              <li>
                Shopping and purchase history including favorite items,
                wishlists, and browsing patterns
              </li>
              <li>
                Search queries and product browsing behavior for personalized
                recommendations
              </li>
              <li>
                Account and login information for account security and order
                management
              </li>
              <li>
                Preferences for size, style, and color for better product
                suggestions
              </li>
              <li>
                Order and return metadata for shipping, delivery tracking, and
                service improvement
              </li>
              <li>
                Interaction data with our customer service and styling support
              </li>
              <li>
                Website usage analytics to improve user experience and platform
                functionality
              </li>
            </ul>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              CUSTOMER DATA USAGE
            </h4>

            <ul className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-disc pl-4">
              <li>
                To provide personalized fashion and outfit recommendations based
                on preferences
              </li>
              <li>
                To optimize product suggestions, sizing guides, and style
                matching
              </li>
              <li>
                To improve search functionality and browsing experience on our
                platform
              </li>
              <li>
                To manage order fulfillment, returns, and customer service
                requests
              </li>
              <li>
                To enhance website features and mobile app integrations for
                smooth shopping
              </li>
              <li>
                To deliver targeted promotions, newsletters, and product updates
              </li>
              <li>
                To provide support for styling advice, product inquiries, and
                order issues
              </li>
              <li>To analyze shopping trends and plan seasonal collections</li>
            </ul>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              CUSTOMER DATA SECURITY
            </h4>

            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              We implement industry-standard security measures to protect
              customer data, including encrypted transactions, secure storage of
              payment information, and controlled access to personal details.
              Order and account information is safeguarded to maintain
              confidentiality and trust.
            </p>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              BUSINESS PARTNERSHIPS
            </h4>

            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              Anonymous usage statistics may be shared with logistics providers,
              marketing partners, and trusted fashion suppliers for operational
              and service improvement purposes. No personal customer information
              is shared without explicit consent. All partnerships adhere to
              strict confidentiality and privacy standards.
            </p>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              CUSTOMER CONTROL
            </h4>

            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              Customers have complete control over their personal data,
              including account information, order history, and newsletter
              preferences. You can update your details, manage your preferences,
              or request account deletion at any time. For privacy inquiries,
              contact privacy@evzonesound.com.ng.
            </p>
          </div>
        )}

        {activeTab === "deliveryReturn" && (
          <div id="deliveryReturn" className="text-[#667085]">
            <h3 className="font-semibold text-sm md:text-base xl:text-lg mb-2">
              DELIVERY & RETURN POLICY - EVZONE SOUND GRID COM. LTD
            </h3>

            <p className="text-xs md:text-sm xl:text-base mb-4">
              Evzone Sound Grid Com. Ltd provides timely and reliable delivery
              of premium women&apos;s fashion products, including clothing and
              accessories, along with hassle-free return options for customer
              satisfaction.
            </p>

            <div className="mb-6">
              <h4 className="font-medium text-xs md:text-sm xl:text-base mb-2">
                Delivery & Shipping Systems
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                <li>
                  Fast and reliable delivery to all major cities nationwide
                </li>
                <li>
                  Tracking system for all orders with real-time status updates
                </li>
                <li>
                  Multiple shipping options including standard and express
                  delivery
                </li>
                <li>International shipping available for select items</li>
                <li>
                  Secure packaging to protect clothing and accessories during
                  transit
                </li>
                <li>Notifications for estimated delivery dates and updates</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-xs md:text-sm xl:text-base mb-2">
                Product Catalog & Organization
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-xs md:text-sm mb-1">
                    Clothing Categories
                  </h5>
                  <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                    <li>Dresses, tops, skirts, pants, and outerwear</li>
                    <li>Activewear and casual wear collections</li>
                    <li>Seasonal and limited-edition fashion items</li>
                    <li>Complete outfit sets for effortless styling</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-xs md:text-sm mb-1">
                    Accessories & Styling
                  </h5>
                  <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                    <li>Bags, purses, and backpacks</li>
                    <li>Jewelry, watches, and fashion accessories</li>
                    <li>Footwear including heels, sandals, and sneakers</li>
                    <li>Hats, scarves, and seasonal styling pieces</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-xs md:text-sm xl:text-base mb-2">
                Order Processing & Support
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-xs md:text-sm">
                    Order Quality Assurance:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                    <li>
                      All clothing and accessories are inspected before shipment
                    </li>
                    <li>Packaging ensures items remain clean and undamaged</li>
                    <li>Size and color accuracy is verified for each order</li>
                    <li>Returns are processed to maintain product integrity</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-xs md:text-sm">
                    Customer Support:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                    <li>
                      24/7 support for delivery inquiries and order issues
                    </li>
                    <li>
                      Assistance with tracking, shipping updates, and address
                      changes
                    </li>
                    <li>
                      Returns and exchanges handled efficiently and
                      professionally
                    </li>
                    <li>
                      Styling advice and product guidance available on request
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-xs md:text-sm xl:text-base mb-2">
                Return & Exchange Guidelines
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                <li>
                  Returns accepted within 14 days of delivery for unused items
                </li>
                <li>Items must be in original condition with tags intact</li>
                <li>Exchanges available for different sizes or colors</li>
                <li>Refunds processed promptly after item inspection</li>
                <li>
                  Non-returnable items include personalized or final-sale
                  products
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-xs md:text-sm xl:text-base mb-2">
                Customer Support
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                <li>Email: support@evzonesound.com.ng</li>
                <li>Phone: +234-801-234-5016</li>
                <li>Order Inquiries: orders@evzonesound.com.ng</li>
                <li>Styling Assistance: style@evzonesound.com.ng</li>
                <li>Website: www.evzonesound.com.ng</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "refundPolicy" && (
          <div id="refundPolicy" className="text-[#667085]">
            <h3 className="font-semibold text-sm md:text-base xl:text-lg mb-2">
              REFUND POLICY - EVZONE FASHION STORE
            </h3>
            <p className="text-xs md:text-sm xl:text-base mb-4">
              Effective Date: {new Date().toLocaleDateString("en-GB")}
            </p>

            <p className="text-xs md:text-sm xl:text-base mb-4">
              At Evzone Fashion Store, we are committed to providing
              high-quality women&apos;s clothing and accessories. Our refund
              policy ensures customer satisfaction while maintaining fair
              practices for purchased fashion products.
            </p>

            <ul className="list-disc pl-5 space-y-3 leading-[1.8] text-xs md:text-sm xl:text-base">
              <li>
                <span className="font-medium">1. Product Quality Refunds</span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Refunds within 14 days for damaged, defective, or incorrect
                    items
                  </li>
                  <li>
                    Full refund if product differs significantly from the
                    description or images
                  </li>
                  <li>
                    Size or color discrepancies refunds if items don&apos;t
                    match selected options
                  </li>
                  <li>
                    Material or stitching defects refunds if product quality is
                    below standards
                  </li>
                  <li>Refunds for missing components or accessories</li>
                </ul>
              </li>

              <li>
                <span className="font-medium">
                  2. Custom & Personalized Items
                </span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Custom orders are non-refundable unless defective or
                    incorrect
                  </li>
                  <li>
                    Personalized item errors qualify for exchange or partial
                    refund
                  </li>
                  <li>
                    All claims must be submitted within 7 days of delivery
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-medium">
                  3. Return & Exchange Guidelines
                </span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Returns accepted within 14 days of delivery for eligible
                    items
                  </li>
                  <li>
                    Items must be unused, unwashed, and with original tags
                    attached
                  </li>
                  <li>
                    Exchanges available for different sizes, colors, or styles
                  </li>
                  <li>Refunds processed promptly after item inspection</li>
                </ul>
              </li>

              <li>
                <span className="font-medium">4. Non-Refundable Items</span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Sale, final clearance, or limited-edition items</li>
                  <li>
                    Items damaged after delivery due to misuse or improper care
                  </li>
                  <li>Gift cards or vouchers</li>
                </ul>
              </li>

              <li>
                <span className="font-medium">5. Refund Request Process</span>
                <p className="mt-1">To request a refund:</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Email: refunds@evzonesound.com.ng</li>
                  <li>
                    Provide order number, product details, and reason for return
                  </li>
                  <li>Include photos if product is damaged or defective</li>
                  <li>Specify whether you prefer a refund or exchange</li>
                </ul>
              </li>

              <li>
                <span className="font-medium">6. Refund Processing Time</span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Refunds processed within 5–10 business days after item
                    inspection
                  </li>
                  <li>Payments returned using original payment method</li>
                  <li>
                    Exchanges shipped within 3–5 business days after approval
                  </li>
                </ul>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-xs md:text-sm xl:text-base mb-2">
                Contact Information
              </h4>
              <p className="text-xs md:text-sm xl:text-base">
                For refunds and support:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm xl:text-base">
                <li>Evzone Fashion Store</li>
                <li>Email: refunds@evzonesound.com.ng</li>
                <li>Customer Support: support@evzonesound.com.ng</li>
                <li>Phone: +234-801-234-5016</li>
                <li>Website: www.evzonesound.com.ng</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default EvzoneSoundGridPolicies;
