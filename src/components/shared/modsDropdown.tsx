import Link from "next/link";
import React from "react";

const ModsDropdown = ({ hideMenu }: { hideMenu: boolean }) => {
  return (
    <ul
      onMouseLeave={() => (hideMenu = false)}
      className={`w-[300px] fixed top-[70px] h-[calc(100vh-70px)] overflow-y-auto overflow-x-hidden tiny_scrollbar right-0 ${hideMenu ? "transform translate-x-[300px]" : "transform translate-x-0"} transition-transform duration-300 bg-white z-[500000] flex items-start justify-start gap-3 flex-col`}
    >
      <li className="right_dropdown-item">
        <div className="bg-primary text-white p-3">Moderator documentation &amp; forums</div>

        <div className="flex flex-col gap-2 align-start justify-start">
          <ul>
            <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3 m-0">
              <Link href="/forum/2156">Mod forum</Link>
            </li>
            <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3 m-0">
              <Link href="/?sp=moderators&amp;sp_mode=moderator_resources">Mod reference</Link>
            </li>
            <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3 m-0">
              <Link href="/?sp=scope_mods">Scope guide</Link>
            </li>
          </ul>
        </div>

        <div className="bg-primary text-white p-3">KudoZ</div>
        <div className="flex flex-col gap-2 align-start justify-start">
          <ul>
            <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3 m-0">
              <Link href="/?sp=k_c">Abuse tool</Link>
            </li>
            <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3 m-0">
              <Link href="/?sp=kel">Edit log</Link>
            </li>
            <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3 m-0">
              <Link href="/?sp=kudoz_edit_apply&amp;sp_mode=vet">Edit apps</Link>
            </li>
            <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3 m-0">
              <Link href="/?sp=kudoz_control">Stats</Link>
            </li>
          </ul>
        </div>

        <div className="bg-primary text-white p-3">More moderator tools</div>
        <div className="flex flex-col gap-2 align-start justify-start">
          <ul>
            <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3 m-0">
              <Link href="/?sp=admin/vet">Vetting</Link>
            </li>
            <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3 m-0">
              <Link href="/?sp=admin/abuse">Log search</Link>
            </li>
            <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3 m-0">
              <Link href="/?sp=admin/edit_acl">Access control</Link>
            </li>
            <li className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-[300px] p-3 m-0">
              <Link href="/?sp=charset_issues&amp;sp_mode=admin">Charset issues</Link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default ModsDropdown;
