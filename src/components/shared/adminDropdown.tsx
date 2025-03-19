import Link from "next/link";
import React from "react";

const AdminDropdown = ({ hideMenu }: { hideMenu: boolean }) => {
  const toggleSideMenu = (id: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const elements = document.querySelectorAll(".nav__dropdown__submenu");
    elements.forEach((element) => {
      element.classList.remove("right-[300px]");
      element.classList.add("right-[-300px]");
    });

    const element = document.getElementById(id);
    if (element) {
      element.classList.remove("right-[-300px]");
      element.classList.add("right-[300px]");
    }
  };

  return (
    <div
      onMouseLeave={() => (hideMenu = false)}
      className={`w-[600px] top-[70px] h-[calc(100vh-70px)] flex justify-end fixed right-0 ${hideMenu ? "transform translate-x-[600px]" : "transform translate-x-0"}`}
    >
      <ul className="h-[calc(100vh-70px)] overflow-y-auto overflow-x-hidden tiny_scrollbar bg-white z-[500000] flex items-end justify-start gap-3 flex-col">
        <li className="w-[300px] right_dropdown-item flex items-start justify-start flex-col">
          <div className="" data-submenu-id="admin_promo_drop">
            <Link
              onClick={(e) => toggleSideMenu("admin_promo_drop", e)}
              className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3"
              href="#"
            >
              <span className="material-symbols-outlined">chevron_left</span>
              <span className="submenu-label">Advertising &amp; promo</span>
            </Link>
            <div
              id="admin_promo_drop"
              className="nav__dropdown__submenu w-[300px] fixed top-0 h-[calc(100vh-70px)] overflow-y-auto overflow-x-hidden tiny_scrollbar right-[-300px] bg-white z-[500000]"
            >
              <div className="bg-primary text-white flex items-center justify-start gap-2 w-[300px] p-3">
                Advertising &amp; promo
              </div>
              <div className="flex flex-col items-center justify-start">
                <ul>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="https://localhost:8443/?sp=admin/promo">Promotion</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/promo&amp;sp_mode=popup">Popups</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="https://localhost:8443/?sp=admin/adv_query_mailer">
                      Query mailer
                    </Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="https://localhost:8443/?sp=admin/campaigns">
                      Membership campaigns
                    </Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/marketing_calendar">Marketing calendar</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="" data-submenu-id="admin_mod_tools_drop">
            <Link
              onClick={(e) => toggleSideMenu("admin_mod_tools_drop", e)}
              className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3"
              href="#"
            >
              <span className="material-symbols-outlined">chevron_left</span>
              <span className="submenu-label">Moderator tools</span>
            </Link>
            <div
              id="admin_mod_tools_drop"
              className="nav__dropdown__submenu w-[300px] fixed top-0 h-[calc(100vh-70px)] overflow-y-auto overflow-x-hidden tiny_scrollbar right-[-300px] bg-white z-[500000]"
            >
              <div className="bg-primary text-white flex items-center justify-start gap-2 w-[300px] p-3">
                Moderator tools
              </div>
              <div className="flex flex-col items-center justify-start">
                <ul>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=k_c">KudoZ abuse tool</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=kel">KudoZ edit log</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=kudoz_edit_apply&amp;sp_mode=vet">KudoZ edit apps</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=kudoz_control">KudoZ stats</Link>
                  </li>
                </ul>
                <ul>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/vet">Vetting</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/abuse">Log search</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/edit_acl">Access control</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=charset_issues&amp;sp_mode=admin">Charset issues</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="" data-submenu-id="admin_logs_drop">
            <Link
              onClick={(e) => toggleSideMenu("admin_logs_drop", e)}
              className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3"
              href="#"
            >
              <span className="material-symbols-outlined">chevron_left</span>
              <span className="submenu-label">Logs &amp; stats</span>
            </Link>
            <div
              id="admin_logs_drop"
              className="nav__dropdown__submenu w-[300px] fixed top-0 h-[calc(100vh-70px)] overflow-y-auto overflow-x-hidden tiny_scrollbar right-[-300px] bg-white z-[500000]"
            >
              <div className="bg-primary text-white flex items-center justify-start gap-2 w-[300px] p-3">
                Logs &amp; stats
              </div>
              <div className="flex flex-col items-center justify-start mobile-column">
                <ul>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/membership">Membership dashboard</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/tte">Training, tools and events</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/tv_events">Tv events</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/pro_bono">Pro bono</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/membership-package-sales">Membership package sales</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/users">Users</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/site_logs">Site logs</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/growth">Growth</Link>
                  </li>
                </ul>
                <ul>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/mobile">Mobile Stats</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/term_search">Term search stats</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/ph_stats">Project history stats</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/search_logs">Site search logs</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/pastey">Pastey API usage</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/heartbeat">Heartbeat</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/profile">Profile stats</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/sa">Country stats</Link>
                  </li>
                </ul>
                <ul>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/job_dir_stats">Job / directory stats</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/job-post">Job posting</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/cloud_jobs/jobs">Cloud jobs</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/proz-find-admin">ProZ Find™ stats</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/homepage-version">Homepage version usage</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/kudoz-version">KudoZ version usage</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/kudoz">KudoZ stats</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/ratescalculator-version">
                      Rates calculator version usage
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/alerts">Admin alerts</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/discussion_stats">Discussion stats</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/social_network_stats">Social network stats</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/conversions">Conversions</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/workspaces/admin">Translation center</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/secure-pro-program">SecurePRO™ program dashboard</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/success">Success dashboard</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/blueboard">Blue Board dashboard</Link>
                  </li>
                </ul>
                <ul>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/localization">Localization dashboard</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/vendor-services">Vendor services</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/membership_benefits">Membership benefits dashboard</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/ai">AI dashboard</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/premium-websites">Premium websites dashboard</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/glossary_dashboard">Glossaries dashboard</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="" data-submenu-id="admin_tools_drop">
            <Link
              onClick={(e) => toggleSideMenu("admin_tools_drop", e)}
              className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3"
              href="#"
            >
              <span className="material-symbols-outlined">chevron_left</span>
              <span className="submenu-label">Tools</span>
            </Link>
            <div
              id="admin_tools_drop"
              className="nav__dropdown__submenu w-[300px] fixed top-0 h-[calc(100vh-70px)] overflow-y-auto overflow-x-hidden tiny_scrollbar right-[-300px] bg-white z-[500000]"
            >
              <div className="bg-primary text-white flex items-center justify-start gap-2 w-[300px] p-3">
                Tools
              </div>
              <div className="flex flex-col items-center justify-start mobile-column">
                <ul>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=support/process">Process support</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="https://github.com/ProZcom/web-app/issues/new">
                      Request development
                    </Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/transactions">Transactions</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/pay/admin">ProZ*Pay</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/store_items">Store items</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/search_doers">Search users</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/membership_management">Membership management</Link>
                  </li>
                </ul>
                <ul>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/files_uploader">File uploader</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/files_deleter">File deleter</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/url_shortener">URL shortener</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/translator-training/admin/">Trainings</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/applications">Application system</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/pro_tagging">PRO tagging</Link>
                  </li>
                </ul>
                <ul>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=host/admin">Hosting</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/pollphp/admin">Polls admin</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=plat_control">Plat controls</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=perms">Perm controls</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/siteguide">Site guide</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/vet&amp;sp_mode=social-network-jobs">Facebook jobs</Link>
                  </li>
                </ul>
                <ul>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/kudoz_gbk">GBK panel</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/request_passwords">Request pwd change</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=pfe_market">Companies by matching activity</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/native_variants">Language variants</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="" data-submenu-id="recruitment_and_hires_drop">
            <Link
              onClick={(e) => toggleSideMenu("recruitment_and_hires_drop", e)}
              className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3"
              href="#"
            >
              <span className="material-symbols-outlined">chevron_left</span>
              <span className="submenu-label">Recruitment &amp; hiring</span>
            </Link>
            <div
              id="recruitment_and_hires_drop"
              className="nav__dropdown__submenu w-[300px] fixed top-0 h-[calc(100vh-70px)] overflow-y-auto overflow-x-hidden tiny_scrollbar right-[-300px] bg-white z-[500000]"
            >
              <div className="bg-primary text-white flex items-center justify-start gap-2 w-[300px] p-3">
                Recruitment &amp; hiring
              </div>
              <div className="flex flex-col items-center justify-start">
                <ul>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/matching">Matching dashboard / activity feed</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/business/activity">Activity overview</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/business/activity-details">Activity by business</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/business/search-stats">Business directory search stats</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/businesses">Businesses at ProZ.com</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <hr />
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/recruiting-tokens/admin">Token transactions</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/proz-vendors/admin">Known hires</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <hr />
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/job_dir_stats">Job / directory stats</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/job-post">Job posting</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/proz-find-admin">ProZ Find™ stats</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/ph_stats">Project history stats</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <hr />
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/pay/admin">ProZ*Pay for staff</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/admin/membership/list?criteria[membership_type]=all_business">
                      Business memberships
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="" data-submenu-id="admin_dev_drop">
            <Link
              onClick={(e) => toggleSideMenu("admin_dev_drop", e)}
              className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3"
              href="#"
            >
              <span className="material-symbols-outlined">chevron_left</span>
              <span className="submenu-label">Developer Tools &amp; Docs</span>
            </Link>
            <div
              id="admin_dev_drop"
              className="nav__dropdown__submenu w-[300px] fixed top-0 h-[calc(100vh-70px)] overflow-y-auto overflow-x-hidden tiny_scrollbar right-[-300px] bg-white z-[500000]"
            >
              <div className="bg-primary text-white flex items-center justify-start gap-2 w-[300px] p-3">
                Developer Tools &amp; Docs
              </div>
              <div className="flex flex-col items-center justify-start">
                <ul>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="https://github.com/ProZcom/web-app/issues">GitHub Issues</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="https://github.com/orgs/ProZcom/projects">GitHub Projects</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="http://staff.proz.com/staff_wiki/index.php/Category:Dev_overview">
                      "Dev overview" manuals
                    </Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/frontend-cheatsheet">Frontend Cheatsheet</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="https://machoman.syr.proz.com/pma/">phpMyAdmin</Link>
                  </li>
                </ul>
                <ul>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="https://www.proz.com/?sp=admin/performance">
                      Site / query performance
                    </Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/third_party">Third-party software</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/seo">SEO tools</Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/database">Database introspection</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="" data-submenu-id="admin_sp_drop">
            <Link
              onClick={(e) => toggleSideMenu("admin_sp_drop", e)}
              className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3"
              href="#"
            >
              <span className="material-symbols-outlined">chevron_left</span>
              <span className="submenu-label">SP Management</span>
            </Link>
            <div
              id="admin_sp_drop"
              className="nav__dropdown__submenu w-[300px] fixed top-0 h-[calc(100vh-70px)] overflow-y-auto overflow-x-hidden tiny_scrollbar right-[-300px] bg-white z-[500000]"
            >
              <div className="bg-primary text-white flex items-center justify-start gap-2 w-[300px] p-3">
                SP Management
              </div>
              <div className="flex flex-col items-center justify-start">
                <ul>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/sps&amp;sp_mode=sps&amp;sp_submode=mod_sp&amp;sp_id=7">
                      Edit Current SP
                    </Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp_ls=index&amp;submit=Go&amp;sp=admin/growth&amp;stat_ls=SP+page+views">
                      SP Growth
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href=" /?sp=admin/sps&amp;sp_mode=sps&amp;sp_submode=add_sp">
                      Create New SP
                    </Link>
                  </li>
                  <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3">
                    <Link href="/?sp=admin/sps">SPs Admin</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li className="w-[300px] right_dropdown-item flex items-start justify-start flex-col">
          <div className="divider"></div>
        </li>

        <li className="w-[300px] right_dropdown-item flex items-start justify-start flex-col">
          <Link
            className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3"
            href="https://staff.proz.com/staff_wiki/index.php/Main_Page"
          >
            <i className="material-symbols-outlined">library_books</i>
            <span className="submenu-label">Staff Wiki</span>
          </Link>
        </li>

        <li className="w-[300px] right_dropdown-item flex items-start justify-start flex-col">
          <Link
            className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3"
            href="/wiki-search"
          >
            <i className="material-symbols-outlined">search</i>
            <span className="submenu-label">Staff Wiki search</span>
          </Link>
        </li>

        <li className="w-[300px] right_dropdown-item flex items-start justify-start flex-col">
          <Link
            className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3"
            href="/forum/78"
          >
            <i className="material-symbols-outlined">forum</i>
            <span className="submenu-label">Staff Discussions</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminDropdown;
