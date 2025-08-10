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
          At Evzone Sound Grid Com. Ltd, we specialize in premium audio-focused
          digital content including sound libraries, music production tools,
          audio books, and immersive multimedia experiences with
          professional-grade audio quality and cutting-edge sound technology.
        </span>
        <div className="flex gap-2 mt-3 xl:mt-8 text-[10px] xs:text-xs sm:text-sm slg:text-base leading-[140%] bg-[#F5F5F5] p-1 rounded-md transition">
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "termsOfUse"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("termsOfUse")}>
            Terms of use
          </button>
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "privacyPolicy"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("privacyPolicy")}>
            Privacy Policy
          </button>
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "deliveryReturn"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("deliveryReturn")}>
            Delivery & Return
          </button>
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "refundPolicy"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("refundPolicy")}>
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
              By purchasing and accessing audio-focused digital content from
              Evzone Sound Grid Com. Ltd, including sound libraries, music,
              audio books, and multimedia experiences, you agree to the
              following comprehensive terms:
            </p>

            <ul className="list-disc pl-5 mt-2 space-y-2 text-xs md:text-sm xl:text-base">
              <li>
                <span className="font-medium">
                  Premium Audio Content Library:
                </span>{" "}
                Evzone Sound Grid specializes in high-fidelity audio content
                including professional sound libraries, royalty-free music,
                sound effects, audio books, podcasts, immersive soundscapes, and
                spatial audio experiences designed for professional and creative
                use.
              </li>
              <li>
                <span className="font-medium">Sound Production Tools:</span> Our
                digital offerings include audio production software, sound
                design tools, mixing templates, mastering presets, and
                professional audio plugins optimized for music production, film
                scoring, and audio post-production workflows.
              </li>
              <li>
                <span className="font-medium">Audio Licensing Framework:</span>{" "}
                Sound content is licensed based on usage type including personal
                use, commercial use, broadcast licensing, and synchronization
                rights. Each license type has specific usage restrictions,
                attribution requirements, and territory limitations clearly
                defined at purchase.
              </li>
              <li>
                <span className="font-medium">Professional Audio Quality:</span>{" "}
                All audio content is delivered in professional formats including
                24-bit/96kHz WAV files, lossless FLAC, high-resolution
                streaming, and immersive audio formats like Dolby Atmos and
                binaural recordings for premium listening experiences.
              </li>
              <li>
                <span className="font-medium">Sound Grid Technology:</span> Our
                proprietary sound grid platform enables advanced audio search,
                intelligent content recommendations, real-time audio preview,
                and seamless integration with professional digital audio
                workstations (DAWs) and creative software.
              </li>
              <li>
                <span className="font-medium">
                  Audio Book & Podcast Collection:
                </span>{" "}
                Extensive library of professionally narrated audio books,
                original podcast series, educational audio content, and spoken
                word performances with chapter navigation, bookmarking, and
                speed control features.
              </li>
              <li>
                <span className="font-medium">
                  Creative Commons & Royalty-Free Content:
                </span>{" "}
                Curated selection of Creative Commons licensed content and
                royalty-free audio with clear usage rights documentation.
                Commercial use licensing available with transparent pricing and
                instant licensing confirmation.
              </li>
              <li>
                <span className="font-medium">
                  Audio Collaboration Features:
                </span>{" "}
                Platform includes collaborative features for audio professionals
                including shared playlists, project collaboration tools, version
                control for audio assets, and team licensing options for
                creative organizations.
              </li>
              <li>
                <span className="font-medium">
                  Immersive Audio Experiences:
                </span>{" "}
                Specialized content includes 3D audio experiences, VR/AR
                soundscapes, interactive audio installations, and experimental
                audio art designed for immersive media applications and spatial
                audio platforms.
              </li>
            </ul>

            <p className="mt-4 leading-[1.8] text-xs md:text-sm xl:text-base">
              <span className="font-medium">Audio Technology Integration:</span>{" "}
              Our platform integrates with professional audio software including
              Pro Tools, Logic Pro, Ableton Live, and other industry-standard
              DAWs for seamless workflow integration and direct content import.
            </p>

            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              <span className="font-medium">Sound Quality Guarantee:</span> All
              audio content undergoes professional mastering and quality control
              processes to ensure optimal sound quality, consistent levels, and
              format compatibility across professional and consumer audio
              systems.
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
              of audio professionals and content creators while providing
              premium sound libraries, music production tools, and immersive
              audio experiences. This policy explains our data practices for
              audio-focused digital services.
            </p>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              AUDIO PLATFORM DATA COLLECTION
            </h4>

            <ul className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-decimal pl-4">
              <li>
                Audio professional information (name, studio details, project
                requirements, creative specializations)
              </li>
              <li>
                Sound library usage data including download patterns, favorite
                genres, and creative project applications
              </li>
              <li>
                Audio search queries and content discovery patterns for
                personalized recommendations
              </li>
              <li>
                Digital audio workstation (DAW) integration data for workflow
                optimization
              </li>
              <li>
                Audio quality preferences and format selection for optimal
                content delivery
              </li>
              <li>
                Creative project metadata for licensing compliance and usage
                tracking
              </li>
              <li>
                Professional collaboration data for team projects and shared
                audio libraries
              </li>
              <li>
                Audio streaming behavior and playback analytics for platform
                improvement
              </li>
            </ul>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              AUDIO CONTENT DATA USAGE
            </h4>

            <ul className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-disc pl-4">
              <li>
                To provide personalized sound recommendations based on creative
                preferences and project requirements
              </li>
              <li>
                To optimize audio delivery quality and format selection for
                professional workflows
              </li>
              <li>
                To enhance sound search functionality and content discovery
                algorithms
              </li>
              <li>
                To facilitate professional licensing compliance and usage rights
                management
              </li>
              <li>
                To improve DAW integration and creative workflow compatibility
              </li>
              <li>
                To deliver targeted content updates and new release
                notifications
              </li>
              <li>
                To provide technical support for audio production and platform
                integration
              </li>
              <li>
                To analyze audio trends and develop new sound content categories
              </li>
            </ul>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              PROFESSIONAL AUDIO DATA SECURITY
            </h4>

            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              We implement professional-grade security measures for all audio
              content and user data including encrypted audio streaming, secure
              download protocols, and protected creative project information.
              Professional audio metadata is safeguarded with industry-standard
              security practices. Licensing compliance data is maintained with
              strict confidentiality protocols to protect commercial creative
              projects.
            </p>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              AUDIO INDUSTRY PARTNERSHIPS
            </h4>

            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              Anonymous usage statistics are shared with audio content creators
              and music publishers for royalty calculations and content
              optimization. Performance rights organizations receive necessary
              data for licensing compliance and royalty distribution. No
              individual creative project data is shared without explicit
              consent. All partnerships maintain strict confidentiality
              requirements for professional audio work.
            </p>

            <h4 className="text-sm sm:text-base lg:text-lg font-medium mt-4">
              CREATIVE PROFESSIONAL CONTROL
            </h4>

            <p className="mt-2 leading-[1.8] text-xs md:text-sm xl:text-base">
              Audio professionals have complete control over their creative data
              including project metadata, collaboration settings, and usage
              analytics. Sound library preferences can be customized for privacy
              while maintaining personalization benefits. Professional licensing
              records remain accessible for compliance and tax purposes. For
              audio platform privacy inquiries, contact
              privacy@evzonesound.com.ng.
            </p>
          </div>
        )}

        {activeTab === "deliveryReturn" && (
          <div id="deliveryReturn" className="text-[#667085]">
            <h3 className="font-semibold text-sm md:text-base xl:text-lg mb-2">
              AUDIO CONTENT DELIVERY POLICY - EVZONE SOUND GRID COM. LTD
            </h3>

            <p className="text-xs md:text-sm xl:text-base mb-4">
              Evzone Sound Grid Com. Ltd provides professional-grade audio
              content delivery with high-fidelity streaming, instant downloads,
              and comprehensive support for audio professionals, musicians, and
              content creators worldwide.
            </p>

            <div className="mb-6">
              <h4 className="font-medium text-xs md:text-sm xl:text-base mb-2">
                Professional Audio Delivery Systems
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                <li>
                  Instant high-resolution audio downloads with 24-bit/96kHz
                  quality options
                </li>
                <li>
                  Professional streaming with lossless audio codecs and
                  real-time preview
                </li>
                <li>
                  Multiple format delivery including WAV, FLAC, AIFF, and
                  compressed formats
                </li>
                <li>
                  Batch download capabilities for large sound library
                  acquisitions
                </li>
                <li>
                  Direct DAW integration for seamless audio import and project
                  workflow
                </li>
                <li>
                  Cloud-based audio library with synchronization across multiple
                  devices
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-xs md:text-sm xl:text-base mb-2">
                Sound Library & Content Organization
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-xs md:text-sm mb-1">
                    Sound Libraries
                  </h5>
                  <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                    <li>
                      Categorized sound collections by genre, instrument, and
                      mood
                    </li>
                    <li>
                      Professional sample packs with stems and individual
                      elements
                    </li>
                    <li>
                      Royalty-free music with comprehensive licensing
                      documentation
                    </li>
                    <li>
                      Sound effects library with detailed metadata and tags
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-xs md:text-sm mb-1">
                    Audio Books & Spoken Content
                  </h5>
                  <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                    <li>
                      High-quality narrated audio books with chapter navigation
                    </li>
                    <li>
                      Professional podcast series and educational audio content
                    </li>
                    <li>
                      Immersive audio experiences and spatial sound productions
                    </li>
                    <li>
                      Interactive audio content with user-controlled elements
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-xs md:text-sm xl:text-base mb-2">
                Professional Audio Tools Integration
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                <li>
                  Native plugin support for major DAWs including Pro Tools,
                  Logic, and Ableton
                </li>
                <li>
                  Audio production template libraries with project files and
                  MIDI data
                </li>
                <li>
                  Mastering preset collections for professional audio finishing
                </li>
                <li>Real-time audio analysis tools and spectrum analyzers</li>
                <li>Collaborative audio sharing platform for team projects</li>
                <li>Version control system for audio asset management</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-xs md:text-sm xl:text-base mb-2">
                Audio Quality & Technical Support
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-xs md:text-sm">
                    Quality Assurance:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                    <li>
                      Professional mastering and quality control for all audio
                      content
                    </li>
                    <li>
                      Format compatibility testing across major audio software
                      platforms
                    </li>
                    <li>
                      Audio level optimization and dynamic range preservation
                    </li>
                    <li>
                      Metadata accuracy verification for search and organization
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-xs md:text-sm">
                    Technical Support:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                    <li>
                      24/7 technical support for audio professionals and content
                      creators
                    </li>
                    <li>
                      DAW integration assistance and troubleshooting support
                    </li>
                    <li>
                      Audio format conversion services and compatibility
                      solutions
                    </li>
                    <li>
                      Professional consultation for audio production workflows
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-xs md:text-sm xl:text-base mb-2">
                Licensing & Usage Rights Guarantee
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                <li>
                  Clear licensing documentation with all audio content purchases
                </li>
                <li>
                  Commercial use rights verification and compliance support
                </li>
                <li>
                  Sync licensing assistance for film, TV, and advertising
                  applications
                </li>
                <li>
                  Royalty-free guarantee with comprehensive legal protection
                </li>
                <li>
                  Usage rights expansion options for growing creative projects
                </li>
                <li>
                  Professional licensing consultation for complex commercial
                  applications
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-xs md:text-sm xl:text-base mb-2">
                Audio Professional Support
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base">
                <li>Audio Support: audio@evzonesound.com.ng</li>
                <li>Technical Support: support@evzonesound.com.ng</li>
                <li>Licensing: licensing@evzonesound.com.ng</li>
                <li>Professional Services: pro@evzonesound.com.ng</li>
                {/* <li>Phone: +234-801-234-5016</li> */}
                <li>Website: www.evzonesound.com.ng</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "refundPolicy" && (
          <div id="refundPolicy" className="text-[#667085]">
            <h3 className="font-semibold text-sm md:text-base xl:text-lg mb-2">
              REFUND POLICY - EVZONE SOUND GRID COM. LTD
            </h3>
            <p className="text-xs md:text-sm xl:text-base mb-4">
              Effective Date: {new Date().toLocaleDateString("en-GB")}
            </p>

            <p className="text-xs md:text-sm xl:text-base mb-4">
              At Evzone Sound Grid Com. Ltd, we are committed to providing
              exceptional audio content and professional-grade sound tools that
              meet the demanding standards of audio professionals, musicians,
              and content creators. Our refund policy ensures satisfaction while
              respecting audio licensing agreements.
            </p>

            <ul className="list-disc pl-5 space-y-3 leading-[1.8] text-xs md:text-sm xl:text-base">
              <li>
                <span className="font-medium">
                  1. Audio Content Quality Refunds
                </span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    48-hour refund window for audio quality issues including
                    distortion, clipping, or format problems
                  </li>
                  <li>
                    Full refund for sound libraries that don&apos;t match
                    advertised quality specifications
                  </li>
                  <li>
                    Audio format compatibility refunds if content cannot be used
                    in specified professional software
                  </li>
                  <li>
                    Metadata accuracy refunds for incorrectly tagged or
                    mislabeled audio content
                  </li>
                  <li>
                    Professional standards refund if audio doesn&apos;t meet
                    broadcast or commercial quality requirements
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-medium">
                  2. Professional Audio Tool Refunds
                </span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    30-day satisfaction guarantee for audio production tools and
                    plugins
                  </li>
                  <li>
                    DAW compatibility refunds if tools cannot integrate with
                    advertised software
                  </li>
                  <li>
                    Professional workflow refunds for tools that don&apos;t
                    enhance production efficiency
                  </li>
                  <li>
                    Feature functionality refunds if advertised capabilities are
                    not present
                  </li>
                  <li>
                    Audio processing quality refunds for tools that degrade
                    sound quality
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-medium">
                  3. Licensing & Usage Rights Refunds
                </span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Licensing compliance refunds if usage rights don&apos;t
                    match project requirements
                  </li>
                  <li>
                    Commercial use refunds if licensing terms restrict intended
                    professional applications
                  </li>
                  <li>
                    Sync licensing refunds for content that cannot be used in
                    film/TV applications as advertised
                  </li>
                  <li>
                    Territory restriction refunds if geographic limitations
                    aren&apos;t clearly disclosed
                  </li>
                  <li>
                    Attribution requirement refunds if licensing terms change
                    after purchase
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-medium">
                  4. Audio Book & Spoken Content Refunds
                </span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Narration quality refunds for audio books with poor
                    recording or performance issues
                  </li>
                  <li>
                    Content accuracy refunds if audio doesn&apos;t match written
                    descriptions
                  </li>
                  <li>
                    Chapter navigation refunds if promised features don&apos;t
                    function properly
                  </li>
                  <li>
                    Audio quality refunds for spoken content with technical
                    defects
                  </li>
                  <li>
                    Language or accent clarity refunds if content is difficult
                    to understand
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-medium">
                  5. Non-Refundable Audio Content
                </span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Successfully downloaded audio content used in completed
                    creative projects
                  </li>
                  <li>
                    Custom audio production services delivered according to
                    specifications
                  </li>
                  <li>
                    Audio content accessed and auditioned beyond preview
                    timeframes
                  </li>
                  <li>
                    Licensing rights already utilized in commercial or published
                    applications
                  </li>
                  <li>
                    Collaborative audio projects with shared access among team
                    members
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-medium">
                  6. Professional Audio Refund Process
                </span>
                <p className="mt-1">To request audio content refunds:</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Email: refunds@evzonesound.com.ng</li>
                  <li>Professional Support: +234-801-234-5016 (ext. 300)</li>
                  <li>
                    Provide detailed technical specifications and quality
                    concerns
                  </li>
                  <li>
                    Include project context and intended professional
                    application
                  </li>
                  <li>
                    Submit audio samples or screenshots demonstrating quality
                    issues
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-medium">
                  7. Audio Technical Assessment
                </span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Professional audio engineer review of all quality-related
                    refund requests
                  </li>
                  <li>
                    Technical analysis of format compatibility and software
                    integration issues
                  </li>
                  <li>
                    Licensing expert consultation for usage rights and
                    compliance concerns
                  </li>
                  <li>
                    Creative professional consultation to explore alternative
                    solutions
                  </li>
                  <li>
                    Independent audio quality verification for disputed content
                    standards
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-medium">
                  8. Professional Audio Solutions
                </span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Audio content exchange for alternative sound libraries or
                    tools
                  </li>
                  <li>
                    Professional credits applicable to future audio purchases
                    and licenses
                  </li>
                  <li>
                    Custom audio production services as compensation for quality
                    issues
                  </li>
                  <li>Extended licensing terms or usage rights upgrades</li>
                  <li>
                    Priority access to new releases and exclusive professional
                    content
                  </li>
                </ul>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-xs md:text-sm xl:text-base mb-2">
                Contact Information
              </h4>
              <p className="text-xs md:text-sm xl:text-base">
                For professional audio refunds and support:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm xl:text-base">
                <li>Evzone Sound Grid Com. Ltd</li>
                <li>Email: refunds@evzonesound.com.ng</li>
                <li>Audio Support: audio@evzonesound.com.ng</li>
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
